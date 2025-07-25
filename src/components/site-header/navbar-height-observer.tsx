'use client';

import { useLayoutEffect } from 'react';

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