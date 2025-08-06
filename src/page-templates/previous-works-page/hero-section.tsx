/**
 * @fileoverview Hero Section Component for Previous Works Page
 * 
 * This component renders the main hero section using the established TailwindHeroBackground
 * component with decorative elements and proper styling consistent with the site architecture.
 * Features portfolio-themed decorative icons and dual call-to-action buttons.
 */

'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FolderOpen, Trophy } from 'lucide-react';
import TailwindButton from '@/components/reusable-components/tailwind-button';
import TailwindHeroBackground from '@/components/reusable-components/tailwind-hero-background';
import { DecorElement } from '@/page-templates/service-page/types';
import { scrollToSection } from '@/utils/scroll-to-section';
import styles from './hero-section.module.css';

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
  const router = useRouter();

  /**
   * Handles services section navigation with cross-page support
   * 
   * Navigates to services section on homepage or navigates to homepage
   * first if on a different page, then scrolls to services section.
   * 
   * @param {React.MouseEvent<HTMLAnchorElement>} e - Click event
   */
  const handleServicesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // If we're already on homepage, just scroll to section
    if (window.location.pathname === "/") {
      scrollToSection("services-section");
    } else {
      // Navigate to homepage first, then scroll to section
      router.push('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        scrollToSection('services-section');
      }, 100);
    }
  };

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
          Our Work & Portfolio
        </h1>
        
        {/* Secondary Heading - Supporting messaging */}
        <h2
          className={`text-2xl md:text-3xl font-semibold mb-4 text-blue-100 drop-shadow ${styles.secondaryHeading}`}
        >
          Proven Results. Real Impact.
        </h2>
        
        {/* Description Text - Supporting paragraph with constraints */}
        <p
          className={`text-lg md:text-xl mb-8 text-blue-50 max-w-3xl mx-auto drop-shadow ${styles.descriptionText}`}
        >
          We take pride in the solutions we&apos;ve delivered. Explore our portfolio to see the tangible results and successful partnerships that define our work. Each project is a testament to our commitment to quality and innovation.
        </p>
        
        {/* Call-to-Action Buttons - Primary conversion elements */}
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center ${styles.ctaContainer}`}
        >
          <TailwindButton
            href="/contact"
            className="bg-gray-50 font-semibold"
          >
            Start Your Project
          </TailwindButton>
          <Link
            href="/#services-section"
            onClick={handleServicesClick}
            className="inline-flex items-center justify-center gap-2 text-white font-medium py-3 px-6 rounded-full border border-white/30 hover:bg-white/10 transition-all duration-300"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </TailwindHeroBackground>
  );
}
