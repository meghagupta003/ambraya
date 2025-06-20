'use client'

import Image from 'next/image'

const categories = [
  {
    title: 'Coord Sets',
    image: '/images/categories/coord-sets.jpg',
    link: '/catalog?category=coord-sets',
  },
  {
    title: 'Suit Sets',
    image: '/images/categories/suit-sets.jpg',
    link: '/catalog?category=suit-sets',
  },
  {
    title: 'Unstitched Suits',
    image: '/images/categories/unstitched.jpg',
    link: '/catalog?category=unstitched-suits',
  },
  {
    title: 'Jewelry',
    image: '/images/categories/jewelry.jpg',
    link: '/catalog?category=jewelry',
  },
  {
    title: 'Dresses',
    image: '/images/categories/dresses.jpg',
    link: '/catalog?category=dresses',
  },
]

export default function CategoryGrid() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-center text-2xl font-semibold tracking-wider uppercase mb-10">
        Shop by Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {categories.map((cat) => (
          <a
            key={cat.title}
            href={cat.link}
            className="group block overflow-hidden rounded shadow hover:shadow-xl transition"
          >
            <div className="relative h-60 w-full">
              <Image
                src={cat.image}
                alt={cat.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-center py-3 font-medium">{cat.title}</div>
          </a>
        ))}
      </div>
    </section>
  )
}
