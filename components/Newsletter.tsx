export default function Newsletter() {
  return (
    <section id="newsletter" className="rounded-2xl bg-brand-900 px-6 py-10 text-center text-white">
      <h2 className="text-2xl font-bold">Get the best AI tools in your inbox</h2>
      <p className="mx-auto mt-2 max-w-md text-brand-100">
        One email a week. New reviews, deals, and workflows for solopreneurs.
      </p>
      <div className="mx-auto mt-6 max-w-sm">
        <iframe
          src="https://embeds.beehiiv.com/0a52eff4-5f0b-4695-9e98-32fbdfd87156"
          width="100%"
          height="100"
          frameBorder="0"
          scrolling="no"
          style={{ margin: 0, backgroundColor: 'transparent' }}
          title="Subscribe to AI Tools for Solopreneurs newsletter"
        />
      </div>
    </section>
  )
}


