"use client"

import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import TailwindButton from "@/components/reusable-components/tailwind-button"
import Link from "next/link"

// Form validation schema
const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phoneNumber: z.string().min(10, { message: "Please enter a valid phone number" }),
  websiteUrl: z.string().optional(),
  companyName: z.string().optional(),
  services: z.array(z.string()).optional(),
  comments: z.string().optional(),
  budget: z.string().min(1, { message: "Please select an estimated budget" }),
})

type FormValues = z.infer<typeof formSchema>

const services = [
  { id: "web-app-development", label: "Web & App Development" },
  { id: "custom-software-solutions", label: "Custom Software Solutions" },
  { id: "seo-online-marketing", label: "SEO & Online Marketing" },
  { id: "graphic-design-branding", label: "Graphic Design & Branding" },
  { id: "data-analysis", label: "Data Analysis" },
  { id: "ai-automation", label: "AI & Automation" },
  { id: "consulting-training", label: "Consulting & Training" },
  { id: "other", label: "Other" },
]

const budgetOptions = [
  { value: "$0 - $1,000", label: "$0 - $1,000" },
  { value: "$1,000 - $5,000", label: "$1,000 - $5,000" },
  { value: "$5,000 - $15,000", label: "$5,000 - $15,000" },
  { value: "$15,000 - $30,000", label: "$15,000 - $30,000" },
  { value: "$30,000+", label: "$30,000+" },
]

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      websiteUrl: "",
      companyName: "",
      services: [],
      comments: "",
      budget: "",
    },
  })

  // Handle form submission
  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)

    try {
      // Replace with your actual API endpoint
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsSuccess(true)
      form.reset()
    } catch (error) {
      console.error("Submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative pt-6 pb-12">
      <div className="bg-gradient-to-br from-light-blue via-blue-800 to-mild-blue-alt rounded-2xl px-2 py-8 md:px-6 md:py-12 max-w-5xl mx-auto shadow-lg">
        <div className="container mx-auto px-0">
          <div className="text-center text-white mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Ideas Into Digital Solutions</h2>
            <p className="text-xl">(123) 456-7890 | hello@yourcompany.com</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <TailwindButton 
                href="/contact" 
                className="bg-white rounded-full font-medium shadow-md transition-all duration-200"
              >
                Schedule Free Consultation
              </TailwindButton>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-white font-medium py-3 px-6 rounded-full border border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>

          <div className="bg-white bg-opacity-15 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg md:p-8 max-w-4xl mx-auto">
            {isSuccess ? (
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
                <p className="text-gray-600 mb-6">We&apos;ve received your request and will be in touch shortly.</p>
                <Button onClick={() => setIsSuccess(false)} className="bg-red-600 hover:bg-red-700">
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Name fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white after:content-['*'] after:text-red-500 after:ml-0.5">
                            First Name
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="John" className="font-semibold bg-white/10 placeholder:text-gray-200/60" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white after:content-['*'] after:text-red-500 after:ml-0.5">Last name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" className="font-semibold bg-white/10 placeholder:text-gray-200/60" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Contact fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white after:content-['*'] after:text-red-500 after:ml-0.5">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john.doe@example.com" type="email" className="font-semibold bg-white/10 placeholder:text-gray-200/60" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white after:content-['*'] after:text-red-500 after:ml-0.5">
                            Phone number
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="(123) 456-7890" className="font-semibold bg-white/10 placeholder:text-gray-200/60" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Company fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="websiteUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Website URL</FormLabel>
                          <FormControl>
                            <Input placeholder="https://example.com" className="font-semibold bg-white/10 placeholder:text-gray-200/60" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Company name</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Inc." className="font-semibold bg-white/10 placeholder:text-gray-200/60" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Services section */}
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-white">What can we do for you?</h3>
                    <p className="text-sm text-gray-200 mb-4">Check all that apply</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {services.map((service) => (
                        <FormField
                          key={service.id}
                          control={form.control}
                          name="services"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(service.id)}
                                  onCheckedChange={(checked) => {
                                    const currentValues = field.value || []
                                    if (checked) {
                                      field.onChange([...currentValues, service.id])
                                    } else {
                                      field.onChange(currentValues.filter((value) => value !== service.id))
                                    }
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer text-white">{service.label}</FormLabel>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Comments */}
                  <FormField
                    control={form.control}
                    name="comments"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Additional information</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us more about your project..."
                            className="min-h-[120px] font-semibold bg-white/10 placeholder:text-gray-200/60"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Budget */}
                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-white">What is your estimated budget?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-2"
                          >
                            {budgetOptions.map((option) => (
                              <FormItem key={option.value} className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value={option.value} />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer text-white">{option.label}</FormLabel>
                              </FormItem>
                            ))}
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit button */}
                  <Button type="submit" className="bg-white border border-white hover:bg-white/20 hover:text-white text-medium-blue" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
