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
    Link,
  } from '@react-email/components';
  import { EmailHeader } from '../components/header';
  import { EmailFooter } from '../components/footer';
  import { emailStyles } from '../components/email-styles';
  import { brandColors } from '../components/brand-colors';
  
  interface NewsletterWelcomeProps {
    unsubscribeUrl: string;
    logoUrl?: string;
  }
  
  export const NewsletterWelcome = ({
    unsubscribeUrl,
    logoUrl,
  }: NewsletterWelcomeProps) => {
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

              <Section style={emailStyles.buttonContainer}>
                <Button style={emailStyles.primaryButton} href="https://insitetechsolutions.com/services">
                  Explore Our Services
                </Button>
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
  const heroSection = {
    paddingTop: '36px',
    paddingBottom: '12px',
    textAlign: 'center' as const,
  };
  
  const heroIcon = {
    fontSize: '48px',
    lineHeight: '1',
    margin: '0 0 16px 0',
    textAlign: 'center' as const,
  };
  
  const heroHeading = {
    fontSize: '32px',
    lineHeight: '40px',
    fontWeight: '700',
    color: brandColors.primary,
    textAlign: 'center' as const,
    margin: '0 0 12px 0',
    fontFamily: "'Kohinoor Latin', 'Open Sans', sans-serif",
  };
  
  const heroSubtext = {
    fontSize: '18px',
    lineHeight: '28px',
    color: brandColors.text.muted,
    textAlign: 'center' as const,
    margin: '0',
  };
  
  const welcomeCard = {
    ...emailStyles.card,
    backgroundColor: brandColors.background.secondary,
    border: `1px solid ${brandColors.background.border}`,
    borderLeft: `4px solid ${brandColors.secondary}`,
  };
  
  const cardTitle = {
    fontSize: '18px',
    fontWeight: '600',
    color: brandColors.text.primary,
    margin: '0 0 20px 0',
    textAlign: 'center' as const,
  };
  
  const featureItem = {
    margin: '16px 0',
    alignItems: 'flex-start',
  };
  
  const featureIcon = {
    width: '32px',
    fontSize: '20px',
    textAlign: 'center' as const,
    paddingTop: '2px',
  };
  
  const featureContent = {
    paddingLeft: '16px',
  };
  
  const featureTitle = {
    fontSize: '16px',
    fontWeight: '600',
    color: brandColors.text.primary,
    margin: '0 0 4px 0',
  };
  
  const featureDescription = {
    fontSize: '14px',
    color: brandColors.text.muted,
    margin: '0',
    lineHeight: '20px',
  };
  
  const resourcesCard = {
    ...emailStyles.card,
    backgroundColor: '#f8fafc',
    border: `1px solid ${brandColors.background.border}`,
  };
  
  const resourceRow = {
    margin: '12px 0',
  };
  
  const resourceColumn = {
    textAlign: 'center' as const,
    padding: '8px',
  };
  
  const resourceLink = {
    ...emailStyles.link,
    fontSize: '14px',
    fontWeight: '600',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '4px',
  };
  
  const resourceDesc = {
    fontSize: '12px',
    color: brandColors.text.muted,
    margin: '0',
    lineHeight: '16px',
  };
  
  const teamRole = {
    color: brandColors.text.muted,
    fontSize: '14px',
    fontStyle: 'italic',
  };
  
  const unsubscribeText = {
    ...emailStyles.textSmall,
    textAlign: 'center' as const,
    fontStyle: 'italic',
  };
  
  const contentSection = {
    padding: '8px 16px 24px 16px',
  };
  