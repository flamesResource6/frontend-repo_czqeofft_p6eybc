import { Facebook, Instagram, Twitter, Youtube, CreditCard, Split } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-3 text-neutral-900">Customer Service</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li><a href="#" className="hover:text-neutral-900">Contact Us</a></li>
              <li><a href="#" className="hover:text-neutral-900">Sizing Guide</a></li>
              <li><a href="#" className="hover:text-neutral-900">Shipping Info</a></li>
              <li><a href="#" className="hover:text-neutral-900">Returns</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-neutral-900">About</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li><a href="#" className="hover:text-neutral-900">Our Story</a></li>
              <li><a href="#" className="hover:text-neutral-900">Sustainability</a></li>
              <li><a href="#" className="hover:text-neutral-900">Careers</a></li>
              <li><a href="#" className="hover:text-neutral-900">Press</a></li>
            </ul>
          </div>
          <div className="col-span-2">
            <h4 className="font-semibold mb-3 text-neutral-900">Join our newsletter</h4>
            <p className="text-sm text-neutral-600 mb-4">Be the first to know about new releases and exclusive offers.</p>
            <form className="flex max-w-md gap-2">
              <input type="email" required placeholder="Enter your email" className="flex-1 rounded-full border border-neutral-200 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10" />
              <button className="rounded-full bg-neutral-900 text-white px-5 py-2 text-sm font-medium hover:bg-neutral-800">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Stride. All rights reserved.</p>
          <div className="flex items-center gap-4 text-neutral-500">
            <a href="#" aria-label="Facebook" className="hover:text-neutral-900"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-neutral-900"><Instagram className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-neutral-900"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-neutral-900"><Youtube className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
