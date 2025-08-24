/**
 * @fileoverview Contact Notification Email Template.
 *
 * This template is used to notify internal team members about new contact form submissions.
 * It provides a comprehensive summary of the submitted information, including customer details,
 * project requirements, budget, and quick action links for efficient lead management.
 *
 * Purpose:
 * - **Immediate Notification**: Alerts team members to new inquiries promptly.
 * - **Information Summary**: Consolidates all relevant contact form data into a single, digestible email.
 * - **Streamlined Workflow**: Offers direct links for replying, calling, adding to CRM, and scheduling follow-ups.
 * - **Response Guidelines**: Provides a checklist for consistent and effective lead follow-up.
 *
 * Technical Details:
 * - Uses `@react-email/components` for structuring email-compatible HTML.
 * - Integrates `EmailHeader` and `EmailFooter` for consistent branding.
 * - Utilizes `emailStyles` and `brandColors` for global and specific styling.
 * - Dynamically renders customer and project details based on `ContactNotificationProps`.
 * - Features interactive buttons for quick actions.
 * - Includes a predefined mapping (`serviceLabels`) for converting service IDs to readable names.
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
  } from '@react-email/components';
  import { EmailHeader } from '../components/header';
  import { EmailFooter } from '../components/footer';
  import { emailStyles } from '../components/email-styles';
  import { brandColors } from '../components/brand-colors';
  
  /**
   * Props for the `ContactNotification` component.
   * @interface ContactNotificationProps
   */
  interface ContactNotificationProps {
    /**
     * The first name of the customer.
     */
    firstName: string;
    /**
     * The email address of the customer.
     */
    email: string;
    /**
     * An array of service IDs requested by the customer.
     */
    services: string[];
    /**
     * The budget range specified by the customer.
     */
    budget: string;
    /**
     * The timestamp or formatted date string indicating when the form was submitted.
     */
    submittedAt: string;
    
    /**
     * The last name of the customer (optional).
     */
    lastName?: string;
    /**
     * The phone number of the customer (optional).
     */
    phoneNumber?: string;
    /**
     * The website URL provided by the customer (optional).
     */
    websiteUrl?: string;
    /**
     * The company name provided by the customer (optional).
     */
    companyName?: string;
    /**
     * Additional comments or message from the customer (optional).
     */
    comments?: string;
    /**
     * Indicates if the customer opted to join the mailing list (optional).
     */
    mailingList?: boolean;
    
    /**
     * Optional URL for the logo to be displayed in the email header.
     */
    logoUrl?: string;
  }

  /**
   * A mapping from service form IDs to more readable labels.
   * @type {Record<string, string>}
   */
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
  
/**
 * Renders the contact notification email template for internal team members.
 * This email provides a detailed summary of a new contact form submission
 * and quick actions for efficient lead management.
 *
 * @param {ContactNotificationProps} props - The properties for the component.
 * @returns {JSX.Element} The JSX element representing the contact notification email.
 */
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
}: ContactNotificationProps): JSX.Element => {
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
                    <Button style={secondaryActionButton} href={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.insitetechsolutions.com'}/api/crm/add-contact?email=${encodeURIComponent(email)}&firstName=${encodeURIComponent(firstName)}${lastName ? `&lastName=${encodeURIComponent(lastName)}` : ''}${phoneNumber ? `&phone=${encodeURIComponent(phoneNumber)}` : ''}${companyName ? `&company=${encodeURIComponent(companyName)}` : ''}${websiteUrl ? `&website=${encodeURIComponent(websiteUrl)}` : ''}&services=${encodeURIComponent(services.join(','))}&budget=${encodeURIComponent(budget)}${comments ? `&comments=${encodeURIComponent(comments)}` : ''}&source=contact_form`}>
                      📋 Add to CRM
                    </Button>
                  </div>
                  <div style={actionColumn}>
                    <Button style={secondaryActionButton} href={`mailto:${email}?subject=Schedule Follow-up: ${fullName} - ${selectedServices[0] || 'Project Discussion'}&body=Hi ${firstName},%0D%0A%0D%0AI'd like to schedule a follow-up call to discuss your ${selectedServices[0] || 'project requirements'} in more detail.%0D%0A%0D%0APlease let me know your availability for a 30-minute consultation.%0D%0A%0D%0ABest regards,%0D%0AInSite Tech Solutions Team`}>
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
                  ✅ <strong>Lead Creation:</strong> Click &quot;Add to CRM&quot; above to create a lead record and contact in ERPNext CRM
                </Text>
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
  /**
   * Styles for the alert section at the top of the email.
   */
  const alertSection: React.CSSProperties = {
    backgroundColor: '#f8fdf8',
    borderTop: `4px solid rgb(94, 239, 68)`,
    borderBottom: `1px solid ${brandColors.background.border}`,
    padding: '24px 0',
    textAlign: 'center' as const,
  };
  
  /**
   * Styles for the main heading in the alert section.
   */
  const alertHeading: React.CSSProperties = {
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: '700',
    color: '#0BDA51',
    textAlign: 'center' as const,
    margin: '0 0 8px 0',
    fontFamily: "'Kohinoor Latin', 'Open Sans', sans-serif",
  };
  
  /**
   * Styles for the subtext in the alert section.
   */
  const alertSubtext: React.CSSProperties = {
    fontSize: '14px',
    color: '#0AAA40',
    textAlign: 'center' as const,
    margin: '0',
    fontWeight: '500',
  };
  
  /**
   * Styles for the urgency badge, indicating action is required.
   */
  const urgencyBadge: React.CSSProperties = {
    ...emailStyles.badge,
    backgroundColor: '#0BDA51',
    margin: '0 0 16px 0',
  };
  
  /**
   * Styles for the customer information card.
   * Extends `emailStyles.card`.
   */
  const customerCard: React.CSSProperties = {
    ...emailStyles.card,
    backgroundColor: brandColors.background.secondary,
    border: `1px solid ${brandColors.background.border}`,
    borderLeft: `4px solid ${brandColors.primary}`,
  };
  
  /**
   * Styles for the project details card.
   * Extends `emailStyles.card`.
   */
  const projectCard: React.CSSProperties = {
    ...emailStyles.card,
    backgroundColor: '#f0f9ff',
    border: `1px solid ${brandColors.light}`,
    borderLeft: `4px solid ${brandColors.accent}`,
  };
  
  /**
   * Styles for the message (comments) card.
   * Extends `emailStyles.messageSection`.
   */
  const messageCard: React.CSSProperties = {
    ...emailStyles.messageSection,
    borderLeft: `4px solid ${brandColors.accent}`,
  };
  
  /**
   * Styles for the quick actions card.
   * Extends `emailStyles.card`.
   */
  const actionsCard: React.CSSProperties = {
    ...emailStyles.card,
    backgroundColor: '#f0f9ff',
    border: `1px solid ${brandColors.light}`,
  };
  
  /**
   * Styles for the response guidelines card.
   * Extends `emailStyles.card`.
   */
  const guidelinesCard: React.CSSProperties = {
    ...emailStyles.card,
    backgroundColor: '#f8fdf8',
    border: `1px solid #22c55e`,
    borderLeft: `4px solid #16a34a`,
  };
  
  /**
   * Styles for the title within various cards (customer, project, message, etc.).
   */
  const cardTitle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: '600',
    color: brandColors.text.primary,
    margin: '0 0 16px 0',
    textAlign: 'center' as const,
  };
  
  /**
   * Styles for a short information row (label and value side-by-side).
   */
  const infoRowShort: React.CSSProperties = {
    margin: '12px 0',
    borderBottom: `1px solid ${brandColors.background.border}`,
    paddingBottom: '8px',
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    gap: '8px',
  };
  
  /**
   * Styles for a longer information row, typically for multi-line content.
   */
  const infoRowLong: React.CSSProperties = {
    margin: '12px 0',
    borderBottom: `1px solid ${brandColors.background.border}`,
    paddingBottom: '8px',
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    gap: '12px',
  };
  
  /**
   * Styles for the label text in information rows (short).
   */
  const labelTextShort: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: '600',
    color: brandColors.text.muted,
    margin: '0',
    whiteSpace: 'nowrap' as const,
    minWidth: 'fit-content',
  };
  
  /**
   * Styles for the label text in information rows (long).
   */
  const labelTextLong: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: '600',
    color: brandColors.text.muted,
    margin: '0',
    minWidth: '60px',
  };
  
  /**
   * Styles for the value text in information rows.
   */
  const valueText: React.CSSProperties = {
    fontSize: '16px',
    color: brandColors.text.primary,
    margin: '0',
    fontWeight: '500',
    wordBreak: 'break-word' as const,
  };
  
  /**
   * Styles for the budget text, with a distinct color.
   */
  const budgetText: React.CSSProperties = {
    ...valueText,
    backgroundColor: brandColors.accent,
    color: brandColors.text.light,
    padding: '4px 8px',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '600',
    display: 'inline-block',
  };
  
  /**
   * Styles for the message (comments) text area.
   */
  const messageText: React.CSSProperties = {
    ...emailStyles.messageText,
    backgroundColor: brandColors.background.primary,
    border: `1px solid ${brandColors.background.border}`,
    minHeight: '100px',
  };
  
  /**
   * Styles for a row of action buttons, using flex display.
   */
  const actionRow: React.CSSProperties = {
    margin: '12px 0',
    display: 'flex',
    gap: '8px',
    width: '100%',
  };
  
  /**
   * Styles for a column within an action row.
   */
  const actionColumn: React.CSSProperties = {
    textAlign: 'center' as const,
    flex: 1,
  };
  
  /**
   * Styles for the primary action button.
   */
  const primaryActionButton: React.CSSProperties = {
    ...emailStyles.primaryButton,
    backgroundColor: brandColors.primary,
    fontSize: '14px',
    padding: '12px 20px',
    margin: '4px',
    width: '100%',
    boxSizing: 'border-box' as const,
  };
  
  /**
   * Styles for secondary action buttons.
   */
  const secondaryActionButton: React.CSSProperties = {
    ...emailStyles.secondaryButton,
    fontSize: '14px',
    padding: '12px 20px',
    margin: '4px',
    width: '100%',
    boxSizing: 'border-box' as const,
  };
  
  /**
   * Styles for an individual guideline item.
   */
  const guidelineItem: React.CSSProperties = {
    ...emailStyles.textSmall,
    margin: '8px 0',
    textAlign: 'left' as const,
  };
  
  /**
   * Styles for the timestamp text at the bottom of the email.
   */
  const timestampText: React.CSSProperties = {
    ...emailStyles.textSmall,
    textAlign: 'center' as const,
    fontStyle: 'italic',
    color: brandColors.text.muted,
    marginTop: '24px',
  };