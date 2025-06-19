/**
 * @fileoverview Industry Solutions Section Component
 * 
 * This component displays a carousel of industry-specific solutions, each represented by an `IndustryCard`.
 * It includes an optional dynamic background icon for the carousel and a static 'And Many More!' call-to-action card
 * for further inquiries. The component optimizes performance using memoization and integrates Framer Motion
 * for entrance animations.
 * 
 * Architecture:
 * - `IndustrySolutionsProps`: Defines the props for the main component.
 * - `IndustrySolutions`: The main component responsible for rendering the carousel
 *   of industries and the additional CTA card.
 * 
 * Key Features:
 * - Displays industries using a `CarouselSection` component.
 * - Dynamically renders icons for the carousel background.
 * - Utilizes `useMemo` to optimize the creation of `IndustryCard` components and the background icon.
 * - Includes a dedicated call-to-action card with Framer Motion animation.
 * - Memoized with `React.memo` for overall component performance enhancements.
 * 
 * @see src/components/reusable-components/industry-card.tsx
 * @see src/components/reusable-components/carousel-section.tsx
 * @see src/components/reusable-components/tailwind-button.tsx
 * @see src/utils/icon-registry.ts
 * @see https://www.framer.com/motion/
 */

'use client'

import { useMemo, memo } from 'react'
import { motion } from 'framer-motion'
import { IndustryItem } from '../types'
import { getIcon } from '@/utils/icon-registry';
import IndustryCard from '@/components/reusable-components/industry-card';
import CarouselSection from '@/components/reusable-components/carousel-section';
import TailwindButton from '@/components/reusable-components/tailwind-button';

/**
 * Props interface for the `IndustrySolutions` component.
 */
interface IndustrySolutionsProps {
  /** An array of industry items to display in the carousel. */
  industries: IndustryItem[]
  /** Optional name of the icon to be used as a background for the carousel section. */
  backgroundIcon?: string;
  /** Optional width for the background icon. */
  backgroundIconWidth?: number;
  /** Optional height for the background icon. */
  backgroundIconHeight?: number;
  /** The title for the industry solutions section. */
  industrySolutionsTitle: string;
  /** The descriptive text for the industry solutions section. */
  industrySolutionsDescription: string;
}

/**
 * IndustrySolutions Component
 * 
 * A memoized component that displays industry-specific solutions in a carousel format.
 * It dynamically generates `IndustryCard` components from the provided data and includes
 * a customizable background icon for the `CarouselSection`. Additionally, it renders a
 * static call-to-action card encouraging users to get in touch for unlisted industries.
 * Framer Motion is used for the entrance animation of the CTA card.
 * 
 * @param {IndustrySolutionsProps} props - The properties for the component.
 * @returns {JSX.Element} A memoized React functional component displaying industry solutions.
 */
function IndustrySolutions({
  industries, 
  backgroundIcon,
  backgroundIconWidth,
  backgroundIconHeight,
  industrySolutionsTitle,
  industrySolutionsDescription
}: IndustrySolutionsProps): JSX.Element {
  // Memoize the creation of IndustryCard components for performance optimization.
  const cards = useMemo(() => {
    return industries.map((industry) => (
      <IndustryCard
        key={industry.title}
        icon={industry.icon}
        title={industry.title}
        items={industry.items}
      />
    ));
  }, [industries]); // Re-create cards only if the 'industries' array changes

  // Memoize the IconComponent based on backgroundIcon. Defaults to 'CodeXml' if not provided.
  const IconComponent = useMemo(() => {
    return backgroundIcon ? getIcon(backgroundIcon) : getIcon('CodeXml');
  }, [backgroundIcon]);

  // Memoize the background element to avoid re-creating it on every render.
  const backgroundElement = useMemo(() => (
    <IconComponent 
      className="text-mild-blue-alt" 
      width={backgroundIconWidth || 425}
      height={backgroundIconHeight || 425}
      strokeWidth={1.5} 
    />
  ), [IconComponent, backgroundIconWidth, backgroundIconHeight]);

  return (
    <section aria-labelledby="industry-solutions-title">
      {/* Accessible landmark for section */}
      <h2 id="industry-solutions-title" className="sr-only">{industrySolutionsTitle}</h2>
      {/* Carousel Section for displaying various industry solution cards */}
      <CarouselSection
        title={industrySolutionsTitle}
        description={industrySolutionsDescription}
        cards={cards}
        background={backgroundElement}
      />

      {/* 'And Many More!' Call-to-Action Card */}
      <motion.section
        initial={{ opacity: 0, y: 20 }} // Initial animation state (hidden, slightly below)
        animate={{ opacity: 1, y: 0 }} // Animate to visible state (fade in, move up)
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
          href="/contact" // Link to the contact page
          className="bg-white rounded-lg font-semibold shadow-md transition-all duration-200"
        >
          Get in Touch
        </TailwindButton>
      </motion.section>
    </section>
  )
}

export default memo(IndustrySolutions);