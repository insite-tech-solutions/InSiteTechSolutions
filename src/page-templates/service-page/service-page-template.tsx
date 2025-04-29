/**
 * Service Page Template component.
 * Dynamically composes a full service page using critical above-the-fold imports
 * and lazy-loaded dynamic imports for below-the-fold sections. Supports custom section injection,
 * layout variants, and optional section skipping through configuration.
 */
// src/templates/service-page/service-page-template.tsx

import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '@/components/reusable-components/layout';

// Direct imports for critical above-the-fold content
import HeroSection from './hero-section';
import ValuePropSection from './value-prop-section';

// Dynamic imports for below-the-fold content
const ServiceScopeSection = dynamic(() => import('./service-scope-section'), { ssr: false });
const ApplicationsSection = dynamic(() => import('./applications-section'), { ssr: false });
const ProcessSection = dynamic(() => import('./process-section'), { ssr: false });
const PricingSection = dynamic(() => import('./pricing-section'), { ssr: false });
const InSiteAdvantageSection = dynamic(() => import('./insite-advantage-section'), { ssr: false });
const FAQSection = dynamic(() => import('./faq-section'), { ssr: false });
const CTASection = dynamic(() => import('./cta-section'), { ssr: false });

import { 
  HeroSectionContent, 
  ValuePropContent, 
  ServiceScopeContent, 
  ApplicationsContent,
  ProcessContent,
  PricingContent, 
  InSiteAdvantageContent,
  FAQContent,
  CTAContent,
  ServicePageTemplateOptions
} from './types';

/**
 * Interface for the ServicePageTemplate component props.
 * 
 * @interface ServicePageTemplateProps
 * @property {HeroSectionContent} heroContent - Configuration for the hero section
 * @property {ValuePropContent} valuePropContent - Configuration for the value proposition section
 * @property {ServiceScopeContent} [serviceScopeContent] - Optional configuration for the service scope section
 * @property {ApplicationsContent} [applicationsContent] - Optional configuration for the applications section
 * @property {ProcessContent} [processContent] - Optional configuration for the process section
 * @property {PricingContent} [pricingContent] - Optional configuration for the pricing section
 * @property {InSiteAdvantageContent} [insiteAdvantageContent] - Optional configuration for the InSite advantage section
 * @property {FAQContent} [faqContent] - Optional configuration for the FAQ section
 * @property {CTAContent} [ctaContent] - Optional configuration for the CTA section
 * @property {ServicePageTemplateOptions} [options] - Optional configuration options for the template
 */
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
  options?: ServicePageTemplateOptions;
}

/**
 * Service Page Template Component
 * 
 * A flexible template for service pages that combines direct imports for critical
 * above-the-fold content with dynamic imports for below-the-fold sections.
 * 
 * Features:
 * - Performance optimized with critical content loaded immediately
 * - Secondary content lazy-loaded when needed
 * - Support for customization via options (skipping sections, adding custom sections)
 * - Fully typed content interfaces
 * 
 * @param {ServicePageTemplateProps} props - Component props
 * @returns {JSX.Element} A memoized service page template component
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
  ctaContent,
  options = {}
}) => {
  const {
    skipSections = [] as SectionName[],
    addSections = {},
    layoutVariant = 'default'
  } = options;
  
  // Helper to check if a section should be rendered
  type SectionName = 
    | 'hero' 
    | 'valueProp' 
    | 'serviceScope' 
    | 'applications' 
    | 'process' 
    | 'pricing' 
    | 'insiteAdvantage'
    | 'faq' 
    | 'cta'
    | keyof ServicePageTemplateOptions['addSections'];

  const shouldRenderSection = (sectionName: SectionName) => !skipSections.includes(sectionName);
  
  // Define insertion points for custom sections
  const customSectionsBeforeValueProp = addSections.beforeValueProp || null;
  const customSectionsAfterValueProp = addSections.afterValueProp || null;
  const customSectionsAfterServiceScope = addSections.afterServiceScope || null;
  const customSectionsAfterApplications = addSections.afterApplications || null;
  const customSectionsAfterProcess = addSections.afterProcess || null;
  const customSectionsAfterPricing = addSections.afterPricing || null;
  const customSectionsAfterBenefits = addSections.afterBenefits || null;
  const customSectionsAfterFAQ = addSections.afterFAQ || null;

  return (
    <main className="bg-gray-50">
      {/* Hero Section - Always rendered outside of Layout for full-width capabilities */}
      {shouldRenderSection('hero') && (
        <HeroSection content={heroContent} />
      )}

      <Layout>
        {/* Custom section injection after Hero */}
        {customSectionsBeforeValueProp}
        
        {/* Value Proposition Section */}
        {shouldRenderSection('valueProp') && (
          <ValuePropSection 
            content={valuePropContent} 
            layoutVariant={layoutVariant} 
          />
        )}
        
        {/* Custom section injection after Value Prop */}
        {customSectionsAfterValueProp}
        
        {/* Service Scope Section */}
        {shouldRenderSection('serviceScope') && serviceScopeContent && (
          <ServiceScopeSection content={serviceScopeContent} />
        )}
        
        {/* Custom section injection after Service Scope */}
        {customSectionsAfterServiceScope}
        
        {/* Applications Section */}
        {shouldRenderSection('applications') && applicationsContent && (
          <ApplicationsSection content={applicationsContent} />
        )}
        
        {/* Custom section injection after Applications */}
        {customSectionsAfterApplications}
        
        {/* Process Section */}
        {shouldRenderSection('process') && processContent && (
          <ProcessSection content={processContent} />
        )}
        
        {/* Custom section injection after Process */}
        {customSectionsAfterProcess}
        
        {/* Pricing Section */}
        {shouldRenderSection('pricing') && pricingContent && (
          <PricingSection content={pricingContent} />
        )}
        
        {/* Custom section injection after Pricing */}
        {customSectionsAfterPricing}
        
        {/* Benefits/InSite Advantage Section */}
        {shouldRenderSection('insiteAdvantage') && insiteAdvantageContent && (
          <InSiteAdvantageSection content={insiteAdvantageContent} />
        )}
        
        {/* Custom section injection after Benefits */}
        {customSectionsAfterBenefits}
        
        {/* FAQ Section */}
        {shouldRenderSection('faq') && faqContent && (
          <FAQSection content={faqContent} />
        )}
        
        {/* Custom section injection after FAQ */}
        {customSectionsAfterFAQ}
        
        {/* CTA Section */}
        {shouldRenderSection('cta') && ctaContent && (
          <CTASection content={ctaContent} />
        )}
      </Layout>
    </main>
  );
};

export default ServicePageTemplate;