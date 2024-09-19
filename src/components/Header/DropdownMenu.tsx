'use client'

import React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { DropdownMenuProps, MenuItem } from './types'

/**
 * DropdownMenu component displays a list of menu items in an animated dropdown.
 * 
 * @param items - Array of menu items to display in the dropdown
 * @param isOpen - Boolean indicating whether the dropdown is open or closed
 */
const DropdownMenu: React.FC<DropdownMenuProps> = ({ items, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-50"
        >
          {items.map((item: MenuItem) => (
            <li key={item.name} className="py-1">
              <Link 
                href={item.href} 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  )
}

export default DropdownMenu