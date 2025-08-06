/**
 * @fileoverview Search Results Page
 * 
 * Displays comprehensive search results with filtering, sorting, and pagination.
 * Provides a dedicated page for users to explore all search results in detail.
 * 
 * Features:
 * - URL-based search queries (SEO-friendly)
 * - Real-time filtering by content type
 * - Sorting by relevance, date, or alphabetical
 * - Pagination for large result sets
 * - Mobile-responsive design
 * - Empty states and loading states
 * - Search suggestions for no results
 */

import type { Metadata } from "next";
import { Suspense } from "react";
import SearchPage from "@/components/search-pages/search-page";

/**
 * Dynamic metadata generation for search results page
 * Creates SEO-optimized metadata based on the search query
 */
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}): Promise<Metadata> {
  const params = await searchParams;
  const query = params.q ?? '';
  
  if (query) {
    return {
      title: `Search Results for "${query}" | InSite Tech Solutions`,
      description: `Find relevant services, articles, and information about ${query} at InSite Tech Solutions. Custom software development, web apps, AI automation, and more.`,
      robots: "noindex, follow", // Don't index search result pages
    }
  }

  return {
    title: "Search | InSite Tech Solutions",
    description: "Search for services, articles, and information at InSite Tech Solutions. Find custom software development, web applications, AI automation, and technical consulting services.",
    robots: "noindex, follow",
  }
}

/**
 * Search Results Route Component
 *
 * Server component that renders the search results page using the App
 * Router pattern. It delegates the page rendering to the SearchPage
 * client component, while handling route-level concerns like metadata.
 *
 * Features:
 * - Server-side rendering for better performance
 * - Dynamic metadata based on search query
 * - URL parameter handling for search queries
 * - Component delegation for clean architecture
 * - SEO-optimized with proper metadata
 * - Suspense boundary for useSearchParams
 * 
 * @returns {JSX.Element} The rendered search results page
 *
 * @example
 * ```
 * // This component is automatically rendered by Next.js for the
 * // /search route with optional query parameters (?q=search+term)
 * ```
 */
export default function Page(): JSX.Element {
  return (
    <Suspense fallback={<div>Loading search...</div>}>
      <SearchPage />
    </Suspense>
  );
} 