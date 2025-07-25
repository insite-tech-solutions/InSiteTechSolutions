/**
 * @fileoverview Turnstile Component for Cloudflare CAPTCHA Integration
 *
 * This component provides a React wrapper for Cloudflare's Turnstile CAPTCHA
 * service. Features automatic script loading, widget management, and callback
 * handling for form verification.
 *
 * Features:
 * - Automatic Turnstile script loading
 * - Widget lifecycle management (render, reset, remove)
 * - Callback handling for verification, errors, and expiration
 * - Theme and size customization
 * - Environment-based site key configuration
 * - Cleanup on unmount
 *
 * @module Turnstile
 */

"use client"

import { useEffect, useRef, useCallback, useState } from 'react'

/**
 * Global Turnstile interface declaration
 * 
 * Extends the global Window interface to include
 * the Turnstile API methods for widget management.
 * 
 * @interface Window
 */
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

/**
 * Props for the Turnstile component
 * 
 * @interface TurnstileProps
 * @property {string} [siteKey] - Turnstile site key (falls back to env var)
 * @property {(token: string) => void} onVerify - Callback when verification succeeds
 * @property {() => void} [onError] - Callback when verification fails
 * @property {() => void} [onExpire] - Callback when token expires
 * @property {'light' | 'dark' | 'auto'} [theme] - Widget theme
 * @property {'normal' | 'compact'} [size] - Widget size
 * @property {string} [id] - Widget container ID
 */
interface TurnstileProps {
  siteKey?: string
  onVerify: (token: string) => void
  onError?: () => void
  onExpire?: () => void
  theme?: 'light' | 'dark' | 'auto'
  size?: 'normal' | 'compact'
  id?: string
}

/**
 * Turnstile Component
 * 
 * React wrapper for Cloudflare's Turnstile CAPTCHA service.
 * Handles script loading, widget lifecycle, and callback management.
 * 
 * The component includes:
 * - Automatic Turnstile script loading from CDN
 * - Widget rendering with configurable options
 * - Callback handling for verification events
 * - Theme and size customization
 * - Environment-based site key configuration
 * - Proper cleanup on component unmount
 * - Error handling for missing configuration
 * 
 * Widget Lifecycle:
 * - Script loads automatically if not already present
 * - Widget renders with provided options
 * - Callbacks handle verification events
 * - Widget removes on component unmount
 * 
 * @param {TurnstileProps} props - Component props
 * @returns {JSX.Element} Turnstile widget container
 * 
 * @example
 * ```tsx
 * <Turnstile
 *   onVerify={(token) => console.log('Verified:', token)}
 *   onError={() => console.log('Verification failed')}
 *   theme="auto"
 *   size="normal"
 * />
 * ```
 */
export default function Turnstile({
  siteKey,
  onVerify,
  onError,
  onExpire,
  theme = 'auto',
  size = 'normal',
  id = 'turnstile-widget'
}: TurnstileProps) {
  // Refs for widget management
  const widgetRef = useRef<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const callbacksRef = useRef({ onVerify, onError, onExpire })
  const [isMounted, setIsMounted] = useState(false)

  // Get site key from props or environment variable
  const actualSiteKey = siteKey || process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

  // Set mounted state
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Update callbacks ref when props change
  useEffect(() => {
    callbacksRef.current = { onVerify, onError, onExpire }
  }, [onVerify, onError, onExpire])

  /**
   * Load and render the Turnstile widget
   * 
   * Handles widget creation with proper options and callbacks.
   * Removes existing widget before creating a new one.
   */
  const loadTurnstile = useCallback(() => {
    if (window.turnstile && containerRef.current && isMounted) {
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
  }, [actualSiteKey, theme, size, isMounted])

  // Handle script loading and widget initialization
  useEffect(() => {
    if (!actualSiteKey || !isMounted) {
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
  }, [actualSiteKey, loadTurnstile, isMounted])

  // Show configuration error if site key is missing
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