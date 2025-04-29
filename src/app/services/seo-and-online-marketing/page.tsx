/**
 * Page component for the SEO & Online Marketing service.
 * Using Next.js App Router's built-in support for metadata.
 */
import { Metadata } from 'next';
import SEOMarketingPage from '@/components/service-pages/seo-marketing-page';
import seoMarketingContent from '@/content/service-pages/seo-marketing';

/**
 * Metadata configuration for the SEO & Online Marketing service page.
 * 
 * @type {Metadata}
 */
export const metadata: Metadata = {
  title: seoMarketingContent.metadata.title + ' | InSite Tech',
  description: seoMarketingContent.metadata.description,
};

/**
 * Server component that renders the SEO & Online Marketing service page.
 * 
 * @returns {JSX.Element} The rendered SEO & Online Marketing page
 */
export default function Page() {
  return <SEOMarketingPage />;
}