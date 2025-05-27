"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { getProduct } from "@/lib/clothing-products"
import { SizeSelector } from "@/components/size-selector"
import { useState } from "react"

interface ProductPageProps {
  params: {
    handle: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.handle)

  if (!product) {
    notFound()
  }

  const discountPercentage = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0] || null)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        <div className="space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {product.isNew && <Badge className="bg-green-500 hover:bg-green-600">New</Badge>}
              {discountPercentage > 0 && (
                <Badge className="bg-red-500 hover:bg-red-600">-{discountPercentage}% OFF</Badge>
              )}
            </div>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold">${product.price}</span>
              {product.compareAtPrice && (
                <span className="text-xl text-muted-foreground line-through">${product.compareAtPrice}</span>
              )}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-muted-foreground leading-relaxed">{product.description}</p>
          </div>

          <div className="space-y-4">
            <SizeSelector
              variants={product.variants}
              selectedVariant={selectedVariant}
              onVariantChange={setSelectedVariant}
            />
            <AddToCartButton
              product={product}
              className="w-full h-12 text-lg bg-brand-purple hover:bg-brand-purple/90 text-white"
            />
            <Button
              variant="outline"
              className="w-full h-12 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white"
            >
              Add to Wishlist
            </Button>
          </div>

          <div className="border-t pt-6">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Category:</span>
                <span className="ml-2 text-muted-foreground">{product.category}</span>
              </div>
              <div>
                <span className="font-medium">Tags:</span>
                <span className="ml-2 text-muted-foreground">{product.tags.join(", ")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
