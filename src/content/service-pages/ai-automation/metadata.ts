/**
 * @fileoverview Metadata Configuration for the AI & Automation Service Page
 *
 * This file contains the metadata configuration for the AI & Automation service page.
 * It includes SEO-relevant fields such as the title, description, and slug identifier.
 */

import { ServiceMetadata } from '@/page-templates/service-page/types';

/**
 * Metadata configuration for the AI & Automation service page.
 * This object includes SEO-relevant fields such as the title, description, and slug identifier.
 * 
 * @type {ServiceMetadata}
 * @property {string} title - The title of the service page, used for SEO and display purposes.
 * @property {string} description - A brief description of the service, highlighting its value and purpose.
 * @property {string} slug - A URL-friendly identifier for the service page, used in routing and links.
 */
const aiAutomationMetadata: ServiceMetadata = {
  title: "AI & Automation",
  description: "Leverage artificial intelligence and automation to streamline operations and boost productivity",
  slug: "ai-and-automation",
};

export default aiAutomationMetadata;