/**
 * Page component for the Data Analysis service.
 * Using Next.js App Router's built-in support for metadata.
 */
import { Metadata } from 'next';
import DataAnalysisPage from '@/components/service-pages/data-analysis-page';
import dataAnalysisContent from '@/content/service-pages/data-analysis';

/**
 * Metadata configuration for the Data Analysis service page.
 * 
 * @type {Metadata}
 */
export const metadata: Metadata = {
  title: dataAnalysisContent.metadata.title + ' | InSite Tech',
  description: dataAnalysisContent.metadata.description,
};

/**
 * Server component that renders the Data Analysis service page.
 * 
 * @returns {JSX.Element} The rendered Data Analysis page
 */
export default function Page() {
  return <DataAnalysisPage />;
}