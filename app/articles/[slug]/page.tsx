import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import AffiliateButton from '@/components/AffiliateButton'
import TOC from '@/components/TOC'
import RelatedArticles from '@/components/RelatedArticles'
import ReadingList from '@/components/ReadingList'
import { getAllArticles, getArticleBySlug, getRelatedArticles } from '@/lib/articles'
import { articleJsonLd, articleMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}
  return articleMetadata(article)
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const related = getRelatedArticles(article)

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(article)) }}
      />

      <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
        {article.category}
      </span>
      <h1 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">{article.title}</h1>
      <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
        <span>{article.readingMinutes} min read</span>
        {article.rating && <span>★ {article.rating.toFixed(1)} / 5</span>}
      </div>
      <div className="mt-4">
        <ReadingList slug={article.slug} title={article.title} />
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_260px]">
        <div className="prose prose-lg max-w-none">
          <MDXRemote source={article.content} components={{ AffiliateButton }} />
        </div>
        <aside className="hidden lg:block">
          <TOC content={article.content} />
        </aside>
      </div>

      <RelatedArticles articles={related} />
    </article>
  )
}
