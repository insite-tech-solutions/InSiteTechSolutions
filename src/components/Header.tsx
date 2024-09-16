// components/Header.tsx

'use client'; // Enables client-side interactivity

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// Define the shape of a navigation item
interface NavItem {
  name: string;
  href?: string;
  submenu?: { name: string; href: string }[];
}

const Header: React.FC = () => {
  // State to manage the mobile menu's visibility
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock the body scroll when the mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  // Navigation items data
  const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    {
      name: 'About',
      submenu: [
        { name: 'About us', href: '/about' },
        { name: 'Process', href: '/about/process' },
        { name: 'Pricing & Payments', href: '/about/pricing' },
        { name: 'Privacy Policy & Terms', href: '/about/terms' },
      ],
    },
    {
      name: 'Services',
      submenu: [
        { name: 'Web & App Development', href: '/services/web-development' },
        { name: 'SEO & Online Marketing', href: '/services/seo' },
        { name: 'Data Analysis', href: '/services/data-analysis' },
        { name: 'Custom Software Solutions', href: '/services/custom-software' },
        { name: 'AI & Automation', href: '/services/ai-automation' },
        { name: 'Graphic Design & Branding', href: '/services/design' },
        { name: 'Consulting & Training', href: '/services/consulting' },
      ],
    },
    { name: 'Portfolio', href: '/portfolio' },
    {
      name: 'Resources',
      submenu: [
        { name: 'FAQ', href: '/resources/faq' },
        { name: 'Blog', href: '/resources/blog' },
      ],
    },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Container */}
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            {/* Using next/image for optimized image loading */}
            <Image
              src="/Insite Tech Solutions Light.svg"
              alt="InSite Tech Solutions Logo"
              width={200}
              height={50}
              priority
            />
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) =>
              !item.submenu ? (
                // Regular navigation link
                <Link
                  href={item.href!}
                  key={item.name}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </Link>
              ) : (
                // Dropdown menu
                <div key={item.name} className="relative group">
                  <button
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
                    aria-haspopup="true"
                  >
                    {item.name}
                    {/* Dropdown indicator */}
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 0-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {/* Submenu */}
                  <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg py-2 mt-2 rounded-md">
                    {item.submenu.map((subItem) => (
                      <Link
                        href={subItem.href}
                        key={subItem.name}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            )}
          </nav>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40">
          <div className="px-4 py-4">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link href="/">
                <Image
                  src="/Insite Tech Solutions Light.svg"
                  alt="InSite Tech Solutions Logo"
                  width={200}
                  height={50}
                  priority
                />
              </Link>
              {/* Close button */}
              <button
                className="text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            {/* Mobile Navigation Links */}
            <nav className="mt-4">
              {navItems.map((item) =>
                !item.submenu ? (
                  // Regular navigation link
                  <Link
                    href={item.href!}
                    key={item.name}
                    className="block text-gray-700 px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.name}
                  </Link>
                ) : (
                  // Submenu for mobile
                  <div key={item.name} className="mt-2">
                    <p className="text-gray-700 px-3 py-2 rounded-md text-base font-medium">
                      {item.name}
                    </p>
                    {item.submenu.map((subItem) => (
                      <Link
                        href={subItem.href}
                        key={subItem.name}
                        className="block text-gray-600 px-6 py-2 rounded-md text-sm"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
