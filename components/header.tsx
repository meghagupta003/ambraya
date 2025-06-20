import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-secondary border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/">
          <h1 className="text-2xl font-bold text-primary">Ambraya</h1>
        </Link>

        <nav className="space-x-6 font-medium text-primary">
          <Link href="/">Home</Link>
          <Link href="/catalog">Shop</Link>
          <Link href="/login">Admin</Link>
        </nav>
      </div>
    </header>
  )
}
