/**
 * Page component for the Custom Software Solutions service.
 * Assembles all relevant content sections using the ServicePageTemplate,
 * pulling from the Custom Software Solutions-specific content modules and rendering the full layout.
 */
'use client';

import React from 'react';
import Header from '@/components/site-header/header';
import Footer from '@/components/site-footer/footer';
import ServicePageTemplate from '@/page-templates/service-page/service-page-template';
import customSoftwareHero from '@/content/service-pages/custom-software/hero-content';
import customSoftwareValueProp from '@/content/service-pages/custom-software/value-prop-content';
import customSoftwareServiceScope from '@/content/service-pages/custom-software/service-scope-content';
import customSoftwareApplications from '@/content/service-pages/custom-software/applications-content';
import customSoftwareProcess from '@/content/service-pages/custom-software/process-content';
import customSoftwarePricing from '@/content/service-pages/custom-software/pricing-content';
import customSoftwareInSiteAdvantage from '@/content/service-pages/custom-software/insite-advantage-content';
import customSoftwareFAQ from '@/content/service-pages/custom-software/faq-content';
import customSoftwareCTA from '@/content/service-pages/custom-software/cta-content';

export default function CustomSoftwareSolutionsPage() {
  return (
    <div className='bg-gray-50'>
      <Header />
      
      <ServicePageTemplate 
        heroContent={customSoftwareHero}
        valuePropContent={customSoftwareValueProp}
        serviceScopeContent={customSoftwareServiceScope}
        applicationsContent={customSoftwareApplications}
        processContent={customSoftwareProcess}
        pricingContent={customSoftwarePricing}
        insiteAdvantageContent={customSoftwareInSiteAdvantage}
        faqContent={customSoftwareFAQ}
        ctaContent={customSoftwareCTA}
      />

      <Footer />
    </div>
  );
}