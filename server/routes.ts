import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate the request body using the schema
      const contactData = insertContactSchema.parse(req.body);
      
      // Add timestamp
      const timestamp = new Date().toISOString();
      
      // Save the contact message
      const message = await storage.createContactMessage({
        ...contactData,
        timestamp,
        responded: false
      });
      
      res.status(201).json({ 
        success: true, 
        message: "Contact message received successfully",
        id: message.id
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error("Error saving contact message:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to save contact message" 
        });
      }
    }
  });

  // Get all contact messages (could be protected in a real app)
  app.get('/api/contact', async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.status(200).json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contact messages" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
