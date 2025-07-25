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
import { Open_Sans, Noto_Sans, Lato, Roboto } from 'next/font/google'
import "../styles/globals.css";
import Script from 'next/script';
import type { ReactNode } from 'react';
import { memo } from 'react';

/*
 * Commented out local font configuration for future use
 * 
 * import localFont from "next/font/local";
 * const geistSans = localFont({
 *   src: "./fonts/GeistVF.woff",
 *   variable: "--font-geist-sans",
 *   weight: "100 900",
 * });
 * const geistMono = localFont({
 *   src: "./fonts/GeistMonoVF.woff",
 *   variable: "--font-geist-mono",
 *   weight: "100 900",
 * });
 */

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
  title: "InSite Tech Solutions | Custom Software, Web & App Development",
  description: "InSite Tech Solutions offers custom software development, web and mobile app creation, data analysis, AI automation, and technical consulting to elevate your business. Transform your ideas into powerful digital solutions.",
  keywords: "custom software development, web development, mobile app development, data analysis, AI automation, technical consulting, Buffalo NY, technology solutions",
  authors: [{ name: "InSite Tech Solutions" }],
  creator: "InSite Tech Solutions",
  publisher: "InSite Tech Solutions",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://insitetechsolutions.com",
    title: "InSite Tech Solutions | Custom Software, Web & App Development",
    description: "InSite Tech Solutions offers custom software development, web and mobile app creation, data analysis, AI automation, and technical consulting to elevate your business.",
    siteName: "InSite Tech Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "InSite Tech Solutions | Custom Software, Web & App Development",
    description: "InSite Tech Solutions offers custom software development, web and mobile app creation, data analysis, AI automation, and technical consulting to elevate your business.",
  },
};

/*
 * Commented out original layout implementation for reference
 * 
 * export default function RootLayout({
 *   children,
 * }: Readonly<{
 *   children: React.ReactNode;
 * }>) {
 *   return (
 *     <html lang="en">
 *       <body
 *         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
 *       >
 *         {children}
 *       </body>
 *     </html>
 *   );
 * }
 */

// Google Fonts configuration for optimal loading
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' })
const notoSans = Noto_Sans({ subsets: ['latin'], variable: '--font-noto-sans' })
const lato = Lato({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-lato' })
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-roboto' })

/**
 * RootLayout Component
 *
 * Main application root layout with global fonts and analytics.
 * Provides the base HTML structure and global configurations
 * for all pages in the application.
 * 
 * The component includes:
 * - Global font configuration with CSS variables
 * - Analytics integration with Umami
 * - Proper HTML structure with language attribute
 * - Performance-optimized font loading
 * - Clean separation of concerns
 * 
 * Font Strategy:
 * - Uses Google Fonts for optimal loading performance
 * - Implements CSS variables for flexible font usage
 * - Supports multiple font weights and styles
 * - Enables responsive typography across the site
 * 
 * Analytics Integration:
 * - Umami analytics for privacy-focused tracking
 * - Loads after interactive for performance
 * - Provides insights without compromising user privacy
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Child components to render
 * @returns {JSX.Element} The complete HTML structure for the application
 * 
 * @example
 * ```tsx
 * // This component is automatically used by Next.js
 * // to wrap all pages in the application
 * ```
 */
function RootLayout({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  return (
    <html lang="en" className={`${openSans.variable} ${notoSans.variable} ${lato.variable} ${roboto.variable}`}>
      <head>
        {/* Analytics script with performance optimization */}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="eca7ade8-1f83-4309-b1d4-6d2f5fbe7173"
          strategy="afterInteractive"
        />
      </head>
      <body style={{ borderTopStyle: 'solid' }}>{children}</body>
    </html>
  )
}

export default memo(RootLayout);