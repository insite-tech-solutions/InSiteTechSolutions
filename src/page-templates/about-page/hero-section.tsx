/**
 * @fileoverview Hero Section Component for About Us Page
 * 
 * This component renders the main hero section with gradient background, decorative elements,
 * and call-to-action buttons. Features responsive design and visual hierarchy optimized
 * for engagement and brand presentation.
 * 
 * Features:
 * - Gradient background with brand colors
 * - Decorative background elements with team-themed icon overlays
 * - Responsive typography with proper hierarchy
 * - Dual call-to-action buttons with hover effects
 * - Accessible markup with proper ARIA labels
 * - Drop shadow effects for text readability
 * - Fixed positioning compensation for header
 */

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Users, Building2 } from 'lucide-react';
import TailwindButton from '@/components/reusable-components/tailwind-button';
import TailwindHeroBackground from '@/components/reusable-components/tailwind-hero-background';
import { DecorElement } from '@/page-templates/service-page/types';

// Static decorative elements for About Us HeroSection
const decorElements: DecorElement[] = [
  {
    type: 'icon',
    icon: Users,
    size: 320,
    className: 'text-blue-200 opacity-10',
    style: { top: '-5%', left: '-5%', transform: 'rotate(-19deg)' }
  },
  {
    type: 'icon',
    icon: Building2,
    size: 384,
    className: 'text-blue-200 opacity-10',
    style: { bottom: '-2%', right: '-2%', transform: 'rotate(23deg)' }
  }
];

/**
 * HeroSection Component
 * 
 * Renders the main hero section for the About Us page with gradient background,
 * decorative team-themed icons, and prominent call-to-action buttons.
 * 
 * Features:
 * - Gradient background with brand colors
 * - Decorative background elements with team-themed icon overlays
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
          About InSite Tech
        </motion.h1>
        
        {/* Secondary Heading - Supporting messaging */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-2xl md:text-3xl font-semibold mb-4 text-blue-100 drop-shadow"
        >
          Your Trusted Technology Partner
        </motion.h2>
        
        {/* Description Text - Supporting paragraph with constraints */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg md:text-xl mb-8 text-blue-50 max-w-3xl mx-auto drop-shadow"
        >
          With experience across development, design, and technical consulting, we&apos;re dedicated to transforming your ideas into powerful digital solutions.  From custom websites and software to business tech tools, we bring expertise, creativity, and reliability to every project.       
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
            className="bg-gray-50 font-semibold w-1/2 mx-auto"
          >
            Start Your Project
          </TailwindButton>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 text-white font-medium py-3 px-6 rounded-full border border-white/30 hover:bg-white/10 transition-all duration-300"
          >
            View Our Work
          </Link>
        </motion.div>
      </div>
    </TailwindHeroBackground>
  );
}
