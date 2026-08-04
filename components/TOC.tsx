function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
}

export default function TOC({ content }: { content: string }) {
  const headings = [...content.matchAll(/^##\s+(.+)$/gm)].map((match) => match[1].trim())

  if (headings.length === 0) return null

  return (
    <nav className="mb-8 rounded-xl border border-gray-100 p-5">
      <p className="mb-3 text-sm font-semibold text-gray-900">On this page</p>
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li key={heading}>
            <a href={`#${slugify(heading)}`} className="text-gray-600 hover:text-brand-600">
              {heading}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
