/**
 * @fileoverview Hero Section Component for Legal Documents Page
 * 
 * This component renders the main hero section using the established TailwindHeroBackground
 * component with decorative elements and proper styling consistent with the site architecture.
 */

import { motion } from 'framer-motion';
import { Shield, FileText } from 'lucide-react';
import TailwindHeroBackground from '@/components/reusable-components/tailwind-hero-background';
import { DecorElement } from '@/page-templates/service-page/types';

// Static decorative elements for Privacy & Terms HeroSection
const decorElements: DecorElement[] = [
  {
    type: 'icon',
    icon: Shield,
    size: 320,
    className: 'text-blue-200 opacity-10',
    style: { 
      top: '-4%', 
      left: '-2%',
      transform: 'rotate(-15deg)'
    },
  },
  {
    type: 'icon',
    icon: FileText,
    size: 380,
    className: 'text-blue-200 opacity-10',
    style: { 
      bottom: '-6%', 
      right: '-2%',
      transform: 'rotate(18deg)'
    },
  },
];

/**
 * HeroSection Component
 * 
 * Renders the main hero section for the legal page using TailwindHeroBackground
 * with Shield and FileText decorative icons and animated content.
 * 
 * Features:
 * - Standard TailwindHeroBackground with gradient
 * - Legal-themed decorative icons (Shield, FileText)
 * - Animated text with motion effects
 * - Proper spacing for fixed header
 * 
 * @returns {JSX.Element} The rendered hero section component
 */
export default function HeroSection(): JSX.Element {

  return (
    <div className="mt-header">
      <TailwindHeroBackground 
        className="bg-gradient-to-br from-medium-blue via-mild-blue to-blue-700 py-20 md:py-32"
        decorElements={decorElements}
      >
        <div className="flex flex-col items-center justify-center px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
          >
            Legal Center
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg md:text-xl text-blue-50 max-w-3xl mx-auto drop-shadow"
          >
            Your privacy and our terms of service are important. Here&apos;s a clear look at our policies and your rights.
          </motion.p>
        </div>
      </TailwindHeroBackground>
    </div>
  );
} 