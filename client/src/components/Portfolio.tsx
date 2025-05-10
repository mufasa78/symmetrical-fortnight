import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface ProjectProps {
  image: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  header?: string;
}

// Python portfolio projects
const aiMlProjects: ProjectProps[] = [
  {
    header: "Dual Stream Attention Network (DSAN)",
    image: "/facial expression recognition.png",
    title: "Facial Expression Recognition",
    category: "AI & ML",
    description: "A PyTorch implementation of the Dual Stream Attention Network for robust facial expression recognition in challenging real-world conditions. The model uses a two-stream architecture with attention mechanisms to handle occlusions and pose variations.",
    technologies: ["Python", "PyTorch", "Computer Vision"],
    githubUrl: "https://github/Mufasa78/dsan"
  },
  {
    header: "UAV Path Planning",
    image: "/uav.png",
    title: "UAV Path Planning System",
    category: "AI & ML",
    description: "An intelligent path planning system for Unmanned Aerial Vehicles (UAVs) using optimization algorithms to find efficient routes while avoiding obstacles and considering energy constraints.",
    technologies: ["Python", "Optimization", "Algorithms"],
    githubUrl: "https://github/Mufasa78/uav"
  },
  {
    header: "Optimization Solver",
    image: "/optimization solver.png",
    title: "Mathematical Optimization Solver",
    category: "AI & ML",
    description: "A Python-based optimization solver implementing various algorithms for solving complex mathematical optimization problems, including linear programming, nonlinear optimization, and constraint satisfaction.",
    technologies: ["Python", "Optimization", "Algorithms"],
    githubUrl: "https://github/Mufasa78/reimagined-tribble"
  }
];

const computerVisionProjects: ProjectProps[] = [
  {
    header: "Deep Fake Detection System",
    image: "/deepfake.png",
    title: "Multilingual Deepfake Detection",
    category: "Computer Vision",
    description: "A comprehensive system for detecting deepfake videos using advanced AI techniques. Features dual interfaces (Flask and Streamlit), multilingual support, and detailed frame-by-frame analysis with visual indicators.",
    technologies: ["Python", "Deep Learning", "Computer Vision"],
    githubUrl: "https://github/Mufasa78/dds"
  },
  {
    header: "Image Tampering Detection",
    image: "/image tampering.png",
    title: "Image Tampering Detection System",
    category: "Computer Vision",
    description: "A system that detects various types of image manipulations and tampering, including splicing, copy-move forgery, and AI-generated content using advanced computer vision and deep learning techniques.",
    technologies: ["Python", "Image Processing", "Computer Vision"],
    githubUrl: "https://github/Mufasa78/expert-parakeet"
  },
  {
    header: "Traffic Violation Detection",
    image: "/traffic violation.png",
    title: "Traffic Violation Detection System",
    category: "Computer Vision",
    description: "An automated system that detects traffic violations from video footage using computer vision and deep learning. Capable of identifying lane intrusions, speeding, and other traffic violations.",
    technologies: ["Python", "Object Detection", "Computer Vision"],
    githubUrl: "https://github/Mufasa78/expert-broccoli"
  }
];

const nlpProjects: ProjectProps[] = [
  {
    header: "Text Generation using Deep Learning",
    image: "/text generation.png",
    title: "Chinese Text Generation",
    category: "NLP",
    description: "A text generation application based on the Yi series large language models, optimized for Chinese language. Features include parameter adjustment, model training capabilities, and a user-friendly web interface.",
    technologies: ["Python", "NLP", "Deep Learning"],
    githubUrl: "https://github/Mufasa78/shiny-umbrella"
  },
  {
    header: "Chinese Sentiment Analysis",
    image: "/chinese sentiment.png",
    title: "Chinese Sentiment Analysis System",
    category: "NLP",
    description: "A sentiment analysis system specifically designed for Chinese text, capable of analyzing emotions and sentiments in various Chinese text sources including social media, reviews, and news articles.",
    technologies: ["Python", "NLP", "Sentiment Analysis"],
    githubUrl: "https://github/Mufasa78/csa"
  },
  {
    header: "Web Novel Analyzer",
    image: "/web novel.png",
    title: "Web Novel Content Analyzer",
    category: "NLP",
    description: "A tool for analyzing web novels and online fiction, providing insights on writing style, plot development, character relationships, and content trends using natural language processing techniques.",
    technologies: ["Python", "NLP", "Web Scraping"],
    githubUrl: "https://github/Mufasa78/webnovel"
  }
];

// Combine all projects
const allProjects = {
  aiMl: aiMlProjects,
  computerVision: computerVisionProjects,
  nlp: nlpProjects
};

const ProjectCard: React.FC<ProjectProps> = ({
  image,
  title,
  header,
  category,
  description,
  technologies,
  githubUrl
}) => {
  return (
    <Card className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full">
      {header && (
        <div className="bg-primary text-white font-semibold py-2 px-3 text-sm">
          {header}
        </div>
      )}
      <div className="h-40 overflow-hidden flex items-center justify-center bg-gray-50">
        <img
          src={image}
          alt={title}
          className="max-w-full max-h-40 object-contain p-2"
        />
      </div>
      <div className="p-4">
        <div className="mb-2">
          {technologies.map((tech, index) => (
            <span key={index} className="inline-block text-xs px-2 py-0.5 rounded bg-gray-100 mr-1.5 mb-1.5">{tech}</span>
          ))}
        </div>
        <h3 className="font-semibold text-base mb-1.5">{title}</h3>
        <p className="text-gray-600 text-xs mb-3 line-clamp-3">{description}</p>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-md hover:bg-gray-700 transition-colors"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View on GitHub
        </a>
      </div>
    </Card>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Python Projects Portfolio</h2>
          <p className="text-gray-600">A collection of Python projects showcasing expertise in AI, Machine Learning, Computer Vision, and Web Development</p>
        </div>

        {/* AI & Machine Learning Projects */}
        <div className="mb-12">
          <h3 id="ai-ml" className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">AI & Machine Learning</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {allProjects.aiMl.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>

        {/* Computer Vision Projects */}
        <div className="mb-12">
          <h3 id="computer-vision" className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">Computer Vision</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {allProjects.computerVision.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>

        {/* NLP Projects */}
        <div className="mb-12">
          <h3 id="nlp" className="text-2xl font-bold mb-6 pb-2 border-b-2 border-primary">Natural Language Processing</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {allProjects.nlp.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
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
