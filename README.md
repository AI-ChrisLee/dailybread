# Next.js Bootcamp Starter Template

A complete starter template for bootcamp students with Next.js, Supabase, shadcn/ui, and more.

## Quick Start

1. **Clone and Install**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   Then edit `.env.local` with your actual values.

3. **Initialize shadcn/ui**
   ```bash
   npx shadcn-ui@latest init -y
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

## What's Included

### Core Technologies
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components

### Pre-configured Services
- **Supabase** - Database, Auth, and Storage
- **Stripe** - Payment processing
- **Resend** - Email service
- **Vercel** - Deployment platform

### Development Tools
- ESLint & Prettier configured
- TypeScript strict mode
- Git-ready with .gitignore

## Project Structure

```
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   └── ui/          # shadcn/ui components
│   └── lib/             # Utility functions
│       └── utils.ts     # cn() helper
├── public/              # Static assets
├── .env.local.example   # Environment template
├── components.json      # shadcn/ui config
├── tailwind.config.ts   # Tailwind config
└── package.json         # Dependencies
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run typecheck` - Check TypeScript types

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your values:

### Supabase
- Get from: https://supabase.com/dashboard/project/_/settings/api

### Stripe
- Get from: https://dashboard.stripe.com/apikeys

### Resend
- Get from: https://resend.com/api-keys

## Adding Components

Use shadcn/ui CLI to add components:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add form
```

## Deployment

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)