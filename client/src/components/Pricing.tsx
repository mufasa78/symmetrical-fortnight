import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckIcon, XIcon } from 'lucide-react';

interface PricingFeature {
  feature: string;
  included: boolean;
}

interface PricingPlanProps {
  title: string;
  price: string;
  unit: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  buttonVariant?: "default" | "outline";
}

const pricingPlans: PricingPlanProps[] = [
  {
    title: "Basic Support",
    price: "$49",
    unit: "/ hour",
    description: "Perfect for smaller projects and targeted assistance",
    features: [
      { feature: "Code review and optimization", included: true },
      { feature: "Bug fixing and debugging", included: true },
      { feature: "Consultation sessions", included: true },
      { feature: "Basic documentation", included: true },
      { feature: "Implementation support", included: false },
      { feature: "Deployment assistance", included: false }
    ],
    buttonVariant: "outline"
  },
  {
    title: "Standard Package",
    price: "$299",
    unit: "/ project",
    description: "Comprehensive support for medium-sized projects",
    features: [
      { feature: "Up to 10 hours of dedicated support", included: true },
      { feature: "Implementation assistance", included: true },
      { feature: "Code review and optimization", included: true },
      { feature: "Detailed documentation", included: true },
      { feature: "Weekly progress updates", included: true },
      { feature: "Priority support", included: false }
    ],
    popular: true,
    buttonVariant: "default"
  },
  {
    title: "Premium Solution",
    price: "$799",
    unit: "/ project",
    description: "End-to-end support for complex projects",
    features: [
      { feature: "Up to 25 hours of dedicated support", included: true },
      { feature: "Full implementation support", included: true },
      { feature: "Architecture design and planning", included: true },
      { feature: "Comprehensive documentation", included: true },
      { feature: "Deployment assistance", included: true },
      { feature: "Priority support (24-hour response)", included: true }
    ],
    buttonVariant: "outline"
  }
];

const PricingPlan: React.FC<PricingPlanProps> = ({ 
  title, 
  price, 
  unit, 
  description, 
  features, 
  popular = false,
  buttonVariant = "default"
}) => {
  return (
    <div className={`bg-white rounded-xl border ${popular ? 'border-primary-200 shadow-lg' : 'border-gray-100 shadow-sm hover:shadow-xl hover:border-primary-100'} transition-all flex flex-col relative ${popular ? 'transform md:-translate-y-4' : ''}`}>
      {popular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      <div className={`p-6 ${popular ? 'p-8' : 'p-6'} border-b border-gray-100`}>
        <h3 className={`${popular ? 'text-2xl' : 'text-xl'} font-bold mb-2`}>{title}</h3>
        <div className="flex items-end mb-4">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-gray-500 ml-2">{unit}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className={`p-6 ${popular ? 'p-8' : 'p-6'} flex-grow`}>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <CheckIcon className="text-secondary-500 mt-1 mr-2 h-4 w-4" />
              ) : (
                <XIcon className="text-gray-400 mt-1 mr-2 h-4 w-4" />
              )}
              <span className={feature.included ? '' : 'text-gray-400'}>{feature.feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={`p-6 ${popular ? 'p-8' : 'p-6'} border-t border-gray-100`}>
        <a href="#contact">
          <Button 
            variant={buttonVariant} 
            className={`w-full ${buttonVariant === "default" ? "bg-primary hover:bg-primary/90" : ""}`}
          >
            Get Started
          </Button>
        </a>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Flexible Pricing Options</h2>
          <p className="text-gray-600">Choose the plan that fits your project needs and budget</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingPlan key={index} {...plan} />
          ))}
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-xl p-8 border border-gray-200">
          <h3 className="text-xl font-bold mb-4 text-center">Need a custom solution?</h3>
          <p className="text-center text-gray-600 mb-6">Contact us for a personalized quote based on your specific project requirements</p>
          <div className="text-center">
            <a href="#contact">
              <Button className="bg-primary text-white hover:bg-primary/90">
                Request Custom Quote
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
