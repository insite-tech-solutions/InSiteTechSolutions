/**
 * @fileoverview Documents Section Component
 * 
 * This component renders a comprehensive legal documents section for privacy policy and terms of service.
 * It provides an interactive accordion-style interface with table of contents navigation, allowing users
 * to view and navigate through legal documents with smooth animations and responsive design.
 * 
 * Features:
 * - Accordion-style document expansion
 * - Table of contents with smooth scrolling
 * - Responsive sidebar navigation
 * - Markdown rendering with custom styling
 * - Accessibility features (ARIA labels, keyboard navigation)
 * - Sticky positioning for navigation elements
 * 
 */

'use client';

import { useState, useEffect, useRef, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, FileText, Shield, ChevronsRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { LegalDocument, LegalDocuments } from '@/lib/markdown-loader';
import { cn } from '@/lib/utils';

/**
 * Props interface for the main DocumentsSection component
 */
interface DocumentsSectionProps {
  /** Collection of legal documents to display */
  documents: LegalDocuments;
}

/**
 * Interface representing a document heading for table of contents
 */
interface Heading {
  /** Heading level (2 for h2, 3 for h3, etc.) */
  level: number;
  /** Display text of the heading */
  text: string;
  /** Unique identifier for the heading anchor */
  id: string;
}

/**
 * Custom link renderer component for ReactMarkdown
 * Handles internal links, external links, and anchor links with appropriate behavior
 * 
 * @param href - The URL to link to
 * @param children - The link text/content
 * @returns Rendered link component
 */
const CustomLink = ({ href, children }: { href?: string; children?: React.ReactNode }) => {
  if (!href) return <>{children}</>;
  if (href.startsWith('/')) return <Link href={href}>{children}</Link>;
  if (href.startsWith('#')) return <a href={href}>{children}</a>;
  return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
};

/**
 * Props interface for the DocumentTableOfContents component
 */
interface InternalTocProps {
  /** Array of headings to display in the table of contents */
  headings: Heading[];
}

/**
 * Table of Contents Sidebar Component
 * 
 * Renders a sticky sidebar with navigation links to document headings.
 * Provides smooth scrolling to sections and visual feedback for current position.
 * 
 * @param headings - Array of document headings to display in the TOC
 * @returns Rendered table of contents sidebar
 */
const DocumentTableOfContents = memo(function DocumentTableOfContents({ headings }: InternalTocProps): JSX.Element {
  return (
    <aside className="hidden lg:block w-64 flex-shrink-0 pl-5 pr-4 py-6 border-l border-gray-200 self-start sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto">
      <h3 className="text-sm font-semibold text-gray-800 mt-4 mb-4 uppercase tracking-wide">In&nbsp;this&nbsp;document</h3>
      <p className="text-xs text-gray-500 mb-3 italic">Scroll to see more</p>
      <nav>
        <ul className="space-y-2">
          {headings.map(heading => (
            <li key={heading.id} className={cn({ 'pl-3': heading.level === 3 })}>
              <a
                href={`#${heading.id}`}
                className="block text-sm lg:text-[15px] text-gray-700 hover:text-blue-600 transition-colors py-1.5 px-0.5 rounded"
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
});

/**
 * Props interface for the Document component
 */
interface DocumentProps {
  /** The legal document to display */
  document: LegalDocument;
  /** Whether this document is currently expanded */
  isOpen: boolean;
  /** Callback function to toggle document expansion */
  onToggle: () => void;
}

/**
 * Individual Document Accordion Component
 * 
 * Renders a single legal document in an accordion-style interface with:
 * - Expandable/collapsible content
 * - Document metadata (version, last updated)
 * - Markdown content rendering
 * - Table of contents sidebar
 * - Smooth animations and scrolling
 * 
 * @param document - The legal document to display
 * @param isOpen - Whether the document is currently expanded
 * @param onToggle - Function to toggle document expansion
 * @returns Rendered document accordion component
 */
const Document = memo(function Document({ document, isOpen, onToggle }: DocumentProps): JSX.Element {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Extract headings from document content for table of contents
  useEffect(() => {
    const foundHeadings: Heading[] = [];
    const lines = document.content.split('\n');
    lines.forEach(line => {
      const match = line.match(/^(##|###)\s(.+)/);
      if (match) {
        const level = match[1].length;
        const text = match[2];
        const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
        foundHeadings.push({ level, text, id });
      }
    });
    setHeadings(foundHeadings);
  }, [document.content]);

  // Scroll into view when this document is opened
  useEffect(() => {
    if (isOpen && containerRef.current) {
      // Wait for animation (300ms) to finish before scrolling
      const timer = setTimeout(() => {
        containerRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 310);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <div id={document.slug} ref={containerRef} className="mb-8 scroll-mt-32">
      <div
        className="flex justify-between items-center p-6 bg-white border border-gray-200 rounded-lg cursor-pointer shadow-sm hover:bg-gray-50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center">
          {document.slug === 'privacy-policy' ? (
            <Shield className="h-8 w-8 text-blue-500 mr-4 flex-shrink-0" />
          ) : (
            <FileText className="h-8 w-8 text-green-500 mr-4 flex-shrink-0" />
          )}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{document.title}</h2>
            <p className="text-sm text-gray-500">
              Version {document.version} | Last Updated: {document.lastUpdated}
            </p>
          </div>
        </div>
        <ChevronDown className={cn('h-6 w-6 text-gray-500 transition-transform flex-shrink-0', { 'transform rotate-180': isOpen })} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="mt-[-1px] bg-white border-x border-b border-gray-200 rounded-b-lg overflow-visible"
          >
            <div className="lg:flex">
              <div className="flex-grow px-8 py-6" ref={contentRef}>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <ReactMarkdown
                    components={{
                      h2: ({ ...props }) => {
                        const text = props.children?.toString() || '';
                        const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
                        return <h2 id={id} {...props} className="scroll-mt-32 text-gray-900 text-2xl font-semibold mt-8 mb-4" />;
                      },
                      h3: ({ ...props }) => {
                        const text = props.children?.toString() || '';
                        const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
                        return <h3 id={id} {...props} className="scroll-mt-32 text-gray-800 text-xl font-medium mt-6 mb-3" />;
                      },
                      a: CustomLink,
                      p: (props) => <p {...props} className="text-gray-700 leading-relaxed mb-4" />,
                      strong: (props) => <strong {...props} className="text-gray-900 font-semibold" />,
                      ul: (props) => <ul {...props} className="list-disc list-inside text-gray-700 mb-4 space-y-1" />,
                      ol: (props) => <ol {...props} className="list-decimal list-inside text-gray-700 mb-4 space-y-1" />,
                      li: (props) => <li {...props} className="text-gray-700" />,
                      table: (props) => <div className="overflow-x-auto mb-4"><table {...props} className="min-w-full border border-gray-300" /></div>,
                      th: (props) => <th {...props} className="border border-gray-300 px-4 py-2 bg-gray-50 font-semibold text-left" />,
                      td: (props) => <td {...props} className="border border-gray-300 px-4 py-2" />,
                    }}
                  >
                    {document.content}
                  </ReactMarkdown>
                </div>
              </div>
              <DocumentTableOfContents headings={headings} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

/**
 * Main Documents Section Component
 * 
 * Renders a comprehensive legal documents section with:
 * - Sidebar navigation for document selection
 * - Accordion-style document display
 * - Responsive design for mobile and desktop
 * - Accessibility features and ARIA landmarks
 * 
 * The component manages the state of which document is currently expanded
 * and provides smooth interactions for document navigation.
 * 
 * @param documents - Collection of legal documents to display
 * @returns Rendered documents section component
 */
export default function DocumentsSection({ documents }: DocumentsSectionProps): JSX.Element {
  const [openSection, setOpenSection] = useState<string | null>(null);

  /**
   * Handles toggling document expansion
   * @param slug - The document slug to toggle
   */
  const handleToggle = (slug: string) => {
    setOpenSection(prev => (prev === slug ? null : slug));
  };

  return (
    <section aria-labelledby="documents-section-title">
      {/* Accessible landmark for section */}
      <h2 id="documents-section-title" className="sr-only">Documents</h2>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="lg:flex lg:space-x-4">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block w-48 self-start sticky top-20">
              <h3 className="text-md font-semibold uppercase text-gray-500 tracking-wider mb-4">Documents</h3>
              <nav>
                <ul className="space-y-3">
                  {Object.values(documents).map(doc => (
                    <li key={doc.slug}>
                      <a
                        href={`#${doc.slug}`}
                        className={cn(
                          'flex items-center text-base text-gray-700 hover:text-blue-600 transition-all duration-200 py-2',
                          { 'font-semibold text-blue-600': openSection === doc.slug }
                        )}
                      >
                        <ChevronsRight className={cn('h-4 w-4 mr-3 transition-opacity', openSection === doc.slug ? 'opacity-100' : 'opacity-0')} />
                        {doc.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
            {/* Document Detail Panels */}
            <main className="flex-grow">
              {Object.values(documents).map(doc => (
                <Document
                  key={doc.slug}
                  document={doc}
                  isOpen={openSection === doc.slug}
                  onToggle={() => handleToggle(doc.slug)}
                />
              ))}
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}