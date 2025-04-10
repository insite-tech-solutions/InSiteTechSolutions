// content/calculator_tables/seoOnlineMarketing.ts

//import { CostRange, Multiplier } from './types';

export const seoOnlineMarketingTable = {
  name: "SEO & Online Marketing",
  
  // New metadata structure to control rendering and organization
  metadata: {
    // Define which category each section belongs to
    categories: {
      "Project Details": ["serviceModel", "geographicalScope", "campaignDuration", "designApproach", "campaignMedium", "assetSourcing"],
      "Features": ["seoServices", "marketingServices"],
      "Support & Timeline": ["ongoingSupport", "timeline"],
      "Additional Options": ["analytics", "addOns", "extraServices"]
    },
    
    // Define how each section should be rendered
    renderTypes: {
      "serviceModel": "dropdown",
      "geographicalScope": "dropdown",
      "campaignDuration": "dropdown",
      "designApproach": "dropdown",
      "campaignMedium": "dropdown",
      "assetSourcing": "dropdown",
      "seoServices": "multi-checkbox",
      "marketingServices": "multi-checkbox",
      "ongoingSupport": "dropdown",
      "timeline": "dropdown",
      "analytics": "dropdown",
      "addOns": "multi-checkbox",
      "extraServices": "informational",
      "specialNotes": "informational"
    },
    
    // Define which costs are recurring
    recurringCosts: {
      "ongoingSupport": "month"
    }
  },
  
  // Service Model
  serviceModel: {
    title: "Service Model",
    options: {
      consulting: { 
        name: "Consulting/Advising", 
        cost: { min: 250, max: 1500 } 
      },
      campaignDevelopment: { 
        name: "Campaign Development", 
        cost: { min: 500, max: 4000 } 
      },
      fullManagement: { 
        name: "Full Campaign Management", 
        cost: { min: 1000, max: 6000 } 
      }
    }
  },
  
  // Geographical Scope
  geographicalScope: {
    title: "Geographical Scope",
    options: {
      local: { 
        name: "Local", 
        multiplier: { value: 1.0 },
        description: "Base"
      },
      regional: { 
        name: "Regional", 
        multiplier: { value: 1.25 } 
      },
      national: { 
        name: "National", 
        multiplier: { value: 1.5 } 
      },
      global: { 
        name: "Global", 
        multiplier: { value: 2.0 } 
      }
    },
    description: "Broader geographical campaigns require more resources, strategic planning, and may incur additional regulatory costs."
  },
  
  // Campaign Duration
  campaignDuration: {
    title: "Campaign Duration",
    options: {
      shortTerm: { 
        name: "Short-Term (1-3 months)", 
        multiplier: { value: 1.0 },
        description: "Base"
      },
      longTerm: { 
        name: "Ongoing or Long-Term (3+ months)", 
        multiplier: { value: 1.5 } 
      }
    },
    description: "Longer durations often result in higher cumulative costs and require sustained effort."
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
        multiplier: { value: 1.25 } 
      },
      fullyCustom: { 
        name: "Fully Custom Design", 
        multiplier: { value: 2.0 } 
      }
    },
    description: "Design quality impacts how the campaign is perceived; custom designs often drive better engagement."
  },
  
  // Campaign Medium
  campaignMedium: {
    title: "Campaign Medium",
    options: {
      text: { 
        name: "Text", 
        cost: { min: 0, max: 0 },
        description: "Base"
      },
      graphics: { 
        name: "Graphics/Images", 
        cost: { min: 200, max: 800 } 
      },
      multimedia: { 
        name: "Videos/Multi-Media", 
        cost: { min: 800, max: 3000 } 
      }
    },
    description: "Complex media require additional production, editing, and licensing considerations."
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
        cost: { min: 100, max: 500 } 
      },
      customCreated: { 
        name: "Custom-Created Assets", 
        cost: { min: 500, max: 3000 } 
      }
    },
    description: "Custom content creation can be bundled with campaign management for added value."
  },
  
  // SEO Services
  seoServices: {
    title: "SEO Services",
    description: "Each component of SEO can be scaled or customized based on current site needs.",
    options: {
      onPageOptimization: { 
        name: "On-Page Optimization (Meta-tags, Titles, Descriptions, Content Optimization, Keyword Targeting, Internal Linking)", 
        cost: { min: 500, max: 2000 } 
      },
      offPageOptimization: { 
        name: "Off-Page Optimization (Backlink Building, Outreach, Social Sharing Strategies)", 
        cost: { min: 800, max: 2500 } 
      },
      technicalSEO: { 
        name: "Technical SEO (Site Speed, Mobile Optimization, Schema Markup)", 
        cost: { min: 600, max: 2000 } 
      },
      trackingAnalytics: { 
        name: "Tracking & Analytics Setup (Google Analytics Integration, Reporting Tools)", 
        cost: { min: 300, max: 1000 } 
      }
    }
  },
  
  // Marketing Services
  marketingServices: {
    title: "Marketing Services",
    description: "Marketing services are priced based on scope, expected ROI, and platform complexity.",
    options: {
      emailTemplates: { 
        name: "Email Marketing - Template-Based Campaigns", 
        cost: { min: 300, max: 1000 } 
      },
      emailCustom: { 
        name: "Email Marketing - Custom-Coded Emails or Custom Solutions", 
        cost: { min: 800, max: 2500 } 
      },
      googleAds: { 
        name: "Paid Advertising - Google Ads / PPC Campaigns", 
        cost: { min: 500, max: 2000 } 
      },
      socialAds: { 
        name: "Paid Advertising - Social Media Advertising", 
        cost: { min: 250, max: 1500 } 
      },
      multiPlatformAds: { 
        name: "Paid Advertising - Multi-Platform Ad Campaigns", 
        cost: { min: 500, max: 4000 } 
      },
      contentStrategies: { 
        name: "Content Strategies (Strategy Development for Social Media, Website, Blog)", 
        cost: { min: 500, max: 2000 } 
      }
    }
  },
  
  // Analytics & Optimization
  analytics: {
    title: "Analytics & Optimization",
    description: "In-depth analytics provide better insights but require more setup and ongoing analysis.",
    options: {
      none: { 
        name: "None", 
        cost: { min: 0, max: 0 } 
      },
      basic: { 
        name: "Basic Analytics (Traffic, Engagement Metrics)", 
        cost: { min: 300, max: 1000 } 
      },
      advanced: { 
        name: "Advanced Analytics (A/B Testing, Conversion Tracking, ROI Analysis, Custom Reporting)", 
        cost: { min: 1000, max: 3000 } 
      }
    }
  },
  
  // Ongoing Support Options
  ongoingSupport: {
    title: "Ongoing Support Options",
    description: "Extra work beyond the retainer is billed hourly; expedited services may incur additional fees.",
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
        name: "Extended Support (continuous updates, ongoing campaign adjustments, training | up to 20 hours dedicated support per month)", 
        cost: { min: 400, max: 900 },
        description: "Up to 20 hours dedicated support per month"
      },
      dedicated: { 
        name: "Dedicated Account/Strategy Support (ongoing optimization and strategic planning | up to 40 hours dedicated support per month)", 
        cost: { min: 1000, max: 3000 },
        description: "Up to 40 hours dedicated support per month"
      }
    }
  },
  
  // Optional Add-Ons
  addOns: {
    title: "Optional Add-Ons",
    description: "These add-ons can be bundled to tailor campaigns to specific client needs.",
    options: {
      customTools: { 
        name: "Custom SEO or Marketing Tools", 
        cost: { min: 500, max: 4000 }, 
        description: "Tailored Dashboards, Specialized Plugins/Integrations, etc."
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
    title: "Timeline & Delivery",
    description: "Timeline multipliers reflect the need for rapid execution, which can increase costs.",
    options: {
      noRush: { 
        name: "No-Rush Campaign Planning", 
        multiplier: { value: 0.9 } 
      },
      standard: { 
        name: "Standard Campaign Timeline", 
        multiplier: { value: 1.0 } 
      },
      expedited: { 
        name: "Expedited/Rush Campaign Execution", 
        multiplier: { value: 1.5 } 
      }
    }
  },
  
    // Extra Services & Customizations
    extraServices: {
      title: "Extra Services & Customizations",
      description: "Available as separate services that can be bundled with SEO & Online Marketing.",
      options: [
        { 
          name: "Logos & Brand Identity Development",
          url: "/services/graphic-design-and-branding"
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
    }
};

export default seoOnlineMarketingTable;