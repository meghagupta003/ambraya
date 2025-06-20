'use client'

import Image from 'next/image'

export default function PromoBanner() {
  return (
    <section className="relative h-[600px] w-full">
      {/* Background Image */}
      <Image
        src="/images/promo/banner1.jpg"
        alt="Seasonal Promo"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6 bg-black/40">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide mb-4">
          Last Season’s Favorites, Extra 10% Off
        </h2>
        <p className="mb-6 text-lg sm:text-xl">
          Today only with code: <strong>AMBRAYA10</strong>
        </p>
        <a
          href="/catalog"
          className="bg-white text-black px-6 py-3 rounded-md text-sm font-semibold hover:bg-gray-100 transition"
        >
          Shop Now
        </a>
      </div>
    </section>
  )
}
