import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ProjectProps {
  image: string;
  title: string;
  category: string;
  categoryBadgeColor: string;
  description: string;
  technologies: string[];
}

const projects: ProjectProps[] = [
  {
    image: "https://images.unsplash.com/photo-1610986603166-f78428624e76",
    title: "Data Visualization Dashboard",
    category: "Python",
    categoryBadgeColor: "bg-primary-100 text-primary-600",
    description: "Interactive dashboard using Dash and Plotly for visualizing climate data with advanced filtering capabilities.",
    technologies: ["Pandas", "Plotly", "Dash", "Data Analysis"]
  },
  {
    image: "https://images.unsplash.com/photo-1555421689-3f034debb7a6",
    title: "E-commerce Platform",
    category: "Web",
    categoryBadgeColor: "bg-accent-100 text-accent-600",
    description: "Full-stack e-commerce application with product management, shopping cart, and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    title: "Sentiment Analysis System",
    category: "Python",
    categoryBadgeColor: "bg-primary-100 text-primary-600",
    description: "NLP-based sentiment analysis tool for social media monitoring with real-time data processing.",
    technologies: ["NLTK", "TensorFlow", "Flask", "ML"]
  },
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "RESTful API Service",
    category: "Web",
    categoryBadgeColor: "bg-accent-100 text-accent-600",
    description: "Comprehensive API service with authentication, rate limiting, and documentation for a student resource platform.",
    technologies: ["Django", "REST Framework", "PostgreSQL", "Swagger"]
  },
  {
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1",
    title: "Automated Testing Framework",
    category: "Python",
    categoryBadgeColor: "bg-primary-100 text-primary-600",
    description: "Custom testing framework for automated UI and API testing with comprehensive reporting features.",
    technologies: ["Selenium", "PyTest", "Requests", "CI/CD"]
  },
  {
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095",
    title: "Study Group Platform",
    category: "Web",
    categoryBadgeColor: "bg-accent-100 text-accent-600",
    description: "Collaborative platform for students to form study groups, share resources, and coordinate virtual meetings.",
    technologies: ["Vue.js", "Firebase", "WebRTC", "Tailwind"]
  }
];

const ProjectCard: React.FC<ProjectProps> = ({ 
  image, 
  title, 
  category, 
  categoryBadgeColor, 
  description, 
  technologies 
}) => {
  return (
    <Card className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <span className="text-white font-medium">{title}</span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold">{title}</h3>
          <span className={`text-xs px-2 py-1 rounded ${categoryBadgeColor}`}>{category}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">{tech}</span>
          ))}
        </div>
      </div>
    </Card>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-gray-600">Check out some of the successful projects we've helped students complete</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact">
            <Button 
              className="bg-primary text-white hover:bg-primary/90 inline-flex items-center gap-2"
            >
              Discuss Your Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
