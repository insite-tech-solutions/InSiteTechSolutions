// content/calculator_tables/graphicDesignBranding.ts

//import { CostRange, Multiplier } from './types';

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
        name: "Branding Package (logo + business card + social/web banner)", 
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
        multiplier: { value: 1.25 } 
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
          url: "/services/consulting-and-training"
        }
      ]
    }
};

export default graphicDesignBrandingTable;