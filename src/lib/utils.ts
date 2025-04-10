
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getHeaderHeight = () => {
  const header = document.querySelector('header');
  return header ? header.offsetHeight : 0;
};