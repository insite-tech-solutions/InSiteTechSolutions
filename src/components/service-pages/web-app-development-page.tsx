/**
 * Web App Development Page Component
 * 
 * This component is used to display the web app development service page.
 * It uses the ServicePageTemplate to render the page layout and content.
 */

'use client';
import React from 'react';
import ServicePageTemplate from '@/page-templates/service-page/service-page-template';
import Header from '@/components/site-header/header';
import Footer from '@/components/site-footer/footer';
import webAppDevelopmentContent from '@/content/service-pages/web-app-dev';

/**
 * WebAppDevelopmentPage component
 * 
 * This component renders the web app development service page, including the header,
 * the service page template with its content, and the footer.
 * 
 * @returns {JSX.Element} The rendered web app development service page
 */
export default function WebAppDevelopmentPage() {
  return (
    <div className='bg-gray-50'>
      <Header />
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
      <Footer />
    </div>
  );
}