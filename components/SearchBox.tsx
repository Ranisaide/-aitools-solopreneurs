'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

type SearchResult = { title: string; slug: string; category: string }

export default function SearchBox() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([])
      return
    }

    const controller = new AbortController()
    const timeout = setTimeout(() => {
      fetch(`/api/search?q=${encodeURIComponent(query)}`, { signal: controller.signal })
        .then((res) => res.json())
        .then((data) => setResults(data.results ?? []))
        .catch(() => {})
    }, 200)

    return () => {
      clearTimeout(timeout)
      controller.abort()
    }
  }, [query])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={containerRef} className="relative">
      <input
        type="search"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value)
          setOpen(true)
        }}
        onFocus={() => setOpen(true)}
        placeholder="Search AI tools..."
        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
      />
      {open && results.length > 0 && (
        <ul className="absolute z-50 mt-1 w-full rounded-lg border border-gray-100 bg-white py-2 shadow-lg">
          {results.map((result) => (
            <li key={result.slug}>
              <Link
                href={`/articles/${result.slug}`}
                className="block px-4 py-2 text-sm hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                <span className="font-medium">{result.title}</span>
                <span className="ml-2 text-xs text-gray-400">{result.category}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
