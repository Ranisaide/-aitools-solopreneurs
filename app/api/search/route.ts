import { NextRequest, NextResponse } from 'next/server'
import { searchArticles } from '@/lib/articles'

export function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('q') || ''
  const results = searchArticles(query)
    .slice(0, 8)
    .map((article) => ({ title: article.title, slug: article.slug, category: article.category }))

  return NextResponse.json({ results })
}
