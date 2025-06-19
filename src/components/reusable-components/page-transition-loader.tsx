/**
 * @fileoverview Page Transition Loader Overlay Component
 *
 * A full-screen overlay loader designed to indicate page transitions or loading states.
 * It displays a set of animated pulsing dots centered on the screen, using custom CSS keyframes
 * for a smooth, modern loading effect. Intended for use with route transitions or async page loads.
 */

/**
 * PageTransitionLoader component
 *
 * Renders a fixed, full-viewport overlay with three animated pulsing dots to visually indicate
 * that a page transition or loading event is in progress. The loader uses custom CSS keyframes
 * for a staggered pulse animation and is styled for high visibility and accessibility.
 *
 * Features:
 * - **Full-Screen Overlay**: Covers the viewport (except for a fixed header offset) to block interaction during loading.
 * - **Animated Dots**: Three colored dots pulse in sequence for a modern loading effect.
 * - **Customizable Colors**: Uses Tailwind CSS color classes for easy theme integration.
 * - **High Z-Index**: Ensures the loader appears above all other content.
 * - **Accessible**: Uses semantic HTML and clear visual cues for users.
 *
 * @returns {JSX.Element} The rendered page transition loader overlay.
 *
 * @example
 * ```tsx
 * // Show the loader during route transitions
 * {isLoading && <PageTransitionLoader />}
 * ```
 */
export default function PageTransitionLoader(): JSX.Element {
  return (
    <div className="fixed left-0 right-0 top-[104px] h-[calc(100vh-104px)] z-[9999] flex flex-col items-center justify-center bg-gray-900 transition-opacity duration-100 opacity-100" id="page-transition-loader">
      {/* Pulse dots */}
      <div className="flex space-x-3">
        <div className="w-5 h-5 bg-light-blue rounded-full animate-loader-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="w-5 h-5 bg-medium-blue rounded-full animate-loader-pulse" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-5 h-5 bg-dark-blue-alt rounded-full animate-loader-pulse" style={{ animationDelay: '0.2s' }}></div>
      </div>
      <style jsx global>{`
        @keyframes loader-pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.75);
          }
        }
        .animate-loader-pulse {
          animation: loader-pulse 1.2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}