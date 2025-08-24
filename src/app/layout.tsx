/**
 * @fileoverview Root Layout Component for Next.js App Router
 *
 * The root layout component that wraps all pages in the application.
 * Provides global fonts, analytics, and the base HTML structure.
 * Implements server-side rendering with optimized font loading.
 *
 * Features:
 * - Global font configuration with Google Fonts
 * - Analytics integration with Umami
 * - Server-side rendering optimization
 * - Responsive design foundation
 * - Performance-optimized font loading
 * - Clean HTML structure with proper metadata
 *
 * @module RootLayout
 */
import type { Metadata } from "next";
import { Open_Sans } from 'next/font/google'
import "../styles/globals.css";
import Script from 'next/script';
import type { ReactNode } from 'react';
import { memo } from 'react';
import { SearchProvider } from '@/contexts/search-context';
import { generateOrganizationJsonLd } from '@/utils/metadata-helpers';

/**
 * Static metadata configuration for the application
 *
 * Provides basic SEO metadata for the entire application.
 * This is a fallback configuration that can be overridden
 * by individual page components.
 * 
 * @constant {Metadata} metadata
 */
export const metadata: Metadata = {
  title: "InSite Tech Solutions | Custom Software, Web Development & Technical Consulting",
  description: "InSite Tech Solutions offers web & app development, custom software solutions, SEO & online marketing, graphic design & branding, data analysis, AI & automation, and consulting & training services. Transform your ideas into powerful digital solutions.",
  keywords: "custom software development, web development, mobile app development, data analysis, AI automation, technical consulting, Buffalo NY, technology solutions, SEO, graphic design, WNY tech solutions",
  authors: [{ name: "InSite Tech Solutions" }],
  creator: "InSite Tech Solutions",
  publisher: "InSite Tech Solutions",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.insitetechsolutions.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.insitetechsolutions.com",
    title: "InSite Tech Solutions | Custom Software, Web Development & Technical Consulting",
    description: "InSite Tech Solutions offers web & app development, custom software solutions, SEO & online marketing, graphic design & branding, data analysis, AI & automation, and consulting & training services. Transform your ideas into powerful digital solutions.",
    siteName: "InSite Tech Solutions",
    images: [
      {
        url: "https://www.insitetechsolutions.com/Insite Tech Solutions Light.png",
        width: 1200,
        height: 630,
        alt: "InSite Tech Solutions - Custom Software, Web Development & Technical Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InSite Tech Solutions | Custom Software, Web Development & Technical Consulting",
    description: "Transform your ideas into powerful digital solutions with InSite Tech—specialists in custom software, websites, data analysis, AI, and more.",
    images: ["https://www.insitetechsolutions.com/Insite Tech Solutions Light.png"],
  },
};

// OPTIMIZED: Only load Open Sans from Google Fonts with display swap
const openSans = Open_Sans({ 
  subsets: ['latin'], 
  variable: '--font-open-sans',
  display: 'swap', // CRITICAL: Shows text immediately with fallback font
  preload: true,
  weight: ['400', '700'] // Only load the weights you actually use
})

/**
 * RootLayout Component
 *
 * Main application root layout with global fonts and analytics.
 * Provides the base HTML structure and global configurations
 * for all pages in the application.
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Child components to render
 * @returns {JSX.Element} The complete HTML structure for the application
 */
function RootLayout({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  return (
    <html lang="en" className={openSans.variable}>
      <head>
        {/* CRITICAL: Preconnect to Google Fonts for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* CRITICAL: Preload your local Kohinoor font (only the main weight) */}
        <link 
          rel="preload" 
          href="/fonts/KohinoorLatin-Book.otf" 
          as="font" 
          type="font/otf" 
          crossOrigin="anonymous" 
        />

        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="https://cloud.umami.is" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Security headers */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Accessibility: Language & direction */}
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="robots" content="index, follow" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#0e72c8" />
      </head>
      <body>
        <SearchProvider>
          {children}
        </SearchProvider>
        
        {/* MOVED: Analytics to end of body with lazyOnload */}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="eca7ade8-1f83-4309-b1d4-6d2f5fbe7173"
          strategy="lazyOnload"
        />
        <Script
          id="jsonld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationJsonLd()),
          }}
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}

export default memo(RootLayout);