# InSite Tech Solutions - Contact Form & Newsletter Setup Guide

This guide will help you set up the complete contact form and newsletter subscription system with email automation, rate limiting, and security features.

## 🚀 Quick Start

### 1. Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# Resend Configuration
RESEND_API_KEY=your_resend_api_key_here
FROM_EMAIL=noreply@insitetechsolutions.com
CONTACT_EMAIL=contact@insitetechsolutions.com

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# Cloudflare Turnstile
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key_here
TURNSTILE_SECRET_KEY=your_turnstile_secret_key_here

# Application Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NODE_ENV=development

# Rate Limiting
RATE_LIMIT_MAX=5
RATE_LIMIT_WINDOW=900

# Newsletter Confirmation
JWT_SECRET=your_jwt_secret_for_newsletter_confirmation_tokens_at_least_32_characters_long
```

### 2. Service Setup

#### Resend Email Service
1. Sign up at [resend.com](https://resend.com)
2. Verify your domain or use the sandbox domain for testing
3. Get your API key from the dashboard
4. Add your API key to `RESEND_API_KEY`

#### Supabase Database
1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Settings > API to get your URL and keys
3. Run the database schema from `scripts/supabase-schema.sql` in the SQL editor
4. Add your credentials to the environment variables

#### Cloudflare Turnstile
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to Turnstile
3. Create a new site
4. Get your site key and secret key
5. Add them to the environment variables

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

## 📧 Email Templates

The system includes 4 pre-built email templates:

1. **Contact Confirmation** - Sent to customers after form submission
2. **Contact Notification** - Sent to your business email with form details
3. **Newsletter Confirmation** - Double opt-in email for newsletter subscriptions
4. **Newsletter Welcome** - Welcome email after confirmation

All templates are responsive and match your brand colors.

## 🔧 API Endpoints

### Contact Form API
- **Endpoint**: `POST /api/contact`
- **Features**: 
  - Form validation with Zod
  - Rate limiting (5 requests per 15 minutes)
  - Turnstile verification
  - Automatic confirmation and notification emails

### Newsletter API
- **Subscription**: `POST /api/newsletter`
- **Confirmation**: `GET /api/newsletter/confirm?token=...`
- **Features**:
  - Double opt-in process
  - JWT token-based confirmation
  - Supabase database storage
  - Automatic welcome emails

## 🛡️ Security Features

### Rate Limiting
- Contact form: 5 submissions per 15 minutes per IP
- Newsletter: 3 subscriptions per 15 minutes per IP
- Confirmation: 10 attempts per hour per IP

### Cloudflare Turnstile
- Protects against bots and spam
- Automatic verification on form submission
- Fallback error handling

### Data Protection
- Row Level Security (RLS) enabled on Supabase
- JWT tokens for secure email confirmation
- IP address logging for abuse prevention

## 📱 Components Usage

### Contact Form
```tsx
import ContactForm from '@/components/reusable-components/contact-form'

// Basic usage
<ContactForm />

// Frosted glass variant
<ContactForm 
  variant="frosted" 
  headerTitle="Get Started Today"
  headerDescription="Let's discuss your project"
/>

// Without header
<ContactForm showHeader={false} />
```

### Newsletter Form
```tsx
import NewsletterForm from '@/components/reusable-components/newsletter-form'

// Default usage
<NewsletterForm />

// Custom title
<NewsletterForm 
  title="Join our newsletter for exclusive updates!"
  className="max-w-md"
/>
```

## 🗄️ Database Schema

The newsletter system uses a single table with the following structure:

```sql
newsletter_subscribers (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  status TEXT ('pending', 'confirmed', 'unsubscribed'),
  confirmation_token TEXT,
  created_at TIMESTAMPTZ,
  confirmed_at TIMESTAMPTZ,
  ip_address TEXT,
  privacy_policy_accepted BOOLEAN
)
```

## 📊 Analytics & Management

### Newsletter Statistics
Access subscriber stats via the database function:
```sql
SELECT get_newsletter_stats();
```

Returns:
- Total confirmed subscribers
- Pending confirmations
- Signups today
- Confirmations today

### Data Export
Export confirmed subscribers for your email campaigns:
```sql
SELECT email, confirmed_at 
FROM newsletter_subscribers 
WHERE status = 'confirmed' 
ORDER BY confirmed_at DESC;
```

### Cleanup
Remove expired pending subscriptions (older than 7 days):
```sql
SELECT cleanup_expired_tokens();
```

## 🔄 ERPNext Integration (Optional)

For CRM integration, you can extend the contact form API to also send data to ERPNext:

```typescript
// Add to contact form API route
const erpNextData = {
  doctype: "Lead",
  lead_name: formData.firstName + (formData.lastName ? ` ${formData.lastName}` : ''),
  email_id: formData.email,
  phone: formData.phoneNumber,
  company_name: formData.companyName,
  source: "Website Contact Form",
  // ... other fields
}

// Send to ERPNext API
await fetch(`${process.env.ERPNEXT_URL}/api/resource/Lead`, {
  method: 'POST',
  headers: {
    'Authorization': `token ${process.env.ERPNEXT_API_KEY}:${process.env.ERPNEXT_API_SECRET}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(erpNextData),
})
```

## 🚨 Troubleshooting

### Common Issues

1. **Emails not sending**
   - Check Resend API key and domain verification
   - Verify FROM_EMAIL domain is verified in Resend
   - Check server logs for detailed error messages

2. **Turnstile not loading**
   - Verify NEXT_PUBLIC_TURNSTILE_SITE_KEY is set
   - Check browser console for script loading errors
   - Ensure domain is added to Turnstile site configuration

3. **Database connection issues**
   - Verify Supabase URL and keys
   - Check if RLS policies are properly configured
   - Ensure service role key has proper permissions

4. **Rate limiting too strict**
   - Adjust RATE_LIMIT_MAX and RATE_LIMIT_WINDOW
   - Consider implementing user-specific rate limiting
   - Add IP whitelist for testing

### Testing

1. **Test contact form**:
   - Fill out form with valid data
   - Check both confirmation and notification emails
   - Verify rate limiting works

2. **Test newsletter**:
   - Subscribe with a test email
   - Check confirmation email and click link
   - Verify welcome email is sent
   - Check database for proper status updates

3. **Test security**:
   - Try submitting without Turnstile
   - Test rate limiting by rapid submissions
   - Verify expired tokens are handled properly

## 📞 Support

If you need help with setup or encounter issues:

1. Check the browser console for client-side errors
2. Check server logs for API errors
3. Verify all environment variables are set correctly
4. Test each service independently (Resend, Supabase, Turnstile)

## 🔄 Updates & Maintenance

### Regular Tasks
- Monitor email delivery rates in Resend dashboard
- Clean up expired newsletter tokens weekly
- Review rate limiting logs for abuse patterns
- Update Turnstile configuration as needed

### Scaling Considerations
- Consider Redis for rate limiting in production
- Implement email queue for high volume
- Add monitoring and alerting for failed emails
- Consider CDN for Turnstile script loading 