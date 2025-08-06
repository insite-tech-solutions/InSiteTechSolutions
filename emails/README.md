# InSite Tech Solutions Email System

A professional email template system built with React Email and Resend, designed to match the InSite Tech Solutions brand.

## 📧 Email Templates

### 1. Contact Form Confirmation (`ContactConfirmation`)
Sent to customers after they submit a contact form.

**Props:**
- `customerName: string` - Customer's name
- `submittedAt: string` - Submission timestamp
- `logoUrl?: string` - Optional logo URL

**Features:**
- ✅ Modern gradient hero section
- 📋 Clear next steps timeline
- 🚀 Call-to-action to explore services
- 📞 Contact information

### 2. Newsletter Confirmation (`NewsletterConfirm`)
Double opt-in email for newsletter subscriptions.

**Props:**
- `confirmationUrl: string` - Confirmation link URL
- `logoUrl?: string` - Optional logo URL

**Features:**
- 📧 Eye-catching confirmation prompt
- 🎯 Benefits of subscribing
- 🔒 Privacy and security assurances
- ⏰ 24-hour expiry notice

### 3. Newsletter Welcome (`NewsletterWelcome`)
Welcome email after newsletter confirmation.

**Props:**
- `unsubscribeUrl: string` - Unsubscribe link URL
- `logoUrl?: string` - Optional logo URL

**Features:**
- 🎉 Warm welcome message
- 📊 What subscribers can expect
- 🔗 Quick links to resources
- 📞 Easy unsubscribe option

### 4. Contact Notification (`ContactNotification`)
Internal notification sent to business team.

**Props:**
- `customerName: string` - Customer's name
- `customerEmail: string` - Customer's email
- `customerPhone?: string` - Optional phone number
- `subject: string` - Contact form subject
- `message: string` - Customer's message
- `submittedAt: string` - Submission timestamp
- `logoUrl?: string` - Optional logo URL

**Features:**
- 🚨 Urgent notification styling
- 👤 Organized customer information
- ⚡ Quick action buttons
- 📋 Response guidelines

## 🎨 Brand System

### Colors
The email system uses InSite Tech Solutions' brand colors:

```typescript
import { brandColors } from './components/brand-colors';

// Primary blues
brandColors.primary      // #1472bb (dark-blue)
brandColors.secondary    // #0e72c8 (medium-blue)
brandColors.accent       // #0173e3 (mild-blue)
brandColors.light        // #2398ff (light-blue)

// Text colors
brandColors.text.primary    // #111827
brandColors.text.secondary  // #374151
brandColors.text.muted      // #6b7280
brandColors.text.light      // #ffffff
```

### Styles
Consistent styling is provided through the shared style system:

```typescript
import { emailStyles } from './components/email-styles';

// Typography
emailStyles.heading      // Main headings
emailStyles.subheading   // Section headings
emailStyles.text         // Body text
emailStyles.textLarge    // Emphasized text

// Buttons
emailStyles.primaryButton    // Main CTA buttons
emailStyles.secondaryButton  // Secondary actions

// Layout
emailStyles.card         // Card sections
emailStyles.infoSection  // Information blocks
```

## 🚀 Usage

### Basic Example

```typescript
import { ContactConfirmation } from '@/emails';

const email = (
  <ContactConfirmation
    customerName="John Doe"
    submittedAt="January 15, 2025 at 2:30 PM"
    logoUrl="https://insitetechsolutions.com/Insite Tech Logo bg-white.png"
  />
);
```

### With Resend

```typescript
import { resend } from '@/lib/resend';
import { ContactConfirmation } from '@/emails';

await resend.emails.send({
  from: 'InSite Tech Solutions <noreply@insitetechsolutions.com>',
  to: [customerEmail],
  subject: 'Thank you for contacting us!',
  react: ContactConfirmation({
    customerName,
    submittedAt: new Date().toLocaleString(),
    logoUrl: 'https://insitetechsolutions.com/Insite Tech Logo bg-white.png',
  }),
});
```

## 🛠️ Customization

### Adding New Templates
1. Create a new template in `templates/`
2. Use the shared brand system:
   ```typescript
   import { emailStyles } from '../components/email-styles';
   import { brandColors } from '../components/brand-colors';
   ```
3. Export from `index.tsx`

### Modifying Brand Colors
Update `components/brand-colors.ts` to change the color scheme:

```typescript
export const brandColors = {
  primary: '#your-color',
  // ... other colors
};
```

### Custom Styles
Extend the shared styles in `components/email-styles.ts`:

```typescript
export const emailStyles = {
  // ... existing styles
  yourCustomStyle: {
    // custom properties
  },
};
```

## 📱 Mobile Responsiveness

All templates are designed to be mobile-responsive with:
- Maximum width of 600px
- Flexible layouts using tables and rows
- Readable font sizes (minimum 14px)
- Touch-friendly button sizes (minimum 44px height)

## 🔧 Development

### Preview Templates
Use React Email's preview feature:

```bash
npm run email:dev
```

### Testing
Test emails in different clients:
- Gmail (web, mobile)
- Outlook (web, desktop)
- Apple Mail
- Yahoo Mail

## 📈 Best Practices

### Deliverability
- Keep subject lines under 50 characters
- Use clear, actionable language
- Include text versions for all HTML emails
- Test with spam checkers

### Accessibility
- Use semantic HTML structure
- Include alt text for images
- Ensure good color contrast (4.5:1 minimum)
- Use descriptive link text

### Performance
- Optimize images (use WebP when possible)
- Keep email size under 100KB
- Use web-safe fonts with fallbacks
- Minimize external dependencies

## 📞 Support

For questions about the email system, contact the development team or refer to the main project documentation. 