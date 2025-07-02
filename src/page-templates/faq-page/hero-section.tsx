/**
 * @fileoverview Hero Section Component for FAQ Page
 * 
 * This component renders the main hero section using the established TailwindHeroBackground
 * component with decorative elements and proper styling consistent with the site architecture.
 */

'use client';

import { motion } from 'framer-motion';
import { HelpCircle, MessageCircle } from 'lucide-react';
import TailwindHeroBackground from '@/components/reusable-components/tailwind-hero-background';
import { DecorElement } from '@/page-templates/service-page/types';

// Static decorative elements for FAQPageHero
const decorElements: DecorElement[] = [
  {
    type: 'icon',
    icon: HelpCircle,
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
    icon: MessageCircle,
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
 * FAQPageHero Component
 * 
 * Renders the main hero section for the FAQ page using TailwindHeroBackground
 * with HelpCircle and MessageCircle decorative icons and animated content.
 * 
 * Features:
 * - Standard TailwindHeroBackground with gradient
 * - FAQ-themed decorative icons (HelpCircle, MessageCircle)
 * - Animated text with motion effects
 * - Proper spacing for fixed header
 * 
 * @returns {JSX.Element} The rendered hero section component
 */
export default function FAQPageHero(): JSX.Element {
  return (
    <section aria-labelledby="faq-hero-title" className="mt-[104px]">
      {/* Accessible landmark for FAQ Hero */}
      <h2 id="faq-hero-title" className="sr-only">Frequently Asked Questions</h2>
      <TailwindHeroBackground 
        className="bg-gradient-to-br from-medium-blue via-mild-blue to-blue-700 py-20 md:py-32"
        decorElements={decorElements}
      >
        <div className="flex flex-col items-center justify-center px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
          >
            Frequently Asked Questions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-blue-50 max-w-3xl mx-auto drop-shadow"
          >
            Have questions? We have answers. Browse our most commonly asked questions across services, pricing, process, and more.
          </motion.p>
        </div>
      </TailwindHeroBackground>
    </section>
  );
}