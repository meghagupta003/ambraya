import type { Product } from "./types"

// Clothing-specific mock data
const clothingProducts: Product[] = [
  {
    id: "1",
    title: "Essential Cotton Tee",
    handle: "essential-cotton-tee",
    description:
      "Our signature organic cotton t-shirt. Soft, breathable, and designed for everyday comfort. Made from 100% organic cotton with a relaxed fit.",
    price: 45.0,
    compareAtPrice: 65.0,
    image: "/placeholder.svg?height=600&width=600",
    images: ["/placeholder.svg?height=600&width=600"],
    rating: 4.8,
    reviewCount: 124,
    isNew: true,
    isFeatured: true,
    category: "Basics",
    tags: ["organic", "cotton", "essential", "unisex"],
    variants: [
      {
        id: "1-s",
        title: "Small",
        price: 45.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "S" }],
      },
      {
        id: "1-m",
        title: "Medium",
        price: 45.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "M" }],
      },
      {
        id: "1-l",
        title: "Large",
        price: 45.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "L" }],
      },
    ],
  },
  {
    id: "2",
    title: "Minimalist Hoodie",
    handle: "minimalist-hoodie",
    description:
      "Clean lines meet ultimate comfort. This premium hoodie features a modern cut and luxurious cotton blend fabric.",
    price: 120.0,
    image: "/placeholder.svg?height=600&width=600",
    images: ["/placeholder.svg?height=600&width=600"],
    rating: 4.9,
    reviewCount: 89,
    isFeatured: true,
    category: "Outerwear",
    tags: ["hoodie", "minimalist", "premium", "cotton"],
    variants: [
      {
        id: "2-s",
        title: "Small",
        price: 120.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "S" }],
      },
      {
        id: "2-m",
        title: "Medium",
        price: 120.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "M" }],
      },
      {
        id: "2-l",
        title: "Large",
        price: 120.0,
        availableForSale: false,
        selectedOptions: [{ name: "Size", value: "L" }],
      },
    ],
  },
  {
    id: "3",
    title: "Tailored Blazer",
    handle: "tailored-blazer",
    description:
      "Sophisticated tailoring meets contemporary design. Perfect for both professional and casual settings.",
    price: 280.0,
    compareAtPrice: 350.0,
    image: "/placeholder.svg?height=600&width=600",
    images: ["/placeholder.svg?height=600&width=600"],
    rating: 4.7,
    reviewCount: 56,
    isNew: true,
    isFeatured: true,
    category: "Formal",
    tags: ["blazer", "tailored", "professional", "wool"],
    variants: [
      {
        id: "3-s",
        title: "Small",
        price: 280.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "S" }],
      },
      {
        id: "3-m",
        title: "Medium",
        price: 280.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "M" }],
      },
      {
        id: "3-l",
        title: "Large",
        price: 280.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "L" }],
      },
    ],
  },
  {
    id: "4",
    title: "Relaxed Denim",
    handle: "relaxed-denim",
    description:
      "Premium Japanese denim with a comfortable relaxed fit. Crafted for durability and style that improves with age.",
    price: 150.0,
    image: "/placeholder.svg?height=600&width=600",
    images: ["/placeholder.svg?height=600&width=600"],
    rating: 4.6,
    reviewCount: 203,
    isFeatured: true,
    category: "Denim",
    tags: ["denim", "japanese", "relaxed", "premium"],
    variants: [
      {
        id: "4-28",
        title: "28",
        price: 150.0,
        availableForSale: true,
        selectedOptions: [{ name: "Waist", value: "28" }],
      },
      {
        id: "4-30",
        title: "30",
        price: 150.0,
        availableForSale: true,
        selectedOptions: [{ name: "Waist", value: "30" }],
      },
      {
        id: "4-32",
        title: "32",
        price: 150.0,
        availableForSale: true,
        selectedOptions: [{ name: "Waist", value: "32" }],
      },
    ],
  },
  {
    id: "5",
    title: "Silk Scarf",
    handle: "silk-scarf",
    description: "Luxurious 100% silk scarf with hand-rolled edges. A timeless accessory that elevates any outfit.",
    price: 85.0,
    image: "/placeholder.svg?height=600&width=600",
    images: ["/placeholder.svg?height=600&width=600"],
    rating: 4.8,
    reviewCount: 67,
    category: "Accessories",
    tags: ["silk", "scarf", "luxury", "handmade"],
    variants: [
      {
        id: "5-one",
        title: "One Size",
        price: 85.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "One Size" }],
      },
    ],
  },
  {
    id: "6",
    title: "Merino Wool Sweater",
    handle: "merino-wool-sweater",
    description:
      "Ultra-soft merino wool sweater with a contemporary fit. Temperature regulating and naturally odor-resistant.",
    price: 180.0,
    compareAtPrice: 220.0,
    image: "/placeholder.svg?height=600&width=600",
    images: ["/placeholder.svg?height=600&width=600"],
    rating: 4.9,
    reviewCount: 134,
    category: "Knitwear",
    tags: ["merino", "wool", "sweater", "premium"],
    variants: [
      {
        id: "6-s",
        title: "Small",
        price: 180.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "S" }],
      },
      {
        id: "6-m",
        title: "Medium",
        price: 180.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "M" }],
      },
      {
        id: "6-l",
        title: "Large",
        price: 180.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "L" }],
      },
    ],
  },
  {
    id: "7",
    title: "Linen Shirt",
    handle: "linen-shirt",
    description: "Breathable European linen shirt with a modern collar. Perfect for warm weather and effortless style.",
    price: 95.0,
    image: "/placeholder.svg?height=600&width=600",
    images: ["/placeholder.svg?height=600&width=600"],
    rating: 4.5,
    reviewCount: 78,
    category: "Shirts",
    tags: ["linen", "european", "breathable", "summer"],
    variants: [
      {
        id: "7-s",
        title: "Small",
        price: 95.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "S" }],
      },
      {
        id: "7-m",
        title: "Medium",
        price: 95.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "M" }],
      },
      {
        id: "7-l",
        title: "Large",
        price: 95.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "L" }],
      },
    ],
  },
  {
    id: "8",
    title: "Leather Crossbody Bag",
    handle: "leather-crossbody-bag",
    description:
      "Handcrafted Italian leather crossbody bag. Minimalist design with premium hardware and thoughtful organization.",
    price: 220.0,
    image: "/placeholder.svg?height=600&width=600",
    images: ["/placeholder.svg?height=600&width=600"],
    rating: 4.7,
    reviewCount: 92,
    isNew: true,
    category: "Accessories",
    tags: ["leather", "italian", "crossbody", "handcrafted"],
    variants: [
      {
        id: "8-black",
        title: "Black",
        price: 220.0,
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Black" }],
      },
      {
        id: "8-brown",
        title: "Brown",
        price: 220.0,
        availableForSale: true,
        selectedOptions: [{ name: "Color", value: "Brown" }],
      },
    ],
  },
]

export async function getAllProducts(): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return clothingProducts
}

export async function getFeaturedProducts(): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return clothingProducts.filter((product) => product.isFeatured)
}

export async function getProduct(handle: string): Promise<Product | null> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return clothingProducts.find((product) => product.handle === handle) || null
}

export async function searchProducts(query: string): Promise<Product[]> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return clothingProducts.filter(
    (product) =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase())),
  )
}
