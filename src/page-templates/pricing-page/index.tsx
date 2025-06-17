/**
 * Pricing Page Template
 *
 * This component acts as a template for the pricing and payments page. It aggregates
 * all the individual sections of the pricing page and arranges them within a consistent
 * layout structure. This approach mirrors the service page templates, promoting
 * reusability and maintainability.
 */
import React, { useEffect } from 'react';
import Layout from '@/components/reusable-components/layout';
import HeroSection from '@/page-templates/pricing-page/hero-section';
import PricingOverview from '@/page-templates/pricing-page/pricing-overview';
import PricingModels from '@/page-templates/pricing-page/pricing-models';
import PaymentOptions from '@/page-templates/pricing-page/payment-methods';
import PaymentTerms from '@/page-templates/pricing-page/payment-terms';
import PricingEstimator from '@/page-templates/pricing-page/pricing-estimator';
import FAQSection from '@/page-templates/service-page/faq-section/faq-section';
import CustomSolutionSection from '@/page-templates/pricing-page/cta-section';
import pricingFAQContent from '@/page-templates/pricing-page/pricing-faq-content';
import { PageLoadingProvider, usePageLoading } from '@/contexts/page-loading-context';
import PageTransitionLoader from '@/components/reusable-components/page-transition-loader';

const PricingPageContent = () => {
  const { setIsPageLoading } = usePageLoading();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [setIsPageLoading]);
  
  return (
    <>
      <HeroSection />
      <Layout>
        {/*
          The following divs replicate the spacing from the original page.tsx implementation
          to ensure visual consistency after refactoring.
        */}
        <div className="py-16">
            <div>
            <PricingOverview />
            </div>
            <div className="my-16">
            <PricingModels />
            </div>
            <div className="my-16">
            <PaymentOptions />
            </div>
            <div className="my-16">
              <PaymentTerms />
            </div>
            <div className="my-16">
              <PricingEstimator />
            </div>
            <div className="my-16">
              <FAQSection content={pricingFAQContent} />
            </div>
            <div className="my-12">
              <CustomSolutionSection />
            </div>
        </div>
      </Layout>
    </>
  );
};

const PricingPageLoaderWrapper: React.FC = () => {
  const { isPageLoading } = usePageLoading();

  return (
    <>
      {isPageLoading && <PageTransitionLoader />}
      <PricingPageContent />
    </>
  );
};

const PricingPageTemplate = () => {
  return (
    <PageLoadingProvider>
      <PricingPageLoaderWrapper />
    </PageLoadingProvider>
  );
};

export default PricingPageTemplate; 