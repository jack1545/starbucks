'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Star, Flame, Coffee, Heart, Share2, CheckCircle } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RecipeCard from '@/components/RecipeCard'
import { recipes } from '@/data/recipes'

interface RecipeClientPageProps {
  params: { id: string }
}

export default function RecipeClientPage({ params }: RecipeClientPageProps) {
  const recipe = recipes.find(r => r.id === params.id)
  
  if (!recipe) {
    notFound()
  }

  // Suggest similar recipes
  const relatedRecipes = recipes
    .filter(r => r.id !== recipe.id && r.category === recipe.category)
    .slice(0, 3)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Hard':
        return 'bg-red-100 text-red-800 border-red-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'frappuccino':
        return 'bg-category-pink'
      case 'latte':
        return 'bg-category-orange'
      case 'refresher':
        return 'bg-category-blue'
      case 'tea':
        return 'bg-category-purple'
      case 'holiday':
        return 'bg-category-red'
      default:
        return 'bg-starbucks-green'
    }
  }

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Breadcrumbs */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-starbucks-green">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/recipes" className="text-gray-500 hover:text-starbucks-green">
                Recipes
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-starbucks-green font-medium">{recipe.title}</span>
            </nav>
          </div>
        </div>

        {/* Recipe Detail Body */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="lg:flex">
                {/* Left Image Area */}
                <div className="lg:w-1/2">
                  <div className="relative h-96 lg:h-full">
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      fill
                      className="object-cover"
                      priority
                    />
                    
                    {/* Tags on Image */}
                    <div className="absolute top-4 left-4 flex flex-col space-y-2">
                      {recipe.isOfficial && (
                        <span className="bg-starbucks-green text-white text-xs font-bold px-3 py-1 rounded-full">
                          Official
                        </span>
                      )}
                      {recipe.isTrending && (
                        <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                          <Flame className="w-3 h-3 mr-1" />
                          Trending
                        </span>
                      )}
                    </div>

                    {/* Category Tag */}
                    <div className="absolute top-4 right-4">
                      <span className={`${getCategoryColor(recipe.category)} text-white text-sm font-bold px-3 py-1 rounded-full`}>
                        {recipe.category}
                      </span>
                    </div>

                    {/* Social Share Buttons */}
                    <div className="absolute bottom-4 right-4 flex space-x-2">
                      <button className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors">
                        <Heart className="w-5 h-5" />
                      </button>
                      <button className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Info Area */}
                <div className="lg:w-1/2 p-8">
                  <div className="mb-6">
                    <Link href="/recipes" className="flex items-center text-gray-600 hover:text-starbucks-green transition-colors mb-4 text-sm">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Recipes
                    </Link>
                    
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                      {recipe.title}
                    </h1>
                    
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {recipe.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center mb-6">
                      <div className="flex items-center mr-4">
                        {renderStars(recipe.rating)}
                      </div>
                      <span className="text-lg font-semibold text-gray-900 mr-2">
                        {recipe.rating.toFixed(1)}
                      </span>
                      <span className="text-gray-600">
                        ({recipe.reviewCount} reviews)
                      </span>
                    </div>

                    {/* Quick Info */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Clock className="w-5 h-5 text-gray-600 mr-2" />
                          <span className="font-semibold text-gray-900">Prep Time</span>
                        </div>
                        <span className="text-2xl font-bold text-starbucks-green">
                          {recipe.prepTime}
                        </span>
                        <span className="text-gray-600 ml-1">min</span>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Coffee className="w-5 h-5 text-gray-600 mr-2" />
                          <span className="font-semibold text-gray-900">Difficulty</span>
                        </div>
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(recipe.difficulty)}`}>
                          {recipe.difficulty}
                        </span>
                      </div>
                    </div>

                    {/* Tags */}
                    {recipe.tags && recipe.tags.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-2">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                          {recipe.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="bg-green-100 text-starbucks-green text-sm px-3 py-1 rounded-full font-medium"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="btn-starbucks flex-1 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Save Recipe
                      </button>
                      <Link href="/how-to-order" className="flex-1">
                        <button className="w-full border-2 border-starbucks-green text-starbucks-green font-semibold py-3 px-6 rounded-lg hover:bg-starbucks-green hover:text-white transition-colors duration-300">
                          How to Order
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Info Section */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Ingredients and Instructions */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Coffee className="w-6 h-6 mr-2 text-starbucks-green" />
                    Full Recipe
                  </h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Instructions</h3>
                    <ol className="space-y-3 text-gray-700">
                      <li className="flex">
                        <span className="flex-shrink-0 w-8 h-8 bg-starbucks-green text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5">1</span>
                        <span>Start by asking for the base drink (e.g., a Venti Iced Latte).</span>
                      </li>
                      <li className="flex">
                        <span className="flex-shrink-0 w-8 h-8 bg-starbucks-green text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5">2</span>
                        <span>Politely list the customizations, such as syrup pumps or milk alternatives.</span>
                      </li>
                      <li className="flex">
                        <span className="flex-shrink-0 w-8 h-8 bg-starbucks-green text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5">3</span>
                        <span>Mention any specific toppings, like caramel drizzle or cold foam.</span>
                      </li>
                      <li className="flex">
                        <span className="flex-shrink-0 w-8 h-8 bg-starbucks-green text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5">4</span>
                        <span>Confirm your order and enjoy your unique creation!</span>
                      </li>
                    </ol>

                    <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <h4 className="text-lg font-semibold text-yellow-800 mb-2">💡 Pro Tip</h4>
                      <p className="text-yellow-700">
                        {recipe.orderingTips || 'For best results, order during non-peak hours. The barista will have more time to carefully craft your custom drink. If they seem unsure, patiently explain the recipe steps.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                {/* Nutrition Info */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Nutrition Info</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Calories</span>
                      <span className="font-semibold">Approx. {recipe.nutritionInfo?.calories || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sugar</span>
                      <span className="font-semibold">{recipe.nutritionInfo?.sugar ? `${recipe.nutritionInfo.sugar}g` : 'N/A'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Caffeine</span>
                      <span className="font-semibold">{recipe.nutritionInfo?.caffeine ? `${recipe.nutritionInfo.caffeine}mg` : 'N/A'}</span>
                    </div>
                  </div>
                </div>

                {/* Ordering Tips */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Ordering Tips</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {recipe.instructions?.slice(0, 4).map((instruction, index) => (
                      <li key={index}>• {instruction}</li>
                    ))}
                  </ul>
                </div>

                {/* User Reviews */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">User Reviews</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-starbucks-green pl-4">
                      <div className="flex items-center mb-2">
                        {renderStars(5)}
                      </div>
                      <p className="text-sm text-gray-700 italic">
                        "Absolutely delicious! Exceeded my expectations and is now my new favorite."
                      </p>
                      <span className="text-xs text-gray-500">- Jane D.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Recipes */}
        {relatedRecipes.length > 0 && (
          <section className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                You Might Also Like
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedRecipes.map((relatedRecipe) => (
                  <RecipeCard key={relatedRecipe.id} recipe={relatedRecipe} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}