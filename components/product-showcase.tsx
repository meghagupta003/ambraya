import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getProduct } from "@/lib/clothing-products"

export async function ProductShowcase() {
  // Get the Gulnaar product specifically
  const gulnaarProduct = await getProduct("gulnaar-wrap-anarkali-suit-set-aqua-floral")
  
  if (!gulnaarProduct) {
    return null
  }

  const discountPercentage = gulnaarProduct.compareAtPrice
    ? Math.round(((gulnaarProduct.compareAtPrice - gulnaarProduct.price) / gulnaarProduct.compareAtPrice) * 100)
    : 0

  return (
    <section className="py-24 bg-brand-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-tenor text-3xl md:text-4xl uppercase tracking-wider mb-4">Best Sellers</h2>
          <div className="w-24 h-px bg-brand-gold mx-auto mb-6"></div>
          <p className="font-lato text-lg text-gray-600 max-w-xl mx-auto">Our most loved pieces, chosen by you</p>
        </div>

        {/* Featured Product - Desktop */}
        <div className="hidden md:block">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={gulnaarProduct.image || "/placeholder.svg"}
                  alt={gulnaarProduct.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                {discountPercentage > 0 && (
                  <Badge className="absolute top-6 left-6 bg-brand-gold hover:bg-brand-gold/90 text-white px-4 py-1 rounded-none">
                    -{discountPercentage}% OFF
                  </Badge>
                )}
                {gulnaarProduct.isNew && (
                  <Badge className="absolute top-6 right-6 bg-black hover:bg-black/90 text-white px-4 py-1 rounded-none">
                    New
                  </Badge>
                )}
              </div>
              <div className="space-y-8">
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-luxury mb-3 font-tenor">{gulnaarProduct.category}</p>
                  <h3 className="font-tenor text-3xl uppercase tracking-wider mb-6">{gulnaarProduct.title}</h3>
                  <p className="font-lato text-lg text-gray-600 leading-relaxed mb-8">
                    {gulnaarProduct.description.split('\n')[0]}
                  </p>
                </div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-3xl font-light">₹{gulnaarProduct.price}</span>
                  {gulnaarProduct.compareAtPrice && (
                    <span className="text-xl text-gray-400 line-through">₹{gulnaarProduct.compareAtPrice}</span>
                  )}
                </div>
                <Button
                  className="bg-brand-black hover:bg-brand-black/90 text-white px-10 py-6 rounded-none font-tenor tracking-luxury uppercase"
                  asChild
                >
                  <Link href={`/products/${gulnaarProduct.handle}`}>Shop Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Product - Mobile */}
        <div className="md:hidden">
          <div className="max-w-sm mx-auto">
            <Link href={`/products/${gulnaarProduct.handle}`} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <Image
                  src={gulnaarProduct.image || "/placeholder.svg"}
                  alt={gulnaarProduct.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {discountPercentage > 0 && (
                  <Badge className="absolute top-4 left-4 bg-brand-gold hover:bg-brand-gold/90 text-white text-xs px-3 py-1 rounded-none">
                    -{discountPercentage}% OFF
                  </Badge>
                )}
                {gulnaarProduct.isNew && (
                  <Badge className="absolute top-4 right-4 bg-black hover:bg-black/90 text-white text-xs px-3 py-1 rounded-none">
                    New
                  </Badge>
                )}
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500 uppercase tracking-luxury mb-2 font-tenor">{gulnaarProduct.category}</p>
                <h3 className="font-tenor text-xl uppercase tracking-wider mb-3 group-hover:text-brand-purple transition-colors">
                  {gulnaarProduct.title}
                </h3>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-lg font-light">₹{gulnaarProduct.price}</span>
                  {gulnaarProduct.compareAtPrice && (
                    <span className="text-sm text-gray-400 line-through">₹{gulnaarProduct.compareAtPrice}</span>
                  )}
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button
            variant="outline"
            className="border-gray-300 text-gray-800 hover:bg-gray-50 px-10 py-6 rounded-none font-tenor tracking-luxury uppercase"
            asChild
          >
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
