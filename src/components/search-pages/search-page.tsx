/**
 * @fileoverview Search Page Component
 *
 * This component assembles the complete search page following the standard
 * page composition pattern used throughout the application. Combines the site header,
 * footer, and search-specific template to create the final page structure.
 * 
 * Architecture:
 * - Standard page composition pattern (Header + Template + Footer)
 * - Client-side rendering for interactive elements
 * - Template-based content organization for maintainability
 * - Consistent layout structure across all pages
 * - Separation of concerns between layout and content
 */
'use client';

import Header from '@/components/site-header/header';
import Footer from '@/components/site-footer/footer';
import SearchPageTemplate from '@/page-templates/search-page';

/**
 * SearchPage Component
 * 
 * Root page component that assembles the complete search page by combining
 * the standard site layout components with the search-specific template.
 * Follows the established page composition pattern for consistency.
 * 
 * Features:
 * - Standard three-part page structure (Header, Content, Footer)
 * - Client-side rendering for interactive page elements
 * - Template pattern for content organization
 * - Consistent layout architecture across the application
 * - Clean separation between layout and content concerns
 * 
 * @returns {JSX.Element} The complete assembled search page
 * 
 * @example
 * ```tsx
 * // Usage in Next.js app router
 * import SearchPage from '@/components/search-pages/search-page'
 * 
 * // In app/search/page.tsx
 * export default function Page() {
 *   return <SearchPage />
 * }
 * ```
 */
export default function SearchPage(): JSX.Element {
  return (
    <div>
      {/* Site Header - Navigation and branding */}
      <Header />
      
      {/* Search Page Content - Template with all search sections */}
      <SearchPageTemplate />
      
      {/* Site Footer - Links and company information */}
      <Footer />
    </div>
  );
} 