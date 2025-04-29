/**
 * Page component for the Web & App Development service.
 * Using Next.js App Router's built-in support for metadata.
 */
import { Metadata } from 'next';
import WebAppDevelopmentPage from '@/components/service-pages/web-app-development-page';
import webAppDevelopmentContent from '@/content/service-pages/web-app-dev';

/**
 * Metadata configuration for the Web & App Development service page.
 * 
 * @type {Metadata}
 */
export const metadata: Metadata = {
  title: webAppDevelopmentContent.metadata.title + ' | InSite Tech',
  description: webAppDevelopmentContent.metadata.description,
};

/**
 * Server component that renders the Web & App Development service page.
 * 
 * @returns {JSX.Element} The rendered Web & App Development page
 */
export default function Page() {
  return <WebAppDevelopmentPage />;
}