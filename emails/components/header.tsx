/**
 * @fileoverview Email Header Component.
 *
 * This component renders the standardized header for all outgoing emails.
 * It typically includes the company logo and a clear top-level section,
 * ensuring brand consistency and a professional appearance.
 *
 * Purpose:
 * - **Branding**: Displays the company logo prominently at the top of every email.
 * - **Consistency**: Maintains a uniform header design across all email communications.
 * - **Professionalism**: Contributes to a polished and trustworthy email presentation.
 *
 * Technical Details:
 * - Uses `@react-email/components` for structuring email-compatible HTML.
 * - Imports `brandColors` for consistent styling.
 * - Styles are defined as constant objects using inline CSS-in-JS for email client compatibility.
 * - `EmailHeader` is a functional component returning the JSX structure.
 */

import {
    Img,
    Section,
    Container,
    Row,
    Column,
    Link
  } from '@react-email/components';
import { brandColors } from './brand-colors';
  
  interface HeaderProps {
    logoUrl?: string;
  }
  
/**
 * Renders the standardized header component for all outgoing emails.
 * This header typically includes the company logo, providing consistent branding
 * and a professional look across all email communications.
 *
 * @returns {JSX.Element} The JSX element representing the email header.
 */
export const EmailHeader = ({ logoUrl }: HeaderProps): JSX.Element => {
    return (
      <Section style={headerSection}>
        <Container style={container}>
          <Row>
            <Column>
              {logoUrl ? (
                <Link href={logoUrl} style={link}>
                  <Img
                    src={logoUrl}
                    width="180"
                    height="80"
                    alt="InSite Tech Solutions"
                    style={logo}
                  />
                </Link>
              ) : (
                <div style={logoTextFallback}>
                  <span style={logoText}>InSite Tech Solutions</span>
                </div>
              )}
            </Column>
          </Row>
        </Container>
      </Section>
    );
  };
  
  /**
   * Styles for the main header section.
   */
  const headerSection: React.CSSProperties = {
    backgroundColor: brandColors.background.primary,
    padding: '24px 0',
    borderBottom: `1px solid ${brandColors.background.border}`,
  };
  
  /**
   * Styles for the content container within the header.
   */
  const container: React.CSSProperties = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '0 24px',
  };
  
  /**
   * Styles for the logo image.
   */
  const logo: React.CSSProperties = {
    margin: '0 auto',
    display: 'block',
  };
  
  /**
   * Styles for the logo text fallback.
   */
  const logoTextFallback: React.CSSProperties = {
    textAlign: 'center' as const,
    padding: '12px 0',
  };
  
  /**
   * Styles for the logo text.
   */
  const logoText: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: '700',
    color: brandColors.primary,
    fontFamily: "'Kohinoor Latin', 'Open Sans', sans-serif",
    letterSpacing: '0.5px',
  };

  /**
   * Styles for the link wrapping the logo.
   */
  const link: React.CSSProperties = {
    display: 'block',
    width: 'fit-content',
    margin: '0 auto',
  };