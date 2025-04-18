// src/page-templates/service-page/service-scope-section/index.tsx

'use client'
import React from 'react'
import { ServiceScopeContent } from '../types'
import CoreServices from './core-services'
import KeyBenefits from './key-benefits'

interface ServiceScopeSectionProps {
  content: ServiceScopeContent
}

/**
 * ServiceScopeSection component combines CoreServices and KeyBenefits
 * to display the service offerings and their benefits.
 * 
 * @param content - Configuration for services and benefits
 */
const ServiceScopeSection: React.FC<ServiceScopeSectionProps> = ({ content }) => {
  return (
    <section className="p-2 bg-gray-50">
      {/* Core Services with GSAP animations */}
      <CoreServices 
        title={content.title}
        description={content.description}
        services={content.services}
      />
      
      {/* Key Benefits displayed as a carousel */}
      <div className="p-6 mt-6">
        <KeyBenefits 
          benefits={content.benefits || []}
          backgroundIcon={content.backgroundIcon || ''}
        />
      </div>
    </section>
  )
}

export default ServiceScopeSection