'use client'

import Image from 'next/image'

const products = [
  {
    name: 'Lavender Coord Set',
    price: '₹2,499',
    image: '/images/products/coord-lavender.jpg',
    link: '/product/lavender-coord-set',
  },
  {
    name: 'Elegant Suit Set',
    price: '₹3,199',
    image: '/images/products/suit-elegant.jpg',
    link: '/product/elegant-suit-set',
  },
  {
    name: 'Pure Cotton Unstitched',
    price: '₹1,499',
    image: '/images/products/unstitched-cotton.jpg',
    link: '/product/cotton-unstitched-suit',
  },
  {
    name: 'Gold Finish Earrings',
    price: '₹999',
    image: '/images/products/jewelry-earrings.jpg',
    link: '/product/gold-finish-earrings',
  },
  {
    name: 'Summer Dress',
    price: '₹1,799',
    image: '/images/products/summer-dress.jpg',
    link: '/product/summer-dress',
  },
]

export default function ProductHighlights() {
  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-center text-2xl font-semibold mb-8 tracking-wide">
        Best Sellers
      </h2>
      <div className="flex gap-6 overflow-x-auto scrollbar-hide max-w-7xl mx-auto px-2">
        {products.map((item) => (
          <a
            key={item.name}
            href={item.link}
            className="min-w-[200px] max-w-[220px] flex-shrink-0 shadow rounded overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative h-60 w-full">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-3 text-center">
              <div className="font-semibold text-sm">{item.name}</div>
              <div className="text-sm text-gray-600">{item.price}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
