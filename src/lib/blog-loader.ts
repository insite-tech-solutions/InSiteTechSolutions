/**
 * @fileoverview Blog Loader Utility for Markdown Content Management
 *
 * Provides helper functions for loading and parsing blog post markdown files.
 * The utility reads markdown files from `src/content/insites-pages/blog-pages/`, 
 * extracts front-matter metadata via `gray-matter`, and returns strongly typed 
 * objects representing each blog post. This allows blog posts to be managed 
 * through markdown while remaining easily consumable by the Next.js application.
 * 
 * Features:
 * - Front-matter parsing for blog post metadata
 * - Type-safe blog post objects with comprehensive interfaces
 * - Slug generation and validation for URL-friendly paths
 * - Reading time calculation based on content length
 * - Tag management and filtering capabilities
 * - Featured post support with priority handling
 * - File system integration with modification tracking
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Absolute path to the blog pages directory
const BLOG_PAGES_DIR = path.join(
  process.cwd(),
  'src',
  'content',
  'insites-pages',
  'blog-pages'
);

/**
 * Represents a single blog post with its associated metadata and markdown content.
 * 
 * @interface BlogPost
 * @property {string} title - Blog post title pulled from front-matter
 * @property {string} description - Blog post description/summary from front-matter
 * @property {string} author - Author name from front-matter
 * @property {string} publishedAt - Publication date string from front-matter (e.g., "2024-01-15")
 * @property {string[]} tags - Array of tags/categories from front-matter
 * @property {number} readTime - Estimated reading time in minutes
 * @property {boolean} featured - Whether this post is featured/pinned
 * @property {string} content - Raw markdown content of the blog post (without front-matter)
 * @property {string} slug - Slug used for routing (derived from filename or front-matter)
 * @property {string} url - SEO-friendly URL path
 * @property {string} lastModified - Last modified date (file system timestamp)
 */
export interface BlogPost {
  /** Blog post title pulled from front-matter */
  title: string;
  /** Blog post description/summary from front-matter */
  description: string;
  /** Author name from front-matter */
  author: string;
  /** Publication date string from front-matter (e.g., "2024-01-15") */
  publishedAt: string;
  /** Array of tags/categories from front-matter */
  tags: string[];
  /** Estimated reading time in minutes */
  readTime: number;
  /** Whether this post is featured/pinned */
  featured: boolean;
  /** Raw markdown content of the blog post (without front-matter) */
  content: string;
  /** Slug used for routing (derived from filename or front-matter) */
  slug: string;
  /** SEO-friendly URL path */
  url: string;
  /** Last modified date (file system timestamp) */
  lastModified: string;
}

/**
 * Represents the front-matter metadata for a blog post.
 * 
 * @interface BlogPostFrontMatter
 * @property {string} title - Blog post title
 * @property {string} description - Blog post description/summary
 * @property {string} author - Author name
 * @property {string} publishedAt - Publication date (YYYY-MM-DD format)
 * @property {string[]} [tags] - Array of tags/categories (optional)
 * @property {boolean} [featured] - Whether this post is featured/pinned (optional)
 * @property {string} [slug] - Custom slug (optional, will use filename if not provided)
 */
export interface BlogPostFrontMatter {
  /** Blog post title */
  title: string;
  /** Blog post description/summary */
  description: string;
  /** Author name */
  author: string;
  /** Publication date (YYYY-MM-DD format) */
  publishedAt: string;
  /** Array of tags/categories */
  tags?: string[];
  /** Whether this post is featured/pinned */
  featured?: boolean;
  /** Custom slug (optional, will use filename if not provided) */
  slug?: string;
}

/**
 * Collection of all blog posts keyed by slug.
 * 
 * @interface BlogPosts
 */
export interface BlogPosts {
  [slug: string]: BlogPost;
}

/**
 * Calculates estimated reading time for a given text.
 * 
 * Uses a standard reading speed of 200 words per minute and ensures
 * a minimum reading time of 1 minute for very short content.
 * 
 * @param {string} text - The text content to calculate reading time for
 * @returns {number} Estimated reading time in minutes (minimum 1 minute)
 */
function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return Math.max(readingTime, 1); // Minimum 1 minute
}

/**
 * Generates a URL-friendly slug from a string.
 * 
 * Converts text to lowercase, removes special characters, replaces spaces
 * with hyphens, and ensures no consecutive hyphens.
 * 
 * @param {string} text - The text to convert to a slug
 * @returns {string} URL-friendly slug
 */
function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
}

/**
 * Loads and parses a blog post markdown file from the blog pages directory.
 *
 * Steps:
 * 1. Builds an absolute path to the markdown file
 * 2. Reads the file contents synchronously
 * 3. Uses `gray-matter` to parse front-matter metadata
 * 4. Calculates reading time and generates slug
 * 5. Returns a `BlogPost` object with metadata, raw markdown body, and slug
 *
 * @param {string} filename - Name of the markdown file (e.g., `getting-started-with-nextjs.md`)
 * @returns {BlogPost} Parsed blog post ready for consumption
 *
 * @example
 * ```typescript
 * const post = loadBlogPost('getting-started-with-nextjs.md');
 * console.log(post.title); // "Getting Started with Next.js"
 * console.log(post.readTime); // 5
 * ```
 */
function loadBlogPost(filename: string): BlogPost {
  const filePath = path.join(BLOG_PAGES_DIR, filename);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  const stats = fs.statSync(filePath);

  // Parse front-matter with type safety
  const frontMatter = data as BlogPostFrontMatter;
  
  // Generate slug from filename or use custom slug from front-matter
  const slug = frontMatter.slug || generateSlug(filename.replace('.md', ''));
  
  // Calculate reading time
  const readTime = calculateReadingTime(content);

  return {
    title: frontMatter.title || 'Untitled',
    description: frontMatter.description || '',
    author: frontMatter.author || 'InSite Tech Team',
    publishedAt: frontMatter.publishedAt || new Date().toISOString().split('T')[0],
    tags: frontMatter.tags || [],
    readTime,
    featured: frontMatter.featured || false,
    content: content,
    slug: slug,
    url: `/insites/blog/${slug}`,
    lastModified: stats.mtime.toISOString(),
  };
}

/**
 * Loads all available blog posts from the blog pages directory.
 * 
 * This function scans the blog pages directory for markdown files and loads
 * each one into a BlogPost object. Posts are sorted by publication date
 * (newest first) and can be filtered by various criteria.
 *
 * @param {Object} options - Optional filtering and sorting options
 * @param {boolean} [options.featured] - Filter by featured status
 * @param {string[]} [options.tags] - Filter by specific tags
 * @param {number} [options.limit] - Limit the number of posts returned
 * @param {'publishedAt' | 'title' | 'readTime'} [options.sortBy] - Field to sort by
 * @param {'asc' | 'desc'} [options.sortOrder] - Sort order (ascending or descending)
 * @returns {BlogPost[]} Array of all parsed blog posts
 *
 * @example
 * ```typescript
 * // Get all posts
 * const allPosts = loadAllBlogPosts();
 * 
 * // Get only featured posts
 * const featuredPosts = loadAllBlogPosts({ featured: true });
 * 
 * // Get posts by tag
 * const techPosts = loadAllBlogPosts({ tags: ['technology'] });
 * 
 * // Get latest 5 posts
 * const recentPosts = loadAllBlogPosts({ limit: 5, sortBy: 'publishedAt' });
 * ```
 */
export function loadAllBlogPosts(options: {
  featured?: boolean;
  tags?: string[];
  limit?: number;
  sortBy?: 'publishedAt' | 'title' | 'readTime';
  sortOrder?: 'asc' | 'desc';
} = {}): BlogPost[] {
  const blogPagesDir = BLOG_PAGES_DIR;
  
  // Check if directory exists
  if (!fs.existsSync(blogPagesDir)) {
    return [];
  }

  // Read all markdown files from the directory
  const files = fs.readdirSync(blogPagesDir)
    .filter(file => file.endsWith('.md') && file !== 'README.md');

  // Load and parse each blog post
  let posts = files.map(filename => loadBlogPost(filename));

  // Apply filters
  if (options.featured !== undefined) {
    posts = posts.filter(post => post.featured === options.featured);
  }

  if (options.tags && options.tags.length > 0) {
    posts = posts.filter(post => 
      options.tags!.some(tag => post.tags.includes(tag))
    );
  }

  // Apply sorting
  const sortBy = options.sortBy || 'publishedAt';
  const sortOrder = options.sortOrder || 'desc';

  posts.sort((a, b) => {
    let comparison = 0;
    
    switch (sortBy) {
      case 'publishedAt':
        comparison = new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
        break;
      case 'title':
        comparison = a.title.localeCompare(b.title);
        break;
      case 'readTime':
        comparison = a.readTime - b.readTime;
        break;
    }

    return sortOrder === 'desc' ? -comparison : comparison;
  });

  // Apply limit
  if (options.limit) {
    posts = posts.slice(0, options.limit);
  }

  return posts;
}

/**
 * Loads a single blog post by its slug.
 *
 * @param {string} slug - The slug of the blog post to load
 * @returns {BlogPost | null} The blog post if found, null otherwise
 *
 * @example
 * ```typescript
 * const post = loadBlogPostBySlug('getting-started-with-nextjs');
 * if (post) {
 *   console.log(post.title);
 * }
 * ```
 */
export function loadBlogPostBySlug(slug: string): BlogPost | null {
  const posts = loadAllBlogPosts();
  return posts.find(post => post.slug === slug) || null;
}

/**
 * Gets all unique tags from all blog posts.
 *
 * @returns {string[]} Array of unique tags sorted alphabetically
 *
 * @example
 * ```typescript
 * const tags = getAllBlogTags();
 * console.log(tags); // ['technology', 'nextjs', 'react', 'typescript']
 * ```
 */
export function getAllBlogTags(): string[] {
  const posts = loadAllBlogPosts();
  const allTags = posts.flatMap(post => post.tags);
  return [...new Set(allTags)].sort();
}

/**
 * Gets all blog posts as an object keyed by slug.
 *
 * @returns {BlogPosts} Object containing all blog posts keyed by slug
 *
 * @example
 * ```typescript
 * const posts = loadAllBlogPostsAsObject();
 * console.log(posts['getting-started-with-nextjs'].title);
 * ```
 */
export function loadAllBlogPostsAsObject(): BlogPosts {
  const posts = loadAllBlogPosts();
  const postsObject: BlogPosts = {};
  
  posts.forEach(post => {
    postsObject[post.slug] = post;
  });

  return postsObject;
}