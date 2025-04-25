/**
 * Pricing and configuration table for Consulting & Training services.
 * Defines categories, rendering types, recurring cost types, and detailed options
 * with associated cost ranges or multipliers for the pricing calculator.
 * 
 * @type {Object}
 * @property {string} name - The name of the service category.
 * @property {Object} metadata - Metadata structure for rendering and organization.
 * @property {Object} consultingType - Types of consulting services with options and costs.
 * @property {Object} clientSize - Client size categories with multipliers.
 * @property {Object} deliveryFormat - Delivery format options with multipliers.
 * @property {Object} engagementStyle - Engagement style options with costs.
 * @property {Object} expertiseLevel - Expertise level options with multipliers.
 * @property {Object} features - Features and integrations with options and costs.
 * @property {Object} customizationDocs - Customization and documentation options with costs.
 * @property {Object} ongoingSupport - Ongoing support options with descriptions and costs.
 * @property {Object} timeline - Project timeline options with multipliers.
 * @property {Object} extraServices - Extra services and customizations available for bundling.
 * @property {Array} specialNotes - Special notes regarding the consulting services.
 */
// content/calculator_tables/consultingTraining.ts

//import { CostRange, Multiplier } from './types';

export const consultingTrainingTable = {
  name: "Consulting & Training",
  
  // New metadata structure to control rendering and organization
  metadata: {
    // Define which category each section belongs to
    categories: {
      "Project Details": ["consultingType", "clientSize", "deliveryFormat", "engagementStyle", "expertiseLevel"],
      "Features": ["features"],
      "Support & Timeline": ["ongoingSupport", "timeline"],
      "Additional Options": ["customizationDocs", "extraServices", "specialNotes"]
    },
    
    // Define how each section should be rendered
    renderTypes: {
      "consultingType": "dropdown",
      "clientSize": "dropdown",
      "deliveryFormat": "dropdown",
      "engagementStyle": "dropdown",
      "expertiseLevel": "dropdown",
      "features": "multi-checkbox",
      "ongoingSupport": "dropdown",
      "timeline": "dropdown",
      "customizationDocs": "multi-checkbox",
      "extraServices": "informational",
      "specialNotes": "informational"
    },
    
    // Define which costs are recurring
    recurringCosts: {
      "ongoingSupport": "month"
    }
  },
  
  // Consulting Type
  consultingType: {
    title: "Consulting Type",
    options: {
      quickHelp: { 
        name: "Quick Help (tech troubleshooting, basic training)", 
        cost: { min: 150, max: 1000 } 
      },
      guidanceStrategy: { 
        name: "Guidance/Strategy Consulting (plan review, providing direction)", 
        cost: { min: 1000, max: 3000 } 
      },
      comprehensive: { 
        name: "Comprehensive Consulting (workflow design, SOP/documentation, implementation training)", 
        cost: { min: 3000, max: 8000 } 
      },
      doneForYou: { 
        name: "Done-for-You Services (system setup, staff training, educational services)", 
        cost: { min: 5000, max: 15000 } 
      }
    }
  },
  
  // Client Size
  clientSize: {
    title: "Client Size",
    description: "Larger organizations often require more complex solutions and broader implementation strategies.",
    options: {
      individual: { 
        name: "Individual", 
        multiplier: { value: 1.0 },
        description: "Base"
      },
      academic: { 
        name: "Academic", 
        multiplier: { value: 1.1 } 
      },
      smallBusiness: { 
        name: "Small Business", 
        multiplier: { value: 1.15 } 
      },
      enterprise: { 
        name: "Enterprise", 
        multiplier: { value: 2.0 } 
      }
    }
  },
  
  // Delivery Format
  deliveryFormat: {
    title: "Delivery Format",
    description: "On-Site sessions require additional travel and scheduling costs.",
    options: {
      remote: { 
        name: "Remote (virtual sessions, webinars, online resources)", 
        multiplier: { value: 1.0 },
        description: "Base"
      },
      onSite: { 
        name: "On-Site (in-person training, on-site support)", 
        multiplier: { value: 1.25 } 
      }
    }
  },
  
  // Engagement Style
  engagementStyle: {
    title: "Engagement Style",
    description: "Group sessions require additional materials and preparation time.",
    options: {
      oneOnOne: { 
        name: "One-on-One Sessions", 
        cost: { min: 0, max: 0 },
        description: "Base"
      },
      groupWorkshops: { 
        name: "Group Workshops/Seminars", 
        cost: { min: 500, max: 2000 } 
      }
    }
  },
  
  // Expertise Level
  expertiseLevel: {
    title: "Expertise Level",
    options: {
      basic: { 
        name: "Basic Tech Support & Training", 
        multiplier: { value: 1.0 },
        description: "Base"
      },
      intermediate: { 
        name: "Intermediate Training & Support", 
        multiplier: { value: 1.25 } 
      },
      advanced: { 
        name: "Advanced Domain Expertise Consulting (e.g., specialized software, physics, industry-specific needs)", 
        multiplier: { value: 1.5 } 
      }
    }
  },
  
  // Features & Integrations
  features: {
    title: "Features & Integrations",
    description: "Each feature can be customized to match organizational needs and goals.",
    options: {
      workflowOptimization: { 
        name: "Workflow & Process Optimization", 
        cost: { min: 1000, max: 3000 } 
      },
      sopCreation: { 
        name: "SOP Creation & Documentation", 
        cost: { min: 800, max: 2500 } 
      },
      customizedTraining: { 
        name: "Customized Training Modules", 
        cost: { min: 1200, max: 4000 } 
      },
      knowledgeTransfer: { 
        name: "Education & Knowledge Transfer", 
        cost: { min: 500, max: 2000 } 
      }
    }
  },
  
  // Customization & Documentation
  customizationDocs: {
    title: "Customization & Documentation",
    options: {
      customDocumentation: { 
        name: "Custom Documentation & Workflow Design", 
        cost: { min: 800, max: 2500 },  
        description: "Custom documentation and workflow design services"
      },
      standardizedMaterials: { 
        name: "Standardized Materials & Documentation Templates", 
        cost: { min: 300, max: 1000 }, 
        description: "Branded document templates, standard operating procedures, and other standardized materials"
      },
      extendedReporting: { 
        name: "Extended Reporting & Analysis", 
        cost: { min: 500, max: 1500 }, 
        description: "Additional reporting and analysis services"
      },
      educationalMaterial: { 
        name: "Educational Material Development", 
        cost: { min: 1000, max: 3000 }, 
        description: "Creation of educational materials, training modules, and other informational content"
      }
    }
  },
  
  // Ongoing Support Options
  ongoingSupport: {
    title: "Ongoing Support Options",
    description: "Extra work beyond retainer is billed hourly; expedited services and additional requests may incur extra fees.",
    options: {
      none: { 
        name: "None", 
        cost: { min: 0, max: 0 } 
      },
      basic: { 
        name: "Basic Support (post-consultation troubleshooting | up to 10 hours dedicated support per month)", 
        cost: { min: 150, max: 400 },
        description: "Up to 10 hours dedicated support per month"
      },
      extended: { 
        name: "Extended Support (ongoing follow-ups & training | up to 20 hours dedicated support per month)", 
        cost: { min: 400, max: 900 },
        description: "Up to 20 hours dedicated support per month"
      },
      dedicated: { 
        name: "Dedicated Consultant Support (ongoing strategy & optimization | up to 40 hours dedicated support per month)", 
        cost: { min: 1000, max: 3000 },
        description: "Up to 40 hours dedicated support per month"
      }
    }
  },
  
  // Timeline & Delivery
  timeline: {
    title: "Project Timeline",
    description: "Timeline adjustments affect resource allocation and overall project cost.",
    options: {
      noRush: { 
        name: "No-Rush Consultation", 
        multiplier: { value: 0.9 } 
      },
      standard: { 
        name: "Standard Consultation Timeline", 
        multiplier: { value: 1.0 } 
      },
      expedited: { 
        name: "Expedited/Rush Support", 
        multiplier: { value: 1.25 } 
      }
    }
  },

  // Extra Services & Customizations
  extraServices: {
    title: "Extra Services & Customizations",
    description: "Available as separate services that can be bundled with Consulting & Training.",
    options: [
      { 
        name: "Marketing & SEO",
        url: "/services/seo-and-online-marketing"
      },
      { 
        name: "Logos & Brand Identity",
        url: "/services/graphic-design-and-branding"
      },
      { 
        name: "AI & Automation",
        url: "/services/ai-and-automation"
      }
    ]
  },
  
  // Special notes
  specialNotes: [
    "This \"catch-all\" service covers everything from simple tech support to in-depth strategic consulting. If you don't see your specific need listed, reach out — we'll tailor a solution to fit your unique requirements. Remember, for all your tech related needs, InSite Tech."
  ],
};

export default consultingTrainingTable;