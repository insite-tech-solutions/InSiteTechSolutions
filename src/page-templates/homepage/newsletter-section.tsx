"use client"

import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import Image from "next/image"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
})

type FormValues = z.infer<typeof formSchema>

export default function NewsletterSubscription() {
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

      setIsSuccess(true)
      form.reset()
    } catch (error) {
      console.error("Subscription error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          {/* Left column - Company info */}
          <div className="w-full md:w-1/2 space-y-6 flex flex-col">
            <div className="w-full flex justify-start">
              <Image
                src="/Insite Tech Solutions Light.svg"
                alt="InSite Tech Solutions Logo"
                width={600}
                height={120}
                className="w-full h-auto max-w-[400px] md:max-w-[90%]"
                priority
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl text-medium-blue font-bold leading-tight">
                Become an InSite Tech InSider for the Latest Tech Tips & Exclusive Promotions
              </h3>
              <p className="text-gray-700">
                Enjoy all the best tech tips, tricks and trends so you can stay in the know and keep your business
                moving forward, the way that it deserves. Subscribe today and get our latest pieces of tech expertise
                and online strategy straight to your email inbox. Enjoy!
              </p>
            </div>
          </div>

          {/* Right column - Subscription form */}
          <div className="w-full md:w-1/2">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
              <h3 className="text-xl text-gray-700 font-semibold mb-6">Subscribe to our newsletter to keep growing!</h3>

              {isSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-md">
                  Thank you for subscribing! Check your email for confirmation.
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
                      className="w-full md:w-auto bg-medium-blue hover:bg-blue-800 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Subscribing..." : "Subscribe"}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
