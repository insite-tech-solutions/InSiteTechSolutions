# Blog Architecture Documentation

## Overview

This directory contains the content structure for the InSite Tech Solutions blog. The blog is currently in a "coming soon" state with placeholder content, but the underlying architecture is set up for future blog posts.

## File Structure

```
blog-pages/
├── README.md                    # This documentation file
├── [future-blog-posts].md       # Individual blog post markdown files
└── [future-blog-posts].json     # Blog post metadata files
```

## Architecture

### Current Implementation

The blog follows the same architectural patterns as other pages in the application:

1. **Page Route**: `/src/app/insites/blog/page.tsx` - Main blog listing page
2. **Dynamic Route**: `/src/app/insites/blog/[slug]/page.tsx` - Individual blog post pages
3. **Page Template**: `/src/page-templates/blog-page/` - Blog page template components
4. **Page Component**: `/src/components/insites-pages/blog-page.tsx` - Main blog page component
5. **Blog Post Component**: `/src/components/insites-pages/blog-post-page.tsx` - Individual blog post page component
6. **Blog Loader**: `/src/lib/blog-loader.ts` - Markdown loading and parsing utilities
7. **Blog Renderer**: `/src/components/reusable-components/blog-post-renderer.tsx` - Markdown rendering component

### Components

- **Hero Section**: Features blog-themed design with call-to-action buttons
- **Coming Soon Section**: Placeholder content with newsletter signup
- **CTA Section**: Call-to-action for business engagement

## Future Implementation

### Adding Blog Posts

When ready to add blog content, follow this structure:

1. **Create Markdown Files**: Add `.md` files in this directory
2. **Create Metadata Files**: Add corresponding `.json` files with post metadata
3. **Update Dynamic Routes**: Modify the `[slug]/page.tsx` to fetch and render actual content

### Example Blog Post Structure

```markdown
---
title: "Your Blog Post Title"
description: "A brief description of your blog post"
author: "Your Name"
publishedAt: "2024-01-15"
tags: ["technology", "development", "best-practices"]
featured: false
---

# Your Blog Post Title

Your blog post content here...

## Introduction

Start your post with an engaging introduction...

## Main Content

Add your main content with proper markdown formatting:

- **Bold text** for emphasis
- *Italic text* for subtle emphasis
- `inline code` for technical terms
- [Links](https://example.com) for references

### Code Examples

```typescript
// Your code examples here
function example() {
  return "Hello, World!";
}
```

## Conclusion

Wrap up your post with a compelling conclusion...
```

### Front-Matter Metadata

The blog system uses YAML front-matter for metadata. The metadata is automatically parsed and used for:

- **SEO optimization**: Title, description, and keywords
- **Reading time calculation**: Automatically calculated from content
- **Tag management**: For categorization and filtering
- **Featured posts**: For highlighting important content
- **Author attribution**: For proper credit and bio links

**Note**: The `slug` is automatically generated from the filename, but you can override it in the front-matter if needed.

## Features

### Current Features
- ✅ Responsive design
- ✅ Newsletter signup integration
- ✅ SEO-optimized metadata
- ✅ Dynamic routing structure
- ✅ Loading states and animations
- ✅ Consistent styling with site theme
- ✅ Markdown/MDX rendering with custom components
- ✅ Front-matter parsing and metadata extraction
- ✅ Reading time calculation
- ✅ Tag management and filtering
- ✅ Social sharing functionality
- ✅ Type-safe blog post objects

### Planned Features
- 🔄 Blog post listing with pagination
- 🔄 Search and filtering
- 🔄 Tag-based navigation
- 🔄 Related posts
- 🔄 Social sharing
- 🔄 Comments system
- 🔄 RSS feed

## Technical Notes

- Uses Next.js 15+ App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- Newsletter integration via existing components
- SEO optimization with metadata exports

## Getting Started

1. The blog page is accessible at `/insites/blog`
2. Individual posts will be accessible at `/insites/blog/[slug]`
3. The current implementation shows a "coming soon" message
4. Newsletter signup is functional and integrated

## Next Steps

1. ✅ **Blog infrastructure is ready** - All components and utilities are in place
2. ✅ **Example post created** - See `example-blog-post.md` for reference
3. 🔄 **Add your first blog post** - Create a new `.md` file with front-matter
4. 🔄 **Test the system** - Visit `/insites/blog/example-blog-post` to see it in action
5. 🔄 **Add blog listing functionality** - Implement the main blog page with post listings
6. 🔄 **Add search and filtering** - Implement tag-based filtering and search 