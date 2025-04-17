/**
 * Represents a menu item in the navigation.
 */
export type MenuItem = {
    /** The display name of the menu item */
    name: string;
    /** The URL or path this menu item links to */
    href: string;
    /** Optional array of sub-menu items */
    submenu?: MenuItem[];
  };
  
  /**
   * Props for the DropdownMenu component.
   */
  export interface DropdownMenuProps {
    /** Array of menu items to display in the dropdown */
    items: MenuItem[];
    /** Whether the dropdown is currently open */
    isOpen: boolean;
  }
  
  /**
   * Props for the MobileMenu component.
   */
  export interface MobileMenuProps {
    /** Array of menu items to display in the mobile menu */
    items: MenuItem[];
    /** Whether the mobile menu is currently open */
    isOpen: boolean;
  }
  
  /**
   * Props for the DesktopNav component.
   */
  export interface DesktopNavProps {
    /** Array of menu items to display in the desktop navigation */
    menuItems: MenuItem[];
  }
  
  /**
   * Props for the SearchButton component.
   */
  export interface SearchButtonProps {
    /** Optional class name for additional styling */
    className?: string;
  }