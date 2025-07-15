import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Filter, SortAsc } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RecipeCard from '@/components/RecipeCard'
import { recipes, categories } from '@/data/recipes'
import type { Metadata, ResolvingMetadata } from 'next'

interface CategoryPageProps {
  params: {
    category: string
  }
}

type Props = {
  params: { category: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const categoryId = params.category
  const category = categories.find(cat => cat.id === categoryId)

  if (!category) {
    return {
      title: 'Category Not Found',
      description: 'This category does not exist.',
    }
  }
  
  const description = `Explore all ${category.name} secret menu recipes. Discover popular and new ${category.name.toLowerCase()} drinks.`

  return {
    title: `${category.name} Secret Menu Recipes - Starbucks`,
    description: description,
    openGraph: {
      title: `${category.name} Secret Menu Recipes`,
      description: description,
    },
     twitter: {
      title: `${category.name} Secret Menu Recipes`,
      description: description,
    },
  }
}

import CategoryClientPage from './CategoryClientPage'

export default function CategoryPage({ params }: CategoryPageProps) {
  return <CategoryClientPage params={params} />
} 