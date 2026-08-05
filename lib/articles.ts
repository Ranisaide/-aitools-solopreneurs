import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const ARTICLES_DIR = path.join(process.cwd(), 'content/articles')
const DELIMITER = '\n===ARTICLE===\n'

export type ArticleFrontmatter = {
  title: string
  slug: string
  category: string
  excerpt: string
  date: string
  image: string
  affiliateSlug?: string
  rating?: number
  freeTier?: boolean
  startingPrice?: number
}

export type Article = ArticleFrontmatter & {
  content: string
  readingMinutes: number
}

let cache: Article[] | null = null

export function getAllArticles(): Article[] {
  if (cache) return cache

  const articles: Article[] = []
  const files = fs.existsSync(ARTICLES_DIR)
    ? fs.readdirSync(ARTICLES_DIR).filter((file) => file.endsWith('.mdx'))
    : []

  for (const file of files) {
    const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), 'utf8')
    const chunks = raw.split(DELIMITER).map((chunk) => chunk.trim()).filter(Boolean)

    for (const chunk of chunks) {
      const { data, content } = matter(chunk)
      const frontmatter = data as ArticleFrontmatter
      articles.push({
        ...frontmatter,
        content,
        readingMinutes: Math.max(1, Math.round(readingTime(content).minutes)),
      })
    }
  }

  articles.sort((a, b) => (a.date < b.date ? 1 : -1))
  cache = articles
  return articles
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((article) => article.slug === slug)
}

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter((article) => article.category === category)
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  return getAllArticles()
    .filter((candidate) => candidate.slug !== article.slug && candidate.category === article.category)
    .slice(0, limit)
}

export function searchArticles(query: string): Article[] {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return getAllArticles().filter(
    (article) =>
      article.title.toLowerCase().includes(q) ||
      article.excerpt.toLowerCase().includes(q) ||
      article.category.toLowerCase().includes(q),
  )
}
