/**
 * @fileoverview Consulting & Training service page component
 * 
 * This module provides the complete page component for the Consulting & Training service.
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
import consultingTrainingContent from '@/content/service-pages/consulting-training';

/**
 * Consulting & Training service page component
 * 
 * @component
 * @description Complete page component that renders the Consulting & Training service page.
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
 * // app/services/consulting-and-training/page.tsx
 * import ConsultingTrainingPage from '@/components/service-pages/consulting-training-page';
 * 
 * export default function Page() {
 *   return <ConsultingTrainingPage />;
 * }
 * ```
 * 
 * @returns {JSX.Element} The complete Consulting & Training service page
 */
export default function ConsultingTrainingPage(): JSX.Element {
  return (
    <div>
      {/* Site-wide header with navigation */}
      <Header />
      
      {/* Main service page content using the reusable template */}
      <ServicePageTemplate
        heroContent={consultingTrainingContent.hero}
        serviceOverviewContent={consultingTrainingContent.overview}
        valuePropContent={consultingTrainingContent.valueProp}
        serviceScopeContent={consultingTrainingContent.serviceScope}
        applicationsContent={consultingTrainingContent.applications}
        processContent={consultingTrainingContent.process}
        pricingContent={consultingTrainingContent.pricing}
        insiteAdvantageContent={consultingTrainingContent.insiteAdvantage}
        faqContent={consultingTrainingContent.faq}
        ctaContent={consultingTrainingContent.cta}
      />
      
      {/* Site-wide footer */}
      <Footer />
    </div>
  );
}