/**
 * @fileoverview Metadata Configuration for the Web & App Development Service Page
 *
 * This file contains the metadata configuration for the Web & App Development service page.
 * It includes SEO-relevant fields such as the title, description, and slug identifier.
 */

import { ServiceMetadata } from '@/page-templates/service-page/types';

/**
 * Metadata configuration for the Web & App Development service page.
 * This object includes SEO-relevant fields such as the title, description, and slug identifier.
 * 
 * @type {ServiceMetadata}
 * @property {string} title - The title of the service page, used for SEO and display purposes.
 * @property {string} description - A brief description of the service, highlighting its value and purpose.
 * @property {string} slug - A URL-friendly identifier for the service page, used in routing and links.
 */
const webAppDevelopmentMetadata: ServiceMetadata = {
  title: "Web & App Development",
  description: "Transform your ideas into powerful digital solutions. From responsive websites to powerful applications, we create digital experiences that drive real business results.",
  slug: "web-and-app-development",
};

export default webAppDevelopmentMetadata;