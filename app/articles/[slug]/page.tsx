import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import AffiliateButton from '@/components/AffiliateButton'
import TOC from '@/components/TOC'
import RelatedArticles from '@/components/RelatedArticles'
import ReadingList from '@/components/ReadingList'
import { getAllArticles, getArticleBySlug, getRelatedArticles } from '@/lib/articles'
import { articleJsonLd, articleMetadata, breadcrumbJsonLd } from '@/lib/seo'

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(article)) }}
      />

      <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl bg-gray-100 sm:aspect-[3/1]">
        <Image src={article.image} alt={article.title} fill priority sizes="100vw" className="object-cover" />
      </div>

      <div className="mx-auto max-w-3xl">
        <span className="mt-8 inline-block text-xs font-semibold uppercase tracking-wide text-brand-600">
          {article.category}
        </span>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {article.title}
        </h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
          <span>{article.readingMinutes} min read</span>
          {article.rating && <span>★ {article.rating.toFixed(1)} / 5</span>}
        </div>
        <div className="mt-4">
          <ReadingList slug={article.slug} title={article.title} />
        </div>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_300px]">
        <div className="prose prose-lg max-w-none prose-headings:font-extrabold prose-h2:mt-12 prose-h2:text-2xl prose-h3:mt-8">
          <MDXRemote source={article.content} components={{ AffiliateButton }} />
        </div>
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <TOC content={article.content} />
          <RelatedArticles articles={related} />
        </aside>
      </div>
    </article>
  )
}
