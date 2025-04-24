import React from 'react';
import { GraduationCap, Watch, Code, ClipboardList } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

const features: FeatureProps[] = [
  {
    icon: <GraduationCap />,
    title: "Educational Focus",
    description: "We explain concepts and teach you while helping with your project",
    bgColor: "bg-primary-100",
    iconColor: "text-primary-600"
  },
  {
    icon: <Watch />,
    title: "Dedicated Support",
    description: "Regular check-ins and responsive communication throughout your project",
    bgColor: "bg-secondary-100",
    iconColor: "text-secondary-600"
  },
  {
    icon: <Code />,
    title: "Industry Standards",
    description: "Code that follows best practices and modern development standards",
    bgColor: "bg-accent-100",
    iconColor: "text-accent-600"
  },
  {
    icon: <ClipboardList />,
    title: "Agile Approach",
    description: "Flexible development process with regular updates and revisions",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600"
  }
];

const FeatureItem: React.FC<FeatureProps> = ({ icon, title, description, bgColor, iconColor }) => {
  return (
    <div className="bg-gray-50 p-5 rounded-lg">
      <div className={`w-10 h-10 ${bgColor} ${iconColor} rounded-lg flex items-center justify-center mb-3`}>
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-600">Our approach combines expertise, personalization, and a commitment to your success</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <FeatureItem key={index} {...feature} />
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
              alt="Team collaboration" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
