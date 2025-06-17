/**
 * Page component for the Contact page.
 * Using Next.js App Router's built-in support for metadata.
 */
import type { Metadata } from "next"
import ContactPage from "@/components/contact-pages/contact-page";

/**
 * Metadata configuration for the Contact page.
 * 
 * @type {Metadata}
 */
export const metadata: Metadata = {
  title: "Contact Us | Tech Services",
  description:
    "Get in touch with our team for web development, software solutions, data analytics, and consulting services.",
};

/**
 * Server component that renders the Contact page.
 * 
 * @returns {JSX.Element} The rendered Contact page
 */
export default function Page() {
  return <ContactPage />;
}
