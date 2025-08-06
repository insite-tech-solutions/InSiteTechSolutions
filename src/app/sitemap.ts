/**
 * @fileoverview Sitemap Generation for SEO
 * 
 * Next.js App Router sitemap generation function that creates a comprehensive
 * XML sitemap for search engines. Includes all static pages, service pages,
 * and dynamic content with appropriate priorities and change frequencies.
 * 
 * Features:
 * - Static page sitemap generation
 * - Service page sitemap generation
 * - Priority-based URL ranking
 * - Change frequency optimization
 * - SEO-friendly sitemap structure
 * - Next.js App Router integration
 * - Search engine optimization
 * - Comprehensive site coverage
 * 
 * @module sitemap
 */

import { MetadataRoute } from 'next'

/**
 * Generate comprehensive sitemap for search engines
 * 
 * Creates a complete XML sitemap with all site pages, including static pages,
 * service pages, and dynamic content. Optimizes for search engine crawling
 * with appropriate priorities and change frequencies.
 * 
 * Key Features:
 * - Static page coverage with priorities
 * - Service page generation
 * - SEO-optimized change frequencies
 * - Priority-based URL ranking
 * - Comprehensive site coverage
 * 
 * Sitemap Structure:
 * - Homepage (priority 1.0, weekly updates)
 * - Service pages (priority 0.9, monthly updates)
 * - About pages (priority 0.7-0.8, monthly updates)
 * - Contact page (priority 0.9, monthly updates)
 * - FAQ and blog (priority 0.6-0.7, monthly/weekly updates)
 * - Legal pages (priority 0.3, yearly updates)
 * 
 * @returns {MetadataRoute.Sitemap} Complete sitemap array for Next.js
 * 
 * @example
 * ```tsx
 * // Automatically called by Next.js at /sitemap.xml
 * export default function sitemap() {
 *   return generateSitemap();
 * }
 * ```
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://insitetechsolutions.com'
  
  // Use a single timestamp for all URLs for consistency
  const now = new Date();

  // Static pages with priorities and change frequencies
  const staticPages = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about/about-us`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about/development-process`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about/pricing-and-payments`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about/previous-works`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about/privacy-policy-and-terms-of-service`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/insites/faq`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/insites/blog`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ]

  // Service pages with high priority for SEO
  const servicePages = [
    'web-and-app-development',
    'custom-software-solutions',
    'seo-and-online-marketing',
    'graphic-design-and-branding',
    'data-analysis',
    'ai-and-automation',
    'consulting-and-training',
  ].map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  return [...staticPages, ...servicePages]
}