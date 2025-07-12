/**
 * @fileoverview About Us Page Component
 *
 * This component assembles the complete About Us page following the standard
 * page composition pattern used throughout the application. Combines the site header,
 * footer, and About Us-specific template to create the final page structure.
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
import AboutUsPageTemplate from '@/page-templates/about-page';

/**
 * AboutUsPage Component
 * 
 * Root page component that assembles the complete About Us page by combining
 * the standard site layout components with the About Us-specific template.
 * Follows the established page composition pattern for consistency.
 * 
 * Features:
 * - Standard three-part page structure (Header, Content, Footer)
 * - Client-side rendering for interactive page elements
 * - Template pattern for content organization
 * - Consistent layout architecture across the application
 * - Clean separation between layout and content concerns
 * 
 * @returns {JSX.Element} The complete assembled About Us page
 * 
 * @example
 * ```tsx
 * // Usage in Next.js app router
 * import AboutUsPage from '@/components/about-pages/about-us-page'
 * 
 * // In app/about/about us/page.tsx
 * export default function Page() {
 *   return <AboutUsPage />
 * }
 * ```
 */
export default function AboutUsPage(): JSX.Element {
  return (
    <div>
      {/* Site Header - Navigation and branding */}
      <Header />
      
      {/* About Us Page Content - Template with all About Us sections */}
      <AboutUsPageTemplate />
      
      {/* Site Footer - Links and company information */}
      <Footer />
    </div>
  );
}
