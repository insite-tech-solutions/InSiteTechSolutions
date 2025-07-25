/**
 * @fileoverview Home Page Template
 *
 * This component acts as the main template for the home page, orchestrating
 * all individual sections within a consistent layout structure. Features page loading states,
 * proper section spacing, and component composition following the standard page template pattern.
 * 
 * Architecture:
 * - PageLoadingProvider context wrapper for loading states
 * - Conditional loader rendering with transition effects
 * - Hero and scroll sections outside main layout for full-width design
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
import HeroSection from '@/page-templates/home-page/hero-section/hero-section';
import ScrollAnimationSection from '@/page-templates/home-page/scroll-section/scroll-section';
import ServiceSection from '@/page-templates/home-page/services-section';
import TechnologiesSection from '@/page-templates/home-page/technologies-section';

// Dynamic imports for below-the-fold content to improve initial page load performance
const ProcessSection = dynamic(() => import('@/page-templates/home-page/process-section'), { ssr: false });
const HomepagePricingSection = dynamic(() => import('@/page-templates/home-page/pricing-section'), { ssr: false });
const InsiteAdvantageHomepageSection = dynamic(() => import('@/page-templates/home-page/insite-advantage'), { ssr: false });
const PortfolioSection = dynamic(() => import('@/page-templates/home-page/portfolio-section'), { ssr: false });
const TestimonialsSection = dynamic(() => import('@/page-templates/home-page/testimonials-section'), { ssr: false });
const BlogNewsSection = dynamic(() => import('@/page-templates/home-page/blog-news-section'), { ssr: false });
const HomepageFAQSection = dynamic(() => import('@/page-templates/home-page/faq-section'), { ssr: false });
const NewsletterSection = dynamic(() => import('@/page-templates/home-page/newsletter-section'), { ssr: false });
const ContactForm = dynamic(() => import('@/page-templates/home-page/cta-section'), { ssr: false });

/**
 * HomePageContent Component
 * 
 * Main content component that renders all home page sections in the correct order
 * with proper spacing and layout structure. Handles the page loading state timing
 * and orchestrates the display of all home-related sections.
 * 
 * Features:
 * - Automatic loading state management with timer
 * - Hero and scroll sections positioned outside main layout for full-width design
 * - Consistent vertical spacing between sections
 * - Integration with shared layout component
 * - Modular section composition for maintainability
 * 
 * @returns {JSX.Element} The complete home page content
 */
export function HomePageContent(): JSX.Element {
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
      {/* Hero and Scroll Sections - Full-width sections outside main layout */}
      <div className="bg-gray-50">
        <HeroSection />
        <ScrollAnimationSection />
      </div>

      {/* Main Content Layout - Wrapped sections with consistent spacing */}
      <Layout>
        {/* Services Section - Core service offerings */}
        <div className="-mt-64 md:-mt-24">
          <ServiceSection />
        </div>

        {/* Technologies Section - Tech stack and tools */}
        <div className="mt-8 mb-4">
          <TechnologiesSection />
        </div>
        
        {/* Process Section - Development methodology overview */}
        <div className="my-16">
          <ProcessSection />
        </div>
        
        {/* Pricing Section - Service pricing and packages */}
        <div className="mt-16 mb-8">
          <HomepagePricingSection />
        </div>
        
        {/* InSite Advantage Section - Competitive advantages and benefits */}
        <div>
          <InsiteAdvantageHomepageSection />
        </div>
        
        {/* Portfolio Section - Previous work showcase */}
        <div className="my-16">
          <PortfolioSection />
        </div>
        
        {/* Testimonials Section - Client feedback and reviews */}
        <div className="mt-16 mb-12">
          <TestimonialsSection />
        </div>
        
        {/* Blog/News Section - Latest updates and insights */}
        <div className="mt-16 md:mt-12 mb-16">
          <BlogNewsSection />
        </div>
        
        {/* FAQ Section - Frequently asked questions */}
        <div className="mt-16 mb-12">
          <HomepageFAQSection />
        </div>
        
        {/* Newsletter Section - Subscription signup */}
        <div className="my-12">
          <NewsletterSection />
        </div>
        
        {/* Call-to-Action Section - Final conversion element */}
        <ContactForm />
      </Layout>
    </>
  );
}

/**
 * HomePageLoaderWrapper Component
 * 
 * Wrapper component that conditionally renders the page transition loader
 * based on the loading state from context. Provides smooth transitions
 * between loading and content states.
 * 
 * @returns {JSX.Element} Loader and content with conditional rendering
 */
function HomePageLoaderWrapper(): JSX.Element {
  const { isPageLoading } = usePageLoading();

  return (
    <>
      {/* Conditional Page Loader - Shows during initial page load */}
      {isPageLoading && <PageTransitionLoader />}
      
      {/* Main Page Content - Always rendered for smooth transitions */}
      <HomePageContent />
    </>
  );
}

/**
 * HomePageTemplate Component
 * 
 * Root template component that provides the page loading context to all child components.
 * This is the main export used by the Next.js page component and ensures proper
 * loading state management throughout the home page.
 * 
 * Features:
 * - Page loading context provider wrapper
 * - Consistent loading behavior across the application
 * - Proper component hierarchy for state management
 * - Clean separation of concerns between loading and content
 * 
 * @returns {JSX.Element} The complete home page template with context
 * 
 * @example
 * ```tsx
 * // Usage in Next.js page
 * import HomePageTemplate from '@/page-templates/home-page'
 * 
 * export default function HomePage() {
 *   return <HomePageTemplate />
 * }
 * ```
 */
export default function HomePageTemplate(): JSX.Element {
  return (
    <PageLoadingProvider>
      <HomePageLoaderWrapper />
    </PageLoadingProvider>
  );
}
