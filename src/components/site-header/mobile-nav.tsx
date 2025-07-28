/**
 * @fileoverview Mobile Navigation Component
 * 
 * Provides mobile navigation menu with expandable submenus and integrated search.
 * Uses Framer Motion for smooth animations and includes accessible navigation features.
 * 
 * Features:
 * - Mobile-responsive navigation with expandable submenus
 * - Integrated search functionality with form submission
 * - Smooth animations with Framer Motion
 * - Accessibility support with proper ARIA attributes
 * - Performance optimized with React.memo
 * - Type-safe props using MobileMenuProps interface
 * 
 * @module MobileNav
 */
'use client';

import { useState, memo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, ArrowRight } from 'lucide-react';
import { MobileMenuProps, MenuItem } from './types';

/**
 * MobileMenu component displays mobile navigation with expandable submenus
 * 
 * Renders a mobile navigation menu with expandable submenu sections and
 * integrated search functionality. Uses Framer Motion for smooth animations
 * and provides accessible navigation with proper ARIA attributes.
 * 
 * Key Features:
 * - Expandable submenu sections with chevron indicators
 * - Integrated search form with navigation
 * - Smooth animations for submenu expansion
 * - Accessibility support with proper landmarks
 * - Mobile-optimized touch interactions
 * 
 * State Management:
 * - Tracks open submenu with openSubmenu state
 * - Manages search query input state
 * - Handles form submission and navigation
 * 
 * @param {MobileMenuProps} props - Component props
 * @param {MenuItem[]} props.items - Array of menu items to display
 * @param {boolean} props.isOpen - Whether the mobile menu is currently open
 * @param {() => void} props.onClose - Function to close the mobile menu
 * @returns {JSX.Element} Mobile navigation menu component
 * 
 * @example
 * ```tsx
 * <MobileMenu 
 *   items={menuItems} 
 *   isOpen={isMobileMenuOpen} 
 *   onClose={handleCloseMobileMenu} 
 * />
 * ```
 */
function MobileMenu({ items, isOpen, onClose }: MobileMenuProps): JSX.Element {
  // Track which submenu is currently open
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  // Search query state for integrated search
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  /**
   * Toggles submenu expansion for mobile navigation
   * 
   * @param {string} itemName - The name of the menu item to toggle
   */
  const handleSubmenuToggle = (itemName: string) => {
    setOpenSubmenu(prevOpen => (prevOpen === itemName ? null : itemName));
  };

  /**
   * Handles search form submission and navigation
   * 
   * Navigates to search results page and closes mobile menu
   * after successful search submission.
   * 
   * @param {React.FormEvent} e - Form submission event
   */
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      // Reset search input and close menu after navigation
      setSearchQuery('');
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Accessible landmark for Mobile Navigation */}
          <section aria-labelledby="mobile-nav-section-title">
            <h2 id="mobile-nav-section-title" className="sr-only">
              Mobile Navigation Menu
            </h2>
            {/* Animated mobile menu container */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="sm:hidden bg-white shadow-lg rounded-b-lg overflow-hidden"
            >
              {/* Navigation items and search form */}
              <nav className="px-2 pt-2 pb-3 space-y-1">
                {items.map((item: MenuItem) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      // Expandable submenu item
                      <div>
                        <button
                          onClick={() => handleSubmenuToggle(item.name)}
                          className="w-full text-left block px-3 py-2 rounded-md text-lg font-kohinoor font-semibold text-gray-700 hover:text-medium-blue hover:bg-blue-50 focus:outline-none focus:text-medium-blue focus:bg-blue-50 transition duration-150 ease-in-out"
                        >
                          {item.name}
                          <ChevronDown
                            className={`inline-block ml-2 h-4 w-4 transition-transform duration-200 ${
                              openSubmenu === item.name ? 'transform rotate-180' : ''
                            }`}
                          />
                        </button>
                        {/* Animated submenu expansion */}
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
                                    className="block px-3 py-2 rounded-md text-lg font-kohinoor font-medium text-gray-700 hover:text-medium-blue hover:bg-blue-50 focus:outline-none focus:text-medium-blue focus:bg-blue-50 transition duration-150 ease-in-out"
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
                      // Regular navigation link without submenu
                      <Link
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-lg font-kohinoor font-semibold text-gray-700 hover:text-medium-blue hover:bg-blue-50 focus:outline-none focus:text-medium-blue focus:bg-blue-50 transition duration-150 ease-in-out"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Integrated search form */}
                <div className="pt-4 mt-4 border-t border-gray-200">
                  <form onSubmit={handleSearchSubmit} className="px-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-medium-blue" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        placeholder="Search services, articles..."
                        className="w-full pl-10 pr-12 py-3 text-gray-700 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-mild-blue focus:border-mild-blue outline-none transition-all duration-200"
                        autoComplete="off"
                      />
                      <button
                        type="submit"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 hover:text-mild-blue-alt transition-colors duration-200"
                        aria-label="Search"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    </div>
                  </form>
                </div>
              </nav>
            </motion.div>
          </section>
        </>
      )}
    </AnimatePresence>
  );
}

export default memo(MobileMenu);