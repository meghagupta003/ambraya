import { HeroSection } from "@/components/hero-section"
import { CategoryGrid } from "@/components/category-grid"
import { FeaturedSection } from "@/components/featured-section"
import { ProductShowcase } from "@/components/product-showcase"
import { NewsletterSignup } from "@/components/newsletter-signup"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CategoryGrid />
      <FeaturedSection />
      <ProductShowcase />
      <NewsletterSignup />
    </main>
  )
}
