"use client"

import { useEffect, useRef, useCallback } from 'react'

declare global {
  interface Window {
    turnstile?: {
      render: (element: string | HTMLElement, options: {
        sitekey: string
        callback?: (token: string) => void
        'error-callback'?: () => void
        'expired-callback'?: () => void
        theme?: 'light' | 'dark' | 'auto'
        size?: 'normal' | 'compact'
      }) => string
      reset: (widgetId?: string) => void
      remove: (widgetId?: string) => void
    }
  }
}

interface TurnstileProps {
  siteKey?: string
  onVerify: (token: string) => void
  onError?: () => void
  onExpire?: () => void
  theme?: 'light' | 'dark' | 'auto'
  size?: 'normal' | 'compact'
  id?: string
}

export default function Turnstile({
  siteKey,
  onVerify,
  onError,
  onExpire,
  theme = 'auto',
  size = 'normal',
  id = 'turnstile-widget'
}: TurnstileProps) {
  const widgetRef = useRef<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const callbacksRef = useRef({ onVerify, onError, onExpire })

  const actualSiteKey = siteKey || process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

  // Update callbacks ref when props change
  useEffect(() => {
    callbacksRef.current = { onVerify, onError, onExpire }
  }, [onVerify, onError, onExpire])

  const loadTurnstile = useCallback(() => {
    if (window.turnstile && containerRef.current) {
      // Remove existing widget if any
      if (widgetRef.current) {
        window.turnstile.remove(widgetRef.current)
      }

      // Render new widget
      widgetRef.current = window.turnstile.render(containerRef.current, {
        sitekey: actualSiteKey!,
        callback: (token: string) => callbacksRef.current.onVerify(token),
        'error-callback': () => callbacksRef.current.onError?.(),
        'expired-callback': () => callbacksRef.current.onExpire?.(),
        theme,
        size,
      })
    }
  }, [actualSiteKey, theme, size])

  useEffect(() => {
    if (!actualSiteKey) {
      console.warn('Turnstile site key not provided')
      return
    }

    // Check if Turnstile is already loaded
    if (window.turnstile) {
      loadTurnstile()
    } else {
      // Load Turnstile script
      const script = document.createElement('script')
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
      script.async = true
      script.defer = true
      script.onload = loadTurnstile
      document.head.appendChild(script)

      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script)
        }
      }
    }

    // Cleanup function
    return () => {
      if (widgetRef.current && window.turnstile) {
        window.turnstile.remove(widgetRef.current)
        widgetRef.current = null
      }
    }
  }, [actualSiteKey, loadTurnstile])

  if (!actualSiteKey) {
    return (
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
        <p className="text-yellow-800 text-sm">
          Turnstile is not configured. Please set NEXT_PUBLIC_TURNSTILE_SITE_KEY.
        </p>
      </div>
    )
  }

  return <div ref={containerRef} id={id} />
} 