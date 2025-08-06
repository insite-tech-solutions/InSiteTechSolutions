/**
 * @fileoverview Newsletter Confirmation Email Template.
 *
 * This template is used to send a confirmation email to users who have subscribed
 * to the InSite Tech Solutions newsletter. It requires the user to click a confirmation link
 * to finalize their subscription, ensuring a double opt-in process.
 *
 * Purpose:
 * - **Email Verification**: Confirms the subscriber's email address is valid and owned by them.
 * - **Spam Prevention**: Implements a double opt-in mechanism to prevent unsolicited subscriptions and reduce spam complaints.
 * - **Expectation Setting**: Informs the subscriber about the benefits of the newsletter and what to expect.
 * - **Security Note**: Provides important information about the link's expiration and privacy.
 *
 * Technical Details:
 * - Uses `@react-email/components` for structuring email-compatible HTML.
 * - Integrates `EmailHeader` and `EmailFooter` for consistent branding.
 * - Leverages `emailStyles` and `brandColors` for global and specific styling.
 * - Dynamically includes a `confirmationUrl` for the opt-in process.
 * - Features a prominent call-to-action button and a section detailing newsletter benefits.
 */

import {
    Html,
    Head,
    Body,
    Container,
    Section,
    Text,
    Button,
    Hr,
    Row,
    Column,
  } from '@react-email/components';
  import { EmailHeader } from '../components/header';
  import { EmailFooter } from '../components/footer';
  import { emailStyles } from '../components/email-styles';
  import { brandColors } from '../components/brand-colors';
  
  /**
   * Props for the `NewsletterConfirm` component.
   * @interface NewsletterConfirmProps
   */
  interface NewsletterConfirmProps {
    /**
     * The URL that the user must click to confirm their newsletter subscription.
     */
    confirmationUrl: string;
    /**
     * Optional URL for the logo to be displayed in the email header.
     */
    logoUrl?: string;
  }
  
/**
 * Renders the newsletter confirmation email template.
 * This email is sent to new subscribers, prompting them to confirm their email
 * address to complete their subscription to the InSite Tech Solutions newsletter.
 *
 * @param {NewsletterConfirmProps} props - The properties for the component.
 * @returns {JSX.Element} The JSX element representing the newsletter confirmation email.
 */
export const NewsletterConfirm = ({
  confirmationUrl,
  logoUrl,
}: NewsletterConfirmProps): JSX.Element => {
    return (
      <Html lang="en">
        <Head>
          <title>Confirm Your Newsletter Subscription - InSite Tech Solutions</title>
        </Head>
        <Body style={emailStyles.main}>
          <EmailHeader logoUrl={logoUrl} />
          
          {/* Hero Section with Gradient */}
          <Section style={heroSection}>
            <Container style={emailStyles.container}>
              <Text style={heroIcon}>📧</Text>
              <Text style={heroHeading}>
                Confirm Your Email
              </Text>
              <Text style={heroSubtext}>
                You&apos;re one step away from getting the latest tech insights
              </Text>
            </Container>
          </Section>

          <Container style={emailStyles.container}>
            <Section style={contentSection}>
              <Text style={emailStyles.textLarge}>
                Thanks for subscribing to the <strong>InSite Tech Solutions newsletter</strong>!
              </Text>
              
              <Text style={emailStyles.text}>
                To complete your subscription and start receiving our latest tech insights, tips, and exclusive updates, please confirm your email address by clicking the button below.
              </Text>

              <Section style={emailStyles.buttonContainer}>
                <Button style={confirmButton} href={confirmationUrl}>
                Confirm Email Address
                </Button>
              </Section>

              <Section style={benefitsCard}>
                <Text style={cardTitle}>What you&apos;ll receive:</Text>
                <Row style={benefitItem}>
                  <Column style={benefitIcon}>🚀</Column>
                  <Column style={benefitText}>
                    <Text style={benefitTitle}>Latest Tech Trends</Text>
                    <Text style={benefitDescription}>Stay ahead with cutting-edge technology insights</Text>
                  </Column>
                </Row>
                <Row style={benefitItem}>
                  <Column style={benefitIcon}>💡</Column>
                  <Column style={benefitText}>
                    <Text style={benefitTitle}>Expert Tips & Strategies</Text>
                    <Text style={benefitDescription}>Practical advice to grow your business</Text>
                  </Column>
                </Row>
                <Row style={benefitItem}>
                  <Column style={benefitIcon}>🎯</Column>
                  <Column style={benefitText}>
                    <Text style={benefitTitle}>Exclusive Offers</Text>
                    <Text style={benefitDescription}>Special discounts and early access to services</Text>
                  </Column>
                </Row>
              </Section>



              <Hr style={emailStyles.hr} />

              <Section style={securityCard}>
                <Text style={securityTitle}>🔒 Secure & Spam-Free</Text>
                <Text style={emailStyles.textSmall}>
                  We respect your privacy. You can unsubscribe at any time, and we&apos;ll never share your email address.
                </Text>
                <Text style={emailStyles.textSmall}>
                  <strong>This confirmation link expires in 48 hours.</strong>
                </Text>
              </Section>

              <Text style={emailStyles.textSmall}>
                If you didn&apos;t subscribe to this newsletter, you can safely ignore this email and your email address will not be added to our list.
              </Text>
            </Section>
          </Container>
          
          <EmailFooter />
        </Body>
      </Html>
    );
  };

  export default NewsletterConfirm;
  
  // Additional custom styles
  /**
   * Styles for the hero section of the email.
   */
  const heroSection: React.CSSProperties = {
    paddingTop: '24px',
    paddingBottom: '16px',
    textAlign: 'center' as const,
  };
  
  /**
   * Styles for the icon displayed in the hero section (e.g., 📧).
   */
  const heroIcon: React.CSSProperties = {
    fontSize: '48px',
    lineHeight: '1',
    margin: '0 0 16px 0',
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
   * Styles for the benefits card section, highlighting newsletter advantages.
   * Extends `emailStyles.card`.
   */
  const benefitsCard: React.CSSProperties = {
    ...emailStyles.card,
    backgroundColor: brandColors.background.secondary,
    border: `1px solid ${brandColors.background.border}`,
    borderLeft: `4px solid ${brandColors.accent}`,
  };
  
  /**
   * Styles for the title within the benefits card.
   */
  const cardTitle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: '600',
    color: brandColors.text.primary,
    margin: '0 0 20px 0',
    textAlign: 'center' as const,
  };
  
  /**
   * Styles for an individual benefit item within the benefits card.
   */
  const benefitItem: React.CSSProperties = {
    margin: '16px 0',
    alignItems: 'flex-start',
  };
  
  /**
   * Styles for the emoji icon preceding each benefit description.
   */
  const benefitIcon: React.CSSProperties = {
    width: '32px',
    fontSize: '20px',
    textAlign: 'center' as const,
    paddingTop: '2px',
  };
  
  /**
   * Styles for the text content area of each benefit item.
   */
  const benefitText: React.CSSProperties = {
    paddingLeft: '16px',
  };
  
  /**
   * Styles for the title of each benefit.
   */
  const benefitTitle: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: '600',
    color: brandColors.text.primary,
    margin: '0 0 4px 0',
  };
  
  /**
   * Styles for the description text of each benefit.
   */
  const benefitDescription: React.CSSProperties = {
    fontSize: '14px',
    color: brandColors.text.muted,
    margin: '0',
    lineHeight: '20px',
  };
  
  /**
   * Styles for the main confirmation button.
   * Extends `emailStyles.primaryButton`.
   */
  const confirmButton: React.CSSProperties = {
    ...emailStyles.primaryButton,
    backgroundColor: brandColors.accent,
    fontSize: '18px',
    padding: '18px 36px',
    borderRadius: '12px',
    fontWeight: '700',
  };
  
  /**
   * Styles for the security information card.
   * Extends `emailStyles.card`.
   */
  const securityCard: React.CSSProperties = {
    ...emailStyles.card,
    backgroundColor: '#f0f9ff',
    border: `1px solid ${brandColors.light}`,
    textAlign: 'center' as const,
  };
  
  /**
   * Styles for the title within the security card.
   */
  const securityTitle: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: '600',
    color: brandColors.text.primary,
    margin: '0 0 12px 0',
  };

  /**
   * Styles for the main content section, providing inner padding.
   */
  const contentSection: React.CSSProperties = {
    padding: '8px 16px 24px 16px',
  };