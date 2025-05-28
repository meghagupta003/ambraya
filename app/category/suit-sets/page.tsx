import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getProduct } from "@/lib/clothing-products"

export default async function SuitSetsPage() {
  // Get the Gulnaar product
  const gulnaarProduct = await getProduct("gulnaar-wrap-anarkali-suit-set-aqua-floral")
  
  if (!gulnaarProduct) {
    return <div>Product not found</div>
  }

  const discountPercentage = gulnaarProduct.compareAtPrice
    ? Math.round(((gulnaarProduct.compareAtPrice - gulnaarProduct.price) / gulnaarProduct.compareAtPrice) * 100)
    : 0

  // Mock additional products for the category
  const additionalProducts = [
    {
      id: "suit-002",
      title: "Royal Blue Embroidered Anarkali",
      price: 2299.99,
      compareAtPrice: 2899.99,
      image: "/placeholder.svg?height=400&width=300",
      href: "#",
    },
    {
      id: "suit-003",
      title: "Maroon Velvet Suit Set",
      price: 3499.99,
      image: "/placeholder.svg?height=400&width=300",
      href: "#",
    },
    {
      id: "suit-004",
      title: "Peach Georgette Sharara Set",
      price: 1899.99,
      compareAtPrice: 2399.99,
      image: "/placeholder.svg?height=400&width=300",
      href: "#",
    },
    {
      id: "suit-005",
      title: "Black Mirror Work Suit",
      price: 2799.99,
      image: "/placeholder.svg?height=400&width=300",
      href: "#",
    },
    {
      id: "suit-006",
      title: "Pink Chiffon Palazzo Set",
      price: 1699.99,
      image: "/placeholder.svg?height=400&width=300",
      href: "#",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Category Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-light mb-4">Suit Sets</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our exquisite collection of traditional and contemporary suit sets. From elegant anarkalis to 
          modern palazzo sets, each piece is crafted with attention to detail and designed for the modern woman 
          who appreciates timeless style.
        </p>
      </div>

      {/* Featured Product - Gulnaar */}
      <div className="mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
            <Image
              src={gulnaarProduct.image || "/placeholder.svg"}
              alt={gulnaarProduct.title}
              fill
              className="object-cover"
            />
            {discountPercentage > 0 && (
              <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600 text-white">
                -{discountPercentage}% OFF
              </Badge>
            )}
            {gulnaarProduct.isNew && (
              <Badge className="absolute top-4 right-4 bg-green-500 hover:bg-green-600 text-white">
                New
              </Badge>
            )}
          </div>
          <div className="space-y-6">
            <div>
              <Badge className="mb-2 bg-brand-purple text-white">Featured</Badge>
              <h2 className="text-3xl font-light mb-4">{gulnaarProduct.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {gulnaarProduct.description.split('\n')[0]}
              </p>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold">₹{gulnaarProduct.price}</span>
              {gulnaarProduct.compareAtPrice && (
                <span className="text-xl text-muted-foreground line-through">₹{gulnaarProduct.compareAtPrice}</span>
              )}
            </div>
            <div className="flex gap-4">
              <Button className="bg-brand-purple hover:bg-brand-purple/90 text-white px-8 py-3 rounded-full" asChild>
                <Link href={`/products/${gulnaarProduct.handle}`}>Shop Now</Link>
              </Button>
              <Button variant="outline" className="px-8 py-3 rounded-full" asChild>
                <Link href={`/products/${gulnaarProduct.handle}`}>View Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Other Products Grid */}
      <div>
        <h3 className="text-2xl font-light mb-8 text-center">More Suit Sets</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {additionalProducts.map((product) => (
            <Card key={product.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <Link href={product.href} className="block">
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {product.compareAtPrice && (
                    <Badge className="absolute top-2 right-2 bg-red-500 text-white text-xs">
                      Sale
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-2 hover:text-brand-purple transition-colors line-clamp-2">
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">₹{product.price}</span>
                    {product.compareAtPrice && (
                      <span className="text-sm text-gray-400 line-through">₹{product.compareAtPrice}</span>
                    )}
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="bg-brand-purple/5 rounded-lg p-8">
          <h3 className="text-2xl font-light mb-4">Can't Find What You're Looking For?</h3>
          <p className="text-gray-600 mb-6">
            Explore our complete collection or get in touch with our styling experts for personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-brand-purple hover:bg-brand-purple/90 text-white" asChild>
              <Link href="/products">View All Products</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Stylist</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
