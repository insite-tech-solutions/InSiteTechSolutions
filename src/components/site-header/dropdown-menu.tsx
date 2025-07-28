/**
 * @fileoverview Dropdown Menu Component
 * 
 * Displays animated dropdown menus for navigation items with submenus.
 * Uses Framer Motion for smooth animations and provides accessible navigation.
 * 
 * Features:
 * - Animated dropdown with spring-based animations
 * - Staggered item animations for visual appeal
 * - Accessibility support with proper focus management
 * - Performance optimized with React.memo
 * - Type-safe props using DropdownMenuProps interface
 * 
 * @module DropdownMenu
 */
'use client';

import { memo } from 'react';
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { DropdownMenuProps, MenuItem } from './types'

/**
 * DropdownMenu component displays a list of menu items in an animated dropdown
 * 
 * Renders an animated dropdown menu with staggered item animations.
 * Uses Framer Motion for smooth spring-based animations and provides
 * accessible navigation with proper hover states and transitions.
 * 
 * Animation Features:
 * - Spring-based container animations (height and opacity)
 * - Staggered item animations with 50ms delays
 * - Smooth hover transitions for menu items
 * - Proper exit animations with AnimatePresence
 * 
 * @param {DropdownMenuProps} props - Component props
 * @param {MenuItem[]} props.items - Array of menu items to display
 * @param {boolean} props.isOpen - Whether the dropdown is currently open
 * @returns {JSX.Element | null} Animated dropdown menu or null if closed
 * 
 * @example
 * ```tsx
 * <DropdownMenu 
 *   items={submenuItems} 
 *   isOpen={isDropdownOpen} 
 * />
 * ```
 */
function DropdownMenu({ items, isOpen }: DropdownMenuProps): JSX.Element | null {
  if (!isOpen) return null;
  
  return (
    <AnimatePresence>
      {/* Animated dropdown container */}
      <motion.ul
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        className="absolute -left-1 mt-1 w-56 rounded-b-md shadow-lg bg-white border-b border-r border-l border-gray-200 divide-y divide-gray-100 focus:outline-none z-50 overflow-hidden"
      >
        {/* Dropdown menu items with staggered animations */}
        {items.map((item: MenuItem, index: number) => (
          <motion.li
            key={item.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: index * 0.05, // 50ms stagger between items
            }}
            className="py-1"
          >
            <Link
              href={item.href}
              className="block px-4 py-2 text-base font-kohinoor font-medium text-gray-700 hover:bg-blue-50 hover:text-medium-blue transition-colors duration-150"
            >
              {item.name}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </AnimatePresence>
  )
}

export default memo(DropdownMenu);