/**
 * @fileoverview Reusable Tailwind Hero Background Component
 *
 * A versatile and flexible hero section wrapper designed with Tailwind CSS.
 * This component provides a gradient background and supports the inclusion of optional
 * decorative elements (circles, squares, and icons) to create dynamic and visually rich hero areas.
 * It is highly customizable through props, allowing for diverse applications across the website.
 */
"use client";
import { ReactNode, useMemo, memo } from 'react';
import { DecorElement } from '@/page-templates/service-page/types';

/**
 * A utility function to conditionally join Tailwind CSS classes.
 * It filters out any falsy values and concatenates the remaining strings with a space.
 * This helps in building dynamic class names for components.
 *
 * @param {...string[]} classes - A list of Tailwind CSS class strings.
 * @returns {string} A single string containing valid Tailwind CSS classes.
 *
 * @example
 * ```typescript
 * cn("bg-blue-500", isActive && "text-white", "p-4"); // "bg-blue-500 text-white p-4"
 * ```
 */
const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Props for the TailwindHeroBackground component.
 */
interface TailwindHeroBackgroundProps {
  /** The main content to be rendered inside the hero section. */
  children: ReactNode;
  /** Optional. Additional Tailwind CSS classes to apply to the main `section` element for custom styling. */
  className?: string;
  /** Optional. An array of `DecorElement` objects to render decorative shapes or icons in the background. */
  decorElements?: DecorElement[];
}

/**
 * TailwindHeroBackground component
 *
 * Renders a flexible hero section with a gradient background and an optional array of decorative
 * elements (circles, squares, and icons). The component is designed to be a presentational wrapper
 * for hero content, providing a visually engaging backdrop for introductory sections.
 *
 * Features:
 * - **Gradient Background**: Applies a `bg-gradient-to-br` from blue-500 to blue-700 by default.
 * - **Customizable Styling**: Allows overriding default styles via the `className` prop.
 * - **Decorative Elements**: Supports rendering dynamic decorative shapes and icons based on the `decorElements` prop.
 *   - `type: 'circle'` or `type: 'square'` for simple shapes.
 *   - `type: 'icon'` with an `Icon` component for SVG icons (e.g., from `lucide-react`).
 * - **Content Slot**: Renders `children` within a centered container on top of the background and decor.
 * - **Responsive Design**: Ensures proper sizing and overflow handling across various screen sizes.
 * - **Memoization**: Utilizes `memo` for performance optimization, preventing unnecessary re-renders.
 *
 * @param {TailwindHeroBackgroundProps} props - The properties passed to the component.
 * @returns {JSX.Element} The rendered hero background component with its children and decorative elements.
 *
 * @example
 * ```tsx
 * import { Sparkles, Star } from 'lucide-react'; // Example icons
 * import TailwindHeroBackground from '@/components/reusable-components/tailwind-hero-background';
 *
 * const decorElements = [
 *   { type: 'circle', className: 'bg-blue-400 opacity-30', style: { top: '10%', left: '15%', width: '80px', height: '80px' } },
 *   { type: 'square', className: 'bg-purple-400 opacity-20', style: { bottom: '5%', right: '10%', width: '100px', height: '100px' } },
 *   { type: 'icon', icon: Sparkles, size: 64, className: 'text-yellow-300 opacity-50', style: { top: '20%', right: '25%' } },
 *   { type: 'icon', icon: Star, size: 48, className: 'text-white opacity-40', style: { bottom: '15%', left: '30%' } },
 * ];
 *
 * <TailwindHeroBackground decorElements={decorElements}>
 *   <h1 className="text-white text-4xl font-bold text-center">Our Amazing Services</h1>
 *   <p className="text-white/80 text-lg text-center mt-4">Discover how we can help your business thrive.</p>
 * </TailwindHeroBackground>
 *
 * // Simple usage without decorative elements
 * <TailwindHeroBackground className="from-green-500 to-emerald-700">
 *   <h1 className="text-white text-5xl">Welcome!</h1>
 * </TailwindHeroBackground>
 * ```
 */
const TailwindHeroBackground = ({
  children,
  className = "",
  decorElements = [],
}: TailwindHeroBackgroundProps): JSX.Element => {
  const renderedDecorElements = useMemo(() => {
    return decorElements.map((element, index) => {
      const { type, className: elementClass = "", style = {}, icon: Icon, size = 48 } = element;

      if (type === 'circle') {
        return (
          <div
            key={`decor-${index}`}
            className={cn('rounded-full absolute', elementClass)}
            style={style}
          />
        );
      } else if (type === 'square') {
        return (
          <div
            key={`decor-${index}`}
            className={cn('rounded-lg absolute', elementClass)}
            style={style}
          />
        );
      } else if (type === 'icon' && Icon) {
        return (
          <div
            key={`decor-${index}`}
            className={cn('absolute', elementClass)}
            style={style}
          >
            <Icon size={size} />
          </div>
        );
      }
      return null;
    });
  }, [decorElements]);

  return (
    <section 
      aria-hidden="true"
      className={cn(
        'relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700',
        className
      )}
      style={{ 
        minHeight: `calc(100vh - 104px)`,
        maxHeight: '1248px'
      }}
    >
      {/* Decorative elements */}
      {decorElements.length > 0 && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {renderedDecorElements}
        </div>
      )}
      
      {/* Content container */}
      <div className="container max-w-full relative z-10">
        {children}
      </div>
    </section>
  );
};

export default memo(TailwindHeroBackground);