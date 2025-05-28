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
import clsx from "clsx"

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

type FormValues = z.infer<typeof formSchema>

type ContactFormProps = {
  variant?: "white" | "frosted"
  showHeader?: boolean
  headerTitle?: string
  headerDescription?: string
  className?: string
}

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

// Phone number formatting function
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

export default function ContactForm({
  variant = "white",
  showHeader = true,
  headerTitle = "Get in Touch",
  headerDescription = "Fill out the form below and we'll get back to you within 48 hours.",
  className = "",
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [showMailingListInfo, setShowMailingListInfo] = useState(false)

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

  async function onSubmit() {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSuccess(true)
      form.reset()
    } catch (error) {
      setIsSuccess(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  const FormContent = (
    <>
      {isSuccess ? (
        <div className="text-center py-12">
          <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
          <p className="mb-6">We&apos;ve received your request and will be in touch shortly.</p>
          <Button onClick={() => setIsSuccess(false)} variant={variant === "white" ? "outline" : "default"}>
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
            {/* TODO: Add Cloudflare Turnstile here */}
            <div className="text-center">
              <p className={clsx("text-xs", variant === "frosted" ? "text-gray-300" : "text-muted-foreground")}>
                This site is protected by security verification
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
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Form>
      )}
    </>
  )

  if (variant === "frosted") {
    return (
      <div className={clsx(
        "rounded-xl p-6 shadow-lg bg-white/15 backdrop-blur-lg backdrop-filter",
        className
      )}>
        {showHeader && (
          <div className="flex flex-col space-y-1.5 pb-4">
            <p className="text-2xl font-semibold leading-none tracking-tight text-white">{headerTitle}</p>
            <p className="text-sm text-white/80">{headerDescription}</p>
          </div>
        )}
        <div className={clsx(!showHeader && "pt-1")}>
          {FormContent}
        </div>
      </div>
    )
  }

  // Default: white card
  return (
    <Card className={clsx("bg-white border-0 shadow-xl", className)}>
      {showHeader && (
        <CardHeader>
          <CardTitle className="text-medium-blue">{headerTitle}</CardTitle>
          <CardDescription>{headerDescription}</CardDescription>
        </CardHeader>
      )}
      <CardContent className={clsx(!showHeader && "pt-6")}>{FormContent}</CardContent>
    </Card>
  )
} 