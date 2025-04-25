/**
 * Shared type definitions for full-service page templates.
 * Covers all content sections used across service pages including hero, value prop,
 * service scope, applications, process, pricing, benefits, FAQ, CTA, and metadata.
 */

import { CSSProperties, ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

/**
 * Base types for decorative elements used in hero backgrounds.
 * 
 * @type {string} IconName - Name of a Lucide icon.
 */
export type IconName = string; // Name of a Lucide icon

/**
 * Represents a decorative element in the hero section.
 * 
 * @interface DecorElement
 * @property {'icon' | 'circle' | 'square'} type - The type of decorative element.
 * @property {string} [className] - Optional custom class name for styling.
 * @property {CSSProperties} [style] - Optional inline styles for the element.
 * @property {LucideIcon | IconName} [icon] - Optional icon for the element.
 * @property {number} [size] - Optional size for the element.
 */
export interface DecorElement {
  type: 'icon' | 'circle' | 'square';
  className?: string;
  style?: CSSProperties;
  icon?: LucideIcon | IconName;
  size?: number;
}

/**
 * Represents the content of the hero section.
 * 
 * @interface HeroSectionContent
 * @property {string} title - The title of the hero section.
 * @property {string} subtitle - The subtitle of the hero section.
 * @property {string} description - The description of the hero section.
 * @property {string} image - The image for the hero section.
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
 * Represents a statistic used in the value proposition section.
 * 
 * @interface Statistic
 * @property {number} value - The numeric value of the statistic.
 * @property {string} [prefix] - Optional prefix for the statistic.
 * @property {string} [suffix] - Optional suffix for the statistic.
 * @property {string | ReactNode} description - The description of the statistic.
 */
export interface Statistic {
  value: number;
  prefix?: string;
  suffix?: string;
  description: string | ReactNode; // Allow for rich content
}

/**
 * Represents a data structure for inline statistics.
 * 
 * @interface StatData
 * @property {number} value - The numeric value of the statistic.
 * @property {string} [prefix] - Optional prefix for the statistic.
 * @property {string} [suffix] - Optional suffix for the statistic.
 */
export interface StatData {
  value: number;
  prefix?: string;
  suffix?: string;
}

/**
 * Represents industry trends in the value proposition section.
 * 
 * @interface IndustryTrend
 * @property {IconName} icon - The icon representing the industry trend.
 * @property {string} title - The title of the industry trend.
 * @property {string} description - The description of the industry trend.
 */
export interface IndustryTrend {
  icon: IconName;
  title: string;
  description: string;
}

/**
 * Represents market insights in the value proposition section.
 * 
 * @interface MarketInsight
 * @property {string} id - The unique identifier for the market insight.
 * @property {(string | StatData)[]} parts - An array of structured content parts, which can be either text or statistics.
 */
export interface MarketInsight {
  id: string;
  parts: (string | StatData)[]; // Structured content with interleaved text and stats
}

/**
 * Represents a call to action in the value proposition section.
 * 
 * @interface CallToAction
 * @property {string} title - The title of the call to action.
 * @property {string} description - A description of the call to action.
 * @property {string} buttonText - The text for the button.
 * @property {string} buttonLink - The link for the button.
 * @property {IconName} [buttonIcon] - Optional icon for the button.
 */
export interface CallToAction {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  buttonIcon?: IconName;
}

/**
 * Represents the content of the value proposition section.
 * 
 * @interface ValuePropContent
 * @property {string} title - The title of the value proposition section.
 * @property {string} description - A description of the value proposition.
 * @property {Statistic[]} [statistics] - Optional array of statistics related to the value proposition.
 * @property {IndustryTrend[]} industryTrends - An array of industry trends.
 * @property {string} [industryTrendsDescription] - Optional description for the industry trends section.
 * @property {MarketInsight[]} marketInsights - An array of market insights.
 * @property {CallToAction} callToAction - The call to action for the value proposition.
 * @property {{ beforeTrends?: ReactNode; afterTrends?: ReactNode; beforeCta?: ReactNode; }} [additionalContent] - Optional additional content for the section.
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
 * Represents a service item in the service scope section.
 * 
 * @interface ServiceItem
 * @property {IconName} icon - The icon representing the service.
 * @property {string} title - The title of the service item.
 * @property {string} description - A description of the service item.
 * @property {string[]} benefits - An array of benefits associated with the service item.
 */
export interface ServiceItem {
  icon: IconName;
  title: string;
  description: string;
  benefits: string[];
}

/**
 * Represents a benefit item in the service scope section.
 * 
 * @interface BenefitItem
 * @property {IconName} icon - The icon representing the benefit.
 * @property {string} title - The title of the benefit item.
 * @property {string} description - A description of the benefit item.
 */
export interface BenefitItem {
  icon: IconName;
  title: string;
  description: string;
}

/**
 * Represents the content of the service scope section.
 * 
 * @interface ServiceScopeContent
 * @property {string} title - The title of the service scope section.
 * @property {string} description - A description of the service scope.
 * @property {ServiceItem[]} services - An array of service items.
 * @property {BenefitItem[]} [benefits] - Optional array of benefit items.
 * @property {string} [backgroundIcon] - Optional background icon for the section.
 * @property {string} [keyBenefitsTitle] - Optional title for the key benefits section.
 * @property {string} [keyBenefitsDescription] - Optional description for the key benefits section.
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
 * Represents a category for the applications section.
 * 
 * @interface ApplicationCategory
 * @property {string} title - The title of the application category.
 * @property {IconName} icon - The icon representing the category.
 * @property {string[]} items - An array of items in the category.
 */
export interface ApplicationCategory {
  title: string;
  icon: IconName;
  items: string[];
}

/**
 * Represents an industry item for the applications section.
 * 
 * @interface IndustryItem
 * @property {string} title - The title of the industry item.
 * @property {IconName} icon - The icon representing the industry item.
 * @property {string[]} items - An array of items in the industry.
 * @property {string} [backgroundIcon] - Optional background icon for the industry item.
 */
export interface IndustryItem {
  title: string;
  icon: IconName;
  items: string[];
  backgroundIcon?: string;
}

/**
 * Represents the content of the applications section.
 * 
 * @interface ApplicationsContent
 * @property {string} title - The title of the applications section.
 * @property {string} description - A description of the applications section.
 * @property {ApplicationCategory[]} categories - An array of application categories.
 * @property {IndustryItem[]} industries - An array of industry items.
 * @property {string} [backgroundIcon] - Optional background icon for the section.
 * @property {string} [industrySolutionsTitle] - Optional title for the industry solutions section.
 * @property {string} [industrySolutionsDescription] - Optional description for the industry solutions section.
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
 * Represents a process step in the process section.
 * 
 * @interface ProcessStep
 * @property {number} step - The step number in the process.
 * @property {string} title - The title of the process step.
 * @property {string} description - A description of the process step.
 * @property {string[]} items - An array of items associated with the process step.
 * @property {string} timeline - The timeline for the process step.
 * @property {IconName} icon - The icon representing the process step.
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
 * Represents the content of the process section.
 * 
 * @interface ProcessContent
 * @property {string} title - The title of the process section.
 * @property {string} description - A description of the process section.
 * @property {ProcessStep[]} steps - An array of process steps.
 * @property {string} note - A note regarding the process.
 * @property {string} [linkText] - Optional text for a link related to the process.
 * @property {string} [linkUrl] - Optional URL for a link related to the process.
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
 * Represents a price factor in the pricing section.
 * 
 * @interface PriceFactor
 * @property {string} title - The title of the price factor.
 * @property {IconName} icon - The icon representing the price factor.
 * @property {string[]} items - An array of items associated with the price factor.
 */
export interface PriceFactor {
  title: string;
  icon: IconName;
  items: string[];
}

/**
 * Represents the content of the pricing section.
 * 
 * @interface PricingContent
 * @property {string} title - The title of the pricing section.
 * @property {string} description - A description of the pricing section.
 * @property {PriceFactor[]} factors - An array of price factors.
 * @property {Object} longTermValue - An object detailing the long-term value proposition.
 * @property {string} longTermValue.title - The title of the long-term value proposition.
 * @property {string} longTermValue.description - A description of the long-term value proposition.
 * @property {Object} [longTermValue.link] - Optional link for more information.
 * @property {string} longTermValue.link.text - The text for the link.
 * @property {string} longTermValue.link.url - The URL for the link.
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
 * Represents an advantage item for the InSite Advantage section.
 * 
 * @interface InSiteAdvantageItem
 * @property {string} title - The title of the advantage item.
 * @property {string} description - A description of the advantage item.
 * @property {string} icon - The icon representing the advantage item.
 */
export interface InSiteAdvantageItem {
  title: string;
  description: string;
  icon: string;
}

/**
 * Represents a benefit item for the InSite Advantage section.
 * 
 * @interface InSiteBenefitItem
 * @property {string} title - The title of the benefit item.
 * @property {string} description - A description of the benefit item.
 */
export interface InSiteBenefitItem {
  title: string;
  description: string;
}

/**
 * Represents the content of the InSite Advantage section.
 * 
 * @interface InSiteAdvantageContent
 * @property {string} title - The title of the InSite Advantage section.
 * @property {string} description - A description of the InSite Advantage section.
 * @property {InSiteAdvantageItem[]} advantages - An array of advantages.
 * @property {InSiteBenefitItem[]} benefits - An array of benefits.
 */
export interface InSiteAdvantageContent {
  title: string;
  description: string;
  advantages: InSiteAdvantageItem[];
  benefits: InSiteBenefitItem[];
}

/**
 * Represents an FAQ item for the FAQ section.
 * 
 * @interface FAQItem
 * @property {string} question - The question for the FAQ item.
 * @property {string} answer - The answer for the FAQ item.
 * @property {IconName} icon - The icon representing the FAQ item.
 */
export interface FAQItem {
  question: string;
  answer: string;
  icon: IconName;
}

/**
 * Represents the content of the FAQ section.
 * 
 * @interface FAQContent
 * @property {string} title - The title of the FAQ section.
 * @property {string} description - A description of the FAQ section.
 * @property {FAQItem[]} items - An array of FAQ items.
 * @property {Object} [moreLink] - Optional link for more FAQ information.
 * @property {string} moreLink.text - The text for the link.
 * @property {string} moreLink.url - The URL for the link.
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
 * Represents the content of the CTA section.
 * 
 * @interface CTAContent
 * @property {string} title - The title of the CTA section.
 * @property {string} description - A description of the CTA section.
 * @property {string} primaryButtonText - The text for the primary button.
 * @property {string} primaryButtonLink - The link for the primary button.
 * @property {string} [secondaryButtonText] - Optional text for the secondary button.
 * @property {string} [secondaryButtonLink] - Optional link for the secondary button.
 * @property {string} [bgClassName] - Optional custom background classes for the CTA section.
 */
export interface CTAContent {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  bgClassName?: string;
}

/**
 * Represents the metadata for a service.
 * 
 * @interface ServiceMetadata
 * @property {string} title - The title of the service.
 * @property {string} description - A description of the service.
 * @property {string} slug - A URL-friendly identifier for the service.
 */
export interface ServiceMetadata {
  title: string;
  description: string;
  slug: string;
}

/**
 * Represents options for service page templates.
 * 
 * @interface ServicePageTemplateOptions
 * @property {('hero' | 'valueProp' | 'serviceScope' | 'applications' | 'process' | 'pricing' | 'insiteAdvantage' | 'faq' | 'cta')[]} [skipSections] - Sections to skip in the template.
 * @property {Object} [addSections] - Sections to add to the template.
 * @property {ReactNode} [addSections.beforeValueProp] - Content to add before the value proposition section.
 * @property {ReactNode} [addSections.afterValueProp] - Content to add after the value proposition section.
 * @property {ReactNode} [addSections.afterServiceScope] - Content to add after the service scope section.
 * @property {ReactNode} [addSections.afterApplications] - Content to add after the applications section.
 * @property {ReactNode} [addSections.afterProcess] - Content to add after the process section.
 * @property {ReactNode} [addSections.afterPricing] - Content to add after the pricing section.
 * @property {ReactNode} [addSections.afterBenefits] - Content to add after the benefits section.
 * @property {ReactNode} [addSections.afterFAQ] - Content to add after the FAQ section.
 * @property {'default' | 'compact' | 'expanded'} [layoutVariant] - The layout variant for the service page.
 */
export interface ServicePageTemplateOptions {
  skipSections?: ('hero' | 'valueProp' | 'serviceScope' | 'applications' | 'process' | 'pricing' | 'insiteAdvantage' | 'faq' | 'cta')[];
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