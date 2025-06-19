/**
 * @fileoverview Contact Page Route Component
 * 
 * Next.js App Router page component for the /contact route. Implements server-side
 * rendering with static metadata export and component delegation pattern.
 * Follows App Router conventions for SEO optimization and performance.
 */

import type { Metadata } from "next"
import ContactPage from "@/components/contact-pages/contact-page";

/**
 * Static metadata configuration for the Contact page.
 * 
 * Exported as a static object for Next.js App Router to process during build time.
 * Provides SEO optimization with title and description meta tags.
 * 
 * @type {Metadata} Next.js metadata configuration object
 */
export const metadata: Metadata = {
  title: "Contact Us | Tech Services",
  description:
    "Get in touch with our team for web development, software solutions, data analytics, and consulting services.",
};

/**
 * Contact Page Route Component
 * 
 * Server component that renders the contact page using the App Router pattern.
 * Delegates rendering to the ContactPage component while handling route-level
 * concerns like metadata and server-side rendering.
 * 
 * Features:
 * - Server-side rendering by default (App Router)
 * - Static metadata export for SEO optimization
 * - Component delegation pattern for separation of concerns
 * - Follows Next.js 13+ App Router conventions
 * - Automatic code splitting and optimization
 * 
 * @returns {JSX.Element} The rendered Contact page component
 * 
 * @example
 * ```
 * // This component is automatically used by Next.js for the /contact route
 * // No manual import needed - handled by the App Router file system
 * ```
 */
export default function Page(): JSX.Element {
  // Render the ContactPage component
  return <ContactPage />;
}
