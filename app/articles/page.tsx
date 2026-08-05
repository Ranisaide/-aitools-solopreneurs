import type { Metadata } from 'next'
import ArticleCard from '@/components/ArticleCard'
import { getAllArticles } from '@/lib/articles'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'All AI Tool Reviews | AI Tools for Solopreneurs',
  description: 'Browse every AI tool review, organized by category.',
  path: '/articles',
})

type SearchParams = { category?: string; filter?: string }

export default function ArticlesArchivePage({ searchParams }: { searchParams: SearchParams }) {
  const articles = getAllArticles()
  const categories = Array.from(new Set(articles.map((article) => article.category))).sort()

  const { category, filter } = searchParams
  let filtered = articles
  let activeLabel = ''

  if (category) {
    filtered = filtered.filter((article) => article.category === category)
    activeLabel = category
  } else if (filter === 'free') {
    filtered = filtered.filter((article) => article.freeTier === true)
    activeLabel = 'Free Tools'
  } else if (filter === 'under-20') {
    filtered = filtered.filter(
      (article) => article.startingPrice !== undefined && article.startingPrice < 20,
    )
    activeLabel = 'Under $20/mo'
  }

  return (
    <div>
      <h1 className="text-3xl font-extrabold text-gray-900">
        {activeLabel ? `${activeLabel} Reviews` : 'All Reviews'}
      </h1>
      <p className="mt-2 text-gray-600">
        {filtered.length} AI tools{activeLabel ? ` matching "${activeLabel}"` : ` across ${categories.length} categories`}.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <a
            key={cat}
            href={`/articles?category=${encodeURIComponent(cat)}`}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
              cat === category ? 'bg-brand-600 text-white' : 'bg-brand-50 text-brand-700 hover:bg-brand-100'
            }`}
          >
            {cat}
          </a>
        ))}
      </div>

      {activeLabel && (
        <a href="/articles" className="mt-4 inline-block text-sm font-medium text-brand-600 hover:underline">
          &larr; Clear filter
        </a>
      )}

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  )
}
