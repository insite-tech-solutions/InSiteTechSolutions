/**
 * @fileoverview Client-side entry point for the CTA section.
 * This file provides a clean API wrapper around the CTA section implementation,
 * handling prop passing and component memoization for optimal performance.
 */

'use client'
import { memo } from 'react'
import { CTAContent } from '../types'
import CTASectionWrapper from './cta-section'

/**
 * Props interface for the CTA section
 * 
 * @interface CTASectionProps
 * @property {CTAContent} content - Configuration object containing all CTA section content
 * including title, description, button texts, links, and optional background class
 */
interface CTASectionProps {
  content: CTAContent
}

/**
 * CTA section component displays a call-to-action banner with a button
 * 
 * This component is a lightweight wrapper that forwards content props to the actual implementation.
 * It's memoized to prevent unnecessary re-renders when parent components change but props remain the same.
 * The section displays a visually appealing call-to-action with a gradient background and animated entrance.
 * 
 * @param {CTASectionProps} props - Component props
 * @param {CTAContent} props.content - Configuration for the CTA section including title, description,
 * button texts, links, and optional background class
 * 
 * @returns {JSX.Element} Rendered CTA section with gradient background and buttons
 * 
 * @example
 * ```tsx
 * import { CTASection } from '@/page-templates/service-page/cta-section';
 * import { ctaContent } from '@/content/service-pages/web-app-dev';
 * 
 * <CTASection content={ctaContent} />
 * ```
 */
// Main wrapper for CTA Section
function CTASection({ content }: CTASectionProps): JSX.Element {
  return <CTASectionWrapper content={content} />
}

export default memo(CTASection)