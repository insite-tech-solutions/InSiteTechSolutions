/**
 * @fileoverview Detailed Process Section Component.
 *
 * This component serves as a wrapper for the `ProcessSection` component, specifically
 * tailored for the Process page. It integrates the detailed content for the development
 * process, providing an in-depth breakdown of each phase.
 *
 * Architecture:
 * - **Component Reusability**: Leverages the generic `ProcessSection` component from the `service-page` template,
 *   promoting code reuse and consistency across different page types.
 * - **Content Centralization**: Retrieves all its display content from `detailedProcessContent`,
 *   ensuring that textual and structural data is managed in a single, external source.
 *
 * Technical Implementation:
 * - Imports `ProcessSection` to render the core process steps.
 * - Imports `detailedProcessContent` to supply the data required by `ProcessSection`.
 * - Contains commented-out code for a button, indicating a potential future or alternative call-to-action.
 */

'use client';

 
import ProcessSection from '@/page-templates/service-page/process-section/process-section';
import { detailedProcessContent } from '@/content/about-pages/process-page/process-page-content';
// import { Button } from '@/components/ui/button';
// import Link from 'next/link';

/**
 * `DetailedProcessSection` Component.
 *
 * This component acts as a container for the `ProcessSection`, displaying a comprehensive
 * breakdown of the development process steps. It is designed to be a key part of the
 * overall Process page, providing in-depth information.
 *
 * @returns {JSX.Element} The JSX element for the detailed process section.
 */
export default function DetailedProcessSection(): JSX.Element {
  return (
    <div>
      {/* Renders the core process section, passing in the detailed content specific to the process page. */}
      <ProcessSection content={detailedProcessContent} />
    </div>
  );
}