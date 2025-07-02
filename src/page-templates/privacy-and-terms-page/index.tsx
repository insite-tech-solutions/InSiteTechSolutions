/**
 * @fileoverview Privacy and Terms Page Template
 * 
 * This file contains the main template component for the privacy policy and terms of service page.
 * It assembles the complete legal page from individual sections and provides page loading context
 * for smooth transitions between pages.
 * 
 */

'use client';

import { useEffect } from 'react';
import Layout from '@/components/reusable-components/layout';
import HeroSection from './hero-section';
import DocumentsSection from './documents-section';
import CtaSection from './cta-section';
import { LegalDocuments } from '@/lib/markdown-loader';
import { PageLoadingProvider, usePageLoading } from '@/contexts/page-loading-context';
import PageTransitionLoader from '@/components/reusable-components/page-transition-loader';

/**
 * Interface for the props of the PrivacyAndTermsPageTemplate component.
 * @interface PrivacyAndTermsPageTemplateProps
 */
interface PrivacyAndTermsPageTemplateProps {
  documents: LegalDocuments;
}

function PrivacyAndTermsPageContent({ documents }: PrivacyAndTermsPageTemplateProps): JSX.Element {
  const { setIsPageLoading } = usePageLoading();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [setIsPageLoading]);
  
  return (
    <>
      <HeroSection />
      <Layout>
        <div className="pt-12 lg:pt-24 lg:pb-4">
          <DocumentsSection documents={documents} />
        </div>
        <div className="pb-2 lg:pb-8">
            <CtaSection />
        </div>
      </Layout>
    </>
  );
}

function PrivacyAndTermsLoaderWrapper({ documents }: PrivacyAndTermsPageTemplateProps): JSX.Element {
  const { isPageLoading } = usePageLoading();

  return (
    <>
      {isPageLoading && <PageTransitionLoader />}
      <PrivacyAndTermsPageContent documents={documents} />
    </>
  );
}

/**
 * Privacy and Terms Page Template
 *
 * This component assembles the complete legal page from individual sections
 * and wraps them in a page loading context for smooth transitions.
 *
 * @param {PrivacyAndTermsPageTemplateProps} props - The properties for the component.
 * @returns {JSX.Element} The fully assembled legal page template with context.
 */
export default function PrivacyAndTermsPageTemplate({ documents }: PrivacyAndTermsPageTemplateProps): JSX.Element {
  return (
    <PageLoadingProvider>
      <PrivacyAndTermsLoaderWrapper documents={documents} />
    </PageLoadingProvider>
  );
} 