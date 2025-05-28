"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, Truck, RotateCcw, Info, Ruler, Leaf, Droplets, Wind, Shield } from "lucide-react"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { SizeSelector } from "@/components/size-selector"
import { getProduct } from "@/lib/clothing-products"
import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface ProductPageProps {
  params: {
    handle: string
  }
}

// Cotton Fabric Benefits Component with Premium Gradient
function CottonFabricWidget() {
  const benefits = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "100% Natural",
      description: "Pure cotton fibers sourced from sustainable farms",
    },
    {
      icon: <Wind className="h-8 w-8 text-blue-500" />,
      title: "Breathable",
      description: "Natural ventilation keeps you cool and comfortable",
    },
    {
      icon: <Droplets className="h-8 w-8 text-cyan-500" />,
      title: "Moisture Wicking",
      description: "Absorbs moisture while staying soft against skin",
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Hypoallergenic",
      description: "Gentle on sensitive skin, naturally antimicrobial",
    },
  ]

  return (
    <div className="my-16 p-12 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 border-t border-b border-amber-100 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-brand-gold/10 to-transparent rounded-full -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-amber-200/20 to-transparent rounded-full translate-x-20 translate-y-20"></div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 mb-6 border border-amber-200/50 shadow-sm">
            <Leaf className="h-5 w-5 text-green-600" />
            <span className="text-sm font-tenor uppercase tracking-luxury text-gray-700">Premium Cotton Fabric</span>
          </div>
          <h3 className="font-tenor text-2xl uppercase tracking-wider mb-4 text-gray-800">
            Crafted with Pure Cotton Excellence
          </h3>
          <div className="w-16 h-px bg-brand-gold mx-auto mb-6"></div>
          <p className="font-lato text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience the luxury of 100% pure cotton - naturally soft, breathable, and designed for all-day comfort.
            Our handpicked cotton ensures durability while maintaining the gentle touch your skin deserves.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/90 backdrop-blur-sm w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:shadow-md transition-all duration-300 border border-white/50 group-hover:bg-white">
                {benefit.icon}
              </div>
              <h4 className="font-tenor uppercase tracking-wider text-gray-800 mb-3">{benefit.title}</h4>
              <p className="font-lato text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Cotton Care Tips */}
        <div className="mt-12 p-8 bg-white/70 backdrop-blur-sm border border-white/50 shadow-sm">
          <h4 className="font-tenor uppercase tracking-wider text-gray-800 mb-6 flex items-center gap-2 justify-center">
            <Info className="h-5 w-5 text-brand-gold" />
            Cotton Care Tips
          </h4>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 mt-2 flex-shrink-0 rounded-full"></div>
              <span className="font-lato">Wash in cold water to preserve color and prevent shrinkage</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 mt-2 flex-shrink-0 rounded-full"></div>
              <span className="font-lato">Air dry in shade to maintain fabric integrity</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 mt-2 flex-shrink-0 rounded-full"></div>
              <span className="font-lato">Iron on medium heat while slightly damp for best results</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductPage({ params }: ProductPageProps) {
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [selectedVariant, setSelectedVariant] = useState<any>(null)

  useEffect(() => {
    async function fetchProduct() {
      try {
        const productData = await getProduct(params.handle)
        setProduct(productData)
        setSelectedVariant(productData?.variants[0] || null)
      } catch (error) {
        console.error("Error fetching product:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [params.handle])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="animate-pulse">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="aspect-square bg-gray-200"></div>
            <div className="space-y-6">
              <div className="h-8 bg-gray-200 w-3/4"></div>
              <div className="h-4 bg-gray-200 w-1/2"></div>
              <div className="h-6 bg-gray-200 w-1/4"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    notFound()
  }

  const discountPercentage = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-6">
          <div className="aspect-square relative overflow-hidden">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              {product.isNew && (
                <Badge className="bg-black hover:bg-black/90 text-white px-4 py-1 rounded-none font-tenor tracking-wider">
                  New
                </Badge>
              )}
              {discountPercentage > 0 && (
                <Badge className="bg-brand-gold hover:bg-brand-gold/90 text-white px-4 py-1 rounded-none font-tenor tracking-wider">
                  -{discountPercentage}% OFF
                </Badge>
              )}
            </div>
            <h1 className="font-tenor text-3xl uppercase tracking-wider mb-6">{product.title}</h1>

            {product.details && (
              <div className="mb-6 text-gray-600 space-y-2 font-lato">
                <p>
                  <span className="font-tenor uppercase tracking-wider text-gray-800">SKU:</span> ALD-001
                </p>
                <p>
                  <span className="font-tenor uppercase tracking-wider text-gray-800">Fabric:</span>{" "}
                  {product.details.fabric}
                </p>
                <p>
                  <span className="font-tenor uppercase tracking-wider text-gray-800">Print:</span>{" "}
                  {product.details.print}
                </p>
                <p>
                  <span className="font-tenor uppercase tracking-wider text-gray-800">Style:</span>{" "}
                  {product.details.style}
                </p>
              </div>
            )}

            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? "fill-brand-gold text-brand-gold" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500 font-lato">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl font-tenor">₹{product.price}</span>
              {product.compareAtPrice && (
                <span className="text-xl text-gray-400 line-through font-lato">₹{product.compareAtPrice}</span>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <SizeSelector
              variants={product.variants}
              selectedVariant={selectedVariant}
              onVariantChange={setSelectedVariant}
            />

            {product.details?.sizeChart && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-12 flex gap-2 items-center rounded-none border-gray-300 font-tenor tracking-wider uppercase"
                  >
                    <Ruler className="h-4 w-4" />
                    <span>Size Guide</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-3xl">
                  <DialogHeader>
                    <DialogTitle className="font-tenor text-2xl uppercase tracking-wider">Size Chart</DialogTitle>
                    <DialogDescription className="font-lato">
                      Measurements in inches. Model is wearing size S (Height: 5'6")
                    </DialogDescription>
                  </DialogHeader>
                  <div className="overflow-auto max-h-96">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="font-tenor">Size</TableHead>
                          <TableHead className="font-tenor">Bust</TableHead>
                          <TableHead className="font-tenor">Waist</TableHead>
                          <TableHead className="font-tenor">Shoulder</TableHead>
                          <TableHead className="font-tenor">Sleeve Length</TableHead>
                          <TableHead className="font-tenor">Dress Length</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {product.details.sizeChart.map((size) => (
                          <TableRow key={size.size}>
                            <TableCell className="font-tenor">{size.size}</TableCell>
                            <TableCell className="font-lato">{size.bust}"</TableCell>
                            <TableCell className="font-lato">{size.waist}"</TableCell>
                            <TableCell className="font-lato">{size.shoulder}"</TableCell>
                            <TableCell className="font-lato">{size.sleeveLength}"</TableCell>
                            <TableCell className="font-lato">{size.dressLength}"</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>

                    {product.details.sizingNotes && (
                      <div className="mt-8 p-6 bg-brand-beige">
                        <h3 className="font-tenor uppercase tracking-wider mb-4">Fit & Sizing Notes</h3>
                        <ul className="list-disc pl-5 space-y-2 text-sm font-lato">
                          {product.details.sizingNotes.map((note, i) => (
                            <li key={i}>{note}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            )}

            <AddToCartButton
              product={product}
              className="w-full h-14 text-lg bg-brand-black hover:bg-brand-black/90 text-white rounded-none font-tenor tracking-luxury uppercase"
            />

            <Button
              variant="outline"
              className="w-full h-14 border-gray-300 hover:bg-gray-50 hover:text-brand-black flex items-center gap-3 rounded-none font-tenor tracking-luxury uppercase"
            >
              <Heart className="h-5 w-5" />
              <span>Add to Wishlist</span>
            </Button>
          </div>

          {/* Shipping Info */}
          <div className="border-t border-b py-6 space-y-4 my-8">
            <div className="flex items-center gap-4">
              <Truck className="h-5 w-5 text-brand-gold" />
              <span className="font-lato">Free shipping on prepaid orders</span>
            </div>
            <div className="flex items-center gap-4">
              <RotateCcw className="h-5 w-5 text-brand-gold" />
              <span className="font-lato">Easy 7-day returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs - Moved above Cotton Widget */}
      <div className="mt-16">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8 border-b border-gray-200 bg-transparent">
            <TabsTrigger
              value="description"
              className="font-tenor uppercase tracking-wider data-[state=active]:border-b-2 data-[state=active]:border-brand-gold data-[state=active]:shadow-none rounded-none"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="highlights"
              className="font-tenor uppercase tracking-wider data-[state=active]:border-b-2 data-[state=active]:border-brand-gold data-[state=active]:shadow-none rounded-none"
            >
              Highlights
            </TabsTrigger>
            <TabsTrigger
              value="styling"
              className="font-tenor uppercase tracking-wider data-[state=active]:border-b-2 data-[state=active]:border-brand-gold data-[state=active]:shadow-none rounded-none"
            >
              Styling
            </TabsTrigger>
            <TabsTrigger
              value="shipping"
              className="font-tenor uppercase tracking-wider data-[state=active]:border-b-2 data-[state=active]:border-brand-gold data-[state=active]:shadow-none rounded-none"
            >
              Shipping
            </TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="text-gray-600 font-lato leading-relaxed">
            <p className="whitespace-pre-line">{product.description}</p>
          </TabsContent>
          <TabsContent value="highlights" className="text-gray-600 font-lato">
            {product.details?.highlights && (
              <ul className="space-y-3">
                {product.details.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </TabsContent>
          <TabsContent value="styling" className="text-gray-600 font-lato leading-relaxed">
            {product.details?.styleNote && <p>{product.details.styleNote}</p>}
          </TabsContent>
          <TabsContent value="shipping" className="text-gray-600 font-lato">
            {product.details?.shipping && (
              <ul className="space-y-3">
                {product.details.shipping.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2.5 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Cotton Fabric Widget - Now below the details section */}
      <CottonFabricWidget />
    </div>
  )
}
