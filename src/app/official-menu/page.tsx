import Link from 'next/link'
import { CheckCircle, Info, Star, Users, Coffee } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import menuData from '@/data/menu.json'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Official & Community Secret Menu - Starbucks Guide',
  description: 'Explore the official Starbucks secret menu items and popular community-created drinks. Learn how to order them directly from the app or in-store.',
}

interface MenuItem {
  id: string
  name: string
  type: string
  description: string
  howToOrder: {
    method: string
    steps: string[]
    notes: string
  }
}

const menu: MenuItem[] = menuData

const MenuCard = ({ item }: { item: MenuItem }) => {
  const isOfficial = item.type.includes('Official')
  
  return (
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden border-t-8 ${isOfficial ? 'border-starbucks-green' : 'border-starbucks-gold'}`}>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-gray-900 pr-4">{item.name}</h3>
          <span className={`text-xs font-bold px-3 py-1 rounded-full text-white ${isOfficial ? 'bg-starbucks-green' : 'bg-starbucks-gold'}`}>
            {isOfficial ? 'OFFICIAL' : 'COMMUNITY'}
          </span>
        </div>
        
        <p className="text-gray-600 mb-6">{item.description}</p>

        <div>
          <h4 className="font-semibold text-lg text-gray-800 mb-3 flex items-center">
            <Info className="w-5 h-5 mr-2" />
            How to Order
          </h4>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm font-semibold text-gray-700 mb-3">
              Method: <span className="font-normal">{item.howToOrder.method}</span>
            </p>
            <ol className="space-y-2">
              {item.howToOrder.steps.map((step, index) => (
                <li key={index} className="flex items-start text-sm">
                  <span className="flex-shrink-0 w-5 h-5 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">{index + 1}</span>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ol>
            {item.howToOrder.notes && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 italic">Note: {item.howToOrder.notes}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function OfficialMenuPage() {
  const officialMenus = menu.filter(item => item.type.includes('Official'))
  const communityMenus = menu.filter(item => item.type.includes('Community'))

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Page Title */}
        <section className="bg-gradient-to-br from-starbucks-green via-starbucks-dark-green to-gray-900 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Star className="h-16 w-16 mx-auto mb-6 text-starbucks-gold" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              The Official & Community Secret Menu
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Discover drinks officially released by Starbucks and timeless classics created by the fan community.
            </p>
          </div>
        </section>

        {/* Official Menu Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-starbucks-green mb-3 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 mr-3" />
                Official Secret Menu
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These creations have been recognized and featured by Starbucks, often available directly in the app.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {officialMenus.map(item => <MenuCard key={item.id} item={item} />)}
            </div>
          </div>
        </section>

        {/* Community Menu Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-starbucks-dark-green mb-3 flex items-center justify-center">
                <Users className="w-8 h-8 mr-3" />
                Community-Crafted Secret Menu
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Legendary drinks created and perfected by Starbucks fans. Order them by customizing a standard drink.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {communityMenus.map(item => <MenuCard key={item.id} item={item} />)}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Coffee className="h-12 w-12 mx-auto mb-6 text-starbucks-green" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Order?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Now that you know the secrets, head to our full recipe list or learn the detailed ordering etiquette.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/recipes">
                <button className="btn-starbucks">
                  Browse All Recipes
                </button>
              </Link>
              <Link href="/how-to-order">
                <button className="border-2 border-starbucks-green text-starbucks-green font-semibold py-3 px-6 rounded-lg hover:bg-starbucks-green hover:text-white transition-colors duration-300">
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