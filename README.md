# AI Tools for Solopreneurs

100+ in-depth AI tool reviews for solopreneurs, built with Next.js 14 (App Router) and MDX.
Content is monetized through 16+ affiliate programs across writing, design, video, SEO,
marketing, automation, coding, and more.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- MDX content with `gray-matter` frontmatter, rendered via `next-mdx-remote`
- Google Analytics 4 + Google AdSense

## Project Structure

```
app/                     Routes (home, articles archive, article page, search API, sitemap, robots)
components/              Header, Footer, ArticleCard, AffiliateButton, TOC, RelatedArticles, Newsletter, SearchBox, ReadingList
lib/
  articles.ts            Reads content/articles/*.mdx and parses each article with gray-matter
  affiliates.ts          15+ affiliate program definitions and tracked URLs
  seo.ts                 Shared metadata + JSON-LD helpers
content/articles/        MDX review content, batched into 4 files (100 articles total)
```

Each batch `.mdx` file contains multiple articles separated by an `===ARTICLE===` delimiter,
so every article still has its own YAML frontmatter (`title`, `slug`, `category`, `excerpt`,
`date`, `rating`, optional `affiliateSlug`) parsed independently by `lib/articles.ts`.

## Setup

```bash
npm install
cp .env.local .env.local.bak   # optional: keep the template as a backup
npm run dev
```

## Environment Variables

See `.env.local` (already included as a template with test values):

```
NEXT_PUBLIC_ADSENSE_ID=ca-pub-test123
NEXT_PUBLIC_GA4_ID=G-test123
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Replace with your real AdSense client ID, GA4 measurement ID, and production URL before deploying.
Affiliate tracking IDs are read from `NEXT_PUBLIC_AFF_<PROGRAM>` variables (see `lib/affiliates.ts`);
unset variables fall back to a `demo` tracking value.

## Deploy to Vercel

1. Push this repo to GitHub (already done if you're reading this on GitHub).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Add the environment variables above (and any `NEXT_PUBLIC_AFF_*` affiliate IDs you have) in
   the Vercel project settings.
4. Deploy — Vercel auto-detects Next.js, no build configuration needed.

## Affiliate Programs

| Program | Category |
|---|---|
| Jasper AI | Writing |
| Copy.ai | Writing |
| Grammarly | Writing |
| Notion | Productivity |
| ClickUp | Productivity |
| Semrush | SEO |
| Surfer SEO | SEO |
| Canva Pro | Design |
| Midjourney | Design |
| Descript | Video & Audio |
| Synthesia | Video & Audio |
| ElevenLabs | Video & Audio |
| Zapier | Automation |
| Make | Automation |
| HubSpot | CRM & Sales |
| Kit (ConvertKit) | Email Marketing |

Full config with tracked URLs lives in `lib/affiliates.ts`. Every affiliate CTA renders through
the `<AffiliateButton slug="..." />` component, which also displays an affiliate disclosure.
