import Link from 'next/link'
import { Coffee, Star, TrendingUp, Search, ArrowRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RecipeCard from '@/components/RecipeCard'
import { featuredRecipes } from '@/data/recipes'

const popularSearches = [
  'Starbucks secret menu Frappuccino',
  'Starbucks Refreshers secret menu',
  'Starbucks cold brew secret menu',
  'Starbucks iced coffee hacks',
  'Vegan Starbucks secret menu',
  'Low-calorie Starbucks secret menu'
]

const exploreCategories = [
  { name: 'Frappuccinos', href: '/frappuccinos', color: 'bg-category-pink' },
  { name: 'Iced Drinks', href: '/drinks/iced', color: 'bg-category-blue' },
  { name: 'Hot Drinks', href: '/drinks/hot', color: 'bg-category-orange' },
  { name: 'Refreshers', href: '/drinks/refreshers', color: 'bg-category-purple' },
  { name: 'Seasonal Specials', href: '/seasonal', color: 'bg-category-red' },
  { name: 'DIY Recipes', href: '/diy-recipes', color: 'bg-starbucks-green' }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-starbucks-green via-starbucks-dark-green to-gray-900 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <Coffee className="h-16 w-16 mx-auto mb-6 text-starbucks-gold" />
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
                Unlock Starbucks' Hidden Delights: <br className="hidden sm:inline" />
                Your Ultimate Secret Menu Guide
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
                Discover Beyond the Menu: Official & Community Starbucks Creations
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/frappuccinos">
                <button className="btn-starbucks flex items-center">
                  <Coffee className="w-5 h-5 mr-2" />
                  Explore Recipes
                </button>
              </Link>
              <Link href="/app-guide">
                <button className="bg-white text-starbucks-green font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  Official App Guide
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-base sm:text-lg mb-4 text-gray-700">
                Have you ever wondered about those amazing Starbucks drinks that aren't on the official menu? Welcome to the ultimate resource for <strong className="text-starbucks-green">Starbucks secret menu drinks</strong>, where we dive deep into the world of custom creations, both the newly officialized and the legendary fan-favorites.
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                Since Starbucks integrated a "secret menu" feature into its official app in July 2025, the game has changed! But the true magic of the secret menu still lies in the boundless creativity of the Starbucks community. Whether you're looking for the latest <strong className="text-starbucks-green">official Starbucks secret menu drinks</strong> or craving a classic <strong className="text-starbucks-green">TikTok Starbucks drink</strong> that went viral, you'll find it here.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Recipes Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Try These Secret Recipes
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our most popular and trending secret menu drinks, tested and perfected by our community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/recipes">
                <button className="btn-starbucks flex items-center mx-auto">
                  View All Recipes
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* What You'll Find Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-starbucks-green mb-8 text-center">
              What You'll Find On Our Site
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Star className="h-8 w-8 text-starbucks-gold mr-3" />
                  <h3 className="text-2xl font-semibold text-starbucks-green">
                    The Official Secret Menu
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Gone are the days of whispering complex concoctions to confused baristas! Our site provides detailed guides on how to navigate the <strong className="text-starbucks-green">Starbucks app secret menu</strong> feature.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Step-by-step app navigation guides</li>
                  <li>• Latest official secret menu launches</li>
                  <li>• Contest and promotion tracking</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-8 w-8 text-starbucks-gold mr-3" />
                  <h3 className="text-2xl font-semibold text-starbucks-green">
                    Community Creations
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  The heart of the secret menu lies in its community. We've collected and perfected the most beloved <strong className="text-starbucks-green">Starbucks custom drinks</strong> from fans worldwide.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Detailed ingredients & instructions</li>
                  <li>• Flavor profiles and reviews</li>
                  <li>• Expert tips and customization hacks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Searches */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">Popular Searches:</h3>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {popularSearches.map((search, index) => (
                <Link key={index} href={`/search?q=${encodeURIComponent(search)}`}>
                  <span className="bg-green-100 text-starbucks-green px-4 py-2 rounded-full hover:bg-green-200 transition duration-300 shadow-sm cursor-pointer text-sm">
                    {search}
                  </span>
                </Link>
              ))}
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">Explore Categories:</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {exploreCategories.map((category, index) => (
                <Link key={index} href={category.href}>
                  <span className={`${category.color} text-white px-5 py-2 rounded-full hover:opacity-90 transition duration-300 shadow-md cursor-pointer text-sm font-medium`}>
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-starbucks-green mb-8 text-center">
              Why Choose Us for Your Secret Menu Adventures?
            </h2>
            <p className="text-base sm:text-lg mb-6 text-gray-700 text-center">
              We're more than just a list of drinks; we're a community-driven platform dedicated to the art of Starbucks customization.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Search, title: 'Accuracy & Detail', desc: 'Thoroughly researched recipes and clear ordering instructions.' },
                { icon: TrendingUp, title: 'Up-to-Date Info', desc: 'We track official updates and latest social media trends.' },
                { icon: Coffee, title: 'Vibrant Community', desc: 'Share creations, read reviews, and connect with fellow fans.' },
                { icon: Star, title: 'Visual Guides', desc: 'High-quality images and videos to inspire your next order.' }
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <feature.icon className="h-12 w-12 text-starbucks-green mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gradient-to-r from-starbucks-green to-starbucks-dark-green text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Explore?
            </h2>
            <p className="text-lg mb-8 text-gray-200">
              Dive into our extensive collection of <strong>Starbucks secret menu recipes</strong>, learn <strong>how to order custom Starbucks drinks</strong>, and become a true Starbucks connoisseur. Your next favorite drink is just a click away!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/recipes">
                <button className="bg-white text-starbucks-green font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                  Browse All Recipes
                </button>
              </Link>
              <Link href="/how-to-order">
                <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-starbucks-green transition-colors duration-300">
                  Learn How to Order
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 