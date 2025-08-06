/**
 * @fileoverview Code WebPage Component for Hero Section
 *
 * This component creates a code reveal overlay that displays HTML code
 * through a circular clip path based on cursor position. It provides
 * an interactive code preview effect for the hero section.
 *
 * Features:
 * - Dynamic circular reveal based on cursor position
 * - HTML code preview with syntax highlighting
 * - Smooth clip path animations
 * - Accessibility considerations
 * - Performance optimizations with memo
 *
 * @module CodeWebPage
 */

"use client";

import { memo, CSSProperties } from 'react';
import { CursorPosition } from './types';

/**
 * Props interface for the CodeWebPage component
 * 
 * @interface CodeWebPageProps
 * @property {CSSProperties} revealStyle - The style object for the reveal effect
 * @property {CursorPosition} cursorPosition - The current cursor position within the element
 */
interface CodeWebPageProps {
  /**
   * The style object for the reveal effect.
   */
  revealStyle: CSSProperties;
  /**
   * The current cursor position within the element.
   */
  cursorPosition: CursorPosition;
}

/**
 * CodeWebPage Component
 * 
 * Displays the code of the MiniWebPage, revealed through a circular clip path
 * based on cursor position. Creates an interactive code preview effect that
 * follows the user's cursor movement.
 * 
 * The component renders an HTML code snippet with proper formatting and
 * applies a circular clip path that reveals the code content based on
 * the current cursor coordinates. This creates a "magnifying glass" effect
 * that shows the underlying code structure.
 * 
 * @param {CodeWebPageProps} props - Component props
 * @param {CSSProperties} props.revealStyle - Style object for reveal effect
 * @param {CursorPosition} props.cursorPosition - Current cursor position coordinates
 * @returns {JSX.Element} Rendered code reveal overlay component
 * 
 * @example
 * ```tsx
 * <CodeWebPage 
 *   revealStyle={{ opacity: 0.9 }}
 *   cursorPosition={{ x: 100, y: 150 }}
 * />
 * ```
 */
const CodeWebPage = memo(function CodeWebPage({
  revealStyle,
  cursorPosition,
}: CodeWebPageProps): JSX.Element {
  // Ensure cursor position is valid to prevent hydration mismatches
  const isValidPosition = cursorPosition.x >= 0 && cursorPosition.y >= 0;
  const clipPath = isValidPosition 
    ? `circle(40.5px at ${cursorPosition.x}px ${cursorPosition.y}px)`
    : 'circle(40.5px at 0px 0px)';

  return (
    <>
      {/* Code Reveal Overlay */}
      <div
        className="absolute inset-0 bg-gray-900 text-gray-300 font-mono overflow-hidden rounded-lg"
        style={{
          clipPath,
          pointerEvents: 'none',
          zIndex: 20,
        }}
        aria-hidden="true"
      >
        <pre className="whitespace-pre-wrap p-4 ml-4 mt-4" style={revealStyle}>
          <code>{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>InSite Tech</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="content-area">
      <h1>Welcome to InSite Tech</h1>
      <p>Unlock the potential of your business with solutions crafted to drive innovation, streamline operations, and elevate your digital presence.</p>
      
      <div class="services-grid">
        <div class="service-item">
          <span>Web Development</span>
        </div>
        <div class="service-item">
          <span>Data Analytics</span>
        </div>
        <div class="service-item">
          <span>Custom Software</span>
        </div>
        <div class="service-item">
          <span>Branding & Design</span>
        </div>
      </div>
      
      <button class="cta-button">Get Started</button>
    </div>
  <script src="app.js"></script>
</body>
</html>`}</code>
        </pre>
      </div>
    </>
  );
});

export default CodeWebPage;
