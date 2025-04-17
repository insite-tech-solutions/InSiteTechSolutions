// hooks/useResponsiveValue.ts
import { useBreakpoint, Breakpoint } from './useBreakpoint';

type ResponsiveConfig<T> = {
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
  default: T;
};

export const useResponsiveValue = <T>(config: ResponsiveConfig<T>): T => {
  const { breakpoint } = useBreakpoint();
  
  // Return value for current breakpoint, or fallback to larger breakpoints or default
  if (config[breakpoint]) return config[breakpoint]!;
  
  // Try to find the next largest breakpoint that has a value
  const breakpoints: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
  const currentIndex = breakpoints.indexOf(breakpoint);
  
  // Look for larger breakpoints with values
  for (let i = currentIndex + 1; i < breakpoints.length; i++) {
    const largerBreakpoint = breakpoints[i];
    if (config[largerBreakpoint]) return config[largerBreakpoint]!;
  }
  
  // If no matching or larger breakpoint values found, return default
  return config.default;
};