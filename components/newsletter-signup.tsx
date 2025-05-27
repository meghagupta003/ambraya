import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSignup() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Stay in the Loop</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Be the first to know about new arrivals, exclusive offers, and style inspiration.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 h-12 border-gray-200 focus:border-brand-purple"
            required
          />
          <Button type="submit" className="bg-brand-purple hover:bg-brand-purple/90 text-white px-8 h-12 rounded-full">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}
