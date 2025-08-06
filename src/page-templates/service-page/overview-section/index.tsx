/**
 * @fileoverview Service Overview Section Export Module
 * 
 * Clean API wrapper for the service overview section component. Provides:
 * - Simplified import path for consumers
 * - Memoized component for performance optimization
 * - Type-safe props interface
 * - Client-side rendering directive
 * 
 * This follows the module export pattern used throughout the service page template system,
 * where complex components are wrapped in a simple interface for easier consumption.
 * 
 * @example
 * ```tsx
 * import ServiceOverview from '@/page-templates/service-page/overview-section';
 * import { serviceOverviewContent } from '@/content/service-pages/web-dev/overview-content';
 * 
 * <ServiceOverview content={serviceOverviewContent} />
 * ```
 */

'use client'

import { memo } from 'react';
import { ServiceOverviewContent } from '../types'
import ServiceOverviewSection from './service-overview'

/**
 * Props interface for the ServiceOverview component
 * 
 * @interface ServiceOverviewProps
 * @property {ServiceOverviewContent} content - Configuration for the service overview section
 */
interface ServiceOverviewProps {
  content: ServiceOverviewContent
}

/**
 * Service Overview Section Component
 * 
 * A clean wrapper component that provides a simplified API for the service overview section.
 * This component serves as the main export and handles:
 * 
 * Features:
 * - Delegates to ServiceOverviewSection for actual rendering
 * - Memoized to prevent unnecessary re-renders
 * - Client-side rendering for interactive elements
 * - Type-safe props interface
 * 
 * Architecture Pattern:
 * This follows the wrapper pattern where:
 * - index.tsx: Clean API export with memoization
 * - service-overview.tsx: Complex implementation with sub-components
 * - types.ts: Shared type definitions
 * 
 * Performance:
 * - React.memo prevents re-renders when props haven't changed
 * - Props are passed through unchanged to maintain referential equality
 * - Client directive ensures interactive elements work properly in Next.js App Router
 * 
 * @param {ServiceOverviewProps} props - Component props
 * @param {ServiceOverviewContent} props.content - Configuration for the overview section, including markdown text and table of contents items
 * @returns {JSX.Element} Memoized service overview section component
 */
function ServiceOverview({ content }: ServiceOverviewProps): JSX.Element {
  return <ServiceOverviewSection content={content} />;
}

// Export memoized component to prevent unnecessary re-renders
export default memo(ServiceOverview)
