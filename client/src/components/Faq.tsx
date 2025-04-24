import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface FaqItemProps {
  question: string;
  answer: string;
}

const faqItems: FaqItemProps[] = [
  {
    question: "How does the process work?",
    answer: "Our process begins with an initial consultation to understand your project requirements and goals. We'll then create a customized plan, pair you with the right mentor, and work with you through implementation, testing, and documentation. Throughout the process, we focus on explaining concepts and ensuring you understand what we're building together."
  },
  {
    question: "Will I learn from the process or just get a completed project?",
    answer: "Education is at the core of our services. We don't just deliver completed projects; we work with you to ensure you understand the concepts, techniques, and best practices used in your project. Our mentors explain their reasoning, answer your questions, and provide resources for further learning."
  },
  {
    question: "How long does it typically take to complete a project?",
    answer: "Project timelines vary based on complexity, scope, and your availability. Simple projects may take just a few days, while more complex ones might require several weeks. During our initial consultation, we'll provide an estimated timeline for your specific project and work with you to meet any deadlines you have."
  },
  {
    question: "Do you help with deployment and hosting?",
    answer: "Yes, our Premium Solution package includes deployment assistance. We can help you deploy your application to popular platforms like Heroku, AWS, Google Cloud, or GitHub Pages. We'll guide you through the process and ensure your application is properly configured and running smoothly in its production environment."
  },
  {
    question: "What technologies and languages do you support?",
    answer: "We support a wide range of technologies and languages, including but not limited to: Python (including Django, Flask, FastAPI), JavaScript/TypeScript (React, Vue, Angular, Node.js), HTML/CSS, SQL and NoSQL databases, machine learning frameworks (TensorFlow, PyTorch, scikit-learn), and cloud platforms (AWS, GCP, Azure). If your project uses a technology not listed here, feel free to ask us about it!"
  },
  {
    question: "What happens if I'm not satisfied with the work?",
    answer: "Your satisfaction is our priority. If you're not happy with any aspect of our service, please let us know immediately. We'll work with you to address your concerns and make necessary adjustments. For larger projects, we implement regular check-ins and progress reviews to ensure we're meeting your expectations throughout the process."
  }
];

const FaqItem: React.FC<FaqItemProps & { isOpen: boolean; toggle: () => void }> = ({ 
  question, 
  answer, 
  isOpen, 
  toggle 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <button 
        className="w-full text-left px-6 py-4 focus:outline-none flex justify-between items-center" 
        onClick={toggle}
      >
        <span className="font-medium text-lg">{question}</span>
        <ChevronDown className={`text-gray-400 transition-transform h-5 w-5 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      <div className={`px-6 pb-4 text-gray-600 ${isOpen ? 'block' : 'hidden'}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Find answers to common questions about our services and process</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {faqItems.map((item, index) => (
            <FaqItem 
              key={index} 
              question={item.question} 
              answer={item.answer} 
              isOpen={openIndex === index}
              toggle={() => toggleFaq(index)}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Don't see your question here?</p>
          <a href="#contact">
            <Button className="bg-primary text-white hover:bg-primary/90">
              Ask Us Directly
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;
