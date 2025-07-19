/**
 * @fileoverview Call-to-Action (CTA) Section Component for Previous Works Page
 *
 * This component acts as a specialized wrapper for the generic `CTASection` component,
 * providing it with content specifically tailored for the Previous Works page. Its primary
 * function is to present a compelling call-to-action to users after they've explored
 * the portfolio and project showcases.
 *
 * Key Features:
 * - Reusable CTA component integration
 * - Content centralization with type safety
 * - Performance optimization with memoization
 * - Consistent styling and layout
 * - Seamless integration with Previous Works page flow
 *
 * Architecture:
 * - **Component Reusability**: Leverages the `CTASection` from the `service-page` template,
 *   demonstrating efficient code reuse across different page types.
 * - **Content Centralization**: Retrieves all its display content (title, description, button text/link)
 *   from `previousWorksCtaContent`, ensuring consistent and easily manageable data.
 * - **Memoization**: Uses `memo` to optimize performance by preventing unnecessary re-renders.
 *
 * Technical Implementation:
 * - Imports `CTAContent` type to ensure type safety for the content object passed to `CTASection`.
 * - Maps properties from `previousWorksCtaContent` to the `CTAContent` structure required by the generic `CTASection`.
 * - Uses React.memo for performance optimization
 * 
 * @component PreviousWorksPageCTA
 * @returns {JSX.Element} The JSX element representing the call-to-action section for the Previous Works page
 */

'use client';

import { memo } from 'react';
import { CTAContent } from '@/page-templates/service-page/types';
import CTASection from '@/page-templates/service-page/cta-section';
import previousWorksCtaContent from '@/content/about-pages/previous-works-page/cta-content';

/**
 * PreviousWorksPageCTA Component
 *
 * This component prepares and passes the Previous Works page-specific call-to-action content
 * to the reusable `CTASection` component. It serves as an adapter to integrate
 * custom content into a standardized CTA display.
 *
 * Features:
 * - Content mapping from Previous Works specific data
 * - Type-safe content structure
 * - Integration with generic CTA component
 * - Consistent button styling and behavior
 * 
 * @component
 * @returns {JSX.Element} The JSX element representing the call-to-action section for the Previous Works page
 */
function PreviousWorksPageCTA(): JSX.Element {
  const content: CTAContent = {
    title: previousWorksCtaContent.title,
    description: previousWorksCtaContent.description,
    primaryButtonText: previousWorksCtaContent.buttonText,
    primaryButtonLink: previousWorksCtaContent.buttonLink,
  };

  return <CTASection content={content} />;
}

/**
 * Memoized export of the `PreviousWorksPageCTA` component.
 * This prevents the component from re-rendering unless its props change,
 * optimizing performance for the Previous Works page.
 */
export default memo(PreviousWorksPageCTA); 