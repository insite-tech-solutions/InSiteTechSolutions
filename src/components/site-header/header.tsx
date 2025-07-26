'use client';

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { menuItems } from './menu-items'
import DesktopNav from './desktop-nav'
import MobileMenu from './mobile-nav'
import SearchButton from './search-button'
import NavbarHeightObserver from './navbar-height-observer'

/**
 * Header component that combines all navigation elements.
 * It includes both desktop and mobile navigation, and handles responsive behavior.
 */


const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

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

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(prev => !prev)
  }

  return (
    <>
      <NavbarHeightObserver />
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}>
        <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-1">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/" className="text-medium-blue font-bold text-xl">
                <span className="sr-only">InSite Tech Solutions</span>
                {/* Using next/image for optimized image loading */}
                <Image
                  src="/Insite Tech Solutions Light.svg"
                  alt="InSite Tech Solutions Logo"
                  width={160}
                  height={72}
                  priority
                  // style={{ objectFit: 'cover' }}
                />
              </Link>
            </div>
            <div className="flex items-center justify-end flex-1">
              <div className="hidden md:flex items-center space-x-4">
                <DesktopNav menuItems={menuItems} />
                <SearchButton />
              </div>
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
        <MobileMenu items={menuItems} isOpen={isMobileMenuOpen} />
      </header>
    </>
  )
}

export default Header