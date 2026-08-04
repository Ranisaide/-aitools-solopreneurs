import type { Article } from '@/lib/articles'
import ArticleCard from './ArticleCard'

export default function RelatedArticles({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null

  return (
    <section className="mt-16">
      <h2 className="mb-6 text-xl font-bold text-gray-900">Related Reviews</h2>
      <div className="grid gap-5 sm:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  )
}
