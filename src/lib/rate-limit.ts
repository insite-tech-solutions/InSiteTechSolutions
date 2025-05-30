import { RateLimiterMemory } from 'rate-limiter-flexible'

// Rate limiter for contact form submissions
export const contactFormLimiter = new RateLimiterMemory({
  keyPrefix: 'contact_form',
  points: parseInt(process.env.RATE_LIMIT_MAX || '5'), // Number of requests
  duration: parseInt(process.env.RATE_LIMIT_WINDOW || '900'), // Per 15 minutes (900 seconds)
})

// Rate limiter for newsletter subscriptions
export const newsletterLimiter = new RateLimiterMemory({
  keyPrefix: 'newsletter',
  points: 3, // Allow 3 newsletter subscription attempts
  duration: 900, // Per 15 minutes
})

// Rate limiter for confirmation links
export const confirmationLimiter = new RateLimiterMemory({
  keyPrefix: 'confirmation',
  points: 10, // Allow 10 confirmation attempts
  duration: 3600, // Per hour
})

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