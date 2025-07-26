'use client';

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
          {items.map((item: MenuItem, index: number) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: index * 0.05,
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
      )}
    </AnimatePresence>
  )
}

export default DropdownMenu