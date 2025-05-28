import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CottonClassicsPage() {
  const products = [
    {
      id: "cotton-heart-001",
      title: "Heart Print Cotton Comfort Set",
      price: 89.99,
      compareAtPrice: 119.99,
      image: "/cotton-classics-category.webp",
      href: "/products/heart-print-cotton-set",
      isNew: true,
    },
    {
      id: "cotton-002",
      title: "Striped Cotton Pajama Set",
      price: 79.99,
      image: "/placeholder.svg?height=400&width=300",
      href: "#",
    },
    {
      id: "cotton-003",
      title: "Floral Embroidered Cotton Kurta",
      price: 69.99,
      compareAtPrice: 89.99,
      image: "/placeholder.svg?height=400&width=300",
      href: "#",
    },
    {
      id: "cotton-004",
      title: "Cotton Polka Dot Loungewear",
      price: 65.99,
      image: "/placeholder.svg?height=400&width=300",
      href: "#",
    },
    {
      id: "cotton-005",
      title: "Solid Cotton Comfort Tee",
      price: 39.99,
      image: "/placeholder.svg?height=400&width=300",
      href: "#",
    },
    {
      id: "cotton-006",
      title: "Cotton Checkered Nightwear",
      price: 59.99,
      image: "/placeholder.svg?height=400&width=300",
      href: "#",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Category Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-light mb-4">Cotton Classics</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our collection of premium cotton clothing designed for everyday comfort and timeless style. Each
          piece is crafted from high-quality cotton fabrics that are soft, breathable, and perfect for all-day wear.
        </p>
      </div>

      {/* Featured Product */}
      <div className="mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src="/cotton-classics-category.webp"
              alt="Heart Print Cotton Comfort Set"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-light">Heart Print Cotton Comfort Set</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our bestselling cotton comfort set features an adorable heart print pattern on premium breathable fabric.
              Perfect for lounging at home or casual outings, this set combines style and comfort effortlessly.
            </p>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-bold">$89.99</span>
              <span className="text-lg text-muted-foreground line-through">$119.99</span>
            </div>
            <Button className="bg-brand-purple hover:bg-brand-purple/90 text-white px-8 py-3 rounded-full" asChild>
              <Link href="/products/heart-print-cotton-set">Shop Now</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <Link href={product.href} className="block">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">New</span>
                )}
                {product.compareAtPrice && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">Sale</span>
                )}
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium mb-2 hover:text-brand-purple transition-colors">{product.title}</h3>
                <div className="flex items-center gap-2">
                  <span className="font-bold">${product.price}</span>
                  {product.compareAtPrice && (
                    <span className="text-sm text-gray-400 line-through">${product.compareAtPrice}</span>
                  )}
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  )
}
