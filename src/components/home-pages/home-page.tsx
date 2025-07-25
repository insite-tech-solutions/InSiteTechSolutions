/**
 * @fileoverview Home Page Component for Client-Side Rendering
 *
 * This component assembles the complete home page following the standard
 * page composition pattern. It combines the site header, footer, and the
 * home page-specific template to create the final page structure.
 *
 * Features:
 * - Client-side rendering with 'use client' directive
 * - Standard page composition with header, content, and footer
 * - Component delegation pattern for clean architecture
 * - Consistent layout structure across the site
 * - SEO-optimized page structure
 *
 * @module HomePage
 */
'use client';

import Header from '@/components/site-header/header';
import Footer from '@/components/site-footer/footer';
import HomePageTemplate from '@/page-templates/home-page';

/**
 * HomePage Component
 *
 * This is the root client-side component for the home page. It orchestrates
 * the layout by including the Header, HomePageTemplate, and Footer,
 * ensuring a consistent presentation across the site.
 * 
 * The component follows the page composition pattern:
 * - Header: Site navigation and branding
 * - HomePageTemplate: Main content sections and interactive elements
 * - Footer: Site footer with links and information
 * 
 * This pattern ensures consistent layout structure while allowing
 * the HomePageTemplate to focus on page-specific content and functionality.
 * 
 * @returns {JSX.Element} The complete JSX structure for the home page
 * 
 * @example
 * ```tsx
 * <HomePage />
 * ```
 */
export default function HomePage(): JSX.Element {
  return (
    <div>
      <Header />
      <HomePageTemplate />
      <Footer />
    </div>
  );
}
