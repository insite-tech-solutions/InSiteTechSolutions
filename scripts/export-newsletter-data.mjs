#!/usr/bin/env node

/**
 * Newsletter Export Script for Mail Merge
 * 
 * This script exports confirmed newsletter subscribers with their unsubscribe tokens
 * for use in external email campaigns (Thunderbird, Proton Mail, etc.)
 * 
 * Usage: node scripts/export-newsletter-data.mjs
 * Output: CSV file with subscriber data and unsubscribe links
 */

import { createClient } from '@supabase/supabase-js'
import jwt from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid'
import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: '.env.local' })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const JWT_SECRET = process.env.JWT_SECRET
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://insitetechsolutions.com'

function generateUnsubscribeToken(email) {
  const payload = {
    email,
    type: 'newsletter_unsubscribe',
    nonce: uuidv4(),
    timestamp: Date.now(),
  }

  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: '365d', // 1 year validity
  })
}

async function exportSubscribers() {
  try {
    console.log('🔍 Fetching confirmed newsletter subscribers...')
    
    // Get all confirmed subscribers
    const { data: subscribers, error } = await supabase
      .from('newsletter_subscribers')
      .select('id, email, name, confirmed_at, created_at')
      .eq('status', 'confirmed')
      .order('confirmed_at', { ascending: false })

    if (error) {
      throw new Error(`Database error: ${error.message}`)
    }

    if (!subscribers || subscribers.length === 0) {
      console.log('📭 No confirmed subscribers found.')
      return
    }

    console.log(`📊 Found ${subscribers.length} confirmed subscribers`)

    // Generate unsubscribe tokens and prepare CSV data
    const csvData = subscribers.map(subscriber => {
      const unsubscribeToken = generateUnsubscribeToken(subscriber.email)
      const unsubscribeUrl = `${SITE_URL}/api/newsletter/unsubscribe?token=${unsubscribeToken}`
      
      return {
        email: subscriber.email,
        name: subscriber.name || '',
        firstName: (subscriber.name || '').split(' ')[0] || '',
        lastName: (subscriber.name || '').split(' ').slice(1).join(' ') || '',
        confirmedAt: subscriber.confirmed_at,
        createdAt: subscriber.created_at,
        unsubscribeUrl: unsubscribeUrl,
        unsubscribeToken: unsubscribeToken
      }
    })

    // Create CSV content
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

    const csvContent = [
      csvHeaders.join(','),
      ...csvData.map(row => 
        csvHeaders.map(header => 
          `"${(row[header] || '').toString().replace(/"/g, '""')}"`
        ).join(',')
      )
    ].join('\n')

    // Save to file
    const timestamp = new Date().toISOString().split('T')[0]
    const filename = `newsletter-subscribers-${timestamp}.csv`
    const filepath = path.join(process.cwd(), 'exports', filename)

    // Create exports directory if it doesn't exist
    const exportsDir = path.join(process.cwd(), 'exports')
    if (!fs.existsSync(exportsDir)) {
      fs.mkdirSync(exportsDir, { recursive: true })
    }

    fs.writeFileSync(filepath, csvContent, 'utf8')

    console.log(`✅ Export completed!`)
    console.log(`📁 File saved: ${filepath}`)
    console.log(`📊 Exported ${subscribers.length} subscribers`)
    console.log(`\n📧 Mail Merge Instructions:`)
    console.log(`1. Import ${filename} into your email client`)
    console.log(`2. Use these merge fields in your template:`)
    console.log(`   - {{email}} - Subscriber email`)
    console.log(`   - {{firstName}} - First name`)
    console.log(`   - {{name}} - Full name`)
    console.log(`   - {{unsubscribeUrl}} - Complete unsubscribe link`)
    console.log(`\n🔗 Example unsubscribe link in email:`)
    console.log(`<a href="{{unsubscribeUrl}}">Unsubscribe</a>`)
    console.log(`\n⚠️  Security Note: Keep this CSV file secure and delete after use!`)

  } catch (error) {
    console.error('❌ Export failed:', error.message)
    process.exit(1)
  }
}

// Run the export
exportSubscribers() 