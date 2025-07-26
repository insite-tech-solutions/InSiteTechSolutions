/**
 * @fileoverview Blog Post Page Component
 *
 * This component assembles the complete blog post page following the standard
 * page composition pattern used throughout the application. It combines the site header,
 * footer, and the blog post content with proper layout and styling.
 */

import Header from '@/components/site-header/header';
import Footer from '@/components/site-footer/footer';
import BlogPostRenderer from '@/components/reusable-components/blog-post-renderer';
import RelatedPosts from '@/components/reusable-components/related-posts';
import ShareButton from '@/components/reusable-components/share-button';
import { BlogPost, loadAllBlogPosts } from '@/lib/blog-loader';
import Layout from '@/components/reusable-components/layout';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

/**
 * Props interface for the BlogPostPage component
 */
interface BlogPostPageProps {
  /** The blog post to display */
  post: BlogPost;
}

/**
 * `BlogPostPage` Component.
 *
 * This is the root server-side component for individual blog post pages.
 * It loads all posts on the server and orchestrates the layout by including 
 * the `Header`, the blog post content with proper styling and navigation, 
 * and the `Footer`.
 * 
 * Features:
 * - Full blog post rendering with metadata
 * - Back to blog navigation
 * - Social sharing options
 * - Responsive design
 * - SEO-optimized structure
 * - Related posts functionality
 *
 * @param {BlogPostPageProps} props - Component props
 * @param {BlogPost} props.post - The blog post to display
 * @returns {JSX.Element} The complete JSX structure for the blog post page.
 */
export default function BlogPostPage({ post }: BlogPostPageProps): JSX.Element {
  // Load all posts on the server side for related posts
  const allPosts = loadAllBlogPosts();

  return (
    <div>
      {/* Site Header */}
      <Header />
      
      {/* Main Content */}
      <main 
        id="blog-post-main"
        aria-labelledby="blog-post-main-title"
        className="min-h-screen bg-gray-50 mt-header"
      >
        {/* Accessible landmark for Blog Post Content */}
        <h2 id="blog-post-main-title" className="sr-only">Blog Post Content</h2>
        {/* Back Navigation */}
        <div className="bg-medium-blue border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <Link
              href="/insites/blog"
              className="inline-flex items-center gap-2 text-white hover:text-gray-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>

        {/* Blog Post Content */}
        <Layout>
          <div className="py-8">
            <div className="max-w-4xl mx-auto">
              {/* Share Button */}
              <div className="flex justify-end mb-6">
                <ShareButton
                  title={post.title}
                  text={post.description}
                  url={post.url}
                />
              </div>

              {/* Blog Post Content */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <BlogPostRenderer 
                  post={post} 
                  showFullPost={true}
                  showMetadata={true}
                  showTags={true}
                />
              </div>

              {/* Related Posts Section */}
              <RelatedPosts 
                currentPost={post} 
                allPosts={allPosts} 
                maxPosts={3} 
              />

              {/* More from InSite Tech CTA */}
              <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  More from InSite Tech
                </h3>
                <p className="text-gray-600 mb-4">
                  Stay updated with our latest insights and tutorials. Subscribe to our newsletter 
                  to get notified when we publish new content.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/insites/blog"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View All Posts
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
      
      <Footer />
    </div>
  );
} 