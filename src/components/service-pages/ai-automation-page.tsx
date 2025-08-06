/**
 * @fileoverview AI & Automation service page component
 * 
 * This module provides the complete page component for the AI & Automation service.
 * It demonstrates the standard pattern for service pages by combining the reusable
 * ServicePageTemplate with service-specific content configuration.
 * 
 * The component follows the standard service page architecture:
 * - Header and Footer for consistent site navigation
 * - ServicePageTemplate for the main content sections
 * - Content imported from the content management system
 */

'use client';

import ServicePageTemplate from '@/page-templates/service-page/service-page-template';
import Header from '@/components/site-header/header';
import Footer from '@/components/site-footer/footer';
import aiAutomationContent from '@/content/service-pages/ai-automation';

/**
 * AI & Automation service page component
 * 
 * @component
 * @description Complete page component that renders the AI & Automation service page.
 * This component serves as an example of the standard service page pattern used throughout
 * the application.
 * 
 * @architecture
 * - Uses the ServicePageTemplate for consistent section layout and functionality
 * - Imports structured content data from the content management system
 * - Wraps the template with site-wide Header and Footer components
 * - Applies client-side rendering for interactive features
 * 
 * @features
 * - Complete service page with all standard sections (hero, overview, value prop, etc.)
 * - Responsive design through the underlying template system
 * - SEO-optimized structure via the template architecture
 * - Consistent navigation and branding via Header/Footer integration
 * 
 * @example
 * ```tsx
 * // Used in Next.js app router
 * // app/services/ai-and-automation/page.tsx
 * import AIAutomationPage from '@/components/service-pages/ai-automation-page';
 * 
 * export default function Page() {
 *   return <AIAutomationPage />;
 * }
 * ```
 * 
 * @returns {JSX.Element} The complete AI & Automation service page
 */
export default function AIAutomationPage(): JSX.Element {
  return (
    <div>
      {/* Site-wide header with navigation */}
      <Header />
      
      {/* Main service page content using the reusable template */}
      <ServicePageTemplate
        heroContent={aiAutomationContent.hero}
        serviceOverviewContent={aiAutomationContent.overview}
        valuePropContent={aiAutomationContent.valueProp}
        serviceScopeContent={aiAutomationContent.serviceScope}
        applicationsContent={aiAutomationContent.applications}
        processContent={aiAutomationContent.process}
        pricingContent={aiAutomationContent.pricing}
        insiteAdvantageContent={aiAutomationContent.insiteAdvantage}
        faqContent={aiAutomationContent.faq}
        ctaContent={aiAutomationContent.cta}
      />
      
      {/* Site-wide footer */}
      <Footer />
    </div>
  );
}