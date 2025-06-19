/**
 * @fileoverview Main Index File for the Web & App Development Service Page
 *
 * This file aggregates all the content sections for the Web & App Development service page.
 * It exports a single object containing all the content configurations for easy import and use.
 */

import hero from './hero-content';
import overview from './overview-content';
import valueProp from './value-prop-content';
import serviceScope from './service-scope-content';
import applications from './applications-content';
import process from './process-content';
import pricing from './pricing-content';
import insiteAdvantage from './insite-advantage-content';
import faq from './faq-content';
import cta from './cta-content';
import metadata from './metadata';
import {
  HeroSectionContent,
  ServiceOverviewContent,
  ValuePropContent,
  ServiceScopeContent,
  ApplicationsContent,
  ProcessContent,
  PricingContent,
  InSiteAdvantageContent,
  FAQContent,
  CTAContent,
  ServiceMetadata
} from '@/page-templates/service-page/types';

/**
 * Aggregated content for the Web App Development service page.
 * 
 * This object consolidates all the content sections used in the service page,
 * including the hero section, value proposition, service scope, applications,
 * process, pricing, InSite advantage, FAQ, CTA, and metadata.
 * 
 * @type {Object} webAppDevContent
 * @property {HeroSectionContent} hero - Content for the hero section.
 * @property {ServiceOverviewContent} overview - Content for the overview section.
 * @property {ValuePropContent} valueProp - Content for the value proposition section.
 * @property {ServiceScopeContent} serviceScope - Content for the service scope section.
 * @property {ApplicationsContent} applications - Content for the applications section.
 * @property {ProcessContent} process - Content for the process section.
 * @property {PricingContent} pricing - Content for the pricing section.
 * @property {InSiteAdvantageContent} insiteAdvantage - Content for the InSite advantage section.
 * @property {FAQContent} faq - Content for the FAQ section.
 * @property {CTAContent} cta - Content for the call-to-action section.
 * @property {ServiceMetadata} metadata - Metadata for the service page.
 */

interface WebAppDevContent {
  hero: HeroSectionContent;
  overview: ServiceOverviewContent;
  valueProp: ValuePropContent;
  serviceScope: ServiceScopeContent;
  applications: ApplicationsContent;
  process: ProcessContent;
  pricing: PricingContent;
  insiteAdvantage: InSiteAdvantageContent;
  faq: FAQContent;
  cta: CTAContent;
  metadata: ServiceMetadata;
}

const webAppDevContent: WebAppDevContent = {
  hero,
  overview,
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

export default webAppDevContent;