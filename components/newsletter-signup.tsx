import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSignup() {
  return (
    <section className="py-24 bg-brand-beige">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-tenor text-3xl md:text-4xl uppercase tracking-wider mb-4">Stay in the Loop</h2>
        <div className="w-16 h-px bg-brand-gold mx-auto mb-8"></div>
        <p className="font-lato text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Be the first to know about new arrivals, exclusive offers, and style inspiration.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 h-14 border-gray-200 focus:border-brand-gold font-lato rounded-none"
            required
          />
          <Button type="submit" className="bg-brand-black hover:bg-brand-black/90 text-white px-10 h-14 rounded-none font-tenor tracking-luxury uppercase">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}
