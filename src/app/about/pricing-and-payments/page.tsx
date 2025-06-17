/**
 * Page component for the Pricing & Payments page.
 * Using Next.js App Router's built-in support for metadata.
 */
import type { Metadata } from "next";
import PricingPage from "@/components/about-pages/pricing-page";

/**
 * Metadata configuration for the Pricing & Payments page.
 * 
 * @type {Metadata}
 */
export const metadata: Metadata = {
  title: "Pricing & Payment Options | Your Tech Services",
  description:
    "Flexible pricing models and secure payment options for web development, custom software, and data analytics services.",
};

/**
 * Server component that renders the Pricing & Payments page.
 * 
 * @returns {JSX.Element} The rendered Pricing & Payments page
 */
export default function Page() {
  return <PricingPage />;
}
