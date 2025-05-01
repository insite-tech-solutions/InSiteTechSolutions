/**
 * Page component for the AI & Automation service.
 * Using Next.js App Router's built-in support for metadata.
 */
import { Metadata } from 'next';
import AIAutomationPage from '@/components/service-pages/ai-automation-page';
import aiAutomationContent from '@/content/service-pages/ai-automation';

/**
 * Metadata configuration for the AI & Automation service page.
 * 
 * @type {Metadata}
 */
export const metadata: Metadata = {
  title: aiAutomationContent.metadata.title + ' | InSite Tech',
  description: aiAutomationContent.metadata.description,
};

/**
 * Server component that renders the AI & Automation service page.
 * 
 * @returns {JSX.Element} The rendered AI & Automation page
 */
export default function Page() {
  return <AIAutomationPage />;
}