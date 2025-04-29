// src/content/service-pages/seo-marketing/index.ts
import hero from './hero-content';
import valueProp from './value-prop-content';
import serviceScope from './service-scope-content';
import applications from './applications-content';
import process from './process-content';
import pricing from './pricing-content';
import insiteAdvantage from './insite-advantage-content';
import faq from './faq-content';
import cta from './cta-content';
import metadata from './metadata';

/**
 * Aggregated content for the SEO & Online Marketing service page.
 * 
 * This object consolidates all the content sections used in the service page,
 * including the hero section, value proposition, service scope, applications,
 * process, pricing, InSite advantage, FAQ, CTA, and metadata.
 * 
 * @type {Object} seoMarketingContent
 * @property {Object} hero - Content for the hero section.
 * @property {Object} valueProp - Content for the value proposition section.
 * @property {Object} serviceScope - Content for the service scope section.
 * @property {Object} applications - Content for the applications section.
 * @property {Object} process - Content for the process section.
 * @property {Object} pricing - Content for the pricing section.
 * @property {Object} insiteAdvantage - Content for the InSite advantage section.
 * @property {Object} faq - Content for the FAQ section.
 * @property {Object} cta - Content for the call-to-action section.
 * @property {Object} metadata - Metadata for the service page.
 */
const seoMarketingContent = {
  hero,
  valueProp,
  serviceScope,
  applications,
  process,
  pricing,
  insiteAdvantage,
  faq,
  cta,
  metadata
};

export default seoMarketingContent;