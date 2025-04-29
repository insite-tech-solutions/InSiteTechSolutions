/**
 * Process content configuration for the Web & App Development service page.
 * Outlines the step-by-step methodology used for client web and app projects.
 * Each step includes a timeline, description, icon, and task checklist.
 * 
 * @type {ProcessContent}
 * @property {string} title - The title of the process section.
 * @property {string} description - A description of the overall approach to web and app development.
 * @property {Array} steps - An array of steps in the process, each containing a step number, title, description, items, timeline, and icon.
 * @property {string} note - A note regarding project timelines and variability.
 * @property {string} linkText - The text of the link to the process page.
 * @property {string} linkUrl - The URL of the process page.
 */
import { ProcessContent } from '@/page-templates/service-page/types';

export const webAppDevelopmentProcess: ProcessContent = {
  title: "Our Approach",
  description: "We follow a collaborative, transparent, and iterative approach we call the 5 Ds—Discovery, Definition, Design, Development, and Deployment—to ensure that every project meets your unique needs while staying on time and on budget. We believe in right-sized solutions—no overengineering, no unnecessary complexity.",
  steps: [
    {
      step: 1,
      title: 'Discovery',
      description: 'We dive deep into your business needs and vision, ensuring alignment from day one.',
      items: [
        'Understand your goals, target audience, and business objectives',
        'Identify key features and required functionalities',
        'Outline preliminary project scope, budget, and timeline',
      ],
      timeline: '1 week',
      icon: 'Search',
    },
    {
      step: 2,
      title: 'Definition',
      description: 'We lay a solid groundwork by clearly defining requirements, scope, and success metrics.',
      items: [
        'Detailed project scope and specifications',
        'Establish success metrics and key performance indicators (KPIs)',
        'Create comprehensive technical plans and identify integrations',
      ],
      timeline: '1-2 weeks',
      icon: 'ClipboardList',
    },
    {
      step: 3,
      title: 'Design',
      description: 'We craft engaging, intuitive designs that reflect your brand and resonate with your users.',
      items: [
        'Wireframes, mockups, and interactive prototypes',
        'UI/UX design and branding strategy',
        'Iterative feedback loops for continuous improvement',
      ],
      timeline: '1-3 weeks',
      icon: 'Paintbrush',
    },
    {
      step: 4,
      title: 'Development',
      description: 'We develop your project using modern best practices, with transparency every step of the way.',
      items: [
        'Agile development sprints with regular demos',
        'Continuous client feedback and adjustments',
        'Thorough documentation and code reviews for maintainability',
      ],
      timeline: '2-12 weeks (project dependent)',
      icon: 'Code',
    },
    {
      step: 5,
      title: 'Deployment',
      description: 'We rigorously test, optimize, and deploy your solution, providing ongoing support for peace of mind.',
      items: [
        'End-to-end testing and performance optimization',
        'Seamless launch with minimal disruption',
        'Post-launch monitoring, training, and continued support',
      ],
      timeline: '1-2 weeks',
      icon: 'Rocket',
    },
  ],
  note: "We cannot provide exact timelines until we have a well defined project and plan. Projects can range from a few weeks to several months; however, a simple reference point is most small business website projects are completed in 6–8 weeks, while app development can range from 8–16+ weeks, depending on the complexity.",
  linkText: "Learn more about our process",
  linkUrl: "/process",
};

export default webAppDevelopmentProcess;