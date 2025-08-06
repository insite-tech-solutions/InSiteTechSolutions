/**
 * @fileoverview Hero Section Component for Blog Page
 * 
 * This component renders the main hero section with gradient background, decorative elements,
 * and call-to-action buttons. Features responsive design and visual hierarchy optimized
 * for engagement and brand presentation.
 */

'use client';

import Link from 'next/link';
import { BookOpen, PenTool } from 'lucide-react';
import TailwindButton from '@/components/reusable-components/tailwind-button';
import TailwindHeroBackground from '@/components/reusable-components/tailwind-hero-background';
import { DecorElement } from '@/page-templates/service-page/types';
import styles from './hero-section.module.css';

// Static decorative elements for Blog HeroSection
const decorElements: DecorElement[] = [
  {
    type: 'icon',
    icon: BookOpen,
    size: 320,
    className: 'text-blue-200 opacity-10',
    style: { top: '-5%', left: '-5%', transform: 'rotate(-19deg)' }
  },
  {
    type: 'icon',
    icon: PenTool,
    size: 384,
    className: 'text-blue-200 opacity-10',
    style: { bottom: '-2%', right: '-2%', transform: 'rotate(23deg)' }
  }
];

/**
 * HeroSection Component
 * 
 * Renders the main hero section for the blog page with gradient background,
 * decorative blog-themed icons, and prominent call-to-action buttons.
 * 
 * Features:
 * - Gradient background with blog-themed colors
 * - Decorative background elements with icon overlays
 * - Responsive typography with proper hierarchy
 * - Dual call-to-action buttons with hover effects
 * - Accessible markup with proper ARIA labels
 * - Drop shadow effects for text readability
 * - Fixed positioning compensation for header
 * 
 * @returns {JSX.Element} The rendered hero section component
 */
export default function HeroSection(): JSX.Element {
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
          InSite Tech Blog
        </h1>
        
        {/* Secondary Heading - Supporting messaging */}
        <h2
          className={`text-2xl md:text-3xl font-semibold mb-4 text-blue-100 drop-shadow ${styles.secondaryHeading}`}
        >
          Insites, Tips, and Tech Trends
        </h2>
        
        {/* Description Text - Supporting paragraph with constraints */}
        <p
          className={`text-lg md:text-xl mb-8 text-blue-50 max-w-3xl mx-auto drop-shadow ${styles.descriptionText}`}
        >
          Stay updated with the latest in technology, development best practices, 
          and industry insights from our team.
        </p>
        
        {/* Call-to-Action Buttons - Primary conversion elements */}
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center ${styles.ctaContainer}`}
        >
          <TailwindButton
            href="/contact"
            className="bg-gray-50 font-semibold"
          >
            Get In Touch
          </TailwindButton>
          <Link
            href="/about/previous-works"
            className="inline-flex items-center gap-2 text-white font-medium py-3 px-6 rounded-full border border-white/30 hover:bg-white/10 transition-all duration-300"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </TailwindHeroBackground>
  );
} 