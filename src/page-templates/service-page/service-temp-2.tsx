// src/page-templates/service-page/service-temp-2.tsx

import React from 'react';
import HeroSection from './hero-section';
import ValuePropSection from './value-prop-section';
import ServiceScopeSection from './service-scope-section';
import ApplicationsSection from './applications-section';
import ProcessSection from './process-section';
import PriceSection from './price-section';
import InSiteAdvantageSection from './insite-advantage-section';
import FAQSection from './faq-section';
import CTASection from './cta-section';
import Layout from '@/components/reusable-components/layout';
import { 
  HeroSectionContent, 
  ValuePropContent, 
  ServiceScopeContent, 
  ApplicationsContent,
  ProcessContent,
  PricingContent, 
  InSiteAdvantageContent,
  FAQContent,
  CTAContent
} from './types';

interface ServicePageTemplateProps {
  heroContent: HeroSectionContent;
  valuePropContent: ValuePropContent;
  serviceScopeContent?: ServiceScopeContent;
  applicationsContent?: ApplicationsContent;
  processContent?: ProcessContent;
  pricingContent?: PricingContent;
  insiteAdvantageContent?: InSiteAdvantageContent;
  faqContent?: FAQContent;
  ctaContent?: CTAContent;
}

/**
 * Service Page Template Component
 * 
 * A flexible template for service pages that includes configurable sections:
 * - Hero section with background and CTA
 * - Value proposition section with market insights and industry trends
 * - Service scope section with core services and key benefits
 * - Applications section with application categories and industry solutions
 * - Process section with animated timeline showing the development approach
 * 
 * @param heroContent - Configuration for the hero section
 * @param valuePropContent - Configuration for the value proposition section
 * @param serviceScopeContent - Optional configuration for the service scope section
 * @param applicationsContent - Optional configuration for the applications section
 * @param processContent - Optional configuration for the process section
 */
const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  heroContent,
  valuePropContent,
  serviceScopeContent,
  applicationsContent,
  processContent,
  pricingContent,
  insiteAdvantageContent,
  faqContent,
  ctaContent
}) => {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection content={heroContent} />

    <Layout>
      
      {/* Value Proposition Section */}
      {valuePropContent && (
        <ValuePropSection content={valuePropContent} />
      )}
      
      {/* Service Scope Section (if provided) */}
      {serviceScopeContent && (
        <ServiceScopeSection content={serviceScopeContent} />
      )}
      
      {/* Applications Section (if provided) */}
      {applicationsContent && (
        <ApplicationsSection content={applicationsContent} />
      )}

      {/* Process Section (if provided) */}
      {processContent && (
        <ProcessSection content={processContent} />
      )}
      
      {/* Price Section */}
      {pricingContent && (
        <PriceSection content={pricingContent} />
      )}

      {/* InSite Advantage Section */}
      {insiteAdvantageContent && (
        <InSiteAdvantageSection content={insiteAdvantageContent} />
      )}

      {/* FAQ Section */}
      {faqContent && (
        <FAQSection content={faqContent} />
      )}
    
      {/* CTA Section */}
      {ctaContent && (
        <CTASection content={ctaContent} />
      )}
      </Layout>

      {/* Additional sections can be added here */}
    </main>
  );
};

export default ServicePageTemplate;