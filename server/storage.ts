import { users, type User, type InsertUser, type ContactMessage, type InsertContactMessage } from "@shared/schema";
import { log } from "./vite";
import { initDb } from "./db";
import { DbStorage } from "./dbStorage";

// Interface for storage operations
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(message: InsertContactMessage & { timestamp: string, responded: boolean }): Promise<ContactMessage>;
  getAllContactMessages(): Promise<ContactMessage[]>;
}

// In-memory storage implementation for fallback
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  currentUserId: number;
  currentContactId: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    log('Using in-memory storage', 'storage');
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactMessage(messageData: InsertContactMessage & { timestamp: string, responded: boolean }): Promise<ContactMessage> {
    const id = this.currentContactId++;
    const message: ContactMessage = {
      ...messageData,
      id,
      service: messageData.service || null
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getAllContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
}

// Initialize storage based on database availability
let storageInstance: IStorage;

export async function initStorage(): Promise<IStorage> {
  try {
    // Try to initialize the database
    const db = await initDb();

    if (db) {
      log('Using database storage', 'storage');
      storageInstance = new DbStorage();
    } else {
      log('Database initialization failed, falling back to in-memory storage', 'storage');
      storageInstance = new MemStorage();
    }

    return storageInstance;
  } catch (error) {
    log(`Error initializing storage: ${error instanceof Error ? error.message : String(error)}`, 'storage');
    log('Falling back to in-memory storage', 'storage');
    storageInstance = new MemStorage();
    return storageInstance;
  }
}

// Default to in-memory storage until properly initialized
export const storage = new MemStorage();
