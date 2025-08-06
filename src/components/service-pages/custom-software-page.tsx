/**
 * @fileoverview Custom Software Solutions service page component
 * 
 * This module provides the complete page component for the Custom Software Solutions service.
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
import customSoftwareContent from '@/content/service-pages/custom-software';

/**
 * Custom Software Solutions service page component
 * 
 * @component
 * @description Complete page component that renders the Custom Software Solutions service page.
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
 * // app/services/custom-software-solutions/page.tsx
 * import CustomSoftwarePage from '@/components/service-pages/custom-software-page';
 * 
 * export default function Page() {
 *   return <CustomSoftwarePage />;
 * }
 * ```
 * 
 * @returns {JSX.Element} The complete Custom Software Solutions service page
 */
export default function CustomSoftwarePage(): JSX.Element {
  return (
    <div>
      {/* Site-wide header with navigation */}
      <Header />
      
      {/* Main service page content using the reusable template */}
      <ServicePageTemplate
        heroContent={customSoftwareContent.hero}
        serviceOverviewContent={customSoftwareContent.overview}
        valuePropContent={customSoftwareContent.valueProp}
        serviceScopeContent={customSoftwareContent.serviceScope}
        applicationsContent={customSoftwareContent.applications}
        processContent={customSoftwareContent.process}
        pricingContent={customSoftwareContent.pricing}
        insiteAdvantageContent={customSoftwareContent.insiteAdvantage}
        faqContent={customSoftwareContent.faq}
        ctaContent={customSoftwareContent.cta}
      />
      
      {/* Site-wide footer */}
      <Footer />
    </div>
  );
}