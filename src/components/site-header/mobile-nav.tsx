'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { MobileMenuProps, MenuItem } from './types'

/**
 * MobileMenu component displays a collapsible mobile navigation menu.
 * It includes expandable submenus for items with child elements.
 * 
 * @param items - Array of menu items to display in the mobile menu
 * @param isOpen - Boolean indicating whether the mobile menu is open or closed
 */
const MobileMenu: React.FC<MobileMenuProps> = ({ items, isOpen }) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const handleSubmenuToggle = (itemName: string) => {
    setOpenSubmenu(prevOpen => prevOpen === itemName ? null : itemName)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="sm:hidden bg-white shadow-lg rounded-b-lg overflow-hidden"
        >
          <nav className="px-2 pt-2 pb-3 space-y-1">
            {items.map((item: MenuItem) => (
              <div key={item.name}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => handleSubmenuToggle(item.name)}
                      className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:text-blue-600 focus:bg-blue-50 transition duration-150 ease-in-out"
                    >
                      {item.name}
                      <ChevronDown 
                        className={`inline-block ml-2 h-4 w-4 transition-transform duration-200 ${
                          openSubmenu === item.name ? 'transform rotate-180' : ''
                        }`} 
                      />
                    </button>
                    <AnimatePresence>
                      {openSubmenu === item.name && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4"
                        >
                          {item.submenu.map((subItem: MenuItem) => (
                            <li key={subItem.name}>
                              <Link 
                                href={subItem.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:text-blue-600 focus:bg-blue-50 transition duration-150 ease-in-out"
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link 
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:text-blue-600 focus:bg-blue-50 transition duration-150 ease-in-out"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu