// src/templates/service-page/service-page-template.tsx

import React from 'react';
import { ServiceContent, ServicePageTemplateOptions } from './types';
import HeroSection from './hero-section/hero-section';
import ValuePropSection from './value-prop-section/valu-prop-section';
// Import other section components

/**
 * Service Page Template 
 * 
 * A reusable template for service pages that renders multiple configurable sections.
 * Supports excluding sections, adding custom sections, and different layout variants.
 * 
 * @param service - Service content configuration object
 * @param options - Optional configuration for the template
 * @returns JSX.Element
 */
export default function ServicePageTemplate({
  service,
  options = {}
}: {
  service: ServiceContent,
  options?: ServicePageTemplateOptions
}) {
  const {
    skipSections = [],
    addSections = {},
    layoutVariant = 'default'
  } = options;
  
  // Helper to check if a section should be rendered
  const shouldRenderSection = (sectionName: string) => !skipSections.includes(sectionName as any);
  
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      {shouldRenderSection('hero') && (
        <HeroSection content={service.hero} />
      )}
      
      {/* Value Proposition Section */}
      {shouldRenderSection('valueProp') && (
        <ValuePropSection content={service.valueProp} />
      )}
      
      {/* Service Scope Section - Implement similar pattern for other sections */}
      {/* {shouldRenderSection('serviceScope') && (
        <ServiceScopeSection content={service.serviceScope} />
      )} */}
      
      {/* Add more section components here */}
      
      {/* Custom section injection */}
      {Object.entries(addSections).map(([key, section]) => (
        <div key={key}>{section}</div>
      ))}
    </div>
  );
}