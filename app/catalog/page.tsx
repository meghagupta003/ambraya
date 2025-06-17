import { createClient } from '@/utils/supabase/server';

export default async function Catalog() {
  const supabase = createClient(); // ✅ use inside the function

  const { data: products, error } = await supabase.from('products').select('*');

  console.log('Fetched products:', products);
  if (error) {
  console.error('Error fetching products:', error.message);
  return <div className="p-10 text-red-600">Failed to load products.</div>;
}


  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">Shop Co-ords</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products?.map((product) => (
          <div key={product.id} className="border hover:shadow-md transition rounded overflow-hidden">
            <img src={product.image_url} alt={product.name} className="w-full h-80 object-cover" />
            <div className="p-3">
              <h2 className="text-md font-medium truncate">{product.name}</h2>
              <p className="text-sm text-gray-600 mt-1">₹{product.price}</p>
              {product.sizes && (
                <p className="text-xs text-gray-500 mt-1">
                  Sizes: {Object.keys(product.sizes).filter((s) => product.sizes[s] > 0).join(', ')}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
