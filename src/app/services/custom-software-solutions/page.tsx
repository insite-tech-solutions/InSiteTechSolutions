'use client';

import React from 'react';
import Head from 'next/head';
import Header from '@/components/site-header/header';
import ValuePropSection from '@/components/CustomSoftwareServicePage/ValueSection/ValuePropSection';
import ServiceScopeSection from '@/components/CustomSoftwareServicePage/ServiceScopeSection';
import ApplicationsSection from '@/components/CustomSoftwareServicePage/ApplicationsSection';
import PriceSection from '@/components/CustomSoftwareServicePage/PricingSection/PriceSection';
import InSiteAdvantageSection from '@/components/CustomSoftwareServicePage/InSiteAdvantageSection/InsiteAdvantage';
import FAQSection from '@/components/CustomSoftwareServicePage/FAQsection/FAQSection';
import ProcessSection from '@/components/CustomSoftwareServicePage/ProcessSection/Process';
import FinalCTASection from '@/components/CustomSoftwareServicePage/CTAsection/ctaSection';
import FooterSection from '@/components/site-footer/footer';
import HeroSection from '@/components/CustomSoftwareServicePage/HeroSection/heroSection';

const CSSolPage = () => {
    return (
      <div className='bg-gray-50'>
        <Head>
          <title>Custom Software Solutions | InSite Tech</title>
          <meta
            name="description"
            content="Transform your ideas into powerful digital solutions with our software development services. Start your project today!"
          />
        </Head>
  
        <Header />

        {/* Hero Section */}
        <HeroSection />

        {/* Value Proposition Section */}
        <ValuePropSection />

        {/* Service Scope Section */}
        <ServiceScopeSection />

        {/* Applications Section */}
        <ApplicationsSection />

        {/* Process Section */}
        <ProcessSection />

        {/* Price Section */}
        <PriceSection />

        {/* InSite Advantage Section */}
        <InSiteAdvantageSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* Final CTA Section */}
        <FinalCTASection />

        <FooterSection />
      </div>
    );
};

export default CSSolPage;