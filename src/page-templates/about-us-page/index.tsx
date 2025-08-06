/**
 * @fileoverview About Us Page Template
 *
 * This component acts as the main template for the About Us page, orchestrating
 * all individual sections within a consistent layout structure. Features page loading states,
 * proper section spacing, and component composition following the service page template pattern.
 * 
 * Key Features:
 * - Complete About Us page template with all sections
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
 * - Dynamic imports for below-the-fold contents to improve performance
 * 
 * Performance Optimizations:
 * - Dynamic imports for below-the-fold sections
 * - Memoized components where applicable
 * - Efficient loading state management
 * - SSR disabled for non-critical sections
 * 
 * @component AboutUsPageTemplate
 * @returns {JSX.Element} Complete About Us page template with loading context
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
const MeetTheTeamSection = dynamic(() => import('./meet-the-team-section'), { ssr: false });
const OurStorySection = dynamic(() => import('./our-story-section'), { ssr: false });
const TimelineSection = dynamic(() => import('./timeline-section'), { ssr: false });
const ExperienceEducationSection = dynamic(() => import('./experience-education-section'), { ssr: false });
const ServicesSection = dynamic(() => import('@/page-templates/home-page/services-section'), { ssr: false });
const TechnologiesSection = dynamic(() => import('../home-page/technologies-section'), { ssr: false });
const InSiteAdvantageSection = dynamic(() => import('./insite-advantage-section'), { ssr: false });
const TestimonialsSection = dynamic(() => import('@/page-templates/home-page/testimonials-section'), { ssr: false });
const CtaSection = dynamic(() => import('./cta-section'), { ssr: false });

/**
 * AboutUsPageContent Component
 * 
 * Main content component that renders all About Us page sections in the correct order
 * with proper spacing and layout structure. Handles the page loading state timing
 * and orchestrates the display of all About Us-related sections.
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
 * 2. Meet The Team Section
 * 3. Our Story Section
 * 4. Timeline Section
 * 5. Experience & Education Section
 * 6. Services Section
 * 7. Technologies Section
 * 8. InSite Advantage Section
 * 9. Testimonials Section
 * 10. Call-to-Action Section
 * 
 * @component
 * @returns {JSX.Element} The complete About Us page content
 */
export function AboutUsPageContent(): JSX.Element {
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
          {/* Meet The Team Section - Team member introductions */}
          <div>
            <MeetTheTeamSection />
          </div>
          
          {/* Our Story Section - Company history and mission */}
          <div className="my-12">
            <OurStorySection />
          </div>
          
          {/* Timeline Section - Company milestones and achievements */}
          <div className="my-12">
            <TimelineSection />
          </div>
          
          {/* Experience & Education Section - Team qualifications */}
          <div className="my-12">
            <ExperienceEducationSection />
          </div>
          
          {/* Services Section - Overview of all services offered */}
          <div className="mt-12 mb-10">
            <ServicesSection />
          </div>
          
          {/* Technologies Section - Tech stack and tools */}
          <div className="mt-10 mb-4">
            <TechnologiesSection />
          </div>
          
          {/* InSite Advantage Section - Company strengths and benefits */}
          <div className="mt-2 mb-[-18px]">
            <InSiteAdvantageSection />
          </div>

          {/* Testimonials Section - Client testimonials */}
          <div>
            <TestimonialsSection />
          </div>
          
          {/* Call-to-Action Section - Final conversion element */}
          <div>
            <CtaSection />
          </div>
        </div>
      </Layout>
    </>
  );
}

/**
 * AboutUsPageLoaderWrapper Component
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
function AboutUsPageLoaderWrapper(): JSX.Element {
  const { isPageLoading } = usePageLoading();

  return (
    <>
      {/* Conditional Page Loader - Shows during initial page load */}
      {isPageLoading && <PageTransitionLoader />}
      
      {/* Main Page Content - Always rendered for smooth transitions */}
      <AboutUsPageContent />
    </>
  );
}

/**
 * AboutUsPageTemplate Component
 * 
 * Root template component that provides the page loading context to all child components.
 * This is the main export used by the Next.js page component and ensures proper
 * loading state management throughout the About Us page.
 * 
 * Features:
 * - Page loading context provider wrapper
 * - Consistent loading behavior across the application
 * - Proper component hierarchy for state management
 * - Clean separation of concerns between loading and content
 * 
 * @component
 * @returns {JSX.Element} The complete About Us page template with context
 * 
 * @example
 * ```tsx
 * // Usage in Next.js page
 * import AboutUsPageTemplate from '@/page-templates/about-page'
 * 
 * export default function AboutUsPage() {
 *   return <AboutUsPageTemplate />
 * }
 * ```
 */
export default function AboutUsPageTemplate(): JSX.Element {
  return (
    <PageLoadingProvider>
      <AboutUsPageLoaderWrapper />
    </PageLoadingProvider>
  );
}
