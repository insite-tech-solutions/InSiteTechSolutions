/**
 * @fileoverview Hero Section component entry point
 * 
 * This module serves as the entry point for the Hero Section component used on service pages.
 * It provides a client-side wrapper that forwards props to the implementation component.
 */

'use client'

import { memo } from 'react';
import { HeroSectionContent } from '../types'
import HeroSectionWrapper from './hero-section'

/**
 * Props interface for the HeroSection component
 * 
 * @interface HeroSectionProps
 * @property {HeroSectionContent} content - Configuration object for the hero section
 */
interface HeroSectionProps {
  content: HeroSectionContent
}

/**
 * Hero Section component for service pages
 * 
 * @component
 * @param {HeroSectionProps} props - Component props
 * @param {HeroSectionContent} props.content - Configuration for the hero section
 * 
 * @example
 * ```tsx
 * import { HeroSection } from '@/page-templates/service-page/hero-section';
 * import { heroContent } from '@/content/service-pages/my-service/hero-content';
 * 
 * // In your page component:
 * <HeroSection content={heroContent} />
 * ```
 * 
 * @returns {JSX.Element} The rendered hero section component
 */
function HeroSection({ content }: HeroSectionProps): JSX.Element {
  return <HeroSectionWrapper content={content} />;
}

export default memo(HeroSection)