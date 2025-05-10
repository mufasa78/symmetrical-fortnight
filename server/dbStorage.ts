import { eq } from 'drizzle-orm';
import { getDb } from './db';
import { log } from './vite';
import { users, contactMessages, type User, type InsertUser, type ContactMessage, type InsertContactMessage } from '@shared/schema';
import { IStorage } from './storage';

export class DbStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    try {
      const db = getDb();
      if (!db) {
        log('Database not available for getUser', 'dbStorage');
        return undefined;
      }
      
      const result = await db.select().from(users).where(eq(users.id, id));
      return result[0];
    } catch (error) {
      log(`Error in getUser: ${error instanceof Error ? error.message : String(error)}`, 'dbStorage');
      return undefined;
    }
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    try {
      const db = getDb();
      if (!db) {
        log('Database not available for getUserByUsername', 'dbStorage');
        return undefined;
      }
      
      const result = await db.select().from(users).where(eq(users.username, username));
      return result[0];
    } catch (error) {
      log(`Error in getUserByUsername: ${error instanceof Error ? error.message : String(error)}`, 'dbStorage');
      return undefined;
    }
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    try {
      const db = getDb();
      if (!db) {
        throw new Error('Database not available for createUser');
      }
      
      const result = await db.insert(users).values(insertUser).returning();
      if (!result[0]) {
        throw new Error('Failed to create user');
      }
      
      return result[0];
    } catch (error) {
      log(`Error in createUser: ${error instanceof Error ? error.message : String(error)}`, 'dbStorage');
      throw error;
    }
  }
  
  async createContactMessage(messageData: InsertContactMessage & { timestamp: string, responded: boolean }): Promise<ContactMessage> {
    try {
      const db = getDb();
      if (!db) {
        throw new Error('Database not available for createContactMessage');
      }
      
      const result = await db.insert(contactMessages).values({
        ...messageData,
        service: messageData.service || null
      }).returning();
      
      if (!result[0]) {
        throw new Error('Failed to create contact message');
      }
      
      return result[0];
    } catch (error) {
      log(`Error in createContactMessage: ${error instanceof Error ? error.message : String(error)}`, 'dbStorage');
      throw error;
    }
  }
  
  async getAllContactMessages(): Promise<ContactMessage[]> {
    try {
      const db = getDb();
      if (!db) {
        log('Database not available for getAllContactMessages', 'dbStorage');
        return [];
      }
      
      return await db.select().from(contactMessages).orderBy(contactMessages.timestamp);
    } catch (error) {
      log(`Error in getAllContactMessages: ${error instanceof Error ? error.message : String(error)}`, 'dbStorage');
      return [];
    }
  }
}
