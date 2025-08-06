/**
 * @fileoverview Timeline Section Component for About Page
 * 
 * Interactive timeline showcasing key milestones in education, research, and professional
 * development. Features collapsible year sections with smooth animations and accessibility
 * support for keyboard navigation.
 * 
 * Key Features:
 * - Chronological timeline with yearly milestones
 * - Collapsible/expandable year sections
 * - Smooth animations with Framer Motion
 * - Keyboard navigation support
 * - Accessibility-compliant with ARIA attributes
 * - Responsive design for mobile and desktop
 * - Call-to-action section for engagement
 * 
 * Technical Implementation:
 * - Uses React state for managing expanded/collapsed years
 * - Framer Motion for scroll-triggered animations
 * - Keyboard event handling for accessibility
 * - Memoized for performance optimization
 * 
 * @component Timeline
 * @returns {JSX.Element} Rendered timeline section with interactive milestones
 */

"use client";

import { useState, memo } from 'react';
import { motion, Variants } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import TailwindButton from '@/components/reusable-components/tailwind-button';

/**
 * Animation variants for the timeline section
 * Three-moment approach: header → timeline → CTA
 */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      opacity: { duration: 0.4 },
      y: { duration: 0.6 }
    },
  },
};

const ctaHighlight: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
      opacity: { duration: 0.5 },
      scale: { duration: 0.7 }
    },
  },
};

/**
 * Timeline data structure for yearly milestones
 * @interface TimelineEntry
 * @property {string} year - The year for the timeline entry
 * @property {string[]} items - Array of milestone descriptions for that year
 */
interface TimelineEntry {
  year: string;
  items: string[];
}

// Static timeline entries for the About page
const timelineData: TimelineEntry[] = [
  {
    year: "2025",
    items: [
      "Established InSite Tech Solutions to provide ethical and personal technology services",
      "Co-author - bioRxiv preprint on biomolecular condensates and phase separation",
      "Implemented custom ERP and payment infrastructure using open-source tools"
    ]
  },
  {
    year: "2024",
    items: [
      "Developed PyCAT-Napari: bioimage analysis program for fluorescence microscopy",
      "Developed banerjeelab.org website and lab member portal",
      "Built a custom inventory management app for academic research lab operations"
    ]
  },
  {
    year: "2023",
    items: [
      "Development of mediumkathleen.com website and blog platform for local licensed medium",
      "Expanded EagleBeak Galleries into full e-commerce site with SEO optimization and social media marketing",
      "Provided graphic design services for local music artists and creative professionals"
    ]
  },
  {
    year: "2022",
    items: [
      "Graduated with MSc in Physics, specializing in Theory, Optics, and Computation",
      "Thesis author and manuscript co-author: \"Numerical Optimization of Non-Periodic Dielectric Laser Accelerator Structures\"",
      "Advanced research in inverse design and computational optimization methods"
    ]
  },
  {
    year: "2021",
    items: [
      "Python High Performance Computing certification - Max Planck Institute",
      "QAOA project: Quantum optimization algorithms for maximum satisfiability problems",
      "Massive meso-scale swimmers simulations using Wolfram Mathematica"
    ]
  },
  {
    year: "2020",
    items: [
      "Graduated with BSc in Physics",
      "Co-author: Non-linear optical metamaterials research on transition metal dichalcogenides",
      "Created a self-service kiosk app for iRepair Buffalo during COVID-19 pivot"
    ]
  }
];

/**
 * Timeline Component
 * 
 * Renders an interactive timeline of key milestones with collapsible year sections.
 * Includes smooth animations, keyboard navigation, and a call-to-action section.
 * 
 * Features:
 * - Collapsible year sections with toggle functionality
 * - Smart three-moment animation sequence
 * - Keyboard accessibility (Enter/Space to toggle)
 * - Visual timeline with connecting line and markers
 * - Responsive design for all screen sizes
 * - Call-to-action section at bottom
 * 
 * @component
 * @returns {JSX.Element} Interactive timeline section
 */
function Timeline(): JSX.Element {
  const [openYears, setOpenYears] = useState(() => timelineData.map(() => true));

  return (
    <section aria-labelledby="timeline-section-title">
      {/* Accessible landmark for Timeline */}
      <h2 id="timeline-section-title" className="sr-only">Timeline</h2>
      <div className="container max-w-4xl mx-auto lg:px-6">
        {/* Section Header */}
        <motion.div 
          key="timeline-header"
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
            Timeline
          </h2>
          <div className="w-24 h-1 bg-medium-blue mx-auto"></div>
          <p className="text-xl text-gray-600 mt-4">
            Key milestones in education, research, and professional development
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-light-grey"></div>
          
          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12">
            {timelineData.map((yearData, yearIndex) => (
              <motion.div
                key={`timeline-year-${yearData.year}`}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.5, 
                  delay: yearIndex * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  opacity: { duration: 0.4 },
                  y: { duration: 0.5 }
                }}
              >
                {/* Year Toggle Marker */}
                <div
                  onClick={() => {
                    const updated = [...openYears];
                    updated[yearIndex] = !updated[yearIndex];
                    setOpenYears(updated);
                  }}
                  className="flex items-center mb-6 cursor-pointer select-none group"
                  aria-expanded={openYears[yearIndex]}
                  aria-controls={`year-${yearData.year}`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      const updated = [...openYears];
                      updated[yearIndex] = !updated[yearIndex];
                      setOpenYears(updated);
                    }
                  }}
                >
                  <div className="absolute left-6 mb-2 w-4 h-4 bg-medium-blue rounded-full border-4 border-gray-50 z-10"></div>
                  <div className="ml-16">
                    <h3 className="text-3xl font-bold text-gray-900 group-hover:underline decoration-medium-blue underline-offset-4 transition-all duration-300">
                      {yearData.year}
                    </h3>
                  </div>
                </div>

                {/* Year Items List */}
                {openYears[yearIndex] && (
                  <div id={`year-${yearData.year}`} className="ml-16 space-y-4">
                    {yearData.items.map((item) => (
                      <div key={item.toLowerCase().replace(/\s+/g, '-')} className="flex items-start space-x-3 group">
                        <div className="flex-shrink-0 mt-1">
                          <CheckCircle className="w-5 h-5 text-medium-blue group-hover:text-blue-700 transition-colors" />
                        </div>
                        <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          key="timeline-cta"
          className="container mx-auto bg-gradient-to-br from-light-blue to-blue-800 border border-light-blue text-white rounded-xl p-8 text-center mt-16 shadow-md hover:shadow-lg"
          style={{ transition: "box-shadow 0.2s ease" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={ctaHighlight}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <h3 className="text-2xl font-semibold">Ready to Add Your Project to the Timeline?</h3>
          </div>
          <p className="mb-6 text-white">
            Let&apos;s discuss how we can solve your technology challenges and create something remarkable together.
          </p>
          <TailwindButton 
            href="/contact"
            className="bg-gray-50 rounded-lg font-semibold shadow-md transition-all duration-200"
          >
            Start Your Project
          </TailwindButton>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(Timeline);