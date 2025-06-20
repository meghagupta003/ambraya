import HeroBanner from '@/components/home/HeroBanner';
import CategoryGrid from '@/components/home/CategoryGrid';
import PromoBanner from '@/components/home/PromoBanner';
import ProductHighlights from '@/components/home/ProductHighlights';
import ValuesStrip from '@/components/home/ValuesStrip';

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <HeroBanner />
      <CategoryGrid />
      <PromoBanner />
      <ProductHighlights />
      <ValuesStrip />
    </main>
  );
}
