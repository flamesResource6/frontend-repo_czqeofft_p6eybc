import { Truck, RotateCw, ShieldCheck, Leaf } from 'lucide-react'

const usps = [
  { icon: Truck, title: 'Free Shipping', desc: 'On orders over $100 worldwide.' },
  { icon: RotateCw, title: 'Easy Returns', desc: '30-day hassle-free returns.' },
  { icon: ShieldCheck, title: 'Quality Guaranteed', desc: 'Premium materials, built to last.' },
  { icon: Leaf, title: 'Sustainable', desc: 'Ethically sourced, planet-first.' },
]

export default function USP() {
  return (
    <section id="about" className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-neutral-200 bg-white p-6 flex items-start gap-4">
              <div className="p-2 rounded-xl bg-neutral-900 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">{title}</h3>
                <p className="text-sm text-neutral-600 mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
