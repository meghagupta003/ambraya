'use client';

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const supabase = createClient();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast.error(`Login failed: ${error.message}`);
    } else {
      toast.success('🎉 Login successful!');
      router.push('/admin');
    }
  };

  const handleForgotPassword = async () => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'https://ambraya.vercel.app/reset',
    });

    if (error) {
      toast.error(`Reset failed: ${error.message}`);
    } else {
      toast.success('📩 Reset email sent. Check your inbox!');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <form onSubmit={handleLogin} className="space-y-4 w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4">Login to Admin</h1>

        <input
          className="border p-2 w-full"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="border p-2 w-full"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded w-full"
        >
          Login
        </button>

        <button
          type="button"
          onClick={handleForgotPassword}
          className="text-sm text-blue-600 underline"
          disabled={!email}
        >
          Forgot password?
        </button>
      </form>
    </div>
  );
}


