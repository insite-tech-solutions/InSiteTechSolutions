// src/app/services/data-analysis/page.tsx

'use client';

import React from 'react';
import Header from '@/components/site-header/header';
import Footer from '@/components/site-footer/footer';
import ServicePageTemplate from '@/page-templates/service-page/service-temp-2';
import customSoftwareHero from '@/content/service-pages/custom-software/hero-content';
import customSoftwareValueProp from '@/content/service-pages/custom-software/value-prop-content';
import customSoftwareServiceScope from '@/content/service-pages/custom-software/service-scope-content';
import customSoftwareApplications from '@/content/service-pages/custom-software/applications-content';
import { processSectionContent } from '@/content/service-pages/custom-software/process-content';
import PriceSection from '@/components/CustomSoftwareServicePage/PricingSection/PriceSection';


export default function CustomSoftwareSolutionsPage() {
  return (
    <div className='bg-gray-50'>
      <Header />
      
      <ServicePageTemplate 
        heroContent={customSoftwareHero}
        valuePropContent={customSoftwareValueProp}
        serviceScopeContent={customSoftwareServiceScope}
        applicationsContent={customSoftwareApplications}
        processContent={processSectionContent}
      />
      <PriceSection />
      
      <Footer />
    </div>
  );
}