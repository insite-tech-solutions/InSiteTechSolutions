import { MenuItem } from './types';

/**
 * Array of menu items representing the main navigation structure.
 * Each item can have a name, href, and optional submenu.
 */
export const menuItems: MenuItem[] = [
  //{ name: 'Home', href: '/' },
  {
    name: 'About',
    href: '/about',
    submenu: [
      { name: 'About us', href: '/about/us' },
      { name: 'Development Process', href: '/about/process' },
      { name: 'Pricing & Payments', href: '/about/pricing-and-payments' },
      { name: 'Previous Works', href: '/about/works' },
      { name: 'Privacy Policy & Terms of Service', href: '/about/terms' },
    ],
  },
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
  {
    name: 'InSites',
    href: '/insites',
    submenu: [
      { name: 'FAQ', href: '/insites/faq' },
      { name: 'Blog', href: '/insites/blog' },
    ],
  },
  { name: 'Contact', href: '/contact' },
];