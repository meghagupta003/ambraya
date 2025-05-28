import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-[80vh] flex items-center bg-gray-100 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero_banner_desktop.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 max-w-xl">
            <h1 className="font-tenor text-4xl md:text-5xl lg:text-6xl font-normal mb-6 text-white drop-shadow-lg tracking-wider uppercase">
              The New Spring Lineup
            </h1>
            <p className="font-lato text-lg md:text-xl mb-10 text-white font-light drop-shadow-md leading-relaxed">
              Essential layers. Effortless style. Forever-fair prices.
            </p>
            <Button
              size="lg"
              className="bg-white text-gray-800 hover:bg-gray-50 px-10 py-7 text-lg font-tenor tracking-luxury uppercase rounded-none border-none shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="/products">Shop the Collection</Link>
            </Button>
          </div>
          <div className="order-1 md:order-2">{/* Hero image space */}</div>
        </div>
      </div>
    </section>
  )
}
