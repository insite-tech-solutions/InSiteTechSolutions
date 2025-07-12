/**
 * @fileoverview Hero Section Component for Pricing Page
 * 
 * This component renders the main hero section using the established TailwindHeroBackground
 * component with decorative elements and proper styling consistent with the site architecture.
 */

import { BadgeCent, BadgeDollarSign } from "lucide-react";
import TailwindButton from "@/components/reusable-components/tailwind-button";
import TailwindHeroBackground from '@/components/reusable-components/tailwind-hero-background';
import { DecorElement } from '@/page-templates/service-page/types';

// Static decorative elements for Pricing HeroSection
const decorElements: DecorElement[] = [
  {
    type: 'circle',
    className: 'bg-blue-400 opacity-10',
    style: { 
      top: '-10%', 
      left: '-5%',
      width: '320px',
      height: '320px'
    },
  },
  {
    type: 'icon',
    icon: BadgeCent,
    size: 320,
    className: 'text-blue-200 opacity-10',
    style: { 
      top: '-10%', 
      left: '-5%',
      transform: 'rotate(-19deg)'
    },
  },
  {
    type: 'circle',
    className: 'bg-blue-300 opacity-10',
    style: { 
      bottom: '-3%', 
      right: '-3%',
      width: '384px',
      height: '384px'
    },
  },
  {
    type: 'icon',
    icon: BadgeDollarSign,
    size: 384,
    className: 'text-blue-200 opacity-10',
    style: { 
      bottom: '-3%', 
      right: '-3%',
      transform: 'rotate(23deg)'
    },
  },
];

/**
 * HeroSection Component
 * 
 * Renders the main hero section for the pricing page using TailwindHeroBackground
 * with pricing-themed decorative icons and prominent call-to-action.
 * 
 * Features:
 * - Standard TailwindHeroBackground with gradient
 * - Pricing-themed decorative icons (BadgeCent, BadgeDollarSign)
 * - Responsive typography with proper hierarchy
 * - Prominent call-to-action button with hover effects
 * - Accessible markup with proper ARIA labels
 * - Drop shadow effects for text readability
 * - Fixed positioning compensation for header
 * 
 * @returns {JSX.Element} The rendered hero section component
 */
export default function HeroSection(): JSX.Element {
  return (
    <div className="mt-[104px]">
      <TailwindHeroBackground 
        className="bg-gradient-to-br from-medium-blue via-mild-blue to-blue-700 py-20 md:py-32"
        decorElements={decorElements}
      >
        <div className="flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 
            id="hero-section-title" 
            className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
          >
            Transparent Pricing, Exceptional Value
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-100 drop-shadow">
            Flexible Models. Secure Payments. No Surprises.
          </h2>
          
          <p className="text-lg md:text-xl mb-8 text-blue-50 max-w-2xl mx-auto drop-shadow">
            We offer clear, flexible pricing options and secure payment methods for all your tech related needs. We&apos;ll work with you to find the best solution for your goals and budget.
          </p>
          
          <TailwindButton 
            href="/contact" 
            className="bg-gray-50 font-semibold"
          >
            Get a Custom Estimate
          </TailwindButton>
        </div>
      </TailwindHeroBackground>
    </div>
  );
}