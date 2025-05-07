/**
 * AI & Automation Page Component
 * 
 * This component is used to display the AI and automation service page.
 * It uses the ServicePageTemplate to render the page layout and content.
 */

'use client';

import React from 'react';
import ServicePageTemplate from '@/page-templates/service-page/service-page-template';
import Header from '@/components/site-header/header';
import Footer from '@/components/site-footer/footer';
import aiAutomationContent from '@/content/service-pages/ai-automation';

/**
 * AIAutomationPage component
 * 
 * This component renders the AI and automation service page, including the header,
 * the service page template with its content, and the footer.
 * 
 * @returns {JSX.Element} The rendered AI and automation service page
 */
export default function AIAutomationPage() {
  return (
    <div className='bg-gray-50'>
      <Header />
      <ServicePageTemplate
        heroContent={aiAutomationContent.hero}
        serviceOverviewContent={aiAutomationContent.overview}
        valuePropContent={aiAutomationContent.valueProp}
        serviceScopeContent={aiAutomationContent.serviceScope}
        applicationsContent={aiAutomationContent.applications}
        processContent={aiAutomationContent.process}
        pricingContent={aiAutomationContent.pricing}
        insiteAdvantageContent={aiAutomationContent.insiteAdvantage}
        faqContent={aiAutomationContent.faq}
        ctaContent={aiAutomationContent.cta}
      />
      <Footer />
    </div>
  );
}