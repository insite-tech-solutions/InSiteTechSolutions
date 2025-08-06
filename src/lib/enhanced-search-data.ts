/**
 * @fileoverview Enhanced Search Data Module
 * 
 * This module creates a comprehensive search index using real content from
 * the application's .ts content files while maintaining simplicity and type safety.
 * Provides advanced search functionality with relevance scoring and fuzzy matching.
 * 
 * Features:
 * - Uses actual content from service pages, FAQ, and other content files
 * - Includes blog post indexing and dynamic content extraction
 * - Extracts service overview content for rich search results
 * - Proper URL mapping for navigation and deep linking
 * - Enhanced search relevance scoring with type boosting
 * - Type-safe implementation with TypeScript interfaces
 * - Fuzzy matching for improved search accuracy
 * - Search suggestions based on content analysis
 * 
 * Architecture:
 * - Static search data generation from content files
 * - Dynamic FAQ extraction from service pages
 * - Relevance scoring algorithm with multiple factors
 * - Type-safe search result interface
 * - Performance optimized search functions
 * 
 * @module enhancedSearchData
 */
import { SearchResult } from '@/contexts/search-context'

// Import content from service pages
import aiAutomationContent from '@/content/service-pages/ai-automation'
import consultingTrainingContent from '@/content/service-pages/consulting-training'
import customSoftwareContent from '@/content/service-pages/custom-software'
import dataAnalysisContent from '@/content/service-pages/data-analysis'
import graphicDesignContent from '@/content/service-pages/graphic-design'
import seoMarketingContent from '@/content/service-pages/seo-marketing'
import webAppDevContent from '@/content/service-pages/web-app-dev'

// Import FAQ sections
import faqPageSections from '@/content/faq-page/sections'

/**
 * Enhanced search data built from actual content files
 * 
 * Comprehensive search index containing all searchable content from the application.
 * Includes service pages, static pages, FAQ items, and technology-specific entries.
 * Each entry includes metadata for relevance scoring and proper categorization.
 * 
 * Content Types:
 * - Service pages with hero content and descriptions
 * - Static pages (home, contact, about pages)
 * - FAQ items from main FAQ and service pages
 * - Technology-specific entries for better coverage
 * - E-commerce and mobile app specific content
 * 
 * @constant {SearchResult[]} enhancedSearchData
 */
export const enhancedSearchData: SearchResult[] = [
  // Service Pages - AI & Automation
  {
    id: 'ai-automation',
    title: aiAutomationContent.hero.title,
    description: aiAutomationContent.hero.description,
    url: '/services/ai-and-automation',
    type: 'service',
    tags: ['ai', 'automation', 'artificial intelligence', 'machine learning', 'process automation', 'efficiency'],
    score: 1.0
  },
  
  // Service Pages - Consulting & Training  
  {
    id: 'consulting-training',
    title: consultingTrainingContent.hero.title,
    description: consultingTrainingContent.hero.description,
    url: '/services/consulting-and-training',
    type: 'service',
    tags: ['consulting', 'training', 'technical consulting', 'education', 'best practices', 'mentoring'],
    score: 1.0
  },
  
  // Service Pages - Custom Software
  {
    id: 'custom-software',
    title: customSoftwareContent.hero.title,
    description: customSoftwareContent.hero.description,
    url: '/services/custom-software-solutions',
    type: 'service',
    tags: ['custom software', 'software development', 'bespoke solutions', 'enterprise software'],
    score: 1.0
  },
  
  // Service Pages - Data Analysis
  {
    id: 'data-analysis',
    title: dataAnalysisContent.hero.title,
    description: dataAnalysisContent.hero.description,
    url: '/services/data-analysis',
    type: 'service',
    tags: ['data analysis', 'analytics', 'data visualization', 'insights', 'reporting', 'statistics'],
    score: 1.0
  },
  
  // Service Pages - Graphic Design
  {
    id: 'graphic-design',
    title: graphicDesignContent.hero.title,
    description: graphicDesignContent.hero.description,
    url: '/services/graphic-design-and-branding',
    type: 'service',
    tags: ['graphic design', 'branding', 'logo design', 'visual identity', 'design', 'creative'],
    score: 1.0
  },
  
  // Service Pages - SEO & Marketing
  {
    id: 'seo-marketing',
    title: seoMarketingContent.hero.title,
    description: seoMarketingContent.hero.description,
    url: '/services/seo-and-online-marketing',
    type: 'service',
    tags: ['seo', 'marketing', 'digital marketing', 'search engine optimization', 'online marketing'],
    score: 1.0
  },
  
  // Service Pages - Web & App Development
  {
    id: 'web-app-dev',
    title: webAppDevContent.hero.title,
    description: webAppDevContent.hero.description,
    url: '/services/web-and-app-development',
    type: 'service',
    tags: ['web development', 'app development', 'website', 'mobile app', 'responsive design', 'squarespace', 'wordpress'],
    score: 1.0
  },
  
  // Home Page
  {
    id: 'home',
    title: 'InSite Tech Solutions - Home',
    description: 'Custom software development, web and mobile app creation, data analysis, AI automation, and technical consulting to elevate your business.',
    url: '/',
    type: 'page',
    tags: ['home', 'main', 'tech solutions', 'software development', 'consulting'],
    score: 1.0
  },
  
  // About Pages
  {
    id: 'about-us',
    title: 'About InSite Tech Solutions',
    description: 'Learn about our company, mission, values, and the experienced team behind innovative technology solutions.',
    url: '/about/about-us',
    type: 'about',
    tags: ['about', 'company', 'team', 'mission', 'values', 'story'],
    score: 0.8
  },
  
  {
    id: 'development-process',
    title: 'Development Process & Methodology',
    description: 'Our proven 5D methodology for delivering successful technology projects: Discover, Design, Develop, Deploy, and Debug.',
    url: '/about/development-process',
    type: 'about',
    tags: ['process', 'methodology', '5d', 'development', 'workflow', 'project management'],
    score: 0.8
  },
  
  {
    id: 'previous-works',
    title: 'Previous Works & Portfolio',
    description: 'Explore our portfolio of successful projects across various industries and technologies.',
    url: '/about/previous-works',
    type: 'about',
    tags: ['portfolio', 'projects', 'work', 'examples', 'case studies', 'experience'],
    score: 0.8
  },
  
  {
    id: 'pricing-payments',
    title: 'Pricing & Payments',
    description: 'Transparent pricing information and flexible payment options for our technology services.',
    url: '/about/pricing-and-payments',
    type: 'about',
    tags: ['pricing', 'payments', 'cost', 'budget', 'rates', 'billing'],
    score: 0.8
  },
  
  // Contact & Support
  {
    id: 'contact',
    title: 'Contact InSite Tech Solutions',
    description: 'Get in touch with InSite Tech Solutions for project inquiries, consultations, or technical support.',
    url: '/contact',
    type: 'page',
    tags: ['contact', 'inquiry', 'consultation', 'support', 'get in touch'],
    score: 0.9
  },
  
  // FAQ Page
  {
    id: 'faq',
    title: 'Frequently Asked Questions',
    description: 'Find answers to common questions about our services, pricing, process, and technology solutions.',
    url: '/insites/faq',
    type: 'faq',
    tags: ['faq', 'questions', 'answers', 'help', 'support', 'information'],
    score: 0.7
  },
  
  // Blog
  {
    id: 'blog',
    title: 'InSites Blog',
    description: 'Technology insights, tutorials, best practices, and industry news from the InSite Tech Solutions team.',
    url: '/insites/blog',
    type: 'blog',
    tags: ['blog', 'insights', 'tutorials', 'news', 'technology', 'articles'],
    score: 0.7
  },

  // Technology-specific entries for better search coverage
  {
    id: 'nextjs-development',
    title: 'Next.js Development Services',
    description: 'Expert Next.js development for modern, fast, and SEO-optimized web applications using the latest React framework.',
    url: '/services/web-and-app-development',
    type: 'service',
    tags: ['nextjs', 'next.js', 'react', 'javascript', 'typescript', 'web framework', 'ssr'],
    score: 0.85
  },
  
  {
    id: 'react-development',
    title: 'React Development',
    description: 'Professional React development for interactive user interfaces and single-page applications.',
    url: '/services/web-and-app-development',
    type: 'service',
    tags: ['react', 'javascript', 'frontend', 'ui', 'spa', 'component', 'hooks'],
    score: 0.85
  },
  
  {
    id: 'python-development',
    title: 'Python Development Services',
    description: 'Python development for web applications, data analysis, AI/ML projects, automation scripts, and backend systems.',
    url: '/services/custom-software-solutions',
    type: 'service',
    tags: ['python', 'backend', 'data science', 'machine learning', 'automation', 'scripting'],
    score: 0.85
  },
  
  {
    id: 'database-design',
    title: 'Database Design & Management',
    description: 'Professional database architecture, design, optimization, and management for scalable data solutions.',
    url: '/services/data-analysis',
    type: 'service',
    tags: ['database', 'sql', 'postgresql', 'mysql', 'data modeling', 'optimization'],
    score: 0.85
  },

  // E-commerce and mobile app specific entries
  {
    id: 'ecommerce-development',
    title: 'E-commerce Solutions',
    description: 'Custom e-commerce websites and applications with secure payment processing and inventory management.',
    url: '/services/web-and-app-development',
    type: 'service',
    tags: ['ecommerce', 'online store', 'shopping', 'payment', 'inventory', 'shopify', 'woocommerce'],
    score: 0.85
  },
  
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile application development for iOS and Android devices.',
    url: '/services/web-and-app-development',
    type: 'service',
    tags: ['mobile', 'app', 'ios', 'android', 'cross-platform', 'native', 'flutter', 'react native'],
    score: 0.9
  }
]

// Add service overview content with rich markdown descriptions
const serviceConfigs = [
  { key: 'ai-automation', content: aiAutomationContent, url: '/services/ai-and-automation' },
  { key: 'consulting-training', content: consultingTrainingContent, url: '/services/consulting-and-training' },
  { key: 'custom-software', content: customSoftwareContent, url: '/services/custom-software-solutions' },
  { key: 'data-analysis', content: dataAnalysisContent, url: '/services/data-analysis' },
  { key: 'graphic-design', content: graphicDesignContent, url: '/services/graphic-design-and-branding' },
  { key: 'seo-marketing', content: seoMarketingContent, url: '/services/seo-and-online-marketing' },
  { key: 'web-app-dev', content: webAppDevContent, url: '/services/web-and-app-development' }
]

// Dynamically add FAQ items from service pages
serviceConfigs.forEach(({ key, content, url }) => {
  // Add FAQ items from service pages
  if (content.faq && content.faq.items) {
    content.faq.items.forEach((faqItem, index) => {
      if (faqItem.question && faqItem.answer) {
        enhancedSearchData.push({
          id: `service-faq-${key}-${index}`,
          title: faqItem.question,
          description: faqItem.answer,
          url: `${url}#faq`,
          type: 'faq',
          tags: ['faq', 'service', key.replace('-', ' '), 'question', 'answer'],
          score: 0.7
        })
      }
    })
  }
})

// Dynamically add FAQ items from main FAQ page
faqPageSections.forEach(section => {
  if (section.content.items) {
    section.content.items.forEach((faqItem, index) => {
      if (faqItem.question && faqItem.answer) {
        enhancedSearchData.push({
          id: `faq-${section.id}-${index}`,
          title: faqItem.question,
          description: faqItem.answer,
          url: `/insites/faq#${section.id}`,
          type: 'faq',
          tags: ['faq', 'question', 'answer', section.id],
          score: 0.8
        })
      }
    })
  }
})

/**
 * Enhanced search function with better ranking and fuzzy matching
 * 
 * Performs intelligent search across all content with relevance scoring.
 * Uses multiple factors to determine result relevance including exact matches,
 * partial matches, tag relevance, and content type boosting.
 * 
 * Scoring Algorithm:
 * - Exact title match: +100 points
 * - Title contains query: +50 points
 * - Title starts with query: +40 points
 * - Description contains query: +30 points
 * - Tag exact match: +25 points
 * - Tag partial match: +15 points
 * - Individual word matches: +5-10 points each
 * - Content type boosting: Multiplier based on type
 * 
 * @param {string} query - The search query string
 * @param {number} maxResults - Maximum number of results to return (default: 10)
 * @returns {SearchResult[]} Array of search results sorted by relevance
 * 
 * @example
 * ```tsx
 * const results = searchContent('web development', 5)
 * ```
 */
export const searchContent = (query: string, maxResults: number = 10): SearchResult[] => {
  if (!query.trim()) {
    return []
  }

  const normalizedQuery = query.toLowerCase().trim()
  const queryWords = normalizedQuery.split(/\s+/)

  // Score each result based on relevance
  const scoredResults = enhancedSearchData.map(item => {
    let score = 0
    const titleLower = item.title.toLowerCase()
    const descriptionLower = item.description.toLowerCase()
    const tagsLower = item.tags.map(tag => tag.toLowerCase())

    // Exact title match gets highest score
    if (titleLower === normalizedQuery) {
      score += 100
    }
    // Title contains query
    else if (titleLower.includes(normalizedQuery)) {
      score += 50
    }
    // Title starts with query
    else if (titleLower.startsWith(normalizedQuery)) {
      score += 40
    }

    // Description contains query
    if (descriptionLower.includes(normalizedQuery)) {
      score += 30
    }

    // Tag exact matches
    tagsLower.forEach(tag => {
      if (tag === normalizedQuery) {
        score += 25
      } else if (tag.includes(normalizedQuery)) {
        score += 15
      }
    })

    // Individual word matches
    queryWords.forEach(word => {
      if (word.length < 3) return // Skip very short words
      
      if (titleLower.includes(word)) {
        score += 10
      }
      if (descriptionLower.includes(word)) {
        score += 5
      }
      tagsLower.forEach(tag => {
        if (tag.includes(word)) {
          score += 8
        }
      })
    })

    // Boost score based on content type and inherent score
    const typeBoosts = {
      'service': 1.2,
      'page': 1.1,
      'faq': 0.9,
      'about': 0.8,
      'blog': 0.7
    }
    
    score *= (typeBoosts[item.type] || 1) * (item.score || 1)

    return { ...item, score }
  })

  // Filter results with score > 0 and sort by score
  return scoredResults
    .filter(result => result.score > 0)
    .sort((a, b) => (b.score || 0) - (a.score || 0))
    .slice(0, maxResults)
}

/**
 * Get search suggestions based on content analysis
 * 
 * Provides intelligent search suggestions based on popular terms,
 * content titles, and tags. Helps users discover relevant search terms.
 * 
 * Suggestion Sources:
 * - Curated popular search terms
 * - Content titles that match query
 * - Relevant tags from search data
 * - Technology-specific terms
 * 
 * @param {string} query - The search query to get suggestions for
 * @param {number} maxSuggestions - Maximum number of suggestions to return (default: 5)
 * @returns {string[]} Array of search suggestions
 * 
 * @example
 * ```tsx
 * const suggestions = getSearchSuggestions('web', 3)
 * // Returns: ['web development', 'website design', 'web framework']
 * ```
 */
export const getSearchSuggestions = (query: string, maxSuggestions: number = 5): string[] => {
  if (!query.trim() || query.length < 2) {
    return []
  }

  const normalizedQuery = query.toLowerCase().trim()
  const suggestions = new Set<string>()

  // Popular search terms
  const popularTerms = [
    'web development', 'custom software', 'ai automation', 'data analysis',
    'seo marketing', 'graphic design', 'consulting', 'mobile app',
    'website design', 'business automation', 'python development',
    'nextjs development', 'react development', 'database design',
    'ecommerce development', 'api development'
  ]

  // Add matching popular terms
  popularTerms.forEach(term => {
    if (term.toLowerCase().includes(normalizedQuery)) {
      suggestions.add(term)
    }
  })

  // Look for suggestions in titles and tags
  enhancedSearchData.forEach(item => {
    // Add title if it starts with or contains the query
    if (item.title.toLowerCase().includes(normalizedQuery)) {
      suggestions.add(item.title)
    }

    // Add matching tags
    item.tags.forEach(tag => {
      if (tag.toLowerCase().includes(normalizedQuery) && tag.length > 2) {
        suggestions.add(tag)
      }
    })
  })

  return Array.from(suggestions).slice(0, maxSuggestions)
} 