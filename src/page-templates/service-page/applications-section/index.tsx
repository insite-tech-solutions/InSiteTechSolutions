// src/page-templates/service-page/applications-section/index.tsx

'use client'

import React from 'react'
import { ApplicationsContent } from '../types'
import ApplicationCategories from './application-categories'
import IndustrySolutions from './industry-solutions'

interface ApplicationsSectionProps {
  content: ApplicationsContent
}

/**
 * ApplicationsSection component combines ApplicationCategories and IndustrySolutions
 * to display the application categories and industry-specific solutions.
 * 
 * @param content - Configuration for application categories and industry solutions
 */
const ApplicationsSection: React.FC<ApplicationsSectionProps> = ({ content }) => {
  return (
    <section className="py-2 relative overflow-hidden">
      {/* Application Categories with blue gradient background */}
      <ApplicationCategories 
        title={content.title}
        description={content.description}
        categories={content.categories}
      />
      
      {/* Industry Solutions displayed as a carousel */}
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

export default React.memo(ApplicationsSection);