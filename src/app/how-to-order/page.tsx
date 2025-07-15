import Link from 'next/link'
import { CheckCircle, Star, Clock, AlertCircle, Coffee, Users, Smartphone } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function HowToOrderPage() {
  const orderingSteps = [
    {
      icon: Smartphone,
      title: '1. Use the Starbucks App',
      description: 'We recommend using the official app to place your order, as it allows for full customization of all ingredients.',
      tips: [
        'Download and register for the official Starbucks App.',
        "Browse the 'Secret Menu' feature (if available).",
        'Customize your drink configuration.',
        'Save your favorite recipes for easy reordering.'
      ]
    },
    {
      icon: Coffee,
      title: '2. Prepare Basic Information',
      description: 'Understand the basic details of the drink you want to order.',
      tips: [
        'Determine the base drink type (Latte, Frappuccino, etc.).',
        'Know the special ingredients and modifications required.',
        'Decide on the drink size (Tall/Grande/Venti).',
        'Have a backup plan in case some ingredients are unavailable.'
      ]
    },
    {
      icon: Users,
      title: '3. Communicate with the Barista',
      description: 'Clearly and politely explain your custom request.',
      tips: [
        'Be friendly and patient.',
        'Start by stating the base drink.',
        'Explain each customization step-by-step.',
        'Be ready to explain any unfamiliar ingredients or adjustments.'
      ]
    },
    {
      icon: CheckCircle,
      title: '4. Confirm and Enjoy',
      description: 'Confirm your order is correct and enjoy your unique drink.',
      tips: [
        'Double-check the special requests.',
        'Check the customizations on your receipt.',
        'Communicate any issues with the barista promptly.',
        'Remember your favorite recipes for next time.'
      ]
    }
  ]

  const commonMistakes = [
    {
      mistake: "Saying just the secret menu name",
      solution: "Explain the specific ingredients and modifications, don't just state the drink's name."
    },
    {
      mistake: "Ordering a complex drink during peak hours",
      solution: "Choose off-peak hours to give the barista enough time to make it."
    },
    {
      mistake: "Expecting every store to know every recipe",
      solution: "Be prepared with detailed instructions, as barista familiarity varies."
    },
    {
      mistake: "Not knowing alternative options",
      solution: "Know possible substitute ingredients in case some are out of stock."
    }
  ]

  const appTips = [
    'The "Modify" feature in the Starbucks App is your best tool for ordering.',
    'You can save your favorite custom recipes.',
    'Ordering ahead saves you waiting time.',
    'Starbucks Rewards members get special offers and points.'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Page Title */}
        <section className="bg-gradient-to-br from-starbucks-green via-starbucks-dark-green to-gray-900 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Coffee className="h-16 w-16 mx-auto mb-6 text-starbucks-gold" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              How to Order from the Starbucks Secret Menu
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Master the art of ordering and enjoy a personalized Starbucks experience with ease. From app usage to in-store communication, we provide a complete guide.
            </p>
          </div>
        </section>

        {/* Ordering Steps */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Four Steps to Ordering
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {orderingSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 card-hover">
                  <div className="flex items-center justify-center w-16 h-16 bg-starbucks-green text-white rounded-full mx-auto mb-4">
                    <step.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 text-center mb-4">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-2 text-sm text-gray-700">
                    {step.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App Usage Tips */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Smartphone className="w-8 h-8 text-starbucks-green mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Starbucks App Tips
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Why We Recommend the App
                  </h3>
                  <ul className="space-y-3">
                    {appTips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <Star className="w-5 h-5 text-yellow-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    App Ordering Steps
                  </h3>
                  <ol className="space-y-3">
                    <li className="flex">
                      <span className="flex-shrink-0 w-6 h-6 bg-starbucks-green text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                      <span className="text-gray-700">Select a base drink type</span>
                    </li>
                    <li className="flex">
                      <span className="flex-shrink-0 w-6 h-6 bg-starbucks-green text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                      <span className="text-gray-700">Tap "Modify" to customize</span>
                    </li>
                    <li className="flex">
                      <span className="flex-shrink-0 w-6 h-6 bg-starbucks-green text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                      <span className="text-gray-700">Adjust syrups, milk, and other ingredients</span>
                    </li>
                    <li className="flex">
                      <span className="flex-shrink-0 w-6 h-6 bg-starbucks-green text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                      <span className="text-gray-700">Save your custom recipe</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Avoid Common Mistakes
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {commonMistakes.map((item, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-start mb-4">
                    <AlertCircle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-red-700 mb-2">
                        ❌ Incorrect Approach
                      </h3>
                      <p className="text-gray-700">{item.mistake}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-green-700 mb-2">
                        ✅ Correct Approach
                      </h3>
                      <p className="text-gray-700">{item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Conversation */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Sample Ordering Conversation
            </h2>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                How to order a "Pink Drink"
              </h3>
              
              <div className="space-y-4">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <p className="text-blue-800">
                    <strong>You:</strong> "Hi, I'd like a Grande Strawberry Açaí Refresher, please."
                  </p>
                </div>
                
                <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
                  <p className="text-gray-800">
                    <strong>Barista:</strong> "Okay, any other adjustments?"
                  </p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <p className="text-blue-800">
                    <strong>You:</strong> "Yes, please replace the water with coconut milk. Thanks."
                  </p>
                </div>
                
                <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
                  <p className="text-gray-800">
                    <strong>Barista:</strong> "Got it. A Grande Strawberry Açaí Refresher with coconut milk instead of water. Anything else?"
                  </p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <p className="text-blue-800">
                    <strong>You:</strong> "That's all, thank you!"
                  </p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-sm">
                  <strong>💡 Key takeaway:</strong> Start with the base drink, then state the specific substitutions clearly and politely.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-starbucks-green to-starbucks-dark-green text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Give It a Try?
            </h2>
            <p className="text-lg mb-8 text-gray-200">
              Now that you've mastered the ordering tips, it's time to try out your favorite secret menu drink!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/recipes">
                <button className="bg-white text-starbucks-green font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                  Browse All Recipes
                </button>
              </Link>
              <Link href="/categories">
                <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-starbucks-green transition-colors duration-300">
                  Explore by Category
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 