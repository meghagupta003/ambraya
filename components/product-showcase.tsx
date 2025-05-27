import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ProductShowcase() {
  const products = [
    {
      id: "1",
      name: "Organic Cotton Tee",
      price: 45,
      image: "/placeholder.svg?height=500&width=400",
      href: "/products/organic-cotton-tee",
    },
    {
      id: "2",
      name: "Linen Blend Dress",
      price: 89,
      image: "/placeholder.svg?height=500&width=400",
      href: "/products/linen-blend-dress",
    },
    {
      id: "3",
      name: "Cashmere Sweater",
      price: 159,
      image: "/placeholder.svg?height=500&width=400",
      href: "/products/cashmere-sweater",
    },
    {
      id: "4",
      name: "Wide Leg Pants",
      price: 79,
      image: "/placeholder.svg?height=500&width=400",
      href: "/products/wide-leg-pants",
    },
    {
      id: "5",
      name: "Silk Blouse",
      price: 95,
      image: "/placeholder.svg?height=500&width=400",
      href: "/products/silk-blouse",
    },
    {
      id: "6",
      name: "Denim Jacket",
      price: 120,
      image: "/placeholder.svg?height=500&width=400",
      href: "/products/denim-jacket",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Best Sellers</h2>
          <p className="text-lg text-gray-600">Our most loved pieces, chosen by you</p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={product.href} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-lg font-light text-gray-600">${product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-4 px-2" style={{ width: "max-content" }}>
            {products.map((product) => (
              <Link key={product.id} href={product.href} className="group flex-shrink-0 w-48">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-gray-800 mb-1 text-sm leading-tight">{product.name}</h3>
                    <p className="text-base font-light text-gray-600">${product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-gray-300 text-gray-800 hover:bg-gray-50 px-8 py-3 rounded-full"
            asChild
          >
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
