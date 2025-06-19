/**
 * @fileoverview Web & App Development Service Page Route Component
 *
 * Next.js App Router page component for the /services/web-and-app-development route.
 * Implements server-side rendering with static metadata export and component
 * delegation pattern. Follows App Router conventions for SEO optimization and
 * performance.
 */
import { Metadata } from 'next';
import WebAppDevelopmentPage from '@/components/service-pages/web-app-development-page';
import webAppDevelopmentContent from '@/content/service-pages/web-app-dev';

/**
 * Static metadata configuration for the Web & App Development service page.
 *
 * Exported as a static object for Next.js App Router to process during build time.
 * Provides SEO optimization with title and description meta tags derived from
 * imported content.
 * 
 * @type {Metadata} Next.js metadata configuration object
 */
export const metadata: Metadata = {
  title: webAppDevelopmentContent.metadata.title + ' | InSite Tech',
  description: webAppDevelopmentContent.metadata.description,
};

/**
 * Web & App Development Service Page Route Component
 *
 * Server component that renders the Web & App Development service page using the App
 * Router pattern. It delegates the page rendering to the WebAppDevelopmentPage
 * client component, while handling route-level concerns like metadata.
 *
 * Features:
 * - Server-side rendering by default (App Router)
 * - Static metadata export for SEO optimization
 * - Component delegation for separation of concerns
 * - Follows Next.js 13+ App Router conventions
 * 
 * @returns {JSX.Element} The rendered Web & App Development service page.
 *
 * @example
 * ```
 * // This component is automatically rendered by Next.js for the
 * // /services/web-and-app-development route. No manual import is necessary.
 * ```
 */
export default function Page(): JSX.Element {
  return <WebAppDevelopmentPage />;
}