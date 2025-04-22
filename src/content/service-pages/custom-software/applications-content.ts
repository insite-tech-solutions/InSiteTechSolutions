// src/content/service-pages/custom-software/applications-content.ts

import { ApplicationsContent } from '@/page-templates/service-page/types';

/**
 * Applications content for the Custom Software Solutions service page.
 */
const customSoftwareApplications: ApplicationsContent = {
  title: "Empowering Businesses Across Diverse Sectors",
  description: "Our custom software solutions cater to a wide range of industries, providing specialized tools that address unique challenges and drive innovation. Our digital strategies help clients by enhancing their:",
  industrySolutionsTitle: "Industry-Specific Solutions",
  industrySolutionsDescription: "Drawing on our technical expertise across numerous sectors, we create customized solutions that meet the unique demands of your industry.",
  
  categories: [
    {
      title: "Business Operations",
      icon: "Cog",
      items: [
        "Custom management applications",
        "Inventory and supply chain management systems",
        "Workflow automation tools",
        "Analytics and reporting dashboards"
      ]
    },
    {
      title: "Research & Development",
      icon: "TestTube",
      items: [
        "Computational simulations and modeling",
        "Data analysis and visualization tools",
        "Research management systems",
        "Laboratory information systems"
      ]
    },
    {
      title: "Digital Infrastructure",
      icon: "Server",
      items: [
        "Legacy system modernization",
        "Cloud migrations and system integrations",
        "Digital workflow transformations",
        "Internally managed software solutions"
      ]
    }
  ],
  
  industries: [
    {
      title: "Manufacturing & Engineering",
      icon: "Settings",
      items: [
        "Process control systems",
        "Quality assurance software",
        "Equipment monitoring",
        "Production planning tools"
      ]
    },
    {
      title: "Retail & E-commerce",
      icon: "ShoppingCart",
      items: [
        "Custom POS systems",
        "Product customization tools",
        "Inventory management solutions",
        "Interactive product catalogs"
      ]
    },
    {
      title: "Professional Services",
      icon: "Briefcase",
      items: [
        "Client management portals",
        "Service tracking platforms",
        "Resource scheduling systems",
        "Reporting and analytics tools"
      ]
    },
    {
      title: "Logistics & Supply Chain",
      icon: "Truck",
      items: [
        "Transportation management systems",
        "Warehouse management software",
        "Supply chain optimization tools"
      ]
    }
  ], 
  backgroundIcon: "Code2"
};

export default customSoftwareApplications;