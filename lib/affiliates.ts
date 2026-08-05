export type AffiliateProgram = {
  slug: string
  name: string
  category: string
  url: string
  disclosure: string
}

function affiliateUrl(base: string, param: string): string {
  const id = process.env[`NEXT_PUBLIC_AFF_${param}`] || 'demo'
  return `${base}${base.includes('?') ? '&' : '?'}ref=${id}`
}

// Only actively-open affiliate programs belong here. AffiliateButton renders
// nothing for a slug that isn't listed, so removing a closed program is safe —
// existing <AffiliateButton slug="..."/> references in article content simply
// stop rendering instead of breaking the build.
export const affiliatePrograms: AffiliateProgram[] = [
  { slug: 'copy-ai', name: 'Copy.ai', category: 'Writing', url: affiliateUrl('https://www.copy.ai', 'COPYAI'), disclosure: 'We earn a commission if you subscribe through this link.' },
  { slug: 'grammarly', name: 'Grammarly', category: 'Writing', url: affiliateUrl('https://www.grammarly.com', 'GRAMMARLY'), disclosure: 'We earn a commission if you subscribe through this link.' },
  { slug: 'hubspot', name: 'HubSpot', category: 'CRM & Sales', url: affiliateUrl('https://www.hubspot.com', 'HUBSPOT'), disclosure: 'We earn a commission if you subscribe through this link.' },
]

export function getAffiliateBySlug(slug: string): AffiliateProgram | undefined {
  return affiliatePrograms.find((program) => program.slug === slug)
}
