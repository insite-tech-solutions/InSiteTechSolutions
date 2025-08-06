/**
 * @fileoverview Service Badge Utilities and Configuration
 *
 * This module provides a comprehensive system for managing service category badges
 * with consistent styling, colors, and navigation across the application. It includes
 * type definitions, utility functions, and configuration for all service categories.
 *
 * Key Features:
 * - Centralized service category definitions with consistent branding
 * - Type-safe color and styling utilities
 * - Dynamic badge sizing and styling options
 * - Service page URL mapping and navigation
 * - Fallback handling for unknown categories
 * - Responsive design support with Tailwind CSS classes
 *
 * Service Categories:
 * - Custom Software Solutions
 * - Web & App Development
 * - SEO & Online Marketing
 * - Data Analysis
 * - AI & Automation
 * - Graphic Design & Branding
 * - Consulting & Training
 *
 * Technical Implementation:
 * - TypeScript interfaces for type safety
 * - Tailwind CSS color classes for consistent styling
 * - Utility functions for dynamic badge generation
 * - URL mapping for service page navigation
 * - Default fallback values for error handling
 * 
 * @module service-badges
 */

/**
 * ServiceCategory Interface
 * 
 * Defines the structure for service category configuration including
 * display name, color values, and styling classes for consistent
 * badge rendering across the application.
 * 
 * @interface ServiceCategory
 * @property {string} name - Human-readable service category name
 * @property {string} color - Hex color value for the category
 * @property {string} bgColor - Tailwind CSS background color class
 * @property {string} textColor - Tailwind CSS text color class
 * 
 * @example
 * ```typescript
 * const category: ServiceCategory = {
 *   name: 'Custom Software',
 *   color: '#27DEBF',
 *   bgColor: 'bg-[#27DEBF]',
 *   textColor: 'text-white'
 * };
 * ```
 */
export interface ServiceCategory {
  name: string;
  color: string;
  bgColor: string;
  textColor: string;
}

/**
 * Service Categories Configuration
 * 
 * Centralized array containing all service category definitions with
 * consistent color schemes and styling. Each category includes a unique
 * color palette that maintains brand consistency across the application.
 * 
 * Color Scheme:
 * - Custom Software: Teal (#27DEBF)
 * - Web & App Development: Purple (#B265CD)
 * - SEO & Marketing: Blue (#5885EA)
 * - Data Analysis: Deep Purple (#592FE0)
 * - AI & Automation: Gold (#E5D57E)
 * - Design & Branding: Orange (#FE5D02)
 * - Consulting & Training: Green (#127F41)
 * 
 * @constant {ServiceCategory[]}
 */
export const serviceCategories: ServiceCategory[] = [
  {
    name: 'Custom Software',
    color: '#27DEBF',
    bgColor: 'bg-[#27DEBF]',
    textColor: 'text-white'
  },
  {
    name: 'Web & App Development',
    color: '#B265CD',
    bgColor: 'bg-[#B265CD]',
    textColor: 'text-white'
  },
  {
    name: 'SEO & Marketing',
    color: '#5885EA',
    bgColor: 'bg-[#5885EA]',
    textColor: 'text-white'
  },
  {
    name: 'Data Analysis',
    color: '#592FE0',
    bgColor: 'bg-[#592FE0]',
    textColor: 'text-white'
  },
  {
    name: 'AI & Automation',
    color: '#E5D57E',
    bgColor: 'bg-[#E5D57E]',
    textColor: 'text-white'
  },
  {
    name: 'Design & Branding',
    color: '#FE5D02',
    bgColor: 'bg-[#FE5D02]',
    textColor: 'text-white'
  },
  {
    name: 'Consulting & Training',
    color: '#127F41',
    bgColor: 'bg-[#127F41]',
    textColor: 'text-white'
  }
];

/**
 * Get Service Category by Name
 * 
 * Retrieves a service category configuration object by its display name.
 * Performs case-insensitive matching to handle variations in naming.
 * 
 * Features:
 * - Case-insensitive name matching
 * - Returns undefined for unknown categories
 * - Type-safe return value
 * 
 * @function getServiceCategory
 * @param {string} name - The service category name to search for
 * @returns {ServiceCategory | undefined} The matching category or undefined if not found
 * 
 * @example
 * ```typescript
 * const category = getServiceCategory('Custom Software');
 * // Returns the Custom Software category object
 * 
 * const unknown = getServiceCategory('Unknown Service');
 * // Returns undefined
 * ```
 */
export function getServiceCategory(name: string): ServiceCategory | undefined {
  return serviceCategories.find(category => 
    category.name.toLowerCase() === name.toLowerCase()
  );
}

/**
 * Get Service Category Color
 * 
 * Retrieves the hex color value for a service category by name.
 * Provides a default gray color for unknown categories.
 * 
 * Features:
 * - Direct color value access
 * - Fallback to default gray (#6B7280)
 * - Case-insensitive category matching
 * 
 * @function getServiceColor
 * @param {string} name - The service category name
 * @returns {string} Hex color value for the category or default gray
 * 
 * @example
 * ```typescript
 * const color = getServiceColor('Custom Software');
 * // Returns '#27DEBF'
 * 
 * const defaultColor = getServiceColor('Unknown');
 * // Returns '#6B7280'
 * ```
 */
export function getServiceColor(name: string): string {
  const category = getServiceCategory(name);
  return category?.color || '#6B7280'; // Default gray
}

/**
 * Get Service Category Background Color Class
 * 
 * Retrieves the Tailwind CSS background color class for a service category.
 * Useful for applying consistent styling in components.
 * 
 * Features:
 * - Tailwind CSS class generation
 * - Fallback to gray-500 for unknown categories
 * - Consistent with design system
 * 
 * @function getServiceBgColor
 * @param {string} name - The service category name
 * @returns {string} Tailwind CSS background color class
 * 
 * @example
 * ```typescript
 * const bgClass = getServiceBgColor('Custom Software');
 * // Returns 'bg-[#27DEBF]'
 * 
 * const defaultClass = getServiceBgColor('Unknown');
 * // Returns 'bg-gray-500'
 * ```
 */
export function getServiceBgColor(name: string): string {
  const category = getServiceCategory(name);
  return category?.bgColor || 'bg-gray-500';
}

/**
 * Get Service Category Text Color Class
 * 
 * Retrieves the Tailwind CSS text color class for a service category.
 * Ensures proper contrast and readability for badge text.
 * 
 * Features:
 * - Tailwind CSS text color class
 * - Consistent white text for all categories
 * - Fallback to white for unknown categories
 * 
 * @function getServiceTextColor
 * @param {string} name - The service category name
 * @returns {string} Tailwind CSS text color class
 * 
 * @example
 * ```typescript
 * const textClass = getServiceTextColor('Custom Software');
 * // Returns 'text-white'
 * ```
 */
export function getServiceTextColor(name: string): string {
  const category = getServiceCategory(name);
  return category?.textColor || 'text-white';
}

/**
 * Get Service Page URL
 * 
 * Maps service category names to their corresponding page URLs
 * for navigation purposes. Provides a fallback hash for unknown categories.
 * 
 * URL Mapping:
 * - Custom Software → /services/custom-software-solutions
 * - Web & App Development → /services/web-and-app-development
 * - SEO & Marketing → /services/seo-and-online-marketing
 * - Data Analysis → /services/data-analysis
 * - AI & Automation → /services/ai-and-automation
 * - Design & Branding → /services/graphic-design-and-branding
 * - Consulting & Training → /services/consulting-and-training
 * 
 * Features:
 * - Direct URL mapping for known categories
 * - Fallback to '#' for unknown categories
 * - Consistent with Next.js routing structure
 * 
 * @function getServicePageUrl
 * @param {string} category - The service category name
 * @returns {string} The corresponding service page URL or '#'
 * 
 * @example
 * ```typescript
 * const url = getServicePageUrl('Custom Software');
 * // Returns '/services/custom-software-solutions'
 * 
 * const fallback = getServicePageUrl('Unknown');
 * // Returns '#'
 * ```
 */
export function getServicePageUrl(category: string): string {
  const categoryMap: { [key: string]: string } = {
    'Custom Software': '/services/custom-software-solutions',
    'Web & App Development': '/services/web-and-app-development',
    'SEO & Marketing': '/services/seo-and-online-marketing',
    'Data Analysis': '/services/data-analysis',
    'AI & Automation': '/services/ai-and-automation',
    'Design & Branding': '/services/graphic-design-and-branding',
    'Consulting & Training': '/services/consulting-and-training'
  };
  
  return categoryMap[category] || '#';
}

/**
 * Service Badge Component Props Interface
 * 
 * Defines the props structure for service badge components,
 * providing flexible configuration options for different use cases.
 * 
 * @interface ServiceBadgeProps
 * @property {string} category - The service category name
 * @property {string} [className] - Additional CSS classes for customization
 * @property {'sm' | 'md' | 'lg'} [size] - Badge size variant (default: 'md')
 * @property {string} [href] - Optional link URL for clickable badges
 * 
 * @example
 * ```typescript
 * const badgeProps: ServiceBadgeProps = {
 *   category: 'Custom Software',
 *   size: 'lg',
 *   className: 'rounded-full',
 *   href: '/services/custom-software-solutions'
 * };
 * ```
 */
export interface ServiceBadgeProps {
  category: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

/**
 * Get Badge Size Classes
 * 
 * Generates appropriate Tailwind CSS classes for different badge sizes.
 * Provides consistent sizing across the application.
 * 
 * Size Variants:
 * - sm: Small badges (px-2 py-1 text-xs)
 * - md: Medium badges (px-3 py-1 text-sm) - default
 * - lg: Large badges (px-4 py-2 text-base)
 * 
 * Features:
 * - Responsive sizing options
 * - Consistent padding and text sizing
 * - Tailwind CSS class generation
 * 
 * @function getBadgeSizeClasses
 * @param {'sm' | 'md' | 'lg'} [size='md'] - The desired badge size
 * @returns {string} Tailwind CSS classes for the specified size
 * 
 * @example
 * ```typescript
 * const smallClasses = getBadgeSizeClasses('sm');
 * // Returns 'px-2 py-1 text-xs'
 * 
 * const defaultClasses = getBadgeSizeClasses();
 * // Returns 'px-3 py-1 text-sm'
 * 
 * const largeClasses = getBadgeSizeClasses('lg');
 * // Returns 'px-4 py-2 text-base'
 * ```
 */
export function getBadgeSizeClasses(size: 'sm' | 'md' | 'lg' = 'md'): string {
  switch (size) {
    case 'sm':
      return 'px-2 py-1 text-xs';
    case 'lg':
      return 'px-4 py-2 text-base';
    default:
      return 'px-3 py-1 text-sm';
  }
} 