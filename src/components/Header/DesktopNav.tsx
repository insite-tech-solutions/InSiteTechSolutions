'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { DesktopNavProps, MenuItem } from './types'
import DropdownMenu from './DropdownMenu'

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
                className="text-gray-500 group inline-flex items-center rounded-md bg-white text-base font-medium 
                hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 px-4 py-8"
              >
                <span>{item.name}</span>
                <ChevronDown 
                  className="ml-2 h-5 w-5 text-gray-400 group-hover:text-blue-500" 
                  aria-hidden="true" 
                />
              </button>
              <div className="absolute left-0 w-full h-4 -bottom-4"></div>
              <DropdownMenu items={item.submenu} isOpen={openDropdown === item.name} />
            </div>
          ) : (
            <Link
              href={item.href}
              className="text-base font-medium text-gray-500 hover:text-blue-600 inline-flex items-center px-3 py-8"
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}

export default DesktopNav