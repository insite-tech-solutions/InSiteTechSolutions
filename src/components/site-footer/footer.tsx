/**
 * @fileoverview Site Footer Component
 * 
 * Main footer component with company information, navigation links, services,
 * newsletter subscription, and social media links. Features smooth animations
 * and cross-page navigation handling.
 * 
 * Features:
 * - Company information and contact details
 * - Service and company navigation links
 * - Newsletter subscription with cross-page navigation
 * - Social media integration
 * - Responsive grid layout
 * - Smooth scroll animations with framer-motion
 * - Accessibility support with ARIA labels
 * - Performance optimized with React.memo
 * 
 * @module Footer
 */
"use client"

import { memo } from 'react';
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Facebook, Linkedin, Mail, Phone, MapPin, ArrowRight, Github, Home } from "lucide-react"
import { scrollToSection } from "@/utils/scroll-to-section"

/**
 * Footer component with company info, services, and navigation links
 * 
 * Renders the main site footer with comprehensive navigation, company
 * information, and interactive elements. Handles cross-page navigation
 * for newsletter subscription and provides smooth animations.
 * 
 * Key Features:
 * - Company information with contact details
 * - Service and company navigation links
 * - Newsletter subscription with cross-page navigation
 * - Social media integration with hover effects
 * - Responsive grid layout with animations
 * - Accessibility support with proper ARIA labels
 * 
 * Navigation Features:
 * - Cross-page newsletter navigation
 * - Service and company link navigation
 * - Social media external links
 * - Legal page links
 * 
 * @returns {JSX.Element} Main site footer component
 * 
 * @example
 * ```tsx
 * <Footer />
 * ```
 */
function Footer(): JSX.Element {
  const router = useRouter()

  /**
   * Handles newsletter navigation with cross-page support
   * 
   * Navigates to newsletter section on homepage or navigates to homepage
   * first if on a different page, then scrolls to newsletter section.
   * 
   * @param {React.MouseEvent<HTMLAnchorElement>} e - Click event
   */
  const handleNewsletterClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // If we're already on homepage, just scroll to section
    if (window.location.pathname === "/") {
      scrollToSection("newsletter")
    } else {
      // Navigate to homepage first, then scroll to section
      router.push('/')
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        scrollToSection('newsletter')
      }, 100)
    }
  }

  // Company information and contact details
  const companyInfo = {
    name: "InSite Tech Solutions",
    tagline: "Innovative solutions for all your tech related needs",
    address: "Serving WNY Locally and the Globe Remotely",
    phone: "+1 (716) 406-8988",
    email: "contact@insitetechsolutions.com",
    socialMedia: [
      { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/insite-tech-solutions" },
      { name: "GitHub", icon: Github, url: "https://github.com/insite-tech-solutions" },
      { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/share/198f3uKoyc/?mibextid=wwXIfr" },
      { name: "Nextdoor", icon: Home, url: "https://nextdoor.com/pages/insite-tech-solutions-lockport-ny/" },
    ],
  }

  // Service navigation links
  const services = [
    { name: "Web & App Development", href: "/services/web-and-app-development" },
    { name: "Custom Software Solutions", href: "/services/custom-software-solutions" },
    { name: "SEO & Online Marketing", href: "/services/seo-and-online-marketing" },
    { name: "Graphic Design & Branding", href: "/services/graphic-design-and-branding" },
    { name: "Data Analysis", href: "/services/data-analysis" },
    { name: "AI & Automation", href: "/services/ai-and-automation" },
    { name: "Consulting & Training", href: "/services/consulting-and-training" },
  ]

  // Company navigation links
  const companyLinks = [
    { name: "About Us", href: "/about/about-us" },
    { name: "Development Process", href: "/about/development-process" },
    { name: "Pricing and Payments", href: "/about/pricing-and-payments" },
    { name: "Previous Works", href: "/about/previous-works" },
    { name: "FAQ", href: "/insites/faq" },
    { name: "Blog", href: "/insites/blog" },
    { name: "Contact", href: "/contact" },
  ]

  // Legal navigation links
  const legalLinks = [
    { name: "Privacy Policy", href: "/about/privacy-policy-and-terms-of-service#privacy-policy" },
    { name: "Terms of Service", href: "/about/privacy-policy-and-terms-of-service#terms-of-service" },
    // { name: "Cookie Policy", href: "/privacy-policy-and-terms-of-service#cookie-policy" },
  ]

  // Animation variant for fade-in-up effect
  const fadeInUpItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section aria-labelledby="site-footer-title">
      {/* Accessible landmark for Site Footer */}
      <h2 id="site-footer-title" className="sr-only">Site Footer</h2>
      {/* Main footer with dark theme */}
      <footer className="bg-gray-900 text-gray-300 w-full overflow-hidden">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 pt-12 pb-8 max-w-full">
          <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row gap-8 md:gap-6 lg:gap-10 w-full">
            {/* Company Information Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpItem}
              className="flex-1 min-w-0 md:order-1 lg:order-1"
            >
              <div className="mb-2">
                <Link href="/" className="inline-block">
                  <h3 className="text-2xl font-bold text-white">
                    InSite<span className="text-mild-blue-alt">Tech</span>
                  </h3>
                  <h3 className="-mt-1 text-2xl font-bold text-white">Solutions</h3>
                </Link>
              </div>
              <p className="mb-6 text-gray-400 leading-relaxed">{companyInfo.tagline}</p>
              {/* Contact information list */}
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-mild-blue-alt mr-3 mt-0.5 flex-shrink-0" />
                  <span>{companyInfo.address}</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-mild-blue-alt mr-3 flex-shrink-0" />
                  <a href={`tel:${companyInfo.phone}`} className="hover:text-white transition-colors">
                    {companyInfo.phone}
                  </a>
                </li>
                <li className="flex items-center w-full">
                  <Mail className="h-5 w-5 text-mild-blue-alt mr-3 flex-shrink-0" />
                  <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors">
                    {companyInfo.email}
                  </a>
                </li>
              </ul>
            </motion.div>

          {/* Services */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpItem}
            className="flex-shrink-0 md:order-3 lg:order-2"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name.toLowerCase().replace(/\s+/g, '-')}>
                  <Link
                    href={service.href}
                    className="hover:text-white transition-colors flex items-center group"
                    aria-label={`Learn more about ${service.name}`}
                  >
                    <span className="mr-2 text-mild-blue-alt opacity-0 group-hover:opacity-100 transition-opacity">
                      &rsaquo;
                    </span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpItem}
            className="flex-shrink-0 md:order-4 lg:order-3"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name.toLowerCase().replace(/\s+/g, '-')}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors flex items-center group"
                    aria-label={`Navigate to ${link.name}`}
                  >
                    <span className="mr-2 text-mild-blue-alt opacity-0 group-hover:opacity-100 transition-opacity">
                      &rsaquo;
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

            {/* Newsletter and Social Media Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpItem}
              className="flex-1 min-w-0 md:order-2 lg:order-4"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
              <p className="mb-4 text-gray-400">
                Subscribe to our newsletter for the latest tech insights and company updates.
              </p>
              
              {/* Newsletter Call-to-Action */}
              <div className="mb-6">
                <Link
                  href="/#newsletter"
                  onClick={handleNewsletterClick}
                  className="inline-flex items-center justify-center bg-medium-blue hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium w-full sm:w-auto"
                >
                  Subscribe to Newsletter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              {/* Social Media Links */}
              <div>
                <h5 className="text-white font-medium mb-4">Follow Us</h5>
                <div className="flex space-x-4">
                  {companyInfo.socialMedia.map((platform) => {
                    const Icon = platform.icon
                    return (
                      <a
                        key={platform.name.toLowerCase().replace(/\s+/g, '-')}
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 p-2 rounded-full hover:bg-medium-blue transition-colors"
                        aria-label={`Follow us on ${platform.name}`}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} InSite Tech Solutions. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
              {legalLinks.map((link) => (
                <Link
                  key={link.name.toLowerCase().replace(/\s+/g, '-')}
                  href={link.href}
                  className="hover:text-gray-300 transition-colors"
                  aria-label={`Read our ${link.name}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
    </section>
  )
}

export default memo(Footer);
