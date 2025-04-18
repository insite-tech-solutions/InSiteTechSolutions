"use client"

import type React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, Github } from "lucide-react"

const Footer: React.FC = () => {
  // You can replace these placeholder values with your actual information
  const companyInfo = {
    name: "InSite Tech Solutions",
    tagline: "Transforming businesses through innovative technology solutions",
    address: "123 Tech Avenue, Innovation District, City, State ZIP",
    phone: "+1 (555) 123-4567",
    email: "contact@insitetechsolutions.com",
    socialMedia: [
      { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/" },
      { name: "Twitter", icon: Twitter, url: "https://twitter.com/" },
      { name: "Facebook", icon: Facebook, url: "https://facebook.com/" },
      { name: "Instagram", icon: Instagram, url: "https://instagram.com/" },
      { name: "GitHub", icon: Github, url: "https://github.com/" },
    ],
  }

  const services = [
    { name: "Web & App Development", href: "/services/web-app-development" },
    { name: "Custom Software Solutions", href: "/services/custom-software" },
    { name: "SEO & Online Marketing", href: "/services/seo-marketing" },
    { name: "Graphic Design & Branding", href: "/services/design-branding" },
    { name: "Data Analysis", href: "/services/data-analysis" },
    { name: "AI & Automation", href: "/services/ai-automation" },
    { name: "Consulting & Training", href: "/services/consulting-training" },
  ]

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Cookie Policy", href: "/cookie-policy" },
  ]

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
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpItem}
            className="col-span-1 lg:col-span-1"
          >
            <div className="mb-6">
              <Link href="/" className="inline-block">
                <h3 className="text-2xl font-bold text-white">
                  InSite<span className="text-blue-500">Tech</span>
                </h3>
              </Link>
            </div>
            <p className="mb-6 text-gray-400 leading-relaxed">{companyInfo.tagline}</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>{companyInfo.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-white transition-colors">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
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
            className="col-span-1"
          >
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="hover:text-white transition-colors flex items-center group">
                    <span className="mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
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
            className="col-span-1"
          >
            <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-white transition-colors flex items-center group">
                    <span className="mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      &rsaquo;
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpItem}
            className="col-span-1 lg:col-span-1"
          >
            <h4 className="text-lg font-semibold text-white mb-6">Stay Updated</h4>
            <p className="mb-4 text-gray-400">
              Subscribe to our newsletter for the latest tech insights and company updates.
            </p>
            <form className="mb-6">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center"
                >
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </form>

            <div>
              <h5 className="text-white font-medium mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                {companyInfo.socialMedia.map((platform, index) => {
                  const Icon = platform.icon
                  return (
                    <a
                      key={index}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
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
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} InSite Tech Solutions. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
              {legalLinks.map((link, index) => (
                <Link key={index} href={link.href} className="hover:text-gray-300 transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
