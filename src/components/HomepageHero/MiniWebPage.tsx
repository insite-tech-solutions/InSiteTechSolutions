// MiniWebPage.tsx

"use client";

import React from 'react';
import { Code, Layout } from 'lucide-react';
import { ChevronLeft, ChevronRight, RotateCw, 
  Shield, Star, Plus, Download, BarChart, Settings } from 'lucide-react';

/**
 * Props interface for the MiniWebPage component.
 * Currently, there are no props, but this interface
 * is defined for future extensibility.
 */
/*interface MiniWebPageProps {}*/

/**
 * Simulates a mini version of a webpage,
 * used in the HeroSection for interactive effects.
 *
 * @param props - The props for the component.
 * @returns The rendered MiniWebPage component.
 */
const MiniWebPage = React.memo((): JSX.Element => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
      {/* Browser-like top bar */}
      <div className="bg-gray-200 px-4 py-2 flex items-center border border-gray-300">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" aria-label="Close"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500" aria-label="Minimize"></div>
          <div className="w-3 h-3 rounded-full bg-green-500" aria-label="Maximize"></div>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
        <ChevronLeft className="w-4 h-4 ml-4" />
        <ChevronRight className="w-4 h-4 ml-1" />
        </div>
        <div className="flex items-center">
          <div className="flex-grow flex items-center bg-white rounded px-2 py-1 text-sm text-gray-600 border border-gray-300 ml-8">
            <Shield className="w-4 h-4 text-green-600 mr-2" />
            <span>www.insitetech.com</span>
            <RotateCw className="w-4 h-4 ml-8" />
          </div>
          <Star className="w-4 h-4 text-gray-600 ml-14" />
          <Download className="w-4 h-4 text-gray-600 ml-2" />
          <Plus className="w-4 h-4 text-gray-600 ml-2" />
        </div>
      </div>

      {/* Content area */}
      <div className="p-6 flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Welcome to InSite Tech</h2>
        <p className="text-gray-600 mb-4 text-center">
        Unlock the potential of your business with solutions crafted to drive innovation, streamline operations, and elevate your digital presence.
        </p>
        <div className="flex space-x-4 mb-4">
          <div className="flex items-center">
            <Code className="h-6 w-6 text-blue-600 mr-2" aria-hidden="true" />
            <span className="text-sm text-gray-700">Web Development</span>
          </div>
          <div className="flex items-center">
            <BarChart className="h-7 w-7 text-blue-600 mr-2" aria-hidden="true" />
            <span className="text-sm text-gray-700">Data Analytics</span>
          </div>
          <div className="flex items-center">
            <Settings className="h-7 w-7 text-blue-600 mr-2" aria-hidden="true" />
            <span className="text-sm text-gray-700">Custom Software</span>
          </div>
          <div className="flex items-center">
            <Layout className="h-7 w-7 text-blue-600 mr-2" aria-hidden="true" />
            <span className="text-sm text-gray-700">Digital Branding & Design</span>
          </div>
        </div>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          type="button"
        >
          Get Started
        </button>
      </div>
    </div>
  );
});

MiniWebPage.displayName = "MiniWebPage";

export default MiniWebPage;
