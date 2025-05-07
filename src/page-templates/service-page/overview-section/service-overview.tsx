/**
 * Service Overview Section Component
 * 
 * A responsive component that displays service information with:
 * - Markdown-rendered main content
 * - Horizontal Table of Contents (TOC) navigation
 * - Call-to-action section
 * 
 * Features:
 * - Smooth scroll navigation
 * - Responsive layout
 * - Accessible navigation
 * - Markdown content support
 * 
 * @module ServiceOverviewSection
 */

import React, { useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import { ServiceOverviewContent, TOCItem } from '../types';
import TailwindButton from '@/components/reusable-components/tailwind-button';

interface ServiceOverviewSectionProps {
  content: ServiceOverviewContent;
}

/**
 * ServiceOverviewSection Component
 * 
 * @param {Object} props - Component props
 * @param {ServiceOverviewContent} props.content - The content to display in the overview section
 * @returns {React.ReactElement | null} The service overview section or null if no content
 */
const ServiceOverviewSection: React.FC<ServiceOverviewSectionProps> = ({ content }) => {
  if (!content) {
    return null;
  }

  const { markdownText, tocItems } = content;

  /**
   * Handles TOC navigation with smooth scrolling
   * - Prevents default anchor behavior
   * - Calculates correct scroll position accounting for header
   * - Smoothly scrolls to target element
   * 
   * @param {React.MouseEvent<HTMLAnchorElement>} e - Click event
   * @param {string} anchor - Target anchor ID
   */
  const handleTOCClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault();
    const selector = anchor.startsWith('#') ? anchor : `#${anchor}`;
    const element = document.querySelector(selector);
    
    if (element) {
      const headerOffset = 80; // Adjust based on header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  /**
   * Renders the Table of Contents navigation
   * 
   * @returns {React.ReactElement | null} TOC navigation or null if no items
   */
  const renderTOC = () => {
    if (!tocItems?.length) return null;

    return (
      <div className="mt-8 border-t border-gray-300 pt-4">
        <p className="text-center text-gray-600 mb-4">
          Keep scrolling to find out more, or use this table of contents to jump to specific sections.
        </p>
        <nav 
          className="flex flex-col items-center gap-2 md:flex-row md:flex-wrap md:justify-center md:gap-4 md:gap-6"
          aria-label="Table of contents"
        >
          {tocItems.map((item: TOCItem, index: number) => (
            <a
              key={index}
              href={item.anchor.startsWith('#') ? item.anchor : `#${item.anchor}`}
              onClick={(e) => handleTOCClick(e, item.anchor)}
              className="inline-flex items-center px-3 py-1.5 text-sm md:px-4 md:py-2 font-medium text-gray-700 border border-medium-blue rounded-full hover:bg-blue-50 hover:text-blue-600 hover:border-blue-500 transition-all duration-200"
            >
              {item.title}
            </a>
          ))}
        </nav>
        <div className="mt-6 border-b border-gray-300"></div>
      </div>
    );
  };

  /**
   * Renders the Call-to-Action section
   * 
   * @returns {React.ReactElement} CTA section
   */
  const renderCTA = () => (
    <div className="bg-gradient-to-br from-medium-blue to-blue-800 border border-medium-blue text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 max-w-2xl mx-auto">
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
  );

  return (
    <section className="pt-10 pb-2 overflow-x-hidden">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold pb-8 text-center text-gray-900">Service Overview</h2>
        <div className="max-w-7xl mx-auto px-2">
          {/* Main Content from Markdown */}
          {markdownText && (
            <div className="prose lg:prose-xl mb-6">
              <ReactMarkdown
                components={{
                  p: ({node, ...props}) => <p className="mb-4" {...props} />
                }}
              >
                {markdownText}
              </ReactMarkdown>
            </div>
          )}
          
          {renderCTA()}
          {renderTOC()}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverviewSection;
