/**
 * @fileoverview Value Proposition Section Export Module
 * 
 * Clean API wrapper for the value proposition section component. Provides:
 * - Simplified import path for consumers
 * - Memoized component for performance optimization
 * - Type-safe props interface
 * - Client-side rendering directive
 * - Layout variant support
 * 
 * This follows the module export pattern used throughout the service page template system,
 * where complex components are wrapped in a simple interface for easier consumption.
 * 
 * @example
 * ```tsx
 * import ValuePropSection from '@/page-templates/service-page/value-prop-section';
 * import { ValuePropContent } from '@/page-templates/service-page/types';
 * 
 * const content: ValuePropContent = {
 *   title: "Value Proposition",
 *   description: "Why choose our service...",
 *   industryTrends: [...],
 *   marketInsights: [...],
 *   callToAction: {...}
 * };
 * 
 * <ValuePropSection content={content} layoutVariant="expanded" />
 * ```
 */

'use client'
import { memo } from 'react';
import { ValuePropContent } from '../types'
import ValuePropSectionWrapper from './value-prop-section'

/**
 * Props interface for the ValuePropSection component
 * 
 * @interface ValuePropSectionProps
 * @property {ValuePropContent} content - Complete value proposition configuration object
 * @property {'default' | 'compact' | 'expanded'} [layoutVariant='default'] - Optional layout variant for different page contexts
 */
interface ValuePropSectionProps {
  content: ValuePropContent
  layoutVariant?: 'default' | 'compact' | 'expanded'
}

/**
 * Value Proposition Section Component
 * 
 * A clean wrapper component that provides a simplified API for the value proposition section.
 * This component serves as the main export and handles:
 * 
 * Features:
 * - Delegates to ValuePropSectionWrapper for actual rendering
 * - Memoized to prevent unnecessary re-renders
 * - Client-side rendering for Framer Motion animations
 * - Default layout variant handling
 * - Type-safe props interface
 * 
 * Architecture Pattern:
 * This follows the wrapper pattern where:
 * - index.tsx: Clean API export with memoization
 * - value-prop-section.tsx: Complex implementation with sub-components
 * - types.ts: Shared type definitions
 * 
 * Performance:
 * - React.memo prevents re-renders when props haven't changed
 * - Props are passed through unchanged to maintain referential equality
 * - Client directive ensures animations work properly in Next.js App Router
 * 
 * @param {ValuePropSectionProps} props - Component props
 * @param {ValuePropContent} props.content - Configuration for the value prop section with all content and settings
 * @param {'default' | 'compact' | 'expanded'} [props.layoutVariant='default'] - Layout variant for different page contexts
 * @returns {JSX.Element} Memoized value proposition section component
 */
function ValuePropSection({ content, layoutVariant = 'default' }: ValuePropSectionProps): JSX.Element {
  return <ValuePropSectionWrapper content={content} layoutVariant={layoutVariant} />
}

// Export memoized component to prevent unnecessary re-renders
export default memo(ValuePropSection)