/**
 * Utility function to determine whether a given URL should have `rel="noopener noreferrer"` applied.
 * Helps prevent reverse tabnabbing and enforces safe behavior for external links opened in new tabs.
 *
 * Returns rel attributes for external links to prevent security vulnerabilities
 * like reverse tabnabbing. Use with target="_blank".
 *
 * @param url - The URL being linked to
 * @returns rel string for external links, or undefined for internal links
 */
export function getRelForLink(url: string): string | undefined {
    try {
      const linkUrl = new URL(url, 'https://insitetechsolutions.com') // Replace with your actual domain
      const isExternal = linkUrl.hostname && !linkUrl.hostname.includes('insitetechsolutions.com')
      return isExternal ? 'noopener noreferrer' : undefined
    } catch {
      return undefined
    }
  }

  {/*
    // Example usage:
    import { getRelForLink } from '@/utils/link-utils';

<Link
  href={linkUrl}
  target="_blank"
  rel={getRelForLink(linkUrl)}
>
  External Link
</Link>
*/}