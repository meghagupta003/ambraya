export function CollectionBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-purple to-brand-purple/80 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-light mb-6 tracking-wide">NEW COLLECTION</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto font-light opacity-90">
          Discover our latest curated pieces that blend contemporary design with timeless elegance.
        </p>
        <button className="bg-white text-brand-purple px-8 py-3 font-medium tracking-wide hover:bg-brand-neutral-light transition-colors">
          EXPLORE NOW
        </button>
      </div>
    </section>
  )
}
