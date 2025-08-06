/**
 * @fileoverview Pricing Section Export Module
 * 
 * This module serves as the clean API wrapper for the pricing section component,
 * following the established pattern for service page section exports. It provides
 * a memoized component that integrates with the service page template system.
 * 
 * Features:
 * - Client-side rendering directive for animations
 * - Memoized export for performance optimization
 * - Type-safe props interface with PricingContent
 * - Clean delegation to implementation component
 * 
 * This component renders pricing factors, calculator integration, and long-term
 * value propositions for service offerings.
 */

'use client'
import { memo } from 'react';
import { PricingContent } from '../types'
import PriceSectionWrapper from './pricing-section'

/**
 * Props interface for the PriceSection component
 * 
 * @interface PriceSectionProps
 * @property {PricingContent} content - Complete pricing configuration with factors and value proposition
 */
interface PriceSectionProps {
  content: PricingContent
}

/**
 * PriceSection Component
 * 
 * A clean wrapper component that provides a simplified API for the pricing section.
 * This component serves as the main export and handles:
 * 
 * - Delegation to PriceSectionWrapper for implementation details
 * - Memoization for preventing unnecessary re-renders
 * - Client-side rendering for Framer Motion animations
 * - Type-safe props handling
 * 
 * The pricing section displays cost factors, interactive calculator, and
 * long-term value proposition for the service.
 * 
 * @param {PriceSectionProps} props - Component props
 * @param {PricingContent} props.content - Configuration for the pricing section
 * @returns {JSX.Element} Memoized pricing section component
 */
function PriceSection({ content }: PriceSectionProps): JSX.Element {
  return <PriceSectionWrapper content={content} />;
}

// Export memoized component to prevent unnecessary re-renders
export default memo(PriceSection)