import Link from 'next/link'
import { Coffee, TrendingUp, Star, Clock } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { categories, recipes } from '@/data/recipes'

export default function CategoriesPage() {
  // 计算每个分类的统计信息
  const categoryStats = categories.map(category => {
    const categoryRecipes = recipes.filter(recipe => 
      recipe.category.toLowerCase() === category.name.toLowerCase().replace('s', '') ||
      recipe.category.toLowerCase() === category.id.toLowerCase()
    )
    
    const avgRating = categoryRecipes.length > 0 
      ? categoryRecipes.reduce((sum, recipe) => sum + recipe.rating, 0) / categoryRecipes.length 
      : 0
    
    const trendingCount = categoryRecipes.filter(recipe => recipe.isTrending).length
    
    return {
      ...category,
      recipeCount: categoryRecipes.length,
      avgRating,
      trendingCount
    }
  })

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
      case 'official secret menu':
        return '⭐'
      default:
        return '☕'
    }
  }

  const getCategoryDescription = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case 'frappuccinos':
        return '冰爽浓郁的混合饮品，从经典到创新，总有一款让你心动'
      case 'lattes':
        return '香浓咖啡与丝滑牛奶的完美结合，温暖你的每一个时刻'
      case 'refreshers':
        return '清新果香的活力饮品，为你的一天注入自然能量'
      case 'teas':
        return '精选茶叶调制的美味饮品，在忙碌中找到片刻宁静'
      case 'holiday specials':
        return '节日限定的特色饮品，带来满满的节日氛围'
      case 'official secret menu':
        return '星巴克官方认证的秘密菜单，品味官方推荐的惊喜'
      default:
        return '探索更多星巴克的隐藏美味'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* 页面标题 */}
        <section className="bg-gradient-to-br from-starbucks-green via-starbucks-dark-green to-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Coffee className="h-16 w-16 mx-auto mb-6 text-starbucks-gold" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              探索所有分类
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              发现各种类型的星巴克秘密菜单配方，从经典的弗拉布奇诺到创新的茶饮，
              总有一款适合你的口味偏好
            </p>
          </div>
        </section>

        {/* 统计信息 */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-starbucks-green text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {recipes.length}
                </div>
                <div className="text-gray-600">总配方数</div>
              </div>
              
              <div className="text-center">
                <div className="bg-category-pink text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {categories.length}
                </div>
                <div className="text-gray-600">分类数量</div>
              </div>
              
              <div className="text-center">
                <div className="bg-category-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {recipes.filter(recipe => recipe.isTrending).length}
                </div>
                <div className="text-gray-600">热门配方</div>
              </div>
              
              <div className="text-center">
                <div className="bg-category-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {Math.round(recipes.reduce((sum, recipe) => sum + recipe.prepTime, 0) / recipes.length)}
                </div>
                <div className="text-gray-600">平均制作时间(分)</div>
              </div>
            </div>
          </div>
        </section>

        {/* 分类网格 */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryStats.map((category) => (
                <Link
                  key={category.id}
                  href={`/categories/${category.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group-hover:shadow-xl transition-all duration-300">
                    {/* 分类头部 */}
                    <div className={`${category.color} text-white p-8 relative overflow-hidden`}>
                      <div className="relative z-10">
                        <div className="text-5xl mb-4">
                          {getCategoryIcon(category.name)}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">
                          {category.name}
                        </h3>
                        <p className="text-white/90 text-sm">
                          {getCategoryDescription(category.name)}
                        </p>
                      </div>
                      
                      {/* 装饰性图案 */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                    </div>

                    {/* 分类统计 */}
                    <div className="p-6">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">
                            {category.recipeCount}
                          </div>
                          <div className="text-xs text-gray-600">配方</div>
                        </div>
                        
                        <div>
                          <div className="text-2xl font-bold text-gray-900">
                            {category.avgRating > 0 ? category.avgRating.toFixed(1) : '-'}
                          </div>
                          <div className="text-xs text-gray-600">平均评分</div>
                        </div>
                        
                        <div>
                          <div className="text-2xl font-bold text-gray-900">
                            {category.trendingCount}
                          </div>
                          <div className="text-xs text-gray-600">热门</div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <div className="bg-gray-100 group-hover:bg-starbucks-green text-gray-700 group-hover:text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors duration-300">
                          探索 {category.name}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 热门推荐 */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              💡 推荐从这里开始
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 新手推荐 */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 text-green-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Star className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">新手首选</h3>
                    <p className="text-gray-600 text-sm">适合初次尝试的简单配方</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  如果你是第一次尝试星巴克秘密菜单，建议从 Frappuccinos 分类开始，
                  这些配方通常更容易制作，口感也比较大众化。
                </p>
                <Link href="/categories/frappuccino">
                  <button className="bg-green-100 hover:bg-green-200 text-green-700 font-semibold py-2 px-4 rounded-lg transition-colors">
                    查看 Frappuccinos
                  </button>
                </Link>
              </div>

              {/* 热门推荐 */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 text-red-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">当前热门</h3>
                    <p className="text-gray-600 text-sm">社交媒体上最受欢迎的配方</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  想要尝试当下最流行的饮品？Refreshers 分类包含了许多在 TikTok 和 Instagram 
                  上走红的配方，颜值和口感并存。
                </p>
                <Link href="/categories/refresher">
                  <button className="bg-red-100 hover:bg-red-200 text-red-700 font-semibold py-2 px-4 rounded-lg transition-colors">
                    查看 Refreshers
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 