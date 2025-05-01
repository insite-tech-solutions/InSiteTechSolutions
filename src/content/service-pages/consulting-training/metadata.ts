// src/content/service-pages/consulting-training/metadata.ts

import { ServiceMetadata } from '@/page-templates/service-page/types';

/**
 * Metadata configuration for the Consulting & Training service page.
 * This object includes SEO-relevant fields such as the title, description, and slug identifier.
 * 
 * @type {ServiceMetadata}
 * @property {string} title - The title of the service page, used for SEO and display purposes.
 * @property {string} description - A brief description of the service, highlighting its value and purpose.
 * @property {string} slug - A URL-friendly identifier for the service page, used in routing and links.
 */
const consultingTrainingMetadata: ServiceMetadata = {
  title: "Consulting & Training",
  description: "Expert guidance and comprehensive training to empower your team and optimize your business processes",
  slug: "consulting-and-training",
};

export default consultingTrainingMetadata;