# AURA — Smart Heated Mug (landing page)

A scroll-animated, single-page product site built with Next.js 14 (App Router), TypeScript, Tailwind CSS and Framer Motion. English only, prices in USD.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel choose **Add New > Project**, import the repo, and keep the defaults (Framework: Next.js, Root Directory: the folder that contains `package.json`).
3. Click **Deploy**. No environment variables are required.

## Where to edit things

| What | File |
|---|---|
| All copy, prices, features, FAQ, image paths | `src/lib/content.ts` |
| Hero and dark-gallery scroll effect | `src/components/ScrollFrame.tsx` |
| "Meet Steel & Noir" slide-in section | `src/components/Products.tsx` |
| Email sign-up form | `src/components/Reserve.tsx` |
| Images | `public/images/` (replace a file, keep the same name) |

## Notes

- The "Reserve" form validates the email on the client and shows a thank-you message. It does not store emails. To collect them, connect it to a service such as Resend, Formspree or a Supabase table.
- Footer links point to on-page sections (FAQ answers shipping, returns and warranty).
- Product images are AI-generated concept renders. Replace them with real product photography for a live brand.
