interface TurnstileResponse {
  success: boolean
  'error-codes'?: string[]
  challenge_ts?: string
  hostname?: string
}

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