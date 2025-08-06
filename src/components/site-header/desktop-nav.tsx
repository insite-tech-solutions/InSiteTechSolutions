/**
 * @fileoverview Desktop Navigation Component
 * 
 * Provides desktop navigation functionality for the site header.
 * Displays main navigation menu with dropdown support for items with submenus.
 * Includes animated text effects and hover interactions for enhanced UX.
 * 
 * Features:
 * - Desktop-only navigation menu with responsive design
 * - Dropdown menu support for items with submenus
 * - Animated text effects with sequential hover animations
 * - Mouse hover interactions for dropdown visibility
 * - Chevron indicators for dropdown items
 * - Accessibility support with proper ARIA attributes
 * - Performance optimized with React.memo
 * - Type-safe props using DesktopNavProps interface
 * 
 * Animation Features:
 * - Sequential letter animations on hover
 * - Smooth color transitions for text and chevron
 * - Rotating chevron animation for dropdown indicators
 * - Configurable animation delays for staggered effects
 * 
 * @module DesktopNav
 */
'use client';

import { useState, memo } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { DesktopNavProps, MenuItem } from './types';
import DropdownMenu from './dropdown-menu';

/**
 * DesktopNav component displays the main navigation menu for desktop view
 * 
 * Renders a horizontal navigation menu with support for dropdown submenus.
 * Includes animated text effects and hover interactions for enhanced user experience.
 * Uses mouse hover events to control dropdown visibility and provides smooth
 * transitions between navigation states.
 * 
 * Key Features:
 * - Desktop-only responsive navigation
 * - Dropdown menu integration for submenu items
 * - Animated text effects with sequential hover animations
 * - Mouse hover state management for dropdowns
 * - Chevron indicators for dropdown navigation items
 * - Accessibility support with proper focus management
 * 
 * State Management:
 * - Tracks currently open dropdown with openDropdown state
 * - Mouse enter/leave handlers for dropdown visibility
 * - Clean state management with proper cleanup
 * 
 * Performance Optimizations:
 * - React.memo for component memoization
 * - Efficient state updates with proper dependencies
 * - Optimized animation calculations
 * 
 * @param {DesktopNavProps} props - Component props
 * @param {MenuItem[]} props.menuItems - Array of menu items to display
 * @returns {JSX.Element} Desktop navigation component
 * 
 * @example
 * ```tsx
 * import { menuItems } from './menu-items'
 * 
 * <DesktopNav menuItems={menuItems} />
 * ```
 */
function DesktopNav({ menuItems }: DesktopNavProps): JSX.Element {
  // Track which dropdown is currently open
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  /**
   * Handles mouse enter events for dropdown items
   * 
   * Opens the dropdown menu when hovering over navigation items
   * that have submenu content. Provides immediate visual feedback.
   * 
   * @param {string} itemName - The name of the menu item being hovered
   */
  const handleMouseEnter = (itemName: string) => {
    setOpenDropdown(itemName)
  }

  /**
   * Handles mouse leave events for dropdown items
   * 
   * Closes the dropdown menu when the mouse leaves the navigation area.
   * Ensures clean state management and proper dropdown behavior.
   */
  const handleMouseLeave = () => {
    setOpenDropdown(null)
  }

  /**
   * Splits text into animated spans with sequential hover effects
   * 
   * Creates individual span elements for each character with staggered
   * animation delays. Optionally includes a chevron icon for dropdown
   * indicators. Provides smooth color transitions and letter spacing.
   * 
   * Animation Details:
   * - Sequential letter animations with 25ms delay increments
   * - Color transitions from gray to medium blue on hover
   * - Letter spacing of 0.1em for enhanced readability
   * - Chevron rotation animation for dropdown indicators
   * - Proper handling of spaces and special characters
   * 
   * @param {string} text - The text to split and animate
   * @param {boolean} includeChevron - Whether to include a chevron icon
   * @returns {JSX.Element[]} Array of animated span elements
   * 
   * @example
   * ```tsx
   * const animatedText = splitTextIntoSpans('Services', true)
   * // Returns array of spans with sequential animations
   * ```
   */
  const splitTextIntoSpans = (text: string, includeChevron: boolean = false) => {
    const delayIncrement = 25 // milliseconds between each letter animation
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
          style={{ 
            transitionDelay: `${index * delayIncrement}ms`,
            letterSpacing: '0.1em' 
          }}
        >
          {letter}
        </span>
      )
    })

    // Add chevron icon for dropdown indicators
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
    /* Navigation Container - Hidden on mobile, flex on desktop */
    <nav className="hidden md:flex space-x-2">
      {menuItems.map((item: MenuItem) => (
        <div key={item.name} className="relative">
          {item.submenu ? (
            // Dropdown navigation item with submenu
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
              {/* Invisible spacer for smooth dropdown positioning */}
              <div className="absolute left-0 w-full h-4 -bottom-4"></div>
              <DropdownMenu items={item.submenu} isOpen={openDropdown === item.name} />
            </div>
          ) : (
            // Regular navigation link without submenu
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

export default memo(DesktopNav);
