/**
 * @fileoverview Site Header Menu Items Configuration
 * 
 * Defines the main navigation structure for the site header.
 * Contains all menu items including main navigation, submenus,
 * and nested navigation structures for both desktop and mobile navigation.
 * 
 * Features:
 * - Complete navigation structure with main menu items
 * - Nested submenu support for dropdown navigation
 * - Organized menu hierarchy for About, Services, and InSites sections
 * - Type-safe menu item structure using MenuItem interface
 * - Consistent URL mapping for all navigation items
 * - Support for both desktop and mobile navigation rendering
 * 
 * Navigation Structure:
 * - About: Company information, process, pricing, portfolio, legal
 * - Services: All service offerings with individual pages
 * - InSites: FAQ and blog sections
 * - Contact: Direct contact page link
 * 
 * @module MenuItems
 */

import { MenuItem } from './types';

/**
 * Array of menu items representing the main navigation structure
 * 
 * Defines the complete navigation hierarchy for the site header.
 * Each item can have a name, href, and optional submenu for dropdown
 * navigation. Supports nested navigation for complex menu structures.
 * 
 * Navigation Sections:
 * - About: Company information and resources
 * - Services: All service offerings with detailed pages
 * - InSites: FAQ and blog content sections
 * - Contact: Direct contact and inquiry page
 * 
 * @constant {MenuItem[]} menuItems
 * 
 * @example
 * ```tsx
 * // Access menu items in components
 * import { menuItems } from './menu-items'
 * 
 * // Use in navigation components
 * <DesktopNav menuItems={menuItems} />
 * <MobileMenu items={menuItems} />
 * ```
 */
export const menuItems: MenuItem[] = [
  // Home page is handled by logo/brand link, not included in main menu
  //{ name: 'Home', href: '/' },
  
  // About section with company information and resources
  {
    name: 'About',
    href: '/about',
    submenu: [
      { name: 'About us', href: '/about/about-us' },
      { name: 'Development Process', href: '/about/development-process' },
      { name: 'Pricing & Payments', href: '/about/pricing-and-payments' },
      { name: 'Previous Works', href: '/about/previous-works' },
      { name: 'Privacy Policy & Terms of Service', href: '/about/privacy-policy-and-terms-of-service' },
    ],
  },
  
  // Services section with all service offerings
  {
    name: 'Services',
    href: '/services',
    submenu: [
      { name: 'Web & App Development', href: '/services/web-and-app-development' },
      { name: 'Custom Software Solutions', href: '/services/custom-software-solutions' },
      { name: 'SEO & Online Marketing', href: '/services/seo-and-online-marketing' },
      { name: 'Graphic Design & Branding', href: '/services/graphic-design-and-branding' },
      { name: 'Data Analysis', href: '/services/data-analysis' },
      { name: 'AI & Automation', href: '/services/ai-and-automation' },
      { name: 'Consulting & Training', href: '/services/consulting-and-training' },
    ],
  },
  
  // InSites section with FAQ and blog content
  {
    name: 'InSites',
    href: '/insites',
    submenu: [
      { name: 'FAQ', href: '/insites/faq' },
      { name: 'Blog', href: '/insites/blog' },
    ],
  },
  
  // Contact page for direct inquiries
  { name: 'Contact', href: '/contact' },
];