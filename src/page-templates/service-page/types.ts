/**
 * @fileoverview Type definitions for service page templates
 * 
 * This module provides comprehensive TypeScript interfaces and types for all sections
 * of service pages. These types ensure type safety and consistency across the service
 * page template system.
 * 
 * The types are organized by section:
 * - Hero section (HeroSectionContent, DecorElement)
 * - Value proposition (ValuePropContent, Statistic, MarketInsight)
 * - Service scope (ServiceScopeContent, ServiceItem, BenefitItem)
 * - Applications (ApplicationsContent, ApplicationCategory, IndustryItem)
 * - Process (ProcessContent, ProcessStep)
 * - Pricing (PricingContent, PriceFactor)
 * - InSite Advantage (InSiteAdvantageContent, InSiteAdvantageItem)
 * - FAQ (FAQContent, FAQItem)
 * - CTA (CTAContent)
 * - Template options (ServicePageTemplateOptions)
 */

import { CSSProperties, ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

/**
 * Base type for Lucide icon names used throughout the service page components
 * 
 * @type {string} IconName - String identifier for a Lucide icon component
 */
export type IconName = string;

/**
 * Represents a decorative element in the hero section background
 * 
 * @interface DecorElement
 * @property {'icon' | 'circle' | 'square'} type - The type of decorative element to render
 * @property {string} [className] - Optional CSS classes for custom styling
 * @property {CSSProperties} [style] - Optional inline styles for positioning and appearance
 * @property {LucideIcon | IconName} [icon] - Icon component or name (required for 'icon' type)
 * @property {number} [size] - Size of the element in pixels
 */
export interface DecorElement {
  type: 'icon' | 'circle' | 'square';
  className?: string;
  style?: CSSProperties;
  icon?: LucideIcon | IconName;
  size?: number;
}

/**
 * Configuration object for the hero section of service pages
 * 
 * @interface HeroSectionContent
 * @property {string} title - Main heading displayed prominently in the hero
 * @property {string} subtitle - Secondary heading that complements the title
 * @property {string} description - Detailed description of the service offering
 * @property {string} [image] - Optional static image URL (fallback for SVG)
 * @property {string} [svgComponent] - Optional SVG component name for dynamic loading
 * @property {string} [ctaText] - Call-to-action button text (defaults to "Start Your Project Today")
 * @property {string} [ctaLink] - Call-to-action button link (defaults to "/contact")
 * @property {DecorElement[]} [decorElements] - Optional decorative background elements
 * @property {string} [bgClassName] - Optional custom background CSS classes
 * @property {ReactNode} [customElements] - Optional custom React elements for advanced layouts
 */
export interface HeroSectionContent {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  svgComponent?: string;
  ctaText?: string;
  ctaLink?: string;
  decorElements?: DecorElement[];
  bgClassName?: string;
  customElements?: ReactNode;
}

/**
 * Represents a statistic with value and descriptive text
 * 
 * @interface Statistic
 * @property {number} value - The numeric value of the statistic
 * @property {string} [prefix] - Optional prefix (e.g., "$", "+")
 * @property {string} [suffix] - Optional suffix (e.g., "%", "M", "K")
 * @property {string | ReactNode} description - Descriptive text or rich content explaining the statistic
 */
export interface Statistic {
  value: number;
  prefix?: string;
  suffix?: string;
  description: string | ReactNode;
}

/**
 * Simplified statistic data structure for inline display
 * 
 * @interface StatData
 * @property {number} value - The numeric value
 * @property {string} [prefix] - Optional prefix for the value
 * @property {string} [suffix] - Optional suffix for the value
 */
export interface StatData {
  value: number;
  prefix?: string;
  suffix?: string;
}

/**
 * Represents an industry trend item with icon and description
 * 
 * @interface IndustryTrend
 * @property {IconName} icon - Icon representing the trend
 * @property {string} title - Title of the trend
 * @property {string} description - Detailed description of the trend
 */
export interface IndustryTrend {
  icon: IconName;
  title: string;
  description: string;
}

/**
 * Market insight with structured content supporting interleaved text and statistics
 * 
 * @interface MarketInsight
 * @property {string} id - Unique identifier for the insight
 * @property {(string | StatData)[]} parts - Array of content parts (text strings or statistics)
 */
export interface MarketInsight {
  id: string;
  parts: (string | StatData)[];
}

/**
 * Call-to-action configuration for value proposition sections
 * 
 * @interface CallToAction
 * @property {string} title - CTA heading
 * @property {string} description - CTA descriptive text
 * @property {string} buttonText - Button label
 * @property {string} buttonLink - Button destination URL
 * @property {IconName} [buttonIcon] - Optional button icon
 */
export interface CallToAction {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  buttonIcon?: IconName;
}

/**
 * Content configuration for the value proposition section
 * 
 * @interface ValuePropContent
 * @property {string} title - Section heading
 * @property {string} description - Section description
 * @property {Statistic[]} [statistics] - Optional array of key statistics
 * @property {IndustryTrend[]} industryTrends - Array of relevant industry trends
 * @property {string} [industryTrendsDescription] - Optional description for trends section
 * @property {MarketInsight[]} marketInsights - Array of market insights with statistics
 * @property {CallToAction} callToAction - Section call-to-action configuration
 * @property {Object} [comparisonTable] - Optional comparison table data
 * @property {string} [comparisonTable.title] - Table title
 * @property {string[]} [comparisonTable.headers] - Table column headers
 * @property {Object[]} [comparisonTable.rows] - Table row data with dynamic columns
 * @property {Object} [additionalContent] - Optional additional content insertion points
 * @property {ReactNode} [additionalContent.beforeTrends] - Content before trends section
 * @property {ReactNode} [additionalContent.afterTrends] - Content after trends section
 * @property {ReactNode} [additionalContent.beforeCta] - Content before CTA section
 */
export interface ValuePropContent {
  title: string;
  description: string;
  statistics?: Statistic[];
  industryTrends: IndustryTrend[];
  industryTrendsDescription?: string;
  marketInsights: MarketInsight[];
  callToAction: CallToAction;
  comparisonTable?: {
    title: string;
    headers: string[];
    rows: {
      [key: string]: string;
    }[];
  };
  additionalContent?: {
    beforeTrends?: ReactNode;
    afterTrends?: ReactNode;
    beforeCta?: ReactNode;
  };
}

/**
 * Represents an individual service offering with benefits
 * 
 * @interface ServiceItem
 * @property {IconName} icon - Icon representing the service
 * @property {string} title - Service name
 * @property {string} description - Service description
 * @property {string[]} benefits - Array of service benefits
 */
export interface ServiceItem {
  icon: IconName;
  title: string;
  description: string;
  benefits: string[];
}

/**
 * Represents a key benefit with icon and description
 * 
 * @interface BenefitItem
 * @property {IconName} icon - Icon representing the benefit
 * @property {string} title - Benefit title
 * @property {string} description - Benefit description
 */
export interface BenefitItem {
  icon: IconName;
  title: string;
  description: string;
}

/**
 * Content configuration for the service scope section
 * 
 * @interface ServiceScopeContent
 * @property {string} title - Section heading
 * @property {string} description - Section description
 * @property {ServiceItem[]} services - Array of service offerings
 * @property {BenefitItem[]} [benefits] - Optional array of key benefits
 * @property {string} [backgroundIcon] - Optional background icon name
 * @property {number} [backgroundIconWidth] - Optional background icon width
 * @property {number} [backgroundIconHeight] - Optional background icon height
 * @property {string} [keyBenefitsTitle] - Optional benefits subsection title
 * @property {string} [keyBenefitsDescription] - Optional benefits subsection description
 */
export interface ServiceScopeContent {
  title: string;
  description: string;
  services: ServiceItem[];
  benefits?: BenefitItem[];
  backgroundIcon?: string;
  backgroundIconWidth?: number;
  backgroundIconHeight?: number;
  keyBenefitsTitle?: string;
  keyBenefitsDescription?: string;
}

/**
 * Represents a category of applications with related items
 * 
 * @interface ApplicationCategory
 * @property {string} title - Category name
 * @property {IconName} icon - Category icon
 * @property {string[]} items - Array of application examples
 */
export interface ApplicationCategory {
  title: string;
  icon: IconName;
  items: string[];
}

/**
 * Represents industry-specific solutions and use cases
 * 
 * @interface IndustryItem
 * @property {string} title - Industry name
 * @property {IconName} icon - Industry icon
 * @property {string[]} items - Array of industry-specific applications
 * @property {string} [backgroundIcon] - Optional background icon for visual enhancement
 */
export interface IndustryItem {
  title: string;
  icon: IconName;
  items: string[];
  backgroundIcon?: string;
}

/**
 * Content configuration for the applications section
 * 
 * @interface ApplicationsContent
 * @property {string} title - Section heading
 * @property {string} description - Section description
 * @property {ApplicationCategory[]} categories - Array of application categories
 * @property {IndustryItem[]} industries - Array of industry-specific solutions
 * @property {string} [backgroundIcon] - Optional section background icon
 * @property {number} [backgroundIconWidth] - Optional background icon width
 * @property {number} [backgroundIconHeight] - Optional background icon height
 * @property {string} [industrySolutionsTitle] - Optional industry subsection title
 * @property {string} [industrySolutionsDescription] - Optional industry subsection description
 */
export interface ApplicationsContent {
  title: string;
  description: string;
  categories: ApplicationCategory[];
  industries: IndustryItem[];
  backgroundIcon?: string;
  backgroundIconWidth?: number;
  backgroundIconHeight?: number;
  industrySolutionsTitle?: string;
  industrySolutionsDescription?: string;
}

/**
 * Represents a step in the service delivery process
 * 
 * @interface ProcessStep
 * @property {number} step - Step number in the sequence
 * @property {string} title - Step title
 * @property {string} description - Step description
 * @property {string[]} items - Array of activities or deliverables for this step
 * @property {string} timeline - Expected duration or timeline
 * @property {IconName} icon - Icon representing the step
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
 * Content configuration for the process section
 * 
 * @interface ProcessContent
 * @property {string} title - Section heading
 * @property {string} description - Section description
 * @property {ProcessStep[]} steps - Array of process steps
 * @property {string} note - Additional notes about the process
 * @property {string} [linkText] - Optional link text for more information
 * @property {string} [linkUrl] - Optional link URL for more information
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
 * Represents a factor that influences pricing
 * 
 * @interface PriceFactor
 * @property {string} title - Factor name
 * @property {IconName} icon - Factor icon
 * @property {string[]} items - Array of specific considerations for this factor
 */
export interface PriceFactor {
  title: string;
  icon: IconName;
  items: string[];
}

/**
 * Content configuration for the pricing section
 * 
 * @interface PricingContent
 * @property {string} title - Section heading
 * @property {string} description - Section description
 * @property {PriceFactor[]} factors - Array of pricing factors
 * @property {Object} longTermValue - Long-term value proposition
 * @property {string} longTermValue.title - Value proposition title
 * @property {string} longTermValue.description - Value proposition description
 * @property {Object} [longTermValue.link] - Optional link for more information
 * @property {string} longTermValue.link.text - Link text
 * @property {string} longTermValue.link.url - Link URL
 * @property {string} serviceType - Service type identifier for price calculator integration
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
  serviceType: string;
}

/**
 * Represents an InSite company advantage with icon and description
 * 
 * @interface InSiteAdvantageItem
 * @property {string} title - Advantage title
 * @property {string} description - Advantage description
 * @property {string} icon - Icon name representing the advantage
 */
export interface InSiteAdvantageItem {
  title: string;
  description: string;
  icon: string;
}

/**
 * Represents a client benefit from working with InSite
 * 
 * @interface InSiteBenefitItem
 * @property {string} title - Benefit title
 * @property {string} description - Benefit description
 */
export interface InSiteBenefitItem {
  title: string;
  description: string;
}

/**
 * Content configuration for the InSite Advantage section
 * 
 * @interface InSiteAdvantageContent
 * @property {string} title - Section heading
 * @property {string} description - Section description
 * @property {InSiteAdvantageItem[]} advantages - Array of company advantages
 * @property {InSiteBenefitItem[]} [benefits] - Optional array of client benefits
 */
export interface InSiteAdvantageContent {
  title: string;
  description: string;
  advantages: InSiteAdvantageItem[];
  benefits?: InSiteBenefitItem[];
}

/**
 * Represents a frequently asked question with answer
 * 
 * @interface FAQItem
 * @property {string} question - The question text
 * @property {string} answer - The answer text
 * @property {IconName} icon - Icon representing the question category
 */
export interface FAQItem {
  question: string;
  answer: string;
  icon: IconName;
}

/**
 * Content configuration for the FAQ section
 * 
 * @interface FAQContent
 * @property {string} title - Section heading
 * @property {string} description - Section description
 * @property {FAQItem[]} items - Array of FAQ items
 * @property {Object} [moreLink] - Optional link to additional FAQ resources
 * @property {string} moreLink.text - Link text
 * @property {string} moreLink.url - Link URL
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
 * Content configuration for the call-to-action section
 * 
 * @interface CTAContent
 * @property {string} title - CTA heading
 * @property {string} description - CTA description
 * @property {string} primaryButtonText - Primary button label
 * @property {string} primaryButtonLink - Primary button destination
 * @property {string} [secondaryButtonText] - Optional secondary button label
 * @property {string} [secondaryButtonLink] - Optional secondary button destination
 * @property {string} [bgClassName] - Optional custom background CSS classes
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
 * Metadata for service pages (used for SEO and navigation)
 * 
 * @interface ServiceMetadata
 * @property {string} title - Service title for meta tags
 * @property {string} description - Service description for meta tags
 * @property {string} slug - URL-friendly identifier for routing
 */
export interface ServiceMetadata {
  title: string;
  description: string;
  slug: string;
}

/**
 * Table of contents item for service overview sections
 * 
 * @interface TOCItem
 * @property {string} title - Display text for the TOC link
 * @property {string} anchor - Anchor ID to link to (without #)
 */
export interface TOCItem {
  title: string;
  anchor: string;
}

/**
 * Content configuration for the service overview section
 * 
 * @interface ServiceOverviewContent
 * @property {string} markdownText - Main content in Markdown format
 * @property {TOCItem[]} tocItems - Array of table of contents items
 */
export interface ServiceOverviewContent {
  markdownText: string;
  tocItems: TOCItem[];
}

/**
 * Configuration options for service page template behavior and layout
 * 
 * @interface ServicePageTemplateOptions
 * @property {SectionName[]} [skipSections] - Array of section names to exclude from rendering
 * @property {Object} [addSections] - Custom content injection points
 * @property {ReactNode} [addSections.beforeHero] - Content before hero section
 * @property {ReactNode} [addSections.afterHero] - Content after hero section
 * @property {ReactNode} [addSections.beforeServiceOverview] - Content before service overview
 * @property {ReactNode} [addSections.afterServiceOverview] - Content after service overview
 * @property {ReactNode} [addSections.beforeValueProp] - Content before value proposition
 * @property {ReactNode} [addSections.afterValueProp] - Content after value proposition
 * @property {ReactNode} [addSections.afterServiceScope] - Content after service scope
 * @property {ReactNode} [addSections.afterApplications] - Content after applications
 * @property {ReactNode} [addSections.afterProcess] - Content after process
 * @property {ReactNode} [addSections.afterPricing] - Content after pricing
 * @property {ReactNode} [addSections.afterBenefits] - Content after benefits/advantages
 * @property {ReactNode} [addSections.afterFAQ] - Content after FAQ
 * @property {'default' | 'compact' | 'expanded'} [layoutVariant] - Layout variant for responsive behavior
 */
export interface ServicePageTemplateOptions {
  skipSections?: ('hero' | 'serviceOverview' | 'valueProp' | 'serviceScope' | 'applications' | 'process' | 'pricing' | 'insiteAdvantage' | 'faq' | 'cta')[];
  addSections?: {
    beforeHero?: ReactNode;
    afterHero?: ReactNode;
    beforeServiceOverview?: ReactNode;
    afterServiceOverview?: ReactNode;
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