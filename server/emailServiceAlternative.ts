import nodemailer from 'nodemailer';
import { type ContactMessage } from '@shared/schema';
import { log } from './vite';

// Create a test account using Ethereal for testing
async function createTestAccount() {
  log('Creating test account...', 'email');
  try {
    const testAccount = await nodemailer.createTestAccount();
    log('Test account created successfully', 'email');
    return testAccount;
  } catch (error) {
    log(`Error creating test account: ${error instanceof Error ? error.message : String(error)}`, 'email');
    return null;
  }
}

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

// Send contact form email using Ethereal (for testing)
export const sendContactEmailTest = async (contact: ContactMessage): Promise<boolean> => {
  try {
    log('Starting test email sending process...', 'email');

    // Create test account
    const testAccount = await createTestAccount();
    if (!testAccount) {
      log('Failed to create test account', 'email');
      return false;
    }

    // Create test transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
      debug: true,
      logger: true
    });

    const recipientEmail = process.env.CONTACT_EMAIL || 'helpwithmufasa@proton.me';
    log(`Sending test email to: ${recipientEmail}`, 'email');

    const mailOptions = {
      from: `"StudentProjectPro Test" <${testAccount.user}>`,
      to: recipientEmail,
      subject: `[TEST] New Contact: ${contact.subject}`,
      html: formatContactMessageHtml(contact),
      replyTo: contact.email,
      text: `New Contact Form Submission\n\nName: ${contact.name}\nEmail: ${contact.email}\nSubject: ${contact.subject}\nService: ${contact.service || 'Not specified'}\n\nMessage:\n${contact.message}\n\nTimestamp: ${new Date(contact.timestamp).toLocaleString()}`
    };

    log('Test mail options prepared, attempting to send...', 'email');

    const info = await transporter.sendMail(mailOptions);
    log(`Test email sent: ${info.messageId}`, 'email');

    // Get test message URL
    const previewURL = nodemailer.getTestMessageUrl(info);
    log(`Preview URL: ${previewURL}`, 'email');

    return true;
  } catch (error) {
    log(`Error sending test email: ${error instanceof Error ? error.message : String(error)}`, 'email');
    return false;
  }
};

// Send contact form email using Gmail service directly
export const sendContactEmail = async (contact: ContactMessage): Promise<boolean> => {
  try {
    // First try the test email service for debugging
    await sendContactEmailTest(contact);

    // Then try the actual email service with Gmail
    log('Starting Gmail email sending process...', 'email');

    // Create a transporter using Gmail service
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use Gmail service directly
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // Disable strict SSL verification
      tls: {
        rejectUnauthorized: false
      },
      debug: true
    });

    const recipientEmail = process.env.CONTACT_EMAIL || 'helpwithmufasa@proton.me';
    log(`Sending Gmail email to: ${recipientEmail}`, 'email');

    const mailOptions = {
      from: `"StudentProjectPro Contact" <${process.env.EMAIL_USER}>`,
      to: recipientEmail,
      subject: `New Contact: ${contact.subject}`,
      html: formatContactMessageHtml(contact),
      replyTo: contact.email,
      text: `New Contact Form Submission\n\nName: ${contact.name}\nEmail: ${contact.email}\nSubject: ${contact.subject}\nService: ${contact.service || 'Not specified'}\n\nMessage:\n${contact.message}\n\nTimestamp: ${new Date(contact.timestamp).toLocaleString()}`
    };

    log('Gmail mail options prepared, attempting to send...', 'email');

    // Verify connection before sending
    log('Verifying Gmail SMTP connection...', 'email');
    await transporter.verify();
    log('Gmail SMTP connection verified successfully', 'email');

    const info = await transporter.sendMail(mailOptions);
    log(`Gmail email sent: ${info.messageId}`, 'email');

    return true;
  } catch (error) {
    log(`Error sending Gmail email: ${error instanceof Error ? error.message : String(error)}`, 'email');
    if (error instanceof Error && error.stack) {
      log(`Error stack: ${error.stack}`, 'email');
    }
    return false;
  }
};
