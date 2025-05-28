import {
    Html,
    Head,
    Body,
    Container,
    Section,
    Text,
    Button,
    Hr,
  } from '@react-email/components';
  import { EmailHeader } from '../components/header';
  import { EmailFooter } from '../components/footer';
  import { emailStyles } from '../components/email-styles';
  import { brandColors } from '../components/brand-colors';
  
  interface ContactNotificationProps {
    // Required fields
    firstName: string;
    email: string;
    services: string[];
    budget: string;
    submittedAt: string;
    
    // Optional fields
    lastName?: string;
    phoneNumber?: string;
    websiteUrl?: string;
    companyName?: string;
    comments?: string;
    mailingList?: boolean;
    
    // System fields
    logoUrl?: string;
  }

  // Service mapping from form IDs to readable labels
  const serviceLabels: Record<string, string> = {
    'web-app-development': 'Web & App Development',
    'custom-software-solutions': 'Custom Software Solutions',
    'seo-online-marketing': 'SEO & Online Marketing',
    'graphic-design-branding': 'Graphic Design & Branding',
    'data-analysis': 'Data Analysis',
    'ai-automation': 'AI & Automation',
    'consulting-training': 'Consulting & Training',
    'other': 'Other',
  };
  
  export const ContactNotification = ({
    firstName = "John",
    lastName, 
    email = "john.doe@example.com",
    phoneNumber,
    websiteUrl,
    companyName,
    services = ["web-app-development"],
    comments,
    budget = "$5,000 - $15,000",
    mailingList = false,
    submittedAt = "December 15, 2024 at 2:30 PM",
    logoUrl,
  }: ContactNotificationProps) => {
    const fullName = lastName ? `${firstName} ${lastName}` : firstName;
    const selectedServices = (services || []).map(serviceId => serviceLabels[serviceId] || serviceId);
    
    return (
      <Html lang="en">
        <Head>
          <title>New Contact Form Submission - InSite Tech Solutions</title>
        </Head>
        <Body style={emailStyles.main}>
          <EmailHeader logoUrl={logoUrl} />
          
          {/* Alert Header */}
          <Section style={alertSection}>
            <Container style={emailStyles.container}>
              <Text style={alertHeading}>
                🚨 New Contact Form Submission
              </Text>
              <Text style={alertSubtext}>
                Submitted on {submittedAt}
              </Text>
            </Container>
          </Section>

          <Container style={emailStyles.container}>
            <Section style={emailStyles.section}>
              <Text style={urgencyBadge}>Action Required</Text>
              
              <Text style={emailStyles.textLarge}>
                A new contact form submission has been received and requires your attention.
              </Text>

              {/* Customer Information Card */}
              <Section style={customerCard}>
                <Text style={cardTitle}>👤 Customer Information</Text>
                
                <div style={infoRowShort}>
                  <Text style={labelTextShort}>Name:</Text>
                  <Text style={valueText}>{fullName}</Text>
                </div>
                
                <div style={infoRowShort}>
                  <Text style={labelTextShort}>Email:</Text>
                  <Text style={valueText}>
                    <a href={`mailto:${email}`} style={emailStyles.link}>
                      {email}
                    </a>
                  </Text>
                </div>
                
                {phoneNumber && (
                  <div style={infoRowShort}>
                    <Text style={labelTextShort}>Phone:</Text>
                    <Text style={valueText}>
                      <a href={`tel:${phoneNumber}`} style={emailStyles.link}>
                        {phoneNumber}
                      </a>
                    </Text>
                  </div>
                )}

                {companyName && (
                  <div style={infoRowShort}>
                    <Text style={labelTextShort}>Company:</Text>
                    <Text style={valueText}>{companyName}</Text>
                  </div>
                )}

                {websiteUrl && (
                  <div style={infoRowShort}>
                    <Text style={labelTextShort}>Website:</Text>
                    <Text style={valueText}>
                      <a href={websiteUrl} style={emailStyles.link} target="_blank">
                        {websiteUrl}
                      </a>
                    </Text>
                  </div>
                )}
              </Section>

              {/* Project Details Card */}
              <Section style={projectCard}>
                <Text style={cardTitle}>🎯 Project Details</Text>
                
                <div style={infoRowLong}>
                  <Text style={labelTextLong}>Services Requested:</Text>
                  <Text style={valueText}>
                    {selectedServices.join(', ')}
                  </Text>
                </div>
                
                <div style={infoRowShort}>
                  <Text style={labelTextShort}>Budget:</Text>
                  <Text style={budgetText}>{budget}</Text>
                </div>

                <div style={infoRowLong}>
                  <Text style={labelTextLong}>Newsletter Signup:</Text>
                  <Text style={valueText}>
                    {mailingList ? '✅ Yes' : '❌ No'}
                  </Text>
                </div>
              </Section>

              {/* Message Card */}
              {comments && (
                <Section style={messageCard}>
                  <Text style={cardTitle}>💬 Additional Information</Text>
                  <Text style={messageText}>
                    {comments}
                  </Text>
                </Section>
              )}

              {/* Quick Actions */}
              <Section style={actionsCard}>
                <Text style={cardTitle}>⚡ Quick Actions</Text>
                
                <div style={actionRow}>
                  <div style={actionColumn}>
                    <Button style={primaryActionButton} href={`mailto:${email}?subject=Re: Your inquiry about ${selectedServices[0] || 'our services'}`}>
                      📧 Reply by Email
                    </Button>
                  </div>
                  {phoneNumber && (
                    <div style={actionColumn}>
                      <Button style={secondaryActionButton} href={`tel:${phoneNumber}`}>
                        📞 Call Customer
                      </Button>
                    </div>
                  )}
                </div>
                
                <div style={actionRow}>
                  <div style={actionColumn}>
                    <Button style={secondaryActionButton} href="https://insitetechsolutions.com/admin/contacts">
                      📋 View in CRM
                    </Button>
                  </div>
                  <div style={actionColumn}>
                    <Button style={secondaryActionButton} href="https://insitetechsolutions.com/admin/schedule">
                      📅 Schedule Follow-up
                    </Button>
                  </div>
                </div>
              </Section>

              <Hr style={emailStyles.hr} />

              {/* Response Guidelines */}
              <Section style={guidelinesCard}>
                <Text style={cardTitle}>📋 Response Guidelines</Text>
                <Text style={guidelineItem}>
                  ✅ <strong>Response Time:</strong> Aim to respond within 24-48 hours
                </Text>
                <Text style={guidelineItem}>
                  ✅ <strong>Personalization:</strong> Reference their specific services ({selectedServices.length > 0 ? selectedServices.join(', ') : 'their inquiry'}) and use their name ({fullName})
                </Text>
                <Text style={guidelineItem}>
                  ✅ <strong>Budget Awareness:</strong> Their budget range is {budget} - tailor your proposal accordingly
                </Text>
                <Text style={guidelineItem}>
                  ✅ <strong>Next Steps:</strong> Provide clear next steps or schedule a consultation
                </Text>
                <Text style={guidelineItem}>
                  ✅ <strong>Follow-up:</strong> Set a reminder for follow-up if no response within 48 hours
                </Text>
              </Section>

              <Text style={timestampText}>
                This notification was generated automatically on {submittedAt}
              </Text>
            </Section>
          </Container>

          <EmailFooter />
        </Body>
      </Html>
    );
  };
  export default ContactNotification;
  
  // Additional custom styles
  const alertSection = {
    backgroundColor: '#f8fdf8',
    borderTop: `4px solid rgb(94, 239, 68)`,
    borderBottom: `1px solid ${brandColors.background.border}`,
    padding: '24px 0',
    textAlign: 'center' as const,
  };
  
  const alertHeading = {
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: '700',
    color: '#0BDA51',
    textAlign: 'center' as const,
    margin: '0 0 8px 0',
    fontFamily: "'Kohinoor Latin', 'Open Sans', sans-serif",
  };
  
  const alertSubtext = {
    fontSize: '14px',
    color: '#0AAA40',
    textAlign: 'center' as const,
    margin: '0',
    fontWeight: '500',
  };
  
  const urgencyBadge = {
    ...emailStyles.badge,
    backgroundColor: '#0BDA51',
    margin: '0 0 16px 0',
  };
  
  const customerCard = {
    ...emailStyles.card,
    backgroundColor: brandColors.background.secondary,
    border: `1px solid ${brandColors.background.border}`,
    borderLeft: `4px solid ${brandColors.primary}`,
  };

  const projectCard = {
    ...emailStyles.card,
    backgroundColor: '#f0f9ff',
    border: `1px solid ${brandColors.light}`,
    borderLeft: `4px solid ${brandColors.accent}`,
  };
  
  const cardTitle = {
    fontSize: '18px',
    fontWeight: '600',
    color: brandColors.text.primary,
    margin: '0 0 16px 0',
    textAlign: 'center' as const,
  };
  
  const infoRowShort = {
    margin: '12px 0',
    borderBottom: `1px solid ${brandColors.background.border}`,
    paddingBottom: '8px',
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    gap: '8px',
  };
  
  const infoRowLong = {
    margin: '12px 0',
    borderBottom: `1px solid ${brandColors.background.border}`,
    paddingBottom: '8px',
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    gap: '12px',
  };
  
  const labelTextShort = {
    fontSize: '14px',
    fontWeight: '600',
    color: brandColors.text.muted,
    margin: '0',
    whiteSpace: 'nowrap' as const,
    minWidth: 'fit-content',
  };
  
  const labelTextLong = {
    fontSize: '14px',
    fontWeight: '600',
    color: brandColors.text.muted,
    margin: '0',
    minWidth: '60px',
  };
  
  const valueText = {
    fontSize: '16px',
    color: brandColors.text.primary,
    margin: '0',
    fontWeight: '500',
    wordBreak: 'break-word' as const,
  };

  const budgetText = {
    ...valueText,
    backgroundColor: brandColors.accent,
    color: brandColors.text.light,
    padding: '4px 8px',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '600',
    display: 'inline-block',
  };
  
  const messageCard = {
    ...emailStyles.messageSection,
    borderLeft: `4px solid ${brandColors.accent}`,
  };
  
  const messageText = {
    ...emailStyles.messageText,
    backgroundColor: brandColors.background.primary,
    border: `1px solid ${brandColors.background.border}`,
    minHeight: '100px',
  };
  
  const actionsCard = {
    ...emailStyles.card,
    backgroundColor: '#f0f9ff',
    border: `1px solid ${brandColors.light}`,
  };
  
  const actionRow = {
    margin: '12px 0',
    display: 'flex',
    gap: '8px',
    width: '100%',
  };
  
  const actionColumn = {
    textAlign: 'center' as const,
    flex: 1,
  };
  
  const primaryActionButton = {
    ...emailStyles.primaryButton,
    backgroundColor: brandColors.primary,
    fontSize: '14px',
    padding: '12px 20px',
    margin: '4px',
    width: '100%',
    boxSizing: 'border-box' as const,
  };
  
  const secondaryActionButton = {
    ...emailStyles.secondaryButton,
    fontSize: '14px',
    padding: '12px 20px',
    margin: '4px',
    width: '100%',
    boxSizing: 'border-box' as const,
  };
  
  const guidelinesCard = {
    ...emailStyles.card,
    backgroundColor: '#f8fdf8',
    border: `1px solid #22c55e`,
    borderLeft: `4px solid #16a34a`,
  };
  
  const guidelineItem = {
    ...emailStyles.textSmall,
    margin: '8px 0',
    textAlign: 'left' as const,
  };
  
  const timestampText = {
    ...emailStyles.textSmall,
    textAlign: 'center' as const,
    fontStyle: 'italic',
    color: brandColors.text.muted,
    marginTop: '24px',
  };