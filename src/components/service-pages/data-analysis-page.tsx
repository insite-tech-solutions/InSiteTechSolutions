/**
 * Data Analysis Page Component
 * 
 * This component is used to display the data analysis service page.
 * It uses the ServicePageTemplate to render the page layout and content.
 */

'use client';

import React from 'react';
import ServicePageTemplate from '@/page-templates/service-page/service-page-template';
import Header from '@/components/site-header/header';
import Footer from '@/components/site-footer/footer';
import dataAnalysisContent from '@/content/service-pages/data-analysis';

/**
 * DataAnalysisPage component
 * 
 * This component renders the data analysis service page, including the header,
 * the service page template with its content, and the footer.
 * 
 * @returns {JSX.Element} The rendered data analysis service page
 */
export default function DataAnalysisPage() {
  return (
    <div className='bg-gray-50'>
      <Header />
      <ServicePageTemplate
        heroContent={dataAnalysisContent.hero}
        valuePropContent={dataAnalysisContent.valueProp}
        serviceScopeContent={dataAnalysisContent.serviceScope}
        applicationsContent={dataAnalysisContent.applications}
        processContent={dataAnalysisContent.process}
        pricingContent={dataAnalysisContent.pricing}
        insiteAdvantageContent={dataAnalysisContent.insiteAdvantage}
        faqContent={dataAnalysisContent.faq}
        ctaContent={dataAnalysisContent.cta}
      />
      <Footer />
    </div>
  );
}