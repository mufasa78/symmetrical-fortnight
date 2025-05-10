import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { contactMessages, users } from '@shared/schema';
import { log } from './vite';

// Initialize postgres client with the connection string from environment variables
let client: ReturnType<typeof postgres> | null = null;
let db: ReturnType<typeof drizzle> | null = null;

export async function initDb() {
  try {
    const connectionString = process.env.DATABASE_URL;
    
    if (!connectionString) {
      log('DATABASE_URL environment variable is not set. Using in-memory storage instead.', 'database');
      return null;
    }
    
    log('Initializing database connection...', 'database');
    
    // Create postgres client
    client = postgres(connectionString, { max: 10 });
    
    // Create drizzle instance
    db = drizzle(client, { schema: { users, contactMessages } });
    
    log('Database connection initialized successfully', 'database');
    return db;
  } catch (error) {
    log(`Error initializing database: ${error instanceof Error ? error.message : String(error)}`, 'database');
    return null;
  }
}

export function getDb() {
  if (!db) {
    log('Database not initialized. Call initDb() first.', 'database');
    return null;
  }
  return db;
}

export async function closeDb() {
  if (client) {
    await client.end();
    log('Database connection closed', 'database');
  }
}
