import React from 'react';
import { Card } from '@/components/ui/card';
import { Star, StarHalf } from 'lucide-react';

interface TestimonialProps {
  rating: number;
  content: string;
  author: {
    name: string;
    position: string;
    avatar: string;
  };
}

const testimonials: TestimonialProps[] = [
  {
    rating: 5,
    content: "\"The support I received for my Python data analysis project was incredible. My mentor helped me understand the concepts while we built the solution together. I got an A+ on my assignment!\"",
    author: {
      name: "Sarah J.",
      position: "Data Science Student",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    }
  },
  {
    rating: 5,
    content: "\"I was struggling with my React project until I found CodeMentorPro. They helped me structure my application properly and taught me best practices along the way. Highly recommended!\"",
    author: {
      name: "Michael T.",
      position: "Computer Science Major",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    }
  },
  {
    rating: 4.5,
    content: "\"The Premium Solution package was worth every penny. I had a complex machine learning project that needed expert guidance, and the team delivered beyond my expectations.\"",
    author: {
      name: "Rebecca L.",
      position: "AI Specialization Student",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
    }
  },
  {
    rating: 5,
    content: "\"I was on a tight deadline for my final project, and the team helped me not only complete it on time but also made sure I understood every part of the code. The 1-on-1 mentoring was invaluable.\"",
    author: {
      name: "Jason K.",
      position: "Web Development Student",
      avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79"
    }
  },
  {
    rating: 5,
    content: "\"As a non-CS major, I was worried about my programming project, but my mentor explained everything in simple terms and guided me through the entire process. I learned so much more than I expected!\"",
    author: {
      name: "Emily R.",
      position: "Business Analytics Student",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
    }
  },
  {
    rating: 4,
    content: "\"My Flask web application needed authentication and database integration. The team helped me implement everything securely and efficiently, while teaching me best practices for web security.\"",
    author: {
      name: "David W.",
      position: "Information Technology Student",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
    }
  }
];

const TestimonialCard: React.FC<TestimonialProps> = ({ rating, content, author }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={i} className="fill-yellow-400 text-yellow-400 h-4 w-4" />);
  }
  
  if (hasHalfStar) {
    stars.push(<StarHalf key="half" className="fill-yellow-400 text-yellow-400 h-4 w-4" />);
  }
  
  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Star key={`empty-${i}`} className="text-yellow-400 h-4 w-4" />);
  }
  
  return (
    <Card className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center space-x-1 text-yellow-400 mb-4">
        {stars}
      </div>
      <p className="text-gray-700 mb-6">{content}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
          <img src={author.avatar} alt={author.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-semibold">{author.name}</h4>
          <p className="text-sm text-gray-500">{author.position}</p>
        </div>
      </div>
    </Card>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-gray-600">Hear from students who've achieved success with our help</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
