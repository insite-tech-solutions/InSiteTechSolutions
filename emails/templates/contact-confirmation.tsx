/**
 * @fileoverview Contact Confirmation Email Template.
 *
 * This template is used to send an automatic confirmation email to users
 * who have submitted a contact form through the website. It acknowledges
 * receipt of their message and outlines the next steps in the communication process.
 *
 * Purpose:
 * - **Confirmation**: Assures the user their message was successfully received.
 * - **Transparency**: Informs the user about what to expect next (e.g., response timeline).
 * - **Branding**: Maintains consistent brand messaging and appearance.
 * - **Call to Action**: Provides alternative contact methods for immediate assistance.
 *
 * Technical Details:
 * - Uses `@react-email/components` for structuring email-compatible HTML.
 * - Integrates `EmailHeader` and `EmailFooter` for consistent branding elements.
 * - Leverages `emailStyles` and `brandColors` for global and specific styling.
 * - Dynamically includes `customerName` and `submittedAt` for personalization.
 * - Features a timeline section to visually represent the next steps.
 */

import {
    Html,
    Head,
    Body,
    Container,
    Section,
    Text,
    Hr,
} from '@react-email/components';
import { EmailHeader } from '../components/header';
import { EmailFooter } from '../components/footer';
import { emailStyles } from '../components/email-styles';
import { brandColors } from '../components/brand-colors';

/**
 * Props for the `ContactConfirmation` component.
 * @interface ContactConfirmationProps
 */
interface ContactConfirmationProps {
  /**
   * The name of the customer who submitted the contact form.
   */
  customerName: string;
  /**
   * The timestamp or formatted date string indicating when the form was submitted.
   */
  submittedAt: string;
  /**
   * Optional URL for the logo to be displayed in the email header.
   */
  logoUrl?: string;
}

/**
 * Renders the contact confirmation email template.
 * This email is sent to users after they successfully submit a contact form,
 * confirming receipt of their message and outlining next steps.
 *
 * @param {ContactConfirmationProps} props - The properties for the component.
 * @returns {JSX.Element} The JSX element representing the contact confirmation email.
 */
export const ContactConfirmation = ({
  customerName,
  submittedAt,
  logoUrl,
}: ContactConfirmationProps): JSX.Element => {
  return (
    <Html lang="en">
      <Head>
        <title>Message Received - InSite Tech Solutions</title>
      </Head>
      <Body style={emailStyles.main}>
        <EmailHeader logoUrl={logoUrl} />
        
        {/* Hero Section with Gradient */}
        <Section style={heroSection}>
          <Container style={emailStyles.container}>
            <Text style={heroHeading}>
              Message Received
            </Text>
            <Text style={heroSubtext}>
              Thank you for reaching out to InSite Tech Solutions
            </Text>
          </Container>
        </Section>

        <Container style={emailStyles.container}>
          <Section style={contentSection}>
            <Text style={personalizedGreeting}>
              Hi {customerName},
            </Text>
            
            <Text style={emailStyles.textLarge}>
              Great news! We&apos;ve successfully received your message submitted on <strong>{submittedAt}</strong> and it has been forwarded to our team for review.
            </Text>

            <Section style={timelineCard}>
              <Text style={cardTitle}>What happens next?</Text>
              <div style={timelineItem}>
                <div style={timelineNumber}>1</div>
                <div style={timelineContent}>
                  <Text style={timelineText}>
                    We&apos;ll review your message
                  </Text>
                </div>
              </div>
              <div style={timelineItem}>
                <div style={timelineNumber}>2</div>
                <div style={timelineContent}>
                  <Text style={timelineText}>
                    A team member will reach out within 48 hours
                  </Text>
                </div>
              </div>
              <div style={timelineItem}>
                <div style={timelineNumber}>3</div>
                <div style={timelineContent}>
                  <Text style={timelineText}>
                  We&apos;ll discuss your needs and propose solutions
                  </Text>
                </div>
              </div>
            </Section>
            <Text style={emailStyles.signature}>
              Best regards,<br />
              <strong>The InSite Tech Solutions Team</strong><br />
              <span style={teamRole}>Your Technology Partners</span>
            </Text>


            <Hr style={emailStyles.hr} />

            <Section style={contactCard}>
              <Text style={cardTitle}>Need immediate assistance?</Text>
              <Text style={emailStyles.text}>
                Contact us directly and we&apos;ll get back to you as soon as possible:
              </Text>
              <Text style={contactInfo}>
                📧 contact@insitetechsolutions.com<br />
                📞 (555) 123-4567<br />
                🌐 insitetechsolutions.com
              </Text>
            </Section>


          </Section>
        </Container>
        
        <EmailFooter />
      </Body>
    </Html>
  );
};

export default ContactConfirmation;

// Additional custom styles
/**
 * Styles for the hero section of the email.
 */
const heroSection: React.CSSProperties = {
  paddingTop: '36px',
  paddingBottom: '16px',
  textAlign: 'center' as const,
};

/**
 * Styles for the main heading in the hero section.
 */
const heroHeading: React.CSSProperties = {
  fontSize: '32px',
  lineHeight: '40px',
  fontWeight: '700',
  color: brandColors.primary,
  textAlign: 'center' as const,
  margin: '0 0 12px 0',
  fontFamily: "'Kohinoor Latin', 'Open Sans', sans-serif",
};

/**
 * Styles for the subtext in the hero section.
 */
const heroSubtext: React.CSSProperties = {
  fontSize: '18px',
  lineHeight: '28px',
  color: brandColors.text.muted,
  textAlign: 'center' as const,
  margin: '0',
};

/**
 * Styles for the personalized greeting text.
 * Extends `emailStyles.textLarge`.
 */
const personalizedGreeting: React.CSSProperties = {
  ...emailStyles.textLarge,
  fontWeight: '600',
  color: brandColors.text.primary,
  marginBottom: '24px',
};

/**
 * Styles for the timeline card section.
 * Extends `emailStyles.card`.
 */
const timelineCard: React.CSSProperties = {
  ...emailStyles.card,
  backgroundColor: brandColors.background.secondary,
  border: `1px solid ${brandColors.background.border}`,
  borderLeft: `4px solid ${brandColors.primary}`,
  padding: '16px',
  margin: '16px 0',
  maxWidth: '100%',
  boxSizing: 'border-box' as const,
};

/**
 * Styles for the title within the timeline and contact cards.
 */
const cardTitle: React.CSSProperties = {
  fontSize: '18px',
  fontWeight: '600',
  color: brandColors.text.primary,
  margin: '0 0 16px 0',
  textAlign: 'center' as const,
};

/**
 * Styles for an individual timeline item, using flex display.
 */
const timelineItem: React.CSSProperties = {
  margin: '12px 0',
  display: 'flex',
  alignItems: 'flex-start',
  width: '100%',
};

/**
 * Styles for the numbered circle in each timeline item.
 */
const timelineNumber: React.CSSProperties = {
  width: '24px',
  minWidth: '24px',
  height: '24px',
  backgroundColor: brandColors.primary,
  color: brandColors.text.light,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '12px',
  fontWeight: '600',
  marginRight: '12px',
  flexShrink: 0,
};

/**
 * Styles for the content area of each timeline item.
 */
const timelineContent: React.CSSProperties = {
  flex: 1,
  paddingLeft: '0',
  minWidth: 0,
};

/**
 * Styles for the text within each timeline item.
 * Extends `emailStyles.text`.
 */
const timelineText: React.CSSProperties = {
  ...emailStyles.text,
  margin: '0',
  fontSize: '14px',
  lineHeight: '20px',
};

/**
 * Styles for the contact card section.
 * Extends `emailStyles.card`.
 */
const contactCard: React.CSSProperties = {
  ...emailStyles.card,
  textAlign: 'center' as const,
  backgroundColor: '#f8fafc',
  padding: '16px',
  margin: '16px 0',
  maxWidth: '100%',
  boxSizing: 'border-box' as const,
};

/**
 * Styles for the contact information text (email, phone, website).
 */
const contactInfo: React.CSSProperties = {
  ...emailStyles.text,
  fontFamily: "'Courier New', monospace",
  backgroundColor: brandColors.background.primary,
  padding: '12px',
  borderRadius: '8px',
  border: `1px solid ${brandColors.background.border}`,
  margin: '12px 0',
  fontSize: '14px',
  lineHeight: '20px',
  wordBreak: 'break-word' as const,
};

/**
 * Styles for the team role text in the signature.
 */
const teamRole: React.CSSProperties = {
  color: brandColors.text.muted,
  fontSize: '14px',
  fontStyle: 'italic',
};

/**
 * Styles for the main content section, providing inner padding.
 */
const contentSection: React.CSSProperties = {
  padding: '8px 16px 24px 16px',
};

