import type { Product } from "./types"

// Mock data - in a real app, this would come from your ecommerce platform API
const mockProducts: Product[] = [
  {
    id: "1",
    title: "Premium Wireless Headphones",
    handle: "premium-wireless-headphones",
    description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
    price: 299.99,
    compareAtPrice: 399.99,
    image: "/placeholder.svg?height=400&width=400",
    images: ["/placeholder.svg?height=400&width=400"],
    rating: 4.8,
    reviewCount: 124,
    isNew: true,
    isFeatured: true,
    category: "Electronics",
    tags: ["wireless", "audio", "premium"],
    variants: [],
  },
  {
    id: "2",
    title: "Organic Cotton T-Shirt",
    handle: "organic-cotton-t-shirt",
    description: "Comfortable and sustainable organic cotton t-shirt in various colors.",
    price: 29.99,
    image: "/placeholder.svg?height=400&width=400",
    images: ["/placeholder.svg?height=400&width=400"],
    rating: 4.5,
    reviewCount: 89,
    isFeatured: true,
    category: "Clothing",
    tags: ["organic", "cotton", "sustainable"],
    variants: [],
  },
  {
    id: "3",
    title: "Smart Fitness Watch",
    handle: "smart-fitness-watch",
    description: "Advanced fitness tracking with heart rate monitoring and GPS.",
    price: 199.99,
    compareAtPrice: 249.99,
    image: "/placeholder.svg?height=400&width=400",
    images: ["/placeholder.svg?height=400&width=400"],
    rating: 4.6,
    reviewCount: 203,
    isNew: true,
    isFeatured: true,
    category: "Electronics",
    tags: ["fitness", "smart", "wearable"],
    variants: [],
  },
  {
    id: "4",
    title: "Minimalist Desk Lamp",
    handle: "minimalist-desk-lamp",
    description: "Modern LED desk lamp with adjustable brightness and USB charging port.",
    price: 79.99,
    image: "/placeholder.svg?height=400&width=400",
    images: ["/placeholder.svg?height=400&width=400"],
    rating: 4.3,
    reviewCount: 67,
    isFeatured: true,
    category: "Home",
    tags: ["lighting", "minimalist", "LED"],
    variants: [],
  },
  {
    id: "5",
    title: "Artisan Coffee Beans",
    handle: "artisan-coffee-beans",
    description: "Single-origin coffee beans roasted to perfection for the ultimate coffee experience.",
    price: 24.99,
    image: "/placeholder.svg?height=400&width=400",
    images: ["/placeholder.svg?height=400&width=400"],
    rating: 4.9,
    reviewCount: 156,
    category: "Food & Beverage",
    tags: ["coffee", "artisan", "organic"],
    variants: [],
  },
  {
    id: "6",
    title: "Yoga Mat Pro",
    handle: "yoga-mat-pro",
    description: "Professional-grade yoga mat with superior grip and cushioning.",
    price: 89.99,
    compareAtPrice: 119.99,
    image: "/placeholder.svg?height=400&width=400",
    images: ["/placeholder.svg?height=400&width=400"],
    rating: 4.7,
    reviewCount: 92,
    category: "Sports",
    tags: ["yoga", "fitness", "mat"],
    variants: [],
  },
  {
    id: "7",
    title: "Ceramic Plant Pot Set",
    handle: "ceramic-plant-pot-set",
    description: "Beautiful set of ceramic plant pots perfect for indoor gardening.",
    price: 49.99,
    image: "/placeholder.svg?height=400&width=400",
    images: ["/placeholder.svg?height=400&width=400"],
    rating: 4.4,
    reviewCount: 78,
    category: "Home",
    tags: ["ceramic", "plants", "decor"],
    variants: [],
  },
  {
    id: "8",
    title: "Bluetooth Speaker",
    handle: "bluetooth-speaker",
    description: "Portable Bluetooth speaker with 360-degree sound and waterproof design.",
    price: 129.99,
    image: "/placeholder.svg?height=400&width=400",
    images: ["/placeholder.svg?height=400&width=400"],
    rating: 4.5,
    reviewCount: 134,
    category: "Electronics",
    tags: ["bluetooth", "speaker", "portable"],
    variants: [],
  },
]

export async function getAllProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockProducts
}

export async function getFeaturedProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockProducts.filter((product) => product.isFeatured)
}

export async function getProduct(handle: string): Promise<Product | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockProducts.find((product) => product.handle === handle) || null
}

export async function searchProducts(query: string): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockProducts.filter(
    (product) =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase())),
  )
}
