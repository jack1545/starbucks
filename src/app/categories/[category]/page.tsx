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
      title: '分类未找到',
      description: '这个分类不存在。',
    }
  }
  
  const description = `探索所有${category.name}秘密菜单配方。发现流行和新的${category.name.toLowerCase()}饮品。`

  return {
    title: `${category.name} 秘密菜单配方 - 星巴克`,
    description: description,
    openGraph: {
      title: `${category.name} 秘密菜单配方`,
      description: description,
    },
     twitter: {
      title: `${category.name} 秘密菜单配方`,
      description: description,
    },
  }
}

import CategoryClientPage from './CategoryClientPage'

export default function CategoryPage({ params }: CategoryPageProps) {
  return <CategoryClientPage params={params} />
} 