/**
 * @fileoverview Input Sanitization Utility
 * 
 * This module provides sanitization functions for user input to prevent XSS attacks
 * while maintaining a good user experience. It uses DOMPurify with a conservative
 * configuration that removes potentially dangerous HTML while preserving legitimate
 * text content.
 * 
 * Security Features:
 * - Strips all HTML tags and attributes
 * - Preserves legitimate text content and formatting
 * - Works isomorphically (server and client)
 * - Non-intrusive - won't block legitimate user input
 * - Lightweight - minimal bundle impact
 */

import DOMPurify from 'isomorphic-dompurify'

/**
 * Sanitizes a string by removing all HTML tags and attributes while preserving text content.
 * This is the most conservative approach - it strips HTML completely but maintains readability.
 * 
 * Examples:
 * - "Hello <script>alert('xss')</script> World" → "Hello  World"
 * - "Contact us at email@domain.com" → "Contact us at email@domain.com" (unchanged)
 * - "My company: ABC & Co." → "My company: ABC & Co." (unchanged)
 * 
 * @param input - The string to sanitize
 * @returns The sanitized string with HTML removed
 */
export function sanitizeText(input: string): string {
  if (typeof input !== 'string') {
    return ''
  }

  // Strip all HTML tags - this is the safest approach for user input
  // ALLOWED_TAGS: [] means no HTML tags are allowed
  // KEEP_CONTENT: true means we keep the text content inside tags
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
    KEEP_CONTENT: true,
    ALLOW_DATA_ATTR: false,
    ALLOW_ARIA_ATTR: false,
  }).trim()
}

/**
 * Sanitizes an array of strings.
 * Useful for form fields that accept multiple values (like services array).
 * 
 * @param inputs - Array of strings to sanitize
 * @returns Array of sanitized strings
 */
export function sanitizeStringArray(inputs: string[]): string[] {
  if (!Array.isArray(inputs)) {
    return []
  }
  
  return inputs
    .map(sanitizeText)
    .filter(text => text.length > 0) // Remove empty strings after sanitization
}

/**
 * Sanitizes an object's string properties.
 * This is a convenience function for sanitizing form data objects.
 * 
 * @param obj - Object with string properties to sanitize
 * @param fieldsToSanitize - Array of field names to sanitize
 * @returns New object with sanitized string fields
 */
export function sanitizeFormData<T extends Record<string, unknown>>(
  obj: T,
  fieldsToSanitize: (keyof T)[]
): T {
  const sanitized = { ...obj }
  
  for (const field of fieldsToSanitize) {
    const value = sanitized[field]
    
    if (typeof value === 'string') {
      sanitized[field] = sanitizeText(value) as T[keyof T]
    } else if (Array.isArray(value) && value.every((item: unknown) => typeof item === 'string')) {
      sanitized[field] = sanitizeStringArray(value as string[]) as T[keyof T]
    }
  }
  
  return sanitized
}

/**
 * Type-safe sanitization for contact form data.
 * Sanitizes only the fields that could contain user-generated content.
 */
export interface ContactFormData {
  firstName: string
  lastName?: string
  email: string
  phoneNumber?: string
  websiteUrl?: string
  companyName?: string
  services: string[]
  comments?: string
  budget: string
  mailingList?: boolean
  tosAgreement: boolean
  turnstileToken: string
}

/**
 * Sanitizes contact form data by cleaning text fields while preserving structure.
 * Email validation is handled by Zod, so we only sanitize for XSS here.
 * 
 * @param formData - Contact form data to sanitize
 * @returns Sanitized form data
 */
export function sanitizeContactForm(formData: ContactFormData): ContactFormData {
  const sanitized = { ...formData }
  
  // Sanitize string fields
  sanitized.firstName = sanitizeText(sanitized.firstName)
  if (sanitized.lastName) sanitized.lastName = sanitizeText(sanitized.lastName)
  if (sanitized.phoneNumber) sanitized.phoneNumber = sanitizeText(sanitized.phoneNumber)
  if (sanitized.websiteUrl) sanitized.websiteUrl = sanitizeText(sanitized.websiteUrl)
  if (sanitized.companyName) sanitized.companyName = sanitizeText(sanitized.companyName)
  if (sanitized.comments) sanitized.comments = sanitizeText(sanitized.comments)
  sanitized.budget = sanitizeText(sanitized.budget)
  
  // Sanitize services array
  sanitized.services = sanitizeStringArray(sanitized.services)
  
  return sanitized
}

/**
 * Type-safe sanitization for newsletter form data.
 */
export interface NewsletterFormData {
  name: string
  email: string
  turnstileToken: string
}

/**
 * Sanitizes newsletter form data.
 * 
 * @param formData - Newsletter form data to sanitize
 * @returns Sanitized form data
 */
export function sanitizeNewsletterForm(formData: NewsletterFormData): NewsletterFormData {
  const sanitized = { ...formData }
  
  // Sanitize the name field
  sanitized.name = sanitizeText(sanitized.name)
  
  return sanitized
}