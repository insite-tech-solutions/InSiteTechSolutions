// src/page-templates/service-page/applications-section/industry-solutions.tsx

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { IndustryItem } from '../types'
import dynamic from 'next/dynamic'

interface IndustrySolutionsProps {
  industries: IndustryItem[]
}

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    }
  }
}

/**
 * IndustrySolutions component displays industries in a carousel
 */
const IndustrySolutions: React.FC<IndustrySolutionsProps> = ({ industries }) => {
  // Use dynamic import for the IndustryCard component
  const IndustryCard = dynamic(
    () => import('@/components/reusable-components/industry-card'),
    { ssr: false, loading: () => <div className="w-full h-60 bg-gray-100 rounded-xl animate-pulse" /> }
  );
  
  // Use dynamic import for the CarouselSection component
  const CarouselSection = dynamic(
    () => import('@/components/reusable-components/carousel-section'),
    { ssr: false, loading: () => <div className="w-full h-80 bg-gray-100 rounded-xl animate-pulse" /> }
  );
  
  // Generate IndustryCard components
  const cards = industries.map((industry, index) => {
    // Dynamically import the icon
    const IconComponent = dynamic(
      () => import('lucide-react').then((mod) => mod[industry.icon]),
      { ssr: false, loading: () => null }
    );
    
    return (
      <IndustryCard
        key={index}
        icon={IconComponent}
        title={industry.title}
        items={industry.items}
      />
    );
  });

  // Use Code2 as background icon (common in original)
  const BackgroundIcon = dynamic(
    () => import('lucide-react').then((mod) => mod['Code2']),
    { ssr: false, loading: () => null }
  );
  
  // Import TailwindButton for the CTA
  const TailwindButton = dynamic(
    () => import('@/components/reusable-components/tailwind-button'),
    { ssr: false, loading: () => <div className="w-32 h-10 bg-white rounded-full animate-pulse" /> }
  );

  return (
    <>
      {/* Display industries in a carousel */}
      <CarouselSection
        title="Industry-Specific Solutions"
        description="Drawing on our technical expertise across numerous sectors, we create customized solutions that meet the unique demands of your industry."
        cards={cards}
        background={<BackgroundIcon className="text-blue-600" width={600} height={600} strokeWidth={1.5} />}
      />

      {/* And Many More! Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: 'easeOut',
        }}
        className="container mx-auto bg-gradient-to-br from-medium-blue to-blue-800 border border-medium-blue text-white rounded-xl p-8 text-center mt-12 shadow-md hover:shadow-lg transition-all duration-200"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <h4 className="text-2xl font-semibold">And Many More!</h4>
        </div>
        <p className="mb-6 text-blue-100">
          Don't see your industry listed? Contact us to discuss your
          specific needs.
        </p>
        <TailwindButton 
          href="/contact" 
          className="bg-white rounded-lg font-semibold shadow-md transition-all duration-200"
        >
          Get in Touch
        </TailwindButton>
      </motion.div>
    </>
  )
}

export default IndustrySolutions