# Newsletter Mail Merge Workflow

## 📧 **Sending Newsletters with External Email Clients**

This guide explains how to send newsletters using Thunderbird, Proton Mail, or other email clients with mail merge functionality.

## **🔧 Step 1: Export Subscriber Data**

Run the export script to get your subscriber list with unsubscribe tokens:

```bash
npm run export-newsletter
```

This creates a CSV file in the `exports/` directory with:
- `email` - Subscriber email address
- `firstName` - First name for personalization
- `name` - Full name
- `unsubscribeUrl` - Complete unsubscribe link with secure token

## **📝 Step 2: Create Your Newsletter**

Use the template in `emails/templates/newsletter-template.html` as a starting point.

### **Mail Merge Fields Available:**
- `{{email}}` - Subscriber email
- `{{firstName}}` - First name only
- `{{name}}` - Full name
- `{{unsubscribeUrl}}` - Secure unsubscribe link

### **Required Elements:**
- ✅ Unsubscribe link: `<a href="{{unsubscribeUrl}}">Unsubscribe</a>`
- ✅ Your business name and address
- ✅ Clear sender identification

## **📮 Step 3: Mail Merge Setup**

### **Thunderbird (with Mail Merge Add-on):**
1. Install the "Mail Merge" add-on
2. Import the CSV file
3. Create your email template with merge fields
4. Use `{{unsubscribeUrl}}` for the unsubscribe link
5. Send to all subscribers

### **Proton Mail:**
1. Use Proton's built-in mail merge feature
2. Upload the CSV file
3. Map the fields in your template
4. Include the `{{unsubscribeUrl}}` in your footer

### **Other Email Clients:**
Most modern email clients support CSV import and mail merge. The key is ensuring the `{{unsubscribeUrl}}` field is properly mapped.

## **🔒 Security Best Practices**

### **Before Sending:**
- ✅ Test with a small group first
- ✅ Verify unsubscribe links work
- ✅ Check spam score with tools like Mail Tester
- ✅ Ensure your domain's SPF/DKIM records are configured

### **After Sending:**
- ✅ Delete the CSV file from your computer
- ✅ Monitor bounce rates
- ✅ Check for unsubscribe requests

## **📊 Tracking & Analytics**

The unsubscribe links automatically track when users opt out. You can monitor:
- Unsubscribe rates
- Email engagement
- Subscriber growth

Check your Supabase dashboard for real-time analytics.

## **⚖️ Legal Compliance**

### **Required by Law:**
- ✅ Clear unsubscribe mechanism
- ✅ Your business name and address
- ✅ Honest subject lines
- ✅ Honor unsubscribe requests within 10 days

### **Best Practices:**
- ✅ Only email confirmed subscribers
- ✅ Include reason for receiving email
- ✅ Make unsubscribe easy and obvious
- ✅ Don't require login to unsubscribe

## **🚨 Important Notes**

1. **Token Security**: Each unsubscribe URL contains a unique, secure token valid for 1 year
2. **One-Time Use**: Export fresh data for each campaign to ensure security
3. **Rate Limits**: Your website's unsubscribe endpoint has rate limiting for security
4. **GDPR Compliance**: Users can unsubscribe instantly without confirmation

## **🔧 Troubleshooting**

### **Common Issues:**
- **Unsubscribe links not working**: Check token hasn't expired (1 year limit)
- **High bounce rate**: Verify your domain's email authentication
- **Spam folder delivery**: Check SPF/DKIM records and content

### **Support:**
If you encounter issues, check the logs in your Next.js application or contact your email service provider.





# Addendum 

Here's why it works and how you can do it:
Token Generation is Separate and Accessible:
The function to create these unsubscribe tokens, generateUnsubscribeToken(email: string), resides in your src/lib/jwt.ts file.
This function is independent of any specific API route during its generation. You can call this function whenever you need to create an unsubscribe token for a given email address.
How You'll Generate Tokens for Manual Emails:
When you prepare your list of confirmed subscribers for a MailMerge campaign (e.g., by exporting from your Supabase confirmed_newsletter_subscribers view), you'll have a list of email addresses.
For each email address in your campaign list, you will need to generate an unsubscribe token. You can do this by:
Writing a simple script: Create a small Node.js script (e.g., generate-unsubscribe-links.js) that imports generateUnsubscribeToken from your src/lib/jwt.ts and also your process.env.JWT_SECRET (you'll need to manage environment variables for the script, perhaps using dotenv package). This script would read your list of emails, generate a token for each, and then output a new list/CSV with an added column for the full unsubscribe URL (e.g., https://yourdomain.com/api/newsletter/unsubscribe?token=THE_GENERATED_TOKEN).
Integrating into a helper function: If you have a backend or admin panel, you could add a helper function there.
The key is that generateUnsubscribeToken(email) is a utility function you can call on demand.








---

*Last Updated: January 29, 2025* 