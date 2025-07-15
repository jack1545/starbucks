import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NutritionInfo() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-starbucks-green mb-4">
            Starbucks Nutrition Information
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make informed choices with comprehensive nutritional data for all your favorite 
            Starbucks beverages and food items. Your health journey starts with knowledge.
          </p>
        </div>

        {/* Quick Access Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-starbucks-dark-green mb-8 text-center">
            📊 How to Access Official Nutrition Data
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-starbucks-green">
              <h3 className="text-2xl font-semibold text-starbucks-green mb-4">
                🌐 Official Website Resources
              </h3>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Downloadable PDF Guides</h4>
                  <p className="text-gray-700">
                    Starbucks provides detailed nutrition information through comprehensive PDF guides 
                    available on their official website, covering calories, sugar, fat, and caffeine content.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Standard Recipe Calculations</h4>
                  <p className="text-gray-700">
                    All nutritional information is calculated based on standard recipes, but actual 
                    values may vary due to customizations and preparation methods.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-starbucks-green">
              <h3 className="text-2xl font-semibold text-starbucks-green mb-4">
                🧮 Interactive Nutrition Calculator
              </h3>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Customization Tracking</h4>
                  <p className="text-gray-700">
                    Use Starbucks' online nutrition calculator to estimate nutritional content 
                    based on your specific customizations and modifications.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Real-Time Adjustments</h4>
                  <p className="text-gray-700">
                    Adjust milk types, sizes, syrups, and add-ons to see how they impact 
                    the nutritional profile of your beverage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Beverages Nutrition */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-starbucks-dark-green mb-8 text-center">
            ☕ Popular Beverages Nutrition Facts
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-starbucks-dark-green text-white p-4">
                <h3 className="text-xl font-semibold">Nutrition Data (Grande/16 fl oz serving)</h3>
                <p className="text-green-100">Based on standard recipes with 2% milk</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-green-100">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-starbucks-green">Beverage</th>
                      <th className="px-6 py-4 text-center font-semibold text-starbucks-green">Calories</th>
                      <th className="px-6 py-4 text-center font-semibold text-starbucks-green">Total Fat (g)</th>
                      <th className="px-6 py-4 text-center font-semibold text-starbucks-green">Sugar (g)</th>
                      <th className="px-6 py-4 text-center font-semibold text-starbucks-green">Caffeine (mg)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-800">Caffè Latte</td>
                      <td className="px-6 py-4 text-center text-gray-700">190</td>
                      <td className="px-6 py-4 text-center text-gray-700">7</td>
                      <td className="px-6 py-4 text-center text-gray-700">18</td>
                      <td className="px-6 py-4 text-center text-gray-700">150</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-25">
                      <td className="px-6 py-4 font-medium text-gray-800">Caffè Mocha</td>
                      <td className="px-6 py-4 text-center text-gray-700">370</td>
                      <td className="px-6 py-4 text-center text-gray-700">15</td>
                      <td className="px-6 py-4 text-center text-gray-700">35</td>
                      <td className="px-6 py-4 text-center text-gray-700">175</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-800">Hot Chocolate</td>
                      <td className="px-6 py-4 text-center text-gray-700">370</td>
                      <td className="px-6 py-4 text-center text-gray-700">16</td>
                      <td className="px-6 py-4 text-center text-gray-700">37</td>
                      <td className="px-6 py-4 text-center text-gray-700">25</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-25">
                      <td className="px-6 py-4 font-medium text-gray-800">Caramel Macchiato</td>
                      <td className="px-6 py-4 text-center text-gray-700">250</td>
                      <td className="px-6 py-4 text-center text-gray-700">7</td>
                      <td className="px-6 py-4 text-center text-gray-700">33</td>
                      <td className="px-6 py-4 text-center text-gray-700">150</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-800">Vanilla Latte</td>
                      <td className="px-6 py-4 text-center text-gray-700">250</td>
                      <td className="px-6 py-4 text-center text-gray-700">6</td>
                      <td className="px-6 py-4 text-center text-gray-700">35</td>
                      <td className="px-6 py-4 text-center text-gray-700">150</td>
                    </tr>
                    <tr className="hover:bg-gray-50 bg-gray-25">
                      <td className="px-6 py-4 font-medium text-gray-800">Green Tea Latte</td>
                      <td className="px-6 py-4 text-center text-gray-700">240</td>
                      <td className="px-6 py-4 text-center text-gray-700">7</td>
                      <td className="px-6 py-4 text-center text-gray-700">32</td>
                      <td className="px-6 py-4 text-center text-gray-700">80</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Hot Chocolate Detailed Breakdown */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-starbucks-dark-green mb-8 text-center">
            🍫 Hot Chocolate Size Comparison
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-starbucks-green">
                <h3 className="text-lg font-semibold text-starbucks-green mb-3">Short (8 fl oz)</h3>
                <div className="space-y-2 text-gray-700">
                  <p>📊 <strong>190 calories</strong></p>
                  <p>🍃 <strong>18g sugar</strong></p>
                  <p>💧 Perfect for light indulgence</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-starbucks-green">
                <h3 className="text-lg font-semibold text-starbucks-green mb-3">Tall (12 fl oz)</h3>
                <div className="space-y-2 text-gray-700">
                  <p>📊 <strong>280 calories</strong></p>
                  <p>🍃 <strong>27g sugar</strong></p>
                  <p>💧 Most popular size</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-starbucks-green">
                <h3 className="text-lg font-semibold text-starbucks-green mb-3">Grande (16 fl oz)</h3>
                <div className="space-y-2 text-gray-700">
                  <p>📊 <strong>370 calories</strong></p>
                  <p>🍃 <strong>37g sugar</strong></p>
                  <p>💧 Rich and satisfying</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-starbucks-green">
                <h3 className="text-lg font-semibold text-starbucks-green mb-3">Venti (20 fl oz)</h3>
                <div className="space-y-2 text-gray-700">
                  <p>📊 <strong>450 calories</strong></p>
                  <p>🍃 <strong>46g sugar</strong></p>
                  <p>💧 Maximum indulgence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Health-Conscious Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-starbucks-dark-green mb-8 text-center">
            🥗 Health-Conscious Modifications
          </h2>
          
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-starbucks-green mb-6">
                ✅ Lower Calorie Options
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">🥛</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Alternative Milk Options</h4>
                    <p className="text-gray-600">Choose oat milk, almond milk, or coconut milk to reduce calories and accommodate dietary preferences.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">🍯</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Sugar-Free Syrups</h4>
                    <p className="text-gray-600">Request sugar-free vanilla, cinnamon dolce, or hazelnut syrups to significantly reduce sugar content.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">📏</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Size Down</h4>
                    <p className="text-gray-600">Choose a smaller size to enjoy your favorite drink with fewer calories and less sugar.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">❄️</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Skip the Whipped Cream</h4>
                    <p className="text-gray-600">Remove whipped cream to save 70-100 calories and reduce fat content.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-starbucks-dark-green mb-6">
                ⚠️ Things to Watch
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-yellow-500 text-xl">🍯</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Added Sugars</h4>
                    <p className="text-gray-600">Syrups and sauces are the primary sources of hidden sugars, so reduce pumps or choose sugar-free versions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-yellow-500 text-xl">☕</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Caffeine Content</h4>
                    <p className="text-gray-600">While providing energy, excessive caffeine can lead to anxiety and disrupt sleep. Be mindful of your intake.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-yellow-500 text-xl">🍨</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Saturated Fat</h4>
                    <p className="text-gray-600">Whole milk and whipped cream increase saturated fat content. Consider lighter alternatives.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-yellow-500 text-xl">🥤</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Frappuccinos</h4>
                    <p className="text-gray-600">These blended drinks often contain the highest calories and sugar due to their base ingredients.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dietary Accommodations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-starbucks-dark-green mb-8 text-center">
            🌱 Dietary Accommodations & Allergen Information
          </h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-700 mb-4">🌱 Vegan Options</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Oat, almond, soy, coconut milk</li>
                  <li>• Most syrups (check sugar-free options)</li>
                  <li>• Black coffee and espresso</li>
                  <li>• Many refreshers and teas</li>
                  <li>• Selected food items marked vegan</li>
                </ul>
              </div>

              <div className="bg-blue-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-700 mb-4">🚫 Gluten-Free</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Most beverages (verify syrups)</li>
                  <li>• Plain coffee and espresso drinks</li>
                  <li>• Most tea beverages</li>
                  <li>• Check food items individually</li>
                  <li>• Cross-contamination possible</li>
                </ul>
              </div>

              <div className="bg-orange-100 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-700 mb-4">🥜 Allergy Awareness</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Tree nuts in some syrups/toppings</li>
                  <li>• Dairy in standard milk options</li>
                  <li>• Soy in alternative milk options</li>
                  <li>• Always inform baristas of allergies</li>
                  <li>• Check ingredient lists regularly</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Tips Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-100 to-indigo-100 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-starbucks-green mb-6 text-center">
              💡 Pro Tips for Healthier Choices
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🧮</div>
                <h3 className="font-semibold text-starbucks-green mb-2">Use the Calculator</h3>
                <p className="text-gray-700 text-sm">
                  Always check the nutrition calculator before ordering to see exact values for your customizations.
                </p>
              </div>

              <div className="text-center">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="font-semibold text-starbucks-green mb-2">App Integration</h3>
                <p className="text-gray-700 text-sm">
                  The Starbucks app shows nutritional information for each item as you customize your order.
                </p>
              </div>

              <div className="text-center">
                <div className="text-3xl mb-3">💬</div>
                <h3 className="font-semibold text-starbucks-green mb-2">Ask Your Barista</h3>
                <p className="text-gray-700 text-sm">
                  Baristas can help you make modifications to reduce calories, sugar, or accommodate dietary needs.
                </p>
              </div>

              <div className="text-center">
                <div className="text-3xl mb-3">📋</div>
                <h3 className="font-semibold text-starbucks-green mb-2">Keep Track</h3>
                <p className="text-gray-700 text-sm">
                  Monitor your daily intake of calories, caffeine, and sugar to maintain a balanced diet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Disclaimer */}
        <section>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">⚠️ Important Nutrition Disclaimer</h3>
            <div className="text-yellow-700 space-y-2">
              <p>
                • All nutritional information is based on standard recipes and may vary due to customizations, 
                preparation methods, and regional differences.
              </p>
              <p>
                • Values are calculated using standard ingredients and serving sizes. Actual nutrition content 
                may differ based on specific preparation and ingredients used.
              </p>
              <p>
                • For the most accurate and up-to-date nutritional information, always refer to official 
                Starbucks resources or consult with store partners.
              </p>
              <p>
                • If you have food allergies or dietary restrictions, please inform your barista and 
                verify ingredients before ordering.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
      <Footer />
    </>
  );
} 