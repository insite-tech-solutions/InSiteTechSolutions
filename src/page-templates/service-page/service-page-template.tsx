// src/templates/service-page/service-page-template.tsx

import React from 'react';
import dynamic from 'next/dynamic';
import { ServicePageTemplateOptions } from './types';

/**
 * Service Page Template 
 * 
 * A reusable template for service pages that renders multiple configurable sections.
 * Uses dynamic imports to load sections only when needed, improving performance.
 * Supports excluding sections, adding custom sections, and different layout variants.
 * 
 * @param serviceSlug - Slug of the service (used to load content files)
 * @param options - Optional configuration for the template
 * @returns JSX.Element
 */
export default function ServicePageTemplate({
  serviceSlug,
  options = {}
}: {
  serviceSlug: string,
  options?: ServicePageTemplateOptions
}) {
  const {
    skipSections = [],
    addSections = {},
    layoutVariant = 'default'
  } = options;
  
  // Dynamically import section components
  const HeroSection = dynamic(() => import('./sections/hero/hero-section'));
  const ValuePropSection = dynamic(() => import('./sections/value-prop/value-prop-section'));
  const ServiceScopeSection = dynamic(() => import('./sections/service-scope/service-scope-section'));
  const ApplicationsSection = dynamic(() => import('./sections/applications/applications-section'));
  const ProcessSection = dynamic(() => import('./sections/process/process-section'));
  const PricingSection = dynamic(() => import('./sections/pricing/pricing-section'));
  const BenefitsSection = dynamic(() => import('./sections/benefits/benefits-section'));
  const FAQSection = dynamic(() => import('./sections/faq/faq-section'));
  const CTASection = dynamic(() => import('./sections/cta/cta-section'));
  
  // Helper to check if a section should be rendered
  const shouldRenderSection = (sectionName: string) => !skipSections.includes(sectionName as any);
  
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
    <div className="bg-gray-50">
      {/* Hero Section */}
      {shouldRenderSection('hero') && (
        <HeroSection serviceSlug={serviceSlug} />
      )}
      
      {/* Custom section injection after Hero */}
      {customSectionsBeforeValueProp}
      
      {/* Value Proposition Section */}
      {shouldRenderSection('valueProp') && (
        <ValuePropSection serviceSlug={serviceSlug} layoutVariant={layoutVariant} />
      )}
      
      {/* Custom section injection after Value Prop */}
      {customSectionsAfterValueProp}
      
      {/* Service Scope Section */}
      {shouldRenderSection('serviceScope') && (
        <ServiceScopeSection serviceSlug={serviceSlug} />
      )}
      
      {/* Custom section injection after Service Scope */}
      {customSectionsAfterServiceScope}
      
      {/* Applications Section */}
      {shouldRenderSection('applications') && (
        <ApplicationsSection serviceSlug={serviceSlug} />
      )}
      
      {/* Custom section injection after Applications */}
      {customSectionsAfterApplications}
      
      {/* Process Section */}
      {shouldRenderSection('process') && (
        <ProcessSection serviceSlug={serviceSlug} />
      )}
      
      {/* Custom section injection after Process */}
      {customSectionsAfterProcess}
      
      {/* Pricing Section */}
      {shouldRenderSection('pricing') && (
        <PricingSection serviceSlug={serviceSlug} />
      )}
      
      {/* Custom section injection after Pricing */}
      {customSectionsAfterPricing}
      
      {/* Benefits Section */}
      {shouldRenderSection('benefits') && (
        <BenefitsSection serviceSlug={serviceSlug} />
      )}
      
      {/* Custom section injection after Benefits */}
      {customSectionsAfterBenefits}
      
      {/* FAQ Section */}
      {shouldRenderSection('faq') && (
        <FAQSection serviceSlug={serviceSlug} />
      )}
      
      {/* Custom section injection after FAQ */}
      {customSectionsAfterFAQ}
      
      {/* CTA Section */}
      {shouldRenderSection('cta') && (
        <CTASection serviceSlug={serviceSlug} />
      )}
    </div>
  );
}