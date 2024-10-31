'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Palette, BarChart, Bot, Users, Search, Laptop, ArrowRight } from 'lucide-react'

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
    image: string
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
    image: '/placeholder.svg?height=400&width=600',
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
    image: '/placeholder.svg?height=400&width=600',
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
    image: '/placeholder.svg?height=400&width=600',
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
    image: '/placeholder.svg?height=400&width=600',
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
    image: '/placeholder.svg?height=400&width=600',
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
    image: '/placeholder.svg?height=400&width=600',
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
    image: '/placeholder.svg?height=400&width=600',
  },
}

export default function ImmersiveHeroSection() {
  const [activeTab, setActiveTab] = useState('webDev')

  const ActiveIcon = tabs.find(tab => tab.id === activeTab)?.icon || Laptop

  return (
    <div className="bg-gradient-to-br from-blue-500 via-blue-800 to-blue-600 min-h-screen text-white overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          InSite Tech Solutions
        </motion.h1>
        <motion.p 
          className="text-xl text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Empowering your digital journey with innovative technology solutions
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
                <Image
                  src={content[activeTab].image}
                  alt={content[activeTab].title}
                  className="rounded-lg shadow-2xl"
                  width={600}
                  height={400}
                />
                <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white p-4 rounded-full shadow-lg">
                  <ActiveIcon size={32} />
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-4">Why Choose InSite Tech Solutions?</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: Users, text: 'Expert Team' },
              { icon: Bot, text: 'Cutting-edge Tech' },
              { icon: Laptop, text: 'Global Reach' },
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="bg-white bg-opacity-20 p-4 rounded-full mb-2">
                  <item.icon size={32} />
                </div>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}