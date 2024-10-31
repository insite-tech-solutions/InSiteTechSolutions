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
      { name: 'Pricing & Payments', href: '/about/pricing' },
      { name: 'Previous Works', href: '/about/works' },
      { name: 'Privacy Policy & Terms of Service', href: '/about/terms' },
    ],
  },
  {
    name: 'Services',
    href: '/services',
    submenu: [
      { name: 'Web & App Development', href: '/services/web-and-app-development' },
      { name: 'Custom Software Solutions', href: '/services/custom-software' },
      { name: 'SEO & Online Marketing', href: '/services/seo-marketing' },
      { name: 'Graphic Design & Branding', href: '/services/design-branding' },
      { name: 'Data Analysis', href: '/services/data-analysis' },
      { name: 'AI & Automation', href: '/services/ai-automation' },
      { name: 'Consulting & Training', href: '/services/consulting-training' },
    ],
  },
  {
    name: 'InSights',
    href: '/insights',
    submenu: [
      { name: 'FAQ', href: '/insights/faq' },
      { name: 'Blog', href: '/insights/blog' },
    ],
  },
  { name: 'Contact', href: '/contact' },
];