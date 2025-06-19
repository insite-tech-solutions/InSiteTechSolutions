/**
 * @fileoverview SEO & Online Marketing Service Page Route Component
 *
 * Next.js App Router page component for the /services/seo-and-online-marketing route.
 * Implements server-side rendering with static metadata export and component
 * delegation pattern. Follows App Router conventions for SEO optimization and
 * performance.
 */
import { Metadata } from 'next';
import SEOMarketingPage from '@/components/service-pages/seo-marketing-page';
import seoMarketingContent from '@/content/service-pages/seo-marketing';

/**
 * Static metadata configuration for the SEO & Online Marketing service page.
 *
 * Exported as a static object for Next.js App Router to process during build time.
 * Provides SEO optimization with title and description meta tags derived from
 * imported content.
 * 
 * @type {Metadata} Next.js metadata configuration object
 */
export const metadata: Metadata = {
  title: seoMarketingContent.metadata.title + ' | InSite Tech',
  description: seoMarketingContent.metadata.description,
};

/**
 * SEO & Online Marketing Service Page Route Component
 *
 * Server component that renders the SEO & Online Marketing service page using the App
 * Router pattern. It delegates the page rendering to the SEOMarketingPage
 * client component, while handling route-level concerns like metadata.
 *
 * Features:
 * - Server-side rendering by default (App Router)
 * - Static metadata export for SEO optimization
 * - Component delegation for separation of concerns
 * - Follows Next.js 13+ App Router conventions
 * 
 * @returns {JSX.Element} The rendered SEO & Online Marketing service page.
 *
 * @example
 * ```
 * // This component is automatically rendered by Next.js for the
 * // /services/seo-and-online-marketing route. No manual import is necessary.
 * ```
 */
export default function Page(): JSX.Element {
  return <SEOMarketingPage />;
}