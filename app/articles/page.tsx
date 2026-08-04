import type { Metadata } from 'next'
import ArticleCard from '@/components/ArticleCard'
import { getAllArticles } from '@/lib/articles'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'All AI Tool Reviews | AI Tools for Solopreneurs',
  description: 'Browse every AI tool review, organized by category.',
  path: '/articles',
})

export default function ArticlesArchivePage() {
  const articles = getAllArticles()
  const categories = Array.from(new Set(articles.map((article) => article.category))).sort()

  return (
    <div>
      <h1 className="text-3xl font-extrabold text-gray-900">All Reviews</h1>
      <p className="mt-2 text-gray-600">{articles.length} AI tools across {categories.length} categories.</p>

      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <span key={category} className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            {category}
          </span>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  )
}
