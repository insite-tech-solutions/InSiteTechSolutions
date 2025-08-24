/**
 * @fileoverview Previous Works Page Route Component
 *
 * Next.js App Router page component for the /about/previous-works route.
 * Implements server-side rendering with static metadata export and component
 * delegation pattern. Follows App Router conventions for SEO optimization and
 * performance.
 */
import type { Metadata } from "next";
import PreviousWorksPage from "@/components/about-pages/previous-works-page";
import { generateAboutMetadata } from '@/utils/metadata-helpers';
import { WebPageStructuredData, BreadcrumbStructuredData } from '@/components/seo/structured-data';

/**
 * Static metadata configuration for the Previous Works page.
 *
 * Exported as a static object for Next.js App Router to process during build time.
 * Provides SEO optimization with title and description meta tags.
 * 
 * @type {Metadata} Next.js metadata configuration object
 */
export const metadata: Metadata = generateAboutMetadata(
  "Previous Works",
  "Explore our portfolio of successful projects, from custom software solutions to web and app development. See how we've helped clients achieve their goals.",
  "previous-works"
);

/**
 * Previous Works Page Route Component
 *
 * Server component that renders the Previous Works page using the App Router pattern.
 * Delegates rendering to the PreviousWorksPage component while handling route-level
 * concerns like metadata and server-side rendering.
 *
 * @returns {JSX.Element} The rendered Previous Works page component
 */
export default function Page(): JSX.Element {
  return (
    <>
      <WebPageStructuredData 
        pageName="Previous Works | InSite Tech Solutions"
        pageDescription="Explore our portfolio of successful projects, from custom software solutions to web and app development. See how we've helped clients achieve their goals."
        pageUrl="https://www.insitetechsolutions.com/about/previous-works"
      />
      <BreadcrumbStructuredData 
        breadcrumbs={[
          { name: "Home", url: "https://www.insitetechsolutions.com" },
          { name: "Previous Works", url: "https://www.insitetechsolutions.com/about/previous-works" }
        ]}
      />
      <PreviousWorksPage />
    </>
  );
}
