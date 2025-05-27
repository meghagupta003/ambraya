"use client"
import { Button } from "@/components/ui/button"
import type { ProductVariant } from "@/lib/types"

interface SizeSelectorProps {
  variants: ProductVariant[]
  selectedVariant: ProductVariant | null
  onVariantChange: (variant: ProductVariant) => void
}

export function SizeSelector({ variants, selectedVariant, onVariantChange }: SizeSelectorProps) {
  if (variants.length === 0) return null

  const sizeVariants = variants.filter((variant) =>
    variant.selectedOptions.some((option) => option.name === "Size" || option.name === "Waist"),
  )

  if (sizeVariants.length === 0) return null

  return (
    <div className="space-y-3">
      <h4 className="font-medium text-sm tracking-wide">SIZE</h4>
      <div className="flex flex-wrap gap-2">
        {sizeVariants.map((variant) => {
          const sizeOption = variant.selectedOptions.find((option) => option.name === "Size" || option.name === "Waist")
          const isSelected = selectedVariant?.id === variant.id
          const isAvailable = variant.availableForSale

          return (
            <Button
              key={variant.id}
              size="sm"
              className={`min-w-[3rem] h-10 ${!isAvailable ? "opacity-50 cursor-not-allowed" : ""} ${isSelected ? "bg-brand-purple text-white hover:bg-brand-purple/90" : "border-brand-neutral-medium hover:border-brand-purple"}`}
              onClick={() => isAvailable && onVariantChange(variant)}
              disabled={!isAvailable}
            >
              {sizeOption?.value}
            </Button>
          )
        })}
      </div>
    </div>
  )
}
