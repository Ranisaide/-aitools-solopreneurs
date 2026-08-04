import Link from 'next/link'
import SearchBox from './SearchBox'

export default function Header() {
  return (
    <header className="border-b border-gray-100 bg-white/80 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="text-lg font-bold text-brand-700">
          AI Tools <span className="text-gray-900">for Solopreneurs</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-600 sm:flex">
          <Link href="/articles" className="hover:text-brand-600">
            All Reviews
          </Link>
        </nav>
        <div className="w-full max-w-xs sm:w-64">
          <SearchBox />
        </div>
      </div>
    </header>
  )
}
