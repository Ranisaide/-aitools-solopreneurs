import Image from 'next/image'
import Link from 'next/link'
import type { Article } from '@/lib/articles'

export default function RelatedArticles({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null

  return (
    <section className="rounded-xl border border-gray-100 p-5">
      <p className="mb-4 text-sm font-semibold text-gray-900">Related Reviews</p>
      <ul className="space-y-4">
        {articles.map((article) => (
          <li key={article.slug}>
            <Link href={`/articles/${article.slug}`} className="flex gap-3 group">
              <div className="relative h-14 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                <Image src={article.image} alt={article.title} fill sizes="80px" className="object-cover" />
              </div>
              <div className="min-w-0">
                <p className="line-clamp-2 text-sm font-medium text-gray-900 group-hover:text-brand-600">
                  {article.title}
                </p>
                <p className="mt-1 text-xs text-gray-400">{article.category}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
