import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SecretSizesPage() {
  const secretSizes = [
    { 
      name: "Short (8 oz)", 
      description: "The hidden small size - perfect for a quick caffeine fix without the commitment.",
      availability: "Available for most hot drinks",
      price: "Usually $0.10-0.30 cheaper than Tall",
      tip: "Great for trying new flavors or when you want less caffeine"
    },
    { 
      name: "Trenta (31 oz)", 
      description: "The massive size that's bigger than your stomach - only for cold drinks.",
      availability: "Cold drinks only (iced coffee, tea, refreshers)",
      price: "Usually $0.50-0.70 more than Venti",
      tip: "Perfect for sharing or all-day hydration"
    },
    { 
      name: "Sample Cup (3 oz)", 
      description: "The tiniest taste - ask nicely and you might get a free sample.",
      availability: "At barista's discretion",
      price: "Usually free for samples",
      tip: "Great for trying new seasonal drinks before committing"
    }
  ];

  const sizingTips = [
    {
      title: "The Short Secret",
      description: "Short size isn't on the menu board but it's available for almost all hot drinks. It's perfect for kids or when you want to try multiple drinks.",
      icon: "🤫"
    },
    {
      title: "Trenta Truth",
      description: "At 31 oz, Trenta is larger than the average human stomach (30 oz). It's only available for cold drinks due to safety concerns with hot liquids.",
      icon: "🥤"
    },
    {
      title: "Customization Hack",
      description: "You can ask for 'extra hot' or 'kids temp' for any size. Baristas can adjust temperature to your preference.",
      icon: "🌡️"
    },
    {
      title: "Ice Level Control",
      description: "Request 'light ice', 'no ice', or 'extra ice' to customize your drink volume and strength.",
      icon: "🧊"
    }
  ];

  const valueAnalysis = [
    {
      size: "Short (8 oz)",
      value: "Best per-oz value for trying new drinks",
      bestFor: "Espresso drinks, hot teas, trying new flavors"
    },
    {
      size: "Tall (12 oz)",
      value: "Standard size with balanced price-to-volume ratio",
      bestFor: "Regular coffee drinkers, most popular choice"
    },
    {
      size: "Grande (16 oz)",
      value: "Sweet spot for most customers",
      bestFor: "Lattes, frappuccinos, when you want more drink"
    },
    {
      size: "Venti (20/24 oz)",
      value: "More drink for proportionally less money",
      bestFor: "Heavy coffee drinkers, sharing, long commutes"
    },
    {
      size: "Trenta (31 oz)",
      value: "Maximum volume, best for hydration",
      bestFor: "Iced teas, refreshers, all-day drinks"
    }
  ];

  const orderingSecrets = [
    {
      secret: "Ask for Short",
      explanation: "Simply say 'Can I get a short [drink name]?' Most baristas will happily accommodate.",
      savings: "Save $0.10-0.30"
    },
    {
      secret: "Trenta Refreshers",
      explanation: "Perfect for hot days when you need maximum hydration with flavor.",
      savings: "More drink per dollar"
    },
    {
      secret: "Sample Before Buying",
      explanation: "Politely ask 'Could I try a small sample of [drink]?' especially for new seasonal items.",
      savings: "Avoid buying drinks you don't like"
    },
    {
      secret: "Temperature Control",
      explanation: "Ask for 'extra hot', 'kids temp', or specific temperature preferences.",
      savings: "Perfect drink every time"
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
              src="/starbucks_customization.webp"
              alt="Starbucks Secret Sizes"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-starbucks-gold text-white rounded-full mb-6">
                <span className="text-3xl">📏</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Secret Sizes
              </h1>
              <h2 className="text-3xl md:text-4xl text-green-200 mt-2 font-semibold">
                Hidden Menu Size Options
              </h2>
              <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mt-4">
                Discover Starbucks' secret sizing options that aren't displayed on the menu board. From the tiny Short to the massive Trenta, unlock the full range of size possibilities.
              </p>
            </div>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="py-16 bg-white relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <Image
              src="/starbucks_app_development_guide.jpg"
              alt="Starbucks Sizes Background"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Size Secrets Revealed</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Most customers don't know about these hidden size options that can save money and provide better value.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/95 backdrop-blur-sm p-12 rounded-3xl text-center shadow-lg border border-green-100">
                <div className="text-5xl font-bold text-starbucks-green mb-4">3</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Secret Sizes</h3>
                <p className="text-gray-600 text-lg">
                  Short, Trenta, and Sample Cup - three sizes that aren't advertised but are available to those who know.
                </p>
              </div>

              <div className="bg-white/95 backdrop-blur-sm p-12 rounded-3xl text-center shadow-lg border border-green-100">
                <div className="text-5xl font-bold text-starbucks-green mb-4">31oz</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Trenta Size</h3>
                <p className="text-gray-600 text-lg">
                  Larger than the average human stomach capacity, available only for cold drinks for safety reasons.
                </p>
              </div>

              <div className="bg-white/95 backdrop-blur-sm p-12 rounded-3xl text-center shadow-lg border border-green-100">
                <div className="text-5xl font-bold text-starbucks-green mb-4">$0.30</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Potential Savings</h3>
                <p className="text-gray-600 text-lg">
                  Save up to $0.30 by ordering a Short size, or get more value with larger secret sizes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Secret Sizes Details */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">🤫 The Hidden Size Menu</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These sizes exist but aren't prominently displayed. Here's everything you need to know about ordering them.
              </p>
            </div>

            <div className="space-y-6">
              {secretSizes.map((size, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="grid lg:grid-cols-3 gap-6 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-starbucks-green mb-3">{size.name}</h3>
                      <p className="text-gray-600 text-lg">{size.description}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <span className="font-semibold text-gray-800">Availability:</span>
                        <p className="text-gray-600">{size.availability}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-800">Price:</span>
                        <p className="text-gray-600">{size.price}</p>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-xl p-4">
                      <h4 className="font-semibold text-starbucks-green mb-2">💡 Pro Tip:</h4>
                      <p className="text-gray-700">{size.tip}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sizing Tips */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">🎯 Insider Sizing Tips</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Master these sizing secrets to get the most out of your Starbucks experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {sizingTips.map((tip, index) => (
                <div key={index} className="bg-green-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
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

        {/* Value Analysis */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">💰 Size Value Analysis</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding which size offers the best value for different situations and drink types.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="bg-starbucks-green text-white p-6">
                <h3 className="text-2xl font-bold text-center">Complete Size Comparison</h3>
              </div>
              
              <div className="divide-y divide-gray-200">
                {valueAnalysis.map((analysis, index) => (
                  <div key={index} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                    <div className="grid md:grid-cols-3 gap-4 items-center">
                      <div>
                        <h4 className="text-lg font-bold text-starbucks-green">{analysis.size}</h4>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Value Proposition:</span>
                        <p className="text-gray-700">{analysis.value}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Best For:</span>
                        <p className="text-gray-700">{analysis.bestFor}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ordering Secrets */}
        <section className="py-16 bg-white relative">
          <div className="absolute inset-0 opacity-5">
            <Image
              src="/starbucks_mobile_order_pay.webp"
              alt="Mobile Ordering Background"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">🗣️ How to Order Secret Sizes</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Confidence is key when ordering secret sizes. Here's exactly what to say and how to say it.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {orderingSecrets.map((secret, index) => (
                <div key={index} className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-green-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-starbucks-green text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{secret.secret}</h3>
                      <p className="text-gray-600 mb-4">{secret.explanation}</p>
                      <div className="bg-green-100 rounded-lg p-3">
                        <span className="text-sm font-semibold text-starbucks-green">Benefit: </span>
                        <span className="text-sm text-gray-700">{secret.savings}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-starbucks-green to-starbucks-dark-green rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">🎭 Confidence is Key</h3>
              <p className="text-green-100 text-lg">
                Remember, these aren't "secret" in a forbidden way - they're just not advertised. Baristas know about them and are happy to accommodate. Order with confidence and don't be afraid to ask questions!
              </p>
            </div>
          </div>
        </section>

        {/* Size Comparison Visual */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">📊 Visual Size Comparison</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how all Starbucks sizes compare to each other, including the secret ones.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-lg">
              <div className="flex items-end justify-center space-x-8 mb-8">
                {/* Sample Cup */}
                <div className="text-center">
                  <div className="w-8 h-12 bg-gradient-to-t from-starbucks-green to-green-400 rounded-lg mb-3 mx-auto"></div>
                  <div className="text-sm font-semibold text-gray-800">Sample</div>
                  <div className="text-xs text-gray-600">3 oz</div>
                </div>

                {/* Short */}
                <div className="text-center">
                  <div className="w-12 h-20 bg-gradient-to-t from-starbucks-green to-green-400 rounded-lg mb-3 mx-auto"></div>
                  <div className="text-sm font-semibold text-gray-800">Short</div>
                  <div className="text-xs text-gray-600">8 oz</div>
                </div>

                {/* Tall */}
                <div className="text-center">
                  <div className="w-16 h-28 bg-gradient-to-t from-starbucks-green to-green-400 rounded-lg mb-3 mx-auto"></div>
                  <div className="text-sm font-semibold text-gray-800">Tall</div>
                  <div className="text-xs text-gray-600">12 oz</div>
                </div>

                {/* Grande */}
                <div className="text-center">
                  <div className="w-20 h-36 bg-gradient-to-t from-starbucks-green to-green-400 rounded-lg mb-3 mx-auto"></div>
                  <div className="text-sm font-semibold text-gray-800">Grande</div>
                  <div className="text-xs text-gray-600">16 oz</div>
                </div>

                {/* Venti */}
                <div className="text-center">
                  <div className="w-24 h-44 bg-gradient-to-t from-starbucks-green to-green-400 rounded-lg mb-3 mx-auto"></div>
                  <div className="text-sm font-semibold text-gray-800">Venti</div>
                  <div className="text-xs text-gray-600">20/24 oz</div>
                </div>

                {/* Trenta */}
                <div className="text-center">
                  <div className="w-28 h-52 bg-gradient-to-t from-starbucks-green to-green-400 rounded-lg mb-3 mx-auto"></div>
                  <div className="text-sm font-semibold text-gray-800">Trenta</div>
                  <div className="text-xs text-gray-600">31 oz</div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">Hidden sizes:</span> Sample Cup, Short, and Trenta
                </p>
                <p className="text-sm text-gray-500">
                  * Trenta available for cold drinks only
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-starbucks-green to-starbucks-dark-green">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Try Secret Sizes?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Now that you know the secrets, head to your nearest Starbucks and confidently order your perfect size. Remember, knowledge is power - and in this case, it's also savings!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/starbucks-app-guide">
                <button className="bg-white text-starbucks-green px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                  Learn App Ordering
                </button>
              </Link>
              <Link href="/categories">
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-starbucks-green transition-colors duration-300">
                  Explore More Secrets
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