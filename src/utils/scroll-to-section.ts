/**
 * @fileoverview Scroll to Section Utility
 * 
 * Provides utilities for smooth scrolling to page sections with dynamic content support.
 * Handles cross-page navigation and waits for dynamically loaded content to ensure
 * the target element exists before attempting to scroll.
 * 
 * Features:
 * - Smooth scrolling with header offset calculation
 * - Retry logic for dynamically loaded content
 * - Cross-page navigation support
 * - Initial anchor scroll handling
 * - Configurable retry attempts and delays
 * - SSR-safe implementation
 * 
 * @module scrollToSection
 */

import { HEADER_HEIGHT } from '@/lib/constants'

/**
 * Scrolls to a section by ID with retry logic for dynamic content
 * 
 * Attempts to find the target element and scroll to it with smooth animation.
 * Includes retry logic to handle dynamically loaded content that may not be
 * immediately available in the DOM.
 * 
 * Key Features:
 * - Smooth scrolling behavior with header offset
 * - Retry logic for dynamic content loading
 * - Configurable retry attempts and delays
 * - SSR-safe with window checks
 * - Header height offset calculation
 * 
 * @param {string} sectionId - The ID of the section to scroll to (without #)
 * @param {number} [maxRetries=10] - Maximum number of retry attempts
 * @param {number} [retryDelay=200] - Delay between retries in milliseconds
 * 
 * @example
 * ```tsx
 * // Scroll to FAQ section
 * scrollToSection('faq-section');
 * 
 * // Scroll with custom retry settings
 * scrollToSection('dynamic-content', 15, 300);
 * ```
 */
export function scrollToSection(
  sectionId: string, 
  maxRetries: number = 10, 
  retryDelay: number = 200
): void {
  let attempts = 0;

  /**
   * Attempts to scroll to the target element
   * Retries if element is not found and max attempts not exceeded
   */
  const attemptScroll = () => {
    const element = document.getElementById(sectionId);
    
    if (element) {
      // Calculate position with header offset for proper positioning
      const elementPosition = element.offsetTop - HEADER_HEIGHT;
      
      // Smooth scroll to calculated position
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      return;
    }

    // Element not found - retry if we haven't exceeded max attempts
    attempts++;
    if (attempts < maxRetries) {
      setTimeout(attemptScroll, retryDelay);
    }
  };

  // Start the first attempt after a brief delay to allow page to load
  setTimeout(attemptScroll, 100);
}

/**
 * Checks if we're navigating to a section anchor and handles the scroll
 * 
 * Call this in useEffect on page load to handle direct navigation to anchors.
 * Useful for handling deep links and cross-page navigation to specific sections.
 * 
 * Key Features:
 * - Handles URL hash navigation
 * - SSR-safe with window checks
 * - Automatic scroll on page load
 * - Cross-page anchor support
 * 
 * @example
 * ```tsx
 * useEffect(() => {
 *   handleInitialAnchorScroll();
 * }, []);
 * ```
 */
export function handleInitialAnchorScroll(): void {
  // Check if URL has a hash for SSR safety
  if (typeof window !== 'undefined' && window.location.hash) {
    const sectionId = window.location.hash.substring(1); // Remove the #
    scrollToSection(sectionId);
  }
} 