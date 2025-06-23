/**
 * @fileoverview Hero Section Component for Pricing Page
 * 
 * This component renders the main hero section with gradient background, decorative elements,
 * and a call-to-action button. Features responsive design and visual hierarchy optimized
 * for conversion and brand presentation.
 */

import { BadgeCent, BadgeDollarSign } from "lucide-react";
import TailwindButton from "@/components/reusable-components/tailwind-button";

/**
 * HeroSection Component
 * 
 * Renders the main hero section for the pricing page with gradient background,
 * decorative pricing-themed icons, and prominent call-to-action.
 * 
 * Features:
 * - Gradient background with pricing-themed colors
 * - Decorative background elements with icon overlays
 * - Responsive typography with proper hierarchy
 * - Prominent call-to-action button with hover effects
 * - Accessible markup with proper ARIA labels
 * - Drop shadow effects for text readability
 * - Fixed positioning compensation for header
 * 
 * @returns {JSX.Element} The rendered hero section component
 * 
 * @example
 * ```tsx
 * // Usage in a pricing page
 * import HeroSection from '@/page-templates/pricing-page/hero-section'
 * 
 * export default function PricingPage() {
 *   return (
 *     <div>
 *       <HeroSection />
 *     </div>
 *   )
 * }
 * ```
 */
export default function HeroSection(): JSX.Element {
  return (
    <section 
      aria-labelledby="hero-section-title" 
      className="relative bg-gradient-to-br from-medium-blue via-mild-blue to-blue-700 overflow-hidden py-20 md:py-32 flex items-center justify-center mt-[104px]"
    >
      {/* Decorative Background Elements - Pricing-themed visual elements */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-400 opacity-10 rounded-full z-0" />
      <BadgeCent className="absolute -top-20 -left-20 text-blue-200 opacity-10 w-80 h-80 z-0 rotate-[-19deg]" />
      <div className="absolute -bottom-8 -right-8 w-96 h-96 bg-blue-300 opacity-10 rounded-full z-0" />
      <BadgeDollarSign className="absolute -bottom-8 -right-8 text-blue-200 opacity-10 w-96 h-96 z-0 rotate-[23deg]" />
      
      {/* Hero Content Container - Main content with proper z-index layering */}
      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center px-4 text-center">
        {/* Primary Heading - Main page title */}
        <h1 id="hero-section-title" className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg text-white">
          Transparent Pricing, Exceptional Value
        </h1>
        
        {/* Secondary Heading - Supporting messaging */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-100 drop-shadow">
          Flexible Models. Secure Payments. No Surprises.
        </h2>
        
        {/* Description Text - Supporting paragraph with constraints */}
        <p className="text-lg md:text-xl mb-8 text-blue-50 max-w-2xl mx-auto drop-shadow">
          We offer clear, flexible pricing options and secure payment methods for all your tech related needs. We&apos;ll work with you to find the best solution for your goals and budget.
        </p>
        
        {/* Call-to-Action Button - Primary conversion element */}
        <TailwindButton 
          href="/contact" 
          className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-blue-50 hover:scale-105 transition-all mx-auto"
        >
          Get a Custom Estimate
        </TailwindButton>
      </div>
    </section>
  );
}