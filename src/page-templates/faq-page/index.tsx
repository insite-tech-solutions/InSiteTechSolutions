/**
 * @fileoverview FAQ Page Template
 *
 * This component acts as the main template for the FAQ page, orchestrating
 * all individual sections within a consistent layout structure. Features page loading states,
 * proper section spacing, and component composition following the service page template pattern.
 * 
 * Architecture:
 * - PageLoadingProvider context wrapper for loading states
 * - Conditional loader rendering with transition effects
 * - Hero section outside main layout for full-width design
 * - Layout wrapper for content sections with consistent spacing
 * - Modular section components for maintainability
 * - Responsive table of contents (desktop sticky, mobile dropdown)
 * - Multiple FAQ sections aggregated from different content files
 * - Dynamic imports for below-the-fold content to improve performance
 */

'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Layout from '@/components/reusable-components/layout';
import { PageLoadingProvider, usePageLoading } from '@/contexts/page-loading-context';
import PageTransitionLoader from '@/components/reusable-components/page-transition-loader';

// Direct imports for critical above-the-fold content
import FAQPageHero from './hero-section';
import TableOfContents from './table-of-contents';
import MobileTOC from './mobile-toc';

// Dynamic imports for below-the-fold content to improve initial page load performance
const FAQSection = dynamic(() => import('@/page-templates/service-page/faq-section'), { ssr: false });
const CTASection = dynamic(() => import('@/page-templates/service-page/cta-section'), { ssr: false });

import { faqPageSections } from '@/content/insites-pages/faq-page/sections';
import faqPageCTAContent from '@/content/insites-pages/faq-page/cta-content';

/**
 * FAQPageContent Component
 * 
 * Main content component that renders all FAQ page sections in the correct order
 * with proper spacing and layout structure. Handles the page loading state timing
 * and orchestrates the display of all FAQ-related sections.
 * 
 * Features:
 * - Automatic loading state management with timer
 * - Hero section positioned outside main layout
 * - Responsive table of contents (desktop sticky, mobile dropdown)
 * - Multiple FAQ sections with consistent spacing
 * - Integration with shared FAQ and CTA components
 * - Modular section composition for maintainability
 * 
 * @returns {JSX.Element} The complete FAQ page content
 */
function FAQPageContent(): JSX.Element {
  const { setIsPageLoading } = usePageLoading();

  // Handle page loading state with delayed transition for smooth UX
  useEffect(() => {
    const timer = setTimeout(() => setIsPageLoading(false), 500);
    return () => clearTimeout(timer);
  }, [setIsPageLoading]);

  return (
    <>
      {/* Hero Section - Full-width section outside main layout */}
      <FAQPageHero />

      {/* Main Content Layout - Wrapped sections with consistent spacing */}
      <Layout className="pt-16">
        <div className="lg:flex lg:space-x-4">
          {/* Mobile Table of Contents - Dropdown style for mobile devices */}
          <div className="lg:hidden">
            <MobileTOC sections={faqPageSections} />
          </div>
          
          {/* Desktop Table of Contents - Sticky sidebar for desktop */}
          <aside className="hidden lg:block">
            <TableOfContents sections={faqPageSections} />
          </aside>
          
          {/* FAQ Sections - Main content area with all FAQ categories */}
          <main className="flex-grow space-y-16">
            {faqPageSections.map(({ id, content }) => (
              <FAQSection key={id} content={content} anchorId={id} showBadge={false} />
            ))}
          </main>
        </div>

        {/* Call-to-Action Section - Final conversion element */}
        <div className="mt-4 lg:mt-12 mb-2">
          <CTASection content={faqPageCTAContent} />
        </div>
      </Layout>
    </>
  );
}

/**
 * FAQPageLoaderWrapper Component
 * 
 * Wrapper component that conditionally renders the page transition loader
 * based on the loading state from context. Provides smooth transitions
 * between loading and content states.
 * 
 * @returns {JSX.Element} Loader and content with conditional rendering
 */
function FAQPageLoaderWrapper(): JSX.Element {
  const { isPageLoading } = usePageLoading();
  
  return (
    <>
      {/* Conditional Page Loader - Shows during initial page load */}
      {isPageLoading && <PageTransitionLoader />}
      
      {/* Main Page Content - Always rendered for smooth transitions */}
      <FAQPageContent />
    </>
  );
}

/**
 * FAQPageTemplate Component
 * 
 * Root template component that provides the page loading context to all child components.
 * This is the main export used by the Next.js page component and ensures proper
 * loading state management throughout the FAQ page.
 * 
 * Features:
 * - Page loading context provider wrapper
 * - Consistent loading behavior across the application
 * - Proper component hierarchy for state management
 * - Clean separation of concerns between loading and content
 * 
 * @returns {JSX.Element} The complete FAQ page template with context
 * 
 * @example
 * ```tsx
 * // Usage in Next.js page
 * import FAQPageTemplate from '@/page-templates/faq-page'
 * 
 * export default function FAQPage() {
 *   return <FAQPageTemplate />
 * }
 * ```
 */
export default function FAQPageTemplate(): JSX.Element {
  return (
    <PageLoadingProvider>
      <FAQPageLoaderWrapper />
    </PageLoadingProvider>
  );
} 