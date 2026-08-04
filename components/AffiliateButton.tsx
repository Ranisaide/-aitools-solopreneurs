import { getAffiliateBySlug } from '@/lib/affiliates'

export default function AffiliateButton({ slug }: { slug: string }) {
  const program = getAffiliateBySlug(slug)
  if (!program) return null

  return (
    <div className="my-6 rounded-xl border border-brand-100 bg-brand-50 p-5">
      <a
        href={program.url}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-5 py-3 font-semibold text-white transition hover:bg-brand-700"
      >
        {program.ctaLabel} &rarr;
      </a>
      <p className="mt-2 text-xs text-gray-500">{program.disclosure}</p>
    </div>
  )
}
