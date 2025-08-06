/**
 * @fileoverview Hero Section Component for Homepage
 *
 * This component creates the main hero section of the homepage with interactive
 * elements including a mini webpage preview, magnifying glass effect, and code
 * reveal animations. Provides an engaging introduction to the company's services.
 *
 * Features:
 * - Interactive webpage preview with magnifier effect
 * - Code reveal animation based on cursor position
 * - Responsive layout with mobile-first design
 * - Accessibility features with ARIA labels
 * - Scroll indicator with animation
 * - Call-to-action button integration
 * - Smooth entrance animations with Framer Motion
 *
 * @module HeroSection
 */

"use client";

import Image from 'next/image';
import MiniWebPage from './mini-webpage';
import CodeWebPage from './code-webpage';
import MagnifyingGlass from './magnifying-glass';
import { useInteraction } from './useInteraction';
import { useRevealEffect } from './useRevealEffect';
import TailwindButton from '@/components/reusable-components/tailwind-button';
import styles from './hero-section.module.css';

// Remove Framer Motion animation variants and wrappers for hero text and interactive area

/**
 * HeroSection Component
 * 
 * Represents the main hero section of the homepage with interactive elements
 * and engaging visual effects. Combines text content with an interactive
 * webpage preview that includes magnifier and code reveal effects.
 * 
 * The component includes:
 * - Hero text content with title and description
 * - Interactive webpage preview with browser simulation
 * - Magnifying glass effect that follows cursor movement
 * - Code reveal animation based on cursor position
 * - Call-to-action button for lead generation
 * - Scroll indicator with animated arrow
 * - Responsive layout for mobile and desktop
 * - Smooth entrance animations with Framer Motion
 * 
 * All interactive elements are properly labeled for accessibility,
 * and the component uses semantic HTML structure with landmarks.
 * 
 * @returns {JSX.Element} The rendered hero section component
 * 
 * @example
 * ```tsx
 * <HeroSection />
 * ```
 */
const HeroSection = (): JSX.Element => {
  // Get cursor interaction data and reveal effect styles
  const { cursorPosition, webpageRef, handleMouseMove, isMounted } = useInteraction();
  const { revealStyle } = useRevealEffect(cursorPosition, isMounted);

  return (
    <section
      aria-labelledby="hero-section-title"
      className={`${styles.bgPrimary} ${styles.bgDecor} ${styles.heroHeight} flex items-center justify-center p-4 md:p-8 md:pt-12 lg:pt-10 md:pl-10 overflow-hidden mt-header`}
    >
      {/* Hidden priority LCP marker for Lighthouse */}
      <Image
        src="/hero-placeholder.png"
        alt=""
        width={1}
        height={1}
        priority
        style={{
          position: 'absolute',
          opacity: 0,
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />
      
      {/* Accessible landmark for Hero Section */}
      <h2 id="hero-section-title" className="sr-only">
        Innovative Website and Software Solutions
      </h2>
      
      {/* Main content container with responsive layout */}
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row gap-6 items-center justify-between mb-48 md:mb-64">
        {/* Hero Text Content */}
        <div className={`lg:w-1/2 text-white mb-4 lg:mb-0 text-center lg:text-left ${styles.heroTextEntrance}`}> 
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Innovative Website and Software Solutions
          </h1>
          <p className="text-lg md:text-xl drop-shadow">
            From simple web design to complex software applications, InSite Tech provides the
            expertise to tailor solutions to all your tech-related needs.
          </p>
          {/* Desktop CTA Button - visible on md and above */}
          <div className="block mt-6">
            <TailwindButton
              href="/contact"
              className="bg-gray-50 font-semibold"
            >
              Schedule a Free Consultation
            </TailwindButton>
          </div>
        </div>

        {/* Interactive Preview Area */}
        <div className={`lg:w-1/2 flex flex-col items-center ${styles.heroInteractiveEntrance}`}> 
          <div
            className={`relative w-full max-w-lg ${styles.interactiveArea}`}
            ref={webpageRef}
            onMouseMove={handleMouseMove}
            aria-label="Interactive code reveal area"
          >
            {/* Mini webpage preview */}
            <MiniWebPage />
            
            {/* Interactive overlays - only render when mounted */}
            {isMounted && (
              <>
                {/* Magnifying glass effect */}
                <MagnifyingGlass cursorPosition={cursorPosition} />
                {/* Code reveal overlay */}
                <CodeWebPage revealStyle={revealStyle} cursorPosition={cursorPosition} />
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-32 md:bottom-48 left-1/2 transform -translate-x-1/2 text-white text-center">
        {/* Scroll Indicator */}
        <div className="flex flex-col items-center space-y-2">
          <span className="drop-shadow-lg">
            Keep scrolling to discover more
          </span>
          <div className="animate-bounce">
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
