'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { menuItems } from './menu-items'
import DesktopNav from './desktop-nav'
import MobileMenu from './mobile-nav'
import SearchButton from './search-button'

/**
 * Header component that combines all navigation elements.
 * It includes both desktop and mobile navigation, and handles responsive behavior.
 */


const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 10)
    }

    const updateNavbarHeight = () => {
      setTimeout(() => {
        const header = document.querySelector('header');
        if (header) {
          const navbarHeight = header.offsetHeight;
          document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
        }
      }, 100);
    };

    // Add all event listeners
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', updateNavbarHeight)
    updateNavbarHeight()

    // Clean up all listeners
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateNavbarHeight)
    }
  }, [])

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(prev => !prev)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white'
    }`}>
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="text-blue-600 font-bold text-xl">
              <span className="sr-only">InSite Tech Solutions</span>
              {/* Using next/image for optimized image loading */}
              <Image
                src="/Insite Tech Solutions Light.svg"
                alt="InSite Tech Solutions Logo"
                width={190}
                height={88}
                priority
              />
            </Link>
          </div>
          <div className="flex items-center justify-end flex-1">
            <div className="hidden md:flex items-center space-x-6">
              <DesktopNav menuItems={menuItems} />
              <SearchButton />
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <MobileMenu items={menuItems} isOpen={isMobileMenuOpen} />
    </header>
  )
}

export default Header