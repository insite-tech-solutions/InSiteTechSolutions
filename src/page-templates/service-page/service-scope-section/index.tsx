/**
 * @fileoverview Service Scope Section Index Component
 * 
 * This component acts as an aggregator for the 'Service Scope' section of a service page.
 * It combines the `CoreServices` component (displaying core offerings with animations)
 * and the `KeyBenefits` component (displaying key benefits in a carousel) to present
 * a comprehensive overview of the service's scope.
 * 
 * Architecture:
 * - `ServiceScopeSectionProps`: Defines the expected props for this component.
 * - `ServiceScopeSection`: The main functional component that orchestrates the display
 *   of core services and key benefits.
 * 
 * Key Features:
 * - Composes `CoreServices` and `KeyBenefits` components.
 * - Passes content dynamically to sub-components based on `ServiceScopeContent`.
 * - Utilizes `React.memo` for performance optimization, preventing unnecessary re-renders
 *   when parent components re-render but its own props remain the same.
 * 
 * @see src/page-templates/service-page/types.ts
 * @see src/page-templates/service-page/service-scope-section/core-services.tsx
 * @see src/page-templates/service-page/service-scope-section/key-benefits.tsx
 */

'use client'
import { memo } from 'react';
import { ServiceScopeContent } from '../types'
import CoreServices from './core-services'
import KeyBenefits from './key-benefits'

/**
 * Props interface for the `ServiceScopeSection` component.
 */
interface ServiceScopeSectionProps {
  /** The content object containing data for core services and key benefits. */
  content: ServiceScopeContent
}

/**
 * ServiceScopeSection Component
 * 
 * This component combines the `CoreServices` and `KeyBenefits` components
 * to display the comprehensive service offerings and their associated benefits.
 * It serves as a wrapper to pass down the relevant content to its children components.
 * 
 * It is memoized using `React.memo` to optimize performance by preventing
 * re-renders if its `content` prop has not changed.
 * 
 * @param {ServiceScopeSectionProps} props - The properties for the component.
 * @returns {JSX.Element} A React functional component that renders the service scope section.
 */
function ServiceScopeSection({ content }: ServiceScopeSectionProps): JSX.Element {
  return (
    <section aria-labelledby="service-scope-section-title" className="w-full">
      {/* Accessible heading for screen readers, linked by aria-labelledby */}
      <h2 id="service-scope-section-title" className="sr-only">{content.title}</h2>
      {/* Renders the Core Services section with GSAP animations */}
      <CoreServices 
        title={content.title}
        description={content.description}
        services={content.services}
      />
      
      {/* Renders the Key Benefits section, displayed as a carousel */}
      <div className="p-2 mt-4 mb-10">
        <KeyBenefits 
          benefits={content.benefits || []}
          backgroundIcon={content.backgroundIcon || 'CodeXml'}
          backgroundIconWidth={content.backgroundIconWidth}
          backgroundIconHeight={content.backgroundIconHeight}
          keyBenefitsTitle={content.keyBenefitsTitle || content.title}
          keyBenefitsDescription={content.keyBenefitsDescription || content.description}
        />
      </div>
    </section>
  )
}

export default memo(ServiceScopeSection);