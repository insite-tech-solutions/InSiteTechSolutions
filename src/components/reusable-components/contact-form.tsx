/**
 * @fileoverview Reusable Contact Form Component
 *
 * A comprehensive contact form component built with React Hook Form, Zod validation, and Cloudflare Turnstile security.
 * This component provides a flexible interface for collecting user inquiries with multiple service options, budget selection,
 * and optional mailing list subscription. It supports two visual variants (white and frosted) and includes robust
 * form validation, error handling, and success state management.
 */

"use client"

import { useState, useRef, useEffect } from "react"
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
import Turnstile from "@/components/ui/turnstile"
import clsx from "clsx"

/**
 * Zod schema for form validation.
 * Defines the structure and validation rules for all form fields.
 */
const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phoneNumber: z.string().optional(),
  websiteUrl: z.string().optional(),
  companyName: z.string().optional(),
  services: z.array(z.string()).min(1, { message: "Please select at least one service" }),
  comments: z.string().optional(),
  budget: z.string().min(1, { message: "Please select an estimated budget" }),
  mailingList: z.boolean().optional(),
  tosAgreement: z.boolean().refine(val => val === true, { message: "You must agree to the Terms of Service" }),
})

/**
 * TypeScript type inferred from the Zod schema.
 * Represents the shape of the form data.
 */
type FormValues = z.infer<typeof formSchema>

/**
 * Props for the ContactForm component.
 */
type ContactFormProps = {
  /** Visual variant of the form. "white" provides a clean card layout, "frosted" provides a glassmorphism effect. */
  variant?: "white" | "frosted"
  /** Whether to display the form header with title and description. */
  showHeader?: boolean
  /** Custom title for the form header. */
  headerTitle?: string
  /** Custom description for the form header. */
  headerDescription?: string
  /** Additional CSS classes to apply to the form container. */
  className?: string
}

/**
 * Available services that users can select from.
 * Used to populate the services checkbox group.
 */
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

/**
 * Budget options for the radio group selection.
 * Provides predefined budget ranges for user selection.
 */
const budgetOptions = [
  { value: "Not sure yet", label: "Not sure yet" },
  { value: "$0 - $1,000", label: "$0 - $1,000" },
  { value: "$1,000 - $5,000", label: "$1,000 - $5,000" },
  { value: "$5,000 - $15,000", label: "$5,000 - $15,000" },
  { value: "$15,000 - $30,000", label: "$15,000 - $30,000" },
  { value: "$30,000+", label: "$30,000+" },
]

/**
 * Formats a phone number string into (XXX) XXX-XXXX format.
 * Removes all non-digit characters and applies formatting based on length.
 *
 * @param {string} value - The raw phone number input
 * @returns {string} The formatted phone number string
 *
 * @example
 * ```typescript
 * formatPhoneNumber("1234567890") // Returns "(123) 456-7890"
 * formatPhoneNumber("123456") // Returns "(123) 456"
 * formatPhoneNumber("123") // Returns "123"
 * ```
 */
const formatPhoneNumber = (value: string) => {
  // Remove all non-digits
  const phoneNumber = value.replace(/\D/g, '')
  
  // Format based on length
  if (phoneNumber.length < 4) {
    return phoneNumber
  } else if (phoneNumber.length < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
  } else {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
  }
}

/**
 * ContactForm component
 *
 * A comprehensive, accessible contact form that handles user inquiries with robust validation and security features.
 * Built using React Hook Form for form state management, Zod for schema validation, and Cloudflare Turnstile for bot protection.
 *
 * Features:
 * - **Comprehensive Form Fields**: Collects personal info, company details, service preferences, budget, and additional comments
 * - **Multiple Visual Variants**: Supports both "white" (clean card) and "frosted" (glassmorphism) styling
 * - **Robust Validation**: Uses Zod schema validation with real-time error feedback
 * - **Security Protection**: Integrates Cloudflare Turnstile to prevent bot submissions
 * - **Phone Number Formatting**: Automatically formats phone numbers as user types
 * - **Service Selection**: Multi-select checkboxes for various business services
 * - **Budget Selection**: Radio button group for budget range selection
 * - **Mailing List Opt-in**: Optional newsletter subscription with detailed privacy information
 * - **Terms Agreement**: Required checkbox for terms of service and privacy policy acceptance
 * - **Success State Management**: Shows confirmation message after successful submission
 * - **Error Handling**: Displays detailed error messages for failed submissions
 * - **Accessibility**: Includes proper ARIA labels and semantic HTML structure
 * - **Responsive Design**: Adapts to different screen sizes with grid layouts
 *
 * @param {ContactFormProps} props - The properties passed to the component
 * @param {string} props.variant - The visual variant of the form. "white" provides a clean card layout, "frosted" provides a glassmorphism effect.
 * @param {boolean} props.showHeader - Whether to display the form header with title and description.
 * @param {string} props.headerTitle - Custom title for the form header.
 * @param {string} props.headerDescription - Custom description for the form header.
 * @param {string} props.className - Additional CSS classes to apply to the form container.
 * @returns {JSX.Element} The rendered contact form component
 *
 * @example
 * ```tsx
 * // Basic usage with default white variant
 * <ContactForm />
 *
 * // Frosted variant with custom header
 * <ContactForm
 *   variant="frosted"
 *   headerTitle="Let's Work Together"
 *   headerDescription="Tell us about your project and we'll provide a custom solution."
 *   className="max-w-2xl mx-auto"
 * />
 *
 * // Minimal form without header
 * <ContactForm
 *   showHeader={false}
 *   variant="white"
 *   className="shadow-none border"
 * />
 * ```
 */
export default function ContactForm({
  variant = "white",
  showHeader = true,
  headerTitle = "Get in Touch",
  headerDescription = "Fill out the form below and we'll get back to you within 48 hours.",
  className = "",
}: ContactFormProps): JSX.Element {
  // ContactForm: handles user inquiries via form with validation and turnstile protection
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [showMailingListInfo, setShowMailingListInfo] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const [formHeight, setFormHeight] = useState<number | null>(null)
  const formRef = useRef<HTMLDivElement>(null)

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
      mailingList: false,
      tosAgreement: false,
    },
  })

  // Measure form height when it's first rendered
  useEffect(() => {
    if (formRef.current && !isSuccess && formHeight === null) {
      setFormHeight(formRef.current.offsetHeight)
    }
  }, [isSuccess, formHeight])

  async function onSubmit(data: FormValues) {
    if (!turnstileToken) {
      setSubmitError("Please complete the security verification")
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const response = await fetch('/api/contact', {
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
        throw new Error(result.error || 'Failed to submit form')
      }

      setIsSuccess(true)
      form.reset()
      setTurnstileToken(null)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  const FormContent = (
    <>
      {/* Success Message */}
      {isSuccess ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center py-12">
            <h3 className={clsx("text-2xl font-bold mb-4", variant === "frosted" && "text-white")}>Thank You!</h3>
            <p className={clsx("mb-6", variant === "frosted" ? "text-white" : "text-gray-600")}>We&apos;ve received your request and will be in touch shortly.</p>
            <Button 
              onClick={() => setIsSuccess(false)} 
              className={variant === "frosted" ? "bg-white text-medium-blue hover:bg-white/90" : undefined}
              variant={variant === "white" ? "outline" : "default"}
            >
              Submit Another Request
            </Button>
          </div>
        </div>
      ) : (
        <>
          {/* Form Fields */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Error Message */}
              {submitError && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-600 text-sm">{submitError}</p>
                </div>
              )}
              
              {/* Name fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={variant === "frosted" ? "text-white after:content-['*'] after:text-red-500 after:ml-0.5" : "after:content-['*'] after:text-red-500 after:ml-0.5"}>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" className={variant === "frosted" ? "font-semibold bg-white/10 placeholder:text-gray-200/60 text-white" : undefined} {...field} />
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
                      <FormLabel className={variant === "frosted" ? "text-white" : undefined}>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" className={variant === "frosted" ? "font-semibold bg-white/10 placeholder:text-gray-200/60 text-white" : undefined} {...field} />
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
                      <FormLabel className={variant === "frosted" ? "text-white after:content-['*'] after:text-red-500 after:ml-0.5" : "after:content-['*'] after:text-red-500 after:ml-0.5"}>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john.doe@example.com" type="email" className={variant === "frosted" ? "font-semibold bg-white/10 placeholder:text-gray-200/60 text-white" : undefined} {...field} />
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
                      <FormLabel className={variant === "frosted" ? "text-white" : undefined}>Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="(123) 456-7890" 
                          className={variant === "frosted" ? "font-semibold bg-white/10 placeholder:text-gray-200/60 text-white" : undefined} 
                          value={field.value}
                          onChange={(e) => {
                            const formatted = formatPhoneNumber(e.target.value)
                            field.onChange(formatted)
                          }}
                          maxLength={14}
                        />
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
                      <FormLabel className={variant === "frosted" ? "text-white" : undefined}>Website URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://example.com" className={variant === "frosted" ? "font-semibold bg-white/10 placeholder:text-gray-200/60 text-white" : undefined} {...field} />
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
                      <FormLabel className={variant === "frosted" ? "text-white" : undefined}>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Acme Inc." className={variant === "frosted" ? "font-semibold bg-white/10 placeholder:text-gray-200/60 text-white" : undefined} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* Services section */}
              <div>
                <h3 className={clsx("text-lg font-medium mb-2", variant === "frosted" && "text-white")}>What can we do for you?<span className="text-red-500 ml-1">*</span></h3>
                <p className={clsx("text-sm mb-4", variant === "frosted" ? "text-gray-200" : "text-muted-foreground")}>Check all that apply</p>
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
                              className={variant === "frosted" ? "data-[state=checked]:text-white" : "data-[state=checked]:text-medium-blue"}
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
                          <FormLabel className={clsx("font-normal cursor-pointer", variant === "frosted" && "text-white")}>{service.label}</FormLabel>
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
                    <FormLabel className={variant === "frosted" ? "text-white" : undefined}>Additional information</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell us more about your project timeline, goals, technical requirements, or any questions you have..." className={variant === "frosted" ? "font-semibold bg-white/10 placeholder:text-gray-200/60 text-white" : undefined} {...field} />
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
                    <FormLabel className={variant === "frosted" ? "text-white after:content-['*'] after:text-red-500 after:ml-0.5" : "after:content-['*'] after:text-red-500 after:ml-0.5"}>What is your estimated budget?</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-2"
                      >
                        {budgetOptions.map((option) => (
                          <FormItem key={option.value} className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem
                                value={option.value}
                                className={variant === "frosted" ? "text-white border-white" : "text-medium-blue border-gray-400"}
                              />
                            </FormControl>
                            <FormLabel className={clsx("font-normal cursor-pointer", variant === "frosted" && "text-white")}>{option.label}</FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Mailing List */}
              <FormField
                control={form.control}
                name="mailingList"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className={variant === "frosted" ? "data-[state=checked]:text-white" : "data-[state=checked]:text-medium-blue"}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className={clsx("font-normal cursor-pointer", variant === "frosted" && "text-white")}>
                        Subscribe to our mailing list to become an InSite Tech InSider and receive the latest tech tips and exclusive offers
                      </FormLabel>
                      <div className="space-y-2">
                        <button
                          type="button"
                          onClick={() => setShowMailingListInfo(!showMailingListInfo)}
                          className={clsx(
                            "text-xs underline hover:no-underline",
                            variant === "frosted" ? "text-gray-300" : "text-muted-foreground"
                          )}
                        >
                          {showMailingListInfo ? "Show less" : "Learn more"}
                        </button>
                        {showMailingListInfo && (
                          <p className={clsx("text-xs leading-relaxed", variant === "frosted" ? "text-gray-300" : "text-muted-foreground")}>
                            We use separate databases for our promotional and contact emails, if you don&apos;t click this box, you will not be added to the promo list. We value your privacy and security. You will receive an email to confirm your address (check your spam folder) and can unsubscribe at any time. We will never share your information without your consent.
                          </p>
                        )}
                      </div>
                    </div>
                  </FormItem>
                )}
              />
              {/* Terms of Service Agreement */}
              <FormField
                control={form.control}
                name="tosAgreement"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className={variant === "frosted" ? "data-[state=checked]:text-white" : "data-[state=checked]:text-medium-blue"}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className={clsx("font-normal cursor-pointer after:content-['*'] after:text-red-500 after:ml-0.5", variant === "frosted" && "text-white")}>
                        I agree to the{" "}
                        <a href="/terms" target="_blank" className="underline hover:no-underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="/privacy" target="_blank" className="underline hover:no-underline">
                          Privacy Policy
                        </a>
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Cloudflare Turnstile */}
              <div className="text-center">
                <Turnstile
                  onVerify={(token) => {
                    setTurnstileToken(token)
                    setSubmitError(null) // Clear any previous errors
                  }}
                  onError={() => {
                    setTurnstileToken(null)
                    setSubmitError("Security verification failed. Please try again.")
                  }}
                  onExpire={() => {
                    setTurnstileToken(null)
                    setSubmitError("Security verification expired. Please try again.")
                  }}
                  theme="light"
                />
                <p className={clsx("text-xs mt-2", variant === "frosted" ? "text-gray-300" : "text-muted-foreground")}>
                  This site is protected by Cloudflare Turnstile
                </p>
              </div>
              {/* Submit button */}
              <Button
                type="submit"
                className={clsx(
                  "w-full",
                  variant === "frosted"
                    ? "bg-white border border-white hover:bg-white/20 text-medium-blue hover:text-white"
                    : "bg-medium-blue text-white hover:bg-dark-blue-alt"
                )}
                disabled={isSubmitting || !turnstileToken}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </Form>
        </>
      )}
    </>
  )

  // Accessible section landmark for the contact form
  return (
    <section aria-labelledby="contact-form-title">
      {/* Accessible landmark for section */}
      <h2 id="contact-form-title" className="sr-only">{headerTitle}</h2>
      {/* Form Container */}
      {variant === "frosted" ? (
        <div 
          className={clsx(
            "rounded-xl p-6 shadow-lg bg-white/15 backdrop-blur-lg backdrop-filter relative",
            className
          )}
          style={formHeight ? { minHeight: formHeight } : undefined}
        >
          {showHeader && !isSuccess && (
            <div className="flex flex-col space-y-1.5 pb-4">
              <p className="text-2xl font-semibold leading-none tracking-tight text-white">{headerTitle}</p>
              <p className="text-sm text-white/80">{headerDescription}</p>
            </div>
          )}
          <div className={clsx(!showHeader ? "pt-1" : "")} ref={formRef}>
            {FormContent}
          </div>
        </div>
      ) : (
        <Card 
          className={clsx("bg-white border-0 shadow-xl relative", className)}
          style={formHeight ? { minHeight: formHeight } : undefined}
        >
          {showHeader && !isSuccess && (
            <CardHeader>
              <CardTitle className="text-medium-blue">{headerTitle}</CardTitle>
              <CardDescription>{headerDescription}</CardDescription>
            </CardHeader>
          )}
          <CardContent className={clsx(!showHeader ? "pt-6" : "")} ref={formRef}>{FormContent}</CardContent>
        </Card>
      )}
    </section>
  )
} 