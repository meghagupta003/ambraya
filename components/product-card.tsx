import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AddToCartButton } from "@/components/add-to-cart-button"
import type { Product } from "@/lib/types"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const discountPercentage = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0

  return (
    <Card className="group overflow-hidden border-0 shadow-none hover:shadow-lg transition-all duration-500 hover:-translate-y-2 bg-white">
      <div className="relative aspect-[3/4] overflow-hidden bg-brand-neutral-light">
        <Link href={`/products/${product.handle}`}>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </Link>
        {discountPercentage > 0 && (
          <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">-{discountPercentage}%</Badge>
        )}
        {product.isNew && <Badge className="absolute top-2 right-2 bg-green-500 hover:bg-green-600">New</Badge>}
      </div>
      <CardContent className="p-6">
        <Link href={`/products/${product.handle}`}>
          <h3 className="font-light text-lg mb-2 line-clamp-2 hover:text-brand-purple transition-colors tracking-wide">
            {product.title}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 mb-3 uppercase tracking-wider">{product.category}</p>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl font-light">${product.price}</span>
          {product.compareAtPrice && (
            <span className="text-lg text-gray-400 line-through">${product.compareAtPrice}</span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <AddToCartButton product={product} className="w-full" />
      </CardFooter>
    </Card>
  )
}
