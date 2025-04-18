// src/app/services/custom-software-solutions/page.tsx

'use client';

import React from 'react';
import Header from '@/components/site-header/header';
import Footer from '@/components/site-footer/footer';
import ServicePageTemplate from '@/page-templates/service-page/service-temp-2';
import customSoftwareHero from '@/content/service-pages/custom-software/hero-content';
import customSoftwareValueProp from '@/content/service-pages/custom-software/value-prop-section';
/**
 * Custom Software Solutions Page (Test Version)
 * 
 * This page uses the ServicePageTemplate to render the hero section
 * with content from the custom software hero content file.
 */
export default function CustomSoftwareSolutionsPage() {
  return (
    <div className='bg-gray-50'>
      <Header />
      
      <ServicePageTemplate 
        heroContent={customSoftwareHero}
        valuePropContent={customSoftwareValueProp}
      />
      
      <Footer />
    </div>
  );
}