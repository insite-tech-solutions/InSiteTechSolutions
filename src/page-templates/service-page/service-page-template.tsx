/**
 * @fileoverview Service Page Template component
 * 
 * This module provides a configurable template for service pages with performance optimizations.
 * It implements a progressive loading strategy with critical above-the-fold content loaded
 * synchronously and below-the-fold sections loaded asynchronously via dynamic imports.
 * 
 * The architecture supports:
 * - Section configuration and conditional rendering
 * - Custom section injection at predefined insertion points
 * - Multiple layout variants
 * - Page transition loading states
 */

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Layout from '@/components/reusable-components/layout';
import PageTransitionLoader from '@/components/reusable-components/page-transition-loader';
import { PageLoadingProvider, usePageLoading } from '@/contexts/page-loading-context';

// Direct imports for critical above-the-fold content
import HeroSection from './hero-section';
import ServiceOverviewSection from './overview-section';
import ValuePropSection from './value-prop-section';

/**
 * Dynamic imports for below-the-fold content to improve initial page load performance
 * These sections are loaded asynchronously after the initial render
 */
const ServiceScopeSection = dynamic(() => import('./service-scope-section'), { ssr: false });
const ApplicationsSection = dynamic(() => import('./applications-section'), { ssr: false });
const ProcessSection = dynamic(() => import('./process-section'), { ssr: false });
const PricingSection = dynamic(() => import('./pricing-section'), { ssr: false });
const InSiteAdvantageSection = dynamic(() => import('./insite-advantage-section'), { ssr: false });
const FAQSection = dynamic(() => import('./faq-section'), { ssr: false });
const CTASection = dynamic(() => import('./cta-section'), { ssr: false });

import { 
  HeroSectionContent, 
  ServiceOverviewContent,
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
 * @property {ServiceOverviewContent} [serviceOverviewContent] - Optional configuration for the service overview section
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
  serviceOverviewContent?: ServiceOverviewContent;
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
 * Main content renderer for the Service Page Template
 * 
 * @component
 * @param {ServicePageTemplateProps} props - Component props containing section content and options
 * @returns {JSX.Element} The rendered service page content
 */
function ServicePageContent({ 
  heroContent, 
  serviceOverviewContent, 
  valuePropContent, 
  serviceScopeContent, 
  applicationsContent, 
  processContent, 
  pricingContent, 
  insiteAdvantageContent, 
  faqContent, 
  ctaContent, 
  options = {} 
}: ServicePageTemplateProps): JSX.Element {
  const { setIsPageLoading } = usePageLoading();

  /**
   * Effect to handle page loading state
   * Sets loading state to false after a short delay to ensure smooth transitions
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 500); // Adjust delay as needed (e.g., 1500ms = 1.5 seconds)

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [setIsPageLoading]);

  const {
    skipSections = [] as SectionName[],
    addSections = {},
    layoutVariant = 'default'
  } = options;
  
  /**
   * Union type of all possible section names for type safety when checking sections
   */
  type SectionName = 
    | 'hero' 
    | 'serviceOverview'
    | 'valueProp' 
    | 'serviceScope' 
    | 'applications' 
    | 'process' 
    | 'pricing' 
    | 'insiteAdvantage'
    | 'faq' 
    | 'cta'
    | keyof ServicePageTemplateOptions['addSections'];

  /**
   * Helper function to check if a section should be rendered based on skipSections config
   * @param {SectionName} sectionName - The name of the section to check
   * @returns {boolean} Whether the section should be rendered
   */
  const shouldRenderSection = (sectionName: SectionName) => !skipSections.includes(sectionName);
  
  // Extract custom section insertion points from options
  const customSectionsBeforeServiceOverview = addSections.beforeServiceOverview || null;
  const customSectionsAfterServiceOverview = addSections.afterServiceOverview || null;
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
        {/* Custom section injection before Service Overview */}
        {customSectionsBeforeServiceOverview}

        {/* Service Overview Section */}
        {shouldRenderSection('serviceOverview') && serviceOverviewContent && (
          <ServiceOverviewSection content={serviceOverviewContent} />
        )}

        {/* Custom section injection after Service Overview */}
        {customSectionsAfterServiceOverview}
        
        {/* Custom section injection before Value Prop (original position for this) */}
        {customSectionsBeforeValueProp}
        
        {/* Value Proposition Section */}
        {shouldRenderSection('valueProp') && (
          <div id="value-prop">
            <ValuePropSection 
              content={valuePropContent} 
              layoutVariant={layoutVariant} 
            />
          </div>
        )}
        
        {/* Custom section injection after Value Prop */}
        {customSectionsAfterValueProp}
        
        {/* Service Scope Section */}
        {shouldRenderSection('serviceScope') && serviceScopeContent && (
          <div id="service-scope">
            <ServiceScopeSection content={serviceScopeContent} />
          </div>
        )}
        
        {/* Custom section injection after Service Scope */}
        {customSectionsAfterServiceScope}
        
        {/* Applications Section */}
        {shouldRenderSection('applications') && applicationsContent && (
          <div id="applications">
            <ApplicationsSection content={applicationsContent} />
          </div>
        )}
        
        {/* Custom section injection after Applications */}
        {customSectionsAfterApplications}
        
        {/* Process Section */}
        {shouldRenderSection('process') && processContent && (
          <div id="process">
            <ProcessSection content={processContent} />
          </div>
        )}
        
        {/* Custom section injection after Process */}
        {customSectionsAfterProcess}
        
        {/* Pricing Section */}
        {shouldRenderSection('pricing') && pricingContent && (
          <div id="pricing">
            <PricingSection content={pricingContent} />
          </div>
        )}
        
        {/* Custom section injection after Pricing */}
        {customSectionsAfterPricing}
        
        {/* Benefits/InSite Advantage Section */}
        {shouldRenderSection('insiteAdvantage') && insiteAdvantageContent && (
          <div id="insite-advantage">
            <InSiteAdvantageSection content={insiteAdvantageContent} />
          </div>
        )}
        
        {/* Custom section injection after Benefits */}
        {customSectionsAfterBenefits}
        
        {/* FAQ Section */}
        {shouldRenderSection('faq') && faqContent && (
          <div id="faq">
            <FAQSection content={faqContent} />
          </div>
        )}
        
        {/* Custom section injection after FAQ */}
        {customSectionsAfterFAQ}
        
        {/* CTA Section */}
        {shouldRenderSection('cta') && ctaContent && (
          <div id="cta">
            <CTASection content={ctaContent} />
          </div>
        )}
      </Layout>
    </main>
  );
}

/**
 * Wrapper component that conditionally renders loader and content based on loading state
 * 
 * @component
 * @param {ServicePageTemplateProps} props - Component props to pass to ServicePageContent
 * @returns {JSX.Element} Page content with conditional loader
 */
function ServicePageLoaderWrapper(props: ServicePageTemplateProps): JSX.Element {
  const { isPageLoading } = usePageLoading();

  return (
    <>
      {isPageLoading && <PageTransitionLoader />}
      <ServicePageContent {...props} />
    </>
  );
}

/**
 * Main export component that wraps the service page with loading context provider
 * 
 * @component
 * @param {ServicePageTemplateProps} props - Component props containing section content and options
 * @returns {JSX.Element} The fully wrapped service page template
 * 
 * @example
 * ```tsx
 * import ServicePageTemplate from '@/page-templates/service-page/service-page-template';
 * import { 
 *   heroContent, 
 *   serviceOverviewContent,
 *   valuePropContent,
 *   // ... other content sections
 * } from '@/content/service-pages/my-service';
 * 
 * export default function MyServicePage() {
 *   return (
 *     <ServicePageTemplate
 *       heroContent={heroContent}
 *       serviceOverviewContent={serviceOverviewContent}
 *       valuePropContent={valuePropContent}
 *       // ... other content sections
 *       options={{
 *         skipSections: ['faq'],
 *         layoutVariant: 'compact'
 *       }}
 *     />
 *   );
 * }
 * ```
 */
export default function ServicePageTemplate(props: ServicePageTemplateProps): JSX.Element {
  return (
    <PageLoadingProvider>
      <ServicePageLoaderWrapper {...props} />
    </PageLoadingProvider>
  );
}