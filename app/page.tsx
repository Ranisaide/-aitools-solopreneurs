import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import Newsletter from '@/components/Newsletter'
import { getAllArticles } from '@/lib/articles'

export default function HomePage() {
  const articles = getAllArticles()
  const featured = articles.slice(0, 9)

  return (
    <div>
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
