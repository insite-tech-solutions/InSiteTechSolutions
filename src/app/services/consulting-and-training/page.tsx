/**
 * Page component for the Consulting & Training service.
 * Using Next.js App Router's built-in support for metadata.
 */
import { Metadata } from 'next';
import ConsultingTrainingPage from '@/components/service-pages/consulting-training-page';
import consultingTrainingContent from '@/content/service-pages/consulting-training';

/**
 * Metadata configuration for the Consulting & Training service page.
 * 
 * @type {Metadata}
 */
export const metadata: Metadata = {
  title: consultingTrainingContent.metadata.title + ' | InSite Tech',
  description: consultingTrainingContent.metadata.description,
};

/**
 * Server component that renders the Consulting & Training service page.
 * 
 * @returns {JSX.Element} The rendered Consulting & Training page
 */
export default function Page() {
  return <ConsultingTrainingPage />;
}