# Header Height Migration Guide

I've centralized your header height value into a CSS custom property and TypeScript constant. Here's how to migrate your existing hardcoded values:

## What I've Set Up

1. **CSS Custom Property**: `--header-height: 104px` in `src/styles/globals.css`
2. **TypeScript Constant**: `HEADER_HEIGHT = 104` in `src/lib/constants.ts`
3. **Utility Functions**: Updated `getHeaderHeight()` and `getHeaderHeightFromCSS()` in `src/lib/utils.ts`
4. **Tailwind Utilities**: Added custom classes in `src/styles/globals.css`

## Migration Options

### Option 1: Use Tailwind Utility Classes (Recommended)

Replace hardcoded values with these utility classes:

```tsx
// Before
className="mt-[104px]"
className="pt-[104px]"
className="top-[104px]"
className="h-[calc(100vh-104px)]"

// After
className="mt-header"
className="pt-header"
className="top-header"
className="h-screen-header"
```

### Option 2: Use TypeScript Constants

For JavaScript/TypeScript calculations:

```tsx
import { HEADER_HEIGHT } from '@/lib/constants';

// Before
const headerOffset = 104;
const start = 'top 128px'; // header height + padding

// After
const headerOffset = HEADER_HEIGHT;
const start = `top ${HEADER_HEIGHT + 24}px`; // header height + padding
```

### Option 3: Use Utility Functions

For dynamic calculations:

```tsx
import { getHeaderHeight } from '@/lib/utils';

// Before
const headerOffset = 104;

// After
const headerOffset = getHeaderHeight();
```

## Files to Update

Here are the files that need migration (found with hardcoded `104px` values):

<!-- 1. `src/page-templates/faq-page/hero-section.tsx` - Line 56 -->
<!-- 2. `src/page-templates/service-page/hero-section/hero-section.tsx` - Line 161 -->
<!-- 3. `src/page-templates/blog-page/hero-section.tsx` - Line 55 -->
<!-- 4. `src/page-templates/privacy-and-terms-page/hero-section.tsx` - Line 55 -->
<!-- 5. `src/page-templates/previous-works-page/hero-section.tsx` - Line 55 -->
<!-- 6. `src/page-templates/process-page/hero-section.tsx` - Line 58 -->
<!-- 7. `src/page-templates/home-page/hero-section/hero-section.tsx` - Line 102 -->
<!-- 8. `src/page-templates/contact-page/index.tsx` - Line 103 -->
<!-- 9. `src/components/insites-pages/blog-post-page.tsx` - Line 59 -->
<!-- 10. `src/page-templates/pricing-page/hero-section.tsx` - Line 78 -->
<!-- 11. `src/components/reusable-components/page-transition-loader.tsx` - Line 32 -->
<!-- 12. `src/page-templates/service-page/overview-section/service-overview.tsx` - Line 79 -->
<!-- 13. `src/page-templates/service-page/service-scope-section/core-services.tsx` - Line 243 -->
<!-- 14. `src/page-templates/service-page/process-section/process-section.tsx` - Line 279 -->

## Benefits

1. **Single Source of Truth**: Change header height in one place
2. **Type Safety**: TypeScript constants prevent typos
3. **Performance**: CSS custom properties are optimized
4. **Maintainability**: Easy to update across the entire site
5. **Consistency**: All components use the same value

## Future Changes

To change the header height site-wide, simply update:
- `--header-height` in `src/styles/globals.css`
- `HEADER_HEIGHT` in `src/lib/constants.ts`

Both values should always match! 