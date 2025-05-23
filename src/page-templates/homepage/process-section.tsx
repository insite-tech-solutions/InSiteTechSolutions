'use client';

import React, { useState } from 'react';
import { Search, ClipboardList, Paintbrush, Code, Rocket, ChevronDown, ArrowRight, ArrowDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProcessSection = () => {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  // Process data
  const processSteps = [
    {
      number: "1",
      title: "Discovery",
      icon: <Search size={32} color="white" />,
      description: "We take the time to understand your goals, challenges, and priorities to create the perfect solution. Through open dialogue and research, we uncover opportunities and define a shared vision for success.",
    },
    {
      number: "2",
      title: "Definition",
      icon: <ClipboardList size={32} color="white" />,
      description: "We translate your needs into a clear roadmap. This involves analyzing technical and business requirements and determining project scope, budget, and timeline.",
    },
    {
      number: "3",
      title: "Design",
      icon: <Paintbrush size={32} color="white" />,
      description: "We create thoughtful, efficient designs that bring your vision to life. We collaboratively ensure every detail supports your goals and delivers a seamless experience.",
    },
    {
      number: "4",
      title: "Development",
      icon: <Code size={32} color="white" />,
      description: "We build robust, scalable solutions using best practices and the latest technologies. Throughout development, we keep you informed and involved for complete transparency.",
    },
    {
      number: "5",
      title: "Deployment",
      icon: <Rocket size={32} color="white" />,
      description: "After thorough testing, we launch your project with care, ensuring everything works perfectly. After launch, we have ongoing support options to help you achieve lasting results.",
    }
  ];

  // Handle click to expand/collapse description
  const toggleDescription = (index: number) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="w-full mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Process</h2>
          <p className="text-lg text-gray-600 max-w-5xl mx-auto">
            We believe that every successful project starts with a clear, collaborative process. We follow a methodology that we refer to as the 5 Ds: Discovery, Definition, Design, Development, and Deployment. Our approach is designed to deliver results that drive your business forward—combining strategic insight, creative thinking, and technical expertise at every stage.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-wrap justify-center items-start gap-x-0 gap-y-6">
          {processSteps.map((step, index) => (
            <React.Fragment key={index}>
              <div
                className={`bg-white rounded-lg shadow-md border overflow-hidden transition-all duration-300 max-w-xs w-full flex flex-col
                  ${expandedStep === index ? 'border-blue-600' : 'border-gray-300 hover:border-mild-blue'}`}
              >
                {/* Clickable Header */}
                <button
                  type="button"
                  onClick={() => toggleDescription(index)}
                  aria-expanded={expandedStep === index}
                  className="w-full flex items-stretch text-left focus:outline-none p-0"
                >
                  {/* Icon Square */}
                  <div className="bg-gradient-to-tr from-mild-blue to-blue-900 p-4 flex items-center justify-center">
                    {step.icon}
                  </div>
                  {/* Title Area */}
                  <div className="p-4 flex-1 flex items-center">
                    <span className="text-medium-blue text-xl font-medium mr-2">{step.number}</span>
                    <span className="text-gray-800 text-xl font-medium border-l-2 border-mild-grey pl-2">
                      {step.title}
                    </span>
                  </div>
                  {/* Chevron */}
                  <div className="p-4 flex items-center justify-center bg-white rounded-r-md">
                    <motion.div
                      animate={{ rotate: expandedStep === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <ChevronDown className="h-5 w-5 text-medium-blue" />
                    </motion.div>
                  </div>
                </button>

                {/* Expandable Description */}
                <AnimatePresence initial={false}>
                  {expandedStep === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 text-gray-700 border-t border-gray-200 bg-white">
                        {step.description}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* ArrowRight icon between cards, except after the last card */}
              {index < processSteps.length - 1 && (
                <div className="flex items-center mt-4">
                  <ArrowRight size={32} className="text-mild-grey" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-4">
          {processSteps.map((step, index) => (
            <React.Fragment key={index}>
              <div 
                className={`bg-white rounded-lg shadow-md border overflow-hidden transition-all duration-300 flex flex-col
                          ${expandedStep === index ? 'border-blue-600' : 'border-gray-300 hover:border-mild-blue'}`}
              >
                {/* Clickable Header */}
                <button
                  type="button"
                  onClick={() => toggleDescription(index)}
                  aria-expanded={expandedStep === index}
                  className="w-full flex items-stretch text-left focus:outline-none p-0"
                >
                  {/* Icon Square */}
                  <div className="bg-gradient-to-tr from-mild-blue to-blue-900 p-4 flex items-center justify-center">
                    {step.icon}
                  </div>
                  {/* Title Area */}
                  <div className="p-4 flex-1 flex items-center">
                    <span className="text-medium-blue text-xl font-medium mr-2">{step.number}</span>
                    <span className="text-gray-800 text-xl font-medium border-l-2 border-mild-grey pl-2">
                      {step.title}
                    </span>
                  </div>
                  {/* Chevron */}
                  <div className="p-4 flex items-center justify-center bg-white rounded-r-lg">
                    <motion.div
                      animate={{ rotate: expandedStep === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <ChevronDown className="h-5 w-5 text-medium-blue" />
                    </motion.div>
                  </div>
                </button>

                {/* Expandable Description */}
                <AnimatePresence initial={false}>
                  {expandedStep === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 text-gray-700 border-t border-gray-200 bg-white">
                        {step.description}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* ArrowDown icon between cards, except after the last card */}
              {index < processSteps.length - 1 && (
                <div className="flex items-center justify-center my-2">
                  <ArrowDown size={32} className="text-mild-grey" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Optional CTA button */}
        <div className="mt-16 text-center">
          <a 
            href="/process" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300"
          >
            Learn More About Our Process
            <svg className="ml-2 -mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;