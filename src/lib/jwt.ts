/**
 * @fileoverview Utility for JSON Web Token (JWT) Operations
 *
 * This module provides functions for generating and verifying JSON Web Tokens (JWTs)
 * specifically for newsletter confirmation and unsubscribe functionalities.
 * It leverages `jsonwebtoken` for cryptographic operations and `uuid` for generating unique nonces.
 *
 * Security Considerations:
 * - Relies on `JWT_SECRET` environment variable for signing and verifying tokens.
 * - Tokens are time-limited to mitigate replay attacks and ensure freshness.
 * - Uses unique nonces to prevent token reuse and enhance security.
 *
 * Features:
 * - Generation of secure confirmation tokens for email verification.
 * - Verification of confirmation tokens, handling various error conditions like expiration or invalidity.
 * - Generation of unique unsubscribe tokens for managing newsletter subscriptions.
 * - Verification of unsubscribe tokens, including checks for expiration.
 * - Type-safe interfaces for token payloads and verification results.
 *
 * Technical Implementation:
 * - Uses HMAC SHA256 (HS256) for signing and verifying tokens.
 * - Error handling differentiates between expired tokens and general invalid tokens.
 * - Requires `JWT_SECRET` to be set in the environment, throwing an error if missing.
 */

import jwt from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid'

/**
 * The secret key used for signing and verifying JWTs.
 * This value is loaded from the environment variable `JWT_SECRET`.
 * It is critical for the security of the tokens and should be kept confidential.
 * @type {string}
 * @throws {Error} If the `JWT_SECRET` environment variable is not set, indicating a critical configuration error.
 */
const JWT_SECRET = process.env.JWT_SECRET

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is not set')
}

/**
 * Interface representing the result of a token verification operation for confirmation tokens.
 */
interface VerificationResult {
  /** Indicates whether the token verification was successful. */
  success: boolean;
  /** The email address extracted from the token, if successful. */
  email?: string;
  /** The subscription ID extracted from the token, if present and successful. */
  subscriptionId?: string;
  /** An error message if the verification failed. */
  error?: string;
}

/**
 * Interface representing the result of an unsubscribe token verification operation.
 */
interface UnsubscribeVerificationResult {
  /** Indicates whether the token verification was successful. */
  success: boolean;
  /** The email address extracted from the token, if successful. */
  email?: string;
  /** An error message if the verification failed. */
  error?: string;
}

/**
 * Interface representing the payload structure for newsletter-related JWTs.
 */
interface NewsletterTokenPayload {
  /** The email address associated with the token. */
  email: string
  /** The type of the token, e.g., 'newsletter_confirmation'. */
  type: 'newsletter_confirmation' | 'newsletter_unsubscribe'
  /** A unique identifier for each token, preventing replay attacks. */
  nonce: string
  /** Optional subscription ID for tracking purposes. */
  subscriptionId?: string
  /** Issued at timestamp (standard JWT claim). */
  iat?: number
  /** Expiration timestamp (standard JWT claim). */
  exp?: number
  /** Timestamp of token generation for additional uniqueness and tracking. */
  timestamp: number
}

/**
 * Generates a JWT for newsletter confirmation.
 * This token is used to verify a user's email address after they subscribe to the newsletter.
 *
 * @param {string} email - The email address for which to generate the confirmation token.
 * @param {string} [subscriptionId] - An optional subscription ID to associate with the token for tracking.
 * @returns {string} The generated JWT string.
 */
export function generateConfirmationToken(email: string, subscriptionId?: string): string {
  const payload: NewsletterTokenPayload = {
    email,
    type: 'newsletter_confirmation',
    nonce: uuidv4(), // Unique nonce ensures different tokens each time
    subscriptionId,
    timestamp: Date.now(), // Add timestamp for additional uniqueness
  }

  return jwt.sign(payload, JWT_SECRET as string, {
    expiresIn: '48h', // Token expires in 48 hours
  })
}

/**
 * Verifies a newsletter confirmation JWT.
 * This function validates the token's signature, expiration, and ensures it's the correct type.
 *
 * @param {string} token - The JWT string to be verified.
 * @returns {VerificationResult} An object indicating the success status, email, subscriptionId, and any error message.
 */
export function verifyConfirmationToken(token: string): VerificationResult {
  try {
    const decoded = jwt.verify(token, JWT_SECRET as string) as jwt.JwtPayload & NewsletterTokenPayload

    if (decoded.type !== 'newsletter_confirmation') {
      return {
        success: false,
        error: 'Invalid token type',
      }
    }

    return {
      success: true,
      email: decoded.email,
      subscriptionId: decoded.subscriptionId,
    }
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return {
        success: false,
        error: 'Confirmation link has expired. Please subscribe again.',
      }
    }

    if (error instanceof jwt.JsonWebTokenError) {
      return {
        success: false,
        error: 'Invalid confirmation link.',
      }
    }

    return {
      success: false,
      error: 'Failed to verify confirmation link.',
    }
  }
}

/**
 * Generates a JWT for newsletter unsubscription.
 * This token allows users to unsubscribe from newsletters via a link in their email.
 *
 * @param {string} email - The email address for which to generate the unsubscribe token.
 * @returns {string} The generated JWT string.
 */
export function generateUnsubscribeToken(email: string): string {
  const payload: Pick<NewsletterTokenPayload, 'email' | 'type' | 'nonce' | 'timestamp'> = {
    email,
    type: 'newsletter_unsubscribe',
    nonce: uuidv4(),
    timestamp: Date.now(), // Add timestamp for uniqueness
  }

  return jwt.sign(payload, JWT_SECRET as string, {
    expiresIn: '365d', // Unsubscribe links valid for 1 year
  })
}

/**
 * Verifies a newsletter unsubscribe JWT.
 * This function validates the token's signature, expiration, and ensures it's the correct type.
 *
 * @param {string} token - The JWT string to be verified.
 * @returns {UnsubscribeVerificationResult} An object indicating the success status, email, and any error message.
 */
export function verifyUnsubscribeToken(token: string): UnsubscribeVerificationResult {
  try {
    const decoded = jwt.verify(token, JWT_SECRET as string) as jwt.JwtPayload & NewsletterTokenPayload

    if (decoded.type !== 'newsletter_unsubscribe') {
      return {
        success: false,
        error: 'Invalid unsubscribe token',
      }
    }

    return {
      success: true,
      email: decoded.email,
    }
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return {
        success: false,
        error: 'Unsubscribe link has expired. Please contact us directly.',
      }
    }

    return {
      success: false,
      error: 'Invalid unsubscribe link.',
    }
  }
} 