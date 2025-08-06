/**
 * @fileoverview FAQ Page Component
 *
 * This component assembles the complete FAQ page following the standard
 * page composition pattern used throughout the application. It combines the site header,
 * footer, and the FAQ-specific template to deliver a consistent structure across pages.
 */

'use client';

import Header from '@/components/site-header/header';
import Footer from '@/components/site-footer/footer';
import FAQPageTemplate from '@/page-templates/faq-page';

/**
 * FAQPage Component.
 *
 * Root client-side component for the Frequently Asked Questions page. It orchestrates the
 * layout by including the global `Header`, the page-specific `FAQPageTemplate` (which handles
 * its own loading states and section composition), and the global `Footer`.
 *
 * This wrapper ensures consistent branding and navigation while keeping the FAQ content
 * modular and self-contained.
 *
 * @returns {JSX.Element} The complete JSX structure for the FAQ page.
 */
export default function FAQPage(): JSX.Element {
  return (
    <div>
      <Header /> {/* Renders the global site header. */}
      <FAQPageTemplate /> {/* Renders the main content template for the FAQ page. */}
      <Footer /> {/* Renders the global site footer. */}
    </div>
  );
}
