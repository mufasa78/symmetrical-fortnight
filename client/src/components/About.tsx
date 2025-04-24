import React from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, Briefcase, Users } from 'lucide-react';

interface AboutItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

const aboutItems: AboutItemProps[] = [
  {
    icon: <GraduationCap />,
    title: "Educational Background",
    description: "Our team includes graduates from top universities with advanced degrees in Computer Science, Data Science, and Software Engineering.",
    bgColor: "bg-primary-100",
    iconColor: "text-primary-600"
  },
  {
    icon: <Briefcase />,
    title: "Industry Experience",
    description: "We bring real-world experience from companies like Google, Microsoft, and Amazon, ensuring you learn current industry practices.",
    bgColor: "bg-secondary-100",
    iconColor: "text-secondary-600"
  },
  {
    icon: <Users />,
    title: "Teaching Philosophy",
    description: "We believe in learning by doing, guided by mentors who can explain complex concepts in simple, understandable terms.",
    bgColor: "bg-accent-100",
    iconColor: "text-accent-600"
  }
];

const AboutItem: React.FC<AboutItemProps> = ({ icon, title, description, bgColor, iconColor }) => {
  return (
    <div className="flex items-start">
      <div className={`w-10 h-10 ${bgColor} ${iconColor} rounded-lg flex items-center justify-center mr-4 mt-1`}>
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2" 
              alt="Our team of expert mentors" 
              className="rounded-xl shadow-lg" 
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-gray-600 mb-4">
              We are a team of passionate educators and professional developers dedicated to helping students succeed in their programming projects. With years of industry experience and a love for teaching, we provide the perfect balance of practical guidance and educational support.
            </p>
            <p className="text-gray-600 mb-6">
              Our mission is not just to help you complete your projects, but to ensure you understand the concepts and develop the skills that will benefit you throughout your career.
            </p>
            
            <div className="space-y-4 mb-8">
              {aboutItems.map((item, index) => (
                <AboutItem key={index} {...item} />
              ))}
            </div>
            
            <a href="#contact">
              <Button className="bg-primary text-white hover:bg-primary/90">
                Meet Our Team
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
