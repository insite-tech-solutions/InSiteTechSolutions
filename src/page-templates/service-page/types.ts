// src/page-templates/service-page/types.ts

import { CSSProperties, ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

/**
 * Base types for decorative elements used in hero backgrounds
 */
export type IconName = string; // Name of a Lucide icon

export interface DecorElement {
  type: 'icon' | 'circle' | 'square';
  className?: string;
  style?: CSSProperties;
  icon?: LucideIcon | IconName;
  size?: number;
}

/**
 * Hero section types - highly configurable
 */
export interface HeroSectionContent {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
  decorElements?: DecorElement[];
  bgClassName?: string; // Custom background classes
  customElements?: ReactNode; // For truly custom elements
}

/**
 * Types for statistics used in value prop section
 */
export interface Statistic {
  value: number;
  prefix?: string;
  suffix?: string;
  description: string | ReactNode; // Allow for rich content
}

/**
 * Data structure for inline statistics
 */
export interface StatData {
  value: number;
  prefix?: string;
  suffix?: string;
}

/**
 * Types for industry trends in value prop section
 */
export interface IndustryTrend {
  icon: IconName;
  title: string;
  description: string;
}

/**
 * Types for market insights in value prop section
 */
export interface MarketInsight {
  id: string;
  parts: (string | StatData)[]; // Structured content with interleaved text and stats
}

/**
 * Call to action in value prop section
 */
export interface CallToAction {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  buttonIcon?: IconName;
}

/**
 * Value proposition section - flexible to allow additional content
 */
export interface ValuePropContent {
  title: string;
  description: string;
  statistics?: Statistic[];
  industryTrends: IndustryTrend[];
  industryTrendsDescription?: string;
  marketInsights: MarketInsight[];
  callToAction: CallToAction;
  additionalContent?: {
    beforeTrends?: ReactNode;
    afterTrends?: ReactNode;
    beforeCta?: ReactNode;
  };
}

/**
 * Service item for the service scope section
 */
export interface ServiceItem {
  icon: IconName;
  title: string;
  description: string;
  benefits: string[];
}

/**
 * Benefit item for the service scope section
 */
export interface BenefitItem {
  icon: IconName;
  title: string;
  description: string;
}

/**
 * Service scope section content
 */
export interface ServiceScopeContent {
  title: string;
  description: string;
  services: ServiceItem[];
  benefits?: BenefitItem[];
  backgroundIcon?: string;
  keyBenefitsTitle?: string;
  keyBenefitsDescription?: string;
}

/**
 * Category for applications section
 */
export interface ApplicationCategory {
  title: string;
  icon: IconName;
  items: string[];
}

/**
 * Industry item for applications section
 */
export interface IndustryItem {
  title: string;
  icon: IconName;
  items: string[];
  backgroundIcon?: string;
}

/**
 * Applications section content
 */
export interface ApplicationsContent {
  title: string;
  description: string;
  categories: ApplicationCategory[];
  industries: IndustryItem[];
  backgroundIcon?: string;
  industrySolutionsTitle?: string;
  industrySolutionsDescription?: string;
}

/**
 * Process step for the process section
 */
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  items: string[];
  timeline: string;
  icon: IconName;
}

/**
 * Process section content
 */
export interface ProcessContent {
  title: string;
  description: string;
  steps: ProcessStep[];
  note: string;
  linkText?: string;
  linkUrl?: string;
}

/**
 * Price factor for pricing section
 */
export interface PriceFactor {
  title: string;
  icon: IconName;
  items: string[];
}

/**
 * Pricing section content
 */
export interface PricingContent {
  title: string;
  description: string;
  factors: PriceFactor[];
  longTermValue: {
    title: string;
    description: string;
    link?: {
      text: string;
      url: string;
    };
  };
}

/**
 * Benefit item for the benefits section
 */
export interface BenefitContent {
  title: string;
  description: string;
}

/**
 * Benefits section content
 */
export interface BenefitsContent {
  title: string;
  description: string;
  items: BenefitContent[];
}

/**
 * FAQ item for the FAQ section
 */
export interface FAQItem {
  question: string;
  answer: string;
  icon: IconName;
}

/**
 * FAQ section content
 */
export interface FAQContent {
  title: string;
  description: string;
  items: FAQItem[];
  moreLink?: {
    text: string;
    url: string;
  };
}

/**
 * CTA section content
 */
export interface CTAContent {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  bgClassName?: string;
}

/**
 * Service metadata
 */
export interface ServiceMetadata {
  title: string;
  description: string;
  slug: string;
}

/**
 * Template options
 */
export interface ServicePageTemplateOptions {
  skipSections?: ('hero' | 'valueProp' | 'serviceScope' | 'applications' | 'process' | 'pricing' | 'benefits' | 'faq' | 'cta')[];
  addSections?: {
    beforeValueProp?: ReactNode;
    afterValueProp?: ReactNode;
    afterServiceScope?: ReactNode;
    afterApplications?: ReactNode;
    afterProcess?: ReactNode;
    afterPricing?: ReactNode;
    afterBenefits?: ReactNode;
    afterFAQ?: ReactNode;
  };
  layoutVariant?: 'default' | 'compact' | 'expanded';
}