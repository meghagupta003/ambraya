import type React from "react"
import type { Metadata } from "next"
import { Tenor_Sans, Lato } from 'next/font/google'
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/hooks/use-cart"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"  // ✅ Add this line

// Font configurations
const tenorSans = Tenor_Sans({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-tenor-sans",
  display: "swap"
})

const lato = Lato({ 
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Ambraya - Everyday Lifestyle",
  description: "Essential layers. Effortless style. Forever-fair prices.",
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className={`${tenorSans.variable} ${lato.variable} font-lato`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <CartProvider>
            <Header />
            {children}
            <Footer />
            <Toaster richColors position="top-center" /> {/* ✅ Add this */}
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



