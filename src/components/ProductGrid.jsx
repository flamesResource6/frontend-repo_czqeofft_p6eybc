import { useState } from 'react'
import { Eye, Plus } from 'lucide-react'

const products = [
  {
    id: 1,
    brand: 'Stride',
    name: 'Aero Runner 2.0',
    price: 129,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
  },
  { id: 2, brand: 'Stride', name: 'Urban Low', price: 98, image: 'https://images.unsplash.com/photo-1720799359321-12d8d81a096d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBZXJvJTIwUnVubmVyJTIwMi4wfGVufDB8MHx8fDE3NjI4NjM2NzR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 3, brand: 'Stride', name: 'Classic Leather', price: 159, image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, brand: 'Stride', name: 'Trail Scout', price: 139, image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, brand: 'Stride', name: 'City Slip-On', price: 89, image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, brand: 'Stride', name: 'Monk Strap', price: 179, image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop' },
]

export default function ProductGrid({ title = 'Best Sellers' }) {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="shop" className="py-16 sm:py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">{title}</h2>
          <a href="#" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">View all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-lg transition-shadow" onMouseEnter={() => setHovered(p.id)} onMouseLeave={() => setHovered(null)}>
              <div className="relative">
                <img src={p.image} alt={p.name} className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                {/* Quick actions */}
                <div className={`absolute inset-0 flex items-center justify-center gap-3 transition-opacity ${hovered === p.id ? 'opacity-100' : 'opacity-0'}`}>
                  <button className="inline-flex items-center gap-2 bg-white/90 backdrop-blur text-neutral-900 px-3 py-2 rounded-full text-sm font-medium hover:bg-white">
                    <Eye className="h-4 w-4" /> Quick View
                  </button>
                  <button className="inline-flex items-center gap-2 bg-neutral-900 text-white px-3 py-2 rounded-full text-sm font-medium hover:bg-neutral-800">
                    <Plus className="h-4 w-4" /> Add to Cart
                  </button>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs uppercase tracking-wide text-neutral-500">{p.brand}</p>
                <h3 className="font-semibold text-neutral-900">{p.name}</h3>
                <p className="mt-1 font-semibold">${p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
