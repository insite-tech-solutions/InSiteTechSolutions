// src/content/service-pages/custom-software/process-content.ts

import { ProcessContent } from '@/page-templates/service-page/types';
// Import Lucide icons directly
import { Search, ClipboardList, Paintbrush, Code, Rocket } from 'lucide-react';

/**
 * Process content for the Custom Software Solutions service page.
 */
const customSoftwareProcess: ProcessContent = {
  title: "Our Approach",
  description: "We follow a systematic, collaborative approach to ensure your custom software solution meets all requirements while maintaining flexibility for future growth:",
  
  steps: [
    {
      step: 1,
      title: 'Discovery',
      description: 'We understand your goals, challenges, and vision to create the perfect solution.',
      items: [
        'Understand your goals, challenges, and vision',
        'Analyze technical and business requirements and constraints',
        'Determine project scope, budget, and timeline'
      ],
      timeline: '1 week',
      icon: Search
    },
    {
      step: 2,
      title: 'Planning',
      description: 'We develop a detailed roadmap to ensure project success.',
      items: [
        'Develop a detailed project roadmap',
        'Identify necessary third-party integrations',
        'Establish success criteria and key milestones'
      ],
      timeline: '1-2 weeks',
      icon: ClipboardList
    },
    {
      step: 3,
      title: 'Design',
      description: 'We create a robust system architecture and incorporate iterative feedback.',
      items: [
        'Create system architecture design',
        'Develop algorithmic flowcharts',
        'Incorporate iterative feedback and refinements'
      ],
      timeline: '2-4 weeks',
      icon: Paintbrush
    },
    {
      step: 4,
      title: 'Development',
      description: 'We build your solution with regular updates and maintain alignment with your goals.',
      items: [
        'Execute development sprints with regular progress updates',
        'Integrate continuous feedback to ensure alignment with goals',
        'Generate unit tests and documentation for long-term maintainability'
      ],
      timeline: '4-16 weeks (project dependent)',
      icon: Code
    },
    {
      step: 5,
      title: 'Testing & Launch',
      description: 'We ensure everything works perfectly before going live.',
      items: [
        'Perform comprehensive testing to identify and fix issues',
        'Optimize system integration and performance',
        'Launch the software with post-launch support and training'
      ],
      timeline: '2-4 weeks',
      icon: Rocket
    }
  ],
  
  note: "We cannot provide exact timelines until we have a well-defined project and plan. Projects can range from a few weeks to several months; however, as a simple reference point, most small business software projects are completed in 6–8 weeks, while larger, more complex solutions can range from 8–16+ weeks, depending on the complexity.",
  link: {
    text: "Learn more about our process",
    url: "/about/process" 
  }
};

export default customSoftwareProcess;