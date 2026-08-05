import Script from 'next/script'

export default function Newsletter() {
  return (
    <section id="newsletter" className="rounded-2xl bg-brand-900 px-6 py-10 text-center text-white">
      <h2 className="text-2xl font-bold">Get the best AI tools in your inbox</h2>
      <p className="mx-auto mt-2 max-w-md text-brand-100">
        One email a week. New reviews, deals, and workflows for solopreneurs.
      </p>
      <div className="mx-auto mt-6 max-w-sm">
        <Script
          async
          src="https://subscribe-forms.beehiiv.com/v3/loader.js"
          data-beehiiv-form="0a52eff4-5f0b-4695-9e98-32fbdfd87156"
          strategy="lazyOnload"
        />
      </div>
    </section>
  )
}


