/**
 * @fileoverview Data Analysis service page component
 * 
 * This module provides the complete page component for the Data Analysis service.
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
import dataAnalysisContent from '@/content/service-pages/data-analysis';

/**
 * Data Analysis service page component
 * 
 * @component
 * @description Complete page component that renders the Data Analysis service page.
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
 * // app/services/data-analysis/page.tsx
 * import DataAnalysisPage from '@/components/service-pages/data-analysis-page';
 * 
 * export default function Page() {
 *   return <DataAnalysisPage />;
 * }
 * ```
 * 
 * @returns {JSX.Element} The complete Data Analysis service page
 */
export default function DataAnalysisPage(): JSX.Element {
  return (
    <div>
      {/* Site-wide header with navigation */}
      <Header />
      
      {/* Main service page content using the reusable template */}
      <ServicePageTemplate
        heroContent={dataAnalysisContent.hero}
        serviceOverviewContent={dataAnalysisContent.overview}
        valuePropContent={dataAnalysisContent.valueProp}
        serviceScopeContent={dataAnalysisContent.serviceScope}
        applicationsContent={dataAnalysisContent.applications}
        processContent={dataAnalysisContent.process}
        pricingContent={dataAnalysisContent.pricing}
        insiteAdvantageContent={dataAnalysisContent.insiteAdvantage}
        faqContent={dataAnalysisContent.faq}
        ctaContent={dataAnalysisContent.cta}
      />
      
      {/* Site-wide footer */}
      <Footer />
    </div>
  );
}