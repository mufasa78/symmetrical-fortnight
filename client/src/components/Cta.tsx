import React from 'react';
import { Button } from '@/components/ui/button';

const Cta = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-accent-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Bring Your Project to Life?</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">Get expert help with your Python or web development projects and learn valuable skills along the way.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              Get Started Today
            </Button>
          </a>
          <a href="#services">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
              Explore Services
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
