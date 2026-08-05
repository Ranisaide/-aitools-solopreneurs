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
    alternates: {
      canonical: url,
      // French and UK-English versions aren't published yet — these hreflang
      // tags are prep work so search engines already know the site plans to
      // serve locale variants once that content ships.
      languages: {
        en: url,
        'en-GB': url,
        fr: url,
        'x-default': url,
      },
    },
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

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/articles?category={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function breadcrumbJsonLd(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'All Reviews', item: `${siteConfig.url}/articles` },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `${siteConfig.url}/articles/${article.slug}`,
      },
    ],
  }
}
