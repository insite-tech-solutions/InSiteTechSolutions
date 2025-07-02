/**
 * @fileoverview Dynamic Blog Post Page Route Component
 * 
 * Next.js App Router page component for the /insites/blog/[slug] route. 
 * Implements dynamic routing for individual blog posts with proper metadata handling
 * and fallback for non-existent posts.
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { loadBlogPostBySlug, loadAllBlogPosts } from "@/lib/blog-loader";
import BlogPostPage from "@/components/insites-pages/blog-post-page";

/**
 * Generate metadata for dynamic blog posts.
 * 
 * This function generates metadata for individual blog posts based on the slug.
 * 
 * @param {Object} params - The route parameters containing the slug
 * @param {string} params.slug - The blog post slug from the URL
 * @returns {Promise<Metadata>} The metadata for the blog post
 */
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const post = loadBlogPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: "Blog Post Not Found | InSite Tech Solutions",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | InSite Tech Solutions`,
    description: post.description,
    authors: [{ name: post.author }],
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

/**
 * Generate static params for pre-rendering.
 * 
 * This function generates static paths for blog posts during build time.
 * 
 * @returns {Promise<Array<{ slug: string }>>} Array of static params
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
 * Server component that renders individual blog posts.
 * 
 * @param {Object} params - The route parameters containing the slug
 * @param {string} params.slug - The blog post slug from the URL
 * @returns {JSX.Element} The root JSX element for the blog post page
 */
export default function Page({ params }: { params: { slug: string } }): JSX.Element {
  const post = loadBlogPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  return <BlogPostPage post={post} />;
} 