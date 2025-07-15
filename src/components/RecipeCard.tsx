import Link from 'next/link'
import Image from 'next/image'
import { Star, Clock, Coffee, Flame } from 'lucide-react'

interface RecipeCardProps {
  recipe: {
    id: string
    title: string
    description: string
    image: string
    category: string
    difficulty: 'Easy' | 'Medium' | 'Hard'
    prepTime: number
    rating: number
    reviewCount: number
    isOfficial?: boolean
    isTrending?: boolean
    tags?: string[]
  }
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'Hard':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'frappuccino':
        return 'bg-category-pink text-white'
      case 'latte':
        return 'bg-category-orange text-white'
      case 'refresher':
        return 'bg-category-blue text-white'
      case 'tea':
        return 'bg-category-purple text-white'
      case 'holiday':
        return 'bg-category-red text-white'
      default:
        return 'bg-starbucks-green text-white'
    }
  }

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover group">
      <div className="relative">
        <Image
          src={recipe.image}
          alt={recipe.title}
          width={400}
          height={300}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
          {recipe.isOfficial && (
            <span className="bg-starbucks-green text-white text-xs font-bold px-2 py-1 rounded-full">
              OFFICIAL
            </span>
          )}
          {recipe.isTrending && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
              <Flame className="w-3 h-3 mr-1" />
              TRENDING
            </span>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <span className={`text-xs font-bold px-2 py-1 rounded-full ${getCategoryColor(recipe.category)}`}>
            {recipe.category.toUpperCase()}
          </span>
        </div>

        {/* Difficulty & Time */}
        <div className="absolute bottom-3 left-3 flex space-x-2">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${getDifficultyColor(recipe.difficulty)}`}>
            {recipe.difficulty}
          </span>
          <span className="bg-black bg-opacity-50 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {recipe.prepTime}min
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-3">
          <Link href={`/recipe/${recipe.id}`}>
            <h3 className="text-xl font-bold text-gray-900 hover:text-starbucks-green transition-colors duration-200 line-clamp-2">
              {recipe.title}
            </h3>
          </Link>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {recipe.description}
        </p>

        {/* Tags */}
        {recipe.tags && recipe.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {recipe.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
            {recipe.tags.length > 3 && (
              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                +{recipe.tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Rating and Reviews */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {renderStars(recipe.rating)}
            </div>
            <span className="text-sm text-gray-600">
              {recipe.rating.toFixed(1)} ({recipe.reviewCount})
            </span>
          </div>

          <Link href={`/recipe/${recipe.id}`}>
            <button className="bg-starbucks-green hover:bg-starbucks-dark-green text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200 flex items-center">
              <Coffee className="w-4 h-4 mr-1" />
              View Recipe
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard 