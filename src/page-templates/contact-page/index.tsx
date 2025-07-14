/**
 * @fileoverview Contact Page Template
 *
 * This component aggregates all contact page sections into a single organized template
 * with proper layout structure, loading states, responsive design, and smooth entrance
 * animations. Features a two-column layout with contact information and form, plus 
 * header styling and consistent spacing throughout.
 * 
 * Architecture:
 * - PageLoadingProvider context wrapper for loading states
 * - Conditional loader rendering with transition effects
 * - Custom header section with gradient background
 * - Two-column responsive layout (stacked on mobile)
 * - Layout wrapper for content sections with consistent spacing
 * - Modular section components for maintainability
 * - Framer Motion animations for smooth user experience
 */

'use client';

import { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import Layout from '@/components/reusable-components/layout';
import ContactInfo from "@/page-templates/contact-page/contact-info";
import LocationImageSection from "@/page-templates/contact-page/location-image-section";
import ContactPageCTASection from "@/page-templates/contact-page/cta-section";
import ContactForm from "@/components/reusable-components/contact-form";
import { PageLoadingProvider, usePageLoading } from '@/contexts/page-loading-context';
import PageTransitionLoader from '@/components/reusable-components/page-transition-loader';

/**
 * Animation variants for the contact page
 * Keeping it balanced and smooth
 */
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.7, // Start after hero animation
    },
  },
};

const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

/**
 * ContactPageContent Component
 * 
 * Main content component that renders all contact page sections with proper layout
 * structure and responsive design. Handles loading state timing and orchestrates
 * the display of contact information, location details, and contact form.
 * 
 * Features:
 * - Automatic loading state management with timer
 * - Custom gradient header outside main layout
 * - Two-column responsive grid layout
 * - Hero section with compelling messaging
 * - Sidebar with contact info, location, and CTA
 * - Main contact form for lead generation
 * - Consistent vertical spacing between sections
 * - Smooth entrance animations for enhanced user experience
 * 
 * @returns {JSX.Element} The complete contact page content
 */
export function ContactPageContent(): JSX.Element {
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
      {/* Page Header - Gradient background section outside main layout */}
      <div className="bg-gradient-to-br from-medium-blue via-mild-blue to-blue-800 text-white text-left py-8 px-4 mt-[104px]">
        <motion.h1 
          className="text-3xl font-bold"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
        >
          Contact
        </motion.h1>
      </div>
      
      {/* Main Content Layout - Wrapped sections with responsive design */}
      <Layout>
        <div className="container mx-auto py-16 lg:py-20">
          {/* Hero Section - Compelling messaging and introduction */}
          <motion.div 
            className="relative overflow-hidden mb-16 lg:mb-20"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: 'easeOut',
                  delay: 0.5,
                },
              },
            }}
          >
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 mt-2">
                Let&apos;s Build Something
                <span className="block text-medium-blue">Amazing Together</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have a project in mind or need expert tech consulting? We&apos;re here to help turn your ideas into reality.
              </p>
            </div>
          </motion.div>
          
          {/* Two-Column Layout - Contact info sidebar and main form */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Left Column - Contact information sidebar */}
            <motion.div 
              className="flex flex-col gap-8 lg:gap-10 order-2 lg:order-1"
              variants={slideInLeft}
            >
              {/* Contact Methods and Details */}
              <ContactInfo />
              
              {/* Service Area Visualization */}
              <LocationImageSection />
              
              {/* Additional Call-to-Action */}
              <ContactPageCTASection />
            </motion.div>
            
            {/* Right Column - Main contact form */}
            <motion.div 
              className="order-1 lg:order-2"
              variants={slideInRight}
            >
              <ContactForm />
            </motion.div>
          </motion.div>
        </div>
      </Layout>
    </>
  );
}

/**
 * ContactPageLoaderWrapper Component
 * 
 * Wrapper component that conditionally renders the page transition loader
 * based on the loading state from context. Provides smooth transitions
 * between loading and content states.
 * 
 * @returns {JSX.Element} Loader and content with conditional rendering
 */
function ContactPageLoaderWrapper(): JSX.Element {
  const { isPageLoading } = usePageLoading();

  return (
    <>
      {/* Conditional Page Loader - Shows during initial page load */}
      {isPageLoading && <PageTransitionLoader />}
      
      {/* Main Page Content - Always rendered for smooth transitions */}
      <ContactPageContent />
    </>
  );
}

/**
 * ContactPageTemplate Component
 * 
 * Root template component that provides the page loading context to all child components.
 * This is the main export used by the Next.js page component and ensures proper
 * loading state management throughout the contact page.
 * 
 * Features:
 * - Page loading context provider wrapper
 * - Consistent loading behavior across the application
 * - Proper component hierarchy for state management
 * - Clean separation of concerns between loading and content
 * - Smooth entrance animations for enhanced user experience
 * 
 * @returns {JSX.Element} The complete contact page template with context
 * 
 * @example
 * ```tsx
 * // Usage in Next.js page
 * import ContactPageTemplate from '@/page-templates/contact-page'
 * 
 * export default function ContactPage() {
 *   return <ContactPageTemplate />
 * }
 * ```
 */
export default function ContactPageTemplate(): JSX.Element {
  return (
    <PageLoadingProvider>
      <ContactPageLoaderWrapper />
    </PageLoadingProvider>
  );
}