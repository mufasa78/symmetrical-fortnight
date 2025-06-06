import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center space-x-2 mb-6">
              <img src="/codementorpro logo.png" alt="CodeMentorPro Logo" className="h-8" />
              <span className="font-bold text-xl text-white">
                CodeMentor<span className="text-primary-400">Pro</span>
              </span>
            </a>
            <p className="mb-6 text-gray-400">
              Professional assistance for students building Python and web application projects. We help turn your ideas into reality while teaching you valuable programming skills.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/Mufasa746" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com/in/stanley-gathekia-" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/Mufasa78" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://instagram.com/helpwithmufasa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://discord.gg/uxeNjsdZ" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-discord"></i>
              </a>
              <a href="https://reddit.com/r/DevBridge" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-reddit"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Python Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Web Applications</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Code Review</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">1-on-1 Mentoring</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Academic Projects</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Deployment & DevOps</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} CodeMentorPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
