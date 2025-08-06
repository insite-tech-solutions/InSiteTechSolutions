/**
 * @fileoverview SEO & Online Marketing service page component
 * 
 * This module provides the complete page component for the SEO & Online Marketing service.
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
import seoMarketingContent from '@/content/service-pages/seo-marketing';

/**
 * SEO & Online Marketing service page component
 * 
 * @component
 * @description Complete page component that renders the SEO & Online Marketing service page.
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
 * // app/services/seo-and-online-marketing/page.tsx
 * import SEOMarketingPage from '@/components/service-pages/seo-marketing-page';
 * 
 * export default function Page() {
 *   return <SEOMarketingPage />;
 * }
 * ```
 * 
 * @returns {JSX.Element} The complete SEO & Online Marketing service page
 */
export default function SEOMarketingPage(): JSX.Element {
  return (
    <div>
      {/* Site-wide header with navigation */}
      <Header />
      
      {/* Main service page content using the reusable template */}
      <ServicePageTemplate
        heroContent={seoMarketingContent.hero}
        serviceOverviewContent={seoMarketingContent.overview}
        valuePropContent={seoMarketingContent.valueProp}
        serviceScopeContent={seoMarketingContent.serviceScope}
        applicationsContent={seoMarketingContent.applications}
        processContent={seoMarketingContent.process}
        pricingContent={seoMarketingContent.pricing}
        insiteAdvantageContent={seoMarketingContent.insiteAdvantage}
        faqContent={seoMarketingContent.faq}
        ctaContent={seoMarketingContent.cta}
      />
      
      {/* Site-wide footer */}
      <Footer />
    </div>
  );
}