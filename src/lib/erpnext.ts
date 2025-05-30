interface ERPNextConfig {
  url: string
  apiKey: string
  apiSecret: string
}

interface ERPNextContact {
  first_name: string
  last_name?: string
  email_id?: string
  email_ids?: Array<{
    email_id: string
    is_primary: number
  }>
  phone_nos?: Array<{
    phone: string
    is_primary_phone: number
  }>
  mobile_no?: string
  phone?: string
  company_name?: string
  website?: string
  source?: string
  customer_group?: string
  territory?: string
}

interface ERPNextLead {
  lead_name: string
  first_name: string
  last_name?: string
  email_id: string
  mobile_no?: string
  phone?: string
  company_name?: string
  website?: string
  source?: string
  status: string
  lead_owner?: string
  territory?: string
  industry?: string
  qualification_status?: string
  custom_services_requested?: string
  custom_budget_range?: string
  custom_additional_notes?: string
}

class ERPNextClient {
  private config: ERPNextConfig

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

  private async makeRequest(endpoint: string, method: 'GET' | 'POST' | 'PUT' = 'GET', data?: any) {
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

  async createContact(contactData: ERPNextContact) {
    try {
      console.log('Creating contact with data:', JSON.stringify(contactData, null, 2))
      
      // Check if contact already exists
      const existingContacts = await this.makeRequest(`Contact?filters=[["email_id","=","${contactData.email_id}"]]`)
      
      if (existingContacts.data && existingContacts.data.length > 0) {
        console.log('Contact already exists:', existingContacts.data[0])
        return {
          success: true,
          message: 'Contact already exists',
          contactId: existingContacts.data[0].name,
          created: false
        }
      }

      // Create new contact
      const response = await this.makeRequest('Contact', 'POST', contactData)
      console.log('Contact created successfully:', response)
      
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

  async createLead(leadData: ERPNextLead) {
    try {
      console.log('Creating lead with data:', JSON.stringify(leadData, null, 2))
      
      // Check if lead already exists
      const existingLeads = await this.makeRequest(`Lead?filters=[["email_id","=","${leadData.email_id}"]]`)
      
      if (existingLeads.data && existingLeads.data.length > 0) {
        console.log('Lead already exists:', existingLeads.data[0])
        console.log(`🔍 LEAD FOUND: Check ERPNext Lead ID: ${existingLeads.data[0].name}`)
        console.log(`🔗 Direct link: ${this.config.url}/app/lead/${existingLeads.data[0].name}`)
        return {
          success: true,
          message: 'Lead already exists',
          leadId: existingLeads.data[0].name,
          created: false
        }
      }

      // Create new lead
      const response = await this.makeRequest('Lead', 'POST', leadData)
      console.log('Lead created successfully:', response)
      console.log(`🎯 NEW LEAD CREATED: Check ERPNext Lead ID: ${response.data.name}`)
      console.log(`🔗 Direct link: ${this.config.url}/app/lead/${response.data.name}`)
      
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
    // Service mapping from form IDs to readable labels
    const serviceLabels: Record<string, string> = {
      'web-app-development': 'Web & App Development',
      'custom-software-solutions': 'Custom Software Solutions',
      'seo-online-marketing': 'SEO & Online Marketing',
      'graphic-design-branding': 'Graphic Design & Branding',
      'data-analysis': 'Data Analysis',
      'ai-automation': 'AI & Automation',
      'consulting-training': 'Consulting & Training',
      'other': 'Other',
    }

    const servicesText = formData.services.map(service => serviceLabels[service] || service).join(', ')

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

  // New method to create only contacts (for auto-add functionality)
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

    console.log('Final contact data being sent to ERPNext:', JSON.stringify(contactData, null, 2))

    try {
      return await this.createContact(contactData)
    } catch (error) {
      console.error('Failed to create contact:', error)
      throw error
    }
  }

  // New method to create only leads (for manual add from email)
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
    const serviceLabels: Record<string, string> = {
      'web-app-development': 'Web & App Development',
      'custom-software-solutions': 'Custom Software Solutions',
      'seo-online-marketing': 'SEO & Online Marketing',
      'graphic-design-branding': 'Graphic Design & Branding',
      'data-analysis': 'Data Analysis',
      'ai-automation': 'AI & Automation',
      'consulting-training': 'Consulting & Training',
      'other': 'Other',
    }

    const servicesText = formData.services.map(service => serviceLabels[service] || service).join(', ')

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

export const erpnextClient = new ERPNextClient()

export type { ERPNextContact, ERPNextLead } 