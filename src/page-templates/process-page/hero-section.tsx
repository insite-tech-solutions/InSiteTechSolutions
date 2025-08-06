/**
 * @fileoverview Hero Section Component for Process Page
 * 
 * This component renders the main hero section with gradient background, decorative elements,
 * and call-to-action buttons. Features responsive design and visual hierarchy optimized
 * for engagement and brand presentation.
 */

'use client';

import Link from 'next/link';
import { Cog, Code } from 'lucide-react';
import { processPageHeroContent } from '@/content/about-pages/process-page/process-page-content';
import TailwindButton from '@/components/reusable-components/tailwind-button';
import TailwindHeroBackground from '@/components/reusable-components/tailwind-hero-background';
import { DecorElement } from '@/page-templates/service-page/types';
import styles from './hero-section.module.css';

// Static decorative elements for Process HeroSection
const decorElements: DecorElement[] = [
  {
    type: 'icon',
    icon: Cog,
    size: 320,
    className: 'text-blue-200 opacity-10',
    style: { top: '-5%', left: '-5%', transform: 'rotate(-19deg)' }
  },
  {
    type: 'icon',
    icon: Code,
    size: 384,
    className: 'text-blue-200 opacity-10',
    style: { bottom: '-2%', right: '-2%', transform: 'rotate(23deg)' }
  }
];

/**
 * HeroSection Component
 * 
 * Renders the main hero section for the development process page with gradient background,
 * decorative process-themed icons, and prominent call-to-action buttons.
 * 
 * Features:
 * - Gradient background with process-themed colors
 * - Decorative background elements with icon overlays
 * - Responsive typography with proper hierarchy
 * - Dual call-to-action buttons with hover effects
 * - Accessible markup with proper ARIA labels
 * - Drop shadow effects for text readability
 * - Fixed positioning compensation for header
 */
// Main hero section for the Process page
export default function HeroSection(): JSX.Element {
  const { subtitle, cta1, cta2 } = processPageHeroContent;

  return (
    <TailwindHeroBackground 
      className="from-medium-blue via-mild-blue to-blue-700 mt-header"
      decorElements={decorElements}
    >
      {/* Hero Content Container - Main content with proper z-index layering */}
      <div className="flex flex-col items-center justify-center px-4 text-center py-20 md:py-32">
        {/* Primary Heading - Main page title */}
        <h1
          id="hero-section-title"
          className={`text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg text-white ${styles.primaryHeading}`}
        >
          Our Development Process: The 5Ds
        </h1>
        
        {/* Secondary Heading - Supporting messaging */}
        <h2
          className={`text-2xl md:text-3xl font-semibold mb-4 text-blue-100 drop-shadow ${styles.secondaryHeading}`}
        >
          Streamlined. Collaborative. Results-Driven.
        </h2>
        
        {/* Description Text - Supporting paragraph with constraints */}
        <p
          className={`text-lg md:text-xl mb-8 text-blue-50 max-w-3xl mx-auto drop-shadow ${styles.descriptionText}`}
        >
          {subtitle}
        </p>
        
        {/* Call-to-Action Buttons - Primary conversion elements */}
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center ${styles.ctaContainer}`}
        >
          <TailwindButton
            href={cta1.href}
            className="bg-gray-50 font-semibold"
          >
              {cta1.text}
          </TailwindButton>
          <Link
                href={cta2.href}
                className="inline-flex items-center gap-2 text-white font-medium py-3 px-6 rounded-full border border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                {cta2.text}
              </Link>
        </div>
      </div>
    </TailwindHeroBackground>
  );
}