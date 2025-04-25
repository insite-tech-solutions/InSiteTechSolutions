/**
 * @fileoverview TailwindButton is a reusable button component styled with Tailwind CSS.
 * It supports navigation via a link and can include an optional icon.
 */

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Utility to combine Tailwind classes
const cn = (...classes: string[]) => classes.filter(Boolean).join(" ");

interface TailwindButtonProps {
  /** URL destination for the button */
  href?: string;
  /** Content inside the button */
  children?: React.ReactNode;
  /** Additional Tailwind classes to extend or override the default styling */
  className?: string;
  /** Additional Tailwind classes for the arrow icon */
  iconClassName?: string;
}

/**
 * TailwindButton component renders a styled button that navigates to a specified URL.
 * 
 * @param {TailwindButtonProps} props - Component props
 * @param {string} [props.href="/contact"] - URL destination for the button
 * @param {React.ReactNode} [props.children="Button Text"] - Content inside the button
 * @param {string} [props.className=""] - Additional Tailwind classes for button styling
 * @param {string} [props.iconClassName=""] - Additional Tailwind classes for the arrow icon
 * @returns {JSX.Element} Rendered Tailwind button component
 */
export default function TailwindButton({
  href = "/contact",
  children = "Button Text",
  className = "",
  iconClassName = "",
}: TailwindButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group w-fit inline-flex items-center text-dark-blue py-3 px-6 rounded-full shadow-md hover:bg-white hover:shadow-lg duration-300 transform transition-all hover:scale-[1.02] active:scale-[0.98] active:shadow-inner",
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