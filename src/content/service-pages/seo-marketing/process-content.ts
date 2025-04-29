/**
 * Process content configuration for the SEO & Online Marketing service page.
 * Outlines the step-by-step methodology used for digital marketing campaigns.
 * Each step includes a timeline, description, icon, and task checklist.
 * 
 * @type {ProcessContent}
 * @property {string} title - The title of the process section.
 * @property {string} description - A description of the overall approach to SEO and marketing.
 * @property {Array} steps - An array of steps in the process, each containing a step number, title, description, items, timeline, and icon.
 * @property {string} note - A note regarding project timelines and variability.
 * @property {string} linkText - The text of the link to the process page.
 * @property {string} linkUrl - The URL of the process page.
 */
import { ProcessContent } from '@/page-templates/service-page/types';

export const seoMarketingProcess: ProcessContent = {
  title: "Our Approach",
  description: "We follow a systematic, data-driven approach we call the 5 Ds—Discovery, Definition, Design, Development, and Deployment—to ensure maximum online visibility and sustainable growth. Each step is tailored specifically to align with your business needs.",
  steps: [
    {
      step: 1,
      title: 'Discovery',
      description: 'We understand your goals, target audience, and current marketing performance.',
      items: [
        'Understand your business goals and target audience',
        'Analyze your current online presence and competitors',
        'Perform initial keyword and market analysis',
      ],
      timeline: '1-2 weeks',
      icon: 'Search',
    },
    {
      step: 2,
      title: 'Definition',
      description: 'We clearly define campaign objectives, strategies, and success metrics.',
      items: [
        'Define measurable goals and key performance indicators (KPIs)',
        'Digital presence audit and market analysis',
        'Selection of campaign medium (SEO, social media, email, Google, etc.)',
      ],
      timeline: '1-2 weeks',
      icon: 'ClipboardList',
    },
    {
      step: 3,
      title: 'Design',
      description: 'We design high-quality content strategies and marketing assets tailored for your audience.',
      items: [
        'Plan and design engaging content (blogs, social media, ads)',
        'Optimize user experience (UX) for higher conversions',
        'Prepare visual assets aligned with branding and objectives',
      ],
      timeline: '2-4 weeks',
      icon: 'Paintbrush',
    },
    {
      step: 4,
      title: 'Development',
      description: 'We develop targeted campaigns and technical optimizations with continuous refinement.',
      items: [
        'Strategy development and refinement',
        'Execute on-page SEO implementation',
        'Set up PPC campaigns and social media initiatives',
      ],
      timeline: '2-4 weeks',
      icon: 'Code',
    },
    {
      step: 5,
      title: 'Deployment',
      description: 'We deploy campaigns and establish continuous improvement cycles.',
      items: [
        'Monitor and optimize through performance tracking',
        'A/B testing and strategy refinement',
        'Performance reports, ROI analysis, and post launch optimization',
      ],
      timeline: 'Ongoing',
      icon: 'Rocket',
    },
  ],
  note: "We cannot provide exact timelines until we have a well defined project and plan. Projects can range from a few weeks to several months; however, while initial setup typically takes 4-8 weeks, digital marketing is an ongoing process that delivers increasing value over time. SEO typically shows noticeable results within 3-6 months, while paid campaigns can generate immediate visibility.",
  linkText: "Learn more about our process",
  linkUrl: "/process",
};

export default seoMarketingProcess;
