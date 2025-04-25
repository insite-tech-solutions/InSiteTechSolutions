'use client'
import React from 'react'
import { InSiteAdvantageContent } from '../types'
import InSiteAdvantageSectionWrapper from './insite-advantage-section'

interface BenefitsSectionProps {
  content: InSiteAdvantageContent
}

/**
 * Benefits/InSite Advantage section that displays company advantages and client benefits
 * 
 * @param content - Configuration for the benefits section including title, description,
 * and benefit items (split into advantages and benefits based on position in array)
 */
const InSiteAdvantageSection: React.FC<BenefitsSectionProps> = ({ content }) => {
  return <InSiteAdvantageSectionWrapper content={content} />
}

export default React.memo(InSiteAdvantageSection);