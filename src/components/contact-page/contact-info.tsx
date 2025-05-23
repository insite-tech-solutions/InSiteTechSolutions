import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Linkedin, Twitter, Facebook } from "lucide-react"
import Link from "next/link"

const contactMethods = [
  {
    icon: Mail,
    contact: "contact@insite.tech",
    label: "Email",
    href: "mailto:contact@insite.tech",
  },
  {
    icon: Phone,
    contact: "(716) 220-8781",
    label: "Phone",
    href: "tel:+17162208781",
  },
  // Removing the Address section as it's no longer needed
  // {
  //   icon: MapPin,
  //   contact: "123 Tech Street, Buffalo, NY 14201", 
  //   label: "Address",
  //   href: "#", // Replace with a link to Google Maps if you have a physical address
  // },
];

const socialLinks = [
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

export default function ContactInfo() {
  return (
    <Card className="bg-white w-full border-0 shadow-xl self-center">
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
        <CardDescription>Reach out to us through any of these channels.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {contactMethods.map((method, index) => (
            <div key={index} className="flex items-start space-x-4">
              <method.icon className="w-6 h-6 text-medium-blue mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{method.label}</h3>
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

        <div className="pt-4 border-t">
          <h3 className="font-medium mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label={link.ariaLabel}
              >
                <link.icon className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
