import type { Metadata } from 'next'
import type { Article } from './articles'

function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return 'http://localhost:3000'
}

export const siteConfig = {
  name: 'AI Tools for Solopreneurs',
  description: 'In-depth reviews of 100+ AI tools to help solopreneurs work faster and grow their business.',
  url: resolveSiteUrl(),
}

export function buildMetadata(overrides: Partial<Metadata> & { path?: string } = {}): Metadata {
  const { path = '', ...rest } = overrides
  const url = `${siteConfig.url}${path}`
  const title = (rest.title as string) || siteConfig.name
  const description = rest.description || siteConfig.description

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    ...rest,
  }
}

export function articleMetadata(article: Article): Metadata {
  return buildMetadata({
    title: `${article.title} | ${siteConfig.name}`,
    description: article.excerpt,
    path: `/articles/${article.slug}`,
  })
}

export function articleJsonLd(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'SoftwareApplication',
      name: article.title,
      applicationCategory: article.category,
    },
    reviewRating: article.rating
      ? { '@type': 'Rating', ratingValue: article.rating, bestRating: 5 }
      : undefined,
    datePublished: article.date,
    author: { '@type': 'Organization', name: siteConfig.name },
  }
}
