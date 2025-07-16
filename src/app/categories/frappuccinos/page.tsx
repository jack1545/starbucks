import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FrappuccinosPage() {
  const creamBasedFrappuccinos = [
    {
      name: "Vanilla Bean Crème Frappuccino",
      description: "A smooth and creamy blend of vanilla bean, milk, and ice, topped with whipped cream.",
      category: "Crème-Based",
      popularity: "High",
      customizations: ["Extra vanilla", "Different milk options", "Extra whipped cream"]
    },
    {
      name: "Strawberry Crème Frappuccino", 
      description: "Sweet strawberry puree blended with milk and ice for a fruity treat.",
      category: "Crème-Based",
      popularity: "High",
      customizations: ["Extra strawberry", "Light ice", "Coconut milk"]
    },
    {
      name: "Matcha Green Tea Crème Frappuccino",
      description: "Japanese matcha powder blended with milk and ice for an earthy, sweet flavor.",
      category: "Crème-Based", 
      popularity: "Medium",
      customizations: ["Extra matcha", "Oat milk", "Less sweetener"]
    },
    {
      name: "Lavender Crème Frappuccino",
      description: "Floral lavender syrup blended with milk and ice for a unique, aromatic experience.",
      category: "Crème-Based",
      popularity: "Seasonal",
      customizations: ["Light lavender", "Almond milk", "Extra foam"]
    }
  ];

  const coffeeBasedFrappuccinos = [
    {
      name: "Coffee Frappuccino",
      description: "The classic coffee Frappuccino with rich coffee flavor, milk, and ice.",
      category: "Coffee-Based",
      popularity: "High",
      customizations: ["Extra shot", "Decaf option", "Sugar-free syrup"]
    },
    {
      name: "Espresso Frappuccino",
      description: "Bold espresso blended with milk and ice for a stronger coffee experience.",
      category: "Coffee-Based",
      popularity: "High", 
      customizations: ["Extra espresso shot", "Half-caff", "Oat milk"]
    },
    {
      name: "Mocha Frappuccino",
      description: "Rich chocolate and coffee blend with milk and ice, topped with whipped cream.",
      category: "Coffee-Based",
      popularity: "Very High",
      customizations: ["Extra mocha", "White mocha", "No whip"]
    },
    {
      name: "Caramel Frappuccino",
      description: "Sweet caramel syrup blended with coffee, milk, and ice, drizzled with caramel sauce.",
      category: "Coffee-Based",
      popularity: "Very High",
      customizations: ["Extra caramel", "Salted caramel", "Extra whip"]
    },
    {
      name: "Hazelnut Frappuccino",
      description: "Nutty hazelnut syrup combined with coffee, milk, and ice for a rich flavor.",
      category: "Coffee-Based",
      popularity: "Medium",
      customizations: ["Extra hazelnut", "Sugar-free hazelnut", "Almond milk"]
    },
    {
      name: "Java Chip Frappuccino",
      description: "Coffee blended with chocolate chips, milk, and ice, topped with whipped cream and mocha drizzle.",
      category: "Coffee-Based",
      popularity: "Very High",
      customizations: ["Extra chips", "No chips", "Extra mocha drizzle"]
    },
    {
      name: "Caramel Ribbon Crunch Frappuccino",
      description: "Caramel coffee blend with crunchy caramel sugar topping and caramel drizzle.",
      category: "Coffee-Based",
      popularity: "High",
      customizations: ["Extra crunch", "Light caramel", "Extra ribbon"]
    },
    {
      name: "Mocha Cookie Crumble Frappuccino",
      description: "Mocha coffee blend with chocolate cookie crumbles and whipped cream.",
      category: "Coffee-Based",
      popularity: "High",
      customizations: ["Extra cookies", "No cookies", "Extra whip"]
    }
  ];

  const secretFrappuccinos = [
    {
      name: "Butterbeer Frappuccino",
      description: "Caramel Ribbon Crunch base with toffee nut syrup and caramel drizzle - inspired by Harry Potter.",
      category: "Secret Menu",
      howToOrder: "Order a Caramel Ribbon Crunch Frappuccino, add toffee nut syrup, extra caramel drizzle",
      theme: "Pop Culture"
    },
    {
      name: "Twix Frappuccino",
      description: "Caramel Frappuccino base with hazelnut syrup, java chips, and extra caramel and mocha drizzle.",
      category: "Secret Menu", 
      howToOrder: "Order a Caramel Frappuccino, add hazelnut syrup, java chips, extra caramel and mocha sauce",
      theme: "Candy"
    },
    {
      name: "Mint Chocolate Chip Frappuccino",
      description: "Java Chip Crème Frappuccino with peppermint syrup and extra mocha sauce.",
      category: "Secret Menu",
      howToOrder: "Order a Java Chip Crème Frappuccino, add peppermint syrup, extra mocha sauce",
      theme: "Dessert"
    },
    {
      name: "Nutella Frappuccino",
      description: "Mocha Frappuccino with hazelnut syrup and extra mocha drizzle.",
      category: "Secret Menu",
      howToOrder: "Order a Mocha Frappuccino, add hazelnut syrup, extra mocha drizzle",
      theme: "Dessert"
    },
    {
      name: "Barbie Frappuccino",
      description: "Vanilla Bean Crème Frappuccino with strawberry puree, dragon fruit pieces, and whipped cream.",
      category: "Secret Menu",
      howToOrder: "Order a Vanilla Bean Crème Frappuccino, add strawberry or raspberry puree, dragon fruit pieces",
      theme: "Pop Culture"
    },
    {
      name: "Pumpkin Pie Frappuccino",
      description: "Pumpkin Spice Crème Frappuccino with cinnamon dolce syrup and cinnamon powder.",
      category: "Secret Menu",
      howToOrder: "Order a Pumpkin Spice Crème Frappuccino, add cinnamon dolce syrup, cinnamon powder",
      theme: "Holiday"
    }
  ];

  const stratoFrappuccinos = [
    {
      name: "Brown Sugar Strato Frappuccino",
      description: "Layered Frappuccino with brown sugar flavors and unique texture experience.",
      category: "Strato Series",
      specialty: "Layered texture and visual appeal"
    },
    {
      name: "Strawberry Matcha Strato Frappuccino", 
      description: "Beautiful layers of strawberry and matcha flavors with contrasting colors.",
      category: "Strato Series",
      specialty: "Instagram-worthy presentation"
    },
    {
      name: "Salted Caramel Mocha Strato Frappuccino",
      description: "Complex layers of salted caramel and mocha with rich flavor profiles.",
      category: "Strato Series", 
      specialty: "Premium flavor combination"
    }
  ];

  const customizationTips = [
    {
      title: "Milk Alternatives",
      description: "Customize your Frappuccino with oat milk, almond milk, coconut milk, or soy milk for different flavors and dietary needs.",
      icon: "🥛"
    },
    {
      title: "Sweetness Control",
      description: "Ask for half the syrup pumps, sugar-free options, or extra sweetener to match your taste preferences.",
      icon: "🍯"
    },
    {
      title: "Texture Modifications",
      description: "Request light ice for thicker consistency, extra ice for thinner texture, or blended twice for ultra-smooth finish.",
      icon: "🧊"
    },
    {
      title: "Topping Upgrades",
      description: "Add extra whipped cream, different drizzles, cookie crumbles, or ask for toppings on the side.",
      icon: "🍰"
    }
  ];

  const nutritionTips = [
    {
      tip: "Lighter Options",
      description: "Choose crème-based Frappuccinos without coffee for lower caffeine, or ask for nonfat milk and no whip to reduce calories."
    },
    {
      tip: "Caffeine Content",
      description: "Coffee-based Frappuccinos contain caffeine from coffee or espresso. Crème-based versions are caffeine-free (except matcha)."
    },
    {
      tip: "Size Matters",
      description: "Grande (16 oz) is the most popular size, but Tall (12 oz) offers better value for trying new flavors."
    },
    {
      tip: "Seasonal Awareness",
      description: "Some flavors are seasonal - ask your barista about current availability and upcoming limited-time offerings."
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative text-white overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/starbucks-caramel-frappuccino-copycat-recipe-DDMFS.jpg"
              alt="Starbucks Frappuccinos"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-starbucks-gold text-white rounded-full mb-6">
                <span className="text-3xl">🥤</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Frappuccinos
              </h1>
              <h2 className="text-3xl md:text-4xl text-green-200 mt-2 font-semibold">
                Blended Beverage Innovation
              </h2>
              <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mt-4">
                Discover Starbucks' most iconic blended beverages, from classic coffee Frappuccinos to creative crème-based treats and secret menu favorites that have captured hearts worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="py-16 bg-white relative">
          <div className="absolute inset-0 opacity-5">
            <Image
              src="/frappuccino2.jpg"
              alt="Frappuccino Background"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Frappuccino Facts & Trends</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding the popularity and innovation behind Starbucks' signature blended beverages.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/95 backdrop-blur-sm p-12 rounded-3xl text-center shadow-lg border border-green-100">
                <div className="text-5xl font-bold text-starbucks-green mb-4">25+</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Official Flavors</h3>
                <p className="text-gray-600 text-lg">
                  From classic coffee to innovative crème-based options, plus seasonal and limited-time offerings.
                </p>
              </div>

              <div className="bg-white/95 backdrop-blur-sm p-12 rounded-3xl text-center shadow-lg border border-green-100">
                <div className="text-5xl font-bold text-starbucks-green mb-4">50+</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Secret Menu Variations</h3>
                <p className="text-gray-600 text-lg">
                  Creative customer and barista combinations inspired by candy, desserts, and pop culture.
                </p>
              </div>

              <div className="bg-white/95 backdrop-blur-sm p-12 rounded-3xl text-center shadow-lg border border-green-100">
                <div className="text-5xl font-bold text-starbucks-green mb-4">30%</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Of Cold Drink Sales</h3>
                <p className="text-gray-600 text-lg">
                  Frappuccinos represent a significant portion of Starbucks' cold beverage category.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Crème-Based Frappuccinos */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">🍦 Crème-Based Frappuccinos</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Coffee-free blended beverages perfect for non-coffee drinkers and those seeking sweet, dessert-like experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {creamBasedFrappuccinos.map((drink, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-starbucks-green mb-2">{drink.name}</h3>
                      <p className="text-gray-600 mb-4">{drink.description}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ml-4 ${
                      drink.popularity === 'High' ? 'bg-green-100 text-green-800' :
                      drink.popularity === 'Very High' ? 'bg-red-100 text-red-800' :
                      drink.popularity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {drink.popularity}
                    </span>
                  </div>

                  <div className="bg-green-50 rounded-xl p-4">
                    <h4 className="font-semibold text-starbucks-green mb-2">Popular Customizations:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {drink.customizations.map((custom, idx) => (
                        <li key={idx}>• {custom}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coffee-Based Frappuccinos */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">☕ Coffee & Espresso Frappuccinos</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The perfect fusion of coffee with indulgent flavors and textures, appealing to coffee lovers seeking sweet, iced, and customizable drinks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coffeeBasedFrappuccinos.map((drink, index) => (
                <div key={index} className="bg-green-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{drink.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      drink.popularity === 'Very High' ? 'bg-red-100 text-red-800' :
                      drink.popularity === 'High' ? 'bg-green-100 text-green-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {drink.popularity}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 text-center">{drink.description}</p>

                  <div className="bg-white rounded-xl p-3">
                    <h4 className="font-semibold text-starbucks-green mb-2 text-sm">Customizations:</h4>
                    <ul className="text-xs text-gray-700 space-y-1">
                      {drink.customizations.map((custom, idx) => (
                        <li key={idx}>• {custom}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Strato Series */}
        <section className="py-16 bg-gray-100 relative">
          <div className="absolute inset-0 opacity-5">
            <Image
              src="/starbucks_vanilla_bean_frappuccino.jpg"
              alt="Strato Frappuccinos Background"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">🌈 Strato Series Innovation</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The latest innovation in layered Frappuccinos, featuring unique textures and Instagram-worthy presentations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {stratoFrappuccinos.map((drink, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-starbucks-green to-green-400 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">✨</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{drink.name}</h3>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                      {drink.category}
                    </span>
                  </div>

                  <p className="text-gray-600 text-center mb-4">{drink.description}</p>

                  <div className="bg-purple-50 rounded-xl p-4 text-center">
                    <h4 className="font-semibold text-purple-800 mb-2">Special Feature:</h4>
                    <p className="text-purple-700 text-sm">{drink.specialty}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Secret Menu Frappuccinos */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">🤫 Secret Menu Frappuccinos</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Creative combinations inspired by candy, desserts, and pop culture - the ultimate expression of Frappuccino customization.
              </p>
            </div>

            <div className="space-y-6">
              {secretFrappuccinos.map((drink, index) => (
                <div key={index} className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg">
                  <div className="grid lg:grid-cols-3 gap-6 items-center">
                    <div>
                      <div className="flex items-center mb-3">
                        <h3 className="text-xl font-bold text-starbucks-green mr-3">{drink.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          drink.theme === 'Pop Culture' ? 'bg-pink-100 text-pink-800' :
                          drink.theme === 'Candy' ? 'bg-orange-100 text-orange-800' :
                          drink.theme === 'Dessert' ? 'bg-brown-100 text-brown-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {drink.theme}
                        </span>
                      </div>
                      <p className="text-gray-600">{drink.description}</p>
                    </div>

                    <div className="lg:col-span-2 bg-white rounded-xl p-6">
                      <h4 className="font-semibold text-starbucks-green mb-3">How to Order:</h4>
                      <p className="text-gray-700 italic">"{drink.howToOrder}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-starbucks-green to-starbucks-dark-green rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">🎭 Secret Menu Confidence</h3>
              <p className="text-green-100 text-lg">
                Remember, secret menu items aren't officially on the menu, but most baristas know the popular ones. Be patient, explain the recipe if needed, and don't be afraid to try something new!
              </p>
            </div>
          </div>
        </section>

        {/* Customization Guide */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">🎨 Customization Mastery</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Learn how to personalize your Frappuccino experience with these expert customization tips.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {customizationTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{tip.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{tip.title}</h3>
                  </div>
                  <p className="text-gray-600 text-center leading-relaxed">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nutrition & Tips */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">💡 Smart Frappuccino Tips</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Make informed choices with these helpful tips about nutrition, caffeine content, and ordering strategies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {nutritionTips.map((tip, index) => (
                <div key={index} className="bg-green-50 rounded-2xl p-8 border-l-4 border-starbucks-green">
                  <h3 className="text-xl font-bold text-starbucks-green mb-4">{tip.tip}</h3>
                  <p className="text-gray-700 leading-relaxed">{tip.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-green-700 mb-6 text-center">
                🌟 Pro Frappuccino Ordering Tips
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl mb-2">⏰</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Best Times to Order</h4>
                  <p className="text-gray-600 text-sm">Avoid rush hours (7-9 AM, 2-4 PM) for complex customizations and secret menu items.</p>
                </div>
                <div>
                  <div className="text-2xl mb-2">💬</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Communication</h4>
                  <p className="text-gray-600 text-sm">Be specific about customizations and patient with baristas learning new recipes.</p>
                </div>
                <div>
                  <div className="text-2xl mb-2">📱</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Mobile Ordering</h4>
                  <p className="text-gray-600 text-sm">Use the app for complex orders to ensure accuracy and save time in-store.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-starbucks-green to-starbucks-dark-green">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Blend Your Perfect Frappuccino?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              From classic favorites to secret menu creations, your perfect blended beverage awaits. Start with a base you love and customize from there!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/starbucks-app-guide">
                <button className="bg-white text-starbucks-green px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Order via App
                </button>
              </Link>
              <Link href="/categories">
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-starbucks-green transition-colors duration-300">
                  Explore More Categories
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}