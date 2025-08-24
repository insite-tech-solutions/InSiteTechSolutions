/**
 * @fileoverview Link Utility for Secure External Navigation
 *
 * This module provides a utility function to enhance the security of external links
 * by applying appropriate `rel` attributes. Specifically, it helps prevent
 * reverse tabnabbing vulnerabilities when opening external links in new browser tabs.
 *
 * Features:
 * - Automatically determines if a given URL is external to the application's domain.
 * - Applies `noopener noreferrer` to external links to mitigate security risks.
 * - Designed to be used in conjunction with `target="_blank"` for opening links in new tabs.
 *
 * Technical Implementation:
 * - Uses the native `URL` API to parse and compare hostnames.
 * - Assumes the application's domain for comparison. This domain should ideally be dynamic
 *   (e.g., from an environment variable) to adapt to different deployment environments.
 * - Includes basic error handling for invalid URL inputs to prevent crashes.
 */

/**
 * Determines the appropriate `rel` attribute string for a given URL.
 * This function is crucial for security when opening links in new tabs (`target="_blank"`),
 * as it prevents reverse tabnabbing by applying `noopener noreferrer` to external links.
 *
 * @param {string} url - The URL string to evaluate.
 * @returns {string | undefined} Returns `'noopener noreferrer'` if the URL is external to the current domain,
 *                               or `undefined` if the URL is internal or invalid. Returning `undefined` means
 *                               no `rel` attribute should be applied by the consumer of this function.
 *
 * @example
 * ```tsx
 * import Link from 'next/link'; // Assuming Next.js Link component
 * import { getRelForLink } from '@/utils/link-util';
 *
 * function MyLinkComponent({ href, text }: { href: string; text: string }) {
 *   const isExternal = href.startsWith('http://') || href.startsWith('https://');
 *   const rel = getRelForLink(href);
 *
 *   return (
 *     <Link
 *       href={href}
 *       {...(isExternal && { target: "_blank", rel: rel })}
 *     >
 *       {text}
 *     </Link>
 *   );
 * }
 *
 * // Usage in a component:
 * <MyLinkComponent href="/about" text="Internal Page" />
 * <MyLinkComponent href="https://google.com" text="External Google" />
 * 
 *     // Example usage:
 *     import { getRelForLink } from '@/utils/link-utils';
 * 
 *     <Link
 *       href={linkUrl}
 *       target="_blank"
 *       rel={getRelForLink(linkUrl)}
 *     >
 *       External Link
 *     </Link>
 * 
 * ```
 */
export function getRelForLink(url: string): string | undefined {
    try {
      const linkUrl = new URL(url, 'https://www.insitetechsolutions.com') // Replace with your actual domain
      const isExternal = linkUrl.hostname && !linkUrl.hostname.includes('insitetechsolutions.com')
      return isExternal ? 'noopener noreferrer' : undefined
    } catch {
      return undefined
    }
  }