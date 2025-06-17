import { createClient } from '@/utils/supabase/server';

export async function GET() {
  const supabase = createClient();
  const { data, error } = await supabase.from('products').select('*');

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(req: Request) {
  const supabase = createClient();

  try {
    const body = await req.json();

    // Validate presence of required fields
    if (!body.name || !body.price || !body.sizes) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    const { data, error } = await supabase
      .from('products')
      .insert([{
        name: body.name,
        price: body.price,
        sizes: body.sizes,
      }])
      .select()
      .single();

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('JSON parse error:', err);
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400 });
  }
}
