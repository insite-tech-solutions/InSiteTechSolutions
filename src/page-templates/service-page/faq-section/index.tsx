/**
 * @fileoverview Client-side entry point for the FAQ section.
 * This file provides a clean API wrapper around the FAQ section implementation,
 * handling prop passing and component memoization for optimal performance.
 */

'use client'
import { memo } from 'react';
import { FAQContent } from '../types'
import FAQSectionWrapper from './faq-section'

/**
 * Props interface for the FAQ section
 * 
 * @interface FAQSectionProps
 * @property {FAQContent} content - Configuration object containing all FAQ section content
 * including title, description, FAQ items, and optional "more" link
 */
interface FAQSectionProps {
  content: FAQContent
}

/**
 * FAQSection component serves as the main entry point for the FAQ section.
 * 
 * This component is a lightweight wrapper that forwards content props to the actual implementation.
 * It's memoized to prevent unnecessary re-renders when parent components change but props remain the same.
 * The section displays frequently asked questions in an accessible, animated accordion format.
 * 
 * @param {FAQSectionProps} props - Component props
 * @param {FAQContent} props.content - Configuration for the FAQ section including 
 * title, description, FAQ items (questions, answers, icons), and optional link to more resources
 * 
 * @returns {JSX.Element} Rendered FAQ section with accordion functionality
 * 
 * @example
 * ```tsx
 * import { FAQSection } from '@/page-templates/service-page/faq-section';
 * import { faqContent } from '@/content/service-pages/web-app-dev';
 * 
 * <FAQSection content={faqContent} />
 * ```
 */
function FAQSection({ content }: FAQSectionProps): JSX.Element {
  return <FAQSectionWrapper content={content} />
}

export default memo(FAQSection)