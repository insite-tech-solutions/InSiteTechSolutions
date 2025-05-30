"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

interface ApiResult {
  status?: number
  data?: unknown
  error?: string
}

export default function TestFormsPage() {
  const [contactResult, setContactResult] = useState<ApiResult | null>(null)
  const [newsletterResult, setNewsletterResult] = useState<ApiResult | null>(null)
  const [loading, setLoading] = useState<{ contact: boolean; newsletter: boolean }>({
    contact: false,
    newsletter: false
  })

  const testContactForm = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(prev => ({ ...prev, contact: true }))
    
    const formData = new FormData(e.target as HTMLFormElement)
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phoneNumber: formData.get('phone'),
      companyName: formData.get('company'),
      services: ['web-development'], // Default service for testing
      budget: '5000-10000',
      comments: formData.get('comments'),
      tosAgreement: true,
      turnstileToken: 'test-token' // You'll need real Turnstile for full test
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      const result = await response.json()
      setContactResult({ status: response.status, data: result })
    } catch (error) {
      setContactResult({ error: error instanceof Error ? error.message : 'Unknown error occurred' })
    } finally {
      setLoading(prev => ({ ...prev, contact: false }))
    }
  }

  const testNewsletter = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(prev => ({ ...prev, newsletter: true }))
    
    const formData = new FormData(e.target as HTMLFormElement)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      turnstileToken: 'test-token' // You'll need real Turnstile for full test
    }

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      const result = await response.json()
      setNewsletterResult({ status: response.status, data: result })
    } catch (error) {
      setNewsletterResult({ error: error instanceof Error ? error.message : 'Unknown error occurred' })
    } finally {
      setLoading(prev => ({ ...prev, newsletter: false }))
    }
  }

  return (
    <div className="container mx-auto p-8 space-y-8">
      <h1 className="text-3xl font-bold">Form Testing Page</h1>
      <p className="text-gray-600">Test your contact form and newsletter APIs locally</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form Test */}
        <Card>
          <CardHeader>
            <CardTitle>Test Contact Form API</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={testContactForm} className="space-y-4">
              <Input name="firstName" placeholder="First Name" required />
              <Input name="lastName" placeholder="Last Name" />
              <Input name="email" type="email" placeholder="Email" required />
              <Input name="phone" placeholder="Phone" />
              <Input name="company" placeholder="Company" />
              <Textarea name="comments" placeholder="Comments" />
              <Button type="submit" disabled={loading.contact}>
                {loading.contact ? 'Testing...' : 'Test Contact Form'}
              </Button>
            </form>
            
            {contactResult && (
              <div className="mt-4 p-4 bg-gray-100 rounded">
                <h4 className="font-semibold">Result:</h4>
                <pre className="text-sm overflow-auto">
                  {JSON.stringify(contactResult, null, 2)}
                </pre>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Newsletter Test */}
        <Card>
          <CardHeader>
            <CardTitle>Test Newsletter API</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={testNewsletter} className="space-y-4">
              <Input name="name" placeholder="Name" required />
              <Input name="email" type="email" placeholder="Email" required />
              <Button type="submit" disabled={loading.newsletter}>
                {loading.newsletter ? 'Testing...' : 'Test Newsletter'}
              </Button>
            </form>
            
            {newsletterResult && (
              <div className="mt-4 p-4 bg-gray-100 rounded">
                <h4 className="font-semibold">Result:</h4>
                <pre className="text-sm overflow-auto">
                  {JSON.stringify(newsletterResult, null, 2)}
                </pre>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Testing Notes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>• <strong>Turnstile:</strong> These tests use dummy tokens. For full testing, add real Turnstile widgets.</p>
          <p>• <strong>Emails:</strong> Check your email (and spam folder) for confirmation/notification emails.</p>
          <p>• <strong>Database:</strong> Check your Supabase dashboard to see if data is being saved.</p>
          <p>• <strong>Rate Limiting:</strong> Try submitting the same form multiple times quickly.</p>
          <p>• <strong>Server Logs:</strong> Check your terminal running `npm run dev` for detailed error logs.</p>
        </CardContent>
      </Card>
    </div>
  )
} 