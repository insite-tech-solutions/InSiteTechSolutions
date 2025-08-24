/**
 * @fileoverview About Us Page Route Component
 *
 * Next.js App Router page component for the /about/about us route.
 * Implements server-side rendering with static metadata export and component
 * delegation pattern. Follows App Router conventions for SEO optimization and
 * performance.
 */
import type { Metadata } from "next";
import AboutUsPage from "@/components/about-pages/about-us-page";
import { generateAboutMetadata } from '@/utils/metadata-helpers';
import { WebPageStructuredData, BreadcrumbStructuredData } from '@/components/seo/structured-data';

/**
 * Static metadata configuration for the About Us page.
 *
 * Exported as a static object for Next.js App Router to process during build time.
 * Provides SEO optimization with title and description meta tags.
 * 
 * @type {Metadata} Next.js metadata configuration object
 */
export const metadata: Metadata = generateAboutMetadata(
  "About Us",
  "Learn about our team, mission, and approach to technology solutions. Discover how we help businesses transform their digital presence with personalized, results-driven services.",
  "about-us"
);

/**
 * About Us Page Route Component
 *
 * Server component that renders the About Us page using the App Router pattern.
 * Delegates rendering to the AboutUsPage component while handling route-level
 * concerns like metadata and server-side rendering.
 *
 * Features:
 * - Server-side rendering by default (App Router)
 * - Static metadata export for SEO optimization
 * - Component delegation pattern for separation of concerns
 * - Follows Next.js 13+ App Router conventions
 * 
 * @returns {JSX.Element} The rendered About Us page component
 *
 * @example
 * ```
 * // This component is automatically used by Next.js for the /about/about us route
 * // No manual import needed - handled by the App Router file system
 * ```
 */
export default function Page(): JSX.Element {
  return (
    <>
      <WebPageStructuredData 
        pageName="About Us | InSite Tech Solutions"
        pageDescription="Learn about our team, mission, and approach to technology solutions. Discover how we help businesses transform their digital presence with personalized, results-driven services."
        pageUrl="https://www.insitetechsolutions.com/about/about-us"
      />
      <BreadcrumbStructuredData 
        breadcrumbs={[
          { name: "Home", url: "https://www.insitetechsolutions.com" },
          { name: "About Us", url: "https://www.insitetechsolutions.com/about/about-us" }
        ]}
      />
      <AboutUsPage />
    </>
  );
}
