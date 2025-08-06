/**
 * @fileoverview Process Section Export Module
 * 
 * Clean API wrapper for the process section component that visualizes the service process timeline.
 * This module provides:
 * - Simplified import path for consumers
 * - Memoized component for performance optimization
 * - Type-safe props interface
 * - Client-side rendering directive for GSAP animations
 * - Proper semantic HTML structure with section element
 * 
 * This follows the module export pattern used throughout the service page template system,
 * where complex implementation details (animations, orientation handling, scroll position
 * management) are encapsulated behind a simple interface for easier consumption.
 * 
 * @example
 * ```tsx
 * import ProcessSection from '@/page-templates/service-page/process-section';
 * import { ProcessContent } from '@/page-templates/service-page/types';
 * 
 * const content: ProcessContent = {
 *   title: "Our Process",
 *   description: "How we approach your project...",
 *   steps: [
 *     { title: "Discovery", description: "...", items: [...], timeline: "Week 1", icon: "Search" },
 *     // Additional steps...
 *   ],
 *   note: "We maintain communication throughout the entire process."
 * };
 * 
 * <ProcessSection content={content} />
 * ```
 */

'use client'
import { memo } from 'react';
import { ProcessContent } from '../types'
import ProcessSectionWrapper from './process-section'

/**
 * Props interface for the ProcessSection component
 * 
 * @interface ProcessSectionProps
 * @property {ProcessContent} content - Complete process configuration with steps, timeline, and descriptions
 */
interface ProcessSectionProps {
  content: ProcessContent
}

/**
 * ProcessSection Component
 * 
 * A clean wrapper component that provides a simplified API for the process timeline section.
 * This component serves as the main export and handles:
 * 
 * Features:
 * - Delegates to ProcessSectionWrapper for animation and orientation handling
 * - Memoized to prevent unnecessary re-renders
 * - Client-side rendering for GSAP animations
 * - Proper semantic HTML with section element
 * - Type-safe props interface
 * 
 * Architecture Pattern:
 * This follows the wrapper pattern where:
 * - index.tsx: Clean API export with memoization and semantic HTML
 * - process-section.tsx: Complex implementation with GSAP animations and orientation handling
 * - tracing-beam.tsx: Visual beam component for scroll visualization
 * - types.ts: Shared type definitions
 * 
 * Performance:
 * - React.memo prevents re-renders when props haven't changed
 * - Props are passed through unchanged to maintain referential equality
 * - Client directive ensures animations work properly in Next.js App Router
 * 
 * @param {ProcessSectionProps} props - Component props
 * @param {ProcessContent} props.content - Configuration for the process section with all steps and content
 * @returns {JSX.Element} Memoized process section component with semantic HTML structure
 */
function ProcessSection({ content }: ProcessSectionProps): JSX.Element {
  return (
    <section className="w-full">
      <ProcessSectionWrapper content={content} />
    </section>
  )
}

// Export memoized component to prevent unnecessary re-renders
export default memo(ProcessSection)