/**
 * @fileoverview Cloudflare Turnstile Verification Utility
 *
 * This module provides a utility function for verifying Cloudflare Turnstile tokens
 * on the server-side. It interacts with the Cloudflare Turnstile API to ensure that
 * incoming requests are legitimate and not from bots, enhancing the security of forms
 * and other interactive elements.
 *
 * Features:
 * - Sends Turnstile response tokens to Cloudflare's siteverify endpoint for validation.
 * - Includes optional client IP address for enhanced fraud detection by Turnstile.
 * - Handles various success and error responses from the Turnstile API.
 * - Provides a clear success/failure status and user-friendly error messages.
 *
 * Security Considerations:
 * - Requires `TURNSTILE_SECRET_KEY` environment variable, which must be kept confidential.
 * - Logs errors to the console for debugging but returns generic error messages to the client.
 *
 * Technical Implementation:
 * - Uses `fetch` API to make a POST request to the Turnstile siteverify endpoint.
 * - Encodes request body using `URLSearchParams` for `application/x-www-form-urlencoded` content type.
 * - Checks `process.env.TURNSTILE_SECRET_KEY` and returns an error if not configured.
 */

/**
 * Interface representing the response structure from the Cloudflare Turnstile siteverify API.
 */
interface TurnstileResponse {
  /** Indicates whether the Turnstile challenge was successfully passed. */
  success: boolean
  /** An array of error codes if the validation failed (optional). */
  'error-codes'?: string[]
  /** The timestamp of the challenge (optional). */
  challenge_ts?: string
  /** The hostname where the challenge was solved (optional). */
  hostname?: string
}

/**
 * Validates a Cloudflare Turnstile token with the Cloudflare siteverify API.
 * This function is typically called on the server-side to verify a token generated
 * by the Turnstile widget on the client-side.
 *
 * @param {string} token - The Turnstile token received from the client-side form submission.
 * @param {string} [ip] - The client's IP address, used by Turnstile for improved fraud detection (optional).
 * @returns {Promise<{ success: boolean; error?: string }>} A promise that resolves with an object indicating:
 * - `success`: `true` if the token is valid, `false` otherwise.
 * - `error`: A user-friendly error message if validation fails.
 * @throws {Error} If `TURNSTILE_SECRET_KEY` is not configured, or if a network error occurs during the API call.
 */
export async function validateTurnstile(token: string, ip?: string): Promise<{
  success: boolean
  error?: string
}> {
  if (!process.env.TURNSTILE_SECRET_KEY) {
    console.error('TURNSTILE_SECRET_KEY is not configured')
    return { success: false, error: 'Turnstile not configured' }
  }

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
        ...(ip && { remoteip: ip }),
      }),
    })

    const result: TurnstileResponse = await response.json()

    if (!result.success) {
      console.error('Turnstile validation failed:', result['error-codes'])
      return {
        success: false,
        error: 'Security verification failed. Please try again.',
      }
    }

    return { success: true }
  } catch (error) {
    console.error('Turnstile validation error:', error)
    return {
      success: false,
      error: 'Security verification failed. Please try again.',
    }
  }
} 