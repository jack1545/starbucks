'use client'

import { useState, useMemo } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Filter, SortAsc } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RecipeCard from '@/components/RecipeCard'
import { recipes, categories } from '@/data/recipes'

interface CategoryClientPageProps {
  params: { category: string }
}

export default function CategoryClientPage({ params }: CategoryClientPageProps) {
  const [sortBy, setSortBy] = useState<'rating' | 'popularity' | 'newest'>('rating')
  const [filterBy, setFilterBy] = useState<'all' | 'easy' | 'medium' | 'hard' | 'trending' | 'official'>('all')

  // 找到对应的分类
  const category = categories.find(cat => cat.id === params.category)
  
  if (!category) {
    notFound()
  }

  // 筛选出该分类的配方
  const categoryRecipes = useMemo(() => {
    let filtered = recipes.filter(recipe => 
      recipe.category.toLowerCase() === category.name.toLowerCase().replace('s', '') ||
      recipe.category.toLowerCase() === params.category.toLowerCase()
    )

    // 应用筛选器
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

    // 应用排序
    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case 'popularity':
        filtered.sort((a, b) => b.reviewCount - a.reviewCount)
        break
      case 'newest':
        // 模拟按最新排序（这里可以添加实际的日期字段）
        filtered.sort((a, b) => a.title.localeCompare(b.title))
        break
    }

    return filtered
  }, [category.name, params.category, sortBy, filterBy])

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case 'frappuccinos':
        return '🥤'
      case 'lattes':
        return '☕'
      case 'refreshers':
        return '🧃'
      case 'teas':
        return '🍵'
      case 'holiday specials':
        return '🎄'
      default:
        return '☕'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* 面包屑导航 */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-starbucks-green">
                首页
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/categories" className="text-gray-500 hover:text-starbucks-green">
                分类
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-starbucks-green font-medium">{category.name}</span>
            </nav>
          </div>
        </div>

        {/* 页面标题和描述 */}
        <section className={`${category.color} py-16 text-white`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6">
              <span className="text-6xl mb-4 block">{getCategoryIcon(category.name)}</span>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                {category.name} 秘密菜单
              </h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                探索最受欢迎的{category.name}配方，从经典到创新，总有一款适合你的口味
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <span className="text-2xl font-bold">{categoryRecipes.length}</span>
                <span className="block text-sm">种配方</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <span className="text-2xl font-bold">
                  {(categoryRecipes.reduce((sum, recipe) => sum + recipe.rating, 0) / categoryRecipes.length).toFixed(1)}
                </span>
                <span className="block text-sm">平均评分</span>
              </div>
            </div>
          </div>
        </section>

        {/* 筛选和排序控制 */}
        <section className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <div className="flex items-center space-x-4">
                <Link 
                  href="/categories"
                  className="flex items-center text-gray-600 hover:text-starbucks-green transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  返回分类
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* 筛选器 */}
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <select
                    value={filterBy}
                    onChange={(e) => setFilterBy(e.target.value as any)}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-starbucks-green focus:border-transparent"
                  >
                    <option value="all">全部</option>
                    <option value="easy">简单</option>
                    <option value="medium">中等</option>
                    <option value="hard">困难</option>
                    <option value="trending">热门</option>
                    <option value="official">官方</option>
                  </select>
                </div>

                {/* 排序器 */}
                <div className="flex items-center space-x-2">
                  <SortAsc className="w-4 h-4 text-gray-500" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-starbucks-green focus:border-transparent"
                  >
                    <option value="rating">按评分</option>
                    <option value="popularity">按热度</option>
                    <option value="newest">最新</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 配方网格 */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {categoryRecipes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryRecipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">😔</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  暂无匹配的配方
                </h3>
                <p className="text-gray-600 mb-6">
                  试试调整筛选条件或查看其他分类
                </p>
                <Link href="/categories">
                  <button className="btn-starbucks">
                    浏览所有分类
                  </button>
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* 推荐其他分类 */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              探索其他分类
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.filter(cat => cat.id !== params.category).map((cat) => (
                <Link
                  key={cat.id}
                  href={`/categories/${cat.id}`}
                  className={`${cat.color} text-white p-6 rounded-xl text-center hover:opacity-90 transition-opacity group`}
                >
                  <div className="text-3xl mb-2">{getCategoryIcon(cat.name)}</div>
                  <h3 className="font-semibold text-sm group-hover:scale-105 transition-transform">
                    {cat.name}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}