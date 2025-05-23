'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Palette, BarChart, Bot, Users, Search, Laptop, ArrowRight } from 'lucide-react'
import WebAppDevGraphic from '@/assets/svg/web-app-dev-graphic.svg'
import CustomSoftwareGraphic from '@/assets/svg/custom-software-graphic.svg'
import SeoGraphic from '@/assets/svg/seo-graphic.svg'
import GraphicDesignGraphic from '@/assets/svg/graphic-design-graphic.svg'
import DataAnalysisGraphic from '@/assets/svg/data-analysis-graphic.svg'
import AiAutomationGraphic from '@/assets/svg/ai-automation-graphic.svg'
import ConsultingGraphic from '@/assets/svg/consulting-graphic.svg'

const tabs = [
  { id: 'webDev', icon: Laptop, title: 'Web & App Development' },
  { id: 'software', icon: Code, title: 'Custom Software Solutions' },
  { id: 'seo', icon: Search, title: 'SEO & Online Marketing' },
  { id: 'design', icon: Palette, title: 'Graphic Design & Branding' },
  { id: 'data', icon: BarChart, title: 'Data Analysis' },
  { id: 'ai', icon: Bot, title: 'AI & Automation' },
  { id: 'consulting', icon: Users, title: 'Consulting & Training' },
]

type ContentType = {
  [key: string]: {
    title: string
    description: string
    features: string[]
    image: React.ComponentType<React.SVGProps<SVGSVGElement>>
  }
}

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
  },
}

export default function ImmersiveHeroSection() {
  const [activeTab, setActiveTab] = useState('webDev')

  const ActiveIcon = tabs.find(tab => tab.id === activeTab)?.icon || Laptop

  return (
    <div className="p-2">
    <div className="rounded-xl bg-gradient-to-br from-blue-500 via-blue-800 to-blue-600 min-h-screen text-white shadow-xl overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services & Solutions
        </motion.h1>
        <motion.p 
          className="text-xl text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Empowering your digital journey with comprehensive technology services
        </motion.p>

        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-2xl">
          <div className="flex flex-wrap justify-center mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 m-2 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white text-indigo-900'
                    : 'bg-transparent text-white hover:bg-white hover:bg-opacity-20'
                }`}
              >
                <tab.icon className="mr-2" />
                {tab.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="space-y-6">
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
                <ul className="space-y-2">
                  {content[activeTab].features.map((feature, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    >
                      <Bot size={20} className="mr-2 text-yellow-400" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.button 
                  className="group text-white bg-white bg-opacity-20 hover:bg-white hover:text-blue-900 font-bold py-2 px-6 rounded-full transition duration-300 flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {content[activeTab].image && (() => {
                  const SvgComponent = content[activeTab].image;
                  return (
                    <SvgComponent
                      className="rounded-lg w-full h-auto max-w-[600px]"
                      aria-label={content[activeTab].title}
                    />
                  );
                })()}
                <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white p-4 rounded-full shadow-lg">
                  <ActiveIcon size={32} />
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
    </div>
  )
}