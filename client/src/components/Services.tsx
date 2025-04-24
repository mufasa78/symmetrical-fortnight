import React from 'react';
import { 
  Laptop,
  Globe,
  GitBranch,
  Presentation,
  Projector,
  Server
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { CheckIcon } from 'lucide-react';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  iconBgColor: string;
  iconColor: string;
  linkColor: string;
}

const serviceItems: ServiceProps[] = [
  {
    icon: <Laptop className="text-xl" />,
    title: "Python Project Development",
    description: "Get expert assistance with your Python projects, from simple scripts to complex applications.",
    features: [
      "Data analysis and visualization",
      "Machine learning algorithms",
      "Automation and scripting",
      "GUI application development"
    ],
    iconBgColor: "bg-primary-100",
    iconColor: "text-primary-600",
    linkColor: "text-primary-600 hover:text-primary-700"
  },
  {
    icon: <Globe className="text-xl" />,
    title: "Web Application Development",
    description: "Build responsive, modern web applications with the latest frameworks and technologies.",
    features: [
      "Frontend (React, Vue, Angular)",
      "Backend (Node.js, Django, Flask)",
      "Database design and implementation",
      "API development and integration"
    ],
    iconBgColor: "bg-accent-100",
    iconColor: "text-accent-600",
    linkColor: "text-accent-600 hover:text-accent-700"
  },
  {
    icon: <GitBranch className="text-xl" />,
    title: "Code Review & Optimization",
    description: "Improve your existing code with professional reviews, debugging, and optimization.",
    features: [
      "Performance optimization",
      "Bug fixing and debugging",
      "Code quality and best practices",
      "Security review and recommendations"
    ],
    iconBgColor: "bg-secondary-100",
    iconColor: "text-secondary-600",
    linkColor: "text-secondary-600 hover:text-secondary-700"
  },
  {
    icon: <Presentation className="text-xl" />,
    title: "1-on-1 Mentoring",
    description: "Personalized guidance to help you understand concepts and develop coding skills.",
    features: [
      "Custom learning paths",
      "Regular coding sessions",
      "Project planning and guidance",
      "Career advice and portfolio building"
    ],
    iconBgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
    linkColor: "text-yellow-600 hover:text-yellow-700"
  },
  {
    icon: <Projector className="text-xl" />,
    title: "Academic Project Support",
    description: "End-to-end support for your academic programming assignments and projects.",
    features: [
      "Project planning and requirements analysis",
      "Implementation guidance",
      "Documentation assistance",
      "Presentation preparation"
    ],
    iconBgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    linkColor: "text-pink-600 hover:text-pink-700"
  },
  {
    icon: <Server className="text-xl" />,
    title: "Deployment & DevOps",
    description: "Get your applications up and running with professional deployment and configuration.",
    features: [
      "Cloud hosting setup (AWS, GCP, Azure)",
      "CI/CD pipeline configuration",
      "Docker containerization",
      "Domain configuration and SSL setup"
    ],
    iconBgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    linkColor: "text-purple-600 hover:text-purple-700"
  }
];

const ServiceCard: React.FC<ServiceProps> = ({ 
  icon, 
  title, 
  description, 
  features, 
  iconBgColor, 
  iconColor,
  linkColor
}) => {
  return (
    <Card className="bg-white hover:shadow-xl transition-shadow p-6 border border-gray-100">
      <div className={`w-12 h-12 ${iconBgColor} ${iconColor} rounded-lg flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon className="text-secondary-500 mt-1 mr-2 h-4 w-4" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a href="#contact" className={`inline-flex items-center font-medium ${linkColor}`}>
        Learn more 
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 ml-2" 
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
      </a>
    </Card>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600">Comprehensive support for your programming projects, from concept to completion</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
