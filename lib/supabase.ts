import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database
export interface Category {
  id: string
  name: string
  slug: string
  description: string | null
  image_url: string | null
  created_at: string
  updated_at: string
}

export interface Product {
  id: string
  title: string
  handle: string
  description: string | null
  price: number
  compare_at_price: number | null
  category_id: string | null
  is_featured: boolean
  is_new: boolean
  rating: number
  review_count: number
  tags: string[]
  created_at: string
  updated_at: string
  category?: Category
  images?: ProductImage[]
  variants?: ProductVariant[]
}

export interface ProductImage {
  id: string
  product_id: string
  image_url: string
  alt_text: string | null
  position: number
  created_at: string
}

export interface ProductVariant {
  id: string
  product_id: string
  title: string
  price: number | null
  compare_at_price: number | null
  available_for_sale: boolean
  inventory_quantity: number
  size: string | null
  color: string | null
  created_at: string
  updated_at: string
}
