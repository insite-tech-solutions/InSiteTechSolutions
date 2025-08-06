/**
 * @fileoverview Blog Post Renderer Component
 * 
 * This component renders blog post markdown content with custom styling and components.
 * It uses react-markdown with custom renderers for consistent blog post presentation.
 * 
 * Features:
 * - Custom markdown component renderers
 * - Syntax highlighting for code blocks
 * - Responsive typography and spacing
 * - SEO-friendly heading IDs
 * - Custom link handling
 * - Table of contents generation
 * - Reading time display
 */

'use client';

import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User, Tag } from 'lucide-react';
import { BlogPost } from '@/lib/blog-loader';

/**
 * Props interface for the BlogPostRenderer component
 */
interface BlogPostRendererProps {
  /** The blog post to render */
  post: BlogPost;
  /** Whether to show the full post or just an excerpt */
  showFullPost?: boolean;
  /** Whether to show the post metadata (author, date, etc.) */
  showMetadata?: boolean;
  /** Whether to show tags */
  showTags?: boolean;
  /** Custom CSS classes for the container */
  className?: string;
}

/**
 * Custom link renderer component for ReactMarkdown
 * Handles internal links, external links, and anchor links with appropriate behavior
 * 
 * @param href - The URL to link to
 * @param children - The link text/content
 * @returns Rendered link component
 */
const CustomLink = ({ href, children }: { href?: string; children?: React.ReactNode }): JSX.Element => {
  if (!href) return <>{children}</>;
  if (href.startsWith('/')) return <Link href={href}>{children}</Link>;
  if (href.startsWith('#')) return <a href={href}>{children}</a>;
  return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
};

/**
 * Blog Post Metadata Component
 * 
 * Renders the blog post metadata including author, publication date, reading time, and tags.
 * 
 * @param post - The blog post object
 * @param showTags - Whether to display tags
 * @returns Rendered metadata component
 */
function BlogPostMetadata({ post, showTags = true }: { post: BlogPost; showTags?: boolean }): JSX.Element {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
      {/* Author */}
      <div className="flex items-center gap-1">
        <User className="w-4 h-4" />
        <span>{post.author}</span>
      </div>

      {/* Publication Date */}
      <div className="flex items-center gap-1">
        <Calendar className="w-4 h-4" />
        <time dateTime={post.publishedAt}>
          {new Date(post.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
      </div>

      {/* Reading Time */}
      <div className="flex items-center gap-1">
        <Clock className="w-4 h-4" />
        <span>{post.readTime} min read</span>
      </div>

      {/* Tags */}
      {showTags && post.tags.length > 0 && (
        <div className="flex items-center gap-1">
          <Tag className="w-4 h-4" />
          <div className="flex flex-wrap gap-1">
            {post.tags.map((tag) => (
              <span
                key={tag.toLowerCase().replace(/\s+/g, '-')}
                className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Blog Post Renderer Component
 * 
 * Renders blog post content with custom markdown styling and components.
 * Supports both full post and excerpt rendering modes.
 * 
 * Features:
 * - Custom markdown component renderers
 * - Responsive typography
 * - SEO-friendly heading IDs
 * - Custom link handling
 * - Metadata display
 * - Tag rendering
 * 
 * @param post - The blog post to render
 * @param showFullPost - Whether to show the full post content
 * @param showMetadata - Whether to show post metadata
 * @param showTags - Whether to show post tags
 * @param className - Custom CSS classes
 * @returns Rendered blog post component
 */
export default function BlogPostRenderer({
  post,
  showFullPost = true,
  showMetadata = true,
  showTags = true,
  className = ''
}: BlogPostRendererProps): JSX.Element {
  // Get content to render (full post or excerpt)
  const contentToRender = showFullPost 
    ? post.content 
    : post.description || post.content.substring(0, 200) + '...';

  return (
    <article className={`blog-post ${className}`}>
      {/* Post Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {post.title}
      </h1>

      {/* Post Metadata */}
      {showMetadata && (
        <BlogPostMetadata post={post} showTags={showTags} />
      )}

      {/* Post Content */}
      <div className="prose prose-lg max-w-none text-gray-700">
        <ReactMarkdown
          components={{
            // Custom heading renderers with IDs for navigation
            h1: ({ ...props }) => {
              const text = props.children?.toString() || '';
              const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
              return (
                <h1 
                  id={id} 
                  {...props} 
                  className="scroll-mt-32 text-gray-900 text-3xl font-bold mt-8 mb-4" 
                />
              );
            },
            h2: ({ ...props }) => {
              const text = props.children?.toString() || '';
              const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
              return (
                <h2 
                  id={id} 
                  {...props} 
                  className="scroll-mt-32 text-gray-900 text-2xl font-semibold mt-8 mb-4" 
                />
              );
            },
            h3: ({ ...props }) => {
              const text = props.children?.toString() || '';
              const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
              return (
                <h3 
                  id={id} 
                  {...props} 
                  className="scroll-mt-32 text-gray-800 text-xl font-medium mt-6 mb-3" 
                />
              );
            },
            h4: ({ ...props }) => {
              const text = props.children?.toString() || '';
              const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
              return (
                <h4 
                  id={id} 
                  {...props} 
                  className="scroll-mt-32 text-gray-800 text-lg font-medium mt-4 mb-2" 
                />
              );
            },

            // Custom link renderer
            a: CustomLink,

            // Custom paragraph renderer
            p: (props) => (
              <p {...props} className="text-gray-700 leading-relaxed mb-4" />
            ),

            // Custom strong/bold renderer
            strong: (props) => (
              <strong {...props} className="text-gray-900 font-semibold" />
            ),

            // Custom list renderers
            ul: (props) => (
              <ul {...props} className="list-disc list-inside text-gray-700 mb-4 space-y-1" />
            ),
            ol: (props) => (
              <ol {...props} className="list-decimal list-inside text-gray-700 mb-4 space-y-1" />
            ),
            li: (props) => (
              <li {...props} className="text-gray-700" />
            ),

            // Custom blockquote renderer
            blockquote: (props) => (
              <blockquote 
                {...props} 
                className="border-l-4 border-blue-500 pl-4 py-2 my-4 bg-blue-50 italic text-gray-700" 
              />
            ),

            // Custom code renderers
            code: (props) => {
              const { className, children, ...rest } = props;
              const isInline = !className?.includes('language-');
              
              if (isInline) {
                return (
                  <code 
                    {...rest} 
                    className="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm font-mono" 
                  >
                    {children}
                  </code>
                );
              }
              return (
                <code 
                  {...rest} 
                  className="block bg-gray-100 text-gray-800 p-4 rounded-lg text-sm font-mono overflow-x-auto" 
                >
                  {children}
                </code>
              );
            },

            // Custom table renderers
            table: (props) => (
              <div className="overflow-x-auto mb-4">
                <table {...props} className="min-w-full border border-gray-300" />
              </div>
            ),
            th: (props) => (
              <th {...props} className="border border-gray-300 px-4 py-2 bg-gray-50 font-semibold text-left" />
            ),
            td: (props) => (
              <td {...props} className="border border-gray-300 px-4 py-2" />
            ),

            // Custom image renderer
            img: (props) => {
              if (!props.src) return null;
              return (
                <Image 
                  src={props.src}
                  alt={props.alt || 'Blog post content image'}
                  width={800}
                  height={600}
                  className="max-w-full h-auto rounded-lg shadow-md my-4" 
                />
              );
            },

            // Custom horizontal rule renderer
            hr: (props) => (
              <hr {...props} className="border-gray-300 my-8" />
            ),
          }}
        >
          {contentToRender}
        </ReactMarkdown>
      </div>

      {/* Read More Link */}
      {!showFullPost && (
        <div className="mt-6">
          <Link
            href={post.url}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            Read more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </article>
  );
}