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

export const affiliatePrograms: AffiliateProgram[] = [
  { slug: 'jasper', name: 'Jasper AI', category: 'Writing', url: affiliateUrl('https://www.jasper.ai', 'JASPER'), disclosure: 'We earn a commission if you subscribe through this link.' },
  { slug: 'copy-ai', name: 'Copy.ai', category: 'Writing', url: affiliateUrl('https://www.copy.ai', 'COPYAI'), disclosure: 'We earn a commission if you subscribe through this link.' },
  { slug: 'notion', name: 'Notion', category: 'Productivity', url: affiliateUrl('https://www.notion.so', 'NOTION'), disclosure: 'We may earn a commission if you sign up through this link.' },
  { slug: 'clickup', name: 'ClickUp', category: 'Productivity', url: affiliateUrl('https://clickup.com', 'CLICKUP'), disclosure: 'We earn a commission if you subscribe through this link.' },
  { slug: 'semrush', name: 'Semrush', category: 'SEO', url: affiliateUrl('https://www.semrush.com', 'SEMRUSH'), disclosure: 'We earn a commission if you subscribe through this link.' },
  { slug: 'surfer-seo', name: 'Surfer SEO', category: 'SEO', url: affiliateUrl('https://surferseo.com', 'SURFER'), disclosure: 'We earn a commission if you subscribe through this link.' },
  { slug: 'canva', name: 'Canva Pro', category: 'Design', url: affiliateUrl('https://www.canva.com', 'CANVA'), disclosure: 'We may earn a commission if you upgrade through this link.' },
  { slug: 'midjourney', name: 'Midjourney', category: 'Design', url: affiliateUrl('https://www.midjourney.com', 'MIDJOURNEY'), disclosure: 'We may earn a commission through this link.' },
  { slug: 'grammarly', name: 'Grammarly', category: 'Writing', url: affiliateUrl('https://www.grammarly.com', 'GRAMMARLY'), disclosure: 'We earn a commission if you subscribe through this link.' },
  { slug: 'descript', name: 'Descript', category: 'Video & Audio', url: affiliateUrl('https://www.descript.com', 'DESCRIPT'), disclosure: 'We earn a commission if you subscribe through this link.' },
  { slug: 'synthesia', name: 'Synthesia', category: 'Video & Audio', url: affiliateUrl('https://www.synthesia.io', 'SYNTHESIA'), disclosure: 'We earn a commission if you subscribe through this link.' },
  { slug: 'elevenlabs', name: 'ElevenLabs', category: 'Video & Audio', url: affiliateUrl('https://elevenlabs.io', 'ELEVENLABS'), disclosure: 'We may earn a commission if you subscribe through this link.' },
  { slug: 'zapier', name: 'Zapier', category: 'Automation', url: affiliateUrl('https://zapier.com', 'ZAPIER'), disclosure: 'We earn a commission if you subscribe through this link.' },
  { slug: 'make', name: 'Make', category: 'Automation', url: affiliateUrl('https://www.make.com', 'MAKE'), disclosure: 'We earn a commission if you subscribe through this link.' },
  { slug: 'hubspot', name: 'HubSpot', category: 'CRM & Sales', url: affiliateUrl('https://www.hubspot.com', 'HUBSPOT'), disclosure: 'We earn a commission if you subscribe through this link.' },
  { slug: 'convertkit', name: 'Kit (ConvertKit)', category: 'Email Marketing', url: affiliateUrl('https://kit.com', 'CONVERTKIT'), disclosure: 'We earn a commission if you subscribe through this link.' },
]

export function getAffiliateBySlug(slug: string): AffiliateProgram | undefined {
  return affiliatePrograms.find((program) => program.slug === slug)
}
