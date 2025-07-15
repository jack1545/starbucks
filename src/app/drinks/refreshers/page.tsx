import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RefreshersPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-starbucks-green to-starbucks-dark-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Starbucks Refreshers
              <span className="block text-green-200 text-3xl md:text-4xl mt-2">
                A Burst of Fruity Energy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Starbucks Refreshers offer the perfect alternative for consumers seeking a break from coffee. 
              Each sip provides a natural boost of vitality, keeping you cool and energized.
            </p>
          </div>
        </div>
      </section>

      {/* What are Refreshers Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What are Refreshers?</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Starbucks Refreshers are a line of energy drinks based on real fruit juice, blending natural fruit flavors with green coffee extract to offer a light, fruity alternative to coffee.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-2xl text-center">
              <div className="text-4xl mb-4">🍓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real Fruit Juice</h3>
              <p className="text-gray-600">
                Made with real fruit juice and natural flavors to ensure an authentic fruit taste experience in every sip.
              </p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-2xl text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Natural Energy</h3>
              <p className="text-gray-600">
                Contains green coffee extract for a natural caffeine boost without the bitterness of traditional coffee.
              </p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-2xl text-center">
              <div className="text-4xl mb-4">🧊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Refreshing Experience</h3>
              <p className="text-gray-600">
                Served iced for a light and crisp taste, making it the perfect choice for hot weather.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Official Flavors Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Official Flavor Lineup</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each flavor is carefully crafted to deliver a unique fruity experience and a refreshing taste.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-starbucks-green to-green-400 h-32"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Black Cherry Lime</h3>
                <p className="text-gray-600 mb-4">
                  A perfect fusion of rich black cherry and zesty lime, creating a unique sweet and sour balance.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-2">🍒</span>
                  <span>Black Cherry + Lime</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-starbucks-green to-green-400 h-32"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Peach Passion Fruit</h3>
                <p className="text-gray-600 mb-4">
                  A delightful combination of sweet peach and tropical passion fruit for an exotic taste experience.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-2">🍑</span>
                  <span>Peach + Passion Fruit</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-r from-starbucks-green to-green-400 h-32"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Strawberry Lemonade</h3>
                <p className="text-gray-600 mb-4">
                  A classic combination of strawberry and lemonade, perfectly sweet and tart for summer refreshment.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-2">🍓</span>
                  <span>Strawberry + Lemon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured: Strawberry Açaí Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-starbucks-green to-starbucks-dark-green rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-12 lg:p-16 text-white">
                <h2 className="text-4xl font-bold mb-6">Strawberry Açaí Refresher</h2>
                <h3 className="text-2xl font-semibold mb-4 text-green-100">Star Product Spotlight</h3>
                <p className="text-lg text-green-100 mb-6">
                  A perfect blend of real fruit juice with strawberry and açaí flavors, mixed with green coffee extract and fresh strawberry pieces. Shaken with ice and water or lemonade.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🍓</span>
                    <span className="text-green-100">Real strawberry and açaí superfruit</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">⚡</span>
                    <span className="text-green-100">Natural energy from green coffee extract</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🧊</span>
                    <span className="text-green-100">Available with water or lemonade</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">✨</span>
                    <span className="text-green-100">Rich in antioxidants</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-400 to-starbucks-dark-green p-12 lg:p-16 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-6">🥤</div>
                  <h4 className="text-2xl font-bold text-white mb-4">Fan Favorite</h4>
                  <p className="text-green-100 text-lg">
                    One of the most popular Refreshers at Starbucks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Ingredient Breakdown</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understand the role of each ingredient to better appreciate the unique charm of Refreshers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl mb-3">💧</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Carbonated Water</h3>
              <p className="text-gray-600 text-sm">Provides a refreshing fizz.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl mb-3">🥥</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Coconut Water Concentrate</h3>
              <p className="text-gray-600 text-sm">A source of natural electrolytes.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl mb-3">🍇</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">White Grape Juice</h3>
              <p className="text-gray-600 text-sm">Provides a natural sweet base.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl mb-3">🍎</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Apple Juice</h3>
              <p className="text-gray-600 text-sm">Adds a layer of fruitiness.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl mb-3">🍓</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fruit Juice Concentrate</h3>
              <p className="text-gray-600 text-sm">Lime, cherry, peach, passion fruit, etc.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl mb-3">🌿</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Natural Flavors</h3>
              <p className="text-gray-600 text-sm">Enhances the all-natural flavor.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl mb-3">☕</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Green Coffee Extract</h3>
              <p className="text-gray-600 text-sm">The source of natural caffeine.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl mb-3">🍋</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Citric Acid</h3>
              <p className="text-gray-600 text-sm">Natural preservative and flavor balancer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Green Coffee Extract Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">The Magic of Green Coffee Extract</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Starbucks innovatively uses green coffee extract to provide a natural energy boost without the bitterness of traditional coffee.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Natural Source</h3>
                <p className="text-gray-600">
                  Extracted from unroasted coffee beans, retaining more natural nutrients and antioxidants.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gentle Energy</h3>
                <p className="text-gray-600">
                  Provides a gentle and sustained energy lift without the jitters or bitter taste of coffee.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💚</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Healthy Choice</h3>
                <p className="text-gray-600">
                  A lighter, fruitier option for those seeking an alternative to coffee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose a Refresher?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A Refresher is more than just a drink; it's a lifestyle choice.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-200 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">🌞</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Perfect for Summer</h3>
                  <p className="text-gray-600">
                    Its refreshing taste and iced temperature make it the ideal drink to cool down in hot weather.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-200 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">💪</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Natural Energy Boost</h3>
                  <p className="text-gray-600">
                    Green coffee extract provides sustained energy to keep you going in the afternoon.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-200 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">🎨</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Customizable Options</h3>
                  <p className="text-gray-600">
                    Can be mixed with water, lemonade, or coconut milk to create your own unique flavor experience.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-200 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl">🍓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Real Fruit Flavor</h3>
                  <p className="text-gray-600">
                    Made with real fruit juice and natural flavors for an authentic taste.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-200 to-starbucks-green rounded-3xl p-12 text-center">
              <div className="text-6xl mb-6">🏆</div>
              <h3 className="text-2xl font-bold text-white mb-4">Consumer's Choice</h3>
              <p className="text-green-50 text-lg mb-6">
                Refreshers have become the top choice for consumers seeking a coffee alternative, winning over palates worldwide with their unique fruity taste and uplifting effect.
              </p>
              <div className="bg-white rounded-2xl p-6">
                <p className="text-gray-600 italic">
                  "Refreshers offer an ideal choice for a wider consumer base, attracting those who prefer a lighter, fruitier alternative."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Order Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How to Order a Refresher</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these tips to make your Refresher experience even better.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-2xl">
              <div className="text-3xl mb-4">1️⃣</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Your Base</h3>
              <p className="text-gray-600">
                Pick from Black Cherry Lime, Peach Passion Fruit, or Strawberry Lemonade.
              </p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-2xl">
              <div className="text-3xl mb-4">2️⃣</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Choose Your Mixer</h3>
              <p className="text-gray-600">
                Mix with water, lemonade, or coconut milk for different taste experiences.
              </p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-2xl">
              <div className="text-3xl mb-4">3️⃣</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customize Your Ice</h3>
              <p className="text-gray-600">
                Adjust the ice level to your preference for the perfect refreshment.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-starbucks-green to-starbucks-dark-green rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">💡 Pro-Tips</h3>
            <div className="grid md:grid-cols-2 gap-6 text-white">
              <div>
                <h4 className="font-semibold mb-2">🧊 Best Served Cold</h4>
                <p className="text-green-100">Recommended with plenty of ice to maintain its refreshing taste.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🥤 Pairing Suggestions</h4>
                <p className="text-green-100">Pairs well with light snacks, making it a perfect afternoon treat.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-starbucks-green to-starbucks-dark-green">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for a Refreshing Burst of Energy?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Head to your nearest Starbucks or use the mobile app to start your Refresher journey. 
            Every sip is a perfect taste of summer vitality!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-starbucks-green px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Find a Store
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-starbucks-green transition-colors duration-300">
              Download the App
            </button>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
} 