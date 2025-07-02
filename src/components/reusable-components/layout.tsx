/**
 * @fileoverview Reusable Layout Component
 *
 * A foundational layout component that provides a consistent structural wrapper for various sections
 * or pages across the application. It ensures a uniform minimum height, background styling,
 * and content centering, acting as a base for building responsive and visually cohesive UIs.
 */

// components/layout.tsx
import { ReactNode } from "react";

/**
 * Props for the Layout component.
 */
interface LayoutProps {
  /** The child elements to be rendered within the layout container. */
  children: ReactNode;
  /** Optional. A string of additional CSS class names to apply to the main layout div for custom styling or variants. Defaults to an empty string. */
  className?: string; // optional for layout variants
}

/**
 * Layout component
 *
 * A versatile React component that establishes a base layout for its children. It ensures
 * content is centered within a maximum width, maintains a minimum screen height, and applies
 * a default background color. The `className` prop allows for easy extension and customization
 * of the layout's appearance for different use cases.
 * 
 * Features:
 * - **Consistent Structure**: Provides a standardized outer wrapper for content.
 * - **Responsive Centering**: Automatically centers content up to a maximum width.
 * - **Minimum Height**: Ensures the layout takes at least the full viewport height.
 * - **Default Styling**: Applies a default background color and text styling.
 * - **Customizable**: Easily extended with additional Tailwind CSS classes via the `className` prop.
 *
 * @param {LayoutProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered layout component with its children.
 *
 * @example
 * ```tsx
 * import Layout from '@/components/reusable-components/layout';
 *
 * // Basic usage
 * <Layout>
 *   <h1>Welcome to My Page</h1>
 *   <p>This content is within the default layout.</p>
 * </Layout>
 *
 * // Usage with custom background color and padding
 * <Layout className="bg-blue-100 py-10">
 *   <p>This layout has a custom blue background and extra vertical padding.</p>
 * </Layout>
 *
 * // Layout wrapping a section
 * <Layout>
 *   <section className="my-8">
 *     <h2>Section Title</h2>
 *     <p>Some section content here.</p>
 *   </section>
 * </Layout>
 * ```
 */
export default function Layout({ children, className = "" }: LayoutProps): JSX.Element {
  return (
    <div className={`min-h-screen bg-gray-50 text-gray-900 ${className}`}>
      <div className="max-w-8xl mx-auto px-3 md:px-8 lg:px-16">{children}</div>
    </div>
  );
}