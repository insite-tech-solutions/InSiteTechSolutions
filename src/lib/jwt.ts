import jwt from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid'

const JWT_SECRET = process.env.JWT_SECRET

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is not set')
}

interface NewsletterTokenPayload {
  email: string
  type: 'newsletter_confirmation'
  nonce: string // Unique identifier for each token
  subscriptionId?: string // Optional subscription ID for tracking
  iat?: number
  exp?: number
  timestamp: number
}

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

export function verifyConfirmationToken(token: string): {
  success: boolean
  email?: string
  subscriptionId?: string
  error?: string
} {
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

// Generate unsubscribe token (can be used in any newsletter email)
export function generateUnsubscribeToken(email: string): string {
  const payload = {
    email,
    type: 'newsletter_unsubscribe',
    nonce: uuidv4(),
    timestamp: Date.now(), // Add timestamp for uniqueness
  }

  return jwt.sign(payload, JWT_SECRET as string, {
    expiresIn: '365d', // Unsubscribe links valid for 1 year
  })
}

export function verifyUnsubscribeToken(token: string): {
  success: boolean
  email?: string
  error?: string
} {
  try {
    const decoded = jwt.verify(token, JWT_SECRET as string) as jwt.JwtPayload & {
      email: string
      type: string
    }

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