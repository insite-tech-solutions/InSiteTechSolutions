/**
 * @fileoverview Previous Works Page Component
 *
 * This component assembles the complete Previous Works page following the standard
 * page composition pattern used throughout the application. It combines the site header,
 * footer, and the Previous Works-specific template to create the final page structure.
 */

'use client';

import Header from '@/components/site-header/header';
import Footer from '@/components/site-footer/footer';
import PreviousWorksPageTemplate from '@/page-templates/previous-works-page';

/**
 * `PreviousWorksPage` Component.
 *
 * This is the root client-side component for the Previous Works page.
 * It orchestrates the layout by including the `Header`, the `PreviousWorksPageTemplate`
 * (which will contain all the specific portfolio content), and the `Footer`.
 * This structure ensures a consistent presentation across the application.
 *
 * @returns {JSX.Element} The complete JSX structure for the Previous Works page.
 */
export default function PreviousWorksPage(): JSX.Element {
  return (
    <div>
      <Header />
      <PreviousWorksPageTemplate />
      <Footer />
    </div>
  );
}
