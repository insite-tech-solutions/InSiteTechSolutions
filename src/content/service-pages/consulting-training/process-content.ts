/**
 * Process content configuration for the Consulting & Training service page.
 * Outlines the step-by-step methodology used for consulting and training projects.
 * Each step includes a timeline, description, icon, and task checklist.
 * 
 * @type {ProcessContent}
 * @property {string} title - The title of the process section.
 * @property {string} description - A description of the overall approach to consulting and training.
 * @property {Array} steps - An array of steps in the process, each containing a step number, title, description, items, timeline, and icon.
 * @property {string} note - A note regarding project timelines and variability.
 * @property {string} linkText - The text of the link to the process page.
 * @property {string} linkUrl - The URL of the process page.
 */
import { ProcessContent } from '@/page-templates/service-page/types';

export const consultingTrainingProcess: ProcessContent = {
  title: "Our Approach",
  description: "We follow a systematic, collaborative approach we call the 5 Ds—Discovery, Definition, Design, Delivery, and Development—to ensure that our consulting and training services deliver meaningful results and build lasting capabilities within your organization.",
  steps: [
    {
      step: 1,
      title: 'Discovery',
      description: 'We assess your current capabilities, challenges, and objectives to establish a clear foundation for our engagement.',
      items: [
        'Evaluate existing systems, processes, and team capabilities',
        'Identify key challenges, opportunities, and knowledge gaps',
        'Define success metrics and desired outcomes',
      ],
      timeline: '1-2 weeks',
      icon: 'Search',
    },
    {
      step: 2,
      title: 'Definition',
      description: 'We create a tailored roadmap that addresses your specific needs and aligns with your strategic objectives.',
      items: [
        'Develop a comprehensive consulting or training plan',
        'Define scope, deliverables, and knowledge transfer objectives',
        'Establish timeline and resource requirements',
      ],
      timeline: '1-2 weeks',
      icon: 'ClipboardList',
    },
    {
      step: 3,
      title: 'Design',
      description: 'We craft customized consulting frameworks and training materials tailored to your specific context and goals.',
      items: [
        'Create customized consulting frameworks and methodologies',
        'Develop training materials and knowledge transfer tools',
        'Design implementation strategies and support systems',
      ],
      timeline: '2-3 weeks',
      icon: 'Paintbrush',
    },
    {
      step: 4,
      title: 'Delivery',
      description: 'We implement consulting recommendations and conduct engaging, effective training sessions that drive real results.',
      items: [
        'Provide hands-on consulting and implementation support',
        'Deliver training sessions and workshops',
        'Implement knowledge transfer activities and documentation',
      ],
      timeline: '3-8 weeks',
      icon: 'FileChartColumn',
    },
    {
      step: 5,
      title: 'Development',
      description: 'We ensure continuous improvement and sustainable capability building through ongoing support and refinement.',
      items: [
        'Provide follow-up support and reinforcement',
        'Measure outcomes and refine approaches',
        'Establish frameworks for continuous learning and improvement',
      ],
      timeline: 'Ongoing',
      icon: 'TrendingUp',
    },
  ],
  note: "We cannot provide exact timelines until we have a well-defined project and plan. Projects can range from a few weeks to several months depending on complexity and scope. As a simple reference point, focused consulting engagements typically take 4-6 weeks, while comprehensive training programs may require 8-12+ weeks. Many clients opt for ongoing advisory relationships that evolve with their changing needs and objectives.",
  linkText: "Learn more about our process",
  linkUrl: "/process",
};

export default consultingTrainingProcess;