/**
 * @fileoverview Process Section Component for Homepage
 *
 * This component creates an interactive process workflow section showcasing
 * the company's 5-step methodology (5 Ds). Features expandable step cards
 * with smooth animations and responsive design for mobile and desktop.
 *
 * Features:
 * - Interactive expandable step cards with smooth animations
 * - Responsive design with different layouts for mobile/desktop
 * - Framer Motion animations for expand/collapse effects and entrance animations
 * - Accessibility features with ARIA labels and keyboard navigation
 * - Visual process flow with arrow indicators
 * - Call-to-action link to detailed process page
 *
 * @module ProcessSection
 */

'use client';

import React,{ useState, useEffect, memo } from 'react';
import { Search, ClipboardList, Paintbrush, Code, Rocket, ChevronDown, ArrowRight, ArrowDown } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

/**
 * Process step data structure
 * 
 * Defines the structure for each process step including
 * number, title, icon, and description.
 * 
 * @interface ProcessStep
 * @property {string} number - Step number identifier
 * @property {string} title - Step title
 * @property {JSX.Element} icon - Lucide React icon component
 * @property {string} description - Detailed step description
 */
interface ProcessStep {
  number: string;
  title: string;
  icon: JSX.Element;
  description: string;
}

/**
 * Static content: steps for our process section
 * 
 * Defines the 5-step process methodology (5 Ds) with
 * detailed descriptions for each phase of the workflow.
 * 
 * @constant {ProcessStep[]} processSteps
 */
const processSteps: ProcessStep[] = [
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

/**
 * Animation variant for fade-in-up effect
 * 
 * Simple fade-in animation with upward movement
 * for smooth entrance effects.
 * 
 * @constant {Variants} fadeInUp
 */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

/**
 * Animation variant for staggered container
 * 
 * Provides staggered animation timing for child elements
 * to create a wave-like entrance effect.
 * 
 * @constant {Variants} staggerContainer
 */
const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

/**
 * Animation variant for process step cards
 * 
 * Card entrance animation with scale and fade effect
 * for engaging visual introduction.
 * 
 * @constant {Variants} stepCardVariants
 */
const stepCardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

/**
 * Animation variant for arrow indicators
 * 
 * Simple fade-in for arrow elements between steps
 * with subtle delay for natural flow.
 * 
 * @constant {Variants} arrowVariants
 */
const arrowVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.3
    }
  }
};

/**
 * ProcessSection Component
 * 
 * Creates an interactive process workflow section showcasing
 * the company's 5-step methodology. Features expandable step
 * cards with smooth animations and responsive design.
 * 
 * The component includes:
 * - Interactive step cards with expand/collapse functionality
 * - Responsive layouts for desktop (horizontal) and mobile (vertical)
 * - Smooth animations using Framer Motion for entrance and interactions
 * - Visual process flow with arrow indicators
 * - Accessibility features with proper ARIA attributes
 * - Call-to-action link to detailed process information
 * 
 * The 5-step process (5 Ds) includes:
 * - Discovery: Understanding goals and challenges
 * - Definition: Translating needs into roadmap
 * - Design: Creating thoughtful, efficient designs
 * - Development: Building robust, scalable solutions
 * - Deployment: Launching with ongoing support
 * 
 * @returns {JSX.Element} Interactive process workflow section
 * 
 * @example
 * ```tsx
 * <ProcessSection />
 * ```
 */
function ProcessSection(): JSX.Element {
  // Track which step is currently expanded
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  // Track client-side mounting to prevent hydration mismatches
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state on client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  /**
   * Handle click to expand/collapse description
   * 
   * Toggles the expanded state of a process step.
   * If the same step is clicked, it collapses.
   * If a different step is clicked, it expands that step.
   * 
   * @param {number} index - Index of the step to toggle
   */
  const toggleDescription = (index: number) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  return (
    <motion.section 
      aria-labelledby="process-section-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Accessible landmark for Process Section */}
      <h2 id="process-section-title" className="sr-only">Our Process</h2>
      
      {/* Main container */}
      <div className="container mx-auto">
        {/* Section header with title and description */}
        <motion.div className="text-center mb-10" variants={fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Process</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            We believe that every successful project starts with a clear, collaborative process. We follow a methodology that we refer to as the 5 Ds: Discovery, Definition, Design, Development, and Deployment. Our approach is designed to deliver results that drive your business forward—combining strategic insight, creative thinking, and technical expertise at every stage.
          </p>
        </motion.div>

        {/* Desktop Process Steps - Horizontal layout */}
        <motion.div 
          className="hidden md:flex flex-wrap justify-center items-start gap-x-0 gap-y-6"
          variants={staggerContainer}
        >
          {processSteps.map((step, index) => (
            <React.Fragment key={step.number}>
              {/* Process step card */}
              <motion.div
                className={`bg-white rounded-lg shadow-md border overflow-hidden transition-all duration-300 max-w-xs w-full flex flex-col
                  ${expandedStep === index ? 'border-blue-600' : 'border-gray-300 hover:border-mild-blue'}`}
                variants={stepCardVariants}
              >
                {/* Clickable Header with icon, title, and chevron */}
                <button
                  type="button"
                  onClick={() => toggleDescription(index)}
                  aria-expanded={expandedStep === index}
                  className="w-full flex items-stretch text-left focus:outline-none p-0"
                >
                  {/* Icon Square with gradient background */}
                  <div className="bg-gradient-to-br from-light-blue to-blue-900 p-4 flex items-center justify-center">
                    {step.icon}
                  </div>
                  {/* Title Area with step number and title */}
                  <div className="p-4 flex-1 flex items-center">
                    <span className="text-medium-blue text-xl font-medium mr-2">{step.number}</span>
                    <span className="text-gray-800 text-xl font-medium border-l-2 border-mild-grey pl-2">
                      {step.title}
                    </span>
                  </div>
                  {/* Chevron indicator with rotation animation */}
                  <div className="p-4 flex items-center justify-center bg-white rounded-r-md">
                    {isMounted ? (
                      <motion.div
                        animate={{ rotate: expandedStep === index ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <ChevronDown className="h-5 w-5 text-medium-blue" />
                      </motion.div>
                    ) : (
                      <ChevronDown className="h-5 w-5 text-medium-blue" />
                    )}
                  </div>
                </button>

                {/* Expandable Description with smooth animation */}
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
              </motion.div>
              {/* Arrow indicator between steps (except after last step) */}
              {index < processSteps.length - 1 && (
                <motion.div 
                  className="flex items-center mt-4"
                  variants={arrowVariants}
                >
                  <ArrowRight size={32} className="text-mild-grey" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Mobile Process Steps - Vertical layout */}
        <motion.div 
          className="md:hidden space-y-4"
          variants={staggerContainer}
        >
          {processSteps.map((step, index) => (
            <React.Fragment key={step.number}>
              {/* Process step card for mobile */}
              <motion.div 
                className={`bg-white rounded-lg shadow-md border overflow-hidden transition-all duration-300 flex flex-col
                          ${expandedStep === index ? 'border-blue-600' : 'border-gray-300 hover:border-mild-blue'}`}
                variants={stepCardVariants}
              >
                {/* Clickable Header with icon, title, and chevron */}
                <button
                  type="button"
                  onClick={() => toggleDescription(index)}
                  aria-expanded={expandedStep === index}
                  className="w-full flex items-stretch text-left focus:outline-none p-0"
                >
                  {/* Icon Square with gradient background */}
                  <div className="bg-gradient-to-br from-light-blue to-blue-900 p-4 flex items-center justify-center">
                    {step.icon}
                  </div>
                  {/* Title Area with step number and title */}
                  <div className="p-4 flex-1 flex items-center">
                    <span className="text-medium-blue text-xl font-medium mr-2">{step.number}</span>
                    <span className="text-gray-800 text-xl font-medium border-l-2 border-mild-grey pl-2">
                      {step.title}
                    </span>
                  </div>
                  {/* Chevron indicator with rotation animation */}
                  <div className="p-4 flex items-center justify-center bg-white rounded-r-lg">
                    {isMounted ? (
                      <motion.div
                        animate={{ rotate: expandedStep === index ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <ChevronDown className="h-5 w-5 text-medium-blue" />
                      </motion.div>
                    ) : (
                      <ChevronDown className="h-5 w-5 text-medium-blue" />
                    )}
                  </div>
                </button>

                {/* Expandable Description with smooth animation */}
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
              </motion.div>
              {/* Arrow indicator between steps (except after last step) */}
              {index < processSteps.length - 1 && (
                <motion.div 
                  className="flex items-center justify-center my-2"
                  variants={arrowVariants}
                >
                  <ArrowDown size={32} className="text-mild-grey" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Process CTA with animation */}
        <motion.div variants={fadeInUp} className="mt-10 flex justify-center">
                <a
                  href={"/about/development-process"}
                  className="group inline-flex items-center gap-2 text-mild-blue hover:text-medium-blue-alt font-medium transition-colors"
                >
                  Learn More About Our Process
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 group-hover:translate-x-1 transition-transform"
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
              </motion.div>
      </div>
    </motion.section>
  );
};

export default memo(ProcessSection);