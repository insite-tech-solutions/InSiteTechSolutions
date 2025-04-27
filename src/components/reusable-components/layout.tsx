/**
 * @fileoverview Layout component provides a consistent layout structure for the application.
 * It wraps its children in a container with a minimum height and background color.
 */

// components/layout.tsx
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string; // optional for layout variants
}

/**
 * Layout component that wraps its children in a styled container.
 * 
 * @param {LayoutProps} props - Component props
 * @param {ReactNode} props.children - Elements to be rendered within the layout
 * @param {string} [props.className=""] - Optional class name for additional styling
 * @returns {JSX.Element} Rendered layout component
 */
export default function Layout({ children, className = "" }: LayoutProps) {
  return (
    <div className={`min-h-screen bg-gray-50 text-gray-900 ${className}`}>
      <div className="max-w-8xl mx-auto px-6 md:px-8 lg:px-16">{children}</div>
    </div>
  );
}