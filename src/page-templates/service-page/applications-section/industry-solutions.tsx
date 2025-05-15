// src/page-templates/service-page/applications-section/industry-solutions.tsx

'use client'

import React, { useMemo, memo } from 'react'
import { motion } from 'framer-motion'
import { IndustryItem } from '../types'
import { getIcon } from '@/utils/icon-registry';
import IndustryCard from '@/components/reusable-components/industry-card';
import CarouselSection from '@/components/reusable-components/carousel-section';
import TailwindButton from '@/components/reusable-components/tailwind-button';

interface IndustrySolutionsProps {
  industries: IndustryItem[]
  backgroundIcon?: string;
  backgroundIconWidth?: number;
  backgroundIconHeight?: number;
  industrySolutionsTitle: string;
  industrySolutionsDescription: string;
}

/**
 * IndustrySolutions component displays industries in a carousel
 * 
 * @param industries - Array of industry items to display
 * @param backgroundIcon - Optional icon name for background
 * @param backgroundIconWidth - Optional width for background icon
 * @param backgroundIconHeight - Optional height for background icon
 * @param industrySolutionsTitle - Title for the industry solutions section
 * @param industrySolutionsDescription - Description for the industry solutions section
 */

/**
 * A memoized component that displays industry solutions in a carousel
 * with an optional background icon and a CTA card for additional inquiries.
 */
const IndustrySolutions: React.FC<IndustrySolutionsProps> = ({ 
  industries, 
  backgroundIcon,
  backgroundIconWidth,
  backgroundIconHeight,
  industrySolutionsTitle,
  industrySolutionsDescription
}) => {
  // Generate IndustryCard components
  const cards = useMemo(() => {
    return industries.map((industry) => (
      <IndustryCard
        key={industry.title}
        icon={industry.icon}
        title={industry.title}
        items={industry.items}
      />
    ));
  }, [industries]);

  const IconComponent = useMemo(() => {
    return backgroundIcon ? getIcon(backgroundIcon) : getIcon('CodeXml');
  }, [backgroundIcon]);

  const backgroundElement = useMemo(() => (
    <IconComponent 
      className="text-mild-blue-alt" 
      width={backgroundIconWidth || 425}
      height={backgroundIconHeight || 425}
      strokeWidth={1.5} 
    />
  ), [IconComponent, backgroundIconWidth, backgroundIconHeight]);

  return (
    <>
      {/* Display industries in a carousel */}
      <CarouselSection
        title={industrySolutionsTitle}
        description={industrySolutionsDescription}
        cards={cards}
        background={backgroundElement}
      />

      {/* And Many More! Card */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: 'easeOut',
        }}
        className="container mx-auto bg-gradient-to-br from-light-blue to-blue-800 border border-light-blue text-white rounded-xl p-8 text-center mt-6 md:mt-12 shadow-md hover:shadow-lg transition-all duration-200"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <h4 className="text-2xl font-semibold">And Many More!</h4>
        </div>
        <p className="mb-6 text-white">
          Don&apos;t see your industry listed? Contact us to discuss your
          specific needs.
        </p>
        <TailwindButton 
          href="/contact" 
          className="bg-white rounded-lg font-semibold shadow-md transition-all duration-200"
        >
          Get in Touch
        </TailwindButton>
      </motion.section>
    </>
  )
}

export default memo(IndustrySolutions)