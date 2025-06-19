/**
 * @fileoverview Applications Section Index Component
 * 
 * This component serves as the main aggregator for the 'Applications' section of a service page.
 * It combines the `ApplicationCategories` component (displaying categorized applications)
 * and the `IndustrySolutions` component (showcasing industry-specific solutions in a carousel)
 * to provide a comprehensive overview of how the service applies to different use cases and industries.
 * 
 * Architecture:
 * - `ApplicationsSectionProps`: Defines the expected props for this component.
 * - `ApplicationsSection`: The main functional component that orchestrates the display
 *   of application categories and industry solutions.
 * 
 * Key Features:
 * - Composes `ApplicationCategories` and `IndustrySolutions` components.
 * - Passes content dynamically to sub-components based on `ApplicationsContent`.
 * - Utilizes `React.memo` for performance optimization, preventing unnecessary re-renders
 *   when parent components re-render but its own props remain the same.
 * 
 * @see src/page-templates/service-page/types.ts
 * @see src/page-templates/service-page/applications-section/application-categories.tsx
 * @see src/page-templates/service-page/applications-section/industry-solutions.tsx
 */

'use client'

import { memo } from 'react';
import { ApplicationsContent } from '../types'
import ApplicationCategories from './application-categories'
import IndustrySolutions from './industry-solutions'

/**
 * Props interface for the `ApplicationsSection` component.
 */
interface ApplicationsSectionProps {
  /** The content object containing data for application categories and industry solutions. */
  content: ApplicationsContent
}

/**
 * ApplicationsSection Component
 * 
 * This component acts as a central hub for the 'Applications' section, integrating
 * the `ApplicationCategories` and `IndustrySolutions` sub-components.
 * It is responsible for rendering both the categorized list of applications and the
 * carousel of industry-specific solutions, providing all necessary content via props.
 * 
 * It is memoized using `React.memo` to optimize performance by preventing
 * re-renders if its `content` prop has not changed.
 * 
 * @param {ApplicationsSectionProps} props - The properties for the component.
 * @returns {JSX.Element} A React functional component that renders the applications section.
 */
function ApplicationsSection({ content }: ApplicationsSectionProps): JSX.Element {
  return (
    <section aria-labelledby="applications-section-title" className="py-2 relative overflow-hidden">
      {/* Accessible heading for screen readers, linked by aria-labelledby */}
      <h2 id="applications-section-title" className="sr-only">{content.title}</h2>
      {/* Renders the Application Categories section with its title, description, and categories. */}
      <ApplicationCategories 
        title={content.title}
        description={content.description}
        categories={content.categories}
      />
      
      {/* Renders the Industry Solutions section, including industries and optional background icon configurations. */}
      <div className="p-1 mt-4">
        <IndustrySolutions 
          industries={content.industries}
          backgroundIcon={content.backgroundIcon || 'CodeXml'}
          backgroundIconWidth={content.backgroundIconWidth}
          backgroundIconHeight={content.backgroundIconHeight}
          industrySolutionsTitle={content.industrySolutionsTitle || content.title}
          industrySolutionsDescription={content.industrySolutionsDescription || content.description}
        />
      </div>
    </section>
  )
}

export default memo(ApplicationsSection)