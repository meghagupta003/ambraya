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
                <Link href="/men" className="hover:text-brand-purple">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/home" className="hover:text-brand-purple">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/gifts" className="hover:text-brand-purple">
                  Gifts
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
            <Image src="/ambraya-logo.png" alt="Ambraya" width={100} height={32} className="h-8 w-auto" />
          </div>
          <div className="text-sm text-gray-600">© 2024 Ambraya. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
