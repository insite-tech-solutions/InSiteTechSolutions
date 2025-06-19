#!/usr/bin/env node

/**
 * @fileoverview Newsletter Export Script for Mail Merge
 *
 * This script fetches confirmed newsletter subscribers from the Supabase database,
 * generates unique unsubscribe tokens for each, and exports the data into a CSV file.
 * The generated CSV file includes subscriber details and a ready-to-use unsubscribe URL,
 * making it suitable for mail merge operations in external email clients like Thunderbird or Proton Mail.
 *
 * Purpose:
 * - **Offline Mail Merge**: Enables the use of subscriber data with email clients that support CSV imports for personalized campaigns.
 * - **Unsubscribe Management**: Provides a secure and unique unsubscribe link for each subscriber,
 *   allowing them to opt-out directly through the provided URL.
 * - **Data Portability**: Facilitates the export of subscriber data for backup or migration purposes.
 *
 * Usage:
 * Run this script using Node.js:
 * `node scripts/export-newsletter-data.mjs`
 *
 * The script will output a CSV file in an `exports` directory (created if it doesn't exist)
 * with a filename format like `newsletter-subscribers-YYYY-MM-DD.csv`.
 *
 * Technical Implementation:
 * - Loads environment variables from `.env.local` for Supabase credentials and site URL.
 * - Initializes a Supabase client to interact with the `newsletter_subscribers` table.
 * - `generateUnsubscribeToken`: Creates a JWT token containing subscriber email, type, and a nonce.
 *   This token is valid for 1 year and is used to securely identify unsubscribe requests.
 * - `exportSubscribers`: The main function that:
 *   - Queries Supabase for all confirmed subscribers.
 *   - Iterates through subscribers to generate an unsubscribe token and URL for each.
 *   - Constructs a CSV string with headers and subscriber data, including first name and last name derived from the full name.
 *   - Ensures the `exports` directory exists.
 *   - Writes the CSV content to a dated file.
 *   - Provides clear instructions for mail merge and a security note about the exported data.
 *
 * Security Note:
 * The generated CSV file contains sensitive subscriber information and unique unsubscribe tokens.
 * It is crucial to keep this file secure and delete it immediately after its intended use.
 */

import { createClient } from '@supabase/supabase-js'
import jwt from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

// Load environment variables from the .env.local file
dotenv.config({ path: '.env.local' })

// Initialize Supabase client using environment variables
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

// Retrieve JWT secret and site URL from environment variables
const JWT_SECRET = process.env.JWT_SECRET
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://insitetechsolutions.com'

/**
 * Generates a JSON Web Token (JWT) for newsletter unsubscription.
 * This token securely encodes the subscriber's email and a unique nonce,
 * ensuring that unsubscribe requests are legitimate and unique.
 *
 * @param {string} email - The email address of the subscriber.
 * @returns {string} A signed JWT string that can be used as an unsubscribe token.
 */
function generateUnsubscribeToken(email) {
  const payload = {
    email,
    type: 'newsletter_unsubscribe',
    nonce: uuidv4(), // Unique identifier for each token to prevent replay attacks
    timestamp: Date.now(),
  }

  // Sign the payload to create a JWT, expiring in 1 year
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: '365d', // 1 year validity
  })
}

/**
 * Fetches confirmed newsletter subscribers from Supabase, generates unsubscribe links,
 * and exports the data into a CSV file for mail merge purposes.
 * The function handles data retrieval, token generation, CSV formatting, and file saving.
 *
 * @async
 * @returns {Promise<void>} A promise that resolves when the export is complete,
 *   or rejects if an error occurs during the process.
 */
async function exportSubscribers() {
  try {
    console.log('🔍 Fetching confirmed newsletter subscribers...')
    
    // Query the 'newsletter_subscribers' table for confirmed subscribers
    const { data: subscribers, error } = await supabase
      .from('newsletter_subscribers')
      .select('id, email, name, confirmed_at, created_at')
      .eq('status', 'confirmed')
      .order('confirmed_at', { ascending: false }) // Order by confirmation date, newest first

    // Handle database errors
    if (error) {
      throw new Error(`Database error: ${error.message}`)
    }

    // Check if any confirmed subscribers were found
    if (!subscribers || subscribers.length === 0) {
      console.log('📭 No confirmed subscribers found.')
      return
    }

    console.log(`📊 Found ${subscribers.length} confirmed subscribers`)

    // Generate unsubscribe tokens and prepare data for CSV export
    const csvData = subscribers.map(subscriber => {
      const unsubscribeToken = generateUnsubscribeToken(subscriber.email)
      const unsubscribeUrl = `${SITE_URL}/api/newsletter/unsubscribe?token=${unsubscribeToken}`
      
      // Destructure subscriber name into first and last names for mail merge flexibility
      const [firstName, ...lastNameParts] = (subscriber.name || '').split(' ')
      const lastName = lastNameParts.join(' ')

      return {
        email: subscriber.email,
        name: subscriber.name || '',
        firstName: firstName || '',
        lastName: lastName || '',
        confirmedAt: subscriber.confirmed_at,
        createdAt: subscriber.created_at,
        unsubscribeUrl: unsubscribeUrl,
        unsubscribeToken: unsubscribeToken
      }
    })

    // Define CSV headers
    const csvHeaders = [
      'email',
      'name', 
      'firstName',
      'lastName',
      'confirmedAt',
      'createdAt',
      'unsubscribeUrl',
      'unsubscribeToken'
    ]

    // Create the full CSV content, including headers and properly quoted/escaped data rows
    const csvContent = [
      csvHeaders.join(','), // Join headers with commas
      ...csvData.map(row => 
        csvHeaders.map(header => 
          `"${(row[header] || '').toString().replace(/"/g, '""')}"` // Quote and escape content
        ).join(',')
      )
    ].join('\n') // Join lines with newlines

    // Define filename with current date and create full file path
    const timestamp = new Date().toISOString().split('T')[0]
    const filename = `newsletter-subscribers-${timestamp}.csv`
    const filepath = path.join(process.cwd(), 'exports', filename)

    // Ensure the 'exports' directory exists; create it if it doesn't
    const exportsDir = path.join(process.cwd(), 'exports')
    if (!fs.existsSync(exportsDir)) {
      fs.mkdirSync(exportsDir, { recursive: true })
    }

    // Write the CSV content to the file
    fs.writeFileSync(filepath, csvContent, 'utf8')

    console.log(`✅ Export completed!`);
    console.log(`📁 File saved: ${filepath}`);
    console.log(`📊 Exported ${subscribers.length} subscribers`);
    console.log(`\n📧 Mail Merge Instructions:`);
    console.log(`1. Import ${filename} into your email client`);
    console.log(`2. Use these merge fields in your template:`);
    console.log(`   - {{email}} - Subscriber email`);
    console.log(`   - {{firstName}} - First name`);
    console.log(`   - {{name}} - Full name`);
    console.log(`   - {{unsubscribeUrl}} - Complete unsubscribe link`);
    console.log(`\n🔗 Example unsubscribe link in email:`);
    console.log(`<a href="{{unsubscribeUrl}}">Unsubscribe</a>`);
    console.log(`\n⚠️  Security Note: Keep this CSV file secure and delete after use!`);

  } catch (error) {
    // Log and exit on error
    console.error('❌ Export failed:', error.message)
    process.exit(1)
  }
}

// Execute the main export function when the script is run
exportSubscribers() 