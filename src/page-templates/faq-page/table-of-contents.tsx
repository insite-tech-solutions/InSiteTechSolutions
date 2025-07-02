/**
 * @fileoverview Table of Contents (TOC) component for FAQ page navigation
 * 
 * This component provides a scrollable navigation interface that allows users to quickly
 * jump to different FAQ sections. It features intersection observer functionality to
 * highlight the currently active section and smooth scrolling behavior for enhanced UX.
 * 
 * Features:
 * - Sticky positioning on desktop for persistent navigation
 * - Intersection Observer for automatic active section highlighting
 * - Smooth scrolling to section anchors
 * - Responsive design with hover effects
 * - Accessibility features with proper ARIA labels
 * - Motion animations for enhanced visual feedback
 * 
 * Technical Implementation:
 * - Uses Intersection Observer API to track visible sections
 * - Implements smooth scrolling with `scrollIntoView`
 * - Memoized component for performance optimization
 * - Framer Motion for subtle hover animations
 */

'use client';

import { FAQPageSection } from '@/content/insites-pages/faq-page/sections';
import { useEffect, useState, memo } from 'react';
import { motion } from 'framer-motion';

/**
 * Props interface for the TableOfContents component
 * 
 * @interface TOCProps
 * @property {FAQPageSection[]} sections - Array of FAQ page sections to display in the table of contents
 */
interface TOCProps {
  /** Array of FAQ page sections to display in the table of contents */
  sections: FAQPageSection[];
}

/**
 * TableOfContents component provides navigation for FAQ page sections
 * 
 * This component renders a sticky navigation sidebar that displays links to all
 * FAQ sections. It automatically highlights the currently visible section using
 * Intersection Observer and provides smooth scrolling when users click on links.
 * 
 * Features:
 * - Automatic active section detection and highlighting
 * - Smooth scrolling to section anchors
 * - Sticky positioning for persistent navigation
 * - Hover effects and visual feedback
 * - Accessibility-compliant markup
 * 
 * @param {TOCProps} props - Component props
 * @param {FAQPageSection[]} props.sections - Array of FAQ sections to display
 * @returns {JSX.Element} Rendered table of contents navigation component
 * 
 * @example
 * ```tsx
 * import { FAQPageSection } from '@/content/faq-page/sections';
 * 
 * const sections = [
 *   { id: 'general', content: { title: 'General Questions' } },
 *   { id: 'pricing', content: { title: 'Pricing Information' } }
 * ];
 * 
 * <TableOfContents sections={sections} />
 * ```
 */
const TableOfContents = ({ sections }: TOCProps): JSX.Element => {
  /** Currently active section ID for highlighting */
  const [activeId, setActiveId] = useState<string>('');

  /**
   * Intersection Observer effect for tracking visible sections
   * 
   * Sets up an Intersection Observer to monitor when FAQ sections enter/exit
   * the viewport and updates the active section ID accordingly. This enables
   * automatic highlighting of the current section in the table of contents.
   * 
   * The observer uses custom root margins to trigger highlighting when a section
   * is approximately 40% from the top of the viewport, providing intuitive
   * navigation feedback.
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px' },
    );

    // Get all section elements and observe them
    const targets = sections.map((s) => document.getElementById(s.id)).filter(Boolean) as Element[];
    targets.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount
    return () => {
      targets.forEach((el) => observer.unobserve(el));
    };
  }, [sections]);

  return (
    <section aria-labelledby="faq-toc-title">
      {/* Accessible landmark for screen readers */}
      <h2 id="faq-toc-title" className="sr-only">FAQ Table of Contents</h2>
      
      {/* Navigation container with sticky positioning */}
      <nav
        aria-label="FAQ Page Sections"
        className="w-64 flex-shrink-0 sticky top-28 self-start"
      >
        <ul className="space-y-2">
          {/* Table of Contents Links */}
          {sections.map((section) => (
            <li key={section.id}>
              <motion.a
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(section.id);
                  if (element) {
                    element.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
                className={`block px-3 py-2 rounded-md transition-colors hover:bg-blue-50 hover:text-medium-blue-alt ${
                  activeId === section.id ? 'bg-blue-100 text-medium-blue-alt' : 'text-gray-700'
                }`}
              >
                {section.content.title}
              </motion.a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

// Memoized export for performance optimization
// Prevents unnecessary re-renders when parent components change but props remain the same
export default memo(TableOfContents);