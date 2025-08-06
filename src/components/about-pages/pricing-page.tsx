/**
 * @fileoverview Pricing Page Component
 *
 * This component assembles the complete pricing and payments page following the standard
 * page composition pattern used throughout the application. Combines the site header,
 * footer, and pricing-specific template to create the final page structure.
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
import PricingPageTemplate from '@/page-templates/pricing-page';

/**
 * PricingPage Component
 * 
 * Root page component that assembles the complete pricing page by combining
 * the standard site layout components with the pricing-specific template.
 * Follows the established page composition pattern for consistency.
 * 
 * Features:
 * - Standard three-part page structure (Header, Content, Footer)
 * - Client-side rendering for interactive pricing elements
 * - Template pattern for content organization
 * - Consistent layout architecture across the application
 * - Clean separation between layout and content concerns
 * 
 * @returns {JSX.Element} The complete assembled pricing page
 * 
 * @example
 * ```tsx
 * // Usage in Next.js app router
 * import PricingPage from '@/components/about-pages/pricing-page'
 * 
 * // In app/about/pricing-and-payments/page.tsx
 * export default function Page() {
 *   return <PricingPage />
 * }
 * ```
 */
export default function PricingPage(): JSX.Element {
  return (
    <div>
      {/* Site Header - Navigation and branding */}
      <Header />
      
      {/* Pricing Page Content - Template with all pricing sections */}
      <PricingPageTemplate />
      
      {/* Site Footer - Links and company information */}
      <Footer />
    </div>
  );
}