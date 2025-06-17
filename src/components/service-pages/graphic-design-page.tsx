/**
 * Graphic Design & Branding Page Component
 * 
 * This component is used to display the graphic design and branding service page.
 * It uses the ServicePageTemplate to render the page layout and content.
 */

'use client';

import React from 'react';
import ServicePageTemplate from '@/page-templates/service-page/service-page-template';
import Header from '@/components/site-header/header';
import Footer from '@/components/site-footer/footer';
import graphicDesignContent from '@/content/service-pages/graphic-design';

/**
 * GraphicDesignPage component
 * 
 * This component renders the graphic design and branding service page, including the header,
 * the service page template with its content, and the footer.
 * 
 * @returns {JSX.Element} The rendered graphic design and branding service page
 */
export default function GraphicDesignPage() {
  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
}