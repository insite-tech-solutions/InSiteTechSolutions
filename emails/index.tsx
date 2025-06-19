/**
 * @fileoverview Email Templates, Components, and Utilities Index.
 *
 * This index file serves as a central point for exporting all email-related
 * templates, reusable components, and style system definitions.
 * It simplifies imports for other parts of the application that need to use
 * or render emails, ensuring a clean and organized structure for email management.
 *
 * Purpose:
 * - **Centralized Exports**: Provides a single point of access for all email assets.
 * - **Modularity**: Organizes email-related code into a coherent, easily manageable structure.
 * - **Simplifies Imports**: Reduces the verbosity of import statements in consuming files.
 *
 * Contents:
 * - **Email Templates**: Re-exports specific email templates (e.g., confirmation, welcome).
 * - **Email Components**: Re-exports reusable UI components used within emails (e.g., header, footer).
 * - **Brand System**: Re-exports color palettes and base email styles for consistent branding.
 */

// Email Templates - Re-exporting all distinct email layout templates
export { ContactConfirmation } from './templates/contact-confirmation';
export { NewsletterConfirm } from './templates/newsletter-confirmation';
export { NewsletterWelcome } from './templates/newsletter-welcome';
export { ContactNotification } from './templates/contact-notification';

// Email Components - Re-exporting reusable UI components for email construction
export { EmailHeader } from './components/header';
export { EmailFooter } from './components/footer';

// Brand System - Re-exporting brand colors and shared email styles for consistent theming
export { brandColors } from './components/brand-colors';
export { emailStyles } from './components/email-styles';
export type { BrandColors } from './components/brand-colors';
export type { EmailStyles } from './components/email-styles';