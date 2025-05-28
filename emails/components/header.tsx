import {
    Img,
    Section,
    Container,
    Row,
    Column,
  } from '@react-email/components';
import { brandColors } from './brand-colors';
  
  interface HeaderProps {
    logoUrl?: string;
  }
  
  export const EmailHeader = ({ logoUrl }: HeaderProps) => {
    return (
      <Section style={headerSection}>
        <Container style={container}>
          <Row>
            <Column>
              {logoUrl ? (
                <Img
                  src={logoUrl}
                  width="220"
                  height="70"
                  alt="InSite Tech Solutions"
                  style={logo}
                />
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
  
  const headerSection = {
    backgroundColor: brandColors.background.primary,
    padding: '24px 0',
    borderBottom: `1px solid ${brandColors.background.border}`,
  };
  
  const container = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '0 24px',
  };
  
  const logo = {
    margin: '0 auto',
    display: 'block',
  };
  
  const logoTextFallback = {
    textAlign: 'center' as const,
    padding: '12px 0',
  };
  
  const logoText = {
    fontSize: '24px',
    fontWeight: '700',
    color: brandColors.primary,
    fontFamily: "'Kohinoor Latin', 'Open Sans', sans-serif",
    letterSpacing: '0.5px',
  };