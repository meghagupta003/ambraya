'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import { toast } from 'sonner'

export default function AuthCallback() {
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const handleCallback = async () => {
      const { error } = await supabase.auth.getSession()

      if (error) {
        toast.error("Authentication failed. Please try again.")
        router.push('/login')
      } else {
        toast.success("Password reset successful!")
        router.push('/admin')
      }
    }

    handleCallback()
  }, [router, supabase])

  return <p className="p-4">Processing authentication...</p>
}
