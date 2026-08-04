import Image from 'next/image'
import Link from 'next/link'
import type { Article } from '@/lib/articles'

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="flex flex-col overflow-hidden rounded-xl border border-gray-100 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative aspect-[16/9] w-full bg-gray-100">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
          {article.category}
        </span>
        <h3 className="mt-2 text-lg font-bold text-gray-900">{article.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm text-gray-600">{article.excerpt}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
          <span>{article.readingMinutes} min read</span>
          {article.rating && <span>★ {article.rating.toFixed(1)}</span>}
        </div>
      </div>
    </Link>
  )
}
