import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { sendContactEmail } from "./emailService";
import { sendContactEmail as sendContactEmailAlternative } from "./emailServiceAlternative";
import { log } from "./vite";

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

      // Send email notification
      try {
        log('Attempting to send email using primary method...', 'contact');
        const emailSent = await sendContactEmail(message);

        if (emailSent) {
          log('Contact form email sent successfully using primary method', 'contact');
        } else {
          log('Failed to send contact form email using primary method, trying alternative method...', 'contact');

          // Try alternative method
          const alternativeEmailSent = await sendContactEmailAlternative(message);
          if (alternativeEmailSent) {
            log('Contact form email sent successfully using alternative method', 'contact');
          } else {
            log('Failed to send contact form email using alternative method', 'contact');
          }
        }
      } catch (emailError) {
        log(`Error sending contact form email: ${emailError instanceof Error ? emailError.message : String(emailError)}`, 'contact');
        // We don't want to fail the request if email sending fails
      }

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

  // Test email endpoint (for debugging only)
  app.get('/api/test-email', async (req, res) => {
    try {
      log('Test email endpoint called', 'test');

      // Create a test message
      const testMessage = {
        id: 0,
        name: 'Test User',
        email: 'test@example.com',
        subject: 'Test Email',
        service: 'testing',
        message: 'This is a test message to verify email functionality.',
        timestamp: new Date().toISOString(),
        responded: false
      };

      // Try both email methods
      log('Attempting to send test email using primary method...', 'test');
      const primaryResult = await sendContactEmail(testMessage);

      log('Attempting to send test email using alternative method...', 'test');
      const alternativeResult = await sendContactEmailAlternative(testMessage);

      res.status(200).json({
        success: true,
        primaryMethod: primaryResult ? 'success' : 'failed',
        alternativeMethod: alternativeResult ? 'success' : 'failed',
        message: 'Test email process completed. Check server logs for details.'
      });
    } catch (error) {
      console.error("Error sending test email:", error);
      res.status(500).json({
        success: false,
        message: "Failed to send test email",
        error: error instanceof Error ? error.message : String(error)
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
