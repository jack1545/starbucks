import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function HolidaySpecialsPage() {
  const holidayDrinks = [
    { 
      name: "Peppermint Mocha", 
      description: "A classic blend of rich chocolate and refreshing peppermint, topped with whipped cream and candy cane pieces.",
      available: ["Hot", "Iced", "Frappuccino"],
      icon: "🍃"
    },
    { 
      name: "Caramel Brulée Latte", 
      description: "Inspired by French dessert, a luxurious mix of rich caramel and coffee.",
      available: ["Hot", "Iced", "Frappuccino"],
      icon: "🍮"
    },
    { 
      name: "Chestnut Praline Latte", 
      description: "Warm chestnut aroma with nutty flavors, bringing a cozy autumn-winter feel.",
      available: ["Hot", "Iced", "Frappuccino"],
      icon: "🌰"
    },
    { 
      name: "Sugar Cookie Oat Latte", 
      description: "An innovative blend of sweet cookies and oat milk, with a rich, layered taste.",
      available: ["Hot", "Iced"],
      icon: "🍪"
    },
    { 
      name: "Iced Gingerbread Oat Milk Chai", 
      description: "A warm embrace of holiday spices, the perfect meeting of gingerbread and chai.",
      available: ["Iced"],
      icon: "🏠"
    }
  ];

  const seasonalFoams = [
    { name: "Gingerbread Cream Cold Foam", type: "New", color: "bg-amber-100 text-amber-800" },
    { name: "Salted Walnut Cream Cold Foam", type: "New", color: "bg-orange-100 text-orange-800" },
    { name: "Peppermint Chocolate Cold Foam", type: "Returning", color: "bg-green-100 text-green-800" },
    { name: "Sugar Cookie Cold Foam", type: "Returning", color: "bg-blue-100 text-blue-800" },
    { name: "Chestnut Praline Cold Foam", type: "Returning", color: "bg-yellow-600 text-white" },
    { name: "Caramel Brulée Cream Cold Foam", type: "Returning", color: "bg-green-100 text-green-800" }
  ];

  const holidayCoffees = [
    { name: "Thanksgiving Blend", season: "Thanksgiving", description: "A limited-edition blend with warm spices for the season." },
    { name: "Christmas Blend", season: "Christmas", description: "The classic holiday blend, available in decaf and blonde roast." },
    { name: "Holiday Blend", season: "Holiday Season", description: "A special blend to enjoy throughout the holiday season." }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-starbucks-green to-starbucks-dark-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Holiday Specials
              <span className="block text-green-200 text-3xl md:text-4xl mt-2">
                Festive Drinks & Warm Traditions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              When the holiday season arrives, Starbucks becomes a creator of festive magic, adding warmth and sweetness to this special time with specially crafted drinks and deep-rooted traditions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Holiday Drink */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-starbucks-green to-starbucks-dark-green rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-12 lg:p-16 text-white">
                <h2 className="text-4xl font-bold mb-6">Cranberry Orange Refresher</h2>
                <h3 className="text-2xl font-semibold mb-4 text-green-100">New for 2024/2025</h3>
                <p className="text-lg text-green-100 mb-6">
                  This new seasonal Refresher blends sweet orange, tart cranberry, and warm spices (cardamom, cinnamon, nutmeg) for a unique holiday experience. Available with water, lemonade, or coconut milk.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🍊</span>
                    <span className="text-green-100">Perfect balance of sweet orange and tart cranberry</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🌿</span>
                    <span className="text-green-100">Warm spices: cardamom, cinnamon, nutmeg</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🥤</span>
                    <span className="text-green-100">Available with water, lemonade, or coconut milk</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">❄️</span>
                    <span className="text-green-100">A refreshing new holiday experience</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-400 to-starbucks-dark-green p-12 lg:p-16 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-6">🎄</div>
                  <h4 className="text-2xl font-bold text-white mb-4">Holiday Exclusive</h4>
                  <p className="text-green-100 text-lg">
                    Specially crafted for the 2024/2025 holiday season.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classic Holiday Drinks */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">🎅 Classic Holiday Drinks Return</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beloved holiday traditions are back, each cup filled with warm memories and sweet anticipation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {holidayDrinks.map((drink, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-starbucks-green to-green-400 h-32 flex items-center justify-center">
                  <span className="text-6xl">{drink.icon}</span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{drink.name}</h3>
                  <p className="text-gray-600 mb-6">{drink.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Available as:</h4>
                    <div className="flex flex-wrap gap-2">
                      {drink.available.map((version, vIndex) => (
                        <span key={vIndex} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                          {version}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Cold Foams */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">☁️ Seasonal Cream Cold Foams</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Add a special holiday touch to your drink with these carefully crafted cold foams for a layered taste experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {seasonalFoams.map((foam, index) => (
              <div key={index} className="bg-green-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{foam.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${foam.color}`}>
                    {foam.type}
                  </span>
                </div>
                <div className="text-3xl text-center py-4">
                  {foam.type === "New" ? "✨" : "🔄"}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-green-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">💡 Cold Foam Pro-Tips</h3>
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-2xl mb-2">🥤</div>
                <h4 className="font-semibold text-gray-800 mb-2">Perfect Pairing</h4>
                <p className="text-gray-600 text-sm">Pairs perfectly with any hot or cold drink to add a festive flavor.</p>
              </div>
              <div>
                <div className="text-2xl mb-2">🎨</div>
                <h4 className="font-semibold text-gray-800 mb-2">Visual Layers</h4>
                <p className="text-gray-600 text-sm">The beautiful layers are not just for looks; they provide a progressive flavor experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Holiday Coffee History */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">📜 History of Starbucks Holiday Traditions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over 40 years, Starbucks' holiday traditions have been an important part of countless family celebrations.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Christmas Blend History */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">☕</div>
                <h3 className="text-2xl font-bold text-gray-900">History of Christmas Blend</h3>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-starbucks-green pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">1984</h4>
                  <p className="text-gray-600">
                    First launched the day after Thanksgiving, initially sold as whole bean coffee. A blend of lively Latin American beans, smooth Indonesian beans, and rare aged Sumatran beans.
                  </p>
                </div>
                
                <div className="border-l-4 border-starbucks-green pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">1987</h4>
                  <p className="text-gray-600">
                    After transitioning to a café model, Starbucks offered brewed Christmas Blend in stores for the first time.
                  </p>
                </div>
                
                <div className="border-l-4 border-starbucks-green pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">1988</h4>
                  <p className="text-gray-600">
                    Began offering mail-order service, extending the holiday tradition to a wider customer base.
                  </p>
                </div>
                
                <div className="border-l-4 border-starbucks-green pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">1998</h4>
                  <p className="text-gray-600">
                    Entered grocery store shelves, allowing consumers to enjoy the tradition at home.
                  </p>
                </div>
                
                <div className="border-l-4 border-starbucks-green pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Today</h4>
                  <p className="text-gray-600">
                    Has evolved into a seasonal coffee series, including whole bean, ground, decaf, Holiday Blend, and Starbucks Reserve® Christmas Blend.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Holiday Cup History */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">🎄</div>
                <h3 className="text-2xl font-bold text-gray-900">The Legendary Holiday Cup</h3>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-starbucks-green pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">1997</h4>
                  <p className="text-gray-600">
                    The first Starbucks holiday cup debuted, not in its iconic red, but in four jewel tones including a deep magenta.
                  </p>
                </div>
                
                <div className="border-l-4 border-starbucks-green pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">1999</h4>
                  <p className="text-gray-600">
                    The holiday cup adopted its iconic candy-apple red for the first time, a vibrant hue that has been part of every design since.
                  </p>
                </div>
                
                <div className="border-l-4 border-starbucks-green pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">2015</h4>
                  <p className="text-gray-600">
                    A modern two-tone design sparked controversy, showcasing the holiday cup's significant place in the public's heart.
                  </p>
                </div>
                
                <div className="border-l-4 border-starbucks-green pl-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Today</h4>
                  <p className="text-gray-600">
                    The holiday cup has become an enduring symbol of the season, drawing widespread attention and becoming an essential part of the holiday experience.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 bg-green-100 rounded-xl p-6">
                <h4 className="font-bold text-gray-800 mb-2">🏆 Cultural Impact</h4>
                <p className="text-gray-600 text-sm">
                  The release of the Starbucks holiday cup has become an annual event, marking the official start of the holiday season, with each year's new design sparking lively discussions on social media.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Holiday Coffee Collection */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">🫘 Seasonal Coffee Bean Collection</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each seasonal coffee bean carries a unique holiday flavor, adding a warm atmosphere to your home.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {holidayCoffees.map((coffee, index) => (
              <div key={index} className="bg-green-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">☕</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{coffee.name}</h3>
                  <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm font-medium">
                    {coffee.season}
                  </span>
                </div>
                
                <p className="text-gray-600 text-center">{coffee.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-starbucks-green to-starbucks-dark-green rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">🎁 The Meaning of Holiday Coffee</h3>
            <p className="text-green-100 text-lg">
              Starbucks holiday coffee is more than just a drink; it's a medium for connecting people and spreading warmth. Each cup carries holiday blessings and hopes for wonderful times.
            </p>
          </div>
        </div>
      </section>

      {/* Cultural Impact */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">🌍 Cultural Significance of Holiday Traditions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Starbucks' holiday tradition has transcended mere product promotion to become an important part of modern holiday culture.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🎄 A Seasonal Ritual</h3>
                <p className="text-gray-600">
                  The launch of the Starbucks holiday menu marks the official start of the holiday season and has become an annual anticipation for many, strengthening the emotional bond between the brand and consumers.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">👨‍👩‍👧‍👦 A Family Tradition</h3>
                <p className="text-gray-600">
                  Many families include trying Starbucks holiday drinks as part of their holiday traditions, making these drinks a shared warm memory across generations.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">📱 A Social Media Phenomenon</h3>
                <p className="text-gray-600">
                  The buzz created by holiday cups and specialty drinks on social media extends the festive experience from individuals to entire social networks.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-200 to-starbucks-green rounded-3xl p-12 text-center">
              <div className="text-6xl mb-6">🏆</div>
              <h3 className="text-2xl font-bold text-white mb-4">A Cultural Milestone</h3>
              <p className="text-green-50 text-lg mb-6">
                From the 1984 Christmas Blend to today's full holiday product line, Starbucks has spent 40 years transforming coffee consumption into a significant carrier of holiday culture.
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white rounded-xl p-4">
                  <div className="text-2xl font-bold text-starbucks-green">40+</div>
                  <div className="text-sm text-gray-600">Years of Holiday Tradition</div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="text-2xl font-bold text-starbucks-green">Global</div>
                  <div className="text-sm text-gray-600">Cultural Impact</div>
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
            Join Our Holiday Tradition!
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Don't miss out on this special holiday experience. Try the classic returning holiday drinks, collect the limited-edition holiday cups, and let Starbucks be your warm companion this holiday season.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-starbucks-green px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              View Holiday Menu
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-starbucks-green transition-colors duration-300">
              Find a Store
            </button>
          </div>
          
          <div className="mt-8 text-green-100">
            <p className="italic">
              "Starbucks' holiday tradition has transformed seasonal products into cultural milestones, strengthening brand loyalty across generations."
            </p>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
} 