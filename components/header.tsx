"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Search, ShoppingCart, Menu, User, Heart } from 'lucide-react'
import { useCart } from "@/hooks/use-cart"
import { CartSheet } from "@/components/cart-sheet"

export function Header() {
  const { items } = useCart()
  const itemCount = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <>
      {/* Top notification bar */}
      <div className="bg-brand-beige text-center py-3 text-sm text-gray-800 font-tenor tracking-wider">
        Free shipping & easy returns for 365 days
      </div>

      <header className="sticky top-0 z-50 w-full bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-12">
              <Link href="/" className="flex items-center">
                <Image src="/ambraya-logo.png" alt="Ambraya" width={200} height={75} className="h-16 w-auto" />
              </Link>

              <nav className="hidden lg:flex items-center space-x-10">
                <Link href="/new-arrivals" className="font-tenor text-sm uppercase tracking-wider hover:text-brand-purple transition-colors">
                  New Arrivals
                </Link>
                <Link href="/best-sellers" className="font-tenor text-sm uppercase tracking-wider hover:text-brand-purple transition-colors">
                  Best Sellers
                </Link>
                <Link href="/women" className="font-tenor text-sm uppercase tracking-wider hover:text-brand-purple transition-colors">
                  Women
                </Link>
                <Link href="/jewelry" className="font-tenor text-sm uppercase tracking-wider hover:text-brand-purple transition-colors">
                  Jewelry
                </Link>
                <Link href="/about" className="font-tenor text-sm uppercase tracking-wider hover:text-brand-purple transition-colors">
                  About
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Search"
                    className="pl-10 w-64 h-10 border-gray-200 focus:border-brand-purple font-lato"
                  />
                  <Button
                    size="sm"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 bg-brand-gold hover:bg-brand-gold/90 text-white rounded-none"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Button variant="ghost" size="icon" className="hidden md:flex">
                <User className="h-5 w-5" />
              </Button>

              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Heart className="h-5 w-5" />
              </Button>

              <CartSheet>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {itemCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-brand-gold text-white rounded-full">
                      {itemCount}
                    </Badge>
                  )}
                </Button>
              </CartSheet>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <nav className="flex flex-col space-y-6 mt-12">
                    <Link href="/new-arrivals" className="font-tenor text-lg uppercase tracking-wider">
                      New Arrivals
                    </Link>
                    <Link href="/best-sellers" className="font-tenor text-lg uppercase tracking-wider">
                      Best Sellers
                    </Link>
                    <Link href="/women" className="font-tenor text-lg uppercase tracking-wider">
                      Women
                    </Link>
                    <Link href="/jewelry" className="font-tenor text-lg uppercase tracking-wider">
                      Jewelry
                    </Link>
                    <Link href="/about" className="font-tenor text-lg uppercase tracking-wider">
                      About
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
