/**
 * @fileoverview Contact Page Route Component
 * 
 * Next.js App Router page component for the /contact route. Implements server-side
 * rendering with static metadata export and component delegation pattern.
 * Follows App Router conventions for SEO optimization and performance.
 */

import type { Metadata } from "next"
import ContactPage from "@/components/contact-pages/contact-page";
import { generateMetadata } from '@/utils/metadata-helpers';
import { WebPageStructuredData, BreadcrumbStructuredData, LocalBusinessStructuredData } from '@/components/seo/structured-data';

/**
 * Static metadata configuration for the Contact page.
 * 
 * Exported as a static object for Next.js App Router to process during build time.
 * Provides SEO optimization with title and description meta tags.
 * 
 * @type {Metadata} Next.js metadata configuration object
 */
export const metadata: Metadata = generateMetadata({
  title: "Contact Us | InSite Tech Solutions",
  description: "Get in touch with our team for web development, software solutions, data analytics, and consulting services. Ready to transform your business with technology?",
  path: "/contact",
  image: "https://www.insitetechsolutions.com/Insite Tech Solutions Light.png", // Use company logo for contact page
  keywords: "contact, web development, software solutions, data analytics, consulting services, InSite Tech Solutions"
});

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
  return (
    <>
      <WebPageStructuredData 
        pageName="Contact Us | InSite Tech Solutions"
        pageDescription="Get in touch with our team for web development, software solutions, data analytics, and consulting services. Ready to transform your business with technology?"
        pageUrl="https://www.insitetechsolutions.com/contact"
      />
      <LocalBusinessStructuredData />
      <BreadcrumbStructuredData 
        breadcrumbs={[
          { name: "Home", url: "https://www.insitetechsolutions.com" },
          { name: "Contact", url: "https://www.insitetechsolutions.com/contact" }
        ]}
      />
      <ContactPage />
    </>
  );
}
