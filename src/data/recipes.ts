export interface Recipe {
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
  ingredients?: Ingredient[]
  instructions?: string[]
  nutritionInfo?: NutritionInfo
  orderingTips?: string
}

export interface Ingredient {
  item: string
  amount: string
  size: 'Tall' | 'Grande' | 'Venti'
  notes?: string
}

export interface NutritionInfo {
  calories: number
  sugar: number
  caffeine: number
  allergens?: string[]
}

export const featuredRecipes: Recipe[] = [
  {
    id: 'butterbeer-frappuccino',
    title: 'Butterbeer Frappuccino',
    description: 'A magical Harry Potter-inspired drink with butterscotch and caramel flavors that will transport you to Hogsmeade.',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop',
    category: 'Frappuccino',
    difficulty: 'Easy',
    prepTime: 5,
    rating: 4.8,
    reviewCount: 234,
    isOfficial: false,
    isTrending: true,
    tags: ['Harry Potter', 'Sweet', 'Butterscotch'],
    ingredients: [
      { item: 'Creme Frappuccino Base', amount: '1', size: 'Grande' },
      { item: 'Caramel Syrup', amount: '3 pumps', size: 'Grande' },
      { item: 'Toffee Nut Syrup', amount: '3 pumps', size: 'Grande' },
      { item: 'Caramel Sauce', amount: 'Extra drizzle', size: 'Grande' },
      { item: 'Whipped Cream', amount: 'Regular', size: 'Grande' }
    ],
    instructions: [
      'Order a Creme Frappuccino',
      'Add 3 pumps of caramel syrup',
      'Add 3 pumps of toffee nut syrup',
      'Ask for extra caramel sauce drizzle',
      'Top with whipped cream'
    ],
    nutritionInfo: {
      calories: 420,
      sugar: 45,
      caffeine: 0,
      allergens: ['Milk', 'Soy']
    },
    orderingTips: 'Ask for the caramel sauce to be blended in as well as on top for extra butterscotch flavor!'
  },
  {
    id: 'pink-drink-ultimate',
    title: 'Ultimate Pink Drink',
    description: 'The viral TikTok sensation with a refreshing strawberry and coconut milk blend, now with extra customizations.',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop',
    category: 'Refresher',
    difficulty: 'Easy',
    prepTime: 3,
    rating: 4.6,
    reviewCount: 512,
    isOfficial: true,
    isTrending: true,
    tags: ['TikTok', 'Fruity', 'Coconut'],
    ingredients: [
      { item: 'Strawberry Acai Refresher', amount: '1', size: 'Grande' },
      { item: 'Coconut Milk', amount: 'Instead of water', size: 'Grande' },
      { item: 'Freeze-dried Strawberries', amount: 'Regular', size: 'Grande' }
    ],
    instructions: [
      'Order a Strawberry Acai Refresher',
      'Ask for coconut milk instead of water',
      'Request freeze-dried strawberries'
    ],
    nutritionInfo: {
      calories: 140,
      sugar: 24,
      caffeine: 45,
      allergens: ['Coconut']
    },
    orderingTips: 'This is now available in the official Starbucks app, but you can still customize with extra strawberries!'
  },
  {
    id: 'cookies-cream-frappuccino',
    title: 'Cookies & Cream Frappuccino',
    description: 'A delicious blend that tastes just like your favorite cookies and cream ice cream in liquid form.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
    category: 'Frappuccino',
    difficulty: 'Medium',
    prepTime: 7,
    rating: 4.7,
    reviewCount: 189,
    isOfficial: false,
    isTrending: false,
    tags: ['Cookies', 'Cream', 'Dessert'],
    ingredients: [
      { item: 'Double Chocolaty Chip Frappuccino', amount: '1', size: 'Grande' },
      { item: 'Vanilla Syrup', amount: '2 pumps', size: 'Grande' },
      { item: 'White Mocha Sauce', amount: '1 pump', size: 'Grande' },
      { item: 'Extra Chocolate Chips', amount: 'Double', size: 'Grande' },
      { item: 'Whipped Cream', amount: 'Regular', size: 'Grande' }
    ],
    instructions: [
      'Order a Double Chocolaty Chip Frappuccino',
      'Add 2 pumps of vanilla syrup',
      'Add 1 pump of white mocha sauce',
      'Ask for double chocolate chips',
      'Top with whipped cream'
    ],
    nutritionInfo: {
      calories: 470,
      sugar: 52,
      caffeine: 70,
      allergens: ['Milk', 'Soy', 'Wheat']
    },
    orderingTips: 'For an even more authentic cookies & cream taste, ask them to blend some chocolate cookie crumbs if available!'
  },
  {
    id: 'caramel-macchiato-secret',
    title: 'Secret Caramel Macchiato',
    description: 'An enhanced version of the classic with extra caramel drizzle and a hint of vanilla that elevates the experience.',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop',
    category: 'Latte',
    difficulty: 'Medium',
    prepTime: 6,
    rating: 4.5,
    reviewCount: 321,
    isOfficial: false,
    isTrending: false,
    tags: ['Caramel', 'Espresso', 'Classic'],
    ingredients: [
      { item: 'Espresso', amount: '2 shots', size: 'Grande' },
      { item: 'Vanilla Syrup', amount: '2 pumps', size: 'Grande' },
      { item: 'Caramel Syrup', amount: '2 pumps', size: 'Grande' },
      { item: 'Steamed 2% Milk', amount: 'Fill', size: 'Grande' },
      { item: 'Extra Caramel Drizzle', amount: 'Top and bottom', size: 'Grande' }
    ],
    instructions: [
      'Add vanilla syrup to cup',
      'Add caramel syrup',
      'Steam milk to perfect microfoam',
      'Pull 2 shots of espresso',
      'Pour steamed milk, holding back foam',
      'Spoon foam on top',
      'Add extra caramel drizzle in crosshatch pattern'
    ],
    nutritionInfo: {
      calories: 280,
      sugar: 35,
      caffeine: 150,
      allergens: ['Milk']
    },
    orderingTips: 'Ask for extra caramel drizzle both on the bottom and top of the cup for the full secret experience!'
  },
  {
    id: 'dragon-fruit-refresher',
    title: 'Dragon Fruit Glow-Up',
    description: 'A vibrant and Instagram-worthy refresher with dragon fruit and tropical flavors that taste as good as they look.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    category: 'Refresher',
    difficulty: 'Easy',
    prepTime: 4,
    rating: 4.4,
    reviewCount: 167,
    isOfficial: true,
    isTrending: true,
    tags: ['Dragon Fruit', 'Tropical', 'Instagram'],
    ingredients: [
      { item: 'Mango Dragonfruit Base', amount: '1 scoop', size: 'Grande' },
      { item: 'Water', amount: 'To first line', size: 'Grande' },
      { item: 'Coconut Milk', amount: 'To second line', size: 'Grande' },
      { item: 'Dried Dragon Fruit', amount: '1 scoop', size: 'Grande' },
      { item: 'Ice', amount: 'Fill', size: 'Grande' }
    ],
    instructions: [
      'Add mango dragonfruit base to shaker',
      'Add water to first line',
      'Add coconut milk to second line',
      'Add ice and shake well',
      'Pour into cup with dried dragon fruit pieces'
    ],
    nutritionInfo: {
      calories: 130,
      sugar: 28,
      caffeine: 0,
      allergens: ['Coconut']
    },
    orderingTips: 'Perfect for photos! The layers create a beautiful gradient effect.'
  },
  {
    id: 'tiktok-sunset-tea',
    title: 'TikTok Sunset Tea',
    description: 'A beautiful layered iced tea that creates a sunset effect in your cup, perfect for social media posts.',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
    category: 'Tea',
    difficulty: 'Hard',
    prepTime: 10,
    rating: 4.3,
    reviewCount: 98,
    isOfficial: false,
    isTrending: true,
    tags: ['TikTok', 'Layered', 'Aesthetic'],
    ingredients: [
      { item: 'Passion Tea', amount: '1/2 cup', size: 'Grande' },
      { item: 'White Grape Juice', amount: '1/4 cup', size: 'Grande' },
      { item: 'Coconut Milk', amount: '1/4 cup', size: 'Grande' },
      { item: 'Vanilla Syrup', amount: '1 pump', size: 'Grande' },
      { item: 'Ice', amount: 'Layered', size: 'Grande' }
    ],
    instructions: [
      'Brew passion tea and let cool',
      'Layer white grape juice in bottom of cup',
      'Slowly add passion tea over spoon to create layer',
      'Mix coconut milk with vanilla syrup',
      'Very slowly pour coconut milk mixture to create top layer',
      'Add ice carefully to maintain layers'
    ],
    nutritionInfo: {
      calories: 95,
      sugar: 22,
      caffeine: 25,
      allergens: ['Coconut']
    },
    orderingTips: 'This requires patience and skill - best ordered during slow periods when baristas have time for the layering technique.'
  }
]

export const categories = [
  { id: 'frappuccino', name: 'Frappuccinos', color: 'bg-category-pink' },
  { id: 'latte', name: 'Lattes', color: 'bg-category-orange' },
  { id: 'refresher', name: 'Refreshers', color: 'bg-category-blue' },
  { id: 'tea', name: 'Teas', color: 'bg-category-purple' },
  { id: 'holiday', name: 'Holiday Specials', color: 'bg-category-red' },
  { id: 'official', name: 'Official Secret Menu', color: 'bg-starbucks-green' }
]

export const difficulties = [
  { id: 'easy', name: 'Easy', description: 'Simple modifications, easy to order' },
  { id: 'medium', name: 'Medium', description: 'Multiple ingredients, may require explanation' },
  { id: 'hard', name: 'Hard', description: 'Complex recipe, detailed instructions needed' }
]

// Export featuredRecipes as recipes for easier import
export const recipes = featuredRecipes 