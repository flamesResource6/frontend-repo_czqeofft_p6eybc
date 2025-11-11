const categories = [
  { name: "Men's", image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop' },
  { name: "Women's", image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Kids', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Athletic', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Casual', image: 'https://images.unsplash.com/photo-1720799359321-12d8d81a096d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBZXJvJTIwUnVubmVyJTIwMi4wfGVufDB8MHx8fDE3NjI4NjM2NzR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { name: 'Formal', image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop' },
]

export default function FeaturedCategories() {
  return (
    <section id="categories" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">Featured Categories</h2>
          <a href="#shop" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">View all</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <a key={cat.name} href="#shop" className="group relative rounded-2xl overflow-hidden">
              <img src={cat.image} alt={cat.name} className="h-36 sm:h-44 md:h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <span className="absolute bottom-3 left-3 text-white font-semibold drop-shadow">{cat.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
