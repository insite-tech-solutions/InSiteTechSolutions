// src/page-templates/service-page/service-scope-section/key-benefits.tsx

'use client';

import React from 'react';
import { BenefitItem } from '../types';
import dynamic from 'next/dynamic';

interface KeyBenefitsProps {
  benefits: BenefitItem[];
  backgroundIcon?: string; // Optional icon name for background
}

/**
 * KeyBenefits component that displays benefits in a carousel
 * 
 * @param benefits - Array of benefit items to display
 * @param backgroundIcon - Optional icon name for background
 */
const KeyBenefits: React.FC<KeyBenefitsProps> = ({ benefits, backgroundIcon }) => {
  // Use dynamic import for the benefit cards
  const BenefitsCard = dynamic(() => import('@/components/reusable-components/benefits-card'), {
    ssr: false,
    loading: () => <div className="w-full h-60 bg-gray-100 rounded-xl animate-pulse" />
  });
  
  // Use dynamic import for the carousel section
  const CarouselSection = dynamic(() => import('@/components/reusable-components/carousel-section'), {
    ssr: false,
    loading: () => <div className="w-full h-80 bg-gray-100 rounded-xl animate-pulse" />
  });
  
  // Generate BenefitsCard components
  const cards = benefits.map((benefit, index) => {
    // For the BenefitsCard, we need to dynamically import the icon at render time
    const IconComponent = dynamic(
      () => import('lucide-react').then((mod) => mod[benefit.icon]),
      { ssr: false, loading: () => null }
    );
    
    return (
      <BenefitsCard
        key={index}
        icon={IconComponent}
        title={benefit.title}
        description={benefit.description}
      />
    );
  });

  // Always use dynamic import for the background icon if provided
  const BackgroundIcon = backgroundIcon
    ? dynamic(() => import('lucide-react').then((mod) => mod[backgroundIcon]), { ssr: false, loading: () => null })
    : null;

  return (
    <CarouselSection
      title="Key Benefits"
      description="Our custom software solutions provide measurable improvements to your business operations and research capabilities."
      cards={cards}
      background={
        BackgroundIcon ? (
          <BackgroundIcon className="text-medium-blue-alt" width={400} height={375} strokeWidth={1.5} />
        ) : null
      }
    />
  );
};

export default KeyBenefits;