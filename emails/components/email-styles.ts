// Shared email styles for InSite Tech Solutions
// Ensures consistency across all email templates

import { brandColors } from './brand-colors';

export const emailStyles = {
  // Base styles
  main: {
    backgroundColor: brandColors.background.primary,
    fontFamily: "'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
    lineHeight: '1.6',
  },

  // Layout
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '0 16px',
  },

  section: {
    padding: '24px 16px',
  },

  // Typography
  heading: {
    fontSize: '28px',
    lineHeight: '36px',
    fontWeight: '700',
    color: brandColors.text.primary,
    textAlign: 'center' as const,
    margin: '0 0 24px 0',
    fontFamily: "'Kohinoor Latin', 'Open Sans', sans-serif",
  },

  subheading: {
    fontSize: '20px',
    lineHeight: '28px',
    fontWeight: '600',
    color: brandColors.text.primary,
    margin: '0 0 16px 0',
  },

  text: {
    color: brandColors.text.secondary,
    fontSize: '16px',
    lineHeight: '26px',
    margin: '0 0 16px 0',
  },

  textLarge: {
    color: brandColors.text.secondary,
    fontSize: '18px',
    lineHeight: '28px',
    margin: '0 0 20px 0',
  },

  textSmall: {
    color: brandColors.text.muted,
    fontSize: '14px',
    lineHeight: '20px',
    margin: '8px 0',
  },

  signature: {
    color: brandColors.text.secondary,
    fontSize: '16px',
    lineHeight: '26px',
    margin: '24px 0 0 0',
  },

  // Buttons
  buttonContainer: {
    textAlign: 'center' as const,
    margin: '32px 0',
  },

  primaryButton: {
    backgroundColor: brandColors.primary,
    borderRadius: '12px',
    color: brandColors.text.light,
    fontSize: '16px',
    fontWeight: '600',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'inline-block',
    padding: '16px 32px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },

  secondaryButton: {
    backgroundColor: 'transparent',
    borderRadius: '12px',
    color: brandColors.primary,
    fontSize: '16px',
    fontWeight: '600',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'inline-block',
    padding: '16px 32px',
    border: `2px solid ${brandColors.primary}`,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },

  // Cards and sections
  card: {
    backgroundColor: brandColors.background.card,
    padding: '20px 16px',
    borderRadius: '12px',
    border: `1px solid ${brandColors.background.border}`,
    margin: '16px 0',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.06)',
    maxWidth: '100%',
    boxSizing: 'border-box' as const,
  },

  infoSection: {
    backgroundColor: brandColors.background.secondary,
    padding: '16px',
    borderRadius: '12px',
    margin: '16px 0',
    border: `1px solid ${brandColors.background.border}`,
    maxWidth: '100%',
    boxSizing: 'border-box' as const,
  },

  gradientHeader: {
    background: `linear-gradient(135deg, ${brandColors.primary} 0%, ${brandColors.secondary} 100%)`,
    padding: '32px 24px',
    borderRadius: '12px 12px 0 0',
    textAlign: 'center' as const,
  },

  // Dividers
  hr: {
    borderColor: brandColors.background.border,
    margin: '32px 0',
    border: 'none',
    borderTop: `1px solid ${brandColors.background.border}`,
  },

  // Links
  link: {
    color: brandColors.primary,
    textDecoration: 'underline',
    fontWeight: '500',
  },

  // Lists
  listItem: {
    color: brandColors.text.secondary,
    fontSize: '16px',
    lineHeight: '26px',
    margin: '0 0 8px 0',
    paddingLeft: '4px',
  },

  // Badge/tag styles
  badge: {
    backgroundColor: brandColors.accent,
    color: brandColors.text.light,
    fontSize: '12px',
    fontWeight: '600',
    padding: '4px 12px',
    borderRadius: '16px',
    display: 'inline-block',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
  },

  // Message styles for contact forms
  messageSection: {
    backgroundColor: brandColors.background.secondary,
    padding: '16px',
    borderRadius: '12px',
    margin: '16px 0',
    border: `1px solid ${brandColors.background.border}`,
    borderLeft: `4px solid ${brandColors.primary}`,
    maxWidth: '100%',
    boxSizing: 'border-box' as const,
  },

  messageText: {
    color: brandColors.text.secondary,
    fontSize: '16px',
    lineHeight: '26px',
    margin: '0',
    whiteSpace: 'pre-wrap' as const,
    fontFamily: "'Courier New', monospace",
    backgroundColor: '#fafafa',
    padding: '12px',
    borderRadius: '6px',
    wordBreak: 'break-word' as const,
    overflowWrap: 'break-word' as const,
  },
} as const;

export type EmailStyles = typeof emailStyles; 