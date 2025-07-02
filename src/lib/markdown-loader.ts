/**
 * @fileoverview Markdown Loader Utility
 *
 * Provides helper functions for loading and parsing markdown files containing legal documents.
 * The utility reads markdown files from `src/content/legal/`, extracts front-matter metadata via `gray-matter`,
 * and returns strongly typed objects representing each legal document. This allows legal pages
 * (Privacy Policy, Terms of Service, etc.) to be managed through markdown while remaining easily
 * consumable by the Next.js application.
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/**
 * Represents a single legal document with its associated metadata and markdown content.
 */
export interface LegalDocument {
  /** Document title pulled from front-matter (e.g., "Privacy Policy"). */
  title: string;
  /** Last updated date string in front-matter (e.g., "2024-03-15"). */
  lastUpdated: string;
  /** Version identifier in front-matter (e.g., "v2.1"). */
  version: string;
  /** Raw markdown content of the document (without front-matter). */
  content: string;
  /** Slug used for routing or identification (e.g., "privacy-policy"). */
  slug: string;
}

/**
 * Collection type for all legal documents keyed by slug.
 * Extends a basic record so additional documents can be added without changing the type.
 */
export interface LegalDocuments {
  privacyPolicy: LegalDocument;
  termsOfService: LegalDocument;
  [key: string]: LegalDocument;
}

/**
 * Loads and parses a legal markdown file from the `src/content/legal` directory.
 *
 * Steps:
 * 1. Builds an absolute path to the markdown file
 * 2. Reads the file contents synchronously (legal docs are small and loaded at build-time)
 * 3. Uses `gray-matter` to parse front-matter (`title`, `lastUpdated`, `version`)
 * 4. Returns a `LegalDocument` object with metadata, raw markdown body, and slug
 *
 * @param filename - Name of the markdown file (e.g., `privacy-policy.md`).
 * @param slug - Slug used to identify the document (typically the filename without extension).
 * @returns {LegalDocument} Parsed legal document ready for consumption.
 *
 * @example
 * ```typescript
 * const privacy = loadLegalMarkdown('privacy-policy.md', 'privacy-policy');
 * console.log(privacy.title); // "Privacy Policy"
 * ```
 */
function loadLegalMarkdown(filename: string, slug: string): LegalDocument {
  const filePath = path.join(process.cwd(), 'src', 'content', 'legal', filename);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  return {
    title: data.title || 'Untitled',
    lastUpdated: data.lastUpdated || 'N/A',
    version: data.version || 'N/A',
    content: content,
    slug: slug,
  };
}

/**
 * Loads all available legal documents.
 * Add new documents by placing additional markdown files in `src/content/legal` and
 * extending the returned object below.
 *
 * @returns {LegalDocuments} An object containing all parsed legal documents keyed by slug.
 *
 * @example
 * ```typescript
 * const docs = loadAllLegalDocuments();
 * console.log(docs.termsOfService.content);
 * ```
 */
export function loadAllLegalDocuments(): LegalDocuments {
  const documents: LegalDocuments = {
    privacyPolicy: loadLegalMarkdown('privacy-policy.md', 'privacy-policy'),
    termsOfService: loadLegalMarkdown('terms-of-service.md', 'terms-of-service'),
  };
  return documents;
} 