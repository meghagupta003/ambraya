'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';

export default function AdminDashboard() {
  const supabase = createClient();
  const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [products, setProducts] = useState<any[]>([]);
  const [form, setForm] = useState({
    name: '',
    price: '',
    xs: 0,
    s: 0,
    m: 0,
    l: 0,
    xl: 0,
    xxl: 0,
  });
  const [image, setImage] = useState<File | null>(null);

  // Auth check
  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      const loggedInUser = data?.user;

      if (!loggedInUser || loggedInUser.email !== 'ambrayalifestyle@gmail.com') {
        router.push('/login');
      } else {
        setUser(loggedInUser);
      }
    };
    checkUser();
  }, []);

  // Fetch products
  useEffect(() => {
    if (!user) return;
    async function fetchData() {
      const res = await fetch('/api/admin');
      if (!res.ok) return;
      const data = await res.json();
      setProducts(data);
    }
    fetchData();
  }, [user]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const payload = {
      name: form.name,
      price: Number(form.price),
      sizes: {
        xs: form.xs,
        s: form.s,
        m: form.m,
        l: form.l,
        xl: form.xl,
        xxl: form.xxl,
      },
    };

    const response = await fetch('/api/admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const product = await response.json();

    if (!response.ok) {
      alert(`❌ Failed: ${product.error}`);
      return;
    }

    if (image && product?.id) {
      const ext = image.name.split('.').pop();
      const filePath = `products/${product.id}-${Date.now()}.${ext}`;
      const { error: uploadError } = await supabase.storage
        .from('product-images')
        .upload(filePath, image);

      if (uploadError) {
        console.error('Upload error:', uploadError);
      } else {
        const { data: urlData } = supabase.storage
          .from('product-images')
          .getPublicUrl(filePath);

        const publicUrl = urlData?.publicUrl;

        if (publicUrl) {
          await supabase
            .from('products')
            .update({ image_url: publicUrl })
            .eq('id', product.id);
        }
      }
    }

    alert('✅ Product added successfully!');
    location.reload();
  };

  if (!user) return null;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">🛠 Inventory Dashboard</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mb-10">
        <input
          className="border p-2 w-full"
          placeholder="Product Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="border p-2 w-full"
          placeholder="Price"
          type="number"
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <div className="grid grid-cols-3 gap-2">
          {['xs', 's', 'm', 'l', 'xl', 'xxl'].map((size) => (
            <input
              key={size}
              className="border p-2"
              placeholder={size.toUpperCase()}
              type="number"
              onChange={(e) =>
                setForm({ ...form, [size]: parseInt(e.target.value || '0') })
              }
            />
          ))}
        </div>
        <input
          type="file"
          accept="image/*"
          className="border p-2 w-full"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
        />
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Add Product
        </button>
      </form>

      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded bg-white shadow">
            <h2 className="font-semibold text-lg">{product.name}</h2>
            <p>Price: ₹{product.price}</p>
            <p>
              XS: {product.sizes?.xs} | S: {product.sizes?.s} | M: {product.sizes?.m} | L: {product.sizes?.l} | XL: {product.sizes?.xl} | XXL: {product.sizes?.xxl}
            </p>
            {product.image_url && (
              <img src={product.image_url} alt={product.name} className="mt-2 w-40" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


