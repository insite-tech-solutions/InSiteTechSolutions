/**
 * @fileoverview FAQ Page Route Component for Next.js App Router
 *
 * This file implements the FAQ page route using Next.js 13+ App Router conventions.
 * It provides server-side rendering with static metadata export and follows the
 * component delegation pattern for clean separation of concerns.
 * 
 * Features:
 * - Server-side rendering for optimal SEO and performance
 * - Static metadata export for search engine optimization
 * - Component delegation to maintainable page structure
 * - TypeScript support with proper type annotations
 */

import type { Metadata } from 'next';
import FAQPage from '@/components/insites-pages/faq-page';

/**
 * Static metadata configuration for the FAQ page
 * 
 * Defines SEO-optimized metadata including title and description that will be
 * used by search engines and displayed in browser tabs. This metadata helps
 * improve the page's discoverability and provides clear context for users.
 * 
 * @type {Metadata}
 */
export const metadata: Metadata = {
  title: 'Frequently Asked Questions | InSite Tech Solutions',
  description: 'Find answers to the most common questions about our services, pricing, process, and more.',
};

/**
 * FAQ Page Route Component
 * 
 * Server component that renders the FAQ page using Next.js App Router.
 * Delegates the actual page rendering to the FAQPage component while
 * handling route-level concerns like metadata and server-side rendering.
 * 
 * This component follows the App Router pattern of keeping route components
 * lightweight and delegating complex rendering logic to dedicated components.
 * 
 * @returns {JSX.Element} The rendered FAQ page
 */
export default function Page(): JSX.Element {
  return <FAQPage />;
} 