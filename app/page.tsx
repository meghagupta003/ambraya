import { Suspense } from "react"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { ProductGrid } from "@/components/product-grid"
import { Newsletter } from "@/components/newsletter"
import { ProductGridSkeleton } from "@/components/product-grid-skeleton"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <Suspense fallback={<ProductGridSkeleton />}>
            <FeaturedProducts />
          </Suspense>
        </div>
      </section>
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">All Products</h2>
          <Suspense fallback={<ProductGridSkeleton />}>
            <ProductGrid />
          </Suspense>
        </div>
      </section>
      <Newsletter />
    </main>
  )
}
