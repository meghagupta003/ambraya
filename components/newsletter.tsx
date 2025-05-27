import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="py-20 bg-brand-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-light mb-4 tracking-wide">STAY IN TOUCH</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto font-light opacity-90">
          Be the first to know about new collections, exclusive offers, and style inspiration.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-transparent border-brand-neutral-medium text-white placeholder:text-gray-400 h-12"
            required
          />
          <Button
            type="submit"
            variant="outline"
            className="px-8 h-12 bg-brand-purple text-white hover:bg-brand-purple/90 font-light tracking-wide"
          >
            SUBSCRIBE
          </Button>
        </form>
      </div>
    </section>
  )
}
