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
  icon?: IconName | LucideIcon;
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
 * Types for industry trends in value prop section
 */
export interface IndustryTrend {
  icon: IconName | LucideIcon;
  title: string;
  description: string;
}

/**
 * Types for market insights in value prop section
 */
export interface MarketInsight {
  id: string;
  content: string | ReactNode; // Allow for rich content including inline stats
}

/**
 * Call to action in value prop section
 */
export interface CallToAction {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

/**
 * Value proposition section - flexible to allow additional content
 */
export interface ValuePropContent {
  title: string;
  description: string;
  statistics?: Statistic[];
  industryTrends: IndustryTrend[];
  marketInsights: MarketInsight[];
  callToAction: CallToAction;
  additionalContent?: {
    beforeTrends?: ReactNode;
    afterTrends?: ReactNode;
    beforeCta?: ReactNode;
  };
}

/**
 * Service scope section content
 */
export interface ServiceScopeContent {
  title: string;
  description: string;
  services: {
    icon: IconName | LucideIcon;
    title: string;
    description: string;
    benefits: string[];
  }[];
  benefits?: {
    icon: IconName | LucideIcon;
    title: string;
    description: string;
  }[];
}

/**
 * Applications section content
 */
export interface ApplicationsContent {
  title: string;
  description: string;
  categories: {
    title: string;
    icon: IconName | LucideIcon;
    items: string[];
  }[];
  industries: {
    title: string;
    icon: IconName | LucideIcon;
    items: string[];
  }[];
}

/**
 * Process section content
 */
export interface ProcessContent {
  title: string;
  description: string;
  steps: {
    step: number;
    title: string;
    description: string;
    items: string[];
    timeline: string;
    icon: IconName | LucideIcon;
  }[];
  note?: string;
}

/**
 * Pricing section content
 */
export interface PricingContent {
  title: string;
  description: string;
  factors: {
    title: string;
    icon: IconName | LucideIcon;
    items: string[];
  }[];
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
 * Benefits section content
 */
export interface BenefitsContent {
  title: string;
  description: string;
  items: {
    title: string;
    description: string;
  }[];
}

/**
 * FAQ section content
 */
export interface FAQContent {
  title: string;
  description: string;
  items: {
    question: string;
    answer: string;
    icon: IconName | LucideIcon;
  }[];
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
 * Complete service content structure
 */
export interface ServiceContent {
  metadata: {
    title: string;
    description: string;
    slug: string;
  };
  hero: HeroSectionContent;
  valueProp: ValuePropContent;
  serviceScope: ServiceScopeContent;
  applications: ApplicationsContent;
  process: ProcessContent;
  pricing: PricingContent;
  benefits: BenefitsContent;
  faq: FAQContent;
  cta: CTAContent;
}

/**
 * Template options
 */
export interface ServicePageTemplateOptions {
  skipSections?: ('hero' | 'valueProp' | 'serviceScope' | 'applications' | 'process' | 'pricing' | 'benefits' | 'faq' | 'cta')[];
  addSections?: Record<string, ReactNode>;
  layoutVariant?: 'default' | 'compact' | 'expanded';
}