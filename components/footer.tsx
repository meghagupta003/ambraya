import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-brand-beige border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h3 className="font-tenor uppercase tracking-wider text-gray-800 mb-6">Shop</h3>
            <ul className="space-y-4 text-sm text-gray-600 font-lato">
              <li>
                <Link href="/women" className="hover:text-brand-purple transition-colors">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/jewelry" className="hover:text-brand-purple transition-colors">
                  Jewelry
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="hover:text-brand-purple transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/best-sellers" className="hover:text-brand-purple transition-colors">
                  Best Sellers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-tenor uppercase tracking-wider text-gray-800 mb-6">Customer Care</h3>
            <ul className="space-y-4 text-sm text-gray-600 font-lato">
              <li>
                <Link href="/contact" className="hover:text-brand-purple transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-brand-purple transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="hover:text-brand-purple transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-brand-purple transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-tenor uppercase tracking-wider text-gray-800 mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-gray-600 font-lato">
              <li>
                <Link href="/about" className="hover:text-brand-purple transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-brand-purple transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-brand-purple transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-brand-purple transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-tenor uppercase tracking-wider text-gray-800 mb-6">Connect</h3>
            <ul className="space-y-4 text-sm text-gray-600 font-lato">
              <li>
                <Link href="#" className="hover:text-brand-purple transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-purple transition-colors">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-purple transition-colors">
                  Pinterest
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-purple transition-colors">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-12 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Image
              src="/ambraya-logo.png"
              alt="Ambraya"
              width={180}
              height={60}
              className="h-14 w-auto mix-blend-multiply"
            />
          </div>
          <div className="text-sm text-gray-600 font-lato">© 2025 Ambraya. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
