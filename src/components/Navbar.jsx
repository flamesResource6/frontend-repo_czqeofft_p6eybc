import { useState } from 'react'
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartCount] = useState(2)

  const navLinks = [
    { label: 'Shop', href: '#shop' },
    { label: 'Categories', href: '#categories' },
    { label: 'Brands', href: '#brands' },
    { label: 'Sale', href: '#sale' },
    { label: 'About', href: '#about' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Left: Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-neutral-900 to-neutral-700" />
            <span className="text-xl font-bold tracking-tight text-neutral-900">Stride</span>
          </a>

          {/* Center: Nav (desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Search + Icons */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search shoes, brands..."
                className="w-64 rounded-full border border-neutral-200 bg-white pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
              />
            </div>
            <a href="#" className="relative p-2 rounded-full hover:bg-neutral-100 transition">
              <ShoppingCart className="h-5 w-5 text-neutral-800" />
              <span className="absolute -top-1 -right-1 text-[10px] px-1.5 py-0.5 bg-neutral-900 text-white rounded-full">{cartCount}</span>
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-neutral-100 transition">
              <User className="h-5 w-5 text-neutral-800" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 rounded-full hover:bg-neutral-100">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search shoes, brands..."
                className="w-full rounded-full border border-neutral-200 bg-white pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
              />
            </div>
            <nav className="grid gap-2">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="px-3 py-2 rounded-lg text-neutral-700 hover:bg-neutral-100">
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3 mt-3">
              <a href="#" className="relative p-2 rounded-full hover:bg-neutral-100 transition">
                <ShoppingCart className="h-5 w-5 text-neutral-800" />
                <span className="absolute -top-1 -right-1 text-[10px] px-1.5 py-0.5 bg-neutral-900 text-white rounded-full">{cartCount}</span>
              </a>
              <a href="#" className="p-2 rounded-full hover:bg-neutral-100 transition">
                <User className="h-5 w-5 text-neutral-800" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
