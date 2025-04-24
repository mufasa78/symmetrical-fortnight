import React, { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Code } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-primary text-3xl">
                <Code />
              </span>
              <span className="font-bold text-xl">
                CodeMentor<span className="text-primary">Pro</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="text-gray-700 hover:text-primary font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact">
              <Button className="bg-primary text-white hover:bg-primary/90">
                Contact
              </Button>
            </a>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="block text-gray-700 hover:text-primary font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="block text-center mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button className="w-full bg-primary text-white hover:bg-primary/90">
                Contact
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
