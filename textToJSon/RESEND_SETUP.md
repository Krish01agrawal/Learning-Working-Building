# Resend Email Setup Guide

## Quick Setup (5 minutes)

Resend is much simpler than Mailgun and perfect for getting started quickly!

### Step 1: Sign Up for Resend

1. Go to https://resend.com/
2. Sign up for a free account (no credit card required for testing)
3. Verify your email address

### Step 2: Get Your API Key

1. Log in to Resend dashboard: https://resend.com/api-keys
2. Click "Create API Key"
3. Give it a name (e.g., "TextToJSON App")
4. Copy the API key (you'll only see it once!)

### Step 3: Update Your .env File

Add these lines to your `.env` file:

```env
# Resend Configuration
RESEND_API_KEY=re_your_api_key_here
SYSTEM_EMAIL=onboarding@resend.dev
```

**For Testing:**
- Use `onboarding@resend.dev` as SYSTEM_EMAIL (works immediately, no setup needed)
- You can send to any email address

**For Production:**
- Verify your domain at: https://resend.com/domains
- Use your verified domain: `noreply@yourdomain.com`

### Step 4: Test It!

```bash
node test-email-resend.js your-email@example.com
```

That's it! No domain verification needed for testing. 🎉

## Advantages of Resend

✅ **No domain setup for testing** - Use `onboarding@resend.dev` immediately
✅ **No authorized recipients list** - Send to any email
✅ **Simple API** - Clean, modern API
✅ **Free tier** - 3,000 emails/month free
✅ **Great documentation** - Easy to understand
✅ **Fast setup** - Get started in minutes

## Current Configuration

Update your `.env`:

```env
# Remove or comment out Mailgun (optional)
# MAILGUN_API_KEY=...
# MAILGUN_DOMAIN=...

# Add Resend
RESEND_API_KEY=re_your_api_key_here
SYSTEM_EMAIL=onboarding@resend.dev
```

## Testing

1. **Get API key from Resend dashboard**
2. **Update .env file**
3. **Test:**
   ```bash
   node test-email-resend.js krishagrawal3914@gmail.com
   ```

## Production Setup (Optional)

When ready for production:

1. **Verify your domain:**
   - Go to https://resend.com/domains
   - Add your domain
   - Add the DNS records they provide
   - Wait for verification

2. **Update .env:**
   ```env
   SYSTEM_EMAIL=noreply@yourdomain.com
   ```

## Troubleshooting

### "Invalid API key"
- Make sure you copied the full API key (starts with `re_`)
- Check for extra spaces in .env file

### "Domain not verified"
- For testing: Use `onboarding@resend.dev`
- For production: Verify domain in Resend dashboard

### Email not received
- Check spam folder
- Verify API key is correct
- Check Resend dashboard for delivery logs

## Next Steps

1. ✅ Sign up at https://resend.com/
2. ✅ Get API key from dashboard
3. ✅ Update .env file
4. ✅ Test with: `node test-email-resend.js your-email@example.com`
5. ✅ Use in your app!

