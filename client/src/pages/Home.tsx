import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Features from '@/components/Features';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import Faq from '@/components/Faq';
import ContactForm from '@/components/ContactForm';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';

// Add Font Awesome for icons
const addFontAwesome = () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
  document.head.appendChild(link);
};

// Add Google Fonts
const addGoogleFonts = () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap';
  document.head.appendChild(link);
};

// Add meta tags
const addMetaTags = () => {
  const meta = document.createElement('meta');
  meta.name = 'description';
  meta.content = 'Expert assistance for students building Python and web application projects. Get professional guidance, code reviews, and project support.';
  document.head.appendChild(meta);

  document.title = 'CodeMentor Pro | Python & Web Development Project Assistance';
};

const Home = () => {
  // Set up the document when the component mounts
  useEffect(() => {
    addFontAwesome();
    addGoogleFonts();
    addMetaTags();
  }, []);

  // Handle smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#') && href !== '#') {
          e.preventDefault();
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="font-sans bg-gray-50 text-gray-900 antialiased">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <About />
      <Faq />
      <ContactForm />
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;
