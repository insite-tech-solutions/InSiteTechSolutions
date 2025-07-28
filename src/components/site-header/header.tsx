/**
 * @fileoverview Site Header Component
 * 
 * Main header component that combines all navigation elements including
 * desktop and mobile navigation, search functionality, and responsive behavior.
 * Handles scroll-based styling and mobile menu state management.
 * 
 * Features:
 * - Responsive navigation with desktop and mobile layouts
 * - Scroll-based header styling with backdrop blur
 * - Mobile menu toggle with hamburger icon
 * - Integrated search functionality
 * - Optimized logo loading with next/image
 * - Accessibility support with proper ARIA attributes
 * - Performance optimized with React.memo
 * 
 * @module Header
 */
'use client';

import { useState, useEffect, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { menuItems } from './menu-items';
import DesktopNav from './desktop-nav';
import MobileMenu from './mobile-nav';
import SearchButton from './search-button';
import SearchDropdown from './search-dropdown';
import NavbarHeightObserver from './navbar-height-observer';

/**
 * Header component that combines all navigation elements
 * 
 * Renders the main site header with responsive navigation, search functionality,
 * and scroll-based styling. Manages mobile menu state and provides seamless
 * navigation experience across all device sizes.
 * 
 * Key Features:
 * - Responsive navigation with desktop and mobile layouts
 * - Scroll-based header styling with backdrop blur effect
 * - Mobile menu toggle with hamburger/close icon
 * - Integrated search button and dropdown
 * - Optimized logo loading with next/image
 * - Accessibility support with proper ARIA attributes
 * 
 * State Management:
 * - Mobile menu open/close state
 * - Scroll position tracking for header styling
 * - Component mount state for SSR compatibility
 * 
 * @returns {JSX.Element} Main site header component
 * 
 * @example
 * ```tsx
 * <Header />
 * ```
 */
function Header(): JSX.Element {
  // Mobile menu visibility state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  // Scroll position state for header styling
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  // Component mount state for SSR compatibility
  const [isMounted, setIsMounted] = useState<boolean>(false)

  // Set mounted state for SSR compatibility
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Handle scroll events for header styling
  useEffect(() => {
    if (!isMounted) return

    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Set initial state

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMounted])

  /**
   * Toggles mobile menu visibility
   */
  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(prev => !prev)
  }

  return (
    <>
      {/* Observe navbar height for layout offset */}
      <NavbarHeightObserver />
      {/* Global search dropdown */}
      <SearchDropdown />
      {/* Main header with scroll-based styling */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-white shadow-md backdrop-blur-sm' : 'bg-white'
      }`}>
        <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-1">
            {/* Logo and brand section */}
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/" className="text-medium-blue font-bold text-xl">
                <span className="sr-only">InSite Tech Solutions</span>
                {/* Optimized logo loading with next/image */}
                <Image
                  src="/Insite Tech Solutions Light.svg"
                  alt="InSite Tech Solutions Logo"
                  width={160}
                  height={72}
                  priority
                  style={{ objectFit: 'contain' }}
                />
              </Link>
            </div>
            {/* Navigation and search section */}
            <div className="flex items-center justify-end flex-1">
              {/* Desktop navigation and search */}
              <div className="hidden md:flex items-center space-x-4">
                <DesktopNav menuItems={menuItems} />
                <SearchButton />
              </div>
              {/* Mobile menu toggle button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-mild-blue-alt"
                  aria-expanded={isMobileMenuOpen}
                >
                  <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
                  {isMobileMenuOpen ? (
                    <X className="h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Menu className="h-8 w-8" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile navigation menu */}
        <MobileMenu items={menuItems} isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      </header>
    </>
  )
}

export default memo(Header);