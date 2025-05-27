import Link from "next/link"
import Image from "next/image"

export function CategoryGrid() {
  const categories = [
    {
      name: "Coord Sets",
      image: "/placeholder.svg?height=400&width=300",
      href: "/category/coord-sets",
    },
    {
      name: "Suit Sets",
      image: "/placeholder.svg?height=400&width=300",
      href: "/category/suit-sets",
    },
    {
      name: "Unstitched Suits",
      image: "/placeholder.svg?height=400&width=300",
      href: "/category/unstitched-suits",
    },
    {
      name: "Dresses",
      image: "/placeholder.svg?height=400&width=300",
      href: "/category/dresses",
    },
    {
      name: "Cotton Classics",
      image: "/placeholder.svg?height=400&width=300",
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
    <section className="py-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-0 border">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              href={category.href}
              className="group border-r border-b last:border-r-0 hover:bg-gray-50 transition-colors"
            >
              <div className="p-4 text-center">
                <div className="aspect-[3/4] relative mb-4 overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-800">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
