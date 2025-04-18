// src/content/services/custom-software/value-prop-content.tsx

import { ValuePropContent } from '@/page-templates/service-page/types';
import React from 'react';
import { InlineStat } from '@/page-templates/service-page/value-prop-section/inline-stat';

/**
 * Value proposition content for the Custom Software Solutions service page.
 */
const customSoftwareValueProp: ValuePropContent = {
  title: "How Custom Software Can Help You",
  description: "Many businesses, labs, and organizations face niche challenges that off-the-shelf software forces them to adapt their processes to rather than the other way around. Custom solutions flip this dynamic, creating systems that work exactly how your business needs them to. By developing software that aligns perfectly with your specific objectives eliminate inefficiencies, reduce manual work, and provide a competitive advantage through optimized workflows, unlocking new opportunities for innovation.",
  
  // Industry trends that appear in expandable cards
  industryTrends: [
    {
      icon: "Code",
      title: "API-first Architecture",
      description: "Prioritizing APIs to ensure seamless integration and flexibility."
    },
    {
      icon: "Cloud",
      title: "Cloud Computing",
      description: "Leveraging cloud platforms for scalability and remote accessibility."
    },
    {
      icon: "Bot",
      title: "Automation and Integration",
      description: "Streamlining processes through automation and integrated systems."
    },
    {
      icon: "Cpu",
      title: "Scalability and Flexibility",
      description: "Building solutions that grow and adapt with your business needs."
    }
  ],
  
  // Market insights with inline animated stats
  marketInsights: [
    {
      id: "1",
      content: (
        <>
          <InlineStat value={78} suffix="%" /> of businesses report improved efficiency after implementing custom software solutions.
        </>
      )
    },
    {
      id: "2",
      content: (
        <>
          Organizations save an average of <InlineStat value={27.3} suffix="h" /> per employee monthly through process automation.
        </>
      )
    },
    {
      id: "3",
      content: (
        <>
          <InlineStat value={89} suffix="%" /> of companies cite custom software as a key factor in maintaining competitive advantage.
        </>
      )
    },
    {
      id: "4",
      content: (
        <>
          Custom solutions reduce operational costs by an average of <InlineStat value={22} suffix="%" /> over 3 years.
        </>
      )
    },
    {
      id: "5",
      content: (
        <>
          Companies report an average <InlineStat value={143} suffix="%" /> return on investment within 5 years of custom software implementation.
        </>
      )
    }
  ],
  
  // Call to action displayed at the bottom of the right column
  callToAction: {
    title: "Ready to Optimize Your Operations?",
    description: "Let's develop a custom software solution tailored to your unique business needs.",
    buttonText: "Get Started",
    buttonLink: "/contact",
    buttonIcon: "ArrowRight"
  },
  
  // Additional content that can be placed at different points in the layout
  // additionalContent: {
  //   beforeTrends: (
  //     <p className="text-lg text-gray-700 leading-relaxed">
  //       Additional content can be placed here.
  //     </p>
  //   )
  // }
};

export default customSoftwareValueProp;