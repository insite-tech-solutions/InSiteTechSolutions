/**
 * @fileoverview Homepage FAQ Section Wrapper Component
 *
 * This component serves as a wrapper for the FAQ section on the homepage,
 * delegating rendering to the shared FAQSection component with homepage-specific
 * content. Uses the component delegation pattern for code reusability.
 *
 * Features:
 * - Delegates to shared FAQSection component
 * - Uses homepage-specific FAQ content
 * - Implements memoization for performance
 * - Follows component delegation pattern
 * - Maintains consistent FAQ presentation across site
 *
 * @module HomepageFAQSection
 */

'use client'
import { memo } from 'react';
import FAQSection from '@/page-templates/service-page/faq-section';
import homepageFAQContent from '@/content/home-page/faq-content';

/**
 * HomepageFAQSection Component
 * 
 * A wrapper component that renders the FAQ section on the homepage
 * using the shared FAQSection component with homepage-specific content.
 * 
 * This component follows the delegation pattern by:
 * - Importing the shared FAQSection component
 * - Using homepage-specific FAQ content from content files
 * - Providing a clean interface for the homepage route
 * - Enabling code reuse across different pages
 * 
 * The component is memoized for performance optimization,
 * preventing unnecessary re-renders when parent components update.
 * 
 * @returns {JSX.Element} FAQ section with homepage-specific content
 * 
 * @example
 * ```tsx
 * <HomepageFAQSection />
 * ```
 */
function HomepageFAQSection(): JSX.Element {
  return <FAQSection content={homepageFAQContent} />;
}

export default memo(HomepageFAQSection);
