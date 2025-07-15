import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LatestTrend() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-starbucks-green mb-4">
            Latest Starbucks Trends & Innovation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the newest developments in Starbucks' menu offerings, store experiences, 
            and strategic initiatives that are shaping the future of coffee culture.
          </p>
        </div>

        {/* Latest Seasonal Menus */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-starbucks-dark-green mb-8 text-center">
            🌸 Latest Seasonal Menu Releases
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Spring 2025 Reserve */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-starbucks-green">
              <h3 className="text-2xl font-semibold text-starbucks-green mb-4">
                Spring 2025 (Starbucks Reserve)
              </h3>
              <p className="text-gray-600 mb-4">
                <strong>Launch:</strong> March 4, 2025 | <strong>Locations:</strong> Chicago, NYC, Seattle Reserve Roasteries
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">🥤 New Beverages</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <strong>Iced Purple Sweet Potato Coconutmilk Latte</strong> - First Reserve coffee with purple sweet potato</li>
                    <li>• <strong>Lavender Matcha Malted</strong> - Unique floral and earthy combination</li>
                    <li>• <strong>Cherry Blossom Float</strong> - Seasonal sakura-inspired delight</li>
                    <li>• <strong>Citrus Butterfly Pea Tea Tasting Journey</strong> - Interactive color-changing experience</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">🍸 Craft Cocktails</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Lavender Matcha Margarita</li>
                    <li>• Cherry Blossom Negroni</li>
                    <li>• Butterfly Pea Tea Spritz</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">🍰 Plant-Inspired Desserts</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Butterfly Pea Swirl Cake</li>
                    <li>• Fig Walnut Ricotta Toast</li>
                    <li>• Lavender Blueberry Donut</li>
                    <li>• Rose Pistachio Double-Baked Croissant</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Summer 2025 */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-starbucks-green">
              <h3 className="text-2xl font-semibold text-starbucks-green mb-4">
                Summer 2025 Menu
              </h3>
              <p className="text-gray-600 mb-4">
                <strong>Launch:</strong> May 20, 2025 | <strong>Highlights:</strong> Latin-inspired flavors & returning favorites
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">☀️ New Signature Drink</h4>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-gray-700">
                      <strong>Iced Horchata Oatmilk Shaken Espresso</strong><br/>
                      Latin American-inspired blend of blonde espresso with oatmilk and horchata flavoring 
                      (cinnamon, vanilla, nutty notes)
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">🫐 Returning Refreshers</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <strong>Summer Berry Starbucks Refreshers</strong> - Raspberry, blueberry, blackberry with popping pearls</li>
                    <li>• <strong>Summer Berry Lemonade Refreshers</strong> - Mixed with lemonade</li>
                    <li>• <strong>Summer Sky Drink</strong> - With creamy coconutmilk</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">🍓 New Food Items</h4>
                  <p className="text-gray-700">Strawberry Cream Cake Pop</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Holiday 2024/2025 */}
        <section className="mb-16">
          <div className="bg-green-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-starbucks-dark-green mb-6 text-center">
              🎄 Holiday 2024/2025 Favorites
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-starbucks-green mb-3">🍹 New Refreshers</h3>
                <p className="text-gray-700">
                  <strong>Cranberry Orange Refreshers</strong><br/>
                  Sweet orange, tart cranberry, and warm spices (cardamom, cinnamon, nutmeg)
                  Available with water, lemonade, or coconutmilk
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-starbucks-green mb-3">☕ Returning Classics</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Peppermint Mocha</li>
                  <li>• Caramel Brulée Latte</li>
                  <li>• Chestnut Praline Latte</li>
                  <li>• Iced Sugar Cookie Oat Latte</li>
                  <li>• Iced Gingerbread Oatmilk Chai</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-starbucks-green mb-3">🥛 Seasonal Cold Foams</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>NEW:</strong> Gingerbread Cream Cold Foam</li>
                  <li>• <strong>NEW:</strong> Salted Pecan Cream Cold Foam</li>
                  <li>• Peppermint Chocolate Cold Foam</li>
                  <li>• Sugar Cookie Cold Foam</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Store Experience Evolution */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-starbucks-dark-green mb-8 text-center">
            🏪 Store Experience Revolution: "Back to Starbucks" Initiative
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-starbucks-green mb-2">
                  CEO Brian Niccol's Transformation Plan (September 2024)
                </h3>
                <p className="text-gray-600">
                  A comprehensive initiative to encourage customers to return to and spend more time in Starbucks stores
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-starbucks-green mb-4">🛠️ Major Store Renovations</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Up to 1,000 cafés</strong> undergoing complete transformation</li>
                    <li>• <strong>Lounge-style seating</strong> with comfortable chairs</li>
                    <li>• <strong>Warmer lighting</strong> creating inviting atmosphere</li>
                    <li>• <strong>Local art integration</strong> on walls and décor</li>
                    <li>• <strong>Hardwood flooring</strong> for premium feel</li>
                    <li>• Focus on traditional <strong>coffeehouse ambiance</strong></li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-starbucks-green mb-4">👥 Human-Centered Approach</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Ceramic mugs return</strong> for in-store orders</li>
                    <li>• <strong>Self-service condiment bars</strong> restored</li>
                    <li>• Baristas encouraged to be <strong>more engaging</strong></li>
                    <li>• <strong>Handwritten messages</strong> on cups</li>
                    <li>• Enhanced <strong>personal connections</strong> with customers</li>
                    <li>• <strong>14,000+ leaders</strong> trained in Las Vegas for transformation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Operational Improvements */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-starbucks-green mb-4">⚡ Operational Efficiency</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>New order sequencing algorithms</strong> reduce wait times</li>
                  <li>• <strong>Streamlined menu</strong> with fewer customization options</li>
                  <li>• <strong>4-minute target</strong> for 75% of peak-hour orders</li>
                  <li>• Optimized workflow processes</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-starbucks-green mb-4">🔄 Strategic Automation Reversal</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Siren System rollback</strong> (April 2025)</li>
                  <li>• <strong>More baristas</strong> returning to 3,000 US stores</li>
                  <li>• Technology serves to <strong>enhance</strong> rather than replace human interaction</li>
                  <li>• Focus on <strong>customer experience</strong> over cost reduction</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Highlights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-starbucks-dark-green mb-8 text-center">
            💡 Innovation Highlights & Trends
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-green-100 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="font-semibold text-starbucks-dark-green mb-2">Global Flavors</h3>
              <p className="text-gray-700 text-sm">
                Purple sweet potato, horchata, and plant-based innovations expanding taste horizons
              </p>
            </div>

            <div className="bg-green-100 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🧊</div>
              <h3 className="font-semibold text-starbucks-dark-green mb-2">Cold Drink Dominance</h3>
              <p className="text-gray-700 text-sm">
                75% of sales are cold beverages, driving innovation in iced drinks and refreshers
              </p>
            </div>

            <div className="bg-green-100 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="font-semibold text-starbucks-dark-green mb-2">Visual Appeal</h3>
              <p className="text-gray-700 text-sm">
                Color-changing butterfly pea tea and Instagram-worthy presentations
              </p>
            </div>

            <div className="bg-green-100 rounded-lg p-6 text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-semibold text-starbucks-dark-green mb-2">Human-Centric Service</h3>
              <p className="text-gray-700 text-sm">
                Re-emphasis on the "Third Place" concept and personal connections over automation
              </p>
            </div>
          </div>
        </section>

        {/* Future Outlook */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-starbucks-green to-starbucks-dark-green text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">
              🔮 What's Next for Starbucks?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🍃</div>
                <h3 className="text-xl font-semibold mb-2">Sustainability Focus</h3>
                <p className="text-emerald-100">
                  Continued emphasis on eco-friendly practices and BYOT (Bring Your Own Tumbler) initiatives
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-xl font-semibold mb-2">Personalization</h3>
                <p className="text-emerald-100">
                  Enhanced app features and customization options driven by customer data insights
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-3">🌐</div>
                <h3 className="text-xl font-semibold mb-2">Global Expansion</h3>
                <p className="text-emerald-100">
                  Local flavor integration and cultural adaptation in international markets
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-starbucks-dark-green mb-6 text-center">
              📊 Key Strategic Insights
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-starbucks-dark-green mb-4">Customer Experience Priority</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Reversal of full automation in favor of human interaction</li>
                  <li>• Physical store ambiance as brand differentiator</li>
                  <li>• Premium "third place" experience over transactional efficiency</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-starbucks-dark-green mb-4">Innovation Direction</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Global and niche flavor exploration</li>
                  <li>• Cold beverage innovation as primary focus</li>
                  <li>• Visual and experiential drink presentations</li>
                </ul>
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