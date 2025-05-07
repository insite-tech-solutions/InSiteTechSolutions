'use client'

import React from 'react'
import { ServiceOverviewContent } from '../types'
import ServiceOverviewSection from './service-overview'

interface ServiceOverviewProps {
  content: ServiceOverviewContent
}

/**
 * ServiceOverview component displays the service overview section with:
 * - Markdown-rendered main content
 * - Table of Contents navigation
 * - Call-to-action section
 * 
 * @param content - Configuration for the overview section including markdown text
 * and table of contents items
 */
const ServiceOverview: React.FC<ServiceOverviewProps> = ({ content }) => {
  return (
    <ServiceOverviewSection content={content} />
  )
}

export default React.memo(ServiceOverview);
