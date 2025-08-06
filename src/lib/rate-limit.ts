/**
 * @fileoverview Rate Limiting Utilities for API Endpoints
 *
 * This module provides utilities for implementing rate limiting on various API endpoints
 * to prevent abuse and ensure fair usage. It leverages the `rate-limiter-flexible` library
 * to define and manage rate limits for different types of requests, such as contact form
 * submissions, newsletter subscriptions, and email confirmations.
 *
 * Features:
 * - Configurable rate limits for different application flows (contact forms, newsletters, confirmations).
 * - Utilizes in-memory storage for rate limiting, suitable for single-instance deployments or sticky sessions.
 * - Provides a generic function (`checkRateLimit`) to easily apply rate limiting logic to any key.
 * - Includes a utility function (`getClientIP`) to reliably extract the client's IP address from incoming requests,
 *   supporting various proxy headers (e.g., `x-forwarded-for`, `x-real-ip`, `cf-connecting-ip`).
 * - Environment variables are used for configurable rate limit parameters (`RATE_LIMIT_MAX`, `RATE_LIMIT_WINDOW`).
 *
 * Technical Implementation:
 * - `RateLimiterMemory` instances are configured with `points` (max requests) and `duration` (window in seconds).
 * - `checkRateLimit` wraps the `limiter.consume` method, handling `RateLimiterRes` to provide retry information.
 * - `getClientIP` prioritizes common headers to find the most accurate client IP.
 */

import { RateLimiterMemory } from 'rate-limiter-flexible'

/**
 * Rate limiter instance for contact form submissions.
 * Allows a configurable number of requests within a specified duration to prevent spam.
 * Default: 5 requests per 15 minutes.
 */
export const contactFormLimiter = new RateLimiterMemory({
  keyPrefix: 'contact_form',
  points: parseInt(process.env.RATE_LIMIT_MAX || '5'), // Number of requests
  duration: parseInt(process.env.RATE_LIMIT_WINDOW || '900'), // Per 15 minutes (900 seconds)
})

/**
 * Rate limiter instance for newsletter subscription attempts.
 * Limits the number of subscription requests from a single source.
 * Default: 3 attempts per 15 minutes.
 */
export const newsletterLimiter = new RateLimiterMemory({
  keyPrefix: 'newsletter',
  points: 3, // Allow 3 newsletter subscription attempts
  duration: 900, // Per 15 minutes
})

/**
 * Rate limiter instance for confirmation link access.
 * Prevents excessive attempts to access confirmation links, which could indicate abuse.
 * Default: 10 attempts per hour.
 */
export const confirmationLimiter = new RateLimiterMemory({
  keyPrefix: 'confirmation',
  points: 10, // Allow 10 confirmation attempts
  duration: 3600, // Per hour
})

/**
 * Checks if a given key is within the allowed rate limit for a specific limiter.
 * If the limit is exceeded, it provides information on when to retry.
 *
 * @param {RateLimiterMemory} limiter - The `RateLimiterMemory` instance to use for checking the limit.
 * @param {string} key - The key to check against the rate limiter (e.g., client IP address).
 * @returns {Promise<{ success: boolean; error?: string; retryAfter?: number }>} A promise that resolves with an object indicating:
 * - `success`: `true` if the request is allowed, `false` if the limit is exceeded.
 * - `error`: An error message if the limit is exceeded.
 * - `retryAfter`: The number of seconds to wait before retrying, if the limit is exceeded.
 */
export async function checkRateLimit(
  limiter: RateLimiterMemory,
  key: string
): Promise<{ success: boolean; error?: string; retryAfter?: number }> {
  try {
    await limiter.consume(key)
    return { success: true }
  } catch (rejRes) {
    const retryAfter = Math.round((rejRes as { msBeforeNext: number }).msBeforeNext / 1000) || 1
    return {
      success: false,
      error: `Too many requests. Please try again in ${retryAfter} seconds.`,
      retryAfter,
    }
  }
}

/**
 * Extracts the client's IP address from a `Request` object.
 * It checks common HTTP headers in a prioritized order to get the most accurate IP,
 * especially when requests pass through proxies or CDNs.
 *
 * @param {Request} request - The incoming `Request` object from a Next.js API route or similar context.
 * @returns {string} The extracted client IP address, or 'unknown' if no IP could be determined.
 */
export function getClientIP(request: Request): string {
  // Try to get the real IP from various headers
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  const cfConnectingIP = request.headers.get('cf-connecting-ip')
  
  if (cfConnectingIP) return cfConnectingIP
  if (realIP) return realIP
  if (forwarded) return forwarded.split(',')[0].trim()
  
  return 'unknown'
} 