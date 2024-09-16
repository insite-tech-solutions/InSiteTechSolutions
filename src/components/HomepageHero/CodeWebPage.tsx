// CodeWebPage.tsx

"use client";

import React from 'react';
import { CursorPosition } from './types';

/**
 * Props interface for the CodeWebPage component.
 */
interface CodeWebPageProps {
  /**
   * The style object for the reveal effect.
   */
  revealStyle: React.CSSProperties;
  /**
   * The current cursor position within the element.
   */
  cursorPosition: CursorPosition;
}

/**
 * Displays the code of the MiniWebPage,
 * revealed through a circular clip path based on cursor position.
 *
 * @param props - The props for the component.
 * @returns The rendered CodeWebPage component.
 */
const CodeWebPage = React.memo(
  (props: CodeWebPageProps): JSX.Element => {
    const { revealStyle, cursorPosition } = props;

    return (
      <div
        className="absolute inset-0 bg-gray-900 text-gray-300 font-mono text-xs overflow-hidden rounded-lg"
        style={{
          clipPath: `circle(40.5px at ${cursorPosition.x}px ${cursorPosition.y}px)`,
          pointerEvents: 'none',
          zIndex: 20,
        }}
        aria-hidden="true"
      >
        <pre className="whitespace-pre-wrap p-4" style={revealStyle}>
          <code>{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>InSite Tech</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Welcome to InSite Tech</h1>
    <p>Custom web and software solutions</p>
  </header>
  <main>
    <section>
      <h2>Our Services</h2>
      <ul>
        <li>Web Development</li>
        <li>UI/UX Design</li>
        <li>Software Solutions</li>
      </ul>
    </section>
    <button>Get Started</button>
  </main>
  <script src="app.js"></script>
</body>
</html>`}</code>
        </pre>
      </div>
    );
  }
);

CodeWebPage.displayName = "CodeWebPage";
export default CodeWebPage;
