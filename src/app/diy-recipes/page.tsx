import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DIYRecipes() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-starbucks-green mb-4">
            DIY Starbucks Recipes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recreate your favorite Starbucks beverages at home with these tried-and-tested recipes. 
            From classic lattes to refreshing Frappuccinos, bring the coffeehouse experience to your kitchen.
          </p>
        </div>

        {/* Getting Started Tips */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-starbucks-green mb-6 text-center">
              🏠 Essential Tips for Home Brewing
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">☕</div>
                <h3 className="font-semibold text-starbucks-green mb-2">Quality Espresso</h3>
                <p className="text-gray-700 text-sm">
                  Use strong brewed coffee or espresso machine for authentic taste. A Moka pot works great too!
                </p>
              </div>

              <div className="text-center">
                <div className="text-3xl mb-3">🥛</div>
                <h3 className="font-semibold text-starbucks-green mb-2">Milk Steaming</h3>
                <p className="text-gray-700 text-sm">
                  Heat milk gently and use a milk frother or French press to create foam for lattes.
                </p>
              </div>

              <div className="text-center">
                <div className="text-3xl mb-3">🍯</div>
                <h3 className="font-semibold text-starbucks-green mb-2">Syrup Substitutes</h3>
                <p className="text-gray-700 text-sm">
                  Make simple syrups at home or use vanilla extract, caramel sauce, and chocolate syrup.
                </p>
              </div>

              <div className="text-center">
                <div className="text-3xl mb-3">❄️</div>
                <h3 className="font-semibold text-starbucks-green mb-2">Ice & Blending</h3>
                <p className="text-gray-700 text-sm">
                  Use plenty of ice for Frappuccinos and blend until smooth for that signature texture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Classic Espresso & Milk-Based Drinks */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-starbucks-green mb-8 text-center">
            ☕ Classic Espresso & Milk-Based Drinks
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Latte */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-starbucks-green">
              <h3 className="text-2xl font-semibold text-starbucks-green mb-4">☕ Classic Latte</h3>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Ingredients:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• 1 shot espresso (or ½ cup strong coffee)</li>
                  <li>• 6 oz steamed milk</li>
                  <li>• Optional: milk foam for topping</li>
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Instructions:</h4>
                <ol className="text-gray-700 space-y-1 list-decimal list-inside">
                  <li>Brew espresso into cup</li>
                  <li>Heat and steam milk until hot and frothy</li>
                  <li>Pour steamed milk into espresso</li>
                  <li>Top with foam if desired</li>
                </ol>
              </div>
            </div>

            {/* Vanilla Latte */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-starbucks-green">
              <h3 className="text-2xl font-semibold text-starbucks-green mb-4">🌟 Vanilla Latte</h3>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Ingredients:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• 1 shot espresso</li>
                  <li>• 6 oz steamed milk</li>
                  <li>• 2 tbsp vanilla syrup</li>
                  <li>• Optional: whipped cream</li>
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Instructions:</h4>
                <ol className="text-gray-700 space-y-1 list-decimal list-inside">
                  <li>Add vanilla syrup to cup</li>
                  <li>Pour in espresso and stir</li>
                  <li>Add steamed milk</li>
                  <li>Top with whipped cream if desired</li>
                </ol>
              </div>
            </div>

            {/* Caramel Macchiato */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-starbucks-green">
              <h3 className="text-2xl font-semibold text-starbucks-green mb-4">🍯 Caramel Macchiato</h3>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Ingredients:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• 2 tbsp vanilla syrup</li>
                  <li>• 6 oz steamed milk</li>
                  <li>• 1-2 shots espresso</li>
                  <li>• Caramel sauce for drizzling</li>
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Instructions:</h4>
                <ol className="text-gray-700 space-y-1 list-decimal list-inside">
                  <li>Add vanilla syrup to cup</li>
                  <li>Pour steamed milk over syrup</li>
                  <li>Slowly pour espresso on top</li>
                  <li>Drizzle with caramel sauce</li>
                </ol>
              </div>
            </div>

            {/* Mocha */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-starbucks-green">
              <h3 className="text-2xl font-semibold text-starbucks-green mb-4">🍫 Café Mocha</h3>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Ingredients:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• 1 shot espresso</li>
                  <li>• 1-2 tbsp chocolate sauce</li>
                  <li>• 1 tbsp vanilla syrup</li>
                  <li>• 6 oz steamed milk</li>
                  <li>• Whipped cream and chocolate drizzle</li>
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Instructions:</h4>
                <ol className="text-gray-700 space-y-1 list-decimal list-inside">
                  <li>Line cup with chocolate sauce</li>
                  <li>Add espresso and vanilla syrup</li>
                  <li>Pour in steamed milk and stir</li>
                  <li>Top with whipped cream and chocolate</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Seasonal Specialties */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-starbucks-green mb-8 text-center">
            🍂 Seasonal Specialties
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Pumpkin Spice Latte */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-starbucks-green">
              <h3 className="text-xl font-semibold text-starbucks-green mb-3">🎃 Pumpkin Spice Latte</h3>
              <div className="text-sm space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Ingredients:</h4>
                  <ul className="text-gray-700 space-y-1 text-xs">
                    <li>• 1 shot espresso</li>
                    <li>• 6 oz steamed milk</li>
                    <li>• 2 tbsp vanilla syrup</li>
                    <li>• ½ tsp pumpkin pie spice mix</li>
                    <li>• Whipped cream & cinnamon</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Instructions:</h4>
                  <p className="text-gray-700 text-xs">
                    Mix spices with vanilla syrup, add espresso and steamed milk, 
                    top with whipped cream and sprinkle with spices.
                  </p>
                </div>
              </div>
            </div>

            {/* Cinnamon Dolce Latte */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-starbucks-green">
              <h3 className="text-xl font-semibold text-starbucks-green mb-3">🍯 Cinnamon Dolce Latte</h3>
              <div className="text-sm space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Ingredients:</h4>
                  <ul className="text-gray-700 space-y-1 text-xs">
                    <li>• 1 shot espresso</li>
                    <li>• 2 tbsp cinnamon dolce syrup</li>
                    <li>• 6 oz milk steamed with cinnamon</li>
                    <li>• Brown sugar & sea salt</li>
                    <li>• Whipped cream</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Instructions:</h4>
                  <p className="text-gray-700 text-xs">
                    Combine syrup and espresso, add cinnamon-steamed milk, 
                    top with whipped cream and sprinkle with brown sugar and salt.
                  </p>
                </div>
              </div>
            </div>

            {/* Peppermint Mocha */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-starbucks-green">
              <h3 className="text-xl font-semibold text-starbucks-green mb-3">🌿 Peppermint Mocha</h3>
              <div className="text-sm space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Ingredients:</h4>
                  <ul className="text-gray-700 space-y-1 text-xs">
                    <li>• 1 shot espresso</li>
                    <li>• 2 tbsp peppermint syrup</li>
                    <li>• 2 tbsp chocolate sauce</li>
                    <li>• 6 oz steamed milk</li>
                    <li>• Whipped cream & dark chocolate</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Instructions:</h4>
                  <p className="text-gray-700 text-xs">
                    Line cup with chocolate and peppermint, add espresso and milk, 
                    top with whipped cream and dark chocolate shavings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Frappuccino Recipes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-starbucks-green mb-8 text-center">
            🧊 Frappuccino Copycat Recipes
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Caramel Frappuccino */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-starbucks-green">
              <h3 className="text-2xl font-semibold text-starbucks-green mb-4">🍯 Caramel Frappuccino</h3>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Ingredients:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• 1 cup ice</li>
                  <li>• ½ cup strong coffee (cooled)</li>
                  <li>• ½ cup low-fat milk</li>
                  <li>• 3 tbsp caramel sauce</li>
                  <li>• 2 tbsp sugar</li>
                  <li>• Whipped cream for topping</li>
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Instructions:</h4>
                <ol className="text-gray-700 space-y-1 list-decimal list-inside">
                  <li>Add all ingredients to blender</li>
                  <li>Blend on high until smooth</li>
                  <li>Pour into glass</li>
                  <li>Top with whipped cream and caramel drizzle</li>
                </ol>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-xs text-starbucks-green">
                  <strong>Pro Tip:</strong> Use only 5 main ingredients for the perfect copycat taste!
                </p>
              </div>
            </div>

            {/* Java Chip Frappuccino */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-starbucks-green">
              <h3 className="text-2xl font-semibold text-starbucks-green mb-4">🍫 Java Chip Frappuccino</h3>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Ingredients:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• 1 cup ice</li>
                  <li>• ½ cup strong coffee</li>
                  <li>• ½ cup milk</li>
                  <li>• 2 tbsp chocolate syrup</li>
                  <li>• 2 tbsp chocolate chips</li>
                  <li>• 2 tbsp sugar</li>
                  <li>• Whipped cream & chocolate chips</li>
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Instructions:</h4>
                <ol className="text-gray-700 space-y-1 list-decimal list-inside">
                  <li>Blend all ingredients until smooth</li>
                  <li>Pour into glass</li>
                  <li>Top with whipped cream</li>
                  <li>Sprinkle with chocolate chips</li>
                </ol>
              </div>
            </div>

            {/* Strawberry Frappuccino */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-starbucks-green">
              <h3 className="text-2xl font-semibold text-starbucks-green mb-4">🍓 Strawberry Frappuccino</h3>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Ingredients:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• 1 cup ice</li>
                  <li>• ½ cup milk</li>
                  <li>• ¼ cup strawberry syrup</li>
                  <li>• 2 tbsp sugar</li>
                  <li>• ¼ cup fresh strawberries</li>
                  <li>• Whipped cream</li>
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Instructions:</h4>
                <ol className="text-gray-700 space-y-1 list-decimal list-inside">
                  <li>Blend all ingredients until smooth</li>
                  <li>Pour into glass</li>
                  <li>Top with whipped cream</li>
                  <li>Garnish with fresh strawberry</li>
                </ol>
              </div>
            </div>

            {/* Green Tea Frappuccino */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-starbucks-green">
              <h3 className="text-2xl font-semibold text-starbucks-green mb-4">🍵 Matcha Green Tea Frappuccino</h3>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Ingredients:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• 1 cup ice</li>
                  <li>• ½ cup milk</li>
                  <li>• 2 tbsp matcha powder</li>
                  <li>• 3 tbsp sugar</li>
                  <li>• 2 tbsp vanilla syrup</li>
                  <li>• Whipped cream</li>
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Instructions:</h4>
                <ol className="text-gray-700 space-y-1 list-decimal list-inside">
                  <li>Whisk matcha with small amount of milk</li>
                  <li>Add remaining ingredients to blender</li>
                  <li>Blend until smooth and creamy</li>
                  <li>Top with whipped cream and matcha powder</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Refreshers & Cold Drinks */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-starbucks-green mb-8 text-center">
            🍹 Refreshing Cold Drinks
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Strawberry Acai Refresher */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-starbucks-green">
              <h3 className="text-2xl font-semibold text-starbucks-green mb-4">🍓 Strawberry Açaí Refresher</h3>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Ingredients:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• ½ cup white grape juice</li>
                  <li>• 2 tbsp freeze-dried strawberry powder</li>
                  <li>• 1 tbsp passion fruit juice</li>
                  <li>• 1 cup water</li>
                  <li>• Ice cubes</li>
                  <li>• Fresh/freeze-dried strawberries</li>
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Instructions:</h4>
                <ol className="text-gray-700 space-y-1 list-decimal list-inside">
                  <li>Mix strawberry powder with water until smooth</li>
                  <li>Add white grape juice and passion fruit juice</li>
                  <li>Pour over ice in glass</li>
                  <li>Garnish with strawberries</li>
                </ol>
              </div>
            </div>

            {/* Pink Drink */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-starbucks-green">
              <h3 className="text-2xl font-semibold text-starbucks-green mb-4">💗 Pink Drink</h3>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Ingredients:</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• 1 cup Strawberry Açaí Refresher (above recipe)</li>
                  <li>• ½ cup coconut milk</li>
                  <li>• Ice cubes</li>
                  <li>• Fresh strawberries</li>
                  <li>• Optional: simple syrup to taste</li>
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Instructions:</h4>
                <ol className="text-gray-700 space-y-1 list-decimal list-inside">
                  <li>Prepare Strawberry Açaí Refresher</li>
                  <li>Mix with coconut milk</li>
                  <li>Pour over ice</li>
                  <li>Garnish with freeze-dried strawberries</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Hot Chocolate */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-starbucks-green mb-8 text-center">
            🍫 Classic Hot Chocolate
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-starbucks-green">
              <h3 className="text-2xl font-semibold text-starbucks-green mb-4">🍫 Homemade Hot Cocoa</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Ingredients:</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• 2 cups milk (any type)</li>
                    <li>• 3 tbsp unsweetened cocoa powder</li>
                    <li>• 3 tbsp sugar (adjust to taste)</li>
                    <li>• 1 tsp vanilla extract</li>
                    <li>• Whipped cream for topping</li>
                    <li>• Optional: marshmallows</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Instructions:</h4>
                  <ol className="text-gray-700 space-y-1 list-decimal list-inside">
                    <li>Heat milk in saucepan over medium heat</li>
                    <li>Whisk cocoa powder and sugar until smooth</li>
                    <li>Gradually add hot milk while whisking</li>
                    <li>Add vanilla extract</li>
                    <li>Top with whipped cream</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Tips */}
        <section>
          <div className="bg-gradient-to-r from-starbucks-green to-starbucks-dark-green text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">
              💡 Pro Tips for Perfect Homemade Drinks
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🔥</div>
                <h3 className="text-xl font-semibold mb-2">Temperature Control</h3>
                <p className="text-green-100">
                  Never boil milk - heat gently to preserve flavor and prevent curdling.
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-3">⚖️</div>
                <h3 className="text-xl font-semibold mb-2">Taste & Adjust</h3>
                <p className="text-green-100">
                  Start with less sweetener and add more to taste - you can always add more!
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-3">🧊</div>
                <h3 className="text-xl font-semibold mb-2">Ice Quality</h3>
                <p className="text-green-100">
                  Use plenty of ice for Frappuccinos - it's key to achieving the right consistency.
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-3">🎨</div>
                <h3 className="text-xl font-semibold mb-2">Make It Yours</h3>
                <p className="text-green-100">
                  Experiment with different milk alternatives and flavor combinations!
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