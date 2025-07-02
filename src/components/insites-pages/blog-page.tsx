/**
 * @fileoverview Blog Page Component
 *
 * This component assembles the complete blog page following the standard
 * page composition pattern used throughout the application. It combines the site header,
 * footer, and the blog-specific template.
 */

import Header from '@/components/site-header/header';
import Footer from '@/components/site-footer/footer';
import BlogPageTemplate from '@/page-templates/blog-page';
import { loadAllBlogPosts } from '@/lib/blog-loader';

/**
 * `BlogPage` Component.
 *
 * This is the root server-side component for the Blog page.
 * It loads blog posts on the server and orchestrates the layout by including 
 * the `Header`, the `BlogPageTemplate` (which contains all the specific blog 
 * content and loading logic), and the `Footer`.
 * This structure ensures a consistent presentation across the application while delivering
 * specialized content.
 *
 * @returns {JSX.Element} The complete JSX structure for the Blog page.
 */
export default function BlogPage(): JSX.Element {
  // Load blog posts on the server side
  const posts = loadAllBlogPosts();

  return (
    <div>
      <Header /> {/* Renders the global site header. */}
        <BlogPageTemplate posts={posts} /> {/* Renders the main content template for the blog page. */}
      <Footer /> {/* Renders the global site footer. */}
    </div>
  );
}
