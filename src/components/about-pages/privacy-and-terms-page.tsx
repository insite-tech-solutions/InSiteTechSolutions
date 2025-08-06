/**
 * @fileoverview Privacy and Terms Page Component
 *
 * This component assembles the complete privacy and terms page following the standard
 * page composition pattern used throughout the application. It combines the site header,
 * footer, and the privacy/terms-specific template.
 */

'use client';

import Header from '@/components/site-header/header';
import Footer from '@/components/site-footer/footer';
import PrivacyAndTermsPageTemplate from '@/page-templates/privacy-and-terms-page';
import { LegalDocuments } from '@/lib/markdown-loader';

interface PrivacyAndTermsPageProps {
  documents: LegalDocuments;
}

/**
 * `PrivacyAndTermsPage` Component.
 *
 * This is the root client-side component for the Privacy and Terms page.
 * It orchestrates the layout by including the `Header`, the `PrivacyAndTermsPageTemplate`
 * (which contains all the specific legal content), and the `Footer`.
 * This structure ensures a consistent presentation across the application while delivering
 * specialized legal content.
 *
 * @param {PrivacyAndTermsPageProps} props - Component props containing legal documents
 * @returns {JSX.Element} The complete JSX structure for the Privacy and Terms page.
 */
export default function PrivacyAndTermsPage({ documents }: PrivacyAndTermsPageProps): JSX.Element {
  return (
    <div>
      <Header /> {/* Renders the global site header. */}
        <PrivacyAndTermsPageTemplate documents={documents} /> {/* Renders the main content template for the privacy/terms page. */}
      <Footer /> {/* Renders the global site footer. */}
    </div>
  );
} 