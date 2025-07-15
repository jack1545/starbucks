import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center p-8">
          <div className="text-9xl font-black text-starbucks-green opacity-10 mb-4 select-none">404</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            It seems the page you're looking for has melted away like foam in a latte. Don't worry, we can get you back to a warm, familiar place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <button className="btn-starbucks w-full sm:w-auto">
                Go to Homepage
              </button>
            </Link>
            <Link href="/recipes">
              <button className="w-full sm:w-auto border-2 border-starbucks-green text-starbucks-green font-semibold py-3 px-6 rounded-lg hover:bg-starbucks-green hover:text-white transition-colors duration-300">
                Explore Recipes
              </button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 