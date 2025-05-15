// src/page-templates/service-page/service-scope-section/key-benefits.tsx

'use client';

import React, { useMemo } from 'react';
import { BenefitItem } from '../types';
import { getIcon } from '@/utils/icon-registry';
import BenefitsCard from '@/components/reusable-components/benefits-card';
import CarouselSection from '@/components/reusable-components/carousel-section';

interface KeyBenefitsProps {
  benefits: BenefitItem[];
  backgroundIcon?: string;
  backgroundIconWidth?: number;
  backgroundIconHeight?: number;
  keyBenefitsTitle: string;
  keyBenefitsDescription: string;
}

/**
 * A memoized component that displays key benefits in a carousel
 * with optional background icon for visual emphasis.
 */
/**
 * KeyBenefits component that displays benefits in a carousel
 * 
 * @param benefits - Array of benefit items to display
 * @param backgroundIcon - Optional icon name for background
 * @param backgroundIconWidth - Optional width for background icon
 * @param backgroundIconHeight - Optional height for background icon
 * @param keyBenefitsTitle - Title for the key benefits section
 * @param keyBenefitsDescription - Description for the key benefits section
 */
const KeyBenefits: React.FC<KeyBenefitsProps> = ({ 
  benefits, 
  backgroundIcon,
  backgroundIconWidth,
  backgroundIconHeight,
  keyBenefitsTitle,
  keyBenefitsDescription
}) => {
  // Generate BenefitsCard components
  const cards = useMemo(() => {
    return benefits.map((benefit) => (
      <BenefitsCard
        key={benefit.title}
        icon={benefit.icon}
        title={benefit.title}
        description={benefit.description}
      />
    ));
  }, [benefits]);

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
    <CarouselSection
      title={keyBenefitsTitle}
      description={keyBenefitsDescription}
      cards={cards}
      background={backgroundElement}
    />
  );
};

export default React.memo(KeyBenefits);