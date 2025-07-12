/**
 * @fileoverview Process Page Template
 *
 * This component acts as the main template for the development process page, orchestrating
 * all individual sections within a consistent layout structure. Features page loading states,
 * proper section spacing, and component composition following the service page template pattern.
 * 
 * Architecture:
 * - PageLoadingProvider context wrapper for loading states
 * - Conditional loader rendering with transition effects
 * - Hero section outside main layout for full-width design
 * - Layout wrapper for content sections with consistent spacing
 * - Modular section components for maintainability
 * - Dynamic imports for below-the-fold content to improve performance
 */

'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Layout from '@/components/reusable-components/layout';
import { PageLoadingProvider, usePageLoading } from '@/contexts/page-loading-context';
import PageTransitionLoader from '@/components/reusable-components/page-transition-loader';

// Direct imports for critical above-the-fold content
import HeroSection from './hero-section';
import ProcessOverviewSection from './process-overview-section';

// Dynamic imports for below-the-fold content to improve initial page load performance
const DetailedProcessSection = dynamic(() => import('./detailed-process-section'), { ssr: false });
const BestPracticesSection = dynamic(() => import('./best-practices-section'), { ssr: false });
const FAQSection = dynamic(() => import('@/page-templates/service-page/faq-section/faq-section'), { ssr: false });
const CtaSection = dynamic(() => import('./cta-section'), { ssr: false });

import processFAQContent from '@/content/about-pages/process-page/process-faq-content';

/**
 * ProcessPageContent Component
 * 
 * Main content component that renders all process page sections in the correct order
 * with proper spacing and layout structure. Handles the page loading state timing
 * and orchestrates the display of all process-related sections.
 * 
 * Features:
 * - Automatic loading state management with timer
 * - Hero section positioned outside main layout
 * - Consistent vertical spacing between sections
 * - Integration with shared layout component
 * - Modular section composition for maintainability
 * 
 * @returns {JSX.Element} The complete process page content
 */
export function ProcessPageContent(): JSX.Element {
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
        <div className="pt-16">
          {/* Process Overview Section - Introduction to the 5Ds methodology */}
          <div>
            <ProcessOverviewSection />
          </div>
          
          {/* Detailed Process Section - In-depth breakdown of each phase */}
          <div className="my-10">
            <DetailedProcessSection />
          </div>
          
          {/* Best Practices Section - Standards and methodologies we follow */}
          <div className="my-6">
            <BestPracticesSection />
          </div>

          {/* FAQ Section - Additional information and questions */}
          <div className="my-10">
            <FAQSection content={processFAQContent} />
          </div>
          
          {/* Call-to-Action Section - Final conversion element */}
          <div className="mt-10">
            <CtaSection />
          </div>
        </div>
      </Layout>
    </>
  );
}

/**
 * ProcessPageLoaderWrapper Component
 * 
 * Wrapper component that conditionally renders the page transition loader
 * based on the loading state from context. Provides smooth transitions
 * between loading and content states.
 * 
 * @returns {JSX.Element} Loader and content with conditional rendering
 */
function ProcessPageLoaderWrapper(): JSX.Element {
  const { isPageLoading } = usePageLoading();

  return (
    <>
      {/* Conditional Page Loader - Shows during initial page load */}
      {isPageLoading && <PageTransitionLoader />}
      
      {/* Main Page Content - Always rendered for smooth transitions */}
      <ProcessPageContent />
    </>
  );
}

/**
 * ProcessPageTemplate Component
 * 
 * Root template component that provides the page loading context to all child components.
 * This is the main export used by the Next.js page component and ensures proper
 * loading state management throughout the process page.
 * 
 * Features:
 * - Page loading context provider wrapper
 * - Consistent loading behavior across the application
 * - Proper component hierarchy for state management
 * - Clean separation of concerns between loading and content
 * 
 * @returns {JSX.Element} The complete process page template with context
 * 
 * @example
 * ```tsx
 * // Usage in Next.js page
 * import ProcessPageTemplate from '@/page-templates/process-page'
 * 
 * export default function ProcessPage() {
 *   return <ProcessPageTemplate />
 * }
 * ```
 */
export default function ProcessPageTemplate(): JSX.Element {
  return (
    <PageLoadingProvider>
      <ProcessPageLoaderWrapper />
    </PageLoadingProvider>
  );
} 