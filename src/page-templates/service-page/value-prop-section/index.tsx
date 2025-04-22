'use client'
import React from 'react'
import { ValuePropContent } from '../types'
import ValuePropSectionWrapper from './value-prop-section'

interface ValuePropSectionProps {
  content: ValuePropContent
  layoutVariant?: 'default' | 'compact' | 'expanded'
}

/**
 * ValuePropSection component displays the value proposition with industry trends and market insights.
 * 
 * @param content - Configuration for the value prop section
 * @param layoutVariant - Optional layout variant (default, compact, expanded)
 */
const ValuePropSection: React.FC<ValuePropSectionProps> = ({ content, layoutVariant = 'default' }) => {
  return <ValuePropSectionWrapper content={content} layoutVariant={layoutVariant} />
}

export default React.memo(ValuePropSection);