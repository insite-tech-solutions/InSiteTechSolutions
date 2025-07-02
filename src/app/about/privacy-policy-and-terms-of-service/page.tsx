/**
 * @fileoverview Privacy Policy & Terms of Service Page Route Component
 *
 * Next.js App Router page component for the /about/privacy-policy-and-terms-of-service route.
 * Implements server-side rendering with static metadata export and component
 * delegation pattern. Follows App Router conventions for SEO optimization and
 * performance.
 */
import type { Metadata } from "next";
import { loadAllLegalDocuments } from '@/lib/markdown-loader';
import PrivacyAndTermsPage from "@/components/about-pages/privacy-and-terms-page";

/**
 * Static metadata configuration for the Privacy Policy & Terms of Service page.
 *
 * Exported as a static object for Next.js App Router to process during build time.
 * Provides SEO optimization with title and description meta tags.
 * 
 * @type {Metadata} Next.js metadata configuration object
 */
export const metadata: Metadata = {
  title: "Legal Center | InSite Tech Solutions",
  description: "Review our Privacy Policy and Terms of Service. Understand how we handle your data, our service terms, and your rights.",
  keywords: "privacy policy, terms of service, legal, data protection, InSite Tech Solutions",
};

/**
 * Privacy Policy & Terms of Service Page Route Component
 *
 * Server component that renders the Legal Center page using the App Router pattern.
 * Delegates rendering to the PrivacyAndTermsPage component while handling route-level
 * concerns like metadata, data loading, and server-side rendering.
 *
 * Features:
 * - Server-side rendering by default (App Router)
 * - Static metadata export for SEO optimization
 * - Component delegation pattern for separation of concerns
 * - Follows Next.js 13+ App Router conventions
 * - Server-side legal document loading for performance
 * 
 * @returns {JSX.Element} The rendered Privacy Policy & Terms of Service page component
 *
 * @example
 * ```
 * // This component is automatically used by Next.js for the /about/privacy-policy-and-terms-of-service route
 * // No manual import needed - handled by the App Router file system
 * ```
 */
export default function Page(): JSX.Element {
  const documents = loadAllLegalDocuments();
  
  return <PrivacyAndTermsPage documents={documents} />;
}
