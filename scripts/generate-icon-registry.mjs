/**
 * @fileoverview Script for Generating a Dynamic Icon Registry
 *
 * This build script automates the creation of an icon registry from `lucide-react`.
 * It scans the project's content files to find all icon names referenced,
 * combines them with a list of manually specified icons, and then generates a
 * TypeScript file (`src/utils/icon-registry.ts`) that exports an object mapping
 * these icon names to their respective `lucide-react` components.
 *
 * Purpose:
 * - **Tree-Shaking and Performance**: By creating a registry of only the icons
 *   used in the project, we can avoid bundling the entire `lucide-react` library,
 *   significantly reducing the final bundle size.
 * - **Centralized Icon Management**: Provides a single source of truth for all icons
 *   used in the application, making it easier to manage and reference them.
 * - **Automation**: Eliminates the need to manually maintain the list of icon imports.
 *
 * How to Run:
 * This script is intended to be run during the build process or manually when new icons are added.
 * It can be executed with Node.js:
 * `node scripts/generate-icon-registry.mjs`
 *
 * Technical Implementation:
 * - Uses `glob` to find all content and page template files.
 * - Uses `fs-extra` to read file contents and ensure directories exist.
 * - Employs regex to find icon references (e.g., `icon: 'IconName'`).
 * - Reads an additional list of icons from `src/utils/extra-icons-list.ts` for icons that cannot be detected by the scanner.
 * - Uses a `Set` to ensure the final list of icons is unique.
 * - Generates a TypeScript file with dynamic imports and an `IconRegistry` map.
 */
import fs from 'fs-extra';
import path from 'path';
import { globSync } from 'glob';

/**
 * Scans content and page template files to find references to `lucide-react` icon names.
 * It uses a set of predefined regex patterns to match different ways icons might be referenced in the code.
 *
 * @returns {string[]} An array of unique icon names found in the content files.
 */
function findIconNames() {
  console.log('Scanning content files for icon names...');
  
  // Define glob patterns to find all relevant content files
  const contentFiles = [
    ...globSync('./src/content/**/*.ts'),
    ...globSync('./src/content/**/*.tsx'),
    ...globSync('./src/page-templates/**/*.ts'),
    ...globSync('./src/page-templates/**/*.tsx')
  ];
  console.log(`Found ${contentFiles.length} content files to scan`);
  
  // Use a Set to store unique icon names automatically
  const iconNames = new Set();
  
  // Process each file to find icon references
  contentFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Define regex patterns to find icon references in various formats
    const iconPatterns = [
      /icon:\s*['"]([A-Za-z0-9]+)['"]/g,           // e.g., icon: "IconName"
      /backgroundIcon:\s*['"]([A-Za-z0-9]+)['"]/g, // e.g., backgroundIcon: "IconName"
      /buttonIcon:\s*['"]([A-Za-z0-9]+)['"]/g,     // e.g., buttonIcon: "IconName"
      /decorIcon:\s*['"]([A-Za-z0-9]+)['"]/g,      // e.g., decorIcon: "IconName"
      /headerIcon:\s*['"]([A-Za-z0-9]+)['"]/g,     // e.g., headerIcon: "IconName"
      /footerIcon:\s*['"]([A-Za-z0-9]+)['"]/g,     // e.g., footerIcon: "IconName"
      /"icon":\s*['"]([A-Za-z0-9]+)['"]/g,         // e.g., "icon": "IconName" (in object literals)
      /'icon':\s*['"]([A-Za-z0-9]+)['"]/g          // e.g., 'icon': 'IconName' (in object literals)
    ];
    
    // Check each pattern and add found icon names to the set
    iconPatterns.forEach(pattern => {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        iconNames.add(match[1]);
      }
    });
  });
  
  console.log(`Found ${iconNames.size} unique icons from scanner: ${Array.from(iconNames).join(', ')}`);
  return Array.from(iconNames);
}

/**
 * Reads a manually maintained list of icons from `src/utils/extra-icons-list.ts`.
 * This function is useful for including icons that are not directly referenced in a way
 * that the regex scanner can detect (e.g., icons determined dynamically at runtime).
 *
 * @returns {string[]} An array of icon names found in the extra icons list. Returns an empty array if the file doesn't exist or no icons are found.
 */
function readExtraIcons() {
  const extraIconsPath = path.join(process.cwd(), 'src/utils/extra-icons-list.ts');
  if (fs.existsSync(extraIconsPath)) {
    const content = fs.readFileSync(extraIconsPath, 'utf8');
    // Extract the icons array from the TypeScript file using regex
    const match = content.match(/icons:\s*\[([^\]]+)\]/);
    if (match) {
      const icons = match[1]
        .split(',')
        .map(icon => icon.trim().replace(/['"]/g, ''));
      console.log(`Found ${icons.length} extra icons: ${icons.join(', ')}`);
      return icons.filter(Boolean); // Filter out any empty strings
    }
  }
  console.log('No extra icons file found or file is empty.');
  return [];
}

/**
 * Generates the `icon-registry.ts` file.
 * This file contains the `IconRegistry` object, which maps icon names to their
 * corresponding `lucide-react` components, along with related types and a helper function.
 * The file is marked as auto-generated and should not be edited manually.
 *
 * @param {string[]} iconNames - An array of unique icon names to include in the registry.
 */
function generateRegistry(iconNames) {
  console.log('Generating icon registry file...');
  
  const registryDir = './src/utils';
  const registryPath = path.join(registryDir, 'icon-registry.ts');
  
  // Ensure the target directory exists before writing the file
  fs.ensureDirSync(registryDir);
  
  // Generate the dynamic content for the registry file
  const registryContent = `// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// This file is generated by the 'scripts/generate-icon-registry.mjs' script.
// To add new icons, reference them in your content files or add them to 'src/utils/extra-icons-list.ts'.
import {
  ${iconNames.join(',\n  ')}
} from 'lucide-react';

// Map of icon names to their corresponding 'lucide-react' components
export const IconRegistry = {
${iconNames.map(name => `  '${name}': ${name}`).join(',\n')}
};

// Type definition for valid icon names, derived from the IconRegistry keys
export type IconName = keyof typeof IconRegistry;

// Helper function to retrieve an icon component by its name.
// Provides a fallback to the 'Code' icon if the requested icon name is not found.
export function getIcon(name: string) {
  return IconRegistry[name as IconName] || IconRegistry['Code'];
}
`;

  // Write the generated content to the file
  fs.writeFileSync(registryPath, registryContent);
  console.log(`Icon registry successfully generated at ${registryPath}`);
}

// Main script execution block
const iconNamesFromScanner = findIconNames();
const extraIconNames = readExtraIcons();

// Combine the lists of icons and ensure uniqueness using a Set
const allIconNames = new Set([...iconNamesFromScanner, ...extraIconNames]);

console.log(`Total unique icons to be registered: ${allIconNames.size}`);

// Generate the final icon registry file
generateRegistry(Array.from(allIconNames));