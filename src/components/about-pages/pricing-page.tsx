/**
 * Pricing Page Component
 *
 * This component assembles the complete pricing and payments page. It follows a similar
 * pattern to the service pages, where a primary component imports a template
 * along with the site header and footer to construct the final page.
 * This promotes a consistent and maintainable architecture across the site.
 */
'use client';

import React from 'react';
import Header from '@/components/site-header/header';
import Footer from '@/components/site-footer/footer';
import PricingPageTemplate from '@/page-templates/pricing-page';

const PricingPage = () => {
  return (
    <div>
      <Header />
        <PricingPageTemplate />
      <Footer />
    </div>
  );
};

export default PricingPage; 