/**
 * @fileoverview Newsletter Welcome Email Template.
 *
 * This template is sent to users immediately after they successfully confirm
 * their subscription to the InSite Tech Solutions newsletter. It extends a warm welcome,
 * reiterates the benefits of subscribing, and provides quick links to valuable resources.
 *
 * Purpose:
 * - **Warm Welcome**: Greets new subscribers and confirms their successful subscription.
 * - **Value Proposition**: Reminds subscribers of the benefits and type of content they will receive.
 * - **Engagement**: Directs users to existing content (blog, case studies, FAQ) to encourage immediate engagement.
 * - **Unsubscribe Option**: Clearly provides an unsubscribe link for compliance and user control.
 *
 * Technical Details:
 * - Uses `@react-email/components` for structuring email-compatible HTML.
 * - Integrates `EmailHeader` and `EmailFooter` for consistent branding.
 * - Leverages `emailStyles` and `brandColors` for global and specific styling.
 * - Dynamically includes an `unsubscribeUrl` for easy opt-out.
 * - Features sections for newsletter content highlights and useful resources.
 */

import {
    Html,
    Head,
    Body,
    Container,
    Section,
    Text,
    Hr,
    Row,
    Column,
    Link,
  } from '@react-email/components';
  import { EmailHeader } from '../components/header';
  import { EmailFooter } from '../components/footer';
  import { emailStyles } from '../components/email-styles';
  import { brandColors } from '../components/brand-colors';
  
  /**
   * Props for the `NewsletterWelcome` component.
   * @interface NewsletterWelcomeProps
   */
  interface NewsletterWelcomeProps {
    /**
     * The URL for users to unsubscribe from the newsletter.
     */
    unsubscribeUrl: string;
    /**
     * Optional URL for the logo to be displayed in the email header.
     */
    logoUrl?: string;
  }
  
/**
 * Renders the newsletter welcome email template.
 * This email is sent to new subscribers upon successful confirmation of their subscription,
 * welcoming them to the InSite Tech Solutions community and providing key information.
 *
 * @param {NewsletterWelcomeProps} props - The properties for the component.
 * @returns {JSX.Element} The JSX element representing the newsletter welcome email.
 */
export const NewsletterWelcome = ({
  unsubscribeUrl,
  logoUrl,
}: NewsletterWelcomeProps): JSX.Element => {
    return (
      <Html lang="en">
        <Head>
          <title>Welcome to InSite Tech InSiders!</title>
        </Head>
        <Body style={emailStyles.main}>
          <EmailHeader logoUrl={logoUrl} />
          
          {/* Hero Section with Gradient */}
          <Section style={heroSection}>
            <Container style={emailStyles.container}>
              <Text style={heroIcon}>🎉</Text>
              <Text style={heroHeading}>
                Welcome to the Team!
              </Text>
              <Text style={heroSubtext}>
                You&apos;re now part of the InSite Tech Solutions community
              </Text>
            </Container>
          </Section>

          <Container style={emailStyles.container}>
            <Section style={contentSection}>
              <Text style={emailStyles.textLarge}>
                <strong>Welcome aboard!</strong> We&apos;re thrilled to have you as part of our tech community.
              </Text>
              
              <Text style={emailStyles.text}>
                You&apos;ve successfully subscribed to the <strong>InSite Tech InSiders</strong> newsletter and will now receive valuable insights, tips, and exclusive updates delivered directly to your inbox.
              </Text>

              <Section style={welcomeCard}>
                <Text style={cardTitle}>What&apos;s coming your way:</Text>
                
                <Row style={featureItem}>
                  <Column style={featureIcon}>📊</Column>
                  <Column style={featureContent}>
                    <Text style={featureTitle}>Tech Insights</Text>
                    <Text style={featureDescription}>Industry trends, best practices, and technology updates</Text>
                  </Column>
                </Row>
                
                <Row style={featureItem}>
                  <Column style={featureIcon}>🛠️</Column>
                  <Column style={featureContent}>
                    <Text style={featureTitle}>Practical Tutorials</Text>
                    <Text style={featureDescription}>Step-by-step guides to solve real business challenges</Text>
                  </Column>
                </Row>
                
                <Row style={featureItem}>
                  <Column style={featureIcon}>🎯</Column>
                  <Column style={featureContent}>
                    <Text style={featureTitle}>Exclusive Offers</Text>
                    <Text style={featureDescription}>Special discounts and early access to new services</Text>
                  </Column>
                </Row>
                
              </Section>

              <Section style={resourcesCard}>
                <Text style={cardTitle}>Get Started Right Away</Text>
                <Text style={emailStyles.text}>
                  While you wait for your first newsletter, check out these popular resources:
                </Text>
                
                <Row style={resourceRow}>
                  <Column style={resourceColumn}>
                    <Link href="https://insitetechsolutions.com/blog" style={resourceLink}>
                    Tech Blog
                    </Link>
                    <Text style={resourceDesc}>Latest articles and insights</Text>
                  </Column>
                  <Column style={resourceColumn}>
                    <Link href="https://insitetechsolutions.com/case-studies" style={resourceLink}>
                    Case Studies
                    </Link>
                    <Text style={resourceDesc}>Real success stories</Text>
                  </Column>
                </Row>
                
                <Row style={resourceRow}>
                  <Column style={resourceColumn}>
                    <Link href="https://insitetechsolutions.com/faq" style={resourceLink}>
                    FAQ
                    </Link>
                    <Text style={resourceDesc}>Common questions answered</Text>
                  </Column>
                  <Column style={resourceColumn}>
                    <Link href="https://insitetechsolutions.com/contact" style={resourceLink}>
                    Contact Us
                    </Link>
                    <Text style={resourceDesc}>Get personalized help</Text>
                  </Column>
                </Row>
              </Section>

              <Text style={emailStyles.signature}>
                Best regards,<br />
                <strong>The InSite Tech Solutions Team</strong><br />
                <span style={teamRole}>Your Technology Partners</span>
              </Text>

              <Hr style={emailStyles.hr} />

              <Text style={unsubscribeText}>
                You can <Link href={unsubscribeUrl} style={emailStyles.link}>unsubscribe</Link> at any time if you no longer wish to receive these updates.
              </Text>
            </Section>
          </Container>

          <EmailFooter />
        </Body>
      </Html>
    );
  };

  export default NewsletterWelcome;
  
  // Additional custom styles
  /**
   * Styles for the hero section of the email.
   */
  const heroSection: React.CSSProperties = {
    paddingTop: '36px',
    paddingBottom: '12px',
    textAlign: 'center' as const,
  };
  
  /**
   * Styles for the icon displayed in the hero section (e.g., 🎉).
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
   * Styles for the welcome card section, highlighting newsletter features.
   * Extends `emailStyles.card`.
   */
  const welcomeCard: React.CSSProperties = {
    ...emailStyles.card,
    backgroundColor: brandColors.background.secondary,
    border: `1px solid ${brandColors.background.border}`,
    borderLeft: `4px solid ${brandColors.secondary}`,
  };
  
  /**
   * Styles for the title within the welcome and resources cards.
   */
  const cardTitle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: '600',
    color: brandColors.text.primary,
    margin: '0 0 20px 0',
    textAlign: 'center' as const,
  };
  
  /**
   * Styles for an individual feature item within the welcome card.
   */
  const featureItem: React.CSSProperties = {
    margin: '16px 0',
    alignItems: 'flex-start',
  };
  
  /**
   * Styles for the emoji icon preceding each feature description.
   */
  const featureIcon: React.CSSProperties = {
    width: '32px',
    fontSize: '20px',
    textAlign: 'center' as const,
    paddingTop: '2px',
  };
  
  /**
   * Styles for the text content area of each feature item.
   */
  const featureContent: React.CSSProperties = {
    paddingLeft: '16px',
  };
  
  /**
   * Styles for the title of each feature.
   */
  const featureTitle: React.CSSProperties = {
    fontSize: '16px',
    fontWeight: '600',
    color: brandColors.text.primary,
    margin: '0 0 4px 0',
  };
  
  /**
   * Styles for the description text of each feature.
   */
  const featureDescription: React.CSSProperties = {
    fontSize: '14px',
    color: brandColors.text.muted,
    margin: '0',
    lineHeight: '20px',
  };
  
  /**
   * Styles for the resources card section.
   * Extends `emailStyles.card`.
   */
  const resourcesCard: React.CSSProperties = {
    ...emailStyles.card,
    backgroundColor: '#f8fafc',
    border: `1px solid ${brandColors.background.border}`,
  };
  
  /**
   * Styles for a row of resources.
   */
  const resourceRow: React.CSSProperties = {
    margin: '12px 0',
  };
  
  /**
   * Styles for a column within a resource row.
   */
  const resourceColumn: React.CSSProperties = {
    textAlign: 'center' as const,
    padding: '8px',
  };
  
  /**
   * Styles for the link text of each resource.
   * Extends `emailStyles.link`.
   */
  const resourceLink: React.CSSProperties = {
    ...emailStyles.link,
    fontSize: '14px',
    fontWeight: '600',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '4px',
  };
  
  /**
   * Styles for the description text of each resource.
   */
  const resourceDesc: React.CSSProperties = {
    fontSize: '12px',
    color: brandColors.text.muted,
    margin: '0',
    lineHeight: '16px',
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
   * Styles for the unsubscribe text at the bottom of the email.
   */
  const unsubscribeText: React.CSSProperties = {
    ...emailStyles.textSmall,
    textAlign: 'center' as const,
    fontStyle: 'italic',
  };

  /**
   * Styles for the main content section, providing inner padding.
   */
  const contentSection: React.CSSProperties = {
    padding: '8px 16px 24px 16px',
  };
  