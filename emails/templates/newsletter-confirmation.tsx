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
  
  interface NewsletterConfirmProps {
    confirmationUrl: string;
    logoUrl?: string;
  }
  
  export const NewsletterConfirm = ({
    confirmationUrl,
    logoUrl,
  }: NewsletterConfirmProps) => {
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
  const heroSection = {
    paddingTop: '24px',
    paddingBottom: '16px',
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
  
  const benefitsCard = {
    ...emailStyles.card,
    backgroundColor: brandColors.background.secondary,
    border: `1px solid ${brandColors.background.border}`,
    borderLeft: `4px solid ${brandColors.accent}`,
  };
  
  const cardTitle = {
    fontSize: '18px',
    fontWeight: '600',
    color: brandColors.text.primary,
    margin: '0 0 20px 0',
    textAlign: 'center' as const,
  };
  
  const benefitItem = {
    margin: '16px 0',
    alignItems: 'flex-start',
  };
  
  const benefitIcon = {
    width: '32px',
    fontSize: '20px',
    textAlign: 'center' as const,
    paddingTop: '2px',
  };
  
  const benefitText = {
    paddingLeft: '16px',
  };
  
  const benefitTitle = {
    fontSize: '16px',
    fontWeight: '600',
    color: brandColors.text.primary,
    margin: '0 0 4px 0',
  };
  
  const benefitDescription = {
    fontSize: '14px',
    color: brandColors.text.muted,
    margin: '0',
    lineHeight: '20px',
  };
  
  const confirmButton = {
    ...emailStyles.primaryButton,
    backgroundColor: brandColors.accent,
    fontSize: '18px',
    padding: '18px 36px',
    borderRadius: '12px',
    fontWeight: '700',
  };
  
  const securityCard = {
    ...emailStyles.card,
    backgroundColor: '#f0f9ff',
    border: `1px solid ${brandColors.light}`,
    textAlign: 'center' as const,
  };
  
  const securityTitle = {
    fontSize: '16px',
    fontWeight: '600',
    color: brandColors.text.primary,
    margin: '0 0 12px 0',
  };

  const contentSection = {
    padding: '8px 16px 24px 16px',
  };