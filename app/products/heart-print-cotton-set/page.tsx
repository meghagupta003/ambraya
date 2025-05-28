"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Truck, RotateCcw, Heart } from "lucide-react"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { SizeSelector } from "@/components/size-selector"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Product data
const product = {
  id: "cotton-heart-001",
  title: "Heart Print Cotton Comfort Set",
  handle: "heart-print-cotton-set",
  description:
    "Crafted from premium breathable cotton, this charming heart-print set combines comfort and style for everyday wear. The relaxed silhouette features a collared button-down top and matching wide-leg pants, perfect for lounging at home or casual outings.",
  price: 89.99,
  compareAtPrice: 119.99,
  image: "/cotton-classics-category.webp",
  images: [
    "/cotton-classics-category.webp",
    "/placeholder.svg?height=600&width=600",
    "/placeholder.svg?height=600&width=600",
  ],
  rating: 4.8,
  reviewCount: 86,
  isNew: true,
  isFeatured: true,
  category: "Cotton Classics",
  tags: ["cotton", "comfort", "heart-print", "set"],
  variants: [
    {
      id: "cotton-heart-001-xs",
      title: "XS",
      price: 89.99,
      availableForSale: true,
      selectedOptions: [{ name: "Size", value: "XS" }],
    },
    {
      id: "cotton-heart-001-s",
      title: "S",
      price: 89.99,
      availableForSale: true,
      selectedOptions: [{ name: "Size", value: "S" }],
    },
    {
      id: "cotton-heart-001-m",
      title: "M",
      price: 89.99,
      availableForSale: true,
      selectedOptions: [{ name: "Size", value: "M" }],
    },
    {
      id: "cotton-heart-001-l",
      title: "L",
      price: 89.99,
      availableForSale: true,
      selectedOptions: [{ name: "Size", value: "L" }],
    },
    {
      id: "cotton-heart-001-xl",
      title: "XL",
      price: 89.99,
      availableForSale: false,
      selectedOptions: [{ name: "Size", value: "XL" }],
    },
  ],
  features: [
    "100% premium cotton fabric",
    "Breathable and comfortable for all-day wear",
    "Adorable heart print pattern",
    "Button-down collared top",
    "Elastic waistband pants for comfort",
    "Machine washable",
  ],
  care: "Machine wash cold with like colors. Tumble dry low. Do not bleach.",
}

export default function ProductPage() {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[1] || null)
  const [selectedImage, setSelectedImage] = useState(0)
  const discountPercentage = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Breadcrumb */}
        <div className="w-full md:hidden mb-4">
          <nav className="flex text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-brand-purple">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/category/cotton-classics" className="hover:text-brand-purple">
              Cotton Classics
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Heart Print Cotton Comfort Set</span>
          </nav>
        </div>

        {/* Product Images */}
        <div className="w-full md:w-3/5 space-y-4">
          <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`aspect-square relative overflow-hidden rounded-md ${
                  selectedImage === index ? "ring-2 ring-brand-purple" : "ring-1 ring-gray-200"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.title} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-2/5 space-y-6">
          {/* Desktop Breadcrumb */}
          <nav className="hidden md:flex text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-brand-purple">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/category/cotton-classics" className="hover:text-brand-purple">
              Cotton Classics
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Heart Print Cotton Comfort Set</span>
          </nav>

          {/* Title and Badges */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              {product.isNew && <Badge className="bg-green-500 hover:bg-green-600">New</Badge>}
              {discountPercentage > 0 && (
                <Badge className="bg-red-500 hover:bg-red-600">-{discountPercentage}% OFF</Badge>
              )}
            </div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>

            {/* Ratings */}
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

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold">${product.price}</span>
              {product.compareAtPrice && (
                <span className="text-xl text-muted-foreground line-through">${product.compareAtPrice}</span>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          {/* Size Selector */}
          <div className="space-y-4">
            <SizeSelector
              variants={product.variants}
              selectedVariant={selectedVariant}
              onVariantChange={setSelectedVariant}
            />

            {/* Stock Status */}
            <div className="text-sm">
              {selectedVariant?.availableForSale ? (
                <span className="text-green-600 font-medium">In Stock</span>
              ) : (
                <span className="text-red-600 font-medium">Out of Stock</span>
              )}
            </div>

            {/* Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4">
              <AddToCartButton
                product={product}
                className="flex-1 h-12 text-lg bg-brand-purple hover:bg-brand-purple/90 text-white"
              />
              <Button variant="outline" className="h-12 border-gray-300">
                <Heart className="h-5 w-5 mr-2" />
                <span>Wishlist</span>
              </Button>
            </div>
          </div>

          {/* Shipping Info */}
          <div className="border-t border-b py-4 space-y-3">
            <div className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-gray-600" />
              <span className="text-sm">Free shipping on orders over $100</span>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw className="h-5 w-5 text-gray-600" />
              <span className="text-sm">Easy 30-day returns</span>
            </div>
          </div>

          {/* Product Details Tabs */}
          <Tabs defaultValue="features" className="mt-8">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="care">Care</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>
            <TabsContent value="features" className="space-y-4">
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="care" className="text-gray-600">
              <p>{product.care}</p>
            </TabsContent>
            <TabsContent value="shipping" className="text-gray-600">
              <p>Orders typically ship within 1-2 business days. Delivery times vary by location:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Standard Shipping: 3-5 business days</li>
                <li>Express Shipping: 1-2 business days</li>
                <li>International Shipping: 7-14 business days</li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* You May Also Like Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <Link href="#" key={item} className="group">
              <div className="aspect-[3/4] relative overflow-hidden rounded-lg bg-gray-100 mb-3">
                <Image
                  src={`/placeholder.svg?height=400&width=300`}
                  alt="Related product"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium text-gray-800 group-hover:text-brand-purple transition-colors">
                Similar Cotton Set
              </h3>
              <p className="text-gray-600">$79.99</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
