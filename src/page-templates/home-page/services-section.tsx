/**
 * @fileoverview Services Section Component for Homepage
 *
 * This component creates an interactive services showcase with tabbed navigation,
 * animated content transitions, and comprehensive service descriptions. Features
 * responsive design with desktop tabs and mobile select dropdown.
 *
 * Features:
 * - Interactive tabbed navigation for desktop
 * - Mobile-friendly select dropdown
 * - Animated content transitions with Framer Motion
 * - Comprehensive service descriptions and features
 * - SVG graphics for each service category
 * - Responsive grid layout with call-to-action buttons
 *
 * @module ServicesSection
 */

'use client';

import { useState, memo } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { Code, Palette, BarChart, Bot, Users, Search, Laptop, CheckCircle } from 'lucide-react'
import WebAppDevGraphic from '@/assets/svg/web-app-dev-graphic.svg'
import CustomSoftwareGraphic from '@/assets/svg/custom-software-graphic.svg'
import SeoGraphic from '@/assets/svg/seo-graphic.svg'
import GraphicDesignGraphic from '@/assets/svg/graphic-design-graphic.svg'
import DataAnalysisGraphic from '@/assets/svg/data-analysis-graphic.svg'
import AiAutomationGraphic from '@/assets/svg/ai-automation-graphic.svg'
import ConsultingGraphic from '@/assets/svg/consulting-graphic.svg'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import TailwindButton from '@/components/reusable-components/tailwind-button'

/**
 * Static data for ServicesSection tabs and content
 * 
 * Defines the navigation tabs with icons and titles for
 * the services section. Each tab corresponds to a service category.
 * 
 * @constant {Array<{id: string, icon: React.ComponentType, title: string}>} tabs
 */
const tabs = [
  { id: 'webDev', icon: Laptop, title: 'Web & App Development' },
  { id: 'software', icon: Code, title: 'Custom Software Solutions' },
  { id: 'seo', icon: Search, title: 'SEO & Online Marketing' },
  { id: 'design', icon: Palette, title: 'Graphic Design & Branding' },
  { id: 'data', icon: BarChart, title: 'Data Analysis' },
  { id: 'ai', icon: Bot, title: 'AI & Automation' },
  { id: 'consulting', icon: Users, title: 'Consulting & Training' },
]

/**
 * Type definition for service content structure
 * 
 * Defines the structure for service content including title,
 * description, features list, associated SVG graphic, and URL.
 * 
 * @typedef {Object} ContentType
 * @property {string} title - Service title
 * @property {string} description - Service description
 * @property {string[]} features - List of service features
 * @property {React.ComponentType<React.SVGProps<SVGSVGElement>>} image - SVG graphic component
 * @property {string} url - Service page URL
 */
type ContentType = {
  [key: string]: {
    title: string
    description: string
    features: string[]
    image: React.ComponentType<React.SVGProps<SVGSVGElement>>
    url: string
  }
}

/**
 * Service content data
 * 
 * Comprehensive content for each service category including
 * descriptions, feature lists, and associated graphics.
 * 
 * @constant {ContentType} content
 */
const content: ContentType = {
  webDev: {
    title: 'Web & App Development',
    description: 'Transform your digital presence with modern, responsive solutions that work seamlessly across all platforms and devices. We build cutting-edge websites and applications that engage users and drive business growth.',
    features: [
      'Website Design & Development',
      'Full-Stack Mobile, Desktop, & Web App development',
      'Cross-Platform Development (iOS, Android, Windows, Mac, Linux)',
      'Modern Tech Frameworks with Responsive Designs',
      'Ongoing Maintenance & Support'
    ],
    image: WebAppDevGraphic,
    url: '/services/web-and-app-development',
  },
  software: {
    title: 'Custom Software Solutions',
    description: 'Tailored to your business or research needs, our custom software solutions are designed to address your unique challenges. We build scalable, efficient systems that streamline operations and boost productivity.',
    features: [
      'Bespoke Software & Desktop Applications',
      'System Integration & API Development',
      'Computational Science & Simulations',
      'Legacy Software Modernization',
      'Inverse Design & Process Optimization'
    ],
    image: CustomSoftwareGraphic,
    url: '/services/custom-software-solutions',
  },
  seo: {
    title: 'SEO & Online Marketing',
    description: 'Boost your online visibility to effectively reach and engage your target audience. Our data-driven strategies connect you with the right audience, increase traffic, and drive conversions to grow your brand\'s digital footprint.',
    features: [
      'Search Engine Optimization (SEO)',
      'Social Media & Email Marketing Campaigns',
      'Content Marketing Strategies & Market Analysis',
      'Analytics & Performance Tracking',
      'A/B Testing & Conversion Rate Optimization'
    ],
    image: SeoGraphic,
    url: '/services/seo-and-online-marketing',
  },
  design: {
    title: 'Graphic Design & Branding',
    description: 'Create a compelling brand identity that resonates with your audience. From logos to marketing materials, we craft visually striking designs that set your business apart.',
    features: [
      'Logo Design & Brand Identity Development',
      'User Interface/Experience (UI/UX) Design',
      'Digital Content & Visual Asset Creation',
      'Print & Digital Marketing Material Design',
      'Photo & Video Editing Services'
    ],
    image: GraphicDesignGraphic,
    url: '/services/graphic-design-and-branding',
  },
  data: {
    title: 'Data Analysis',
    description: 'Transform raw data into actionable insights. From business analytics to scientific research, our comprehensive data analysis services help you make informed decisions, optimize performance, and uncover hidden opportunities in your business by leveraging the full potential of your data.',
    features: [
      'Business Intelligence & Performance Analytics',
      'Scientific Data Analysis & System Modeling',
      'Data Visualization, Summarization, & Reporting',
      'Predictive Modeling & Forecasting',
      'Data Mining & Processing'
    ],
    image: DataAnalysisGraphic,
    url: '/services/data-analysis',
  },
  ai: {
    title: 'AI & Automation',
    description: 'Harness the power of artificial intelligence and machine learning to optimize your operations. We streamline processes, reduce operational costs, and enhance productivity through advanced technologies that transform your business.',
    features: [
      'Machine Learning & Efficiency Optimizations',
      'Process Standardization & Task Automation',
      'Custom Model Generation & Training',
      'AI-Powered Chatbots & Virtual Assistants Development',
      'Custom GPT Creation, Prompt Engineering, & AI Integration Services'
    ],
    image: AiAutomationGraphic,
    url: '/services/ai-and-automation',
  },
  consulting: {
    title: 'Consulting & Training',
    description: 'Empower your team with expert guidance and the tools and knowledge they need. Our consulting and training services help you navigate technical challenges and implement effective solutions.',
    features: [
      'Digital Transformation Strategies',
      'Implementation, Maintenance, Support, & Advisory Services',
      'Technology Optimization & Modernization',
      'Technical Training & Consulting',
      'Official Documentation & Report Copywriting Services'
    ],
    image: ConsultingGraphic,
    url: '/services/consulting-and-training',
  },
}

/**
 * Animation variant for section entrance
 * 
 * Simple, clean entrance animation for the entire services section
 * with fade-in and slide-up effects.
 * 
 * @constant {Variants} sectionEntrance
 */
const sectionEntrance: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

/**
 * ServicesSection Component
 * 
 * Creates an interactive services showcase with tabbed navigation,
 * animated content transitions, and comprehensive service descriptions.
 * Features responsive design with desktop tabs and mobile select dropdown.
 * 
 * The component includes:
 * - Interactive tab navigation for desktop users
 * - Mobile-friendly select dropdown for smaller screens
 * - Animated content transitions using Framer Motion
 * - Comprehensive service descriptions with feature lists
 * - SVG graphics for visual representation of each service
 * - Call-to-action buttons for lead generation
 * - Responsive grid layout with proper spacing
 * 
 * The component uses state management for active tab selection
 * and provides smooth animations for content transitions.
 * 
 * @returns {JSX.Element} Rendered services section component
 * 
 * @example
 * ```tsx
 * <ServicesSection />
 * ```
 */
function ServicesSection(): JSX.Element {
  // Track the currently active service tab
  const [activeTab, setActiveTab] = useState('webDev')

  // Get the icon for the currently active tab
  const ActiveIcon = tabs.find(tab => tab.id === activeTab)?.icon || Laptop

  return (
    <section aria-labelledby="services-section-title">
      {/* Accessible landmark for Services Section */}
      <h2 id="services-section-title" className="sr-only">Our Services & Solutions</h2>
      
      {/* Main container with entrance animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={sectionEntrance}
      >
        {/* Services container with gradient background */}
        <div className="container mx-auto relative rounded-xl p-6 bg-gradient-to-br from-light-blue via-blue-800 to-mild-blue-alt shadow-xl text-white">
          {/* Section Header with animated title and description */}
          <motion.h1 
            className="text-3xl md:text-4xl font-bold text-center my-2"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services & Solutions
          </motion.h1>
          <motion.p 
            className="text-lg text-center text-gray-100 mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Empowering your digital journey with comprehensive technology services
          </motion.p>

          {/* Content container with backdrop blur effect */}
          <div className="bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg transition-all mb-2">
            {/* Desktop Tabs Navigation */}
            <div className="hidden lg:flex flex-wrap justify-center mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-4 py-2 m-1 rounded-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-white text-medium-blue'
                      : 'bg-transparent text-white hover:bg-white hover:bg-opacity-20'
                  }`}
                >
                  <tab.icon className="mr-2" />
                  {tab.title}
                </button>
              ))}
            </div>
            
            {/* Mobile Tabs Select */}
            <div className="lg:hidden mb-8">
              <Select onValueChange={(value) => setActiveTab(value)} defaultValue={activeTab}>
                <SelectTrigger className="w-full rounded-lg bg-white text-blue-700 border border-blue-200 shadow-md focus:ring-2 focus:ring-blue-400 focus:border-blue-400">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-white border-blue-200 rounded-lg shadow-lg text-blue-700 overflow-hidden">
                  {tabs.map((tab) => (
                    <SelectItem
                      key={tab.id}
                      value={tab.id}
                      className="hover:bg-blue-100 focus:bg-blue-100 text-blue-700 pl-8 py-2 rounded-lg cursor-pointer"
                    >
                      {tab.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Content Display Area with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-6 items-center"
              >
                {/* Text content with staggered animations */}
                <div className="space-y-4">
                  <motion.h2 
                    className="text-3xl font-bold"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {content[activeTab].title}
                  </motion.h2>
                  <motion.p 
                    className="text-lg"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {content[activeTab].description}
                  </motion.p>
                  
                  {/* Features list with staggered item animations */}
                  <ul className="space-y-2">
                    {content[activeTab].features.map((feature) => (
                      <motion.li 
                        key={feature.toLowerCase().replace(/\s+/g, '-')} 
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + content[activeTab].features.indexOf(feature) * 0.1 }}
                      >
                        <CheckCircle className="h-5 w-5 rounded-full text-very-light-grey-alt mt-0.5 mr-2 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* Call-to-action button */}
                  <motion.button 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                  >
                    <TailwindButton href={content[activeTab].url} className="bg-gray-50 font-semibold w-1/2 mx-auto mt-4 rounded-lg">
                    Learn More
                    </TailwindButton>
                  </motion.button>
                </div>
                
                {/* Image content with scale animation */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  {/* Dynamic SVG component rendering */}
                  {content[activeTab].image && (() => {
                    const SvgComponent = content[activeTab].image;
                    return (
                      <SvgComponent
                        className="rounded-lg w-full h-auto max-w-[600px]"
                        aria-label={content[activeTab].title}
                      />
                    );
                  })()}
                  
                  {/* Active tab icon overlay */}
                  <div className="absolute -bottom-4 -right-4 bg-blue-700 text-white p-4 rounded-full shadow-lg">
                    <ActiveIcon size={32} />
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default memo(ServicesSection);