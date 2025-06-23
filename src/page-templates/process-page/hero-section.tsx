/**
 * @fileoverview Hero Section Component for Process Page
 * 
 * This component renders the main hero section with gradient background, decorative elements,
 * and call-to-action buttons. Features responsive design and visual hierarchy optimized
 * for engagement and brand presentation.
 */

'use client';

 
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Cog, Code } from 'lucide-react';
import { processPageHeroContent } from '@/content/about-pages/process-page/process-page-content';
import TailwindButton from '@/components/reusable-components/tailwind-button';

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
    <section 
      aria-labelledby="hero-section-title" 
      className="relative bg-gradient-to-br from-medium-blue via-mild-blue to-blue-700 overflow-hidden py-20 md:py-32 flex items-center justify-center mt-[104px]"
    >
      {/* Decorative Background Elements - Process-themed visual elements */}
      <Cog className="absolute -top-20 -left-20 text-blue-200 opacity-10 w-80 h-80 z-0 rotate-[-19deg]" />
      <Code className="absolute -bottom-8 -right-8 text-blue-200 opacity-10 w-96 h-96 z-0 rotate-[23deg]" />
      
      {/* Hero Content Container - Main content with proper z-index layering */}
      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 text-center">
        {/* Primary Heading - Main page title */}
        <motion.h1
          id="hero-section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg text-white"
        >
          Our Development Process: The 5Ds
        </motion.h1>
        
        {/* Secondary Heading - Supporting messaging */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl md:text-3xl font-semibold mb-4 text-blue-100 drop-shadow"
        >
          Streamlined. Collaborative. Results-Driven.
        </motion.h2>
        
        {/* Description Text - Supporting paragraph with constraints */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl mb-8 text-blue-50 max-w-3xl mx-auto drop-shadow"
        >
          {subtitle}
        </motion.p>
        
        {/* Call-to-Action Buttons - Primary conversion elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <TailwindButton
            href={cta1.href}
            className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-blue-50 hover:scale-105 transition-all"
          >
              {cta1.text}
          </TailwindButton>
          <Link
                href={cta2.href}
                className="inline-flex items-center gap-2 text-white font-medium py-3 px-6 rounded-full border border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                {cta2.text}
              </Link>
        </motion.div>
      </div>
    </section>
  );
}