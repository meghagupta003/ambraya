import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function FeaturedSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Featured Collection"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light text-gray-800">Everyday Essentials</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Discover our curated collection of timeless pieces designed for the modern lifestyle. Each item is crafted
              with premium materials and attention to detail.
            </p>
            <Button className="bg-brand-purple hover:bg-brand-purple/90 text-white px-8 py-3 rounded-full" asChild>
              <Link href="/collections/essentials">Shop Essentials</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
