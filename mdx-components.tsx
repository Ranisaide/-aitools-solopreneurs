import type { MDXComponents } from 'mdx/types'
import AffiliateButton from '@/components/AffiliateButton'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    AffiliateButton,
    ...components,
  }
}
