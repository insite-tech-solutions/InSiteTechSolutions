/**
 * @fileoverview ERPNext API Client for Contact and Lead Management
 *
 * This file provides a robust client for interacting with the ERPNext API,
 * specifically designed for managing contacts and leads. It encapsulates
 * the API authentication, request handling, and provides high-level methods
 * for common CRM operations such as creating contacts and leads from various
 * data sources like contact forms.
 *
 * Architecture:
 * - `ERPNextClient` class manages API configuration and request execution.
 * - Type definitions (`ERPNextConfig`, `ERPNextContact`, `ERPNextLead`) ensure strong typing for API payloads.
 * - Methods handle API requests, including checking for existing records to prevent duplicates.
 * - Asynchronous operations (`async/await`) for non-blocking API calls.
 *
 * Features:
 * - Secure authentication using API Key and Secret.
 * - Centralized error handling for API responses.
 * - Methods to create individual contacts and leads.
 * - Integrated logic to check for existing contacts/leads before creation.
 * - Specialized methods (`createContactFromForm`, `createContactOnly`, `createLeadOnly`)
 *   to streamline data mapping from frontend forms and other sources to ERPNext fields.
 * - Utilizes `Promise.allSettled` for concurrent contact and lead creation, providing robust error reporting for each operation.
 *
 * Technical Implementation:
 * - Uses `fetch` API for HTTP requests.
 * - Environment variables are used for sensitive API credentials.
 * - Type guards and optional chaining for safer data manipulation.
 */

/**
 * Configuration interface for the ERPNext API client.
 */
interface ERPNextConfig {
  /** The base URL of the ERPNext instance. */
  url: string
  /** The API Key for authentication. */
  apiKey: string
  /** The API Secret for authentication. */
  apiSecret: string
}

/**
 * Interface representing an ERPNext Contact document.
 * Fields map directly to ERPNext's Contact doctype.
 */
interface ERPNextContact {
  /** The first name of the contact. */
  first_name: string
  /** The last name of the contact (optional). */
  last_name?: string
  /** The primary email ID of the contact (optional, but recommended). */
  email_id?: string
  /** An array of email IDs associated with the contact, including a primary flag. */
  email_ids?: Array<{
    email_id: string
    is_primary: number
  }>
  /** An array of phone numbers associated with the contact, including a primary flag. */
  phone_nos?: Array<{
    phone: string
    is_primary_phone: number
  }>
  /** The mobile number of the contact (optional). */
  mobile_no?: string
  /** The phone number of the contact (optional). */
  phone?: string
  /** The company name associated with the contact (optional). */
  company_name?: string
  /** The website of the contact's company (optional). */
  website?: string
  /** The source from which the contact was acquired (optional). */
  source?: string
  /** The customer group the contact belongs to (optional). */
  customer_group?: string
  /** The territory the contact belongs to (optional). */
  territory?: string
}

/**
 * Interface representing an ERPNext Lead document.
 * Fields map directly to ERPNext's Lead doctype, including custom fields.
 */
interface ERPNextLead {
  /** The name of the lead, typically a combination of first and last name. */
  lead_name: string
  /** The first name of the lead. */
  first_name: string
  /** The last name of the lead (optional). */
  last_name?: string
  /** The email ID of the lead. */
  email_id: string
  /** The mobile number of the lead (optional). */
  mobile_no?: string
  /** The phone number of the lead (optional). */
  phone?: string
  /** The company name associated with the lead (optional). */
  company_name?: string
  /** The website of the lead's company (optional). */
  website?: string
  /** The source from which the lead was acquired (optional). */
  source?: string
  /** The current status of the lead (e.g., 'Lead', 'Opportunity', 'Converted'). */
  status: string
  /** The lead owner (optional). */
  lead_owner?: string
  /** The territory the lead belongs to (optional). */
  territory?: string
  /** The industry of the lead's company (optional). */
  industry?: string
  /** The qualification status of the lead (optional). */
  qualification_status?: string
  /** Custom field for services requested by the lead (optional). */
  custom_services_requested?: string
  /** Custom field for the budget range specified by the lead (optional). */
  custom_budget_range?: string
  /** Custom field for additional notes or comments about the lead (optional). */
  custom_additional_notes?: string
}

export type { ERPNextContact, ERPNextLead }

/**
 * Mapping of form service IDs to user-friendly labels.
 * Used to convert internal service identifiers into human-readable strings for ERPNext.
 */
const SERVICE_LABELS: Record<string, string> = {
  'web-app-development': 'Web & App Development',
  'custom-software-solutions': 'Custom Software Solutions',
  'seo-online-marketing': 'SEO & Online Marketing',
  'graphic-design-branding': 'Graphic Design & Branding',
  'data-analysis': 'Data Analysis',
  'ai-automation': 'AI & Automation',
  'consulting-training': 'Consulting & Training',
  'other': 'Other',
};

/**
 * `ERPNextClient`
 *
 * A client class for interacting with the ERPNext API to manage CRM entities like Contacts and Leads.
 * It abstracts the underlying HTTP requests and authentication, providing a clean interface
 * for creating and managing records in ERPNext.
 */
class ERPNextClient {
  private config: ERPNextConfig

  /**
   * Creates an instance of `ERPNextClient`.
   * Initializes the client with API credentials from environment variables.
   * @throws {Error} If ERPNext configuration (URL, API Key, or API Secret) is incomplete.
   */
  constructor() {
    this.config = {
      url: process.env.ERPNEXT_URL || '',
      apiKey: process.env.ERPNEXT_API_KEY || '',
      apiSecret: process.env.ERPNEXT_API_SECRET || '',
    }

    if (!this.config.url || !this.config.apiKey || !this.config.apiSecret) {
      throw new Error('ERPNext configuration is incomplete. Please check environment variables.')
    }
  }

  /**
   * Makes a generic request to the ERPNext API.
   * This is a private helper method used by other public methods within the class.
   *
   * @param {string} endpoint - The ERPNext resource endpoint (e.g., 'Contact', 'Lead').
   * @param {'GET' | 'POST' | 'PUT'} [method='GET'] - The HTTP method to use for the request.
   * @param {unknown} [data] - The data payload for POST or PUT requests.
   * @returns {Promise<any>} A promise that resolves with the JSON response from the ERPNext API.
   * @throws {Error} If the API request fails or returns a non-ok status.
   */
  private async makeRequest(endpoint: string, method: 'GET' | 'POST' | 'PUT' = 'GET', data?: unknown) {
    const url = `${this.config.url}/api/resource/${endpoint}`
    
    const headers: Record<string, string> = {
      'Authorization': `token ${this.config.apiKey}:${this.config.apiSecret}`,
      'Content-Type': 'application/json',
    }

    const options: RequestInit = {
      method,
      headers,
    }

    if (data && (method === 'POST' || method === 'PUT')) {
      options.body = JSON.stringify(data)
    }

    try {
      const response = await fetch(url, options)
      
      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`ERPNext API error: ${response.status} ${response.statusText} - ${errorText}`)
      }

      return await response.json()
    } catch (error) {
      console.error('ERPNext API request failed:', error)
      throw error
    }
  }

  /**
   * Creates a new contact in ERPNext or returns details of an existing contact if an email match is found.
   *
   * @param {ERPNextContact} contactData - The data for the contact to be created.
   * @returns {Promise<{success: boolean; message: string; contactId: string; created: boolean}>} A promise that resolves with the result of the operation, including whether a new contact was created or an existing one found.
   * @throws {Error} If the contact creation or lookup fails.
   */
  async createContact(contactData: ERPNextContact) {
    try {
      // Check if contact already exists by email_id
      const existingContacts = await this.makeRequest(`Contact?filters=[["email_id","=","${contactData.email_id}"]]`)
      
      if (existingContacts.data && existingContacts.data.length > 0) {
        return {
          success: true,
          message: 'Contact already exists',
          contactId: existingContacts.data[0].name,
          created: false
        }
      }

      // Create new contact if not found
      const response = await this.makeRequest('Contact', 'POST', contactData)
      
      return {
        success: true,
        message: 'Contact created successfully',
        contactId: response.data.name,
        created: true
      }
    } catch (error) {
      console.error('Failed to create contact:', error)
      throw error
    }
  }

  /**
   * Creates a new lead in ERPNext or returns details of an existing lead if an email match is found.
   *
   * @param {ERPNextLead} leadData - The data for the lead to be created.
   * @returns {Promise<{success: boolean; message: string; leadId: string; created: boolean}>} A promise that resolves with the result of the operation, including whether a new lead was created or an existing one found.
   * @throws {Error} If the lead creation or lookup fails.
   */
  async createLead(leadData: ERPNextLead) {
    try {
      // Check if lead already exists by email_id
      const existingLeads = await this.makeRequest(`Lead?filters=[["email_id","=","${leadData.email_id}"]]`)
      
      if (existingLeads.data && existingLeads.data.length > 0) {
        return {
          success: true,
          message: 'Lead already exists',
          leadId: existingLeads.data[0].name,
          created: false
        }
      }

      // Create new lead if not found
      const response = await this.makeRequest('Lead', 'POST', leadData)
      
      return {
        success: true,
        message: 'Lead created successfully',
        leadId: response.data.name,
        created: true
      }
    } catch (error) {
      console.error('Failed to create lead:', error)
      throw error
    }
  }

  /**
   * Creates both a contact and a lead in ERPNext based on form data.
   * This method attempts to create both entities concurrently and reports the outcome of each.
   *
   * @param {object} formData - The data submitted from a contact form.
   * @param {string} formData.firstName - The first name from the form.
   * @param {string} [formData.lastName] - The last name from the form (optional).
   * @param {string} formData.email - The email address from the form.
   * @param {string} [formData.phone] - The phone number from the form (optional).
   * @param {string} [formData.company] - The company name from the form (optional).
   * @param {string} [formData.website] - The website from the form (optional).
   * @param {string[]} formData.services - An array of services selected from the form.
   * @param {string} formData.budget - The budget range selected from the form.
   * @param {string} [formData.comments] - Additional comments from the form (optional).
   * @param {string} [formData.source] - The source of the form submission (optional, defaults to 'Website Contact Form').
   * @returns {Promise<{success: boolean; contact: any; lead: any}>} A promise that resolves with an object containing the success status and the results for both contact and lead creation.
   * @throws {Error} If the overall operation fails.
   */
  async createContactFromForm(formData: {
    firstName: string
    lastName?: string
    email: string
    phone?: string
    company?: string
    website?: string
    services: string[]
    budget: string
    comments?: string
    source?: string
  }) {
    const servicesText = formData.services.map(service => SERVICE_LABELS[service] || service).join(', ')

    // Create contact data with improved field mapping
    const contactData: ERPNextContact = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email_id: formData.email,
      email_ids: [
        {
          email_id: formData.email,
          is_primary: 1
        }
      ],
      mobile_no: formData.phone || undefined,
      phone: formData.phone || undefined,
      ...(formData.phone && {
        phone_nos: [
          {
            phone: formData.phone,
            is_primary_phone: 1
          }
        ]
      }),
      company_name: formData.company || undefined,
      website: formData.website || undefined,
      source: formData.source || 'Website Contact Form',
    }

    // Create lead data with all required fields
    const leadData: ERPNextLead = {
      lead_name: `${formData.firstName}${formData.lastName ? ` ${formData.lastName}` : ''}`,
      first_name: formData.firstName,
      last_name: formData.lastName,
      email_id: formData.email,
      mobile_no: formData.phone,
      company_name: formData.company,
      website: formData.website,
      source: formData.source || 'Website Contact Form',
      status: 'Lead',
      custom_services_requested: servicesText,
      custom_budget_range: formData.budget,
      custom_additional_notes: formData.comments,
    }

    try {
      const [contactResult, leadResult] = await Promise.allSettled([
        this.createContact(contactData),
        this.createLead(leadData)
      ])

      return {
        success: true,
        contact: contactResult.status === 'fulfilled' ? contactResult.value : { success: false, error: contactResult.reason },
        lead: leadResult.status === 'fulfilled' ? leadResult.value : { success: false, error: leadResult.reason }
      }
    } catch (error) {
      console.error('Failed to create contact/lead:', error)
      throw error
    }
  }

  /**
   * Creates only a contact in ERPNext based on provided form data.
   * This method is intended for scenarios where only contact information needs to be captured,
   * such as newsletter sign-ups or simple inquiries.
   *
   * @param {object} formData - The data for creating the contact.
   * @param {string} formData.firstName - The first name of the contact.
   * @param {string} [formData.lastName] - The last name of the contact (optional).
   * @param {string} formData.email - The email address of the contact.
   * @param {string} [formData.phone] - The phone number of the contact (optional).
   * @param {string} [formData.company] - The company name of the contact (optional).
   * @param {string} [formData.website] - The website of the contact's company (optional).
   * @param {string} [formData.source] - The source of the contact (optional).
   * @returns {Promise<{success: boolean; message: string; contactId: string; created: boolean}>} A promise that resolves with the result of the contact creation operation.
   * @throws {Error} If the contact creation fails.
   */
  async createContactOnly(formData: {
    firstName: string
    lastName?: string
    email: string
    phone?: string
    company?: string
    website?: string
    source?: string
  }) {
    const contactData: ERPNextContact = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email_id: formData.email,
      email_ids: [
        {
          email_id: formData.email,
          is_primary: 1
        }
      ],
      mobile_no: formData.phone || undefined,
      phone: formData.phone || undefined,
      ...(formData.phone && {
        phone_nos: [
          {
            phone: formData.phone,
            is_primary_phone: 1
          }
        ]
      }),
      company_name: formData.company || undefined,
      website: formData.website || undefined,
      // Remove source for now to avoid validation errors
      // source: formData.source || 'Website Contact Form',
    }

    // Clean up undefined values to avoid sending empty strings
    Object.keys(contactData).forEach(key => {
      if (contactData[key as keyof ERPNextContact] === undefined || contactData[key as keyof ERPNextContact] === '') {
        delete contactData[key as keyof ERPNextContact]
      }
    })

    try {
      return await this.createContact(contactData)
    } catch (error) {
      console.error('Failed to create contact:', error)
      throw error
    }
  }

  /**
   * Creates only a lead in ERPNext based on provided form data.
   * This method is suitable for situations where detailed lead information is available
   * but a full contact record is not immediately necessary or managed separately.
   *
   * @param {object} formData - The data for creating the lead.
   * @param {string} formData.firstName - The first name of the lead.
   * @param {string} [formData.lastName] - The last name of the lead (optional).
   * @param {string} formData.email - The email address of the lead.
   * @param {string} [formData.phone] - The phone number of the lead (optional).
   * @param {string} [formData.company] - The company name of the lead (optional).
   * @param {string} [formData.website] - The website of the lead's company (optional).
   * @param {string[]} formData.services - An array of services requested by the lead.
   * @param {string} formData.budget - The budget range specified by the lead.
   * @param {string} [formData.comments] - Additional comments about the lead (optional).
   * @param {string} [formData.source] - The source of the lead (optional).
   * @returns {Promise<{success: boolean; message: string; leadId: string; created: boolean}>} A promise that resolves with the result of the lead creation operation.
   * @throws {Error} If the lead creation fails.
   */
  async createLeadOnly(formData: {
    firstName: string
    lastName?: string
    email: string
    phone?: string
    company?: string
    website?: string
    services: string[]
    budget: string
    comments?: string
    source?: string
  }) {
    const servicesText = formData.services.map(service => SERVICE_LABELS[service] || service).join(', ')

    const leadData: ERPNextLead = {
      lead_name: `${formData.firstName}${formData.lastName ? ` ${formData.lastName}` : ''}`,
      first_name: formData.firstName,
      last_name: formData.lastName,
      email_id: formData.email,
      mobile_no: formData.phone,
      company_name: formData.company,
      website: formData.website,
      // Remove source field that's causing validation errors
      // source: formData.source || 'Website Contact Form',
      status: 'Lead',
      custom_services_requested: servicesText,
      custom_budget_range: formData.budget,
      custom_additional_notes: formData.comments,
    }

    try {
      return await this.createLead(leadData)
    } catch (error) {
      console.error('Failed to create lead:', error)
      throw error
    }
  }
}

/**
 * Singleton instance of the `ERPNextClient` for application-wide use.
 * This ensures that a single client manages all interactions with the ERPNext API,
 * maintaining consistent configuration and connection management.
 */
export const erpnextClient = new ERPNextClient()