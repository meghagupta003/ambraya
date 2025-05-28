import Link from "next/link"
import Image from "next/image"

export function CategoryGrid() {
  const categories = [
    {
      name: "Coord Sets",
      image: "/coord-sets-category.webp",
      href: "/category/coord-sets",
    },
    {
      name: "Suit Sets",
      image: "/suit-sets-category.webp",
      href: "/category/suit-sets",
    },
    {
      name: "Unstitched Suits",
      image: "/unstitched-suits-category.jpeg",
      href: "/category/unstitched-suits",
    },
    {
      name: "Dresses",
      image: "/dresses-category.jpeg",
      href: "/category/dresses",
    },
    {
      name: "Cotton Classics",
      image: "/cotton-classics-category.webp",
      href: "/category/cotton-classics",
    },
    {
      name: "Jewelry",
      image: "/placeholder.svg?height=400&width=300",
      href: "/category/jewelry",
    },
    {
      name: "Comfort Fit",
      image: "/placeholder.svg?height=400&width=300",
      href: "/category/comfort-fit",
    },
  ]

  return (
    <section className="py-8">
      <div className="container mx-auto px-4 mb-8">
        <div className="text-center">
          <h2 className="font-tenor text-2xl uppercase tracking-wider mb-3">Shop by Category</h2>
          <div className="w-16 h-px bg-brand-gold mx-auto mb-6"></div>
        </div>
      </div>
      
      {/* Desktop Grid */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 lg:grid-cols-7 gap-0 border">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                href={category.href}
                className="group border-r border-b last:border-r-0 hover:bg-brand-beige transition-colors"
              >
                <div className="p-6 text-center">
                  <div className="aspect-[3/4] relative mb-6 overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="font-tenor text-sm uppercase tracking-wider text-gray-800">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Horizontal Scroll - Edge to Edge */}
      <div className="md:hidden overflow-x-auto scrollbar-hide border-t border-b">
        <div className="flex" style={{ width: "max-content" }}>
          {categories.map((category, index) => (
            <Link
              key={category.name}
              href={category.href}
              className="group flex-shrink-0 w-28 border-r last:border-r-0 hover:bg-brand-beige transition-colors"
            >
              <div className="p-4 text-center">
                <div className="aspect-[3/4] relative mb-4 overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-tenor text-xs uppercase tracking-wider text-gray-800">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
