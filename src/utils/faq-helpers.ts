/**
 * @fileoverview FAQ Helper Functions for SEO
 * 
 * Utility functions to extract and format FAQ data for structured data generation.
 * Provides functions to aggregate FAQ content from various sections for SEO
 * optimization and structured data markup.
 * 
 * Features:
 * - FAQ data extraction from content sections
 * - Structured data generation for search engines
 * - SEO optimization for FAQ content
 * - Content aggregation from multiple sources
 * - FAQ schema markup preparation
 * 
 * @module faqHelpers
 */

import { faqPageSections } from '@/content/insites-pages/faq-page/sections';

/**
 * Extract all FAQ questions and answers from FAQ sections
 * 
 * Aggregates FAQ content from all sections to create a comprehensive
 * list for structured data generation and SEO optimization.
 * 
 * Key Features:
 * - Extracts FAQs from all content sections
 * - Flattens nested FAQ structure
 * - Prepares data for structured markup
 * - SEO-optimized FAQ aggregation
 * 
 * @returns {Array<{question: string, answer: string}>} Array of FAQ objects with question and answer properties
 * 
 * @example
 * ```tsx
 * const allFAQs = extractAllFAQs();
 * // Returns: [{ question: "What services do you offer?", answer: "We offer..." }, ...]
 * ```
 */
export function extractAllFAQs(): Array<{ question: string; answer: string }> {
  const allFAQs: Array<{ question: string; answer: string }> = [];
  
  // Iterate through all FAQ sections and extract individual FAQ items
  faqPageSections.forEach(section => {
    section.content.items.forEach(item => {
      allFAQs.push({
        question: item.question,
        answer: item.answer
      });
    });
  });
  
  return allFAQs;
} 