// src/page-templates/service-page/service-temp-2.tsx

import React from 'react';
import HeroSection from './hero-section/hero-section';
import ValuePropSection from './value-prop-section/value-prop-section';
import ServiceScopeSection from './service-scope-section';
import ApplicationsSection from './applications-section';
import ProcessSectionWrapper from './process-section/process-section';
import { 
  HeroSectionContent, 
  ValuePropContent, 
  ServiceScopeContent, 
  ApplicationsContent,
  ProcessSectionContent
} from './types';

interface ServicePageTemplateProps {
  heroContent: HeroSectionContent;
  valuePropContent: ValuePropContent;
  serviceScopeContent?: ServiceScopeContent;
  applicationsContent?: ApplicationsContent;
  processContent?: ProcessSectionContent;
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
  processContent
}) => {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection content={heroContent} />
      
      {/* Value Proposition Section */}
      <ValuePropSection content={valuePropContent} />
      
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
        <ProcessSectionWrapper content={processContent} />
      )}
      
      {/* Additional sections can be added here */}
    </main>
  );
};

export default ServicePageTemplate;