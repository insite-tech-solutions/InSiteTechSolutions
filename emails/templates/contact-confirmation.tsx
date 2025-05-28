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

interface ContactConfirmationProps {
  customerName: string;
  submittedAt: string;
  logoUrl?: string;
}

export const ContactConfirmation = ({
  customerName,
  submittedAt,
  logoUrl,
}: ContactConfirmationProps) => {
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
const heroSection = {
  paddingTop: '36px',
  paddingBottom: '16px',
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

const personalizedGreeting = {
  ...emailStyles.textLarge,
  fontWeight: '600',
  color: brandColors.text.primary,
  marginBottom: '24px',
};

const timelineCard = {
  ...emailStyles.card,
  backgroundColor: brandColors.background.secondary,
  border: `1px solid ${brandColors.background.border}`,
  borderLeft: `4px solid ${brandColors.primary}`,
  padding: '16px',
  margin: '16px 0',
  maxWidth: '100%',
  boxSizing: 'border-box' as const,
};

const cardTitle = {
  fontSize: '18px',
  fontWeight: '600',
  color: brandColors.text.primary,
  margin: '0 0 16px 0',
  textAlign: 'center' as const,
};

const timelineItem = {
  margin: '12px 0',
  display: 'flex',
  alignItems: 'flex-start',
  width: '100%',
};

const timelineNumber = {
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

const timelineContent = {
  flex: 1,
  paddingLeft: '0',
  minWidth: 0,
};

const timelineText = {
  ...emailStyles.text,
  margin: '0',
  fontSize: '14px',
  lineHeight: '20px',
};

const contactCard = {
  ...emailStyles.card,
  textAlign: 'center' as const,
  backgroundColor: '#f8fafc',
  padding: '16px',
  margin: '16px 0',
  maxWidth: '100%',
  boxSizing: 'border-box' as const,
};

const contactInfo = {
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

const teamRole = {
  color: brandColors.text.muted,
  fontSize: '14px',
  fontStyle: 'italic',
};

const contentSection = {
  padding: '8px 16px 24px 16px',
};

