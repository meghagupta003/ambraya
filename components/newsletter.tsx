import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function Newsletter() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <Mail className="h-12 w-12 mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Subscribe to our newsletter for the latest products, exclusive deals, and insider updates.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input type="email" placeholder="Enter your email" className="flex-1 bg-white text-black" required />
          <Button type="submit" variant="secondary" className="px-8">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}
