/**
 * @fileoverview Key Benefits Section Component
 * 
 * This component displays a list of key benefits using a carousel, with an optional
 * dynamic background icon. It leverages memoization for performance optimization
 * and dynamically fetches icons based on provided names.
 * 
 * Architecture:
 * - `KeyBenefitsProps`: Defines the props for the KeyBenefits component.
 * - `KeyBenefits`: The main component responsible for rendering the carousel
 *   of benefits and handling the background icon.
 * 
 * Key Features:
 * - Displays benefits using a `CarouselSection` component.
 * - Dynamically renders icons for both individual benefit cards and the section background.
 * - Utilizes `useMemo` to optimize the creation of `BenefitsCard` components and the background icon.
 * - Memoized with `React.memo` for performance enhancements.
 * 
 * @see src/components/reusable-components/benefits-card.tsx
 * @see src/components/reusable-components/carousel-section.tsx
 * @see src/utils/icon-registry.ts
 */

// src/page-templates/service-page/service-scope-section/key-benefits.tsx

'use client';

import { useMemo, memo } from 'react';
import { BenefitItem } from '../types';
import { getIcon } from '@/utils/icon-registry';
import BenefitsCard from '@/components/reusable-components/benefits-card';
import CarouselSection from '@/components/reusable-components/carousel-section';

/**
 * Props interface for the `KeyBenefits` component.
 */
interface KeyBenefitsProps {
  /** An array of benefit items to display in the carousel. */
  benefits: BenefitItem[];
  /** Optional name of the icon to be used as a background for the section. */
  backgroundIcon?: string;
  /** Optional width for the background icon. */
  backgroundIconWidth?: number;
  /** Optional height for the background icon. */
  backgroundIconHeight?: number;
  /** The title for the key benefits section. */
  keyBenefitsTitle: string;
  /** The descriptive text for the key benefits section. */
  keyBenefitsDescription: string;
}

/**
 * KeyBenefits Component
 * 
 * A memoized component that displays key benefits in a carousel section.
 * It dynamically renders individual `BenefitsCard` components and an optional
 * background icon based on the provided props.
 * 
 * @param {KeyBenefitsProps} props - The properties for the component.
 * @returns {JSX.Element} A memoized React component displaying key benefits.
 */
function KeyBenefits({
  benefits,
  backgroundIcon,
  backgroundIconWidth,
  backgroundIconHeight,
  keyBenefitsTitle,
  keyBenefitsDescription
}: KeyBenefitsProps): JSX.Element {
  // Memoize the creation of BenefitsCard components to prevent unnecessary re-renders
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

  // Memoize the IconComponent based on backgroundIcon. Defaults to 'CodeXml' if not provided.
  const IconComponent = useMemo(() => {
    return backgroundIcon ? getIcon(backgroundIcon) : getIcon('CodeXml');
  }, [backgroundIcon]);
  
  // Memoize the background element to avoid re-creating it on every render
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

export default memo(KeyBenefits);