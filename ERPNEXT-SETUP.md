# ERPNext CRM Integration Setup

This guide will help you set up the ERPNext CRM integration for your contact form system.

## Prerequisites

1. **ERPNext Instance**: You need a running ERPNext instance (cloud or self-hosted)
2. **API Access**: API access enabled in your ERPNext instance
3. **Credentials**: API Key and Secret from ERPNext

## ERPNext Configuration

### 1. Enable API Access

1. Log into your ERPNext instance as Administrator
2. Go to **Setup > Users and Permissions > API Access**
3. Make sure API access is enabled

### 2. Create API Key and Secret

1. Go to **Setup > Integrations > Token**
2. Create a new Token with:
   - **User**: Your admin user or a dedicated API user
   - **Generate Keys**: Check this option
3. Save and note down the **API Key** and **API Secret**

### 3. Set Up Custom Fields (Optional)

The integration will work with standard ERPNext fields, but you may want to add custom fields for better tracking:

#### For Lead DocType:
- `custom_services_requested` (Small Text)
- `custom_budget_range` (Data)
- `custom_additional_notes` (Long Text)

#### For Contact DocType:
- `custom_source` (Data)

To add these fields:
1. Go to **Setup > Customize > Custom Field**
2. Create the fields for the respective DocTypes

## Environment Variables

Add these variables to your `.env.local` file:

```bash
# ERPNext CRM Integration
ERPNEXT_URL=https://your-erpnext-domain.com
ERPNEXT_API_KEY=your_api_key_here
ERPNEXT_API_SECRET=your_api_secret_here
```

## Features

### 1. Manual Lead Creation

When a contact form is submitted, you'll receive an email notification with a "📋 Add as Lead" button. Clicking this button will:

- Create a Lead record in ERPNext with services, budget, and additional notes
- ERPNext automatically creates an associated Contact record
- Display a success page with links to ERPNext and contact actions

### 2. Duplicate Prevention

The system automatically checks for existing contacts/leads by email address to prevent duplicates.

## Data Mapping

### Contact Form → ERPNext Contact
- `firstName` → `first_name`
- `lastName` → `last_name`
- `email` → `email_id`
- `phoneNumber` → `mobile_no`
- `companyName` → `company_name`
- `websiteUrl` → `website`

### Contact Form → ERPNext Lead
- `firstName + lastName` → `lead_name`
- `email` → `email_id`
- `phoneNumber` → `mobile_no`
- `companyName` → `company_name`
- `websiteUrl` → `website`
- `services` → `custom_services_requested`
- `budget` → `custom_budget_range`
- `comments` → `custom_additional_notes`
- `source` → "Website Contact Form"
- `status` → "Lead"
- `industry` → "Technology"
- `qualification_status` → "Unqualified"

## Testing

### 1. Test API Connection

You can test your ERPNext API connection by submitting a contact form and checking the server logs for any CRM integration errors.

### 2. Manual Test

Create a test contact form submission and click the "Add to CRM" button in the email notification to verify the integration works.

### 3. Verify in ERPNext

After adding contacts, check your ERPNext instance:
- **CRM > Lead > Lead List** - to see new leads
- **CRM > Contact > Contact List** - to see new contacts

## Troubleshooting

### Common Issues

1. **API Authentication Errors**
   - Verify your API Key and Secret are correct
   - Ensure the API user has proper permissions

2. **Network Errors**
   - Check that your ERPNext URL is accessible
   - Verify firewall settings if using self-hosted ERPNext

3. **Custom Field Errors**
   - Custom fields are optional - the integration will work without them
   - Ensure custom field names match exactly if you create them

### Error Logs

Check your application logs for detailed error messages:
```bash
# For Next.js development
npm run dev

# Check browser console for client-side errors
# Check terminal/server logs for API errors
```

## Security Considerations

1. **API Credentials**: Keep your ERPNext API credentials secure and never expose them in client-side code
2. **Rate Limiting**: The system includes rate limiting for contact form submissions
3. **Validation**: All data is validated before being sent to ERPNext
4. **Error Handling**: CRM integration failures won't prevent contact form submissions

## Support

If you encounter issues with the ERPNext integration, check:

1. ERPNext documentation: https://docs.erpnext.com/
2. ERPNext API documentation: https://docs.erpnext.com/api
3. This application's logs for specific error messages

## Advanced Configuration

### Custom Service Mapping

You can modify the service mapping in `src/lib/erpnext.ts` to match your specific service offerings.

### Custom Field Configuration

If you need additional custom fields, modify the `ERPNextContact` and `ERPNextLead` interfaces in the ERPNext library.

### Workflow Integration

Consider setting up ERPNext workflows to automatically assign leads to team members or trigger follow-up actions. 