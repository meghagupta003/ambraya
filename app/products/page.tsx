import { Suspense } from "react"
import { ProductGrid } from "@/components/product-grid"
import { ProductGridSkeleton } from "@/components/product-grid-skeleton"

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">All Products</h1>
        <p className="text-muted-foreground text-lg">Discover our complete collection of high-quality products</p>
      </div>

      <Suspense fallback={<ProductGridSkeleton />}>
        <ProductGrid />
      </Suspense>
    </div>
  )
}
