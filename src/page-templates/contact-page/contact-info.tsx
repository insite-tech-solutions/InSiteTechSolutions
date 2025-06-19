/**
 * @fileoverview Contact Information Component
 * 
 * This component displays contact methods and social media links in a card format.
 * Features responsive design, accessibility support, and conditional rendering
 * for different contact method types (clickable links vs static text).
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Linkedin, Twitter, Facebook } from "lucide-react"
import Link from "next/link"

/**
 * Type definition for contact method configuration
 */
interface ContactMethod {
  /** Lucide React icon component for the contact method */
  icon: React.ComponentType<{ className?: string }>
  /** Display text for the contact information */
  contact: string
  /** Label describing the contact method type */
  label: string
  /** Optional href for clickable contact methods (mailto:, tel:, etc.) */
  href?: string
}

/**
 * Type definition for social media link configuration
 */
interface SocialLink {
  /** Lucide React icon component for the social platform */
  icon: React.ComponentType<{ className?: string }>
  /** URL to the social media profile */
  href: string
  /** Accessible label for screen readers */
  ariaLabel: string
}

/**
 * Configuration array for contact methods
 * Includes email, phone, and placeholder for future address
 */
const contactMethods: ContactMethod[] = [
  {
    icon: Mail,
    contact: "contact@insitetechsolutions.com",
    label: "Email",
    href: "mailto:contact@insitetechsolutions.com",
  },
  {
    icon: Phone,
    contact: "(716) 220-8781",
    label: "Phone",
    href: "tel:+17162208781",
  },
  // Placeholder until business gets PO box setup
  // {
  //   icon: MapPin,
  //   contact: "123 Tech Street, Buffalo, NY 14201", 
  //   label: "Address",
  //   href: "#", // Replace with a link to Google Maps if you have a physical address
  // },
];

/**
 * Configuration array for social media links
 * Each link opens in a new tab with proper security attributes
 */
const socialLinks: SocialLink[] = [
  {
    icon: Twitter,
    href: "https://twitter.com",
    ariaLabel: "Twitter",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com",
    ariaLabel: "LinkedIn",
  },
  {
    icon: Facebook,
    href: "https://facebook.com",
    ariaLabel: "Facebook",
  },
];

/**
 * ContactInfo Component
 * 
 * Renders contact information in a card format with contact methods and social links.
 * Features conditional rendering for clickable vs static contact information and
 * proper accessibility attributes for all interactive elements.
 * 
 * Features:
 * - Card-based layout with shadow effects
 * - Icon-based visual representation for each contact method
 * - Conditional rendering for clickable contact methods (href present)
 * - Social media links with hover effects and accessibility
 * - Responsive spacing and typography
 * - Proper semantic HTML structure
 * - ARIA labels for screen reader accessibility
 * - External link security attributes
 * 
 * @returns {JSX.Element} The rendered contact information section
 * 
 * @example
 * ```tsx
 * // Usage in a contact page
 * import ContactInfo from '@/page-templates/contact-page/contact-info'
 * 
 * export default function ContactPage() {
 *   return (
 *     <div>
 *       <ContactInfo />
 *     </div>
 *   )
 * }
 * ```
 */
export default function ContactInfo(): JSX.Element {
  return (
    <section aria-labelledby="contact-info-title">
      {/* Hidden heading for screen readers - provides accessible section context */}
      <h2 id="contact-info-title" className="sr-only">Contact Information</h2>
      
      {/* Main Contact Card - Elevated styling with shadow */}
      <Card className="bg-white w-full border-0 shadow-xl self-center">
        {/* Card Header - Title and description */}
        <CardHeader>
          <CardTitle className="text-medium-blue">Contact Information</CardTitle>
          <CardDescription>Reach out to us through any of these channels.</CardDescription>
        </CardHeader>
        
        {/* Card Content - Contact methods and social links */}
        <CardContent className="space-y-6">
          {/* Contact Methods Section - Email, phone, etc. */}
          <div className="space-y-4">
            {contactMethods.map((method) => (
              <div key={method.label.toLowerCase().replace(/\s+/g, '-')} className="flex items-start space-x-4">
                {/* Contact Method Icon */}
                <method.icon className="w-6 h-6 text-medium-blue mt-1" />
                
                {/* Contact Method Details */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{method.label}</h3>
                  
                  {/* Conditional Rendering - Clickable link vs static text */}
                  {method.href ? (
                    <a
                      href={method.href}
                      className="text-lg text-gray-600 hover:text-medium-blue transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {method.contact}
                    </a>
                  ) : (
                    <p className="text-lg text-gray-600">{method.contact}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links Section - Platform links with icons */}
          <div className="pt-4 border-t">
            <h3 className="font-medium mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.ariaLabel.toLowerCase().replace(/\s+/g, '-')}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-white transition-colors bg-medium-blue hover:bg-dark-blue-alt shadow-lg hover:shadow-md"
                  aria-label={link.ariaLabel}
                >
                  {/* Social Media Icon with accessibility attributes */}
                  <link.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
