// src/content/service-pages/graphic-design/metadata.ts

import { ServiceMetadata } from '@/page-templates/service-page/types';

/**
 * Metadata configuration for the Graphic Design & Branding service page.
 * This object includes SEO-relevant fields such as the title, description, and slug identifier.
 * 
 * @type {ServiceMetadata}
 * @property {string} title - The title of the service page, used for SEO and display purposes.
 * @property {string} description - A brief description of the service, highlighting its value and purpose.
 * @property {string} slug - A URL-friendly identifier for the service page, used in routing and links.
 */
const graphicDesignMetadata: ServiceMetadata = {
  title: "Graphic Design & Branding",
  description: "Create a powerful visual identity that resonates with your audience and elevates your brand",
  slug: "graphic-design-and-branding",
};

export default graphicDesignMetadata;