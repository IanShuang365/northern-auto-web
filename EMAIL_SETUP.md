# Email Setup Guide

## Setting up EmailJS for Contact Form

To enable email functionality on the contact page, follow these steps:

### 1. Create an EmailJS Account
- Visit https://www.emailjs.com/
- Sign up for a free account
- Verify your email address

### 2. Get Your Public Key
- Log in to your EmailJS dashboard
- Go to **Account** → **API Keys**
- Copy your **Public Key**

### 3. Create an Email Service
- In the dashboard, go to **Email Services**
- Click **Add Service**
- Select your email provider (Gmail, Outlook, etc.) or use EmailJS SMTP
- Follow the setup instructions
- Copy the **Service ID**

### 4. Create an Email Template
- Go to **Email Templates**
- Click **Create New Template**
- Set up your template with these variables:
  - `{{to_email}}` - Recipient email (sales@northernauto.com)
  - `{{from_name}}` - Sender's name
  - `{{from_email}}` - Sender's email
  - `{{phone}}` - Sender's phone
  - `{{subject}}` - Email subject
  - `{{message}}` - Email message
  - `{{reply_to}}` - Reply-to email address

Example template content:
```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}} <{{from_email}}>
Phone: {{phone}}

Message:
{{message}}

---
This is an automated email from your website contact form.
Reply to: {{reply_to}}
```

- Copy the **Template ID**

### 5. Update the Contact.tsx File
Open `/src/pages/Contact.tsx` and replace:
- `'YOUR_PUBLIC_KEY_HERE'` with your EmailJS Public Key
- `'YOUR_SERVICE_ID_HERE'` with your EmailJS Service ID
- `'YOUR_TEMPLATE_ID_HERE'` with your EmailJS Template ID

```typescript
emailjs.init('YOUR_PUBLIC_KEY_HERE'); // Line ~20

// In the handleSubmit function around line 46:
await emailjs.send(
  'YOUR_SERVICE_ID_HERE',
  'YOUR_TEMPLATE_ID_HERE',
  templateParams
);
```

### 6. Test the Form
- Start your development server: `npm run dev`
- Navigate to the Contact page
- Fill out and submit the form
- You should receive an email!

## Alternative: Using Backend API

If you prefer to use a backend API instead of EmailJS, you can:
1. Set up a Node.js/Express server
2. Use Nodemailer for email sending
3. Update the `handleSubmit` function to call your API endpoint

Contact support if you need help setting this up.
