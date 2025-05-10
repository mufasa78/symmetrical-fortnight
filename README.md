# CodeMentorPro

A professional platform for student project development and mentoring services.

## Features

- Responsive design that works on all devices
- Contact form with email notifications
- Project showcase with categorization
- Interactive UI with smooth scrolling and animations
- Service descriptions and pricing information
- Optimized for performance and SEO
- Ready for deployment to Render

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/StudentProjectPro.git
   cd StudentProjectPro
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env` file in the root directory with the following variables:
   ```env
   # Email Configuration
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_SECURE=false
   CONTACT_EMAIL=helpwithmufasa@proton.me

   # Database Configuration
   # Format: postgres://username:password@hostname:port/database
   # Example for local PostgreSQL: postgres://postgres:password@localhost:5432/studentprojectpro
   # Example for Neon: postgres://username:password@ep-cool-name-12345.us-east-1.aws.neon.tech/dbname
   DATABASE_URL=postgres://username:password@localhost:5432/database
   ```

   **Note**: If the database connection fails, the application will automatically fall back to using in-memory storage.

4. **Email Setup Instructions**:
   - For Gmail:
     - Use your Gmail address as `EMAIL_USER`
     - Generate an app password at [Google Account Security](https://myaccount.google.com/apppasswords)
     - Use this app password as `EMAIL_PASS`
   - For other email providers:
     - Update `EMAIL_HOST` and `EMAIL_PORT` accordingly
     - Use your email credentials for `EMAIL_USER` and `EMAIL_PASS`
   - Set `CONTACT_EMAIL` to the email address where you want to receive contact form submissions

5. **Run the development server**:
   ```bash
   npm run dev
   ```

6. **Build for production**:
   ```bash
   npm run build
   ```

7. **Start the production server**:
   ```bash
   npm start
   ```

## Services Offered

The platform offers the following services:

1. **Python Project Development**
   - Custom Python applications and scripts
   - Data analysis and visualization
   - Automation solutions

2. **Web Application Development**
   - Full-stack web applications
   - API development and integration
   - Frontend and backend solutions

3. **Code Review & Optimization**
   - Performance optimization
   - Code quality assessment
   - Best practices implementation

4. **1-on-1 Mentoring**
   - Personalized learning paths
   - Project guidance
   - Career advice

5. **Academic Project Support**
   - Thesis and dissertation assistance
   - Research project implementation
   - Technical documentation

## Contact Form Email Setup

The contact form is configured to send email notifications to the specified email address when clients submit inquiries. Here's how it works:

1. **Email Service**: Uses Nodemailer to send emails
2. **Configuration**: Email settings are stored in the `.env` file
3. **Recipient**: All form submissions are sent to the email specified in `CONTACT_EMAIL` (helpwithmufasa@proton.me by default)
4. **Content**: Emails include the client's name, email, subject, selected service, and message
5. **Database Storage**: All contact form submissions are also stored in the PostgreSQL database (if configured)
6. **Fallback**: If database connection fails, submissions are stored in memory

## Browser Compatibility

This application is compatible with:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

This project includes several performance optimizations:

- **Resource Loading**: Optimized loading of fonts, CSS, and JavaScript
- **Code Splitting**: Separates vendor code from application code for better caching
- **Image Optimization**: Properly sized and compressed images
- **Compression**: Server-side compression for faster content delivery
- **Caching**: Proper cache headers for static assets
- **Minification**: CSS and JS minification for smaller file sizes
- **Lazy Loading**: Components and images load only when needed

## SEO Enhancements

- **Meta Tags**: Comprehensive meta tags for better search engine visibility
- **Structured Data**: JSON-LD structured data for rich search results
- **Open Graph**: Social media sharing tags for better visibility
- **Sitemap**: XML sitemap for search engine crawling
- **Robots.txt**: Proper configuration for search engine crawlers
- **Semantic HTML**: Proper HTML structure for better accessibility and SEO

## Deployment to Render

This project is configured for easy deployment to Render:

1. Push your code to GitHub
2. Connect your GitHub repository to Render
3. Render will automatically deploy your application based on the configuration in `render.yaml`

Required environment variables for Render:
- `DATABASE_URL`: PostgreSQL connection string
- `SESSION_SECRET`: Secret for Express sessions
- `NODE_ENV`: Set to "production"

## License

Feel free to use and modify this portfolio template for your personal use.

---

Created by Mufasa | [GitHub](https://github.com/Mufasa78) | [Website](http://helpwithmufasa.co.ke) | [Twitter](https://x.com/Mufasa746) | [Instagram](https://instagram.com/helpwithmufasa) | [Discord](https://discord.gg/uxeNjsdZ) | [Reddit](https://reddit.com/r/DevBridge)
