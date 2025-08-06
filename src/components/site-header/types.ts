/**
 * @fileoverview Site Header Types Module
 * 
 * Defines TypeScript interfaces and types for the site header components.
 * Provides type-safe props and data structures for navigation components
 * including desktop navigation, mobile menu, dropdown menus, and search functionality.
 * 
 * Features:
 * - Type-safe menu item structure with optional submenus
 * - Comprehensive props interfaces for all header components
 * - Support for nested navigation structures
 * - Consistent typing across desktop and mobile navigation
 * - Search button component props definition
 * - Dropdown menu state management types
 * 
 * Architecture:
 * - Centralized type definitions for header components
 * - Reusable MenuItem type for navigation structures
 * - Component-specific props interfaces
 * - Type-safe navigation state management
 * 
 * @module SiteHeaderTypes
 */

/**
 * Represents a menu item in the navigation structure
 * 
 * Defines the structure for navigation items including main menu items
 * and submenu items. Supports nested navigation for complex menu structures.
 * 
 * @typedef {Object} MenuItem
 * @property {string} name - The display name of the menu item
 * @property {string} href - The URL or path this menu item links to
 * @property {MenuItem[]} [submenu] - Optional array of sub-menu items for dropdowns
 * 
 * @example
 * ```tsx
 * const menuItem: MenuItem = {
 *   name: 'Services',
 *   href: '/services',
 *   submenu: [
 *     { name: 'Web Development', href: '/services/web-development' },
 *     { name: 'Mobile Apps', href: '/services/mobile-apps' }
 *   ]
 * }
 * ```
 */
export type MenuItem = {
    /** The display name of the menu item */
    name: string;
    /** The URL or path this menu item links to */
    href: string;
    /** Optional array of sub-menu items for dropdown navigation */
    submenu?: MenuItem[];
  };
  
  /**
   * Props for the DropdownMenu component
   * 
   * Defines the interface for dropdown menu components that display
   * submenu items in desktop navigation. Includes state management
   * for open/closed dropdown behavior.
   * 
   * @interface DropdownMenuProps
   * @property {MenuItem[]} items - Array of menu items to display in the dropdown
   * @property {boolean} isOpen - Whether the dropdown is currently open and visible
   * 
   * @example
   * ```tsx
   * <DropdownMenu 
   *   items={menuItems} 
   *   isOpen={isDropdownOpen} 
   * />
   * ```
   */
  export interface DropdownMenuProps {
    /** Array of menu items to display in the dropdown */
    items: MenuItem[];
    /** Whether the dropdown is currently open and visible */
    isOpen: boolean;
  }
  
  /**
   * Props for the MobileMenu component
   * 
   * Defines the interface for mobile navigation menu components.
   * Includes state management for mobile menu visibility and
   * callback function for closing the mobile menu.
   * 
   * @interface MobileMenuProps
   * @property {MenuItem[]} items - Array of menu items to display in the mobile menu
   * @property {boolean} isOpen - Whether the mobile menu is currently open and visible
   * @property {() => void} onClose - Function to close the mobile menu
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
  export interface MobileMenuProps {
    /** Array of menu items to display in the mobile menu */
    items: MenuItem[];
    /** Whether the mobile menu is currently open and visible */
    isOpen: boolean;
    /** Function to close the mobile menu */
    onClose: () => void;
  }
  
  /**
   * Props for the DesktopNav component
   * 
   * Defines the interface for desktop navigation components.
   * Provides menu items for desktop navigation rendering with
   * support for dropdown menus and hover interactions.
   * 
   * @interface DesktopNavProps
   * @property {MenuItem[]} menuItems - Array of menu items to display in the desktop navigation
   * 
   * @example
   * ```tsx
   * <DesktopNav menuItems={navigationItems} />
   * ```
   */
  export interface DesktopNavProps {
    /** Array of menu items to display in the desktop navigation */
    menuItems: MenuItem[];
  }
  
  /**
   * Props for the SearchButton component
   * 
   * Defines the interface for search button components in the header.
   * Includes optional styling class for customization and
   * integration with search functionality.
   * 
   * @interface SearchButtonProps
   * @property {string} [className] - Optional class name for additional styling customization
   * 
   * @example
   * ```tsx
   * <SearchButton className="custom-search-btn" />
   * ```
   */
  export interface SearchButtonProps {
    /** Optional class name for additional styling customization */
    className?: string;
  }