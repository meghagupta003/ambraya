import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/women" className="hover:text-brand-purple">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/jewelry" className="hover:text-brand-purple">
                  Jewelry
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="hover:text-brand-purple">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/best-sellers" className="hover:text-brand-purple">
                  Best Sellers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-4">Customer Care</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/contact" className="hover:text-brand-purple">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-brand-purple">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="hover:text-brand-purple">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-brand-purple">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/about" className="hover:text-brand-purple">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-brand-purple">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-brand-purple">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-brand-purple">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:text-brand-purple">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-purple">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-purple">
                  Pinterest
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-brand-purple">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Image
              src="/ambraya-logo.png"
              alt="Ambraya"
              width={180}
              height={60}
              className="h-14 w-auto mix-blend-multiply"
            />
          </div>
          <div className="text-sm text-gray-600">© 2025 Ambraya. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
