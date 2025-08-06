/**
 * @fileoverview Graphic Design & Branding service page component
 * 
 * This module provides the complete page component for the Graphic Design & Branding service.
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
import graphicDesignContent from '@/content/service-pages/graphic-design';

/**
 * Graphic Design & Branding service page component
 * 
 * @component
 * @description Complete page component that renders the Graphic Design & Branding service page.
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
 * // app/services/graphic-design-and-branding/page.tsx
 * import GraphicDesignPage from '@/components/service-pages/graphic-design-page';
 * 
 * export default function Page() {
 *   return <GraphicDesignPage />;
 * }
 * ```
 * 
 * @returns {JSX.Element} The complete Graphic Design & Branding service page
 */
export default function GraphicDesignPage(): JSX.Element {
  return (
    <div>
      {/* Site-wide header with navigation */}
      <Header />
      
      {/* Main service page content using the reusable template */}
      <ServicePageTemplate
        heroContent={graphicDesignContent.hero}
        serviceOverviewContent={graphicDesignContent.overview}
        valuePropContent={graphicDesignContent.valueProp}
        serviceScopeContent={graphicDesignContent.serviceScope}
        applicationsContent={graphicDesignContent.applications}
        processContent={graphicDesignContent.process}
        pricingContent={graphicDesignContent.pricing}
        insiteAdvantageContent={graphicDesignContent.insiteAdvantage}
        faqContent={graphicDesignContent.faq}
        ctaContent={graphicDesignContent.cta}
      />
      
      {/* Site-wide footer */}
      <Footer />
    </div>
  );
}