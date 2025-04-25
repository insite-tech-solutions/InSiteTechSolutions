/**
 * Pricing and configuration table for Data Analysis services.
 * Covers cost structures for complexity, tools, data types, support options,
 * and related services for use in the pricing calculator.
 * 
 * @type {Object}
 * @property {string} name - The name of the service category.
 * @property {Object} metadata - Metadata structure for rendering and organization.
 * @property {Object} analysisComplexity - Complexity of analysis options with costs.
 * @property {Object} industryApplication - Industry/application options with multipliers.
 * @property {Object} projectType - Project type options with multipliers.
 * @property {Object} toolsApproaches - Tools and approaches options with costs.
 * @property {Object} dataTypes - Data types options with costs.
 * @property {Object} datasetSize - Dataset size options with costs.
 * @property {Object} features - Features and integrations options with costs.
 * @property {Object} ongoingAnalysis - Ongoing analysis options with descriptions and costs.
 * @property {Object} addOns - Optional add-ons with descriptions and costs.
 * @property {Object} timeline - Project timeline options with multipliers.
 * @property {Object} extraServices - Extra services and customizations available for bundling.
 * @property {Array} specialNotes - Special notes regarding the data analysis services.
 */
// content/calculator_tables/dataAnalysis.ts

//import { CostRange, Multiplier } from './types';

export const dataAnalysisTable = {
  name: "Data Analysis",
  
  // New metadata structure to control rendering and organization
  metadata: {
    // Define which category each section belongs to
    categories: {
      "Project Details": ["analysisComplexity", "industryApplication", "projectType", "toolsApproaches", "dataTypes", "datasetSize"],
      "Features": ["features"],
      "Support & Timeline": ["ongoingAnalysis", "timeline"],
      "Additional Options": ["addOns", "extraServices"]
    },
    
    // Define how each section should be rendered
    renderTypes: {
      "analysisComplexity": "dropdown",
      "industryApplication": "dropdown",
      "projectType": "dropdown",
      "toolsApproaches": "dropdown",
      "dataTypes": "dropdown",
      "datasetSize": "dropdown",
      "features": "multi-checkbox",
      "ongoingAnalysis": "dropdown",
      "timeline": "dropdown",
      "addOns": "multi-checkbox",
      "extraServices": "informational"
    },
    
    // Define which costs are recurring
    recurringCosts: {
      "ongoingAnalysis": "month"
    }
  },
  
  // Complexity of Analysis
  analysisComplexity: {
    title: "Complexity of Analysis",
    options: {
      simple: { 
        name: "Simple Analysis (Summary Statistics, Basic Visualizations)", 
        cost: { min: 500, max: 1500 } 
      },
      advanced: { 
        name: "Advanced Methods (Exploratory Analysis, Regression, Model Fitting)", 
        cost: { min: 1500, max: 3000 } 
      },
      complex: { 
        name: "Complex Analysis (Machine Learning, Predictive Modeling, Forecasting)", 
        cost: { min: 3000, max: 9000 } 
      }
    }
  },
  
  // Industry/Application
  industryApplication: {
    title: "Industry/Application",
    description: "Discounts available for academic research and non-profit projects.",
    options: {
      academic: { 
        name: "Academic", 
        multiplier: { value: 1.0 },
        description: "Base"
      },
      business: { 
        name: "Business", 
        multiplier: { value: 1.25 } 
      },
      nonprofit: { 
        name: "Nonprofit/Other", 
        multiplier: { value: 1.1 } 
      }
    }
  },
  
  // Project Type
  projectType: {
    title: "Project Type",
    options: {
      oneTime: { 
        name: "One-Time Analysis", 
        multiplier: { value: 1.0 },
        description: "Base"
      },
      modular: { 
        name: "Modular & Reusable Code/Solutions", 
        multiplier: { value: 1.5 },
        description: "Reusable deliverables carry premium value"
      },
      customSoftware: { 
        name: "Custom Analysis Software/API", 
        multiplier: { value: 2.0 },
        description: "Custom software development is offered as a separate service, as is advanced Machine Learning and AI development"
      }
    },
    description: "Reusable deliverables carry premium value. Custom software and advanced Machine Learning and AI development are offered as separate services depending on the scope of the project."
  },
  
  // Tools & Approaches
  toolsApproaches: {
    title: "Tools & Approaches",
    options: {
      standardTools: { 
        name: "Standard Tools (Excel, Tableau, basic Python scripts)", 
        cost: { min: 0, max: 0 },
        description: "Base"
      },
      customScripts: { 
        name: "Custom Scripts & Automated Pipelines (ETL, API integrations)", 
        cost: { min: 500, max: 5000 },
        description: "Automation increases upfront cost but reduces long-term analysis cost"
      }
    },
    description: "Automation increases upfront cost but reduces long-term analysis cost."
  },
  
  // Data Types
  dataTypes: {
    title: "Data Types",
    description: "Larger and more complex data types require more resources and time to process, therefore incurring greater costs.",
    options: {
      numericText: { 
        name: "Numeric/Text", 
        cost: { min: 0, max: 0 },
        description: "Base"
      },
      images: { 
        name: "Images", 
        cost: { min: 1000, max: 4000 } 
      },
      videos: { 
        name: "Videos", 
        cost: { min: 2000, max: 5000 } 
      },
      mixed: { 
        name: "Mixed/Other", 
        cost: { min: 1500, max: 6000 } 
      }
    }
  },
  
  // Dataset Size
  datasetSize: {
    title: "Dataset Size",
    options: {
      small: { 
        name: "Small (Spreadsheets, CSVs, etc. <100 MB/file)", 
        cost: { min: 0, max: 0 },
        description: "Base"
      },
      large: { 
        name: "Large (Large Datasets, SQL Databases, Multi-source <10 GB/file)", 
        cost: { min: 500, max: 1500 } 
      },
      bigData: { 
        name: "Big Data (Unstructured Data, Distributed/Cloud Computing, etc. >10 GB/file)", 
        cost: { min: 2000, max: 5000 } 
      }
    },
    description: "Larger and unstructured data require specialized tooling and infrastructure, therefore incurring greater costs."
  },
  
  // Features & Integrations
  features: {
    title: "Features & Integrations",
    description: "Advanced integrations can drive efficiency but add to project complexity.",
    options: {
      dashboards: { 
        name: "Interactive Dashboards & Custom Visualizations", 
        cost: { min: 2000, max: 5000 } 
      },
      dataPipelines: { 
        name: "Automated Data Pipelines & ETL (extract, transform, load) Processes", 
        cost: { min: 1500, max: 4000 } 
      },
      apiIntegrations: { 
        name: "API Integrations, Data Fetching & Automated Updates", 
        cost: { min: 1000, max: 3000 } 
      },
      scheduledReporting: { 
        name: "Scheduled Reporting & Forecasting", 
        cost: { min: 800, max: 2500 } 
      }
    }
  },
  
  // Ongoing Analysis Options
  ongoingAnalysis: {
    title: "Ongoing Analysis Options",
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
        name: "Extended Support (continuous updates, ongoing analyses | up to 20 hours dedicated support per month)", 
        cost: { min: 400, max: 900 },
        description: "Up to 20 hours dedicated support per month"
      },
      dedicated: { 
        name: "Dedicated Developer/Analyst Support (ongoing optimization & strategy | up to 40 hours dedicated support per month)", 
        cost: { min: 1000, max: 3000 },
        description: "Up to 40 hours dedicated support per month"
      }
    }
  },
  
  // Optional Add-Ons
  addOns: {
    title: "Optional Add-Ons",
    options: {
      analyticalReports: { 
        name: "Comprehensive Analytical Reports for Non-technical Stakeholders", 
        cost: { min: 500, max: 3000 },
        description: "Per Report. Reports are written to convey complex analyses in easy-to-understand language and summary statistics"
      },
      additionalDocumentation: { 
        name: "Additional Documentation, Training, or Debriefing", 
        cost: { min: 50, max: 100 },
        description: "Per Hour. Additional documentation, training, or debriefing services are available as needed"
      }
    }
  },
  
  // Timeline & Delivery
  timeline: {
    title: "Project Timeline",
    description: "Timeline adjustments affect resource allocation and overall project cost.",
    options: {
      noRush: { 
        name: "No-Rush Analysis", 
        multiplier: { value: 0.9 } 
      },
      standard: { 
        name: "Standard Analysis Timeline", 
        multiplier: { value: 1.0 } 
      },
      expedited: { 
        name: "Expedited/Rush Analysis", 
        multiplier: { value: 1.25 } 
      }
    }
  },
  
    // Extra Services & Customizations
    extraServices: {
      title: "Extra Services & Customizations",
      description: "Available as separate services that can be bundled with Data Analysis.",
      options: [
        { 
          name: "Marketing & SEO",
          url: "/services/seo-and-online-marketing"
        },
        { 
          name: "Advanced Machine Learning, AI & Automation",
          url: "/services/ai-and-automation"
        },
        { 
          name: "Consulting and Training",
          url: "/services/consulting-and-training",
        }
      ]
    }

};

export default dataAnalysisTable;