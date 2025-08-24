/**
 * @fileoverview Blog Page Route Component
 * 
 * Next.js App Router page component for the /insites/blog route. 
 * Implements server-side rendering with static metadata export and component delegation pattern.
 * Follows App Router conventions for SEO optimization and performance.
 */

import type { Metadata } from "next";
import BlogPage from "@/components/insites-pages/blog-page";
import { generateMetadata } from '@/utils/metadata-helpers';
import { WebPageStructuredData, BreadcrumbStructuredData } from '@/components/seo/structured-data';

/**
 * Static metadata configuration for the Blog page.
 *
 * This object defines the title and description that will be used in the browser tab
 * and by search engines for this specific page, enhancing its searchability and presentation.
 *
 * @property {string} title - The title of the page displayed in the browser tab and search results.
 * @property {string} description - A brief, SEO-friendly description of the page content.
 */
export const metadata: Metadata = generateMetadata({
  title: "Blog | InSite Tech Solutions",
  description: "Stay updated with the latest technology trends, development best practices, and industry insights from our team of experts. Blog coming soon!",
  path: "/insites/blog",
  image: 'https://www.insitetechsolutions.com/Insite Tech Solutions Light.png', // Use company logo for blog page
  keywords: "blog, technology trends, development, best practices, industry insights, InSite Tech Solutions"
});

/**
 * Blog Page Route Component
 * 
 * Server component that renders the blog page.
 * Delegates rendering to the BlogPage component.
 * 
 * @returns {JSX.Element} The root JSX element for the blog page.
 */
export default function Page(): JSX.Element {
  return (
    <>
      <WebPageStructuredData 
        pageName="Blog | InSite Tech Solutions"
        pageDescription="Stay updated with the latest technology trends, development best practices, and industry insights from our team of experts. Blog coming soon!"
        pageUrl="https://www.insitetechsolutions.com/insites/blog"
      />
      <BreadcrumbStructuredData 
        breadcrumbs={[
          { name: "Home", url: "https://www.insitetechsolutions.com" },
          { name: "Blog", url: "https://www.insitetechsolutions.com/insites/blog" }
        ]}
      />
      <BlogPage />
    </>
  );
}
