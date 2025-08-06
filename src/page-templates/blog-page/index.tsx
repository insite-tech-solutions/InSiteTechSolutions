/**
 * @fileoverview Blog Page Template
 *
 * This component acts as the main template for the blog page, orchestrating
 * all individual sections within a consistent layout structure. Features page loading states,
 * proper section spacing, and component composition following the service page template pattern.
 * 
 * Features:
 * - Page loading context provider for smooth transitions
 * - Conditional loader rendering with transition effects
 * - Hero section outside main layout for full-width design
 * - Layout wrapper for content sections with consistent spacing
 * - Modular section components for maintainability
 * - Conditional blog listing based on post availability
 * - Dynamic imports for below-the-fold content to improve performance
 * 
 * Architecture:
 * - PageLoadingProvider context wrapper for loading states
 * - Conditional loader rendering with transition effects
 * - Hero section outside main layout for full-width design
 * - Layout wrapper for content sections with consistent spacing
 * - Modular section components for maintainability
 */

'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Layout from '@/components/reusable-components/layout';
import { PageLoadingProvider, usePageLoading } from '@/contexts/page-loading-context';
import PageTransitionLoader from '@/components/reusable-components/page-transition-loader';

// Direct imports for critical above-the-fold content
import HeroSection from './hero-section';

// Dynamic imports for below-the-fold content to improve initial page load performance
const BlogComingSoonSection = dynamic(() => import('./blog-coming-soon-section'), { ssr: false });
const BlogListingSection = dynamic(() => import('./blog-listing-section'), { ssr: false });
const CtaSection = dynamic(() => import('./cta-section'), { ssr: false });

import { BlogPost } from '@/lib/blog-loader';

/**
 * Props interface for BlogPageContent component
 * 
 * @interface BlogPageContentProps
 * @property {BlogPost[]} posts - Array of blog posts to display
 */
interface BlogPageContentProps {
  /** Array of blog posts to display */
  posts: BlogPost[];
}

/**
 * BlogPageContent Component
 * 
 * Main content component that renders all blog page sections in the correct order
 * with proper spacing and layout structure. Handles the page loading state timing
 * and orchestrates the display of all blog-related sections.
 * 
 * Features:
 * - Automatic loading state management with timer
 * - Hero section positioned outside main layout
 * - Consistent vertical spacing between sections
 * - Integration with shared layout component
 * - Modular section composition for maintainability
 * - Conditional blog listing based on post availability
 * 
 * @param {BlogPageContentProps} props - Component props
 * @param {BlogPost[]} props.posts - Array of blog posts to display
 * @returns {JSX.Element} The complete blog page content
 */
export function BlogPageContent({ posts }: BlogPageContentProps): JSX.Element {
  const { setIsPageLoading } = usePageLoading();

  // Handle page loading state with delayed transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [setIsPageLoading]);

  const hasPosts = posts.length > 0;
  
  return (
    <>
      {/* Hero Section - Full-width section outside main layout */}
      <HeroSection />
      
      {/* Main Content Layout - Wrapped sections with consistent spacing */}
      <Layout>
        <div className="pt-16">
          {/* Coming Soon Section - Always shown first */}
          <BlogComingSoonSection />
          
          {/* Blog Listing Section - Only shown if posts exist */}
          {hasPosts && (
            <div className="mt-16">
              <BlogListingSection posts={posts} postsPerPage={6} />
            </div>
          )}
          
          {/* Call-to-Action Section - Final conversion element */}
          <div className="mt-8">
            <CtaSection />
          </div>
        </div>
      </Layout>
    </>
  );
}

/**
 * Props interface for BlogPageLoaderWrapper component
 * 
 * @interface BlogPageLoaderWrapperProps
 * @property {BlogPost[]} posts - Array of blog posts to display
 */
interface BlogPageLoaderWrapperProps {
  /** Array of blog posts to display */
  posts: BlogPost[];
}

/**
 * BlogPageLoaderWrapper Component
 * 
 * Wrapper component that conditionally renders the page transition loader
 * based on the loading state from context. Provides smooth transitions
 * between loading and content states.
 * 
 * @param {BlogPageLoaderWrapperProps} props - Component props
 * @param {BlogPost[]} props.posts - Array of blog posts to display
 * @returns {JSX.Element} Loader and content with conditional rendering
 */
function BlogPageLoaderWrapper({ posts }: BlogPageLoaderWrapperProps): JSX.Element {
  const { isPageLoading } = usePageLoading();

  return (
    <>
      {/* Conditional Page Loader - Shows during initial page load */}
      {isPageLoading && <PageTransitionLoader />}
      
      {/* Main Page Content - Always rendered for smooth transitions */}
      <BlogPageContent posts={posts} />
    </>
  );
}

/**
 * Props interface for BlogPageTemplate component
 * 
 * @interface BlogPageTemplateProps
 * @property {BlogPost[]} posts - Array of blog posts to display
 */
interface BlogPageTemplateProps {
  /** Array of blog posts to display */
  posts: BlogPost[];
}

/**
 * BlogPageTemplate Component
 * 
 * Root template component that provides the page loading context to all child components.
 * This is the main export used by the Next.js page component and ensures proper
 * loading state management throughout the blog page.
 * 
 * Features:
 * - Page loading context provider wrapper
 * - Consistent loading behavior across the application
 * - Proper component hierarchy for state management
 * - Clean separation of concerns between loading and content
 * 
 * @param {BlogPageTemplateProps} props - Component props
 * @param {BlogPost[]} props.posts - Array of blog posts to display
 * @returns {JSX.Element} The complete blog page template with context
 * 
 * @example
 * ```tsx
 * // Usage in Next.js page
 * import BlogPageTemplate from '@/page-templates/blog-page'
 * 
 * export default function BlogPage() {
 *   return <BlogPageTemplate posts={posts} />
 * }
 * ```
 */
export default function BlogPageTemplate({ posts }: BlogPageTemplateProps): JSX.Element {
  return (
    <PageLoadingProvider>
      <BlogPageLoaderWrapper posts={posts} />
    </PageLoadingProvider>
  );
} 