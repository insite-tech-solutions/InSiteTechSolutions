/**
 * @fileoverview Hero Section Component for Previous Works Page
 * 
 * This component renders the main hero section using the established TailwindHeroBackground
 * component with decorative elements and proper styling consistent with the site architecture.
 * Features portfolio-themed decorative icons and dual call-to-action buttons.
 */

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FolderOpen, Trophy } from 'lucide-react';
import TailwindButton from '@/components/reusable-components/tailwind-button';
import TailwindHeroBackground from '@/components/reusable-components/tailwind-hero-background';
import { DecorElement } from '@/page-templates/service-page/types';

// Static decorative elements for Previous Works HeroSection
const decorElements: DecorElement[] = [
  {
    type: 'icon',
    icon: FolderOpen,
    size: 320,
    className: 'text-blue-200 opacity-10',
    style: { top: '-5%', left: '-5%', transform: 'rotate(-19deg)' }
  },
  {
    type: 'icon',
    icon: Trophy,
    size: 384,
    className: 'text-blue-200 opacity-10',
    style: { bottom: '-2%', right: '-2%', transform: 'rotate(23deg)' }
  }
];

/**
 * HeroSection Component
 * 
 * Renders the main hero section for the Previous Works page with gradient background,
 * decorative portfolio-themed icons, and prominent call-to-action buttons.
 * 
 * Features:
 * - Gradient background with brand colors
 * - Decorative background elements with portfolio-themed icon overlays
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
      className="from-medium-blue via-mild-blue to-blue-700 mt-[104px]"
      decorElements={decorElements}
    >
      {/* Hero Content Container - Main content with proper z-index layering */}
      <div className="flex flex-col items-center justify-center px-4 text-center py-20 md:py-32">
        {/* Primary Heading - Main page title */}
        <motion.h1
          id="hero-section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg text-white"
        >
          Our Work & Portfolio
        </motion.h1>
        
        {/* Secondary Heading - Supporting messaging */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-2xl md:text-3xl font-semibold mb-4 text-blue-100 drop-shadow"
        >
          Proven Results. Real Impact.
        </motion.h2>
        
        {/* Description Text - Supporting paragraph with constraints */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg md:text-xl mb-8 text-blue-50 max-w-3xl mx-auto drop-shadow"
        >
          We take pride in the solutions we&apos;ve delivered. Explore our portfolio to see the tangible results and successful partnerships that define our work. Each project is a testament to our commitment to quality and innovation.
        </motion.p>
        
        {/* Call-to-Action Buttons - Primary conversion elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <TailwindButton
            href="/contact"
            className="bg-gray-50 font-semibold"
          >
            Start Your Project
          </TailwindButton>
          <Link
            href="/services/custom-software-solutions"
            className="inline-flex items-center justify-center gap-2 text-white font-medium py-3 px-6 rounded-full border border-white/30 hover:bg-white/10 transition-all duration-300"
          >
            View Our Services
          </Link>
        </motion.div>
      </div>
    </TailwindHeroBackground>
  );
}
