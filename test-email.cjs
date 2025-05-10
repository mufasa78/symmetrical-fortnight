// Simple script to test email functionality
require('dotenv').config();
const nodemailer = require('nodemailer');

async function main() {
  console.log('Starting email test...');
  console.log(`Email Configuration - User: ${process.env.EMAIL_USER}, Host: ${process.env.EMAIL_HOST}`);
  
  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false
    },
    debug: true,
    logger: true
  });
  
  const recipientEmail = process.env.CONTACT_EMAIL || 'helpwithmufasa@proton.me';
  console.log(`Sending test email to: ${recipientEmail}`);
  
  // Verify connection
  console.log('Verifying connection...');
  try {
    await transporter.verify();
    console.log('Connection verified successfully');
  } catch (error) {
    console.error('Connection verification failed:', error);
    return;
  }
  
  // Send email
  try {
    const info = await transporter.sendMail({
      from: `"Test Email" <${process.env.EMAIL_USER}>`,
      to: recipientEmail,
      subject: 'Test Email from StudentProjectPro',
      text: 'This is a test email to verify the email functionality.',
      html: '<h1>Test Email</h1><p>This is a test email to verify the email functionality.</p>'
    });
    
    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);
  } catch (error) {
    console.error('Failed to send email:', error);
  }
}

main().catch(console.error);
