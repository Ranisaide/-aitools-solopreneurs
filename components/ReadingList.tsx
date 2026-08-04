'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'ai-tools-reading-list'

function readList(): string[] {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  } catch {
    return []
  }
}

export default function ReadingList({ slug, title }: { slug: string; title: string }) {
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    setSaved(readList().includes(slug))
  }, [slug])

  function toggle() {
    const list = readList()
    const next = list.includes(slug) ? list.filter((item) => item !== slug) : [...list, slug]
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    setSaved(next.includes(slug))
  }

  return (
    <button
      onClick={toggle}
      aria-label={saved ? `Remove ${title} from reading list` : `Save ${title} to reading list`}
      className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-brand-300 hover:text-brand-600"
    >
      {saved ? '★ Saved' : '☆ Save for later'}
    </button>
  )
}
