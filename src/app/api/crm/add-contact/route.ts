/**
 * @fileoverview CRM Contact/Lead Addition API Route Handler
 *
 * This module provides API route handlers for adding contacts and leads to the CRM system (ERPNext).
 * It supports both `GET` requests (primarily for simple email-link based additions) and
 * `POST` requests (for more robust, future API integrations with JSON bodies).
 *
 * Note: The presence of two `POST` functions is unusual for a single Next.js App Router `route.ts` file.
 * Typically, only one function per HTTP method (GET, POST, etc.) is expected.
 * This implementation handles both, but may indicate a potential structural review opportunity.
 *
 * Features:
 * - **Input Validation**: Uses `zod` for schema validation of incoming data.
 * - **ERPNext Integration**: Leverages `erpnextClient` to create lead records.
 * - **HTML Responses for GET**: Provides user-friendly HTML pages for success or error when accessed directly via GET request.
 * - **JSON Responses for POST**: Returns JSON responses for programmatic API calls.
 * - **Data Transformation**: Maps incoming request data to ERPNext-compatible formats.
 *
 * Technical Implementation:
 * - Utilizes Next.js App Router's `Route Handler` pattern.
 * - Employs `NextRequest` and `NextResponse` for request and response handling.
 * - Integrates with `@/lib/erpnext` for CRM operations.
 * - Handles URL search parameters for `GET` requests and JSON bodies for `POST` requests.
 * - Includes basic error handling and informative responses.
 */

import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { erpnextClient } from '@/lib/erpnext'

/**
 * Zod schema for validating incoming data for CRM contact/lead addition.
 * Defines the expected structure and types of fields for both GET and POST requests.
 */
const addContactSchema = z.object({
  /** The first name of the contact/lead, required. */
  firstName: z.string().min(1, "First name is required"),
  /** The last name of the contact/lead (optional). Nullish values are treated as undefined. */
  lastName: z.string().nullish(),
  /** The email address of the contact/lead, required and must be a valid email format. */
  email: z.string().email("Valid email is required"),
  /** The phone number of the contact/lead (optional). Nullish values are treated as undefined. */
  phone: z.string().nullish(),
  /** The company name of the contact/lead (optional). Nullish values are treated as undefined. */
  company: z.string().nullish(),
  /** The website URL of the contact/lead's company (optional). Nullish values are treated as undefined. */
  website: z.string().nullish(),
  /** A comma-separated string of services requested (optional). Nullish values are treated as undefined. */
  services: z.string().nullish(),
  /** The estimated budget (optional). Nullish values are treated as undefined. */
  budget: z.string().nullish(),
  /** Additional comments (optional). Nullish values are treated as undefined. */
  comments: z.string().nullish(),
  /** The source from which the contact/lead was acquired (optional). Nullish values are treated as undefined. */
  source: z.string().nullish(),
})

/**
 * Handles GET requests to add a contact/lead to the CRM.
 * This endpoint is typically used via a direct link (e.g., from an email) to quickly add a lead.
 * It returns an HTML response indicating the success or failure of the operation.
 *
 * @param {NextRequest} request - The incoming Next.js request object containing search parameters.
 * @returns {Promise<NextResponse>} A promise that resolves to a `NextResponse` object
 *                                  containing an HTML page for success or error.
 *                                  Returns:
 *                                  - `200 OK` with a success HTML page if the lead is added/updated.
 *                                  - `400 Bad Request` with an error HTML page for validation errors.
 *                                  - `500 Internal Server Error` with an error HTML page for unexpected server errors.
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url)
    
    // Extract parameters from URL search query
    const params = {
      firstName: searchParams.get('firstName'),
      lastName: searchParams.get('lastName'),
      email: searchParams.get('email'),
      phone: searchParams.get('phone'),
      company: searchParams.get('company'),
      website: searchParams.get('website'),
      services: searchParams.get('services'),
      budget: searchParams.get('budget'),
      comments: searchParams.get('comments'),
      source: searchParams.get('source'),
    }

    // Validate extracted parameters using the defined schema
    const validationResult = addContactSchema.safeParse(params)
    
    if (!validationResult.success) {
      return new NextResponse(
        `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Error - Add to CRM</title>
          <style>
            body { font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px; }
            .error { background: #fee; border: 1px solid #fcc; padding: 20px; border-radius: 8px; }
            .success { background: #efe; border: 1px solid #cfc; padding: 20px; border-radius: 8px; }
            .info { background: #eef; border: 1px solid #ccf; padding: 20px; border-radius: 8px; }
          </style>
        </head>
        <body>
          <div class="error">
            <h2>❌ Validation Error</h2>
            <p>Missing or invalid contact information:</p>
            <ul>
              ${validationResult.error.errors.map(err => `<li>${err.path.join('.')}: ${err.message}</li>`).join('')}
            </ul>
            <p><strong>Required:</strong> firstName, email</p>
          </div>
        </body>
        </html>
        `,
        { 
          status: 400,
          headers: { 'Content-Type': 'text/html' }
        }
      )
    }

    const formData = validationResult.data

    // Parse services string into an array if provided
    const servicesArray = formData.services ? formData.services.split(',').map(s => s.trim()) : []

    // Prepare data for ERPNext, converting nullish values to undefined for cleaner API calls
    const crmData = {
      firstName: formData.firstName,
      lastName: formData.lastName || undefined,
      email: formData.email,
      phone: formData.phone || undefined,
      company: formData.company || undefined,
      website: formData.website || undefined,
      services: servicesArray,
      budget: formData.budget || '',
      comments: formData.comments || undefined,
      source: formData.source || 'Email Link',
    }

    console.log('Calling createLeadOnly with data:', JSON.stringify(crmData, null, 2))

    // Call ERPNext client to create or update the lead (only lead, as contact is assumed to exist from auto-creation)
    const result = await erpnextClient.createLeadOnly(crmData)

    // Return success page with lead details and ERPNext link
    return new NextResponse(
      `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Contact Added to CRM</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
            max-width: 600px; 
            margin: 50px auto; 
            padding: 20px;
            background: #f8fafc;
          }
          .container {
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }
          .success { 
            background: #f0fdf4; 
            border: 1px solid #22c55e; 
            padding: 20px; 
            border-radius: 8px; 
            margin-bottom: 20px;
          }
          .info { 
            background: #f0f9ff; 
            border: 1px solid #3b82f6; 
            padding: 15px; 
            border-radius: 8px; 
            margin: 10px 0;
            font-size: 14px;
          }
          .warning {
            background: #fffbeb;
            border: 1px solid #f59e0b;
            padding: 15px;
            border-radius: 8px;
            margin: 10px 0;
            font-size: 14px;
          }
          .contact-details {
            background: #f8fafc;
            padding: 15px;
            border-radius: 8px;
            margin: 15px 0;
          }
          .detail-row {
            display: flex;
            justify-content: space-between;
            padding: 5px 0;
            border-bottom: 1px solid #e2e8f0;
          }
          .detail-row:last-child {
            border-bottom: none;
          }
          .label { font-weight: 600; color: #475569; }
          .value { color: #1e293b; }
          .actions {
            margin-top: 25px;
            text-align: center;
          }
          .btn {
            display: inline-block;
            padding: 10px 20px;
            margin: 5px;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 500;
            transition: all 0.2s;
          }
          .btn-primary {
            background: #3b82f6;
            color: white;
          }
          .btn-primary:hover {
            background: #2563eb;
          }
          .btn-secondary {
            background: #e2e8f0;
            color: #475569;
          }
          .btn-secondary:hover {
            background: #cbd5e1;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="success">
            <h2>&#x2713; Success!</h2>
            <p><strong>${formData.firstName}${formData.lastName ? ` ${formData.lastName}` : ''}</strong> has been successfully added as a lead in your CRM system.</p>
            <p><em>Note: ERPNext automatically creates a contact record when a lead is created.</em></p>
          </div>

          <div class="contact-details">
            <h3>Lead Details Added:</h3>
            <div class="detail-row">
              <span class="label">Name:</span>
              <span class="value">${formData.firstName}${formData.lastName ? ` ${formData.lastName}` : ''}</span>
            </div>
            <div class="detail-row">
              <span class="label">Email:</span>
              <span class="value">${formData.email}</span>
            </div>
            ${formData.phone ? `
            <div class="detail-row">
              <span class="label">Phone:</span>
              <span class="value">${formData.phone}</span>
            </div>
            ` : ''}
            ${formData.company ? `
            <div class="detail-row">
              <span class="label">Company:</span>
              <span class="value">${formData.company}</span>
            </div>
            ` : ''}
            ${formData.website ? `
            <div class="detail-row">
              <span class="label">Website:</span>
              <span class="value">${formData.website}</span>
            </div>
            ` : ''}
            ${servicesArray.length > 0 ? `
            <div class="detail-row">
              <span class="label">Services:</span>
              <span class="value">${servicesArray.join(', ')}</span>
            </div>
            ` : ''}
            ${formData.budget ? `
            <div class="detail-row">
              <span class="label">Budget:</span>
              <span class="value">${formData.budget}</span>
            </div>
            ` : ''}
          </div>

          ${result.created ? 
            '<div class="info"><strong>Lead Created:</strong> New lead record created in ERPNext</div>' :
            '<div class="warning"><strong>Lead Exists:</strong> Lead already exists in ERPNext</div>'
          }

          <div class="actions">
            <a href="https://insitetechsolutions.frappe.cloud/app/crm" class="btn btn-primary" target="_blank">
              Open ERPNext
            </a>
            <a href="mailto:${formData.email}" class="btn btn-secondary">
              Email Contact
            </a>
            ${formData.phone ? `
            <a href="tel:${formData.phone}" class="btn btn-secondary">
              Call Contact
            </a>
            ` : ''}
          </div>

          <p style="text-align: center; color: #64748b; font-size: 12px; margin-top: 30px;">
            This contact was added automatically via the email notification system.
          </p>
        </div>
      </body>
      </html>
      `,
      { 
        status: 200,
        headers: { 'Content-Type': 'text/html' }
      }
    )

  } catch (error) {
    console.error('CRM addition error:', error)
    
    return new NextResponse(
      `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Error - Add to CRM</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; padding: 20px; }
          .error { background: #fee; border: 1px solid #fcc; padding: 20px; border-radius: 8px; }
        </style>
      </head>
      <body>
        <div class="error">
          <h2>❌ Error Adding Contact to CRM</h2>
          <p>An error occurred while adding the contact to your CRM system.</p>
          <p><strong>Error:</strong> ${error instanceof Error ? error.message : 'Unknown error'}</p>
          <p>Please try again or add the contact manually to your ERPNext system.</p>
        </div>
      </body>
      </html>
      `,
      { 
        status: 500,
        headers: { 'Content-Type': 'text/html' }
      }
    )
  }
}

/**
 * Handles POST requests to add a contact/lead to the CRM.
 * This endpoint is designed for programmatic API calls with a JSON request body.
 * It returns a JSON response indicating the success or failure of the operation.
 *
 * @param {NextRequest} request - The incoming Next.js request object containing the JSON body.
 * @returns {Promise<NextResponse>} A promise that resolves to a `NextResponse` object
 *                                  containing a JSON response for success or error.
 *                                  Returns:
 *                                  - `200 OK` with a success JSON response if the lead is added/updated.
 *                                  - `400 Bad Request` with a validation error JSON response.
 *                                  - `500 Internal Server Error` with an error JSON response for unexpected server errors.
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  // Handle POST requests with JSON body (for future API use)
  try {
    const body = await request.json()
    const validationResult = addContactSchema.safeParse(body)
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Validation failed',
          details: validationResult.error.errors
        },
        { status: 400 }
      )
    }

    const formData = validationResult.data
    const servicesArray = formData.services ? formData.services.split(',').map(s => s.trim()) : []

    const crmData = {
      firstName: formData.firstName,
      lastName: formData.lastName || undefined,
      email: formData.email,
      phone: formData.phone || undefined,
      company: formData.company || undefined,
      website: formData.website || undefined,
      services: servicesArray,
      budget: formData.budget || '',
      comments: formData.comments || undefined,
      source: formData.source || 'API',
    }

    const result = await erpnextClient.createLeadOnly(crmData)

    return NextResponse.json({
      success: true,
      message: 'Contact added to CRM successfully',
      result
    })

  } catch (error) {
    console.error('CRM addition error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to add contact to CRM' },
      { status: 500 }
    )
  }
} 