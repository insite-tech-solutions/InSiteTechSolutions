// src/templates/service-page/service-page-template.tsx

import React from 'react';
import HeroSection from './hero-section/hero-section';
import ValuePropSection from './value-prop-section/value-prop-section';
import { ServicePageTemplateOptions } from './types';

/**
 * Service Page Template 
 * 
 * A reusable template for service pages that renders configurable sections.
 * Currently includes hero and value prop sections for testing.
 * 
 * @param heroContent - Content for the hero section
 * @param valuePropContent - Content for the value proposition section
 * @param options - Optional configuration for the template
 * @returns JSX.Element
 */
export default function ServicePageTemplate({
  heroContent,
  valuePropContent,
  options = {}
}: {
  heroContent: any,
  valuePropContent: any,
  options?: ServicePageTemplateOptions
}) {
  const {
    skipSections = [],
    layoutVariant = 'default'
  } = options;
  
  // Helper to check if a section should be rendered
  const shouldRenderSection = (sectionName: string) => !skipSections.includes(sectionName as any);
  
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      {shouldRenderSection('hero') && (
        <HeroSection content={heroContent} />
      )}
      
      {/* Value Proposition Section */}
      {shouldRenderSection('valueProp') && (
        <ValuePropSection 
          content={valuePropContent}
          layoutVariant={layoutVariant}
        />
      )}
    </div>
  );
}