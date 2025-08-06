'use client';

import { useLayoutEffect } from 'react';

/**
 * @deprecated This component is deprecated and will be removed.
 * Header height is now managed via CSS custom property --header-height.
 * This was part of a failed implementation for dynamic header height calculation.
 * The current working version uses a single CSS variable which is more reliable.
 */
const NavbarHeightObserver = () => {
  useLayoutEffect(() => {
    const updateNavbarHeight = () => {
      const header = document.querySelector('header');
      if (header) {
        const navbarHeight = header.offsetHeight;
        document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
      }
    };

    // Initial calculation
    updateNavbarHeight();

    // Recalculate on resize
    window.addEventListener('resize', updateNavbarHeight);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateNavbarHeight);
    };
  }, []);

  return null;
};

export default NavbarHeightObserver; 