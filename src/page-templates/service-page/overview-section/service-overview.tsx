/**
 * @fileoverview Service Overview Section Component
 * 
 * A responsive component that displays service information with:
 * - Markdown-rendered main content
 * - Horizontal Table of Contents (TOC) navigation with smooth scrolling
 * - Call-to-action section for user engagement
 * 
 * Features:
 * - Dynamic content rendering using `react-markdown`
 * - Smooth scroll navigation with custom offset for fixed headers
 * - Responsive layout for optimal viewing on various devices
 * - Accessible navigation with ARIA labels and keyboard support
 * - Integrated call-to-action with gradient styling and button
 * - Semantic HTML structure for clear content organization
 * 
 * Technical Implementation:
 * - `useCallback` for memoized event handlers to prevent unnecessary re-renders
 * - `document.querySelector` for dynamic element targeting based on anchor IDs
 * - `window.scrollTo` with `behavior: 'smooth'` for smooth scrolling
 * - Custom `headerOffset` for accurate scroll positioning below fixed headers
 * - Conditional rendering for content and TOC based on data availability
 * - Custom `p` component in `ReactMarkdown` for consistent paragraph styling
 */

import { useCallback, MouseEvent } from 'react';
import ReactMarkdown from 'react-markdown';
import { ServiceOverviewContent, TOCItem } from '../types';
import TailwindButton from '@/components/reusable-components/tailwind-button';
import { HEADER_HEIGHT } from '@/lib/constants';

/**
 * Props interface for the ServiceOverviewSection component
 */
interface ServiceOverviewSectionProps {
  /** Content configuration object for the service overview, including markdown text and TOC items */
  content: ServiceOverviewContent;
}

/**
 * ServiceOverviewSection Component
 * 
 * Renders the main service overview section, featuring a markdown-rendered content area,
 * a call-to-action, and an interactive Table of Contents for smooth internal navigation.
 * This component handles the core display logic for service overviews.
 * 
 * @param {ServiceOverviewSectionProps} props - Component props
 * @param {ServiceOverviewContent} props.content - The content to display in the overview section
 * @returns {JSX.Element | null} The rendered service overview section or `null` if no content is provided
 * 
 * @example
 * ```tsx
 * // Usage in a service page template
 * import ServiceOverviewSection from './service-overview';
 * import { serviceOverviewContent } from '@/content/service-pages/web-dev/overview-content';
 * 
 * export default function WebDevServicePage() {
 *   return (
 *     <ServiceOverviewSection content={serviceOverviewContent} />
 *   );
 * }
 * ```
 */
export default function ServiceOverviewSection({ content }: ServiceOverviewSectionProps): JSX.Element | null {
  /**
   * Event handler for Table of Contents (TOC) link clicks.
   * 
   * Prevents default anchor link behavior and implements smooth scrolling to the target element.
   * Adjusts scroll position to account for a fixed header, ensuring the target element
   * is fully visible below the header.
   * 
   * @param {MouseEvent<HTMLAnchorElement>} e - The click event object from the anchor element
   * @param {string} anchor - The ID of the target element to scroll to (e.g., "#section-id")
   */
  const handleTOCClick = useCallback((e: MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    const selector = anchor.startsWith('#') ? anchor : `#${anchor}`;
    const element = document.querySelector(selector);
    
    if (element) {
      const headerOffset = HEADER_HEIGHT - 24; // Adjust based on the actual fixed header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  // Return null if no content is provided to prevent rendering an empty section
  if (!content) {
    return null;
  }

  const { markdownText, tocItems } = content;

  return (
    <section aria-labelledby="service-overview-title" className="pt-10 pb-2 overflow-x-hidden">
      {/* Hidden heading for screen readers - provides accessible section context */}
      <h2 id="service-overview-title" className="sr-only">Service Overview</h2>
      <div className="container mx-auto">
        {/* Visible Section Title - For general overview context */}
        <h2 className="text-3xl md:text-4xl font-bold pb-8 text-center">Service Overview</h2>
        <div className="max-w-7xl mx-auto px-2">
          {/* Main Content Area - Rendered from Markdown text */}
          {markdownText && (
            <div className="prose lg:prose-xl mb-6">
              <ReactMarkdown
                components={{
                  // Custom renderer for paragraphs to ensure consistent margin
                  p: ({...props}) => <p className="mb-4" {...props} />
                }}
              >
                {markdownText}
              </ReactMarkdown>
            </div>
          )}
          
          {/* Call-to-Action Section - Engagement prompt with contact button */}
          <div className="bg-gradient-to-br from-light-blue to-blue-800 border border-light-blue text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 max-w-2xl mx-auto">
            <div className="text-center text-xl mb-4">
              <strong>
                Have questions? Reach out today for a free initial consultation.
              </strong>
            </div>
            <div className="flex justify-center">
              <TailwindButton
                href="/contact"
                className="bg-gray-50 rounded-lg font-semibold shadow-md transition-all duration-200"
              >
                Contact Us
              </TailwindButton>
            </div>
          </div>

          {/* Table of Contents (TOC) Navigation - Conditional rendering */}
          {tocItems?.length > 0 && (
            <div className="mt-8 border-t border-gray-300 pt-4">
              <p className="text-center text-gray-600 mb-4">
                Keep scrolling to find out more, or use this table of contents to jump to specific sections.
              </p>
              <nav 
                className="flex flex-col items-center gap-2 md:flex-row md:flex-wrap md:justify-center md:gap-4 md:gap-6"
                aria-label="Table of contents"
              >
                {tocItems.map((item: TOCItem) => (
                  <a
                    key={item.anchor}
                    href={item.anchor.startsWith('#') ? item.anchor : `#${item.anchor}`}
                    onClick={(e) => handleTOCClick(e, item.anchor)}
                    className="inline-flex items-center px-3 py-1.5 text-sm md:px-4 md:py-2 font-medium text-gray-700 border border-medium-blue rounded-full hover:bg-blue-50 hover:text-medium-blue-alt hover:border-mild-blue-alt transition-all duration-200"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
              <div className="mt-6 border-b border-gray-300"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
