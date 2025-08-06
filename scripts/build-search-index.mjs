#!/usr/bin/env node
/**
 * @fileoverview Build Search Index Script
 *
 * This script generates a static search index from all content files in the
 * application. It is designed to be run at build time to provide a fast and
 * efficient search experience without bloating the client-side bundle.
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

/**
 * @typedef {'page' | 'service' | 'blog' | 'faq' | 'about'} SearchResultType
 */

/**
 * @typedef {object} SearchResult
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} url
 * @property {SearchResultType} type
 * @property {string[]} tags
 * @property {number} [score]
 */

/**
 * @typedef {object} FaqItem
 * @property {string} question
 * @property {string} answer
 */

const contentDir = path.join(process.cwd(), 'src/content');
const outputDir = path.join(process.cwd(), 'public');
const outputFile = path.join(outputDir, 'search-index.json');

/**
 * Extracts searchable text from a given string.
 * @param {string} content
 * @returns {string}
 */
function extractText(content) {
  return content;
}

/**
 * Maps a file path to a URL and content type.
 * @param {string} filePath
 * @returns {{ url: string; type: SearchResultType; serviceKey?: string }}
 */
function mapPathToUrl(filePath) {
  const relativePath = path.relative(contentDir, filePath);
  
  if (relativePath.startsWith('service-pages')) {
    const parts = relativePath.split(path.sep);
    const serviceKey = parts[1];
    // A more robust regex-based replacement for cleaner URLs
    const urlKey = serviceKey
      .replace('-and-', '-')
      .replace('-solutions', '')
      .replace('-development', '-dev');
    return { url: `/services/${urlKey}`, type: 'service', serviceKey };
  }
  
  if (relativePath.startsWith('about-pages')) {
    const parts = relativePath.split(path.sep);
    const pageKey = parts[1].replace('-page', '');
    return { url: `/about/${pageKey}`, type: 'about' };
  }

  if (relativePath.startsWith('faq-page')) {
    return { url: '/insites/faq', type: 'faq' };
  }

  return { url: '/', type: 'page' };
}

async function buildIndex() {
  console.log('Starting to build search index...');

  /** @type {SearchResult[]} */
  const index = [];
  const files = await glob(`${contentDir}/**/*.ts`);

  for (const file of files) {
    const fileContent = fs.readFileSync(file, 'utf-8');
    
    // This regex is simplified to find exported objects.
    const matches = fileContent.match(/export const \w+.*?= ({[\s\S]*?});/gs);

    if (matches) {
      for (const match of matches) {
        try {
          // This is a bit of a hack to evaluate the object string.
          // It's safe here because we control the content files.
          const objectStr = match.substring(match.indexOf('{'));
          const content = (new Function(`return ${objectStr}`))();
          
          if (content.title && content.description) {
            const { url, type, serviceKey } = mapPathToUrl(file);
            index.push({
              id: path.basename(file, '.ts'),
              title: extractText(content.title),
              description: extractText(content.description),
              url,
              type,
              tags: content.tags || [serviceKey, type].filter(Boolean),
              score: 1.0,
            });
          }

          if (content.items && Array.isArray(content.items)) {
            /** @type {FaqItem[]} */
            const items = content.items;
            items.forEach((item, idx) => {
              if(item.question && item.answer) {
                 const { url } = mapPathToUrl(file);
                 const sectionId = path.basename(file, '.ts').replace('-content','').replace('-faq','');
                 index.push({
                    id: `${sectionId}-${idx}`,
                    title: item.question,
                    description: item.answer,
                    url: `${url}#${sectionId}`,
                    type: 'faq',
                    tags: ['faq', 'question', 'answer'],
                    score: 0.8
                 });
              }
            });
          }

        } catch (e) {
          // console.warn(`Could not parse content from ${file}. Error: ${e.message}`);
        }
      }
    }
  }

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputFile, JSON.stringify(index, null, 2));

  console.log(`✅ Search index built successfully with ${index.length} entries.`);
  console.log(`Index file created at: ${outputFile}`);
}

buildIndex().catch(error => {
  console.error('Failed to build search index:', error);
  process.exit(1);
}); 