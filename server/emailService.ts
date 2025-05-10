import nodemailer from 'nodemailer';
import { type ContactMessage } from '@shared/schema';
import { log } from './vite';

// Using nodemailer's built-in types instead of custom interface

// Create a transporter with environment variables
const createTransporter = () => {
  // Check if email configuration is available
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  // Log email configuration (without password)
  log(`Email Configuration - User: ${emailUser}`, 'email');

  if (!emailUser || !emailPass) {
    log('Email configuration is missing. Emails will not be sent.', 'email');
    return null;
  }

  // Use Gmail service directly instead of custom SMTP configuration
  const config = {
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
    // Add TLS options to avoid certificate issues
    tls: {
      rejectUnauthorized: false // Helps with self-signed certificates
    },
    // Add debug option to see detailed SMTP communication
    debug: true,
    logger: true
  };

  log('Creating Gmail email transporter...', 'email');
  return nodemailer.createTransport(config);
};

// Format contact message into HTML
const formatContactMessageHtml = (contact: ContactMessage): string => {
  return `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${contact.name}</p>
    <p><strong>Email:</strong> ${contact.email}</p>
    <p><strong>Subject:</strong> ${contact.subject}</p>
    <p><strong>Service:</strong> ${contact.service || 'Not specified'}</p>
    <p><strong>Message:</strong></p>
    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
      ${contact.message.replace(/\n/g, '<br>')}
    </div>
    <p><strong>Timestamp:</strong> ${new Date(contact.timestamp).toLocaleString()}</p>
  `;
};

// Send contact form email
export const sendContactEmail = async (contact: ContactMessage): Promise<boolean> => {
  try {
    log('Starting email sending process...', 'email');
    const transporter = createTransporter();

    if (!transporter) {
      log('Email transporter not available. Email not sent.', 'email');
      return false;
    }

    const recipientEmail = process.env.CONTACT_EMAIL || 'helpwithmufasa@proton.me';
    log(`Sending email to: ${recipientEmail}`, 'email');

    const mailOptions = {
      from: `"StudentProjectPro Contact" <${process.env.EMAIL_USER}>`,
      to: recipientEmail,
      subject: `New Contact: ${contact.subject}`,
      html: formatContactMessageHtml(contact),
      replyTo: contact.email,
      // Add text version as fallback
      text: `New Contact Form Submission\n\nName: ${contact.name}\nEmail: ${contact.email}\nSubject: ${contact.subject}\nService: ${contact.service || 'Not specified'}\n\nMessage:\n${contact.message}\n\nTimestamp: ${new Date(contact.timestamp).toLocaleString()}`
    };

    log('Mail options prepared, attempting to send...', 'email');
    log(`From: ${mailOptions.from}`, 'email');
    log(`To: ${mailOptions.to}`, 'email');
    log(`Subject: ${mailOptions.subject}`, 'email');

    // Verify SMTP connection before sending
    log('Verifying SMTP connection...', 'email');
    await transporter.verify();
    log('SMTP connection verified successfully', 'email');

    const info = await transporter.sendMail(mailOptions);
    log(`Email sent: ${info.messageId}`, 'email');

    // Only log preview URL for Ethereal test accounts
    if (info.messageId && info.messageId.includes('ethereal')) {
      // @ts-ignore - getTestMessageUrl exists but TypeScript doesn't know about it
      const previewUrl = nodemailer.getTestMessageUrl ? nodemailer.getTestMessageUrl(info) : null;
      if (previewUrl) {
        log(`Preview URL: ${previewUrl}`, 'email');
      }
    }

    return true;
  } catch (error) {
    log(`Error sending email: ${error instanceof Error ? error.message : String(error)}`, 'email');
    if (error instanceof Error && error.stack) {
      log(`Error stack: ${error.stack}`, 'email');
    }
    return false;
  }
};
