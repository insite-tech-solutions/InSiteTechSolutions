/**
 * @fileoverview Development Process Page Route Component
 * 
 * Next.js App Router page component for the /about/development-process route. 
 * Implements server-side rendering with static metadata export and component delegation pattern.
 * Follows App Router conventions for SEO optimization and performance.
 */

import type { Metadata } from "next";
import ProcessPage from "@/components/about-pages/process-page";

/**
 * Static metadata configuration for the Development Process page.
 *
 * This object defines the title and description that will be used in the browser tab
 * and by search engines for this specific page, enhancing its searchability and presentation.
 *
 * @property {string} title - The title of the page displayed in the browser tab and search results.
 * @property {string} description - A brief, SEO-friendly description of the page content.
 */
export const metadata: Metadata = {
  title: "Our Development Process | InSite Tech Solutions",
  description:
    "Learn about our streamlined and collaborative 5D process: Discovery, Definition, Design, Development, and Deployment. We build for results, not just code.",
};

/**
 * Development Process Page Route Component
 * 
 * Server component that renders the development process page.
 * Delegates rendering to the ProcessPage component.
 *  * @returns {JSX.Element} The root JSX element for the development process page.
 */
export default function Page(): JSX.Element {
  return <ProcessPage />;
}
