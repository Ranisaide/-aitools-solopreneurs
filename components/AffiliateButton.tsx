import { getAffiliateBySlug } from '@/lib/affiliates'

export default function AffiliateButton({ slug }: { slug: string }) {
  const program = getAffiliateBySlug(slug)
  if (!program) return null

  return (
    <div className="not-prose my-8 rounded-2xl border-2 border-brand-200 bg-gradient-to-br from-brand-50 to-white p-6 text-center shadow-sm">
      <p className="mb-3 text-sm font-medium text-gray-600">
        Ready to try {program.name}?
      </p>
      <a
        href={program.url}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-brand-600/20 transition hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/30 sm:w-auto"
      >
        Get {program.name} &rarr;
      </a>
      <p className="mt-3 text-xs text-gray-500">{program.disclosure}</p>
    </div>
  )
}
