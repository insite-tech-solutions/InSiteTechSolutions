/**
 * Utility functions shared across the project.
 * Includes Tailwind class name merging and DOM-based layout utilities.
 */

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names and merges Tailwind classes properly
 * 
 * @param inputs Any number of class strings, objects, or arrays to merge
 * @returns A string of merged class names
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Retrieves the height of the header element in the DOM.
 * 
 * @returns {number} The height of the header element, or 0 if the header is not found
 */
export const getHeaderHeight = () => {
  const header = document.querySelector('header');
  return header ? header.offsetHeight : 0;
};