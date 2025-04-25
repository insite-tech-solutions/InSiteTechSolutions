'use client'
import React from 'react'
import { CTAContent } from '../types'
import CTASectionWrapper from './cta-section'

interface CTASectionProps {
  content: CTAContent
}

/**
 * CTA section component displays a call-to-action banner with a button
 * 
 * @param content - Configuration for the CTA section including title, description,
 * button text, button link, and optional background class
 */
const CTASection: React.FC<CTASectionProps> = ({ content }) => {
  return <CTASectionWrapper content={content} />
}

export default React.memo(CTASection);