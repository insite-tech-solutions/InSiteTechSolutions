/**
 * @fileoverview Supabase Client Initialization and Database Type Definitions
 *
 * This module initializes the Supabase client instances for both public (client-side) and
 * service role (server-side, admin) access. It centralizes Supabase configuration
 * and provides type definitions for database entities, ensuring type safety when
 * interacting with the Supabase database.
 *
 * Features:
 * - Initializes two Supabase client instances: one for public access and one for admin-level operations.
 * - Loads Supabase URL and API keys from environment variables, enforcing their presence.
 * - Defines a `NewsletterSubscriber` interface to type data retrieved from or inserted into the newsletter table.
 *
 * Security Considerations:
 * - `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are exposed publicly (client-side).
 * - `SUPABASE_SERVICE_ROLE_KEY` is a secret and should *only* be used on the server-side (`supabaseAdmin`).
 * - Throws errors if required environment variables are not set, preventing misconfiguration.
 *
 * Technical Implementation:
 * - Uses `@supabase/supabase-js` for client creation.
 * - Differentiates between public and admin clients for secure access control.
 * - TypeScript interfaces provide strong typing for database records.
 */

import { createClient } from '@supabase/supabase-js'
import type { SupabaseClient } from '@supabase/supabase-js';

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('NEXT_PUBLIC_SUPABASE_URL environment variable is not set')
}

if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable is not set')
}

/**
 * Public Supabase client instance.
 * This client is safe to use on the client-side for interacting with Supabase
 * based on configured Row Level Security (RLS) policies.
 */
export const supabase: SupabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

/**
 * Service role (admin) Supabase client instance.
 * This client should *only* be used on the server-side, as it bypasses Row Level Security
 * and has full administrative privileges over the Supabase database.
 * It uses the `SUPABASE_SERVICE_ROLE_KEY` or falls back to `NEXT_PUBLIC_SUPABASE_ANON_KEY`
 * if the service role key is not explicitly provided (e.g., for local development).
 */
export const supabaseAdmin: SupabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

/**
 * Database type definition for a `NewsletterSubscriber`.
 * Represents a record in the `newsletter_subscribers` table.
 */
export interface NewsletterSubscriber {
  /** The unique identifier of the subscriber (UUID). */
  id: string
  /** The email address of the subscriber. */
  email: string
  /** The name of the subscriber (optional). */
  name?: string
  /** The current status of the subscriber ('pending', 'confirmed', or 'unsubscribed'). */
  status: 'pending' | 'confirmed' | 'unsubscribed'
  /** The confirmation token used for email verification (optional). */
  confirmation_token?: string
  /** The timestamp when the subscriber record was created. */
  created_at: string
  /** The timestamp when the subscription was confirmed (optional). */
  confirmed_at?: string
  /** The IP address from which the subscription originated (optional). */
  ip_address?: string
  /** Indicates whether the privacy policy was accepted by the subscriber. */
  privacy_policy_accepted: boolean
  /** The timestamp when the subscriber unsubscribed (optional). */
  unsubscribed_at?: string
}