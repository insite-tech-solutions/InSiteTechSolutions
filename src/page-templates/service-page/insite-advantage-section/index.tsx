/**
 * @fileoverview Client-side entry point for the InSite Advantage section.
 * This file provides a clean API wrapper around the InSite Advantage section implementation,
 * handling prop passing and component memoization for optimal performance.
 */

'use client'
import { memo } from 'react';
import { InSiteAdvantageContent } from '../types'
import InSiteAdvantageSectionWrapper from './insite-advantage-section'

/**
 * Props interface for the InSite Advantage section
 * 
 * @interface InSiteAdvantageSectionProps
 * @property {InSiteAdvantageContent} content - Configuration object containing all section content
 * including title, description, advantages array, and benefits array
 */
interface InSiteAdvantageSectionProps {
  content: InSiteAdvantageContent
}

/**
 * InSiteAdvantageSection component serves as the main entry point for the InSite Advantage section.
 * 
 * This component is a lightweight wrapper that forwards content props to the actual implementation.
 * It's memoized to prevent unnecessary re-renders when parent components change but props remain the same.
 * The section displays company advantages and client benefits in a visually appealing format.
 * 
 * @param {InSiteAdvantageSectionProps} props - Component props
 * @param {InSiteAdvantageContent} props.content - Configuration for the benefits section including 
 * title, description, advantages (with icons), and benefits (displayed in a timeline)
 * 
 * @returns {JSX.Element} Rendered InSite Advantage section
 * 
 * @example
 * ```tsx
 * import { InSiteAdvantageSection } from '@/page-templates/service-page/insite-advantage-section';
 * import { advantageContent } from '@/content/service-pages/web-app-dev';
 * 
 * <InSiteAdvantageSection content={advantageContent} />
 * ```
 */
function InSiteAdvantageSection({ content }: InSiteAdvantageSectionProps): JSX.Element {
  return <InSiteAdvantageSectionWrapper content={content} />;
}

export default memo(InSiteAdvantageSection)