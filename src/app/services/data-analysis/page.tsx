/**
 * @fileoverview Data Analysis Service Page Route Component
 *
 * Next.js App Router page component for the /services/data-analysis route.
 * Implements server-side rendering with static metadata export and component
 * delegation pattern. Follows App Router conventions for SEO optimization and
 * performance.
 */
import { Metadata } from 'next';
import DataAnalysisPage from '@/components/service-pages/data-analysis-page';
import dataAnalysisContent from '@/content/service-pages/data-analysis';
import { generateServiceMetadata } from '@/utils/metadata-helpers';
import { ServiceStructuredData, BreadcrumbStructuredData } from '@/components/seo/structured-data';

/**
 * Static metadata configuration for the Data Analysis service page.
 *
 * Exported as a static object for Next.js App Router to process during build time.
 * Provides SEO optimization with title and description meta tags derived from
 * imported content.
 * 
 * @type {Metadata} Next.js metadata configuration object
 */
export const metadata: Metadata = generateServiceMetadata(
  dataAnalysisContent.metadata.title,
  dataAnalysisContent.metadata.description,
  'data-analysis'
);

/**
 * Data Analysis Service Page Route Component
 *
 * Server component that renders the Data Analysis service page using the App
 * Router pattern. It delegates the page rendering to the DataAnalysisPage
 * client component, while handling route-level concerns like metadata.
 *
 * Features:
 * - Server-side rendering by default (App Router)
 * - Static metadata export for SEO optimization
 * - Component delegation for separation of concerns
 * - Follows Next.js 13+ App Router conventions
 * 
 * @returns {JSX.Element} The rendered Data Analysis service page.
 *
 * @example
 * ```
 * // This component is automatically rendered by Next.js for the
 * // /services/data-analysis route. No manual import is necessary.
 * ```
 */
export default function Page(): JSX.Element {
  return (
    <>
      <ServiceStructuredData 
        serviceName={dataAnalysisContent.metadata.title}
        serviceDescription={dataAnalysisContent.metadata.description}
        serviceType="Data Analysis Services"
      />
      <BreadcrumbStructuredData 
        breadcrumbs={[
          { name: "Home", url: "https://www.insitetechsolutions.com" },
          { name: "Data Analysis", url: "https://www.insitetechsolutions.com/services/data-analysis" }
        ]}
      />
      <DataAnalysisPage />
    </>
  );
}