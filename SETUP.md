# Initial Setup Guide

Follow these steps to get your project running:

## 1. Install Dependencies

```bash
npm install
```

## 2. Environment Variables

1. Copy the example file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Get your credentials:

   ### Supabase
   - Go to [Supabase Dashboard](https://supabase.com/dashboard)
   - Create a new project or select existing
   - Go to Settings → API
   - Copy:
     - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
     - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY`

   ### Stripe
   - Go to [Stripe Dashboard](https://dashboard.stripe.com)
   - Get API keys from Developers → API keys
   - For webhooks: Developers → Webhooks → Add endpoint
     - Endpoint URL: `https://your-domain.com/api/webhooks/stripe`
     - Select events you want to listen to
     - Copy signing secret

   ### Resend
   - Go to [Resend Dashboard](https://resend.com)
   - Create API key in API Keys section
   - Add and verify your domain in Domains section

## 3. Initialize shadcn/ui

```bash
npx shadcn-ui@latest init -y
```

## 4. Database Setup (Supabase)

1. Go to Supabase SQL Editor
2. Run your initial schema migrations
3. Set up Row Level Security (RLS) policies
4. Enable required extensions (if needed):
   ```sql
   CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
   ```

## 5. Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000

## Common Issues

### Supabase Auth Not Working
- Check that your Site URL is set correctly in Supabase Auth settings
- For local development: `http://localhost:3000`
- Add redirect URLs for OAuth providers

### Stripe Webhooks in Development
Use Stripe CLI for local webhook testing:
```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

### Environment Variables Not Loading
- Ensure `.env.local` file is in root directory
- Restart development server after changes
- Check for typos in variable names

## Next Steps

1. Add your first shadcn/ui components:
   ```bash
   npx shadcn-ui@latest add button card form
   ```

2. Create your database schema
3. Set up authentication flow
4. Implement core features
5. Deploy to Vercel