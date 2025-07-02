/**
 * @fileoverview Blog Page Route Component
 * 
 * Next.js App Router page component for the /insites/blog route. 
 * Implements server-side rendering with static metadata export and component delegation pattern.
 * Follows App Router conventions for SEO optimization and performance.
 */

import type { Metadata } from "next";
import BlogPage from "@/components/insites-pages/blog-page";

/**
 * Static metadata configuration for the Blog page.
 *
 * This object defines the title and description that will be used in the browser tab
 * and by search engines for this specific page, enhancing its searchability and presentation.
 *
 * @property {string} title - The title of the page displayed in the browser tab and search results.
 * @property {string} description - A brief, SEO-friendly description of the page content.
 */
export const metadata: Metadata = {
  title: "Blog | InSite Tech Solutions",
  description:
    "Stay updated with the latest technology trends, development best practices, and industry insights from our team of experts. Blog coming soon!",
};

/**
 * Blog Page Route Component
 * 
 * Server component that renders the blog page.
 * Delegates rendering to the BlogPage component.
 * 
 * @returns {JSX.Element} The root JSX element for the blog page.
 */
export default function Page(): JSX.Element {
  return <BlogPage />;
}
