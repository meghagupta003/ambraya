import type { Product } from "./types"

// Clothing-specific mock data
const clothingProducts: Product[] = [
  {
    id: "gulnaar-wrap-anarkali",
    title: "Gulnaar Wrap Anarkali Suit Set - Aqua Floral",
    handle: "gulnaar-wrap-anarkali-suit-set-aqua-floral",
    description:
      "Step into timeless elegance with our Gulnaar Wrap Anarkali Suit Set, featuring a delicate aqua blue base adorned with blooming pink florals. Crafted from pure, breathable cotton, this full-length anarkali exudes effortless grace and feminine charm.\n\nThe flattering wrap neckline and cinched waist tie not only enhance your silhouette but offer comfort and versatility. Its subtle gotta lace detailing on the hemline and sleeves adds a touch of festive flair, making it your go-to outfit for casual brunches, festive gatherings, or heritage photoshoots.",
    price: 1999.0,
    compareAtPrice: 2799.0,
    image: "/gulnaar-anarkali.jpeg", // Updated to use the actual product image
    images: ["/gulnaar-anarkali.jpeg"], // Updated to use the actual product image
    rating: 4.8,
    reviewCount: 0,
    isNew: true,
    isFeatured: true,
    category: "Suit Sets",
    tags: ["cotton", "anarkali", "wrap", "floral", "handcrafted", "block-print", "ethnic"],
    variants: [
      {
        id: "gulnaar-xs",
        title: "XS",
        price: 1999.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "XS" }],
      },
      {
        id: "gulnaar-s",
        title: "S",
        price: 1999.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "S" }],
      },
      {
        id: "gulnaar-m",
        title: "M",
        price: 1999.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "M" }],
      },
      {
        id: "gulnaar-l",
        title: "L",
        price: 1999.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "L" }],
      },
      {
        id: "gulnaar-xl",
        title: "XL",
        price: 1999.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "XL" }],
      },
      {
        id: "gulnaar-xxl",
        title: "XXL",
        price: 1999.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "XXL" }],
      },
      {
        id: "gulnaar-3xl",
        title: "3XL",
        price: 1999.0,
        availableForSale: true,
        selectedOptions: [{ name: "Size", value: "3XL" }],
      },
    ],
    details: {
      fabric: "100% Pure Cotton",
      print: "Handcrafted Floral Block Print",
      style: "Wrap Anarkali | Ethnic Chic",
      highlights: [
        "🌸 Fabric: 100% Pure Cotton – soft, breathable & skin-friendly",
        "🌸 Sleeves: 3/4th Sleeves with lace detailing",
        "🌸 Length: Full length – perfect for twirls & traditional vibes",
        "🌸 Neckline: V-neck wrap style for a flattering fit",
        "🌸 Closure: Adjustable wrap tie with tassels",
        "🌸 Lining: Not required – comfortably opaque",
        "🌸 Care: Hand wash separately in cold water. Dry in shade."
      ],
      sizeChart: [
        { size: "XS", bust: "32", waist: "26", shoulder: "13.5", sleeveLength: "16", dressLength: "48–50" },
        { size: "S", bust: "34", waist: "28", shoulder: "14", sleeveLength: "16", dressLength: "48–50" },
        { size: "M", bust: "36", waist: "30", shoulder: "14.5", sleeveLength: "16.5", dressLength: "48–50" },
        { size: "L", bust: "38", waist: "32", shoulder: "15", sleeveLength: "17", dressLength: "48–50" },
        { size: "XL", bust: "40", waist: "34", shoulder: "15.5", sleeveLength: "17", dressLength: "48–50" },
        { size: "XXL", bust: "42", waist: "36", shoulder: "16", sleeveLength: "17", dressLength: "48–50" },
        { size: "3XL", bust: "44", waist: "38", shoulder: "16.5", sleeveLength: "17", dressLength: "48–50" }
      ],
      sizingNotes: [
        "Wrap style allows flexibility at the waist.",
        "If you're between sizes, choose the smaller size for a snug fit, or the larger size for a relaxed look.",
        "Fabric is non-stretch, but wrap tie gives some adjustment.",
        "Model is wearing size S (Bust 34\", Height 5'6\")."
      ],
      styleNote: "Pair this with oxidized earrings, juttis, and a soft bun for a royal yet relaxed look. Add a cotton dupatta for a festive upgrade.",
      shipping: [
        "📦 Free Shipping on prepaid orders",
        "🔄 Easy 7-Day Returns & Exchanges",
        "🚚 Usually ships within 2–3 business days"
      ]
    }
  },
  // [other products remain the same]
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
