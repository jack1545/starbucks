import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Top10ListsPage() {
  const topDrinks = [
    { rank: 1, name: "Iced Salted Caramel Macchiato", category: "Macchiato", temp: "Iced", description: "A classic choice with a perfect balance of salty and sweet." },
    { rank: 2, name: "Iced Caramel Macchiato", category: "Macchiato", temp: "Iced", description: "Starbucks' signature drink, a blend of sweet caramel and rich coffee." },
    { rank: 3, name: "Iced Vanilla Latte", category: "Latte", temp: "Iced", description: "The smooth taste of vanilla combined with the richness of coffee." },
    { rank: 4, name: "Iced Vanilla Sweet Cream Cold Brew", category: "Cold Brew", temp: "Iced", description: "Smooth cold brew paired perfectly with vanilla sweet cream." },
    { rank: 5, name: "Iced Salted Caramel Latte", category: "Latte", temp: "Iced", description: "A unique salted caramel flavor for a rich, layered experience." },
    { rank: 6, name: "White Hot Chocolate", category: "Hot Chocolate", temp: "Hot", description: "The only hot drink in the top ten, a silky, sweet, warm embrace." },
    { rank: 7, name: "Iced Brown Sugar Oatmilk Shaken Espresso", category: "Shaken Espresso", temp: "Iced", description: "The caramel notes of brown sugar with the smoothness of oat milk." },
    { rank: 8, name: "Caramel Frappuccino", category: "Frappuccino", temp: "Iced", description: "A classic Frappuccino, the perfect sweet and icy treat." },
    { rank: 9, name: "Ultra Caramel Frappuccino", category: "Frappuccino", temp: "Iced", description: "The ultimate choice for caramel lovers, with extra rich sweetness." },
    { rank: 10, name: "Java Chip Frappuccino", category: "Frappuccino", temp: "Iced", description: "A timeless blend of coffee and chocolate chips." }
  ];

  const baristaFaves = [
    { name: "Iced Brown Sugar Oatmilk Shaken Espresso", reason: "Perfect sweetness balance and unique texture.", category: "Shaken Espresso" },
    { name: "Iced Chai Tea Latte", reason: "A perfect fusion of Eastern tea culture and coffee.", category: "Latte" },
    { name: "Iced White Mocha", reason: "The smoothness of white chocolate with rich coffee flavor.", category: "Mocha" },
    { name: "Iced Matcha Latte", reason: "The fresh aroma of Japanese matcha in harmony with milk.", category: "Matcha" },
    { name: "Iced Blonde Espresso", reason: "Diverse variations of pure coffee flavor.", category: "Espresso" },
    { name: "Refreshers", reason: "A perfect balance of natural fruit flavor and refreshment.", category: "Fruit Drinks" }
  ];

  const homeProducts = [
    { name: "Pike Place® Roast", type: "Medium Roast", description: "Starbucks' classic signature blend." },
    { name: "Caramel Flavored Coffee", type: "Flavored", description: "Enjoy sweet caramel aroma at home." },
    { name: "Blonde Espresso Roast", type: "Espresso", description: "Barista-level espresso at home." },
    { name: "Breakfast Blend", type: "Light Roast", description: "The ideal choice for your first cup of the day." },
    { name: "Pumpkin Spice Flavored Coffee", type: "Seasonal", description: "Warm spices for the fall season." },
    { name: "Decaf House Blend", type: "Decaf", description: "A mild, caffeine-free option." }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section 
          className="bg-cover bg-center text-white"
          style={{ backgroundImage: "url('/starbucks_secret_menu_top10.png')" }}
        >
          <div className="bg-black bg-opacity-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Top 10 Lists
                </h1>
                <h2 className="text-3xl md:text-4xl text-green-200 mt-2 font-semibold">
                  Popular Drinks & Barista Picks
                </h2>
                <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mt-4">
                  Explore Starbucks' most popular drinks, see what real customers are choosing, and get expert recommendations from baristas. Data reveals trends, taste sets them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Key Statistics & Insights</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Based on real sales data and consumer surveys, here are the core trends in the Starbucks drink market.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-green-50 p-12 rounded-3xl text-center">
                <div className="text-5xl font-bold text-starbucks-green mb-4">75%</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Cold Drinks Dominate</h3>
                <p className="text-gray-600 text-lg">
                  Cold drinks make up the vast majority of Starbucks' total beverage sales, reflecting a strong consumer preference for refreshing options.
                </p>
              </div>
              
              <div className="bg-green-50 p-12 rounded-3xl text-center">
                <div className="text-5xl font-bold text-starbucks-green mb-4">9/10</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Iced Drinks on the List</h3>
                <p className="text-gray-600 text-lg">
                  Nine out of the top ten drinks are iced, with White Hot Chocolate being the only hot option.
                </p>
              </div>
              
              <div className="bg-green-50 p-12 rounded-3xl text-center">
                <div className="text-5xl font-bold text-starbucks-green mb-4">#1</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Caramel is King</h3>
                <p className="text-gray-600 text-lg">
                  Caramel-flavored drinks perform exceptionally well, with four caramel-based options in the top ten.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Top 10 Drinks */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">🏆 Top 10 Consumer Picks</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Based on Reddit user surveys, this list reflects the most popular Starbucks drinks, showcasing true consumer preferences.
              </p>
            </div>
            
            <div className="space-y-4">
              {topDrinks.map((drink, index) => (
                <div key={index} className={`
                  bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300
                  ${drink.rank <= 3 ? 'border-l-4 border-starbucks-green' : ''}
                `}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className={`
                        w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-xl
                        ${drink.rank === 1 ? 'bg-gradient-to-r from-starbucks-gold to-yellow-600' : 
                          drink.rank === 2 ? 'bg-gradient-to-r from-gray-400 to-gray-500' :
                          drink.rank === 3 ? 'bg-gradient-to-r from-yellow-700 to-amber-700' :
                          'bg-gradient-to-r from-starbucks-green to-green-500'}
                      `}>
                        {drink.rank}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900">{drink.name}</h3>
                        <p className="text-gray-600 mt-1">{drink.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <span className={`
                        px-3 py-1 rounded-full text-sm font-medium
                        ${drink.temp === 'Iced' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}
                      `}>
                        {drink.temp}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        {drink.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Barista Favorites */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">☕ Barista's Secret Stash</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert recommendations from frontline Starbucks baristas. These drinks are not only loved by customers but also endorsed by their makers.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {baristaFaves.map((drink, index) => (
                <div key={index} className="bg-green-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">👨‍🍳</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{drink.name}</h3>
                    <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm font-medium">
                      {drink.category}
                    </span>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Why we love it:</h4>
                    <p className="text-gray-600 italic">"{drink.reason}"</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-gradient-to-r from-starbucks-green to-starbucks-dark-green rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">💡 Barista's Tip</h3>
              <p className="text-green-100 text-lg">
                Barista-recommended drinks often have unique flavor profiles and perfect temperature control. Don't hesitate to ask your barista for their personal favorite—you might find a new go-to!
              </p>
            </div>
          </div>
        </section>

        {/* Category Analysis */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">📊 Category Analysis</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A deep dive into the category distribution of popular drinks to understand underlying consumer trends.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">🥤 Drink Type Analysis</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">Macchiato Series</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-3 mr-3">
                        <div className="bg-green-500 h-3 rounded-full" style={{width: '20%'}}></div>
                      </div>
                      <span className="text-sm text-gray-600">2 Drinks</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">Frappuccino Series</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-3 mr-3">
                        <div className="bg-green-500 h-3 rounded-full" style={{width: '30%'}}></div>
                      </div>
                      <span className="text-sm text-gray-600">3 Drinks</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">Latte Series</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-3 mr-3">
                        <div className="bg-green-500 h-3 rounded-full" style={{width: '20%'}}></div>
                      </div>
                      <span className="text-sm text-gray-600">2 Drinks</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">Other Series</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-3 mr-3">
                        <div className="bg-green-500 h-3 rounded-full" style={{width: '30%'}}></div>
                      </div>
                      <span className="text-sm text-gray-600">3 Drinks</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">🌡️ Temperature Preference</h3>
                
                <div className="text-center mb-8">
                  <div className="relative w-48 h-48 mx-auto">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-starbucks-green to-green-600"></div>
                    <div className="absolute inset-4 rounded-full bg-white flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-starbucks-green">90%</div>
                        <div className="text-gray-600">Iced Preference</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                    <span className="text-blue-800 font-medium">🧊 Iced Drinks</span>
                    <span className="text-blue-600 font-bold">9 Drinks</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl">
                    <span className="text-red-800 font-medium">🔥 Hot Drinks</span>
                    <span className="text-red-600 font-bold">1 Drink</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Home Products */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">🏠 Bestselling At-Home Coffee</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Extend the Starbucks experience to your home with these products that let you enjoy barista-quality coffee anytime.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {homeProducts.map((product, index) => (
                <div key={index} className="bg-green-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center mb-4">
                    <div className="text-3xl mb-3">☕</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm font-medium">
                      {product.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-center">{product.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-green-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">🌟 Secrets to Successful Home Brewing</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl mb-2">🌡️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Water Temperature</h4>
                  <p className="text-gray-600 text-sm">Use water between 195-205°F (90-96°C) for optimal extraction.</p>
                </div>
                <div>
                  <div className="text-2xl mb-2">⚖️</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Golden Ratio</h4>
                  <p className="text-gray-600 text-sm">A 1:15 coffee-to-water ratio is recommended. Adjust to your taste.</p>
                </div>
                <div>
                  <div className="text-2xl mb-2">⏰</div>
                  <h4 className="font-semibold text-gray-800 mb-2">Freshness is Key</h4>
                  <p className="text-gray-600 text-sm">Use coffee beans soon after opening to preserve their best flavor.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trend Analysis */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">📈 Consumer Trend Analysis</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Based on the top charts, here's an in-depth analysis of changing consumer preferences and market trends.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🧊 Cold Drinks Reign Supreme</h3>
                  <p className="text-gray-600 mb-4">
                    The dominance of cold drinks reflects a strong preference for personalized, refreshing, and visually appealing beverages. This trend drives Starbucks' focus on cold beverage innovation.
                  </p>
                  <div className="text-sm text-starbucks-green">
                    ✓ 75% of total sales are from cold drinks
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🍯 Preference for Caramel Flavors</h3>
                  <p className="text-gray-600 mb-4">
                    Caramel drinks consistently perform well, showing a lasting love for sweet, comforting flavors. The Caramel Macchiato remains a bestseller.
                  </p>
                  <div className="text-sm text-starbucks-green">
                    ✓ 4 of the top 10 drinks are caramel-based
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🎨 Demand for Customization</h3>
                  <p className="text-gray-600 mb-4">
                    The alignment between consumer favorites and barista recommendations shows that Starbucks' product development meets market demand, while customization empowers baristas as brand ambassadors.
                  </p>
                  <div className="text-sm text-starbucks-green">
                    ✓ Highly customizable drink experiences
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-200 to-starbucks-green rounded-3xl p-12 text-center">
                <div className="text-6xl mb-6">🏆</div>
                <h3 className="text-2xl font-bold text-white mb-4">Market Insights</h3>
                <p className="text-green-50 text-lg mb-6">
                  The rankings not only reflect current preferences but also signal future directions in beverage development. Starbucks continues to lead industry trends through constant innovation and experience optimization.
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white rounded-xl p-4">
                    <div className="text-2xl font-bold text-starbucks-green">90%</div>
                    <div className="text-sm text-gray-600">Iced Drink Preference</div>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <div className="text-2xl font-bold text-starbucks-green">40%</div>
                    <div className="text-sm text-gray-600">Caramel Drink Share</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-starbucks-green to-starbucks-dark-green">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Find Your Next Favorite!
            </h2>
            <p className="text-xl text-green-100 mb-8">
              With these insights, why not try one of the popular drinks from the list or ask a barista for their secret recommendation? Your new favorite is just an order away!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-starbucks-green px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                Explore Popular Drinks
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-starbucks-green transition-colors duration-300">
                Ask a Barista
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
} 