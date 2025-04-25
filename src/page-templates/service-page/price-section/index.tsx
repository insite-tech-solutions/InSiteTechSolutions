// src/page-templates/service-page/price-section/index.tsx

'use client'
import React from 'react'
import { PricingContent } from '../types'
import PriceSectionWrapper from './pricing-section'

interface PriceSectionProps {
  content: PricingContent
}

/**
 * PriceSection component displays pricing factors, long-term value information,
 * and an interactive price calculator.
 * 
 * @param content - Configuration for the pricing section including title, description,
 * pricing factors, and long-term value information
 */
const PriceSection: React.FC<PriceSectionProps> = ({ content }) => {
  return <PriceSectionWrapper content={content} />
}

export default React.memo(PriceSection);