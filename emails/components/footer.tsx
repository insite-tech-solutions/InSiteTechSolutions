import {
    Section,
    Container,
    Text,
    Hr,
    Link,
  } from '@react-email/components';
import { brandColors } from './brand-colors';
  
  export const EmailFooter = () => {
    return (
      <Section style={footerSection}>
        <Container style={container}>
          
          <Text style={footerBrand}>
            <strong>InSite Tech Solutions</strong>
          </Text>
          <Text style={footerTagline}>
            Professional solutions for all your tech related needs
          </Text>
          <Hr style={hr} />
          <Text style={footerContact}>
            <Link href="https://insitetechsolutions.com" style={link}>
              insitetechsolutions.com
            </Link>
            {' | '}
            <Link href="mailto:contact@insitetechsolutions.com" style={link}>
              contact@insitetechsolutions.com
            </Link>
          </Text>
          <Text style={footerSocial}>
            Follow us: {' '}
            <Link href="https://linkedin.com/company/insite-tech-solutions" style={link}>
              LinkedIn
            </Link>
            {' | '}
            <Link href="https://twitter.com/insitetechsol" style={link}>
              Twitter
            </Link>
          </Text>
          <Text style={copyright}>
            © 2025 InSite Tech Solutions. All rights reserved.<br />
            YOUR_PHYSICAL_ADDRESS
          </Text>
          <Text style={unsubscribeText}>
            You received this email because you contacted us or subscribed to our newsletter.
          </Text>
        </Container>
      </Section>
    );
  };
  
  const footerSection = {
    backgroundColor: brandColors.background.secondary,
    padding: '40px 0',
    borderTop: `1px solid ${brandColors.background.border}`,
  };
  
  const container = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '0 24px',
  };
  
  const hr = {
    borderColor: brandColors.background.border,
    margin: '20px 0',
    border: 'none',
    borderTop: `2px solid ${brandColors.background.border}`,
  };
  
  const footerBrand = {
    color: brandColors.text.primary,
    fontSize: '18px',
    lineHeight: '28px',
    textAlign: 'center' as const,
    margin: '0 0 8px 0',
    fontFamily: "'Kohinoor Latin', 'Open Sans', sans-serif",
  };
  
  const footerTagline = {
    color: brandColors.text.muted,
    fontSize: '14px',
    lineHeight: '20px',
    textAlign: 'center' as const,
    margin: '0 0 16px 0',
  };
  
  const footerContact = {
    color: brandColors.text.muted,
    fontSize: '14px',
    lineHeight: '22px',
    textAlign: 'center' as const,
    margin: '0 0 12px 0',
  };
  
  const footerSocial = {
    color: brandColors.text.muted,
    fontSize: '14px',
    lineHeight: '22px',
    textAlign: 'center' as const,
    margin: '0 0 16px 0',
  };
  
  const copyright = {
    color: brandColors.text.muted,
    fontSize: '12px',
    lineHeight: '18px',
    textAlign: 'center' as const,
    margin: '16px 0 8px 0',
    fontWeight: '500',
  };
  
  const unsubscribeText = {
    color: brandColors.text.muted,
    fontSize: '11px',
    lineHeight: '16px',
    textAlign: 'center' as const,
    margin: '8px 0 0 0',
    fontStyle: 'italic',
  };
  
  const link = {
    color: brandColors.primary,
    textDecoration: 'underline',
    fontWeight: '500',
  };