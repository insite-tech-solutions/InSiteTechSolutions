/**
 * @fileoverview Email Footer Component.
 *
 * This component renders the standardized footer for all outgoing emails.
 * It includes brand information, contact details, social media links, copyright,
 * and an unsubscribe message. The design is responsive and uses predefined brand colors.
 *
 * Purpose:
 * - **Consistency**: Ensures a uniform look and feel across all email communications.
 * - **Branding**: Reinforces brand identity with logo, tagline, and contact information.
 * - **Legal Compliance**: Includes necessary copyright and unsubscribe information.
 * - **Usability**: Provides clear links for contact, website, and social media engagement.
 *
 * Technical Details:
 * - Uses `@react-email/components` for structuring email-compatible HTML.
 * - Imports `brandColors` for consistent styling.
 * - Styles are defined as constant objects using inline CSS-in-JS for email client compatibility.
 * - `EmailFooter` is a functional component returning the JSX structure.
 */

import {
    Section,
    Container,
    Text,
    Hr,
    Link,
  } from '@react-email/components';
import { brandColors } from './brand-colors';

/**
 * Renders the standardized footer component for all outgoing emails.
 * This footer includes brand information, contact details, social media links, copyright,
 * and an unsubscribe message, ensuring consistency and compliance across email communications.
 *
 * @returns {JSX.Element} The JSX element representing the email footer.
 */
export const EmailFooter = (): JSX.Element => {
    return (
      <Section style={footerSection}>
        <Container style={container}>
          
          <Text style={footerBrand}>
            <strong>InSite Tech Solutions</strong>
          </Text>
          <Text style={footerTagline}>
            Innovative solutions for all your tech related needs
          </Text>
          <Hr style={hr} />
          <Text style={footerContact}>
            <Link href="https://www.insitetechsolutions.com" style={link}>
              insitetechsolutions.com
            </Link>
            {' | '}
            <Link href="mailto:contact@insitetechsolutions.com" style={link}>
              contact@insitetechsolutions.com
            </Link>
          </Text>
          <Text style={footerSocial}>
            Follow us: {' '}
            <Link href="https://www.linkedin.com/company/insite-tech-solutions" style={link}>
              LinkedIn
            </Link>
            {' | '}
            <Link href="https://github.com/insite-tech-solutions" style={link}>
              GitHub
            </Link>
            {' | '}
            <Link href="https://www.facebook.com/share/198f3uKoyc/?mibextid=wwXIfr" style={link}>
              Facebook
            </Link>
            {' | '}
            <Link href="https://nextdoor.com/pages/insite-tech-solutions-lockport-ny/" style={link}>
              Nextdoor
            </Link>
          </Text>
          <Text style={copyright}>
            &copy; {new Date().getFullYear()} InSite Tech Solutions. All rights reserved.<br />
            {/* YOUR_PHYSICAL_ADDRESS */}
          </Text>
          <Text style={unsubscribeText}>
            You received this email because you contacted us or subscribed to our newsletter.
          </Text>
        </Container>
      </Section>
    );
  };
  
  /**
   * Styles for the main footer section.
   */
  const footerSection: React.CSSProperties = {
    backgroundColor: brandColors.background.secondary,
    padding: '40px 0',
    borderTop: `1px solid ${brandColors.background.border}`,
  };
  
  /**
   * Styles for the content container within the footer.
   */
  const container: React.CSSProperties = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '0 24px',
  };
  
  /**
   * Styles for the horizontal rule (separator).
   */
  const hr: React.CSSProperties = {
    borderColor: brandColors.background.border,
    margin: '20px 0',
    border: 'none',
    borderTop: `2px solid ${brandColors.background.border}`,
  };
  
  /**
   * Styles for the brand name text in the footer.
   */
  const footerBrand: React.CSSProperties = {
    color: brandColors.text.primary,
    fontSize: '18px',
    lineHeight: '28px',
    textAlign: 'center' as const,
    margin: '0 0 8px 0',
    fontFamily: "'Kohinoor Latin', 'Open Sans', sans-serif",
  };
  
  /**
   * Styles for the brand tagline text in the footer.
   */
  const footerTagline: React.CSSProperties = {
    color: brandColors.text.muted,
    fontSize: '14px',
    lineHeight: '20px',
    textAlign: 'center' as const,
    margin: '0 0 16px 0',
  };
  
  /**
   * Styles for the contact information text in the footer.
   */
  const footerContact: React.CSSProperties = {
    color: brandColors.text.muted,
    fontSize: '14px',
    lineHeight: '22px',
    textAlign: 'center' as const,
    margin: '0 0 12px 0',
  };
  
  /**
   * Styles for the social media links text in the footer.
   */
  const footerSocial: React.CSSProperties = {
    color: brandColors.text.muted,
    fontSize: '14px',
    lineHeight: '22px',
    textAlign: 'center' as const,
    margin: '0 0 16px 0',
  };
  
  /**
   * Styles for the copyright text in the footer.
   */
  const copyright: React.CSSProperties = {
    color: brandColors.text.muted,
    fontSize: '12px',
    lineHeight: '18px',
    textAlign: 'center' as const,
    margin: '16px 0 8px 0',
    fontWeight: '500',
  };
  
  /**
   * Styles for the unsubscribe text in the footer.
   */
  const unsubscribeText: React.CSSProperties = {
    color: brandColors.text.muted,
    fontSize: '11px',
    lineHeight: '16px',
    textAlign: 'center' as const,
    margin: '8px 0 0 0',
    fontStyle: 'italic',
  };
  
  /**
   * Styles for the interactive links within the footer.
   */
  const link: React.CSSProperties = {
    color: brandColors.primary,
    textDecoration: 'underline',
    fontWeight: '500',
  };