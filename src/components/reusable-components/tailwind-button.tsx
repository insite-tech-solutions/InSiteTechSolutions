/**
 * @fileoverview Reusable Tailwind-Styled Button Component
 *
 * A highly customizable button component designed with Tailwind CSS for consistent styling and behavior.
 * It acts as a navigational link, optionally includes an animated arrow icon, and supports
 * various hover and active states for an enhanced user experience.
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
const cn = (...classes: string[]) => classes.filter(Boolean).join(" ");

/**
 * Props for the TailwindButton component.
 */
interface TailwindButtonProps {
  /** Optional. The URL destination for the button. Defaults to "/contact". */
  href?: string;
  /** Optional. The content to be rendered inside the button, typically a string or ReactNode. Defaults to "Button Text". */
  children?: React.ReactNode;
  /** Optional. Additional Tailwind CSS classes to extend or override the default styling of the button's main container. */
  className?: string;
  /** Optional. Additional Tailwind CSS classes specifically for the arrow icon within the button. */
  iconClassName?: string;
}

/**
 * TailwindButton component
 *
 * Renders a visually appealing button that functions as a `Next.js` link. The button is pre-styled
 * with Tailwind CSS, including hover effects, shadows, and an animated arrow icon that slides
 * on hover.
 *
 * Features:
 * - **Navigational Link**: Behaves as a `Next.js` `<Link>` component for client-side transitions.
 * - **Styling**: Applies default Tailwind CSS classes for consistent appearance.
 * - **Hover Effects**: Includes subtle scale and shadow animations on hover.
 * - **Active State**: Provides a distinct visual feedback when clicked.
 * - **Arrow Icon**: Comes with a built-in `lucide-react` `ArrowRight` icon that animates on hover.
 * - **Customizable**: Allows overriding default styles and icon styles via `className` and `iconClassName` props.
 *
 * @param {TailwindButtonProps} props - The properties passed to the component.
 * @param {string} props.href - The URL destination for the button.
 * @param {React.ReactNode} props.children - The content to be rendered inside the button.
 * @param {string} props.className - Additional Tailwind CSS classes to extend or override the default styling of the button's main container.
 * @param {string} props.iconClassName - Additional Tailwind CSS classes specifically for the arrow icon within the button.
 * @returns {JSX.Element} The rendered Tailwind-styled button component.
 *
 * @example
 * ```tsx
 * import TailwindButton from '@/components/reusable-components/tailwind-button';
 *
 * // Basic button linking to /about
 * <TailwindButton href="/about">Learn More About Us</TailwindButton>
 *
 * // Custom button text with default link
 * <TailwindButton>Contact Our Team</TailwindButton>
 *
 * // Button with custom styling
 * <TailwindButton className="bg-purple-600 text-white hover:bg-purple-700">
 *   Custom Styled Button
 * </TailwindButton>
 *
 * // Button with custom icon styling (e.g., larger arrow)
 * <TailwindButton iconClassName="h-6 w-6">
 *   View Details
 * </TailwindButton>
 * ```
 */
export default function TailwindButton({
  href = "/contact",
  children = "Button Text",
  className = "",
  iconClassName = "",
}: TailwindButtonProps): JSX.Element {
  return (
    <Link
      href={href}
      className={cn(
        "group w-fit inline-flex items-center text-medium-blue py-3 px-6 rounded-full shadow-md hover:bg-white hover:shadow-lg duration-300 transform transition-all hover:scale-[1.02] active:scale-[0.98] active:shadow-inner",
        className
      )}
    >
      <span>{children}</span>
      <ArrowRight
        className={cn(
          "ml-2 h-5 w-5 transform transition-all duration-300 ease-in-out group-hover:translate-x-2",
          iconClassName
        )}
      />
    </Link>
  );
}