// components/layout.tsx
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string; // optional for layout variants
}

export default function Layout({ children, className = "" }: LayoutProps) {
  return (
    <div className={`min-h-screen bg-gray-500 text-gray-900 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-16">{children}</div>
    </div>
  );
}