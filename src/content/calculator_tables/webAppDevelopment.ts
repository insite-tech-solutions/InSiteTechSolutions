// content/calculator_tables/webAppDevelopment.ts

//import { CostRange, Multiplier } from './types';

export const webAppDevelopmentTable = {
  name: "Web & App Development",
  
  // New metadata structure to control rendering and organization
  metadata: {
    // Define which category each section belongs to
    categories: {
      "Project Details": ["pagesScreens", "interactivityLevel", "platformType", "targetDevices", "designApproach", "assetSourcing"],
      "Features": ["features"],
      "Support & Timeline": ["ongoingSupport", "timeline"],
      "Additional Options": ["addOns", "extraServices"]
    },
    
    // Define how each section should be rendered
    renderTypes: {
      "pagesScreens": "dropdown",
      "interactivityLevel": "dropdown",
      "platformType": "dropdown",
      "targetDevices": "dropdown",
      "designApproach": "dropdown",
      "assetSourcing": "dropdown",
      "features": "multi-checkbox",
      "ongoingSupport": "dropdown",
      "timeline": "dropdown",
      "addOns": "multi-checkbox",
      "extraServices": "informational",
      "specialNotes": "informational"
    },
    
    // Define which costs are recurring
    recurringCosts: {
      "ongoingSupport": "month"
    }
  },
  
  // Number of Pages/Screens
  pagesScreens: {
    title: "Number of Pages/Screens",
    options: {
      small: { 
        name: "Small (≤ 3 pages/screens)", 
        cost: { min: 1000, max: 1500 } 
      },
      medium: { 
        name: "Medium (3-7 pages/screens)", 
        cost: { min: 1500, max: 3000 } 
      },
      large: { 
        name: "Large (8+ pages/screens)", 
        cost: { min: 3000, max: 8000 } 
      }
    }
  },
  
  // Interactivity Level
  interactivityLevel: {
    title: "Interactivity Level",
    options: {
      basic: { 
        name: "Basic (static content)", 
        multiplier: { value: 1.0 },
        description: "Base"
      },
      moderate: { 
        name: "Moderate (standard interactive elements)", 
        multiplier: { value: 1.25 } 
      },
      advanced: { 
        name: "Advanced (custom interactions, animations)", 
        multiplier: { value: 2.5 } 
      }
    },
    description: "Interactivity features scale with project size, hence they serve as multipliers rather than simple cost ranges"
  },
  
  // Platform Type
  platformType: {
    title: "Platform Type",
    options: {
      builder: { 
        name: "Builder (e.g., WordPress, Squarespace, etc.)", 
        multiplier: { value: 0.75 } 
      },
      custom: { 
        name: "Custom Development", 
        multiplier: { value: 1.5 } 
      }
    }
  },
  
  // Target Devices
  targetDevices: {
    title: "Target Devices",
    options: {
      website: { 
        name: "Website", 
        cost: { min: 0, max: 0 }, 
        description: "Base" 
      },
      webApp: { 
        name: "Web App", 
        cost: { min: 1000, max: 3000 } 
      },
      androidApp: { 
        name: "Android App", 
        cost: { min: 3000, max: 5000 } 
      },
      iOSApp: { 
        name: "iOS App", 
        cost: { min: 3000, max: 5000 } 
      },
      crossPlatformApp: { 
        name: "Cross-platform App", 
        cost: { min: 5000, max: 9000 }, 
        description: "Cheaper than separate native apps" 
      }
    }
  },
  
  // Design Approach
  designApproach: {
    title: "Design Approach",
    options: {
      templates: { 
        name: "Templates", 
        multiplier: { value: 1.0 }, 
        description: "Base" 
      },
      partiallyCustom: { 
        name: "Partially Custom Elements", 
        multiplier: { value: 1.25 }, 
        description: "Use of pre-made widgets and components in a bespoke design" 
      },
      fullyCustom: { 
        name: "Fully Custom Design", 
        multiplier: { value: 2.0 }, 
        description: "Premium custom design" 
      }
    }
  },
  
  // Asset Sourcing
  assetSourcing: {
    title: "Asset Sourcing",
    options: {
      clientProvided: { 
        name: "Client Provided", 
        cost: { min: 0, max: 0 }, 
        description: "Base" 
      },
      stockAssets: { 
        name: "Stock Assets", 
        cost: { min: 200, max: 900 }, 
        description: "Plus potential licensing costs" 
      },
      customCreated: { 
        name: "Custom-Created Assets", 
        cost: { min: 800, max: 3000 }, 
        description: "Custom content creation is offered as a separate service which can be bundled with web and app development" 
      }
    }
  },
  
  // Features & Integrations
  features: {
    title: "Features & Integrations",
    description: "These features can be very technical and difficult to implement from scratch, therefore custom coded solutions can significantly increase development time and cost",
    options: {
      ecommerce: { 
        name: "E-commerce / Online Store", 
        cost: { min: 1000, max: 5000 } 
      },
      userProfiles: { 
        name: "User Profiles / Portals", 
        cost: { min: 800, max: 2500 } 
      },
      booking: { 
        name: "Booking / Scheduling / Events", 
        cost: { min: 600, max: 2000 } 
      },
      dashboards: { 
        name: "Dashboards & Analytics", 
        cost: { min: 900, max: 2800 } 
      },
      advancedSecurity: { 
        name: "Advanced Security (e.g., 2FA, advanced encryption)", 
        cost: { min: 500, max: 2500 } 
      },
      accessibility: { 
        name: "Multilingual Support / Light/Dark Mode (or other accessibility features)", 
        cost: { min: 500, max: 2500 } 
      }
    }
  },
  
  // Ongoing Support Options
  ongoingSupport: {
    title: "Ongoing Support Options",
    description: "Extra work beyond retainer is billed hourly, expedited service and other circumstances may incur extra fees",
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
        name: "Extended Support (continuous updates, web mastering, training & knowledge transfer | up to 20 hours dedicated support per month)", 
        cost: { min: 500, max: 900 }, 
        description: "Up to 20 hours dedicated support per month" 
      },
      dedicated: { 
        name: "Dedicated Developer/Analyst Support (for ongoing optimization and strategy | up to 40 hours dedicated support per month)", 
        cost: { min: 1000, max: 3000 }, 
        description: "Up to 40 hours dedicated support per month" 
      }
    }
  },
  
  // Optional Add-Ons
  addOns: {
    title: "Optional Add-Ons",
    options: {
      migrations: { 
        name: "Migrations", 
        cost: { min: 500, max: 2500 }, 
        description: "Migrations involve moving content from an old platform to a new one" 
      },
      additionalRevisions: { 
        name: "Additional Revisions", 
        cost: { min: 300, max: 800 }, 
        description: "Per Round. Basic check-ins and revisions are complimentary, extra revisions increase cost and development time" 
      },
      contentCreation: { 
        name: "Content Creation Services", 
        cost: { min: 50, max: 100 }, 
        description: "Per Hour. Professional content creation services such as copywriting, blog posts, product descriptions, and other written or multimedia content as needed" 
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
    description: "Available as separate services that can be bundled with Web & App Development.",
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
        name: "Consulting and Training",
        url: "/services/consulting-and-training"
      }
    ]
  }
};

export default webAppDevelopmentTable;