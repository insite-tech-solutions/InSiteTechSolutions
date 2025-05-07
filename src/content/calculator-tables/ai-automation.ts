/**
 * Pricing and configuration table for AI & Automation services.
 * Defines cost categories, complexity levels, integrations, support options,
 * and additional features for the pricing calculator.
 * 
 * @type {Object}
 * @property {string} name - The name of the service category.
 * @property {Object} metadata - Metadata structure for rendering and organization.
 * @property {Object} scopeSize - Scope/Size categories with options and costs.
 * @property {Object} complexityLevels - Complexity levels with options and multipliers.
 * @property {Object} aiDataProvisions - AI data provisions with options and multipliers.
 * @property {Object} automationPlatform - Automation platform options with descriptions and multipliers.
 * @property {Object} features - Features and integrations with options and costs.
 * @property {Object} ongoingSupport - Ongoing support options with descriptions and costs.
 * @property {Object} addOns - Optional add-ons with descriptions and costs.
 * @property {Object} timeline - Project timeline options with multipliers.
 * @property {Object} extraServices - Extra services and customizations available for bundling.
 */

//import { CostRange, Multiplier } from './types';

export const aiAutomationTable = {
  name: "AI & Automation",
  
  // New metadata structure to control rendering and organization
  metadata: {
    // Define which category each section belongs to
    categories: {
      "Project Details": ["scopeSize", "complexityLevels", "aiDataProvisions", "automationPlatform"],
      "Features": ["features"],
      "Support & Timeline": ["ongoingSupport", "timeline"],
      "Additional Options": ["addOns", "extraServices"]
    },
    
    // Define how each section should be rendered
    renderTypes: {
      "scopeSize": "dropdown",
      "complexityLevels": "dropdown",
      "aiDataProvisions": "dropdown",
      "automationPlatform": "dropdown",
      "features": "multi-checkbox",
      "ongoingSupport": "dropdown",
      "timeline": "dropdown",
      "addOns": "multi-checkbox",
      "extraServices": "informational"
    },
    
    // Define which costs are recurring
    recurringCosts: {
      "ongoingSupport": "month"
    }
  },
  
  // Scope/Size Categories
  scopeSize: {
    title: "Scope/Size Categories",
    options: {
      small: { 
        name: "Small (defined automation via Zapier, Make, IFTTT, etc.)", 
        cost: { min: 500, max: 1500 } 
      },
      medium: { 
        name: "Medium (process automation with custom scripts & API integrations)", 
        cost: { min: 1500, max: 4000 } 
      },
      large: { 
        name: "Large (AI/ML integrations with custom models & advanced AI)", 
        cost: { min: 5000, max: 20000 } 
      }
    }
  },
  
  // Complexity Levels
  complexityLevels: {
    title: "Complexity Levels",
    options: {
      basic: { 
        name: "Basic (workflow automations, prompt engineering, custom GPT configurations)", 
        multiplier: { value: 1.0 },
        description: "Base"
      },
      advanced: { 
        name: "Advanced (model fine-tuning, integrated chatbots, API integrations)", 
        multiplier: { value: 1.5 } 
      },
      expert: { 
        name: "Expert (locally hosted models, custom AI architectures, full deep-learning solutions)", 
        multiplier: { value: 2.5 } 
      }
    }
  },
  
  // AI Data Provisions
  aiDataProvisions: {
    title: "AI Data Provisions",
    description: "Half of the AI/ML model equation is data, therefore data quality and availability significantly impact model performance and development time/cost.",
    options: {
      none: { 
        name: "None", 
        multiplier: { value: 1.0 },
        description: "Base"
      },
      clientProvided: { 
        name: "Client Provided Data", 
        multiplier: { value: 1.1 } 
      },
      requiresPreprocessing: { 
        name: "Data Requiring Pre-processing", 
        multiplier: { value: 1.25 } 
      },
      dataSourcing: { 
        name: "Data Sourcing & Curation Services", 
        multiplier: { value: 2.0 } 
      }
    }
  },
  
  // Automation Platform
  automationPlatform: {
    title: "Automation Platform",
    description: "Custom solutions offer more flexibility but require more development time and expertise.",
    options: {
      offTheShelf: { 
        name: "Off-the-Shelf Solutions (Zapier, Make, IFTTT)", 
        multiplier: { value: 1.0 } 
      },
      customAutomation: { 
        name: "Custom Automation (tailored hardware/software integrations)", 
        multiplier: { value: 1.5 } 
      }
    }
  },
  
  // Features & Integrations
  features: {
    title: "Features & Integrations",
    options: {
      processAutomation: { 
        name: "Process Automation & Optimization Consulting", 
        cost: { min: 1000, max: 3000 } 
      },
      logicBasedAutomation: { 
        name: "Logic-Based Automation (Arduino, Raspberry Pi, FPGAs, Ladder Logic, etc.)", 
        cost: { min: 800, max: 2500 } 
      },
      mlAiAutomation: { 
        name: "Machine Learning / AI-Based Automation", 
        cost: { min: 2000, max: 6000 } 
      },
      internalIntegrations: { 
        name: "Website or Internal Systems Integrations", 
        cost: { min: 1500, max: 5000 } 
      },
      externalApiIntegrations: { 
        name: "External API Integrations & Automated Updates", 
        cost: { min: 800, max: 2500 } 
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
        name: "Basic Maintenance (updates, troubleshooting | up to 10 hours dedicated support per month)", 
        cost: { min: 150, max: 400 },
        description: "Up to 10 hours dedicated support per month"
      },
      extended: { 
        name: "Extended Support (ongoing model training, optimization | up to 20 hours dedicated support per month)", 
        cost: { min: 400, max: 900 },
        description: "Up to 20 hours dedicated support per month"
      },
      dedicated: { 
        name: "Dedicated Developer/Analyst Support (strategic optimization | up to 40 hours dedicated support per month)", 
        cost: { min: 1000, max: 3000 },
        description: "Up to 40 hours dedicated support per month"
      }
    }
  },
  
  // Optional Add-Ons
  addOns: {
    title: "Optional Add-Ons",
    options: {
      monitoringDashboards: { 
        name: "Custom Monitoring Dashboards & Reporting", 
        cost: { min: 1000, max: 3000 }, 
        description: "Custom dashboards and reporting tools to monitor and analyze automation performance"
      },
      existingSystemsIntegration: { 
        name: "Integration with Existing Systems or Workflows", 
        cost: { min: 1500, max: 4000 } ,
        description: "Integration with existing systems or workflows for seamless process automation"
      },
      documentation: { 
        name: "Standard Operating Procedures (SOP) Documentation & Process Optimization", 
        cost: { min: 500, max: 1500 }, 
        description: "Standardization, optimization, and documentation of processes for better scalability and efficiency"
      }
    }
  },
  
  // Timeline & Delivery
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
      description: "Available as separate services that can be bundled with AI & Automation.",
      options: [
        { 
          name: "Data Analytics",
          url: "/services/data-analysis"
        },
        { 
          name: "Custom Software Solutions",
          url: "/services/custom-software-solutions"
        },
        { 
          name: "Consulting and Training",
          url: "/services/consulting-and-training"
        }
      ]
    },
  
};

export default aiAutomationTable;