// lib/utils.ts

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

export const getHeaderHeight = () => {
  const header = document.querySelector('header');
  return header ? header.offsetHeight : 0;
};