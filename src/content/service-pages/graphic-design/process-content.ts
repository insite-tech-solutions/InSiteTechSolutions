/**
 * Process content configuration for the Graphic Design & Branding service page.
 * Outlines the step-by-step methodology used for design and branding projects.
 * Each step includes a timeline, description, icon, and task checklist.
 * 
 * @type {ProcessContent}
 * @property {string} title - The title of the process section.
 * @property {string} description - A description of the overall approach to graphic design and branding.
 * @property {Array} steps - An array of steps in the process, each containing a step number, title, description, items, timeline, and icon.
 * @property {string} note - A note regarding project timelines and variability.
 * @property {string} linkText - The text of the link to the process page.
 * @property {string} linkUrl - The URL of the process page.
 */
import { ProcessContent } from '@/page-templates/service-page/types';

export const graphicDesignProcess: ProcessContent = {
  title: "Our Approach",
  description: "We follow a collaborative, creative, and strategic approach we call the 5 Ds—Discovery, Definition, Design, Development, and Delivery—to ensure that every design project effectively communicates your brand's unique value while capturing your vision and meeting your objectives.",
  steps: [
    {
      step: 1,
      title: 'Discovery',
      description: 'We immerse ourselves in your brand, understanding your values, audience, and goals.',
      items: [
        'Understand your brand values, vision, and business objectives',
        'Research your target audience and market positioning',
        'Analyze competitors and industry design trends',
      ],
      timeline: '1-2 weeks',
      icon: 'Search',
    },
    {
      step: 2,
      title: 'Definition',
      description: 'We establish clear design goals, creative direction, and project parameters.',
      items: [
        'Define project scope and deliverables',
        'Establish brand voice and messaging',
        'Create initial design concepts',
      ],
      timeline: '1-2 weeks',
      icon: 'ClipboardList',
    },
    {
      step: 3,
      title: 'Design',
      description: 'We create concepts and refine them through collaborative feedback to capture your vision.',
      items: [
        'Develop design concepts',
        'Present initial designs with rationale',
        'Incorporate feedback and refine',
      ],
      timeline: '2-4 weeks',
      icon: 'Paintbrush',
    },
    {
      step: 4,
      title: 'Development',
      description: 'We expand the approved concept into a comprehensive set of brand assets and applications.',
      items: [
        'Extend the design across all required applications',
        'Create complete brand package with all deliverables',
        'Develop brand guidelines and usage standards',
      ],
      timeline: '2-4+ weeks (project dependent)',
      icon: 'PenTool',
    },
    {
      step: 5,
      title: 'Delivery',
      description: 'We provide final deliverables in appropriate formats with guidance for implementation.',
      items: [
        'Prepare and organize all files in appropriate formats',
        'Provide implementation guidance and support',
        'Conduct brand training and handover sessions',
      ],
      timeline: '1-2 weeks',
      icon: 'Package',
    },
  ],
  note: "We cannot provide exact timelines until we have a well-defined project and plan. Timelines may vary based on project scope and complexity. A basic logo or graphic design can typically be done in 1-2 weeks, while a complete branding package may require 4-6+ weeks.",
  linkText: "Learn more about our process",
  linkUrl: "/process",
};

export default graphicDesignProcess;