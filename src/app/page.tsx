/**
 * @fileoverview Home Page Route Component for Next.js App Router
 *
 * Next.js App Router page component for the root route (/).
 * Implements server-side rendering with static metadata export and component
 * delegation pattern for a clean and optimized home page.
 *
 * Features:
 * - Server-side rendering for optimal performance
 * - Static metadata export for SEO optimization
 * - Component delegation pattern for clean architecture
 * - TypeScript support with proper type definitions
 * - SEO-optimized metadata configuration
 *
 * @module Page
 */
import type { Metadata } from "next";
import HomePage from "@/components/home-pages/home-page";
import { OrganizationStructuredData, WebPageStructuredData, LocalBusinessStructuredData } from "@/components/seo/structured-data";

/**
 * Static metadata configuration for the Home page
 *
 * Provides SEO optimization with a descriptive title and summary
 * for search engines. Includes key business information and
 * service offerings for better search visibility.
 * 
 * @constant {Metadata} metadata
 */
export const metadata: Metadata = {
  title: "InSite Tech Solutions | Custom Software, Web Development & Technical Consulting",
  description: "InSite Tech Solutions offers web & app development, custom software solutions, SEO & online marketing, graphic design & branding, data analysis, AI & automation, and consulting & training services.",
};

/**
 * Home Page Route Component
 *
 * Server component that renders the home page. It delegates the entire
 * page structure to the HomePage component, keeping this entry point clean
 * and focused on Next.js App Router responsibilities.
 * 
 * This component follows the component delegation pattern:
 * - Handles Next.js App Router responsibilities (metadata, routing)
 * - Delegates rendering to the HomePage client component
 * - Maintains clean separation between server and client concerns
 * - Enables server-side rendering benefits while supporting client-side interactivity
 * 
 * @returns {JSX.Element} The rendered Home page component
 * 
 * @example
 * ```tsx
 * // This component is automatically rendered by Next.js
 * // when users visit the root route (/)
 * ```
 */
export default function Page(): JSX.Element {
  return (
    <>
      <OrganizationStructuredData />
      <LocalBusinessStructuredData />
      <WebPageStructuredData 
        pageName="InSite Tech Solutions | Custom Software, Web Development & Technical Consulting"
        pageDescription="InSite Tech Solutions offers web & app development, custom software solutions, SEO & online marketing, graphic design & branding, data analysis, AI & automation, and consulting & training services."
        pageUrl="https://www.insitetechsolutions.com"
      />
      <HomePage />
    </>
  );
}