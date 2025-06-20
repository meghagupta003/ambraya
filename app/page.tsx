'use client';

import Link from 'next/link'

export default function HomePage() {
  const categories = [
    { name: "Coord Sets", image: "https://images.generated.photos/random-coord.jpg", href: "/catalog?category=coords" },
    { name: "Suit Sets", image: "https://images.generated.photos/random-suit.jpg", href: "/catalog?category=suits" },
    { name: "Unstitched Suits", image: "https://images.generated.photos/random-fabric.jpg", href: "/catalog?category=unstitched" },
    { name: "Jewelry", image: "https://images.generated.photos/random-jewelry.jpg", href: "/catalog?category=jewelry" },
    { name: "Dresses", image: "https://images.generated.photos/random-dress.jpg", href: "/catalog?category=dresses" },
  ];

  return (
    <main className="bg-background text-primary">
      {/* Hero Banner */}
      <section className="relative h-[80vh] w-full bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://images.generated.photos/hero-luxury-style.jpg')" }}>
        <div className="text-center bg-white/80 p-8 rounded-xl max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-semibold mb-4">Luxury Essentials, Transparently Priced</h1>
          <p className="text-lg md:text-xl mb-6">Discover curated pieces you’ll love, every day.</p>
          <Link href="/catalog">
            <button className="px-8 py-4 bg-primary text-secondary font-medium rounded hover:bg-opacity-90 transition">
              Shop the Collection
            </button>
          </Link>
        </div>
      </section>

      {/* Category Section */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-10 text-center">Browse by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <Link key={cat.name} href={cat.href}>
              <div className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <img src={cat.image} alt={cat.name} className="w-full h-56 object-cover group-hover:scale-105 transition" />
                <div className="absolute inset-0 bg-black/40 flex items-end justify-center">
                  <p className="text-white text-xl font-medium mb-4">{cat.name}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Lifestyle Banner */}
      <section className="py-16">
        <img src="https://images.generated.photos/lifestyle-banner.jpg" alt="Lifestyle styling" className="w-full object-cover rounded-lg shadow-lg h-[350px]" />
      </section>

      {/* Why Ambraya Values */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center px-6">
          {[
            { title: 'Sustainable Materials', icon: '🌿' },
            { title: 'Direct to Consumer', icon: '🏷️' },
            { title: 'Timeless Design', icon: '💫' },
          ].map((item) => (
            <div key={item.title} className="p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-4">{item.icon}</div>
              <p className="text-lg font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

