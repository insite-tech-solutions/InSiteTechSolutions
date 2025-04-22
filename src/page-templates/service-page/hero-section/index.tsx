'use client'

import React from 'react'
import { HeroSectionContent } from '../types'
import HeroSectionWrapper from './hero-section'

interface HeroSectionProps {
  content: HeroSectionContent
}

/**
 * HeroSection component displays the main hero banner with customizable
 * background, content, and decorative elements.
 * 
 * @param content - Configuration for the hero section including title, subtitle,
 * description, image, CTA, and decorative elements
 */
const HeroSection: React.FC<HeroSectionProps> = ({ content }) => {
  return (
    <HeroSectionWrapper content={content} />
  )
}

export default React.memo(HeroSection);