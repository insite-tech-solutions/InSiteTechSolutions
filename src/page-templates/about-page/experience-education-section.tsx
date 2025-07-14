/**
 * @fileoverview Experience & Education Section Component for About Page
 * 
 * Interactive tabbed section displaying professional experience and educational background.
 * Features responsive design with sidebar navigation on desktop and horizontal scrolling
 * on mobile, detailed cards with highlights, smooth transitions, and entrance animations.
 * 
 * Key Features:
 * - Tabbed interface switching between Experience and Education
 * - Responsive sidebar navigation (desktop) and horizontal scroll (mobile)
 * - Interactive company/institution selection
 * - Detailed cards with role, location, period, and highlights
 * - Logo integration for visual brand recognition
 * - Smooth transitions and hover effects
 * - Accessible navigation with proper ARIA attributes
 * 
 * Technical Implementation:
 * - React state management for tab and selection control
 * - Responsive design patterns for mobile/desktop layouts
 * - TypeScript interfaces for type safety
 * - Image optimization with Next.js Image component
 * - Lucide React icons for consistent iconography
 * - Framer Motion for smooth animations and transitions
 * 
 * @component ExperienceEducation
 * @returns {JSX.Element} Interactive experience and education section
 */

"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { MapPin, Calendar, Award, Code, Microscope, Rocket, Satellite } from 'lucide-react';

/**
 * Animation variants for the experience-education section
 * Three-moment approach: header → content → card transitions
 */
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const contentReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const cardTransition: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

/**
 * Experience item data structure
 * @interface ExperienceItem
 * @property {string} company - Full company name
 * @property {string} companyShort - Abbreviated company name for compact display
 * @property {string} role - Job title or position
 * @property {string} location - Geographic location
 * @property {string} period - Time period of employment
 * @property {React.ReactElement} icon - Icon representing the role/industry
 * @property {React.ReactElement} logo - Company logo element
 * @property {string[]} highlights - Key achievements and responsibilities
 */
interface ExperienceItem {
  company: string;
  companyShort: string;
  role: string;
  location: string;
  period: string;
  icon: React.ReactElement;
  logo: React.ReactElement;
  highlights: string[];
}

/**
 * Education item data structure
 * @interface EducationItem
 * @property {string} institution - Full institution name
 * @property {string} institutionShort - Abbreviated institution name for compact display
 * @property {string} degree - Degree type (Bachelor's, Master's, etc.)
 * @property {string} field - Field of study or major
 * @property {string} location - Geographic location
 * @property {string} period - Time period of study
 * @property {React.ReactElement} icon - Icon representing the field/degree
 * @property {React.ReactElement} logo - Institution logo element
 * @property {string[]} highlights - Key achievements and coursework
 */
interface EducationItem {
  institution: string;
  institutionShort: string;
  degree: string;
  field: string;
  location: string;
  period: string;
  icon: React.ReactElement;
  logo: React.ReactElement;
  highlights: string[];
}

/**
 * Experience & Education Component
 * 
 * Renders a comprehensive background section with tabbed interface for switching
 * between professional experience and educational background. Features responsive
 * design with different layouts for mobile and desktop viewing.
 * 
 * Features:
 * - Tabbed interface with smooth transitions
 * - Responsive sidebar (desktop) and horizontal scroll (mobile)
 * - Interactive selection with visual feedback
 * - Detailed information cards with highlights
 * - Logo and icon integration for visual appeal
 * - Consistent styling with brand colors
 * - Smart animation sequence for enhanced user experience
 * 
 * State Management:
 * - activeTab: Controls Experience/Education tab selection
 * - selectedExperience: Tracks selected experience item
 * - selectedEducation: Tracks selected education item
 * 
 * @component
 * @returns {JSX.Element} Interactive experience and education section
 */
const ExperienceEducation = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [selectedExperience, setSelectedExperience] = useState(0);
  const [selectedEducation, setSelectedEducation] = useState(0);

  const experienceData: ExperienceItem[] = [
    {
      company: "InSite Tech Solutions and Freelance Services",
      companyShort: "ITS",
      role: "Web Developer & Technical Consultant",
      location: "Buffalo, NY",
      period: "2019 – Present",
      icon: <Code className="w-6 h-6" />,
      logo: <Image src="/InSite Magnifier White.svg" alt="ITS Logo" width={24} height={24} className="w-8 h-8 object-contain" />,
      highlights: [
        "Full-stack development including Python, React, Next.js, and PostgreSQL database",
        "Implemented custom ERP and payment systems leveraging open-source technologies",
        "Built custom inventory management systems for academic research lab operations",
        "Increased user engagement 400% and sales 50% through strategic web development and SEO",
        "Developed automated kiosk application for local businesses during COVID-19 pivot"
      ]
    },
    {
      company: "SUNY Research Foundation",
      companyShort: "SUNYRF",
      role: "Staff Scientist & Lab Manager",
      location: "Buffalo, NY",
      period: "2023 – 2025",
      icon: <Microscope className="w-6 h-6" />,
      logo: <Image src="/company-logos/sunyrf-logo.svg" alt="SUNYRF Logo" width={24} height={24} className="w-8 h-8 object-contain" />,
      highlights: [
        "Spearheaded development of PyCAT (Python Condensate Analysis Toolbox) - advanced bioimage analysis platform",
        "Managed procurement and installation of $2.5M+ in specialized laboratory equipment including laser scanning microscopes",
        "Managed a cross-disciplinary team of 10+ post-doctoral researchers, technicians, and students",
        "Created standardized operating procedures and automation systems for enhanced lab efficiency",
        "Contributed data analysis and visualizations for multiple published research projects"
      ]
    },
    {
      company: "Friedrich Alexander Universität",
      companyShort: "FAU",
      role: "Staff Scientist",
      location: "Erlangen, Germany",
      period: "2022 – 2023",
      icon: <Award className="w-6 h-6" />,
      logo: <Image src="/company-logos/fau-logo.svg" alt="FAU Logo" width={24} height={24} className="w-8 h-8 object-contain" />,
      highlights: [
        "Lead author on manuscript: 'Numerical Optimization of Non-Periodic Dielectric Laser Accelerator Structures'",
        "Developed and refined optimization algorithms based on novel EM field coupling discoveries",
        "Calculated complex light-matter interactions at the semi-classical limit",
        "Mentored successor students on optimization algorithms and nano-optical effects",
        "Presented research findings to international co-authors and research teams"
      ]
    },
    {
      company: "Max Planck Institute",
      companyShort: "MPI",
      role: "Graduate Research Student",
      location: "Erlangen, Germany",
      period: "2020 – 2022",
      icon: <Microscope className="w-6 h-6" />,
      logo: <Image src="/company-logos/mpi-logo.svg" alt="MPI Logo" width={24} height={24} className="w-8 h-8 object-contain" />,
      highlights: [
        "Reduced computational complexity from ~10³⁰ to ~10² simulations using advanced adjoint methods",
        "Developed custom ADAM and basin-hopping gradient descent optimization algorithms",
        "Implemented constrained optimization techniques in non-convex parameter spaces",
        "Created a sophisticated program which interfaces with Lumerical's API for time-domain laser field simulations",
        "Participated in exclusive MPI educational programs and international colloquia"
      ]
    },
    {
      company: "UB Nano-Satellite Lab",
      companyShort: "UBNL",
      role: "Chief Systems Engineer",
      location: "Buffalo, NY",
      period: "2019 – 2020",
      icon: <Satellite className="w-6 h-6" />,
      logo: <Image src="/company-logos/ubnl-logo.svg" alt="UBNL Logo" width={24} height={24} className="w-8 h-8 object-contain" />,
      highlights: [
        "Managed requirements verification matrix and provided mission oversight for GLADOS satellite",
        "Coordinated schedules, delegated tasks, and ensured integration across all satellite subsystems",
        "Designed and conducted Gold-level testing protocols on critical flight components",
        "Served as primary liaison between subsystem teams for GLADOS mission",
        "Built and tested components following strict electrical schematics and assembly procedures"
      ]
    }
  ];

  const educationData: EducationItem[] = [
    {
      institution: "Friedrich Alexander Universität",
      institutionShort: "FAU",
      degree: "Master of Science",
      field: "Physics",
      location: "Erlangen-Nürnberg, Germany",
      period: "2020 - 2022",
      icon: <Award className="w-6 h-6" />,
      logo: <Image src="/company-logos/fau-logo.svg" alt="FAU Logo" width={24} height={24} className="w-8 h-8 object-contain" />,
      highlights: [
        "Specialization in Theory, Optics, and Computation with focus on inverse design methods",
        "International Max Planck Research School Graduate Research Student",
        "Thesis: 'Inverse Design of Non-Periodic Dual-Pillar Structures for Dielectric Laser Acceleration'",
        "Manuscript development and co-authorship on cutting-edge optimization research",
        "Extensive training in advanced computational physics and nano-optical theory"
      ]
    },
    {
      institution: "State University of New York at Buffalo",
      institutionShort: "UB",
      degree: "Bachelor of Science",
      field: "Physics",
      location: "Buffalo, NY",
      period: "2016 - 2020",
      icon: <Rocket className="w-6 h-6" />,
      logo: <Image src="/company-logos/ub-logo.svg" alt="UB Logo" width={24} height={24} className="w-8 h-8 object-contain" />,
      highlights: [
        "Co-authored manuscript: 'Intracavity second harmonic generation from a WSe2 monolayer in a passively mode-locked picosecond fiber laser'",
        "UB Nano-Satellite Lab - Chief Systems Engineer for GLADOS CubeSat mission (NASA/AFRL)",
        "Vice President - Society of Physics Students, leading student engagement and events",
        "Physics Tutor - Providing academic support to undergraduate students",
        "Disabled Peer Volunteer Notetaker - Supporting accessibility and inclusion initiatives",
      ]
    }
  ];

  const currentData = activeTab === 'experience' ? experienceData : educationData;
  const selectedIndex = activeTab === 'experience' ? selectedExperience : selectedEducation;
  const selectedItem = currentData[selectedIndex];

  const handleCompanyClick = (index: number) => {
    if (activeTab === 'experience') {
      setSelectedExperience(index);
    } else {
      setSelectedEducation(index);
    }
  };

  return (
    <section>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
            Background
          </h2>
          <div className="w-24 h-1 bg-medium-blue mx-auto"></div>
          <p className="text-xl text-gray-600 mt-4">
            Education and professional experience driving innovative solutions
          </p>
        </motion.div>

        {/* Toggle Buttons */}
        <motion.div 
          className="flex justify-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={contentReveal}
        >
          <div className="bg-gray-100 rounded-lg p-1 flex">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                activeTab === 'experience'
                  ? 'bg-white text-medium-blue shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                activeTab === 'education'
                  ? 'bg-white text-medium-blue shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Education
            </button>
          </div>
        </motion.div>

        {/* Mobile: Horizontal List */}
        <motion.div 
          className="block lg:hidden mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={contentReveal}
        >
          <div className="overflow-x-auto pb-2">
            <div className="flex space-x-3 min-w-max">
              {currentData.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleCompanyClick(index)}
                  className={`flex-shrink-0 p-3 rounded-lg transition-all duration-200 group ${
                    selectedIndex === index
                      ? 'bg-blue-50 border-2 border-blue-200 shadow-sm'
                      : 'bg-white hover:bg-gray-100 border-2 border-gray-200 shadow-md hover:shadow-sm hover:border-blue-200'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-1 min-w-[60px]">
                    <div className="mb-1">{item.logo}</div>
                    <p className={`text-xs font-medium text-center leading-tight ${
                      selectedIndex === index ? 'text-blue-900' : 'text-gray-700'
                    }`}>
                      {activeTab === 'experience' 
                        ? (item as ExperienceItem).companyShort 
                        : (item as EducationItem).institutionShort
                      }
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Desktop: Flex row for sidebar + content */}
        <motion.div 
          className="lg:flex lg:gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={contentReveal}
        >
          {/* Desktop: Vertical Sidebar */}
          <div className="hidden lg:block w-24 flex-shrink-0">
            <div className="space-y-3">
              {currentData.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleCompanyClick(index)}
                  className={`w-full p-3 rounded-lg transition-all duration-200 group ${
                    selectedIndex === index
                      ? 'bg-blue-50 border-2 border-blue-200 shadow-sm'
                      : 'bg-white hover:bg-gray-100 border-2 border-gray-200 shadow-md hover:shadow-sm hover:border-blue-200 transition-all duration-200'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-1">
                    <div className="mb-1">{item.logo}</div>
                    <p className={`text-xs font-medium text-center leading-tight ${
                      selectedIndex === index ? 'text-blue-900' : 'text-gray-700'
                    }`}>
                      {activeTab === 'experience' 
                        ? (item as ExperienceItem).companyShort 
                        : (item as EducationItem).institutionShort
                      }
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-${selectedIndex}`}
                variants={cardTransition}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 pb-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Card layout according to new design */}
                <div className="flex-1">
                  <div className="flex flex-col space-y-2 mb-4">
                    {/* Icon + Title Row */}
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-light-blue to-blue-900 text-white">{selectedItem.icon}</div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                        {activeTab === 'experience' 
                          ? (selectedItem as ExperienceItem).role 
                          : `${(selectedItem as EducationItem).degree} in ${(selectedItem as EducationItem).field}`
                        }
                      </h3>
                    </div>
                    {/* Company Row */}
                    <p className="text-lg font-semibold text-medium-blue">
                      {activeTab === 'experience' 
                        ? (selectedItem as ExperienceItem).company 
                        : (selectedItem as EducationItem).institution
                      }
                    </p>
                    {/* Location + Date Row (always on same line, always with vertical bar) */}
                    <div className="flex flex-row items-center space-x-2 text-gray-600 text-sm">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{selectedItem.location}</span>
                      </div>
                      <span className="text-gray-400">|</span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{selectedItem.period}</span>
                      </div>
                    </div>
                  </div>
                  {/* Highlights */}
                  <div className="space-y-3">
                    {selectedItem.highlights.map((highlight, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-medium-blue rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-700 leading-relaxed text-sm lg:text-base">{highlight}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceEducation;