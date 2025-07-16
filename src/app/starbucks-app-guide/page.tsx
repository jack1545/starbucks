import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function StarbucksAppGuide() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-8">
            <img 
              src="/starbucks_app_development_guide.jpg" 
              alt="Starbucks App Development Guide" 
              className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            />
          </div>
          <h1 className="text-5xl font-bold text-green-700 mb-4">
            Starbucks App Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your digital coffee companion - Master the Starbucks app to unlock rewards, 
            streamline ordering, and enhance your coffee experience.
          </p>
        </div>

        {/* Main Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-starbucks-dark-green mb-8 text-center">
            Key Features & Benefits
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Rewards Program */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-starbucks-green">
              <div className="mb-4">
                <img 
                  src="/starbucks_rewards_collect_stars.webp" 
                  alt="Starbucks Rewards Collect Stars" 
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-starbucks-green mb-4">
                🌟 Starbucks® Rewards Program
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Earn stars with every purchase</li>
                <li>• Birthday surprises and personalized offers</li>
                <li>• Free drinks and food starting at just 25 stars</li>
                <li>• Bonus star challenges and double star days</li>
              </ul>
            </div>

            {/* Star Earning System */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-starbucks-green">
              <div className="mb-4">
                <img 
                  src="/starbucks_rewards_free_drinks.webp" 
                  alt="Starbucks Rewards Free Drinks" 
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-starbucks-green mb-4">
                ⭐ Star Earning System
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>1 Star per $1:</strong> Cash/card payments</li>
                <li>• <strong>2 Stars per $1:</strong> Starbucks Card payments</li>
                <li>• <strong>3 Stars per $1:</strong> Partner (employee) purchases</li>
                <li>• Extra stars through games and challenges</li>
              </ul>
            </div>

            {/* Partnership Benefits */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-starbucks-green">
              <div className="mb-4">
                <img 
                  src="/Starbucks-secret-menu.webp" 
                  alt="Starbucks Rewards Gold Benefits" 
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-starbucks-green mb-4">
                🤝 Partnership Benefits
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Delta SkyMiles®:</strong> Earn miles + double stars</li>
                <li>• <strong>Bank of America:</strong> 2% cash back on purchases</li>
                <li>• <strong>Marriott Bonvoy®:</strong> Double stars during stays</li>
                <li>• Link accounts for maximum benefits</li>
              </ul>
            </div>

            {/* Mobile Ordering */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-starbucks-green">
              <div className="mb-4">
                <img 
                  src="/starbucks_mobile_order_pay.webp" 
                  alt="Starbucks Mobile Order and Pay" 
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-starbucks-green mb-4">
                📱 Mobile Ordering
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Skip the line with advance ordering</li>
                <li>• Save favorite orders and payment methods</li>
                <li>• Extensive customization options</li>
                <li>• Multiple pickup methods available</li>
              </ul>
            </div>

            {/* Payment Convenience */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-starbucks-green">
              <div className="mb-4">
                <img 
                  src="/starbucks_customization.webp" 
                  alt="Starbucks Payment and Customization" 
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-starbucks-green mb-4">
                💳 Payment & Convenience
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Preload digital Starbucks Card</li>
                <li>• Faster checkout experience</li>
                <li>• Accelerated star earning (2x)</li>
                <li>• Secure payment management</li>
              </ul>
            </div>

            {/* Additional Features */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-starbucks-green">
              <div className="mb-4">
                <img 
                  src="/brand_reputation_app_highlights.gif" 
                  alt="Starbucks App Highlights" 
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-starbucks-green mb-4">
                🎁 Additional Features
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Send digital gift cards</li>
                <li>• Shop merchandise online</li>
                <li>• Discover new product launches</li>
                <li>• Access exclusive promotions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Mobile Ordering Tutorial */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-starbucks-dark-green mb-8 text-center">
            Mobile Ordering Step-by-Step Tutorial
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-6">
                <img 
                  src="/starbucks_most_popular_drinks.jpg" 
                  alt="Starbucks Most Popular Drinks" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-2xl font-semibold text-starbucks-green mb-6">
                Getting Started
              </h3>
              <p className="text-gray-700 mb-6">
                Download the latest Starbucks app from the App Store (iPhone) or Google Play Store (Android) 
                and create your Starbucks Rewards account.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-starbucks-green font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Start Your Order</h4>
                    <p className="text-gray-600">
                      Open the app and tap the "Order" icon (usually circular) at the bottom of the screen.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-starbucks-green font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Select Store & Menu Items</h4>
                    <p className="text-gray-600">
                      Confirm your preferred Starbucks location for pickup, then browse the comprehensive menu 
                      to find your desired items.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-starbucks-green font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Customize Your Drink</h4>
                    <p className="text-gray-600">
                      Personalize your beverage with size options, milk alternatives, syrups, sweeteners, 
                      and toppings to create your perfect drink.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-starbucks-green font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Add to Order & Review</h4>
                    <p className="text-gray-600">
                      After customization, tap "Add to Order," then click the shopping bag icon 
                      to review your complete order.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-starbucks-green font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Choose Pickup Method & Submit</h4>
                    <p className="text-gray-600">
                      Select your preferred pickup method (in-store, drive-thru, curbside, or delivery), 
                      then tap "Checkout" to submit your order.
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
                  <h4 className="font-semibold text-starbucks-green mb-2">💡 Pro Tip: Bring Your Own Cup (BYOT)</h4>
                  <p className="text-gray-700">
                    Select "I want to use my own cup" when ordering through the app, then bring your clean cup 
                    to the pickup area for an eco-friendly option.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* App Features Summary Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-starbucks-dark-green mb-8 text-center">
            App Features Summary
          </h2>
          
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-starbucks-dark-green text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Feature Category</th>
                  <th className="px-6 py-4 text-left">Key Benefits & Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-semibold text-starbucks-green">Rewards Program</td>
                  <td className="px-6 py-4 text-gray-700">
                    Earn stars for free food & drinks; birthday perks; accelerated earning through challenges and games
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-starbucks-green">Mobile Order & Pay</td>
                  <td className="px-6 py-4 text-gray-700">
                    Advance ordering and payment; save favorite orders; preload digital Starbucks Card for 2x stars
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-starbucks-green">Star Earning Methods</td>
                  <td className="px-6 py-4 text-gray-700">
                    Scan barcode (1 star/$); linked payment methods (1 star/$); Starbucks Card/registered card (2 stars/$)
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-starbucks-green">Partner Benefits</td>
                  <td className="px-6 py-4 text-gray-700">
                    Link Delta, Bank of America, Marriott accounts for extra miles, cash back, or bonus stars
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-starbucks-green">App Management</td>
                  <td className="px-6 py-4 text-gray-700">
                    Manage personal info, payment methods, privacy settings, and rewards history
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-starbucks-green">Digital Features</td>
                  <td className="px-6 py-4 text-gray-700">
                    Send digital gift cards, shop merchandise, discover new launches and promotions
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Strategic Benefits */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
              Why the Starbucks App Matters
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-4">For Customers</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Enhanced convenience and personalization</li>
                  <li>• Significant value through rewards and partnerships</li>
                  <li>• Streamlined ordering and payment process</li>
                  <li>• Access to exclusive offers and new products</li>
                  <li>• Seamless integration across lifestyle brands</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-4">For Starbucks</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Increased customer loyalty and frequency</li>
                  <li>• Valuable customer data and insights</li>
                  <li>• Improved operational efficiency</li>
                  <li>• Direct marketing channel to customers</li>
                  <li>• Working capital through card preloading</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <div className="bg-gradient-to-r from-starbucks-green to-starbucks-dark-green text-white rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Maximize Your Starbucks Experience
            </h2>
            <p className="text-lg text-green-100 text-center max-w-2xl mx-auto mb-8">
              Download the app today to start earning rewards and enjoy the convenience of mobile ordering. 
              Your perfect coffee is just a tap away.
            </p>
            <div className="flex justify-center">
              <button className="bg-white text-starbucks-green font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105">
                Download Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
      <Footer />
    </>
  );
} 