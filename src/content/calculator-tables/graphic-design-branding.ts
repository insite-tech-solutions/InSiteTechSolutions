/**
 * @fileoverview Pricing and Configuration Table for Graphic Design & Branding Services
 *
 * This file defines the pricing and configuration data for Graphic Design & Branding services.
 * It includes project types, media formats, branding strategy, timelines, and optional add-ons
 * used for estimating cost in the pricing calculator.
 */

/**
 * Pricing and configuration table for Graphic Design & Branding services.
 * Includes project types, media formats, branding strategy, timelines, and optional add-ons
 * used for estimating cost in the pricing calculator.
 * 
 * @type {Object}
 * @property {string} name - The name of the service category.
 * @property {Object} metadata - Metadata structure for rendering and organization.
 * @property {Object} serviceType - Types of graphic design services with options and costs.
 * @property {Object} projectApproach - Project approach options with multipliers.
 * @property {Object} mediaFormats - Media formats options with costs.
 * @property {Object} medium - Medium options with costs.
 * @property {Object} numberOfVariations - Number of variations options with costs.
 * @property {Object} serviceDuration - Service duration options with costs.
 * @property {Object} addOns - Optional add-ons with descriptions and costs.
 * @property {Object} timeline - Project timeline options with multipliers.
 * @property {Object} extraServices - Extra services and customizations available for bundling.
 */
// content/calculator_tables/graphicDesignBranding.ts

export const graphicDesignBrandingTable = {
  name: "Graphic Design & Branding",
  
  // New metadata structure to control rendering and organization
  metadata: {
    // Define which category each section belongs to
    categories: {
      "Project Details": ["serviceType", "projectApproach", "mediaFormats", "medium", "numberOfVariations"],
      "Support & Timeline": ["serviceDuration", "timeline"],
      "Additional Options": ["addOns", "extraServices"]
    },
    
    // Define how each section should be rendered
    renderTypes: {
      "serviceType": "dropdown",
      "projectApproach": "dropdown",
      "mediaFormats": "dropdown",
      "medium": "dropdown",
      "numberOfVariations": "dropdown",
      "serviceDuration": "dropdown",
      "timeline": "dropdown",
      "addOns": "multi-checkbox",
      "extraServices": "informational"
    },
    
    // Define which costs are recurring
    recurringCosts: {
      "serviceDuration": "month"
    }
  },
  
  // Service Type
  serviceType: {
    title: "Service Type",
    options: {
      individualDesigns: { 
        name: "Individual Designs (e.g., single logo, business cards, social media banners)", 
        cost: { min: 200, max: 1500 } 
      },
      brandingPackage: { 
        name: "Branding Package (e.g. logo + business card + social/web banner)", 
        cost: { min: 1500, max: 4000 } 
      },
      fullBrandDevelopment: { 
        name: "Full Brand Development Strategy (visual identity, messaging, guidelines)", 
        cost: { min: 3000, max: 8000 } 
      }
    }
  },
  
  // Project Approach
  projectApproach: {
    title: "Project Approach",
    description: "Rebranding often takes less time since there is already a starting point, however this varies on a case-by-case basis.",
    options: {
      newBrand: { 
        name: "New Brand Development", 
        multiplier: { value: 1.0 },
        description: "Base"
      },
      rebranding: { 
        name: "Rebranding (Update/Refresh Existing Brand)", 
        multiplier: { value: 0.9 } 
      }
    }
  },
  
  // Media Formats
  mediaFormats: {
    title: "Media Formats",
    options: {
      staticElements: { 
        name: "Static Elements (images, business cards, stationery)", 
        cost: { min: 0, max: 0 },
        description: "Base"
      },
      animatedElements: { 
        name: "Animated Elements (GIFs, short animations, video intros)", 
        cost: { min: 300, max: 1500 } 
      }
    }
  },
  
  // Medium
  medium: {
    title: "Medium",
    description: "Multimedia elements require additional production time and may incur licensing costs.",
    options: {
      textGraphics: { 
        name: "Text and Graphics", 
        cost: { min: 0, max: 0 },
        description: "Base"
      },
      multimedia: { 
        name: "Photos/Videos/Multi-Media", 
        cost: { min: 800, max: 3000 } 
      }
    }
  },
  
  // Number of Variations
  numberOfVariations: {
    title: "Number of Variations",
    options: {
      single: { 
        name: "Single Version", 
        cost: { min: 0, max: 0 },
        description: "Base"
      },
      multiple: { 
        name: "Multiple Variations (logo variations, color schemes)", 
        cost: { min: 300, max: 1000 },
        description: "Per variation"
      }
    }
  },
  
  // Service Duration
  serviceDuration: {
    title: "Service Duration",
    description: "Ongoing services ensure brand consistency and engaging updates.",
    options: {
      oneTime: { 
        name: "One-Time Design/Delivery", 
        cost: { min: 0, max: 0 },
        description: "Base"
      },
      ongoing: { 
        name: "Ongoing Updates & Maintenance (brand refreshes, seasonal updates)", 
        cost: { min: 150, max: 1000 },
        description: "Per month"
      }
    }
  },
  
  // Optional Add-Ons
  addOns: {
    title: "Optional Add-Ons",
    options: {
      additionalRevisions: { 
        name: "Additional Revisions", 
        cost: { min: 100, max: 300 },
        description: "Per round. Basic check-ins and revisions are complimentary, extra revisions increase cost and development time"
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
      description: "Available as separate services that can be bundled with Graphic Design & Branding.",
      options: [
        { 
          name: "Marketing & SEO",
          url: "/services/seo-and-online-marketing"
        },
        { 
          name: "Market and Data Analysis",
          url: "/services/data-analysis"
        },
        { 
          name: "Consulting and Training",
          url: "/services/consulting-and-training",
        }
      ]
    }
};

export default graphicDesignBrandingTable;