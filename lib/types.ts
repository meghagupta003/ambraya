export interface Product {
  id: string
  title: string
  handle: string
  description: string
  price: number
  compareAtPrice?: number
  image: string
  images: string[]
  rating: number
  reviewCount: number
  isNew?: boolean
  isFeatured?: boolean
  category: string
  tags: string[]
  variants: ProductVariant[]
  details?: ProductDetails
}

export interface ProductDetails {
  fabric?: string
  print?: string
  style?: string
  highlights?: string[]
  sizeChart?: SizeChartEntry[]
  sizingNotes?: string[]
  styleNote?: string
  shipping?: string[]
}

export interface SizeChartEntry {
  size: string
  bust: string
  waist: string
  shoulder: string
  sleeveLength: string
  dressLength: string
}

export interface ProductVariant {
  id: string
  title: string
  price: number
  compareAtPrice?: number
  availableForSale: boolean
  selectedOptions: {
    name: string
    value: string
  }[]
}

export interface Collection {
  id: string
  title: string
  handle: string
  description: string
  image: string
  products: Product[]
}
