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

const Home = () => {
  // We've moved all resource loading to index.html for better performance

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
