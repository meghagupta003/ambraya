import { ProductCard } from "@/components/product-card"
import { getAllProducts } from "@/lib/products"

export async function ProductGrid() {
  const products = await getAllProducts()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
