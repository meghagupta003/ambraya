// components/HeroBanner.tsx

'use client';

import Image from 'next/image';

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      <Image
        src="/herobanner.jpg"
        alt="Luxury Fashion Banner"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-light tracking-wide mb-4">
          New: Summer Ready Styles
        </h1>
        <p className="text-base md:text-lg mb-6 max-w-xl">
          Discover timeless essentials handcrafted for the modern wardrobe.
        </p>
        <a
          href="/catalog"
          className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-neutral-200 transition"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}

