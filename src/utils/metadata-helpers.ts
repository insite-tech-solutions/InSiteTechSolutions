/**
 * @fileoverview Metadata Helper Functions for SEO
 * 
 * Utility functions to generate consistent metadata across pages with canonical URLs,
 * OpenGraph images, and other SEO enhancements. Provides structured metadata generation
 * for different page types and content.
 * 
 * Features:
 * - Comprehensive metadata generation with SEO optimizations
 * - Service-specific metadata with custom OpenGraph images
 * - About page metadata with appropriate branding
 * - JSON-LD structured data for organization schema
 * - Article metadata for blog content
 * - Canonical URL management
 * - Social media optimization (OpenGraph, Twitter Cards)
 * - Consistent branding and contact information
 * 
 * @module metadataHelpers
 */

import { Metadata } from 'next'

const BASE_URL = 'https://www.insitetechsolutions.com'

/**
 * Generate comprehensive metadata for a page
 * 
 * Creates complete metadata object with SEO optimizations including canonical URLs,
 * OpenGraph images, Twitter Cards, and structured data for search engines.
 * 
 * Key Features:
 * - Canonical URL generation
 * - OpenGraph and Twitter Card optimization
 * - Author and publisher attribution
 * - Robot directives for search indexing
 * - Structured metadata for social sharing
 * 
 * @param {Object} options - Metadata configuration options
 * @param {string} options.title - Page title
 * @param {string} options.description - Page description
 * @param {string} options.path - Page URL path
 * @param {string} [options.image] - Custom OpenGraph image URL
 * @param {string} [options.keywords] - SEO keywords
 * @param {'website'|'article'} [options.type='website'] - Content type
 * @returns {Metadata} Complete metadata object with SEO optimizations
 * 
 * @example
 * ```tsx
 * const metadata = generateMetadata({
 *   title: "Web Development Services",
 *   description: "Professional web development solutions",
 *   path: "/services/web-development",
 *   keywords: "web development, custom websites"
 * });
 * ```
 */
export function generateMetadata(options: {
  title: string
  description: string
  path: string
  image?: string
  keywords?: string
  type?: 'website' | 'article'
}): Metadata {
  const { title, description, path, image, keywords, type = 'website' } = options
  
  const url = `${BASE_URL}${path}`
  const defaultImage = `${BASE_URL}/Insite Tech Solutions Light.png`
  const ogImage = image || defaultImage

  return {
    title,
    description,
    keywords,
    authors: [{ name: "InSite Tech Solutions" }],
    creator: "InSite Tech Solutions",
    publisher: "InSite Tech Solutions",
    robots: "index, follow",
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      locale: "en_US",
      url,
      title,
      description,
      siteName: "InSite Tech Solutions",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }
}

/**
 * Generate service page metadata with custom OpenGraph images
 * 
 * Creates service-specific metadata with appropriate branding, keywords,
 * and custom OpenGraph images for each service type.
 * 
 * Key Features:
 * - Service-specific OpenGraph images
 * - Targeted keywords for service pages
 * - Consistent branding and structure
 * - SEO-optimized titles and descriptions
 * 
 * @param {string} serviceName - Name of the service
 * @param {string} description - Service description
 * @param {string} slug - Service URL slug
 * @returns {Metadata} Service-specific metadata with custom images
 * 
 * @example
 * ```tsx
 * const metadata = generateServiceMetadata(
 *   "Web Development",
 *   "Custom web development solutions",
 *   "web-and-app-development"
 * );
 * ```
 */
export function generateServiceMetadata(
  serviceName: string,
  description: string,
  slug: string
): Metadata {
  // Map service slugs to their OpenGraph images
  const ogImageMap: Record<string, string> = {
    'ai-and-automation': `${BASE_URL}/opengraph-images/ai-automation-graphic.png`,
    'web-and-app-development': `${BASE_URL}/opengraph-images/web-app-dev-graphic.png`,
    'custom-software-solutions': `${BASE_URL}/opengraph-images/custom-software-graphic.png`,
    'seo-and-online-marketing': `${BASE_URL}/opengraph-images/seo-graphic.png`,
    'graphic-design-and-branding': `${BASE_URL}/opengraph-images/graphic-design-graphic.png`,
    'data-analysis': `${BASE_URL}/opengraph-images/data-analysis-graphic.png`,
    'consulting-and-training': `${BASE_URL}/opengraph-images/consulting-graphic.png`,
  };

  return generateMetadata({
    title: `${serviceName} | InSite Tech Solutions`,
    description,
    path: `/services/${slug}`,
    image: ogImageMap[slug] || undefined, // Use service-specific image or fallback to default
    keywords: `${serviceName.toLowerCase()}, technology services, custom solutions, InSite Tech Solutions, Buffalo NY, Western New York, local tech services`,
    type: 'website',
  })
}

/**
 * Generate about page metadata with company branding
 * 
 * Creates metadata for about pages with appropriate company branding,
 * consistent structure, and targeted keywords for company information.
 * 
 * Key Features:
 * - Company logo for OpenGraph images
 * - Company-focused keywords
 * - Consistent about page structure
 * - Brand-appropriate metadata
 * 
 * @param {string} pageName - Name of the about page
 * @param {string} description - Page description
 * @param {string} slug - Page URL slug
 * @returns {Metadata} About page metadata with company branding
 * 
 * @example
 * ```tsx
 * const metadata = generateAboutMetadata(
 *   "About Us",
 *   "Learn about InSite Tech Solutions",
 *   "about-us"
 * );
 * ```
 */
export function generateAboutMetadata(
  pageName: string,
  description: string,
  slug: string
): Metadata {
  // Map about page slugs to their OpenGraph images
  const aboutOgImageMap: Record<string, string> = {
    'about-us': `${BASE_URL}/Insite Tech Solutions Light.png`, // Use company logo for about us
    'development-process': `${BASE_URL}/Insite Tech Solutions Light.png`, // Process relates to development
    'pricing-and-payments': `${BASE_URL}/Insite Tech Solutions Light.png`, // Use company logo for pricing
    'previous-works': `${BASE_URL}/Insite Tech Solutions Light.png`, // Portfolio relates to custom software
    'privacy-policy-and-terms-of-service': `${BASE_URL}/Insite Tech Solutions Light.png`, // Legal pages use company logo
  };

  return generateMetadata({
    title: `${pageName} | InSite Tech Solutions`,
    description,
    path: `/about/${slug}`,
    image: aboutOgImageMap[slug] || undefined,
    keywords: `${pageName.toLowerCase()}, company information, InSite Tech Solutions`,
    type: 'website',
  })
}

/**
 * Generate JSON-LD structured data for Organization schema
 * 
 * Creates structured data markup for search engines to understand
 * the organization's information, contact details, and social profiles.
 * 
 * Key Features:
 * - Organization schema markup
 * - Contact information with phone and email
 * - Social media profile links
 * - Company description and services
 * - Structured data for rich snippets
 * 
 * @returns {Record<string, unknown>} JSON-LD structured data object
 * 
 * @example
 * ```tsx
 * const jsonLd = generateOrganizationJsonLd();
 * // Use in <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
 * ```
 */
export function generateOrganizationJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "InSite Tech Solutions",
    url: BASE_URL,
    description: "InSite Tech Solutions provides custom software development, web development & app development, SEO & online marketing, graphic design & branding, data analysis, AI automation, and consulting & training services.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-716-406-8988",
        contactType: "Customer Service",
        email: "contact@insitetechsolutions.com"
      }
    ],
    sameAs: [
      "https://www.linkedin.com/company/insite-tech-solutions",
      "https://github.com/insite-tech-solutions",
      "https://www.facebook.com/share/198f3uKoyc/?mibextid=wwXIfr", 
      "https://nextdoor.com/pages/insite-tech-solutions-lockport-ny/"
    ]
  }
}

/**
 * Generate metadata for blog articles with enhanced article schema
 * 
 * Creates article-specific metadata with publication dates, authors,
 * and tags for blog content optimization.
 * 
 * Key Features:
 * - Article-specific OpenGraph type
 * - Publication date and author information
 * - Tag-based categorization
 * - Enhanced article schema markup
 * - Blog content optimization
 * 
 * @param {Object} options - Article metadata options
 * @param {string} options.title - Article title
 * @param {string} options.description - Article description
 * @param {string} options.path - Article URL path
 * @param {string} options.publishedTime - ISO date string of publication
 * @param {string[]} [options.authors] - Article authors
 * @param {string[]} [options.tags] - Article tags/categories
 * @returns {Metadata} Article-specific metadata with enhanced schema
 * 
 * @example
 * ```tsx
 * const metadata = generateArticleMetadata({
 *   title: "Latest Web Development Trends",
 *   description: "Explore the latest trends in web development",
 *   path: "/blog/web-development-trends",
 *   publishedTime: "2024-01-15T10:00:00Z",
 *   authors: ["John Doe"],
 *   tags: ["web development", "trends"]
 * });
 * ```
 */
export function generateArticleMetadata(options: {
  title: string,
  description: string,
  path: string,
  publishedTime: string,
  authors?: string[],
  tags?: string[]
}): Metadata {
  const { title, description, path, publishedTime, authors, tags } = options;
  const base = generateMetadata({ title, description, path, type: 'article' });
  return {
    ...base,
    openGraph: {
      ...base.openGraph!,
      type: 'article',
      publishedTime,
      authors,
      tags
    }
  };
}