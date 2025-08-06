/**
 * @fileoverview Mini WebPage Component for Hero Section
 *
 * This component creates a realistic mini webpage preview that simulates
 * a browser window with navigation controls, address bar, and content area.
 * Used in the HeroSection for interactive effects and visual appeal.
 *
 * Features:
 * - Realistic browser interface with window controls
 * - Address bar with security indicator and navigation
 * - Responsive content layout with service icons
 * - Accessibility features with ARIA labels
 * - Interactive elements with hover effects
 *
 * @module MiniWebPage
 */

"use client";

import { memo } from 'react';
import { Code, Layout } from 'lucide-react';
import { ChevronLeft, ChevronRight, RotateCw,
  Shield, Star, Plus, Download, BarChart, Settings } from 'lucide-react';

/**
 * Props interface for the MiniWebPage component
 * 
 * Currently, there are no props, but this interface
 * is defined for future extensibility.
 * 
 * @interface MiniWebPageProps
 */
/*interface MiniWebPageProps {}*/

/**
 * MiniWebPage Component
 * 
 * Simulates a mini version of a webpage with a realistic browser interface.
 * Creates a visual representation of a website with window controls,
 * address bar, and content area. Used in the HeroSection to demonstrate
 * web development capabilities and provide visual interest.
 * 
 * The component includes:
 * - Browser window controls (close, minimize, maximize)
 * - Navigation arrows and refresh button
 * - Address bar with security indicator
 * - Bookmark and download buttons
 * - Content area with company information and services
 * - Call-to-action button
 * 
 * All interactive elements are properly labeled for accessibility,
 * and the component uses semantic HTML structure with landmarks.
 * 
 * @returns {JSX.Element} Rendered mini webpage component
 * 
 * @example
 * ```tsx
 * <MiniWebPage />
 * ```
 */
const MiniWebPage = memo(function MiniWebPage(): JSX.Element {
  return (
    <section aria-labelledby="mini-webpage-title">
      {/* Accessible landmark for MiniWebPage */}
      <h2 id="mini-webpage-title" className="sr-only">Mini Webpage Preview</h2>
      
      {/* Main browser window container */}
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Browser Top Bar with window controls and navigation */}
        <div className="bg-gray-200 px-4 py-2 flex items-center border border-gray-300">
          {/* Window control buttons (close, minimize, maximize) */}
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500" aria-label="Close"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500" aria-label="Minimize"></div>
            <div className="w-3 h-3 rounded-full bg-green-500" aria-label="Maximize"></div>
          </div>
          
          {/* Navigation arrows */}
          <div className="flex items-center space-x-1 md:space-x-2 text-gray-600">
            <ChevronLeft className="w-4 h-4 ml-2 md:ml-4" />
            <ChevronRight className="w-4 h-4 ml-1" />
          </div>
          
          {/* Address bar with security indicator and controls */}
          <div className="flex items-center">
            <div className="flex-grow flex items-center bg-white rounded px-1 md:px-2 py-1 text-sm text-gray-600 border border-gray-300 ml-2 md:ml-8">
              <Shield className="w-4 h-4 text-green-600 mr-1 md:mr-2" />
              <span>www.insitetech.com</span>
              <RotateCw className="w-3 h-3 md:w-4 md:h-4 ml-2 md:ml-8" />
            </div>
            <Star className="w-4 h-4 text-gray-600 ml-2 md:ml-14" />
            <Download className="w-4 h-4 text-gray-600 ml-1 md:ml-2" />
            <Plus className="w-4 h-4 text-gray-600 ml-1 md:ml-2" />
          </div>
        </div>

        {/* Content Area with company information and services */}
        <div className="p-4 md:p-6 flex flex-col items-center justify-center h-full">
          {/* Company title */}
          <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-gray-800 text-center">
            Welcome to InSite Tech
          </h2>
          
          {/* Company description */}
          <p className="md:text-lg text-gray-700 mb-6 text-center">
            Unlock the potential of your business with solutions crafted to drive innovation, streamline operations, and elevate your digital presence.
          </p>
          
          {/* Services grid with icons */}
          <div className="grid grid-cols-2 gap-6 md:gap-2 md:flex md:space-x-2 mb-6 md:mb-8">
            <div className="flex items-center">
              <Code className="h-5 w-5 md:h-6 md:w-6 text-blue-600 mr-1 md:mr-2" aria-hidden="true" />
              <span className="text-sm text-gray-700">Web Development</span>
            </div>
            <div className="flex items-center">
              <BarChart className="h-5 w-5 md:h-7 md:w-7 text-blue-600 mr-1 md:mr-2" aria-hidden="true" />
              <span className="text-sm text-gray-700">Data Analytics</span>
            </div>
            <div className="flex items-center">
              <Settings className="h-5 w-5 md:h-7 md:w-7 text-blue-600 mr-1 md:mr-2" aria-hidden="true" />
              <span className="text-sm text-gray-700">Custom Software</span>
            </div>
            <div className="flex items-center">
              <Layout className="h-5 w-5 md:h-7 md:w-7 text-blue-600 mr-1 md:mr-2" aria-hidden="true" />
              <span className="text-sm text-gray-700">Branding & Design</span>
            </div>
          </div>
          
          {/* Call-to-action button */}
          <a
            href="/contact"
            className="bg-medium-blue text-white px-4 py-2 rounded hover:bg-dark-blue-alt transition duration-300 mb-2 text-center block"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
});

export default MiniWebPage;
