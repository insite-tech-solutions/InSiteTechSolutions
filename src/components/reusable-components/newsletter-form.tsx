"use client"

import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

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
    setIsSubmitting(true)

    try {
      // Replace with your actual API endpoint
      // await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      console.log("Newsletter subscription data:", data)
      setIsSuccess(true)
      form.reset()
    } catch (error) {
      console.error("Subscription error:", error)
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
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-800 after:content-['*'] after:text-red-500 after:ml-0.5">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} className="text-gray-800 placeholder:text-gray-400" />
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

            <Button
              type="submit"
              className="w-full md:w-auto bg-medium-blue hover:bg-dark-blue-alt text-white"
              disabled={isSubmitting}
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