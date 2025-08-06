/**
 * @fileoverview Pricing Page Template
 *
 * This component acts as the main template for the pricing and payments page, orchestrating
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
import HeroSection from '@/page-templates/pricing-page/hero-section';

// Dynamic imports for below-the-fold content to improve initial page load performance
const PricingOverview = dynamic(() => import('@/page-templates/pricing-page/pricing-overview'), { ssr: false });
const PricingModels = dynamic(() => import('@/page-templates/pricing-page/pricing-models'), { ssr: false });
const PaymentOptions = dynamic(() => import('@/page-templates/pricing-page/payment-methods'), { ssr: false });
const PaymentTerms = dynamic(() => import('@/page-templates/pricing-page/payment-terms'), { ssr: false });
const PricingEstimator = dynamic(() => import('@/page-templates/pricing-page/pricing-estimator'), { ssr: false });
const FAQSection = dynamic(() => import('@/page-templates/service-page/faq-section/faq-section'), { ssr: false });
const CustomSolutionSection = dynamic(() => import('@/page-templates/pricing-page/cta-section'), { ssr: false });

import pricingFAQContent from '@/content/about-pages/pricing-page/pricing-faq-content';

/**
 * PricingPageContent Component
 * 
 * Main content component that renders all pricing page sections in the correct order
 * with proper spacing and layout structure. Handles the page loading state timing
 * and orchestrates the display of all pricing-related sections.
 * 
 * Features:
 * - Automatic loading state management with timer
 * - Hero section positioned outside main layout
 * - Consistent vertical spacing between sections
 * - Integration with shared FAQ component
 * - Modular section composition for maintainability
 * 
 * @returns {JSX.Element} The complete pricing page content
 */
export function PricingPageContent(): JSX.Element {
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
        <div className="py-12">
          {/* Pricing Overview Section - Introduction and key advantages */}
            <div>
            <PricingOverview />
            </div>
          
          {/* Pricing Models Section - Available pricing structures */}
            <div className="my-12">
            <PricingModels />
            </div>
          
          {/* Payment Options Section - Available payment methods */}
            <div className="my-12">
            <PaymentOptions />
            </div>
          
          {/* Payment Terms Section - Policies and terms */}
            <div className="my-12">
              <PaymentTerms />
            </div>
          
          {/* Interactive Pricing Estimator Section */}
            <div className="my-12">
              <PricingEstimator />
            </div>
          
          {/* FAQ Section - Pricing-specific questions and answers */}
            <div className="my-12">
              <FAQSection content={pricingFAQContent} />
            </div>
          
          {/* Call-to-Action Section - Final conversion element */}
            <div className="my-10">
              <CustomSolutionSection />
            </div>
        </div>
      </Layout>
    </>
  );
}

/**
 * PricingPageLoaderWrapper Component
 * 
 * Wrapper component that conditionally renders the page transition loader
 * based on the loading state from context. Provides smooth transitions
 * between loading and content states.
 * 
 * @returns {JSX.Element} Loader and content with conditional rendering
 */
function PricingPageLoaderWrapper(): JSX.Element {
  const { isPageLoading } = usePageLoading();

  return (
    <>
      {/* Conditional Page Loader - Shows during initial page load */}
      {isPageLoading && <PageTransitionLoader />}
      
      {/* Main Page Content - Always rendered for smooth transitions */}
      <PricingPageContent />
    </>
  );
}

/**
 * PricingPageTemplate Component
 * 
 * Root template component that provides the page loading context to all child components.
 * This is the main export used by the Next.js page component and ensures proper
 * loading state management throughout the pricing page.
 * 
 * Features:
 * - Page loading context provider wrapper
 * - Consistent loading behavior across the application
 * - Proper component hierarchy for state management
 * - Clean separation of concerns between loading and content
 * 
 * @returns {JSX.Element} The complete pricing page template with context
 * 
 * @example
 * ```tsx
 * // Usage in Next.js page
 * import PricingPageTemplate from '@/page-templates/pricing-page'
 * 
 * export default function PricingPage() {
 *   return <PricingPageTemplate />
 * }
 * ```
 */
export default function PricingPageTemplate(): JSX.Element {
  return (
    <PageLoadingProvider>
      <PricingPageLoaderWrapper />
    </PageLoadingProvider>
  );
}