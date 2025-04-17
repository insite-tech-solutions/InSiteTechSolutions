// src/content/services/custom-software.ts

import { ServiceContent } from '@/page-templates/service-page/types';

/**
 * Content configuration for the Custom Software Solutions service page.
 */
const customSoftwareContent: ServiceContent = {
  metadata: {
    title: "Custom Software Solutions",
    description: "Turn your technical challenges into opportunities with tailored software",
    slug: "custom-software-solutions",
  },
  
  hero: {
    title: "Custom Software Solutions",
    subtitle: "Turn your technical challenges into opportunities with tailored software",
    description: "From streamlining operations to solving complex computational problems, we create custom software that perfectly aligns with your business processes or research goals. Our solutions combine innovative technology with practical business sense to deliver measurable results.",
    image: "/CustomSoftwareGraphic.svg",
    ctaText: "Start Your Project Today",
    ctaLink: "/contact",
    decorElements: [
      {
        type: 'icon',
        className: 'text-white/10 rotate-12',
        style: { top: '-19%', left: '-10%' },
        icon: 'Settings',
        size: 400,
      },
      {
        type: 'icon',
        className: 'text-white/10 rotate-[-15deg]',
        style: { bottom: '-16%', right: '-5%' },
        icon: 'CodeXml',
        size: 450,
      },
    ],
    bgClassName: "bg-gradient-to-br from-dark-blue to-blue-800 p-6"
  },
  
  valueProp: {
    title: "How Custom Software Can Help You",
    description: "Many businesses, labs, and organizations face niche challenges that off-the-shelf software forces them to adapt their processes to rather than the other way around. Custom solutions flip this dynamic, creating systems that work exactly how your business needs them to.",
    
    // Optional statistics
    statistics: [
      {
        value: 78,
        suffix: "%",
        description: "of businesses report improved efficiency after implementing custom software solutions"
      },
      {
        value: 143,
        suffix: "%",
        description: "average ROI within 5 years of custom software implementation"
      }
    ],
    
    // Industry trends
    industryTrends: [
      {
        icon: 'Code',
        title: "API-first Architecture",
        description: "Prioritizing APIs to ensure seamless integration and flexibility."
      },
      {
        icon: 'Cloud',
        title: "Cloud Computing",
        description: "Leveraging cloud platforms for scalability and remote accessibility."
      },
      {
        icon: 'Bot',
        title: "Automation and Integration",
        description: "Streamlining processes through automation and integrated systems."
      },
      {
        icon: 'Cpu',
        title: "Scalability and Flexibility",
        description: "Building solutions that grow and adapt with your business needs."
      }
    ],
    
    // Market insights
    marketInsights: [
      {
        id: "1",
        content: "78% of businesses report improved efficiency after implementing custom software solutions."
      },
      {
        id: "2",
        content: "Organizations save an average of 27.3h per employee monthly through process automation."
      },
      {
        id: "3",
        content: "89% of companies cite custom software as a key factor in maintaining competitive advantage."
      },
      {
        id: "4",
        content: "Custom solutions reduce operational costs by an average of 22% over 3 years."
      }
    ],
    
    // Call to action
    callToAction: {
      title: "Ready to Optimize Your Operations?",
      description: "Let's develop a custom software solution tailored to your unique business needs.",
      buttonText: "Get Started",
      buttonLink: "/contact",
      buttonIcon: "ArrowRight"
    },
    
    // Optional additional content
    additionalContent: {
      beforeTrends: (
        <p className="text-lg text-gray-700 leading-relaxed">
          By developing software that aligns perfectly with your specific objectives, you can eliminate inefficiencies, reduce manual work, and provide a competitive advantage through optimized workflows, unlocking new opportunities for innovation.
        </p>
      )
    }
  },
  
  // Add remaining section content...
  serviceScope: {
    // Will be defined when implementing ServiceScopeSection
    title: "Specialized Custom Software Development",
    description: "...",
    services: []
  },
  
  applications: {
    // Will be defined when implementing ApplicationsSection
    title: "Empowering Businesses Across Diverse Sectors",
    description: "...",
    categories: [],
    industries: []
  },
  
  process: {
    // Will be defined when implementing ProcessSection 
    title: "Our Approach",
    description: "...",
    steps: []
  },
  
  pricing: {
    // Will be defined when implementing PricingSection
    title: "Determining Project Cost",
    description: "...",
    factors: [],
    longTermValue: {
      title: "Long-Term Value",
      description: "..."
    }
  },
  
  benefits: {
    // Will be defined when implementing BenefitsSection
    title: "Competitive Advantages and Client Benefits",
    description: "...",
    items: []
  },
  
  faq: {
    // Will be defined when implementing FAQSection
    title: "Got Questions? We've Got Answers",
    description: "...",
    items: []
  },
  
  cta: {
    // Will be defined when implementing CTASection
    title: "Ready to Transform Your Business?",
    description: "...",
    buttonText: "Schedule Free Consultation",
    buttonLink: "/contact"
  }
};

export default customSoftwareContent;