/**
 * Pricing and configuration table for Custom Software Solutions services.
 * Defines all configurable service attributes, rendering types, category organization,
 * and associated cost ranges or multipliers used by the pricing calculator.
 * 
 * @type {Object}
 * @property {string} name - The name of the service category.
 * @property {Object} metadata - Metadata structure for rendering and organization.
 * @property {Object} projectType - Types of projects with options and costs.
 * @property {Object} integrationsRequired - Integration requirements with options and multipliers.
 * @property {Object} platformSpecifics - Platform specifics with options and multipliers.
 * @property {Object} computingEnvironment - Computing environment options with costs.
 * @property {Object} developmentFocus - Development focus options with multipliers.
 * @property {Object} programmingLanguages - Programming languages/frameworks options with multipliers.
 * @property {Object} features - Features and integrations with options and costs.
 * @property {Object} documentation - Documentation options with costs.
 * @property {Object} ongoingMaintenance - Ongoing maintenance options with descriptions and costs.
 * @property {Object} addOns - Optional add-ons with descriptions and costs.
 * @property {Object} timeline - Project timeline options with multipliers.
 * @property {Object} extraServices - Extra services and customizations available for bundling.
 * @property {Array} specialNotes - Special notes regarding the custom software solutions.
 */
// content/calculator_tables/customSoftwareSolutions.ts

//import { CostRange, Multiplier } from './types';

export const customSoftwareSolutionsTable = {
  name: "Custom Software Solutions",
  
  // New metadata structure to control rendering and organization
  metadata: {
    // Define which category each section belongs to
    categories: {
      "Project Details": ["projectType", "integrationsRequired", "platformSpecifics", "computingEnvironment", "developmentFocus", "programmingLanguages"],
      "Features": ["features"],
      "Support & Timeline": ["documentation", "ongoingMaintenance", "timeline"],
      "Additional Options": ["addOns", "extraServices"]
    },
    
    // Define how each section should be rendered
    renderTypes: {
      "projectType": "dropdown",
      "integrationsRequired": "dropdown",
      "platformSpecifics": "dropdown",
      "computingEnvironment": "dropdown",
      "developmentFocus": "dropdown",
      "programmingLanguages": "dropdown",
      "features": "multi-checkbox",
      "documentation": "dropdown",
      "ongoingMaintenance": "dropdown",
      "addOns": "multi-checkbox",
      "timeline": "dropdown",
      "extraServices": "informational",
      "specialNotes": "informational"
    },
    
    // Define which costs are recurring
    recurringCosts: {
      "ongoingMaintenance": "month"
    }
  },
  
  // Project Scope
  projectType: {
    title: "Project Type",
    options: {
      notebook: { 
        name: "Notebook", 
        cost: { min: 500, max: 1500 } 
      },
      script: { 
        name: "Script", 
        cost: { min: 1000, max: 3000 } 
      },
      packageApi: { 
        name: "Package/API", 
        cost: { min: 3000, max: 7000 } 
      },
      fullApplication: { 
        name: "Full Application", 
        cost: { min: 7000, max: 20000 } 
      }
    }
  },
  
  integrationsRequired: {
    title: "Integrations Required",
    options: {
      standalone: { 
        name: "Standalone (No Integrations)", 
        multiplier: { value: 1.0 },
        description: "Base"
      },
      thirdParty: { 
        name: "Third-Party Services", 
        multiplier: { value: 1.25 } 
      },
      legacySystems: { 
        name: "Legacy Systems", 
        multiplier: { value: 1.5 } 
      }
    },
    description: "Integration needs can significantly influence overall complexity and cost."
  },
  
  // Platform & Deployment
  platformSpecifics: {
    title: "Platform Specifics",
    options: {
      windows: { 
        name: "Windows", 
        multiplier: { value: 1.0 } 
      },
      mac: { 
        name: "Mac", 
        multiplier: { value: 1.0 } 
      },
      linux: { 
        name: "Linux", 
        multiplier: { value: 1.1 } 
      },
      crossPlatform: { 
        name: "Cross-Platform", 
        multiplier: { value: 1.5 } 
      },
      other: { 
        name: "Other", 
        multiplier: { value: 1.5 } 
      }
    },
    description: "Cross-platform solutions require additional compatibility and testing."
  },
  
  computingEnvironment: {
    title: "Computing Environment",
    options: {
      local: { 
        name: "Local", 
        cost: { min: 0, max: 0 },
        description: "Base"
      },
      cloudBased: { 
        name: "Cloud-Based (e.g., AWS, Azure, etc. | Cloud services incur additional hosting costs)", 
        cost: { min: 1000, max: 3000 },
        description: "Plus potential hosting costs"
      },
      hybrid: { 
        name: "Hybrid (Local & Cloud)", 
        cost: { min: 3000, max: 6000 },
        description: "Plus potential hosting costs"
      }
    },
    description: "Deployment choices can add complexity and influence ongoing costs."
  },
  
  // Development Approach
  developmentFocus: {
    title: "Development Focus",
    options: {
      backend: { 
        name: "Backend (Computation/Processing)", 
        multiplier: { value: 1.0 },
        description: "Base"
      },
      frontend: { 
        name: "Frontend (User Interface)", 
        multiplier: { value: 1.0 },
        description: "Base"
      },
      fullStack: { 
        name: "Full Stack (Both)", 
        multiplier: { value: 2.5 } 
      }
    },
    description: "Full stack projects combine the complexities from both development ends."
  },
  
  programmingLanguages: {
    title: "Programming Languages/Frameworks",
    options: {
      flexible: { 
        name: "Flexible / No Preference", 
        multiplier: { value: 1.0 },
        description: "Base"
      },
      specified: { 
        name: "Specified Language (e.g., Python, JSX, etc.)", 
        multiplier: { value: 1.5 }, 
        description: "Choosing a specific language or framework may require additional expertise and can affect pricing."
      }
    }, 
    description: "Choosing a specific language or framework may require additional expertise and can affect pricing."
  },
  
  // 4. Features & Integrations
  features: {
    title: "Features & Integrations",
    description: "These technical features may require custom code and extensive testing, increasing development time and costs.",
    options: {
      iotNetworking: { 
        name: "Advanced IoT or Networking Integration (e.g. hardware and software which require a constant internet connection)", 
        cost: { min: 1000, max: 3000 } 
      },
      highPerformance: { 
        name: "High Performance/Optimization Needs", 
        cost: { min: 1000, max: 4000 } 
      },
      dataAnalytics: { 
        name: "Advanced Reporting & Data Analytics", 
        cost: { min: 1000, max: 3500 } 
      },
      advancedSecurity: { 
        name: "Advanced Security (e.g., encryption, 2FA)", 
        cost: { min: 1000, max: 3000 } 
      }
    }
  },
  
  // 5. Documentation & Support
  documentation: {
    title: "Documentation",
    options: {
      minimal: { 
        name: "Standard Documentation (project summary, code comments, etc.)", 
        cost: { min: 0, max: 0 },
        description: "Base"
      },
      apiDocs: { 
        name: "API Documentation", 
        cost: { min: 1000, max: 3000 } 
      },
      userManuals: { 
        name: "User Manuals / Developer Training", 
        cost: { min: 3000, max: 6000 } 
      }
    }
  },
  
  ongoingMaintenance: {
    title: "Ongoing Maintenance",
    description: "Extra work beyond retainer is billed hourly; expedited services and additional requests may incur extra fees.",
    options: {
      none: { 
        name: "None", 
        cost: { min: 0, max: 0 } 
      },
      basic: { 
        name: "Basic Maintenance (updates, troubleshooting | up to 10 hours dedicated support per month)", 
        cost: { min: 150, max: 500 },
        description: "Up to 10 hours dedicated support per month"
      },
      extended: { 
        name: "Extended Support (continuous updates, technical support | up to 20 hours dedicated support per month)", 
        cost: { min: 400, max: 900 },
        description: "Up to 20 hours dedicated support per month"
      },
      dedicated: { 
        name: "Dedicated Developer/Analyst Support (ongoing development and premium support | up to 40 hours dedicated support per month)", 
        cost: { min: 1000, max: 3000 },
        description: "Up to 40 hours dedicated support per month"
      }
    }
  },
  
  // 6. Optional Add-Ons
  addOns: {
    title: "Optional Add-Ons",
    options: {
      migrations: { 
        name: "Migrations & Legacy Software Modernization", 
        cost: { min: 500, max: 3000 },
        description: "Migrations and Modernization refer to moving content from an old platform to a new one, or updating old codebases to modern languages/frameworks"
      },
      additionalRevisions: { 
        name: "Additional Revisions / Development Iterations", 
        cost: { min: 300, max: 1000 },
        description: "Per Round. Basic check-ins and revisions are complimentary, extra revisions increase cost and development time"
      }
    }
  },
  
  // 7. Timeline & Delivery
  timeline: {
    title: "Project Timeline",
    description: "Timeline adjustments affect resource allocation and overall project cost.",
    options: {
      noRush: { 
        name: "No-Rush Development", 
        multiplier: { value: 0.9 } 
      },
      standard: { 
        name: "Standard Development Timeline", 
        multiplier: { value: 1.0 } 
      },
      expedited: { 
        name: "Expedited/Rush Development", 
        multiplier: { value: 1.5 } 
      }
    }
  },
  
// Extra Services & Customizations
extraServices: {
  title: "Extra Services & Customizations",
  description: "Available as separate services that can be bundled with Custom Software Development.",
  options: [
    { 
      name: "AI & Automation",
      url: "/services/ai-and-automation"
    },
    { 
      name: "Data Analysis",
      url: "/services/data-analysis"
    },
    { 
      name: "Consulting and Training",
      url: "/services/consulting-and-training"
    }
  ]
},
  
  // Special notes
  specialNotes: [
    "Discounts available for Open Source (OSS) projects. Proprietary development and NDAs may incur additional costs.",
  ]
};

export default customSoftwareSolutionsTable;