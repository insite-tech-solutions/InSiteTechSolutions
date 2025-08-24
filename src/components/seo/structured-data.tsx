/**
 * @fileoverview Structured Data Components for SEO
 * 
 * Provides reusable components for adding JSON-LD structured data to pages.
 * Implements Schema.org markup for better search engine understanding and rich snippets.
 * 
 * Features:
 * - Organization schema for company information
 * - Service schema for individual service pages
 * - WebPage schema for general page markup
 * - Breadcrumb schema for navigation structure
 * - Article schema for blog content
 * - LocalBusiness schema for local SEO
 * - FAQ schema for FAQ pages
 * - Rich snippet optimization
 * - Search engine understanding enhancement
 * 
 * @module StructuredData
 */

/**
 * Organization schema interface for structured data
 */
interface OrganizationSchema {
  "@context": "https://schema.org"
  "@type": "Organization"
  name: string
  url: string
  logo: string
  image?: string
  description: string
  address: {
    "@type": "PostalAddress"
    addressLocality: string
    addressRegion: string
    addressCountry: string
  }
  contactPoint: {
    "@type": "ContactPoint"
    telephone: string
    contactType: string
    areaServed?: string | string[]
    availableLanguage?: string | string[]
  }
  sameAs: string[]
  openingHours: string[]
}

/**
 * Service schema interface for structured data
 */
interface ServiceSchema {
  "@context": "https://schema.org"
  "@type": "Service"
  name: string
  description: string
  provider: {
    "@type": "Organization"
    name: string
    url: string
  }
  serviceType: string
  areaServed: string | string[]
  providerMobility: string
}

/**
 * WebPage schema interface for structured data
 */
interface WebPageSchema {
  "@context": "https://schema.org"
  "@type": "WebPage"
  name: string
  description: string
  url: string
  inLanguage: string
  mainEntity?: {
    "@type": "Organization"
    name: string
  }
}

/**
 * Breadcrumb schema interface for structured data
 */
interface BreadcrumbSchema {
  "@context": "https://schema.org"
  "@type": "BreadcrumbList"
  itemListElement: Array<{
    "@type": "ListItem"
    position: number
    name: string
    item: string
  }>
}

/**
 * Article schema interface for structured data
 */
interface ArticleSchema {
  "@context": "https://schema.org"
  "@type": "Article"
  headline: string
  description: string
  image?: string
  author: {
    "@type": "Person"
    name: string
  }
  publisher: {
    "@type": "Organization"
    name: string
    logo: {
      "@type": "ImageObject"
      url: string
    }
  }
  datePublished: string
  dateModified?: string
  mainEntityOfPage: {
    "@type": "WebPage"
    "@id": string
  }
}

/**
 * LocalBusiness schema interface for structured data
 */
interface LocalBusinessSchema {
  "@context": "https://schema.org"
  "@type": "LocalBusiness"
  name: string
  description: string
  url: string
  telephone: string
  email: string
  image?: string
  address: {
    "@type": "PostalAddress"
    addressLocality: string
    addressRegion: string
    addressCountry: string
  }
  areaServed: Array<{
    "@type": "Place"
    name: string
  }>
  serviceArea: {
    "@type": "GeoCircle"
    geoMidpoint: {
      "@type": "GeoCoordinates"
      latitude: number
      longitude: number
    }
    geoRadius: string
  }
  hasOfferCatalog: {
    "@type": "OfferCatalog"
    name: string
    itemListElement: Array<{
      "@type": "Offer"
      itemOffered: {
        "@type": "Service"
        name: string
      }
    }>
  }
}

/**
 * Static organization JSON-LD data for SEO
 * 
 * Comprehensive organization schema with contact information, social profiles,
 * and business details for enhanced search engine understanding.
 */
const organizationData: OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "InSite Tech Solutions",
  url: "https://www.insitetechsolutions.com",
  logo: "https://www.insitetechsolutions.com/Insite Tech Solutions Light.svg",
  image: "https://www.insitetechsolutions.com/Insite Tech Solutions Light.svg",
  description: "InSite Tech Solutions offers web & app development, custom software solutions, SEO & online marketing, graphic design & branding, data analysis, AI & automation, and consulting & training services. Transform your ideas into powerful digital solutions.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buffalo",
    addressRegion: "NY",
    addressCountry: "US"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-716-406-8988",
    contactType: "customer service",
    areaServed: "US",
    availableLanguage: ["English"]
  },
  sameAs: [
    "https://www.linkedin.com/company/insite-tech-solutions",
    "https://github.com/insite-tech-solutions",
    "https://www.facebook.com/share/198f3uKoyc/?mibextid=wwXIfr", 
    "https://nextdoor.com/pages/insite-tech-solutions-lockport-ny/"
  ],
  openingHours: [
    "Mo-Fr 10:00-18:00"
  ]
}

/**
 * Organization Structured Data Component
 * 
 * Provides JSON-LD structured data describing the organization for SEO.
 * Used on homepage and key business pages to improve search engine understanding.
 * 
 * Key Features:
 * - Complete organization information
 * - Contact details and social profiles
 * - Business hours and service area
 * - Enhanced search engine understanding
 * 
 * @returns {JSX.Element} Organization schema script tag
 * 
 * @example
 * ```tsx
 * <OrganizationStructuredData />
 * ```
 */
export function OrganizationStructuredData(): JSX.Element {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData, null, 0) }}
    />
  )
}

/**
 * Service Structured Data Component
 * 
 * Provides JSON-LD structured data describing a specific service for SEO.
 * Used on individual service pages to improve search engine understanding.
 * 
 * Key Features:
 * - Service-specific information
 * - Provider organization details
 * - Service area and mobility
 * - Enhanced service page SEO
 * 
 * @param {Object} props - Component props
 * @param {string} props.serviceName - Name of the service
 * @param {string} props.serviceDescription - Description of the service
 * @param {string} props.serviceType - Type/category of the service
 * @returns {JSX.Element} Service schema script tag
 * 
 * @example
 * ```tsx
 * <ServiceStructuredData
 *   serviceName="Web Development"
 *   serviceDescription="Custom web development solutions"
 *   serviceType="Web Development"
 * />
 * ```
 */
export function ServiceStructuredData({ 
  serviceName, 
  serviceDescription, 
  serviceType 
}: { 
  serviceName: string
  serviceDescription: string
  serviceType: string
}): JSX.Element {
  const serviceData: ServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    provider: {
      "@type": "Organization",
      name: "InSite Tech Solutions",
      url: "https://www.insitetechsolutions.com"
    },
    serviceType: serviceType,
    areaServed: ["Western New York", "Global"],
    providerMobility: "https://schema.org/RemoteService"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData, null, 0) }}
    />
  )
}

/**
 * WebPage Structured Data Component
 * 
 * Provides JSON-LD structured data describing a web page for SEO.
 * Used on all major pages to improve search engine understanding.
 * 
 * Key Features:
 * - Page-specific information
 * - Language and content details
 * - Main entity association
 * - Enhanced page SEO
 * 
 * @param {Object} props - Component props
 * @param {string} props.pageName - Name of the page
 * @param {string} props.pageDescription - Description of the page
 * @param {string} props.pageUrl - URL of the page
 * @returns {JSX.Element} WebPage schema script tag
 * 
 * @example
 * ```tsx
 * <WebPageStructuredData
 *   pageName="About Us"
 *   pageDescription="Learn about InSite Tech Solutions"
 *   pageUrl="https://www.insitetechsolutions.com/about"
 * />
 * ```
 */
export function WebPageStructuredData({ 
  pageName, 
  pageDescription, 
  pageUrl 
}: { 
  pageName: string
  pageDescription: string
  pageUrl: string
}): JSX.Element {
  const webPageData: WebPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageName,
    description: pageDescription,
    url: pageUrl,
    inLanguage: "en-US",
    mainEntity: {
      "@type": "Organization",
      name: "InSite Tech Solutions"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageData, null, 0) }}
    />
  )
}

/**
 * Breadcrumb Structured Data Component
 * 
 * Provides JSON-LD structured data for breadcrumb navigation for SEO.
 * Helps search engines understand site structure and can display breadcrumbs in search results.
 * 
 * Key Features:
 * - Navigation structure markup
 * - Position-based breadcrumb list
 * - Enhanced search result display
 * - Site structure understanding
 * 
 * @param {Object} props - Component props
 * @param {Array<{name: string, url: string}>} props.breadcrumbs - Array of breadcrumb items
 * @returns {JSX.Element} Breadcrumb schema script tag
 * 
 * @example
 * ```tsx
 * <BreadcrumbStructuredData
 *   breadcrumbs={[
 *     { name: "Home", url: "/" },
 *     { name: "Services", url: "/services" },
 *     { name: "Web Development", url: "/services/web-development" }
 *   ]}
 * />
 * ```
 */
export function BreadcrumbStructuredData({ 
  breadcrumbs 
}: { 
  breadcrumbs: Array<{ name: string; url: string }>
}): JSX.Element {
  const breadcrumbData: BreadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData, null, 0) }}
    />
  )
}

/**
 * Article Structured Data Component
 * 
 * Provides JSON-LD structured data for blog articles for SEO.
 * Helps search engines understand article content and display rich snippets.
 * 
 * Key Features:
 * - Article-specific markup
 * - Author and publisher information
 * - Publication dates
 * - Enhanced article SEO
 * 
 * @param {Object} props - Component props
 * @param {Object} props.article - Article information
 * @param {string} props.article.title - Article title
 * @param {string} props.article.description - Article description
 * @param {string} props.article.url - Article URL
 * @param {string} props.article.author - Article author
 * @param {string} props.article.publishedTime - Publication date
 * @param {string} [props.article.modifiedTime] - Last modified date
 * @param {string} [props.article.image] - Article image URL
 * @returns {JSX.Element} Article schema script tag
 * 
 * @example
 * ```tsx
 * <ArticleStructuredData
 *   article={{
 *     title: "Latest Web Development Trends",
 *     description: "Explore the latest trends in web development",
 *     url: "www.nsitetechsolutions.com/blog/trends",
 *     author: "John Doe",
 *     publishedTime: "2024-01-15T10:00:00Z"
 *   }}
 * />
 * ```
 */
export function ArticleStructuredData({ 
  article 
}: { 
  article: {
    title: string
    description: string
    url: string
    author: string
    publishedTime: string
    modifiedTime?: string
    image?: string
  }
}): JSX.Element {
  const articleData: ArticleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image || "https://www.insitetechsolutions.com/Insite Tech Solutions Light.svg",
    author: {
      "@type": "Person",
      name: article.author
    },
    publisher: {
      "@type": "Organization",
      name: "InSite Tech Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://www.insitetechsolutions.com/Insite Tech Solutions Light.svg"
      }
    },
    datePublished: article.publishedTime,
    dateModified: article.modifiedTime || article.publishedTime,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData, null, 0) }}
    />
  )
}

/**
 * Static local business JSON-LD data for SEO
 * 
 * Comprehensive local business schema with geographic information,
 * service area details, and offer catalog for local SEO optimization.
 */
const localBusinessData: LocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "InSite Tech Solutions",
  description: "Custom software development, web development, and technical consulting services serving Western New York and beyond.",
  url: "https://www.insitetechsolutions.com",
  telephone: "+1-716-406-8988",
  email: "contact@insitetechsolutions.com",
  image: "https://www.insitetechsolutions.com/Insite Tech Solutions Light.svg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buffalo",
    addressRegion: "NY",
    addressCountry: "US"
  },
  areaServed: [
    {
      "@type": "Place",
      name: "Western New York"
    },
    {
      "@type": "Place", 
      name: "Buffalo, NY"
    },
    {
      "@type": "Place",
      name: "Rochester, NY"
    },
    {
      "@type": "Place",
      name: "Amherst, NY"
    },
    {
      "@type": "Place",
      name: "United States"
    }
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 42.8864, // Buffalo, NY coordinates
      longitude: -78.8784
    },
    geoRadius: "50000" // 50km radius
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Technology Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web & App Development"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Software Solutions"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI & Automation"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Data Analysis"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO & Online Marketing"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Graphic Design & Branding"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Consulting & Training"
        }
      }
    ]
  }
}

/**
 * LocalBusiness Structured Data Component
 * 
 * Provides JSON-LD structured data describing the local business for SEO.
 * Used to improve local search rankings and highlight service area.
 * 
 * Key Features:
 * - Local business information
 * - Geographic service area
 * - Service catalog
 * - Enhanced local SEO
 * 
 * @returns {JSX.Element} LocalBusiness schema script tag
 * 
 * @example
 * ```tsx
 * <LocalBusinessStructuredData />
 * ```
 */
export function LocalBusinessStructuredData(): JSX.Element {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData, null, 0) }}
    />
  )
}

/**
 * FAQ Schema interface for structured data
 */
export interface FAQSchema {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }>;
}

/**
 * FAQ Structured Data Component
 * 
 * Provides FAQ schema markup for rich snippets in search results.
 * Helps Google display FAQ results directly in search results.
 * 
 * Key Features:
 * - FAQ page markup
 * - Question and answer structure
 * - Rich snippet optimization
 * - Enhanced FAQ SEO
 * 
 * @param {Object} props - Component props
 * @param {Array<{question: string, answer: string}>} props.faqs - Array of FAQ items
 * @returns {JSX.Element} FAQ schema script tag
 * 
 * @example
 * ```tsx
 * <FAQStructuredData
 *   faqs={[
 *     { question: "What services do you offer?", answer: "We offer..." },
 *     { question: "How much do services cost?", answer: "Our pricing..." }
 *   ]}
 * />
 * ```
 */
export function FAQStructuredData({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const faqSchema: FAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema, null, 0) }}
    />
  );
}