// MiniWebPage.tsx

"use client";

import React from 'react';
import { Code, Layout } from 'lucide-react';

/**
 * MiniWebPage component simulates a mini version of a webpage,
 * used in the HeroSection for interactive effects.
 */
const MiniWebPage = (): JSX.Element => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
      {/* Browser-like top bar */}
      <div className="bg-gray-200 px-4 py-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" aria-label="Close"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500" aria-label="Minimize"></div>
          <div className="w-3 h-3 rounded-full bg-green-500" aria-label="Maximize"></div>
        </div>
        <div className="ml-4 bg-white rounded px-2 py-1 text-sm text-gray-600 flex-grow">
          www.insitetech.com
        </div>
      </div>

      {/* Content area */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Welcome to InSite Tech</h2>
        <p className="text-gray-600 mb-4">
          We specialize in creating custom web and software solutions tailored to your needs.
        </p>
        <div className="flex space-x-4 mb-4">
          <div className="flex items-center">
            <Code className="text-blue-600 mr-2" aria-hidden="true" />
            <span className="text-sm text-gray-700">Web Development</span>
          </div>
          <div className="flex items-center">
            <Layout className="text-blue-600 mr-2" aria-hidden="true" />
            <span className="text-sm text-gray-700">UI/UX Design</span>
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
};

export default React.memo(MiniWebPage);
