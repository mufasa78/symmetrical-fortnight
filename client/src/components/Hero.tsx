import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary to-accent-700 text-white py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97')] bg-no-repeat bg-cover opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Turn Your Coding <span className="text-secondary-300">Projects</span> Into Reality
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Professional assistance for students building Python and web application projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#services">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Explore Services
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" className="w-full sm:w-auto bg-secondary-500 hover:bg-secondary-600 text-white">
                  Get Started
                </Button>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-xl">
              <div className="font-mono text-sm">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="h-3 w-3 bg-red-500 rounded-full"></span>
                  <span className="h-3 w-3 bg-yellow-500 rounded-full"></span>
                  <span className="h-3 w-3 bg-green-500 rounded-full"></span>
                  <span className="ml-2 text-gray-200">project_solution.py</span>
                </div>
                <div className="text-green-300">
                  <span className="text-blue-300">def</span> <span className="text-yellow-300">solve_your_project</span>(<span className="text-orange-300">complexity</span>):
                </div>
                <div className="pl-4 text-gray-200">
                  <span className="text-purple-300">if</span> complexity == <span className="text-green-300">"high"</span>:
                </div>
                <div className="pl-8 text-gray-200">
                  <span className="text-purple-300">return</span> <span className="text-green-300">"Expert guidance and implementation"</span>
                </div>
                <div className="pl-4 text-gray-200">
                  <span className="text-purple-300">elif</span> complexity == <span className="text-green-300">"medium"</span>:
                </div>
                <div className="pl-8 text-gray-200">
                  <span className="text-purple-300">return</span> <span className="text-green-300">"Structured support and code reviews"</span>
                </div>
                <div className="pl-4 text-gray-200">
                  <span className="text-purple-300">else</span>:
                </div>
                <div className="pl-8 text-gray-200">
                  <span className="text-purple-300">return</span> <span className="text-green-300">"Personalized learning path"</span>
                </div>
                <div className="mt-4 text-gray-200">
                  <span className="text-blue-300">class</span> <span className="text-yellow-300">StudentSuccess</span>:
                </div>
                <div className="pl-4 text-gray-200">
                  <span className="text-yellow-300">def __init__</span>(self):
                </div>
                <div className="pl-8 text-gray-200">
                  self.skills = [<span className="text-green-300">"Python"</span>, <span className="text-green-300">"Web Dev"</span>, <span className="text-green-300">"Data Science"</span>]
                </div>
                <div className="pl-8 text-gray-200">
                  self.confidence = <span className="text-purple-300">100</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary-500 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg">
              <div className="transform rotate-12">24/7</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f9fafb" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,170.7C384,181,480,171,576,138.7C672,107,768,53,864,48C960,43,1056,85,1152,96C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
