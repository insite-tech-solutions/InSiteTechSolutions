/**
 * Page component for the Custom Software Solutions service.
 * Using Next.js App Router's built-in support for metadata.
 */

import { Metadata } from 'next';
import CustomSoftwarePage from '@/components/service-pages/custom-software-page';
import customSoftwareContent from '@/content/service-pages/custom-software';

/**
 * Metadata configuration for the Custom Software Solutions service page.
 * 
 * @type {Metadata}
 */
export const metadata: Metadata = {
  title: customSoftwareContent.metadata.title + ' | InSite Tech',
  description: customSoftwareContent.metadata.description,
};

/**
 * Server component that renders the Custom Software Solutions service page.
 * 
 * @returns {JSX.Element} The rendered Custom Software Solutions page
 */
export default function Page() {
  return <CustomSoftwarePage />;
}