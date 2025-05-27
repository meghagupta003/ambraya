import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-[70vh] flex items-center bg-gray-100 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-light mb-4 text-gray-800">THE NEW SPRING LINEUP</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-600 font-light">
              Essential layers. Effortless style. Forever-fair prices.
            </p>
            <Button
              size="lg"
              className="bg-white text-gray-800 hover:bg-gray-50 px-8 py-6 text-lg font-medium rounded-full border border-gray-200"
              asChild
            >
              <Link href="/products">SHOP THE COLLECTION</Link>
            </Button>
          </div>
          <div className="order-1 md:order-2">{/* Hero image would go here */}</div>
        </div>
      </div>
    </section>
  )
}
