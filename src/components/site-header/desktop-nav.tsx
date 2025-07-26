'use client';

import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { DesktopNavProps, MenuItem } from './types'
import DropdownMenu from './dropdown-menu'

/**
 * DesktopNav component displays the main navigation menu for desktop view.
 * It includes dropdown functionality for items with submenus.
 * 
 * @param menuItems - Array of menu items to display in the desktop navigation
 */
const DesktopNav: React.FC<DesktopNavProps> = ({ menuItems }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const handleMouseEnter = (itemName: string) => {
    setOpenDropdown(itemName)
  }

  const handleMouseLeave = () => {
    setOpenDropdown(null)
  }

  /**
   * Splits a given text into individual <span> elements with sequential hover animations.
   * Optionally includes an additional element (e.g., chevron) at the end.
   * 
   * @param text - The text to split and animate
   * @param additionalElement - Optional React node to append after the text
   * @returns An array of <span> elements
   */
  const splitTextIntoSpans = (text: string, includeChevron: boolean = false) => {
    const delayIncrement = 25 // milliseconds
    const letters = text.split('')
    const spans = letters.map((letter, index) => {
      // Handle spaces or special characters if necessary
      if (letter === ' ') {
        return (
          <span key={`letter-${index}`} className="inline-block w-1">
            &nbsp;
          </span>
        )
      }

      return (
        <span
          key={`letter-${index}`}
          className="text-gray-500 group-hover:text-medium-blue transition-colors duration-300"
          style={{ transitionDelay: `${index * delayIncrement}ms`,
          letterSpacing: '0.1em' }}
        >
          {letter}
        </span>
      )
    })

    if (includeChevron) {
      spans.push(
        <span
          key="chevron"
          className="text-gray-500 group-hover:text-medium-blue transition-colors duration-300"
          style={{ transitionDelay: `${letters.length * delayIncrement}ms` }}
        >
          <ChevronDown
            className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-180"
            style={{ transitionDelay: `${letters.length * (delayIncrement/2.55)}ms` }}
            aria-hidden="true"
          />
        </span>
      )
    }

    return spans
  }

  return (
    <nav className="hidden md:flex space-x-2">
      {menuItems.map((item: MenuItem) => (
        <div key={item.name} className="relative">
          {item.submenu ? (
            <div
              className="group relative"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="group text-gray-500 inline-flex items-center rounded-md bg-white text-base font-kohinoor font-medium 
                focus:outline-none focus:ring-2 focus:ring-mild-blue-alt focus:ring-offset-2 px-3 py-6"            
              >
                {splitTextIntoSpans(item.name, true)}
              </button>
              <div className="absolute left-0 w-full h-4 -bottom-4"></div>
              <DropdownMenu items={item.submenu} isOpen={openDropdown === item.name} />
            </div>
          ) : (
            <Link
              href={item.href}
              className="group rounded-md text-gray-500 inline-flex items-center text-base font-kohinoor font-medium px-3 py-6"
            >
              {splitTextIntoSpans(item.name)}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}

export default DesktopNav
