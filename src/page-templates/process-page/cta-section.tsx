/**
 * @fileoverview Call-to-Action (CTA) Section Component for Process Page.
 *
 * This component acts as a specialized wrapper for the generic `CTASection` component,
 * providing it with content specifically tailored for the Process page. Its primary
 * function is to present a compelling call-to-action to users at the end of the process overview.
 *
 * Architecture:
 * - **Component Reusability**: Leverages the `CTASection` from the `service-page` template,
 *   demonstrating efficient code reuse across different page types.
 * - **Content Centralization**: Retrieves all its display content (title, description, button text/link)
 *   from `processPageCtaContent`, ensuring consistent and easily manageable data.
 * - **Memoization**: Uses `memo` to optimize performance by preventing unnecessary re-renders.
 *
 * Technical Implementation:
 * - Imports `CTAContent` type to ensure type safety for the content object passed to `CTASection`.
 * - Maps properties from `processPageCtaContent` to the `CTAContent` structure required by the generic `CTASection`.
 */

'use client';

import { memo } from 'react';
import { CTAContent } from '@/page-templates/service-page/types';
import CTASection from '@/page-templates/service-page/cta-section';
import { processPageCtaContent } from '@/content/about-pages/process-page/process-page-content';

/**
 * `ProcessPageCTA` Component.
 *
 * This component prepares and passes the process page-specific call-to-action content
 * to the reusable `CTASection` component. It serves as an adapter to integrate
 * custom content into a standardized CTA display.
 *
 * @returns {JSX.Element} The JSX element representing the call-to-action section for the process page.
 */
function ProcessPageCTA(): JSX.Element {
  const content: CTAContent = {
    title: processPageCtaContent.title,
    description: processPageCtaContent.description,
    primaryButtonText: processPageCtaContent.buttonText,
    primaryButtonLink: processPageCtaContent.buttonLink,
  };

  return <CTASection content={content} />;
}

/**
 * Memoized export of the `ProcessPageCTA` component.
 * This prevents the component from re-rendering unless its props change,
 * optimizing performance for the process page.
 */
export default memo(ProcessPageCTA); 