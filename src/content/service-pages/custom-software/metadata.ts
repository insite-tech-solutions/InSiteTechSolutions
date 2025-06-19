/**
 * @fileoverview Metadata Configuration for the Custom Software Service Page
 *
 * This file contains the metadata configuration for the Custom Software service page.
 * It includes SEO-relevant fields such as the title, description, and slug identifier.
 */

import { ServiceMetadata } from '@/page-templates/service-page/types';

/**
 * Metadata configuration for the Custom Software Solutions service page.
 * This object includes SEO-relevant fields such as the title, description, and slug identifier.
 * 
 * @type {ServiceMetadata}
 * @property {string} title - The title of the service page, used for SEO and display purposes.
 * @property {string} description - A brief description of the service, highlighting its value and purpose.
 * @property {string} slug - A URL-friendly identifier for the service page, used in routing and links.
 */
const customSoftwareMetadata: ServiceMetadata = {
  title: "Custom Software Solutions",
  description: "Turn your technical challenges into opportunities with tailored software solutions that align perfectly with your business processes.",
  slug: "custom-software-solutions",
};

export default customSoftwareMetadata;