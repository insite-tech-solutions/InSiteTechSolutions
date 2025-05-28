// Brand colors for InSite Tech Solutions emails
// These match the website's color system from tailwind.config.ts

export const brandColors = {
  // Primary Blues (from tailwind config)
  secondary: '#1472bb',      // dark-blue
  primaryHover: '#1764b8', // dark-blue-alt
  primary: '#0e72c8',    // medium-blue
  accent: '#0173e3',       // mild-blue (homepage hero blue)
  light: '#2398ff',        // light-blue
  
  // Greys (from tailwind config)
  darkGrey: '#54585b',     // dark-grey
  mediumGrey: '#898685',   // medium-grey
  lightGrey: '#a7a8a8',   // light-grey
  veryLightGrey: '#d9d9d9', // very-light-grey
  
  // Semantic colors
  text: {
    primary: '#111827',     // Dark text
    secondary: '#374151',   // Medium text
    muted: '#6b7280',       // Light text
    light: '#ffffff',       // White text
  },
  
  // Background colors
  background: {
    primary: '#ffffff',     // White background
    secondary: '#f9fafb',   // Light grey background
    card: '#ffffff',        // Card background
    border: '#e5e7eb',      // Border color
  },
  
  // Status colors
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
} as const;

export type BrandColors = typeof brandColors; 