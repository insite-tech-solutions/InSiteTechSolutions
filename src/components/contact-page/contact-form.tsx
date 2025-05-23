"use client"

import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

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

  async function onSubmit(/* data: FormValues */) {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSuccess(true)
      form.reset()
    } catch (error) {
      // Optionally handle error
      setIsSuccess(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-white border-0 shadow-xl">
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
        <CardDescription>Fill out the form below and we&apos;ll get back to you within 24 hours.</CardDescription>
      </CardHeader>
      <CardContent>
        {isSuccess ? (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
            <p className="mb-6">We&apos;ve received your request and will be in touch shortly.</p>
            <Button onClick={() => setIsSuccess(false)} variant="outline">
              Submit Another Request
            </Button>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Name fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
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
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Contact fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john.doe@example.com" type="email" {...field} />
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
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="(123) 456-7890" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Company fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="websiteUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://example.com" {...field} />
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
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Acme Inc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Services section */}
              <div>
                <FormLabel>What can we do for you?</FormLabel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                  {services.map((service) => (
                    <FormField
                      key={service.id}
                      control={form.control}
                      name="services"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-2">
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
                          <FormLabel className="font-normal cursor-pointer">{service.label}</FormLabel>
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
                    <FormLabel>Additional Information</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us more about your project..."
                        className="min-h-[120px]"
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
                    <FormLabel>What is your estimated budget?</FormLabel>
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
                            <FormLabel className="font-normal cursor-pointer">{option.label}</FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit button */}
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </Form>
        )}
      </CardContent>
    </Card>
  )
}
