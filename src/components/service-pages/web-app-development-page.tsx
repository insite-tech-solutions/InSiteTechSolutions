/**
 * @fileoverview Web App Development service page component
 * 
 * This module provides the complete page component for the Web App Development service.
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
import webAppDevelopmentContent from '@/content/service-pages/web-app-dev';

/**
 * Web App Development service page component
 * 
 * @component
 * @description Complete page component that renders the Web App Development service page.
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
 * // app/services/web-and-app-development/page.tsx
 * import WebAppDevelopmentPage from '@/components/service-pages/web-app-development-page';
 * 
 * export default function Page() {
 *   return <WebAppDevelopmentPage />;
 * }
 * ```
 * 
 * @returns {JSX.Element} The complete Web App Development service page
 */
export default function WebAppDevelopmentPage(): JSX.Element {
  return (
    <div>
      {/* Site-wide header with navigation */}
      <Header />
      
      {/* Main service page content using the reusable template */}
      <ServicePageTemplate
        heroContent={webAppDevelopmentContent.hero}
        serviceOverviewContent={webAppDevelopmentContent.overview}
        valuePropContent={webAppDevelopmentContent.valueProp}
        serviceScopeContent={webAppDevelopmentContent.serviceScope}
        applicationsContent={webAppDevelopmentContent.applications}
        processContent={webAppDevelopmentContent.process}
        pricingContent={webAppDevelopmentContent.pricing}
        insiteAdvantageContent={webAppDevelopmentContent.insiteAdvantage}
        faqContent={webAppDevelopmentContent.faq}
        ctaContent={webAppDevelopmentContent.cta}
      />
      
      {/* Site-wide footer */}
      <Footer />
    </div>
  );
}