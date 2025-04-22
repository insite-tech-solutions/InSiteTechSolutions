// src/content/services/custom-software/value-prop-content.ts

import { ValuePropContent } from '@/page-templates/service-page/types';

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
  
  // Description for the industry trends section
  industryTrendsDescription: "As businesses face increasing pressure to digitize and automate operations, custom software has become essential for staying competitive. Integrated systems that utilize 3rd party APIs and cloud computing have become a necessity for increasing efficiency and scalability.",
  
  // Market insights with inline animated stats
  marketInsights: [
    {
      id: "1",
      parts: [
        { value: 78, suffix: "%" },
        " of businesses report improved efficiency after implementing custom software solutions."
      ]
    },
    {
      id: "2",
      parts: [
        "Organizations save an average of ",
        { value: 27.3, suffix: "h" },
        " per employee monthly through process automation."
      ]
    },
    {
      id: "3",
      parts: [
        { value: 89, suffix: "%" },
        " of companies cite custom software as a key factor in maintaining competitive advantage."
      ]
    },
    {
      id: "4",
      parts: [
        "Custom solutions reduce operational costs by an average of ",
        { value: 22, suffix: "%" },
        " over 3 years."
      ]
    },
    {
      id: "5",
      parts: [
        "Companies report an average ",
        { value: 143, suffix: "%" },
        " return on investment within 5 years of custom software implementation."
      ]
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