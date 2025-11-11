import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedCategories from './components/FeaturedCategories'
import ProductGrid from './components/ProductGrid'
import USP from './components/USP'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <FeaturedCategories />
        <ProductGrid title="Best Sellers" />
        <ProductGrid title="New Arrivals" />
        <USP />
      </main>
      <Footer />
    </div>
  )
}

export default App
