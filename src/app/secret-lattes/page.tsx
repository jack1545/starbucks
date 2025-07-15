import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SecretLattes() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-starbucks-green mb-4">
            Secret Menu Lattes & Macchiatos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock the hidden world of Starbucks with these exclusive secret menu creations. 
            From the official app features to customer-created masterpieces.
          </p>
        </div>

        {/* Official App Secret Menu */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-starbucks-dark-green mb-8 text-center">
            📱 Official App Secret Menu
          </h2>
          
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-starbucks-green mb-4">
              ✨ New Feature Alert (July 14, 2025)
            </h3>
            <p className="text-gray-700 mb-4">
              Starbucks officially integrated "Secret Menu" into their app for Starbucks Rewards members! 
              Find exclusive drink customizations in the "Offers" tab, with all modifications automatically 
              populated in your cart for seamless ordering.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <h4 className="font-semibold text-starbucks-dark-green mb-2">🍪 Cookies on Top</h4>
                <p className="text-gray-600 text-sm">Sweet cookie-inspired creation</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <h4 className="font-semibold text-starbucks-dark-green mb-2">🐉 Dragonfruit Glow-up</h4>
                <p className="text-gray-600 text-sm">Vibrant tropical fusion</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <h4 className="font-semibold text-starbucks-dark-green mb-2">🍋 Lemon, Tea & Pearls</h4>
                <p className="text-gray-600 text-sm">Refreshing citrus blend</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <h4 className="font-semibold text-starbucks-dark-green mb-2">🤍 Just Add White Mocha</h4>
                <p className="text-gray-600 text-sm">Rich white chocolate enhancement</p>
              </div>
            </div>
          </div>
        </section>

        {/* Secret Lattes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-starbucks-dark-green mb-8 text-center">
            ☕ Secret Menu Lattes
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-starbucks-green">
              <h3 className="text-xl font-semibold text-starbucks-green mb-4">🍓 Strawberry Cake Latte</h3>
              <div className="space-y-3">
                <p className="text-gray-700"><strong>Base:</strong> Iced Latte</p>
                <p className="text-gray-700"><strong>Modifications:</strong></p>
                <ul className="text-gray-700 space-y-1 ml-4">
                  <li>• Add strawberry purée</li>
                  <li>• Add brown sugar syrup</li>
                  <li>• Add classic syrup</li>
                  <li>• Top with strawberry purée sweet cream cold foam</li>
                  <li>• Finish with salted butter topping</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-starbucks-green">
              <h3 className="text-xl font-semibold text-starbucks-green mb-4">🍞 Cinnamon Toast Crunch Latte</h3>
              <div className="space-y-3">
                <p className="text-gray-700"><strong>Base:</strong> Iced White Chocolate Mocha</p>
                <p className="text-gray-700"><strong>Modifications:</strong></p>
                <ul className="text-gray-700 space-y-1 ml-4">
                  <li>• Add white chocolate mocha sauce</li>
                  <li>• Add cinnamon dolce syrup</li>
                  <li>• Top with whipped cream</li>
                  <li>• Sprinkle cinnamon powder</li>
                  <li>• Add raw sugar crystals</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-starbucks-green">
              <h3 className="text-xl font-semibold text-starbucks-green mb-4">🌾 Oat Milk Honey Latte</h3>
              <div className="space-y-3">
                <p className="text-gray-700"><strong>Base:</strong> Almond Milk Honey Flat White</p>
                <p className="text-gray-700"><strong>Modifications:</strong></p>
                <ul className="text-gray-700 space-y-1 ml-4">
                  <li>• Substitute oat milk for almond milk</li>
                  <li>• Add vanilla syrup</li>
                  <li>• Keep honey blend</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-starbucks-green">
              <h3 className="text-xl font-semibold text-starbucks-green mb-4">🎃 Roasted Pumpkin Marshmallow Latte</h3>
              <div className="space-y-3">
                <p className="text-gray-700"><strong>Base:</strong> Pumpkin Spice Latte</p>
                <p className="text-gray-700"><strong>Modifications:</strong></p>
                <ul className="text-gray-700 space-y-1 ml-4">
                  <li>• Made with half-and-half</li>
                  <li>• Add toasted white mocha syrup</li>
                  <li>• Top with cinnamon dolce topping</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-starbucks-green">
              <h3 className="text-xl font-semibold text-starbucks-green mb-4">🍪 Snickerdoodle Latte</h3>
              <div className="space-y-3">
                <p className="text-gray-700"><strong>Base:</strong> Blonde Vanilla Latte</p>
                <p className="text-gray-700"><strong>Modifications:</strong></p>
                <ul className="text-gray-700 space-y-1 ml-4">
                  <li>• Add white mocha syrup</li>
                  <li>• Add cinnamon dolce syrup</li>
                  <li>• Steam milk with cinnamon powder</li>
                  <li>• Top with whipped cream</li>
                  <li>• Sprinkle cinnamon dolce topping</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-starbucks-green">
              <h3 className="text-xl font-semibold text-starbucks-green mb-4">🍰 Raspberry Cheesecake Latte</h3>
              <div className="space-y-3">
                <p className="text-gray-700"><strong>Base:</strong> Regular Latte</p>
                <p className="text-gray-700"><strong>Modifications:</strong></p>
                <ul className="text-gray-700 space-y-1 ml-4">
                  <li>• Add caramel syrup</li>
                  <li>• Add cinnamon dolce syrup</li>
                  <li>• Add raspberry syrup</li>
                  <li>• Top with whipped cream</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Secret Macchiatos */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-starbucks-dark-green mb-8 text-center">
            🍯 Secret Menu Macchiatos
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-starbucks-green">
              <h3 className="text-2xl font-semibold text-starbucks-green mb-6">🫐 Blackberry Caramel Macchiato</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Base & Modifications:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <strong>Base:</strong> Iced Caramel Macchiato</li>
                    <li>• Add blackberries</li>
                    <li>• Top with vanilla sweet cream cold foam</li>
                    <li>• Drizzle with caramel sauce</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-starbucks-dark-green mb-2">💡 Pro Tip</h4>
                  <p className="text-gray-700 text-sm">
                    Ask for extra blackberries to enhance the fruity flavor profile 
                    and create a beautiful color contrast.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Order */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-starbucks-dark-green mb-8 text-center">
            📋 How to Order Secret Menu Items
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-starbucks-green mb-4">✅ Do This</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Use the official app secret menu when available</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Order by the base drink and list modifications</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Be patient and kind with baristas</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Have the recipe ready on your phone</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span>Be flexible if ingredients aren't available</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-starbucks-green mb-4">❌ Avoid This</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 text-xl">✗</span>
                    <span>Don't just ask for a "secret menu drink name"</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 text-xl">✗</span>
                    <span>Don't expect all baristas to know every secret recipe</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 text-xl">✗</span>
                    <span>Don't get frustrated if modifications take time</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 text-xl">✗</span>
                    <span>Don't order complex drinks during peak hours</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-500 text-xl">✗</span>
                    <span>Don't forget to tip for extra effort!</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Community & Contest */}
        <section>
          <div className="bg-gradient-to-r from-starbucks-green to-starbucks-dark-green text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Join the Creation Challenge!
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🏆</div>
                <h3 className="text-xl font-semibold mb-2">Creative Contest</h3>
                <p className="text-purple-100">
                  Submit your own drink creations for a chance to see them featured 
                  in the official secret menu!
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-3">👥</div>
                <h3 className="text-xl font-semibold mb-2">Community Sharing</h3>
                <p className="text-purple-100">
                  Share your secret menu experiences and discover new combinations 
                  created by fellow Starbucks enthusiasts.
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-3">⭐</div>
                <h3 className="text-xl font-semibold mb-2">Barista Collaboration</h3>
                <p className="text-purple-100">
                  Work with baristas to create unique drinks and contribute to 
                  the ever-growing secret menu culture.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <Footer />
    </>
  );
} 