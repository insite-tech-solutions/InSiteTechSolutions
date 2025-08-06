/**
 * @fileoverview Mobile Table of Contents (TOC) component for FAQ page navigation
 * 
 * This component provides a collapsible dropdown navigation for mobile devices that allows
 * users to quickly jump to different FAQ sections. Features smooth animations, intersection
 * observer for active section highlighting, and accessible markup.
 * 
 * Features:
 * - Collapsible dropdown interface for mobile UX
 * - Intersection Observer for automatic active section highlighting
 * - Smooth animations with Framer Motion
 * - Accessible button and navigation markup
 * - Auto-close dropdown after section selection
 */

'use client';

import { FAQPageSection } from '@/content/insites-pages/faq-page/sections';
import { useEffect, useState, memo } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * Props interface for the MobileTOC component
 * 
 * @interface MobileTOCProps
 * @property {FAQPageSection[]} sections - Array of FAQ page sections to display
 */
interface MobileTOCProps {
  /** Array of FAQ page sections to display in the mobile table of contents */
  sections: FAQPageSection[];
}

/**
 * MobileTOC component provides collapsible navigation for FAQ sections on mobile devices
 * 
 * Renders a dropdown-style navigation that expands/collapses to show FAQ section links.
 * Automatically highlights the currently visible section and closes the dropdown when
 * a section is selected for optimal mobile UX.
 * 
 * @param {MobileTOCProps} props - Component props
 * @param {FAQPageSection[]} props.sections - Array of FAQ sections to display
 * @returns {JSX.Element} Rendered mobile table of contents component
 */
function MobileTOC({ sections }: MobileTOCProps): JSX.Element {
  /** Currently active section ID for highlighting */
  const [activeId, setActiveId] = useState<string>('');
  /** Whether the dropdown is currently expanded */
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Intersection Observer effect for tracking visible sections
   * 
   * Monitors when FAQ sections enter/exit the viewport and updates the active
   * section ID for highlighting in the mobile navigation.
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

    const targets = sections.map((s) => document.getElementById(s.id)).filter(Boolean) as Element[];
    targets.forEach((el) => observer.observe(el));

    return () => {
      targets.forEach((el) => observer.unobserve(el));
    };
  }, [sections]);

  return (
    <div className="mb-8">
      {/* Dropdown toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
        aria-expanded={isOpen}
        aria-controls="mobile-toc-list"
      >
        <span className="font-medium text-gray-900">
          Jump to section
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-5 w-5 text-gray-500" />
        </motion.div>
      </button>

      {/* Collapsible navigation content */}
      <section aria-labelledby="mobile-toc-title" id="mobile-toc-list">
        <h2 id="mobile-toc-title" className="sr-only">Mobile Table of Contents</h2>
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden"
        >
          <div className="mt-2 bg-white rounded-lg border border-gray-200 shadow-sm">
            <ul className="py-2">
              {/* Mobile TOC Links */}
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      // Small delay to ensure dropdown closes before scrolling
                      setTimeout(() => {
                        const element = document.getElementById(section.id);
                        if (element) {
                          element.scrollIntoView({ 
                            behavior: 'smooth',
                            block: 'start'
                          });
                        }
                      }, 100);
                    }}
                    className={`block px-4 py-2 text-sm transition-colors hover:bg-blue-50 hover:text-medium-blue-alt ${
                      activeId === section.id ? 'bg-blue-100 text-medium-blue-alt' : 'text-gray-700'
                    }`}
                  >
                    {section.content.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

// Memoized export for performance optimization
export default memo(MobileTOC);