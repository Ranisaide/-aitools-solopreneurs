export type AffiliateProgram = {
  slug: string
  name: string
  category: string
  url: string
  ctaLabel: string
  disclosure: string
}

function affiliateUrl(base: string, param: string): string {
  const id = process.env[`NEXT_PUBLIC_AFF_${param}`] || 'demo'
  return `${base}${base.includes('?') ? '&' : '?'}ref=${id}`
}

export const affiliatePrograms: AffiliateProgram[] = [
  { slug: 'jasper', name: 'Jasper AI', category: 'Writing', url: affiliateUrl('https://www.jasper.ai', 'JASPER'), ctaLabel: 'Try Jasper AI', disclosure: 'We earn a commission if you subscribe through this link.' },
  { slug: 'copy-ai', name: 'Copy.ai', category: 'Writing', url: affiliateUrl('https://www.copy.ai', 'COPYAI'), ctaLabel: 'Try Copy.ai', disclosure: 'We earn a commission if you subscribe through this link.' },
  { slug: 'notion', name: 'Notion', category: 'Productivity', url: affiliateUrl('https://www.notion.so', 'NOTION'), ctaLabel: 'Get Notion', disclosure: 'We may earn a commission if you sign up through this link.' },
  { slug: 'clickup', name: 'ClickUp', category: 'Productivity', url: affiliateUrl('https://clickup.com', 'CLICKUP'), ctaLabel: 'Try ClickUp Free', disclosure: 'We earn a commission if you subscribe through this link.' },
  { slug: 'semrush', name: 'Semrush', category: 'SEO', url: affiliateUrl('https://www.semrush.com', 'SEMRUSH'), ctaLabel: 'Start Semrush Trial', disclosure: 'We earn a commission if you subscribe through this link.' },
  { slug: 'surfer-seo', name: 'Surfer SEO', category: 'SEO', url: affiliateUrl('https://surferseo.com', 'SURFER'), ctaLabel: 'Try Surfer SEO', disclosure: 'We earn a commission if you subscribe through this link.' },
  { slug: 'canva', name: 'Canva Pro', category: 'Design', url: affiliateUrl('https://www.canva.com', 'CANVA'), ctaLabel: 'Get Canva Pro', disclosure: 'We may earn a commission if you upgrade through this link.' },
  { slug: 'midjourney', name: 'Midjourney', category: 'Design', url: affiliateUrl('https://www.midjourney.com', 'MIDJOURNEY'), ctaLabel: 'Join Midjourney', disclosure: 'We may earn a commission through this link.' },
  { slug: 'grammarly', name: 'Grammarly', category: 'Writing', url: affiliateUrl('https://www.grammarly.com', 'GRAMMARLY'), ctaLabel: 'Get Grammarly', disclosure: 'We earn a commission if you subscribe through this link.' },
  { slug: 'descript', name: 'Descript', category: 'Video & Audio', url: affiliateUrl('https://www.descript.com', 'DESCRIPT'), ctaLabel: 'Try Descript', disclosure: 'We earn a commission if you subscribe through this link.' },
  { slug: 'synthesia', name: 'Synthesia', category: 'Video & Audio', url: affiliateUrl('https://www.synthesia.io', 'SYNTHESIA'), ctaLabel: 'Try Synthesia', disclosure: 'We earn a commission if you subscribe through this link.' },
  { slug: 'elevenlabs', name: 'ElevenLabs', category: 'Video & Audio', url: affiliateUrl('https://elevenlabs.io', 'ELEVENLABS'), ctaLabel: 'Try ElevenLabs', disclosure: 'We may earn a commission if you subscribe through this link.' },
  { slug: 'zapier', name: 'Zapier', category: 'Automation', url: affiliateUrl('https://zapier.com', 'ZAPIER'), ctaLabel: 'Automate with Zapier', disclosure: 'We earn a commission if you subscribe through this link.' },
  { slug: 'make', name: 'Make', category: 'Automation', url: affiliateUrl('https://www.make.com', 'MAKE'), ctaLabel: 'Try Make', disclosure: 'We earn a commission if you subscribe through this link.' },
  { slug: 'hubspot', name: 'HubSpot', category: 'CRM & Sales', url: affiliateUrl('https://www.hubspot.com', 'HUBSPOT'), ctaLabel: 'Get Started with HubSpot', disclosure: 'We earn a commission if you subscribe through this link.' },
  { slug: 'convertkit', name: 'Kit (ConvertKit)', category: 'Email Marketing', url: affiliateUrl('https://kit.com', 'CONVERTKIT'), ctaLabel: 'Start with Kit', disclosure: 'We earn a commission if you subscribe through this link.' },
]

export function getAffiliateBySlug(slug: string): AffiliateProgram | undefined {
  return affiliatePrograms.find((program) => program.slug === slug)
}
