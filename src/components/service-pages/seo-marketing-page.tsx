/**
 * SEO & Online Marketing Page Component
 * 
 * This component is used to display the SEO & Online Marketing service page.
 * It uses the ServicePageTemplate to render the page layout and content.
 */

'use client';
import React from 'react';
import ServicePageTemplate from '@/page-templates/service-page/service-page-template';
import Header from '@/components/site-header/header';
import Footer from '@/components/site-footer/footer';
import seoMarketingContent from '@/content/service-pages/seo-marketing';

/**
 * SEOMarketingPage component
 * 
 * This component renders the SEO & Online Marketing service page, including the header,
 * the service page template with its content, and the footer.
 * 
 * @returns {JSX.Element} The rendered SEO & Online Marketing service page
 */
export default function SEOMarketingPage() {
  return (
    <div>
      <Header />
      <ServicePageTemplate
        heroContent={seoMarketingContent.hero}
        serviceOverviewContent={seoMarketingContent.overview}
        valuePropContent={seoMarketingContent.valueProp}
        serviceScopeContent={seoMarketingContent.serviceScope}
        applicationsContent={seoMarketingContent.applications}
        processContent={seoMarketingContent.process}
        pricingContent={seoMarketingContent.pricing}
        insiteAdvantageContent={seoMarketingContent.insiteAdvantage}
        faqContent={seoMarketingContent.faq}
        ctaContent={seoMarketingContent.cta}
      />
      <Footer />
    </div>
  );
}