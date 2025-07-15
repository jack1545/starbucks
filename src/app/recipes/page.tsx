'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, Filter, SortAsc, Grid, List } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RecipeCard from '@/components/RecipeCard'
import { recipes, categories } from '@/data/recipes'

export default function RecipesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState<'rating' | 'popularity' | 'newest' | 'prepTime'>('rating')
  const [filterBy, setFilterBy] = useState<'all' | 'easy' | 'medium' | 'hard' | 'trending' | 'official'>('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  // 过滤和排序配方
  const filteredRecipes = useMemo(() => {
    let filtered = recipes

    // 搜索过滤
    if (searchQuery.trim()) {
      filtered = filtered.filter(recipe =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    // 分类过滤
    if (selectedCategory !== 'all') {
      const category = categories.find(cat => cat.id === selectedCategory)
      if (category) {
        filtered = filtered.filter(recipe =>
          recipe.category.toLowerCase() === category.name.toLowerCase().replace('s', '') ||
          recipe.category.toLowerCase() === selectedCategory.toLowerCase()
        )
      }
    }

    // 难度和状态过滤
    if (filterBy !== 'all') {
      switch (filterBy) {
        case 'easy':
        case 'medium':
        case 'hard':
          filtered = filtered.filter(recipe => recipe.difficulty.toLowerCase() === filterBy)
          break
        case 'trending':
          filtered = filtered.filter(recipe => recipe.isTrending)
          break
        case 'official':
          filtered = filtered.filter(recipe => recipe.isOfficial)
          break
      }
    }

    // 排序
    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'popularity':
        filtered.sort((a, b) => b.reviewCount - a.reviewCount)
        break
      case 'prepTime':
        filtered.sort((a, b) => a.prepTime - b.prepTime)
        break
      case 'newest':
        // 模拟按最新排序
        filtered.sort((a, b) => a.title.localeCompare(b.title))
        break
    }

    return filtered
  }, [searchQuery, selectedCategory, sortBy, filterBy])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* 页面标题 */}
        <section className="bg-gradient-to-br from-starbucks-green via-starbucks-dark-green to-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              All Recipes
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
              Browse our complete collection of Starbucks secret menu recipes and find your next favorite.
            </p>
            
            {/* 搜索栏 */}
            <form onSubmit={handleSearch} className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by recipe name, description, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-starbucks-gold"
                />
              </div>
            </form>
          </div>
        </section>

        {/* 筛选控制栏 */}
        <section className="bg-white border-b sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              {/* 左侧筛选器 */}
              <div className="flex flex-wrap gap-4">
                {/* 分类筛选 */}
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-starbucks-green focus:border-transparent"
                  >
                    <option value="all">All Categories</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 难度筛选 */}
                <select
                  value={filterBy}
                  onChange={(e) => setFilterBy(e.target.value as any)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-starbucks-green focus:border-transparent"
                >
                  <option value="all">All Filters</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                  <option value="trending">Trending</option>
                  <option value="official">Official</option>
                </select>
              </div>

              {/* 右侧排序和视图 */}
              <div className="flex items-center space-x-4">
                {/* 排序 */}
                <div className="flex items-center space-x-2">
                  <SortAsc className="w-4 h-4 text-gray-500" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-starbucks-green focus:border-transparent"
                  >
                    <option value="rating">By Rating</option>
                    <option value="popularity">By Popularity</option>
                    <option value="prepTime">By Prep Time</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>

                {/* 视图切换 */}
                <div className="flex border border-gray-300 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-starbucks-green text-white' : 'text-gray-600 hover:text-starbucks-green'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-starbucks-green text-white' : 'text-gray-600 hover:text-starbucks-green'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>

                {/* 结果计数 */}
                <span className="text-sm text-gray-600">
                  Found {filteredRecipes.length} recipes
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 配方网格/列表 */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredRecipes.length > 0 ? (
              <div className={
                viewMode === 'grid' 
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "space-y-6"
              }>
                {filteredRecipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  No Matching Recipes Found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search or filters, or browse all categories.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => {
                      setSearchQuery('')
                      setSelectedCategory('all')
                      setFilterBy('all')
                    }}
                    className="btn-starbucks"
                  >
                    Clear Filters
                  </button>
                  <Link href="/categories">
                    <button className="border-2 border-starbucks-green text-starbucks-green font-semibold py-3 px-6 rounded-lg hover:bg-starbucks-green hover:text-white transition-colors duration-300">
                      Browse Categories
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 快速统计 */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-starbucks-green mb-2">
                  {recipes.length}
                </div>
                <div className="text-gray-600">Total Recipes</div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-starbucks-green mb-2">
                  {recipes.filter(recipe => recipe.isTrending).length}
                </div>
                <div className="text-gray-600">Trending Recipes</div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-starbucks-green mb-2">
                  {recipes.filter(recipe => recipe.isOfficial).length}
                </div>
                <div className="text-gray-600">Official Recipes</div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-starbucks-green mb-2">
                  {Math.round(recipes.reduce((sum, recipe) => sum + recipe.rating, 0) / recipes.length * 10) / 10}
                </div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 