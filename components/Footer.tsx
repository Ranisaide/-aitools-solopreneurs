import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-600">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} AI Tools for Solopreneurs. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/articles" className="hover:text-brand-600">
              All Reviews
            </Link>
            <Link href="/#newsletter" className="hover:text-brand-600">
              Newsletter
            </Link>
          </div>
        </div>
        <p className="mt-4 text-xs text-gray-400">
          Some links on this site are affiliate links. We may earn a commission at no extra cost to you
          if you make a purchase through them.
        </p>
      </div>
    </footer>
  )
}
