/**
 * Consulting & Training Page Component
 * 
 * This component is used to display the consulting and training service page.
 * It uses the ServicePageTemplate to render the page layout and content.
 */

'use client';

import React from 'react';
import ServicePageTemplate from '@/page-templates/service-page/service-page-template';
import Header from '@/components/site-header/header';
import Footer from '@/components/site-footer/footer';
import consultingTrainingContent from '@/content/service-pages/consulting-training';

/**
 * ConsultingTrainingPage component
 * 
 * This component renders the consulting and training service page, including the header,
 * the service page template with its content, and the footer.
 * 
 * @returns {JSX.Element} The rendered consulting and training service page
 */
export default function ConsultingTrainingPage() {
  return (
    <div className='bg-gray-50'>
      <Header />
      <ServicePageTemplate
        heroContent={consultingTrainingContent.hero}
        valuePropContent={consultingTrainingContent.valueProp}
        serviceScopeContent={consultingTrainingContent.serviceScope}
        applicationsContent={consultingTrainingContent.applications}
        processContent={consultingTrainingContent.process}
        pricingContent={consultingTrainingContent.pricing}
        insiteAdvantageContent={consultingTrainingContent.insiteAdvantage}
        faqContent={consultingTrainingContent.faq}
        ctaContent={consultingTrainingContent.cta}
      />
      <Footer />
    </div>
  );
}