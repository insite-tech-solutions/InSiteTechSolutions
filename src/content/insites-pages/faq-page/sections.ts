/**
 * @fileoverview FAQ Page Sections Aggregator and Configuration
 *
 * This file aggregates FAQ content from various parts of the site into a single
 * organized array to power the comprehensive FAQ page. It provides a centralized
 * location for managing all FAQ sections with consistent structure and navigation.
 *
 * Features:
 * - Aggregates FAQ content from multiple sources (about pages, service pages, homepage)
 * - Provides stable section IDs for anchor navigation and table of contents
 * - Allows content customization through override functionality
 * - Maintains consistent FAQ structure across all sections
 *
 * Architecture:
 * - Imports FAQ content from various content modules
 * - Uses utility function to apply section-specific overrides
 * - Exports typed array for consumption by FAQ page components
 */

import { FAQContent } from '@/page-templates/service-page/types';

// About pages
import pricingFAQContent from '@/content/about-pages/pricing-page/pricing-faq-content';
import processFAQContent from '@/content/about-pages/process-page/process-faq-content';

// Service pages
import aiAutomationFAQContent from '@/content/service-pages/ai-automation/faq-content';
import consultingTrainingFAQContent from '@/content/service-pages/consulting-training/faq-content';
import customSoftwareFAQContent from '@/content/service-pages/custom-software/faq-content';
import dataAnalysisFAQContent from '@/content/service-pages/data-analysis/faq-content';
import graphicDesignFAQContent from '@/content/service-pages/graphic-design/faq-content';
import seoMarketingFAQContent from '@/content/service-pages/seo-marketing/faq-content';
import webAppDevFAQContent from '@/content/service-pages/web-app-dev/faq-content';

// Homepage (general) FAQs
import homepageFAQContent from '@/content/homepage/faq-content';

/**
 * Represents a single section within the FAQ page
 * 
 * @interface FAQPageSection
 * @property {string} id - Unique identifier used as HTML anchor and navigation slug
 * @property {FAQContent} content - FAQ content configuration for this section
 */
export interface FAQPageSection {
  /** Unique identifier used as HTML anchor and navigation slug */
  id: string;
  /** FAQ content configuration for this section */
  content: FAQContent;
}

/**
 * Utility function to clone and override selected fields of FAQContent
 * 
 * Creates a new FAQContent object by merging the base content with optional
 * overrides. This allows customization of imported FAQ content for the FAQ page context.
 * 
 * @param {FAQContent} base - Base FAQ content to clone
 * @param {Partial<FAQContent>} overrides - Optional fields to override
 * @returns {FAQContent} New FAQ content with applied overrides
 * 
 * @example
 * ```typescript
 * const customized = withOverrides(baseContent, {
 *   title: 'Custom Title',
 *   description: 'Custom description'
 * });
 * ```
 */
function withOverrides(base: FAQContent, overrides: Partial<FAQContent>): FAQContent {
  return { ...base, ...overrides };
}

/**
 * Ordered list of FAQ sections to display on the FAQ page
 * 
 * This array defines the structure and order of all FAQ sections. Each section
 * aggregates content from various parts of the site and can be customized with
 * section-specific overrides. The order determines the display sequence and
 * navigation flow.
 * 
 * Sections can be reordered or removed as the site evolves. Each section ID
 * should be unique and URL-friendly for anchor navigation.
 * 
 * @type {FAQPageSection[]}
 */
export const faqPageSections: FAQPageSection[] = [
  {
    id: 'general',
    content: withOverrides(homepageFAQContent, {
      title: 'General',
      description: '',
      moreLink: undefined,
      items: [
        ...homepageFAQContent.items,
        { 
          icon: 'MapPin', 
          question: 'Where are you located and do you work with clients remotely?', 
          answer: 'We are based in Western New York but work with clients worldwide. All our services are delivered remotely, allowing us to serve clients regardless of location while maintaining the same high quality and personalized approach.' 
        },
        { 
          icon: 'Zap', 
          question: 'What makes InSite Tech Solutions different from other tech companies?', 
          answer: 'We combine technical expertise with personalized service, offering a one-stop solution for all your tech needs. Our 5D methodology ensures transparent communication, our flexible pricing adapts to your budget, and our ongoing support offerings mean we\'re invested in your long-term success.' 
        }
      ]
    }),
  },
  {
    id: 'process',
    content: withOverrides(processFAQContent, {
      title: 'Process & Methodology',
      description: '',
      moreLink: undefined,
      items: [
        ...processFAQContent.items,
        { 
          icon: 'GitMerge', 
          question: 'How do you handle version control and project management?', 
          answer: 'We use industry-standard version control systems (Git) and project management tools to ensure your project is organized, trackable, and secure.' 
        }
      ]
    }),
  },
  {
    id: 'pricing',
    content: withOverrides(pricingFAQContent, {
      title: 'Pricing & Payments',
      description: '',
      moreLink: undefined,
      items: [
        ...pricingFAQContent.items,
        { 
          icon: 'Calendar', 
          question: 'How do monthly retainers work?', 
          answer: 'For certain services, ongoing maintenance, web administration, and other ongoing support, we offer monthly retainers. Monthly retainers are a great way to ensure you reserve a dedicated spot in our schedule and get the support you need when you need it.' 
        },
        { 
          icon: 'FileText', 
          question: 'What\'s included in your project estimates and quotes?', 
          answer: 'Our estimates include all services discussed in your initial consultation. We clearly outline what\'s included and any additional services that may incur extra costs, so there are no surprises.' 
        }
      ]
    }),
  },
  {
    id: 'web-app-dev',
    content: withOverrides(webAppDevFAQContent, {
      title: 'Web & App Development',
      description: '',
      moreLink: undefined,
      items: [
        ...webAppDevFAQContent.items,
        { 
          icon: 'Search', 
          question: 'Do you optimize websites for search engines during development?', 
          answer: 'Yes, we build SEO best practices into every website we develop, including proper site structure, meta tags, schema markup, mobile optimization, and fast loading times. This gives you a strong foundation for search engine visibility. We also offer additional SEO services which can be packaged with your website development project, as well as ongoing SEO support services.' 
        },
        { 
          icon: 'Shield', 
          question: 'What security measures do you implement in web applications?', 
          answer: 'We implement modern security measures including things like HTTPS, input validation, SQL injection protection, XSS prevention, and regular security updates. We also offer basic security audits and recommendations services and ongoing for ongoing protection.' 
        }
      ]
    }),
  },
  {
    id: 'custom-software',
    content: withOverrides(customSoftwareFAQContent, {
      title: 'Custom Software',
      description: '',
      moreLink: undefined,
      items: [
        ...customSoftwareFAQContent.items,
        { 
          icon: 'Cog', 
          question: 'Can you build software that integrates with my existing business processes?', 
          answer: 'Absolutely. We specialize in creating custom software that fits seamlessly into your existing workflows and business processes. We analyze your current operations and design solutions that enhance rather than disrupt your daily activities.' 
        },
        { 
          icon: 'BarChart', 
          question: 'How do you ensure the custom software will scale with my business growth?', 
          answer: 'We design custom software with scalability in mind from the start. This includes modular architecture, efficient database design, and flexible configurations that can grow with your business needs and user base.' 
        }
      ]
    }),
  },
  {
    id: 'seo-marketing',
    content: withOverrides(seoMarketingFAQContent, {
      title: 'SEO & Online Marketing',
      description: '',
      moreLink: undefined,
      items: [
        ...seoMarketingFAQContent.items,
        { 
          icon: 'Globe', 
          question: 'Do you handle local SEO for businesses with physical locations?', 
          answer: 'Yes, we do local SEO including Google My Business optimization, local keyword targeting, review management, and local citation building. We help local businesses improve their visibility in their target geographic areas.' 
        },
        { 
          icon: 'Target', 
          question: 'Do you only create optimization and marketing plans or do you also implement them?', 
          answer: 'We can do both, we can create SEO guidelines or marketing campaign plans, but we can also implement them for you. We offer the engagement level that best suits your needs, from planning to developing and implementing to oingoing support and administration.' 
        }
      ]
    }),
  },
  {
    id: 'graphic-design',
    content: withOverrides(graphicDesignFAQContent, {
      title: 'Graphic Design & Branding',
      description: '',
      moreLink: undefined,
      items: [
        ...graphicDesignFAQContent.items,
        { 
          icon: 'Palette', 
          question: 'Do your graphic design services extend beyond logos and branding?', 
          answer: 'Yes, we offer various graphic design and digital media services, available as part of other service packages or as standalone and ad hoc projects.' 
        },
        { 
          icon: 'Layout', 
          question: 'Do you provide marketing materials and templates?', 
          answer: 'Absolutely! We create marketing materials including business cards, letterheads, social media templates, presentation templates, and more. We also provide brand guidelines to ensure consistency across all your materials.' 
        }
      ]
    }),
  },
  {
    id: 'data-analysis',
    content: withOverrides(dataAnalysisFAQContent, {
      title: 'Data Analysis',
      description: '',
      moreLink: undefined,
      items: [
        ...dataAnalysisFAQContent.items,
        { 
          icon: 'TrendingUp', 
          question: 'Can you help set up ongoing data monitoring and reporting?', 
          answer: 'Yes, we can create automated dashboards and reporting systems that provide ongoing insights into your data. This includes setting up alerts, regular reports, and interactive visualizations to help you make data-driven decisions.' 
        }
      ]
    }),
  },
  {
    id: 'ai-automation',
    content: withOverrides(aiAutomationFAQContent, {
      title: 'AI & Automation',
      description: '',
      moreLink: undefined,
      items: [
        ...aiAutomationFAQContent.items,
        { 
          icon: 'Database',
          question: 'How do I know if I need AI or just basic automation?', 
          answer: 'We assess your specific needs and processes to recommend the most appropriate solution. Many businesses start with basic automation to streamline workflows and then gradually incorporate AI where it adds the most value. We can help you develop a phased approach that grows with your needs.' 
        }
      ]
    }),
  },
  {
    id: 'consulting-training',
    content: withOverrides(consultingTrainingFAQContent, {
      title: 'Consulting & Training',
      description: '',
      moreLink: undefined,
      items: [
        ...consultingTrainingFAQContent.items,
        { 
          icon: 'Settings', 
          question: 'Can you help with both technical and process-related challenges?', 
          answer: 'Absolutely. Our expertise spans both technical implementation and process optimization. We can help with everything from software selection and implementation to developing standard operating procedures, workflow optimization, and knowledge transfer strategies.' 
        }
      ]
    }),
  },
];

export default faqPageSections; 