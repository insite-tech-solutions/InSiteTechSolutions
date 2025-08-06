/**
 * @fileoverview Contact Page Component
 *
 * This component assembles the complete contact page following the standard
 * page composition pattern used throughout the application. Combines the site header,
 * footer, and contact-specific template to create the final page structure.
 * 
 * Architecture:
 * - Standard page composition pattern (Header + Template + Footer)
 * - Client-side rendering for interactive contact elements
 * - Template-based content organization for maintainability
 * - Consistent layout structure across all pages
 * - Separation of concerns between layout and content
 */

'use client';

import Header from '@/components/site-header/header';
import Footer from '@/components/site-footer/footer';
import ContactPageTemplate from '@/page-templates/contact-page';

/**
 * ContactPage Component
 * 
 * Root page component that assembles the complete contact page by combining
 * the standard site layout components with the contact-specific template.
 * Follows the established page composition pattern for consistency.
 * 
 * Features:
 * - Standard three-part page structure (Header, Content, Footer)
 * - Client-side rendering for interactive contact form and elements
 * - Template pattern for content organization
 * - Consistent layout architecture across the application
 * - Clean separation between layout and content concerns
 * 
 * @returns {JSX.Element} The complete assembled contact page
 * 
 * @example
 * ```tsx
 * // Usage in Next.js app router
 * import ContactPage from '@/components/contact-pages/contact-page'
 * 
 * // In app/contact/page.tsx
 * export default function Page() {
 *   return <ContactPage />
 * }
 * ```
 */
export default function ContactPage(): JSX.Element {
  return (
    <div>
      {/* Site Header - Navigation and branding */}
      <Header />
      
      {/* Contact Page Content - Template with contact form and information */}
        <ContactPageTemplate />
      
      {/* Site Footer - Links and company information */}
      <Footer />
    </div>
  );
};