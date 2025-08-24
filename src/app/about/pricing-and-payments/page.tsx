/**
 * @fileoverview Pricing & Payments Page Route Component
 *
 * Next.js App Router page component for the /about/pricing-and-payments route.
 * Implements server-side rendering with static metadata export and component
 * delegation pattern. Follows App Router conventions for SEO optimization and
 * performance.
 */
import type { Metadata } from "next";
import PricingPage from "@/components/about-pages/pricing-page";
import { generateAboutMetadata } from '@/utils/metadata-helpers';
import { WebPageStructuredData, BreadcrumbStructuredData } from '@/components/seo/structured-data';

/**
 * Static metadata configuration for the Pricing & Payments page.
 *
 * Exported as a static object for Next.js App Router to process during build time.
 * Provides SEO optimization with title and description meta tags.
 * 
 * @type {Metadata} Next.js metadata configuration object
 */
export const metadata: Metadata = generateAboutMetadata(
  "Pricing & Payment Options",
  "Flexible pricing models and secure payment options for web development, custom software, data analytics, consulting, and other tech services. Transparent, fair, and results-driven pricing.",
  "pricing-and-payments"
);

/**
 * Pricing & Payments Page Route Component
 *
 * Server component that renders the Pricing & Payments page using the App Router pattern.
 * Delegates rendering to the PricingPage component while handling route-level
 * concerns like metadata and server-side rendering.
 *
 * Features:
 * - Server-side rendering by default (App Router)
 * - Static metadata export for SEO optimization
 * - Component delegation pattern for separation of concerns
 * - Follows Next.js 13+ App Router conventions
 * 
 * @returns {JSX.Element} The rendered Pricing & Payments page component
 *
 * @example
 * ```
 * // This component is automatically used by Next.js for the /about/pricing-and-payments route
 * // No manual import needed - handled by the App Router file system
 * ```
 */
export default function Page(): JSX.Element {
  return (
    <>
      <WebPageStructuredData 
        pageName="Pricing & Payment Options | InSite Tech Solutions"
        pageDescription="Flexible pricing models and secure payment options for web development, custom software, data analytics, consulting, and other tech services. Transparent, fair, and results-driven pricing."
        pageUrl="https://www.insitetechsolutions.com/about/pricing-and-payments"
      />
      <BreadcrumbStructuredData 
        breadcrumbs={[
          { name: "Home", url: "https://www.insitetechsolutions.com" },
          { name: "Pricing & Payment Options", url: "https://www.insitetechsolutions.com/about/pricing-and-payments" }
        ]}
      />
      <PricingPage />
    </>
  );
}
