"use client"

import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import Turnstile from "@/components/ui/turnstile"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
})

type FormValues = z.infer<typeof formSchema>

interface NewsletterFormProps {
  title?: string
  className?: string
}

export default function NewsletterForm({ 
  title = "Subscribe to our newsletter to stay updated!",
  className = ""
}: NewsletterFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  })

  // Handle form submission
  async function onSubmit(data: FormValues) {
    if (!turnstileToken) {
      setSubmitError("Please complete the security verification")
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          turnstileToken,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to subscribe')
      }

      setIsSuccess(true)
      form.reset()
      setTurnstileToken(null)
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`bg-white p-6 md:p-8 rounded-xl shadow-md ${className}`}>
      <h3 className="text-xl text-gray-700 font-semibold mb-6">{title}</h3>

      {isSuccess ? (
        <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md">
          <p className="font-medium">Thank you for subscribing!</p>
          <p className="text-sm mt-1">Please check your email for a confirmation link to complete your subscription.</p>
          <Button 
            onClick={() => setIsSuccess(false)} 
            variant="outline" 
            size="sm" 
            className="mt-3"
          >
            Subscribe Another Email
          </Button>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {submitError && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md">
                <p className="text-sm">{submitError}</p>
              </div>
            )}

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-800 after:content-['*'] after:text-red-500 after:ml-0.5">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" type="text" {...field} className="text-gray-800 placeholder:text-gray-400" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-800 after:content-['*'] after:text-red-500 after:ml-0.5">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your.email@example.com" type="email" {...field} className="text-gray-800 placeholder:text-gray-400" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Turnstile verification */}
            <div className="flex justify-left">
              <Turnstile
                onVerify={(token) => {
                  setTurnstileToken(token)
                  setSubmitError(null)
                }}
                onError={() => {
                  setTurnstileToken(null)
                  setSubmitError("Security verification failed. Please try again.")
                }}
                onExpire={() => {
                  setTurnstileToken(null)
                  setSubmitError("Security verification expired. Please try again.")
                }}
                size="normal"
                theme="light"
              />
            </div>

            <Button
              type="submit"
              className="w-full md:w-auto bg-medium-blue hover:bg-dark-blue-alt text-white"
              disabled={isSubmitting || !turnstileToken}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>

            {/* Minimal Privacy Notice */}
            <p className="text-xs text-gray-500 mt-3">
              By subscribing, you agree to receive marketing emails from InSite Tech Solutions. 
              You can unsubscribe at any time. See our{" "}
              <a href="/privacy-policy" className="text-medium-blue hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </Form>
      )}
    </div>
  )
} 