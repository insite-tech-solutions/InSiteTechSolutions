// scripts/generate-icon-registry.js
const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

// Function to find all icon names in your content files
function findIconNames() {
  console.log('Scanning content files for icon names...');
  
  // Find all your content files
  const contentFiles = [
    ...glob.sync('./src/content/**/*.ts'),
    ...glob.sync('./src/content/**/*.tsx'),
    ...glob.sync('./src/page-templates/**/*.ts'),
    ...glob.sync('./src/page-templates/**/*.tsx')
  ];
  console.log(`Found ${contentFiles.length} content files to scan`);
  
  // Set to store unique icon names
  const iconNames = new Set();
  
  // Process each file
  contentFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Find icon references in various formats
    const iconPatterns = [
      /icon:\s*['"]([A-Za-z0-9]+)['"]/g,           // icon: "IconName"
      /backgroundIcon:\s*['"]([A-Za-z0-9]+)['"]/g, // backgroundIcon: "IconName"
      /buttonIcon:\s*['"]([A-Za-z0-9]+)['"]/g,     // buttonIcon: "IconName"
      /decorIcon:\s*['"]([A-Za-z0-9]+)['"]/g,      // decorIcon: "IconName"
      /headerIcon:\s*['"]([A-Za-z0-9]+)['"]/g,     // headerIcon: "IconName"
      /footerIcon:\s*['"]([A-Za-z0-9]+)['"]/g,     // footerIcon: "IconName"
      /"icon":\s*['"]([A-Za-z0-9]+)['"]/g,         // "icon": "IconName" (in object literals)
      /'icon':\s*['"]([A-Za-z0-9]+)['"]/g          // 'icon': 'IconName' (in object literals)
    ];
    
    // Check each pattern
    iconPatterns.forEach(pattern => {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        iconNames.add(match[1]);
      }
    });
  });
  
  console.log(`Found ${iconNames.size} unique icons: ${Array.from(iconNames).join(', ')}`);
  return Array.from(iconNames);
}

// Function to read icons from the extra-icons-list.ts file
function readExtraIcons() {
  const extraIconsPath = path.join(process.cwd(), 'src/utils/extra-icons-list.ts');
  if (fs.existsSync(extraIconsPath)) {
    const content = fs.readFileSync(extraIconsPath, 'utf8');
    // Extract the icons array from the TypeScript file
    const match = content.match(/icons:\s*\[([^\]]+)\]/);
    if (match) {
      const icons = match[1]
        .split(',')
        .map(icon => icon.trim().replace(/['"]/g, ''));
      console.log(`Found ${icons.length} extra icons: ${icons.join(', ')}`);
      return icons;
    }
  }
  console.log('No extra icons found');
  return [];
}

// Generate the registry file
function generateRegistry(iconNames) {
  console.log('Generating icon registry file...');
  
  const registryDir = './src/utils';
  const registryPath = path.join(registryDir, 'icon-registry.ts');
  
  // Create directory if it doesn't exist
  fs.ensureDirSync(registryDir);
  
  // Generate the registry content
  const registryContent = `// AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
import {
  ${iconNames.join(',\n  ')}
} from 'lucide-react';

// Map of icon names to components
export const IconRegistry = {
${iconNames.map(name => `  '${name}': ${name}`).join(',\n')}
};

// Type for icon names
export type IconName = keyof typeof IconRegistry;

// Helper function to get an icon component from its name
export function getIcon(name: string) {
  return IconRegistry[name as IconName] || IconRegistry['Code'];
}
`;

  // Write the file
  fs.writeFileSync(registryPath, registryContent);
  console.log(`Icon registry generated at ${registryPath}`);
}

// Run the script
const iconNames = new Set([...findIconNames(), ...readExtraIcons()]);
console.log(`Total unique icons: ${iconNames.size}`);
generateRegistry(Array.from(iconNames));