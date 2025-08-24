/**
 * @fileoverview Custom Software Solutions Service Page Route Component
 *
 * Next.js App Router page component for the /services/custom-software-solutions route.
 * Implements server-side rendering with static metadata export and component
 * delegation pattern. Follows App Router conventions for SEO optimization and
 * performance.
 */
import { Metadata } from 'next';
import CustomSoftwarePage from '@/components/service-pages/custom-software-page';
import customSoftwareContent from '@/content/service-pages/custom-software';
import { generateServiceMetadata } from '@/utils/metadata-helpers';
import { ServiceStructuredData, BreadcrumbStructuredData } from '@/components/seo/structured-data';

/**
 * Static metadata configuration for the Custom Software Solutions service page.
 *
 * Exported as a static object for Next.js App Router to process during build time.
 * Provides SEO optimization with title and description meta tags derived from
 * imported content.
 * 
 * @type {Metadata} Next.js metadata configuration object
 */
export const metadata: Metadata = generateServiceMetadata(
  customSoftwareContent.metadata.title,
  customSoftwareContent.metadata.description,
  'custom-software-solutions'
);

/**
 * Custom Software Solutions Service Page Route Component
 *
 * Server component that renders the Custom Software Solutions service page using the App
 * Router pattern. It delegates the page rendering to the CustomSoftwarePage
 * client component, while handling route-level concerns like metadata.
 *
 * Features:
 * - Server-side rendering by default (App Router)
 * - Static metadata export for SEO optimization
 * - Component delegation for separation of concerns
 * - Follows Next.js 13+ App Router conventions
 * 
 * @returns {JSX.Element} The rendered Custom Software Solutions service page.
 *
 * @example
 * ```
 * // This component is automatically rendered by Next.js for the
 * // /services/custom-software-solutions route. No manual import is necessary.
 * ```
 */
export default function Page(): JSX.Element {
  return (
    <>
      <ServiceStructuredData 
        serviceName={customSoftwareContent.metadata.title}
        serviceDescription={customSoftwareContent.metadata.description}
        serviceType="Custom Software Development"
      />
      <BreadcrumbStructuredData 
        breadcrumbs={[
          { name: "Home", url: "https://www.insitetechsolutions.com" },
          { name: "Custom Software Solutions", url: "https://www.insitetechsolutions.com/services/custom-software-solutions" }
        ]}
      />
      <CustomSoftwarePage />
    </>
  );
}