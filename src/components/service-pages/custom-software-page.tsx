/**
 * Custom Software Page Component
 * 
 * This component is used to display the custom software service page.
 * It uses the ServicePageTemplate to render the page layout and content.
 */

'use client';

import React from 'react';
import ServicePageTemplate from '@/page-templates/service-page/service-page-template';
import Header from '@/components/site-header/header';
import Footer from '@/components/site-footer/footer';
import customSoftwareContent from '@/content/service-pages/custom-software';

/**
 * CustomSoftwarePage component
 * 
 * This component renders the custom software service page, including the header,
 * the service page template with its content, and the footer.
 * 
 * @returns {JSX.Element} The rendered custom software service page
 */
export default function CustomSoftwarePage() {
  return (
    <div className='bg-gray-50'>
      <Header />
      <ServicePageTemplate
        heroContent={customSoftwareContent.hero}
        valuePropContent={customSoftwareContent.valueProp}
        serviceScopeContent={customSoftwareContent.serviceScope}
        applicationsContent={customSoftwareContent.applications}
        processContent={customSoftwareContent.process}
        pricingContent={customSoftwareContent.pricing}
        insiteAdvantageContent={customSoftwareContent.insiteAdvantage}
        faqContent={customSoftwareContent.faq}
        ctaContent={customSoftwareContent.cta}
      />
      <Footer />
    </div>
  );
}