/**
 * Page component for the Graphic Design & Branding service.
 * Using Next.js App Router's built-in support for metadata.
 */
import { Metadata } from 'next';
import GraphicDesignPage from '@/components/service-pages/graphic-design-page';
import graphicDesignContent from '@/content/service-pages/graphic-design';

/**
 * Metadata configuration for the Graphic Design & Branding service page.
 * 
 * @type {Metadata}
 */
export const metadata: Metadata = {
  title: graphicDesignContent.metadata.title + ' | InSite Tech',
  description: graphicDesignContent.metadata.description,
};

/**
 * Server component that renders the Graphic Design & Branding service page.
 * 
 * @returns {JSX.Element} The rendered Graphic Design & Branding page
 */
export default function Page() {
  return <GraphicDesignPage />;
}