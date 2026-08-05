import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import Newsletter from '@/components/Newsletter'
import { getAllArticles } from '@/lib/articles'
import { websiteJsonLd } from '@/lib/seo'

const FILTERS = [
  { label: 'Free Tools', href: '/articles?filter=free' },
  { label: 'Under $20/mo', href: '/articles?filter=under-20' },
  { label: 'For Writing', href: '/articles?category=Writing' },
  { label: 'For Design', href: '/articles?category=Design' },
]

const STATS = [
  { label: '100+ Tools Tested', value: '100+' },
  { label: '100% Honest Reviews', value: '100%' },
  { label: 'Real ROI Data', value: 'ROI' },
]

export default function HomePage() {
  const articles = getAllArticles()
  const featured = articles.slice(0, 9)

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
      />

      <section className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          100+ AI Tools, Reviewed for Solopreneurs
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Honest, hands-on reviews of the AI tools that actually save solo founders time and money.
        </p>
        <Link
          href="/articles"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-700"
        >
          Browse all {articles.length} reviews
        </Link>
      </section>

      <section className="mt-12">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {FILTERS.map((filter) => (
            <Link
              key={filter.label}
              href={filter.href}
              className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
            >
              {filter.label}
            </Link>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-gray-100 bg-gradient-to-br from-brand-50 to-white p-6 text-center shadow-sm"
            >
              <p className="text-2xl font-extrabold text-brand-700">{stat.value}</p>
              <p className="mt-1 text-sm font-medium text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Latest Reviews</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <div className="mt-20">
        <Newsletter />
      </div>
    </div>
  )
}
