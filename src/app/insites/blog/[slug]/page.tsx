/**
 * @fileoverview Dynamic Blog Post Page Route Component
 * 
 * Next.js App Router page component for the /insites/blog/[slug] route. 
 * Implements dynamic routing for individual blog posts with proper metadata handling,
 * structured data, and fallback for non-existent posts.
 * 
 * Features:
 * - Dynamic blog post routing with slug-based URLs
 * - SEO-optimized metadata generation for articles
 * - Structured data markup for articles and breadcrumbs
 * - Static site generation for performance
 * - 404 handling for non-existent posts
 * - Breadcrumb navigation structure
 * - Article schema markup for rich snippets
 * - Next.js App Router integration
 * 
 * @module BlogPostPage
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { loadBlogPostBySlug, loadAllBlogPosts } from "@/lib/blog-loader";
import BlogPostPage from "@/components/insites-pages/blog-post-page";
import { generateArticleMetadata } from '@/utils/metadata-helpers';
import { BreadcrumbStructuredData, ArticleStructuredData } from '@/components/seo/structured-data';

/**
 * Generate metadata for dynamic blog posts
 * 
 * Creates SEO-optimized metadata for individual blog posts based on the slug.
 * Includes article-specific metadata with publication dates, authors, and tags.
 * Provides fallback metadata for non-existent posts.
 * 
 * Key Features:
 * - Article-specific metadata generation
 * - Publication date and author information
 * - Tag-based categorization
 * - Fallback handling for missing posts
 * - SEO-optimized article markup
 * 
 * @param {Object} params - The route parameters containing the slug
 * @param {Promise<{slug: string}>} params.params - The blog post slug from the URL
 * @returns {Promise<Metadata>} The metadata for the blog post
 * 
 * @example
 * ```tsx
 * // Automatically called by Next.js for metadata generation
 * export async function generateMetadata({ params }) {
 *   return await generateBlogPostMetadata(params);
 * }
 * ```
 */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = loadBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | InSite Tech Solutions',
      description: 'The requested blog post could not be found.',
    };
  }
  
  return generateArticleMetadata({
    title: post.title,
    description: post.description,
    path: `/insites/blog/${slug}`,
    publishedTime: post.publishedAt,
    authors: [post.author],
    tags: post.tags,
  });
}

/**
 * Generate static params for pre-rendering
 * 
 * Creates static paths for all blog posts during build time for optimal performance.
 * Enables static site generation for faster page loads and better SEO.
 * 
 * Key Features:
 * - Static site generation for all blog posts
 * - Build-time optimization
 * - Performance enhancement
 * - SEO-friendly pre-rendering
 * 
 * @returns {Promise<Array<{slug: string}>>} Array of static params for all blog posts
 * 
 * @example
 * ```tsx
 * // Automatically called by Next.js during build
 * export async function generateStaticParams() {
 *   return await generateBlogPostParams();
 * }
 * ```
 */
export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const posts = loadAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

/**
 * Blog Post Page Route Component
 * 
 * Server component that renders individual blog posts with comprehensive SEO markup.
 * Includes structured data for articles and breadcrumb navigation.
 * 
 * Key Features:
 * - Dynamic blog post rendering
 * - Structured data for articles and breadcrumbs
 * - SEO-optimized markup
 * - 404 handling for missing posts
 * - Breadcrumb navigation structure
 * - Article schema markup
 * 
 * @param {Object} params - The route parameters containing the slug
 * @param {Promise<{slug: string}>} params.params - The blog post slug from the URL
 * @returns {Promise<JSX.Element>} The complete blog post page with SEO markup
 * 
 * @example
 * ```tsx
 * // Automatically called by Next.js for page rendering
 * export default async function Page({ params }) {
 *   return await renderBlogPost(params);
 * }
 * ```
 */
export default async function Page({ params }: { params: Promise<{ slug: string }> }): Promise<JSX.Element> {
  const { slug } = await params;
  const post = loadBlogPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb structured data for navigation */}
      <BreadcrumbStructuredData 
        breadcrumbs={[
          { name: "Home", url: "https://www.insitetechsolutions.com" },
          { name: "Blog", url: "https://www.insitetechsolutions.com/insites/blog" },
          { name: post.title, url: `https://www.insitetechsolutions.com/insites/blog/${slug}` }
        ]}
      />
      {/* Article structured data for rich snippets */}
      <ArticleStructuredData 
        article={{
          title: post.title,
          description: post.description,
          url: `https://www.insitetechsolutions.com/insites/blog/${slug}`,
          author: post.author,
          publishedTime: post.publishedAt,
          image: "https://www.insitetechsolutions.com/Insite Tech Solutions Light.png" // Default blog image
        }}
      />
      {/* Main blog post content */}
      <BlogPostPage post={post} />
    </>
  );
} 