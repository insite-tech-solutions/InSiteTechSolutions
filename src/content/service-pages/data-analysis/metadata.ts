// src/content/service-pages/data-analysis/metadata.ts

import { ServiceMetadata } from '@/page-templates/service-page/types';

/**
 * Metadata configuration for the Data Analysis service page.
 * This object includes SEO-relevant fields such as the title, description, and slug identifier.
 * 
 * @type {ServiceMetadata}
 * @property {string} title - The title of the service page, used for SEO and display purposes.
 * @property {string} description - A brief description of the service, highlighting its value and purpose.
 * @property {string} slug - A URL-friendly identifier for the service page, used in routing and links.
 */
const dataAnalysisMetadata: ServiceMetadata = {
  title: "Data Analysis",
  description: "Transform your data into actionable insights and make informed business decisions",
  slug: "data-analysis",
};

export default dataAnalysisMetadata;