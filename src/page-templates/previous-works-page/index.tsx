/**
 * @fileoverview Previous Works Page Template
 *
 * This component acts as the main template for the previous works/portfolio page, orchestrating
 * all individual sections within a consistent layout structure. Features page loading states,
 * proper section spacing, and component composition following the service page template pattern.
 * 
 * Key Features:
 * - Complete Previous Works page template with all sections
 * - Page loading state management with smooth transitions
 * - Dynamic imports for performance optimization
 * - Responsive layout with consistent spacing
 * - Modular section composition for maintainability
 * - Context-based loading state management
 * 
 * Architecture:
 * - PageLoadingProvider context wrapper for loading states
 * - Conditional loader rendering with transition effects
 * - Hero section outside main layout for full-width design
 * - Layout wrapper for content sections with consistent spacing
 * - Modular section components for maintainability
 * - Dynamic imports for below-the-fold content to improve performance
 * 
 * Performance Optimizations:
 * - Dynamic imports for below-the-fold sections
 * - Memoized components where applicable
 * - Efficient loading state management
 * - SSR disabled for non-critical sections
 * 
 * @component PreviousWorksPageTemplate
 * @returns {JSX.Element} Complete Previous Works page template with loading context
 */

'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Layout from '@/components/reusable-components/layout';
import { PageLoadingProvider, usePageLoading } from '@/contexts/page-loading-context';
import PageTransitionLoader from '@/components/reusable-components/page-transition-loader';

// Direct imports for critical above-the-fold content
import HeroSection from './hero-section';

// Dynamic imports for below-the-fold content to improve initial page load performance
const OverviewSection = dynamic(() => import('./overview-section'), { ssr: false });
const SpotlightSection = dynamic(() => import('./spotlight-section'), { ssr: false });
const PortfolioSection = dynamic(() => import('./portfolio-section'), { ssr: false });
const CtaSection = dynamic(() => import('./cta-section'), { ssr: false });

/**
 * PreviousWorksPageContent Component
 * 
 * Main content component that renders all Previous Works page sections in the correct order
 * with proper spacing and layout structure. Handles the page loading state timing
 * and orchestrates the display of all portfolio-related sections.
 * 
 * Features:
 * - Automatic loading state management with timer
 * - Hero section positioned outside main layout
 * - Consistent vertical spacing between sections
 * - Integration with shared layout component
 * - Modular section composition for maintainability
 * 
 * Section Order:
 * 1. Hero Section (full-width)
 * 2. Overview Section
 * 3. Spotlight Section
 * 4. Portfolio Section
 * 5. Call-to-Action Section
 * 
 * @component
 * @returns {JSX.Element} The complete Previous Works page content
 */
export function PreviousWorksPageContent(): JSX.Element {
  const { setIsPageLoading } = usePageLoading();

  // Handle page loading state with delayed transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [setIsPageLoading]);
  
  return (
    <>
      {/* Hero Section - Full-width section outside main layout */}
      <HeroSection />
      
      {/* Main Content Layout - Wrapped sections with consistent spacing */}
      <Layout>
        <div className="pt-12">
          {/* Overview Section - Portfolio and research links */}
          <div>
            <OverviewSection />
          </div>
          
          {/* Spotlight Section - Featured projects showcase */}
          <div className="my-12">
            <SpotlightSection />
          </div>
          
          {/* Portfolio Section - Complete project grid */}
          <div className="mt-12 mb-8">
            <PortfolioSection />
          </div>
          
          {/* Call-to-Action Section - Final conversion element */}
          <div className="mt-8">
            <CtaSection />
          </div>
        </div>
      </Layout>
    </>
  );
}

/**
 * PreviousWorksPageLoaderWrapper Component
 * 
 * Wrapper component that conditionally renders the page transition loader
 * based on the loading state from context. Provides smooth transitions
 * between loading and content states.
 * 
 * Features:
 * - Conditional loader rendering
 * - Smooth transition effects
 * - Always renders content for seamless UX
 * - Context-based loading state management
 * 
 * @component
 * @returns {JSX.Element} Loader and content with conditional rendering
 */
function PreviousWorksPageLoaderWrapper(): JSX.Element {
  const { isPageLoading } = usePageLoading();

  return (
    <>
      {/* Conditional Page Loader - Shows during initial page load */}
      {isPageLoading && <PageTransitionLoader />}
      
      {/* Main Page Content - Always rendered for smooth transitions */}
      <PreviousWorksPageContent />
    </>
  );
}

/**
 * PreviousWorksPageTemplate Component
 * 
 * Root template component that provides the page loading context to all child components.
 * This is the main export used by the Next.js page component and ensures proper
 * loading state management throughout the Previous Works page.
 * 
 * Features:
 * - Page loading context provider wrapper
 * - Consistent loading behavior across the application
 * - Proper component hierarchy for state management
 * - Clean separation of concerns between loading and content
 * 
 * @component
 * @returns {JSX.Element} The complete Previous Works page template with context
 * 
 * @example
 * ```tsx
 * // Usage in Next.js page
 * import PreviousWorksPageTemplate from '@/page-templates/previous-works-page'
 * 
 * export default function PreviousWorksPage() {
 *   return <PreviousWorksPageTemplate />
 * }
 * ```
 */
export default function PreviousWorksPageTemplate(): JSX.Element {
  return (
    <PageLoadingProvider>
      <PreviousWorksPageLoaderWrapper />
    </PageLoadingProvider>
  );
}
