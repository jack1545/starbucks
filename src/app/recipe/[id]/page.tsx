import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Clock, Star, Flame, Coffee, Heart, Share2, CheckCircle } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RecipeCard from '@/components/RecipeCard'
import { recipes } from '@/data/recipes'
import type { Metadata, ResolvingMetadata } from 'next'

interface RecipePageProps {
  params: {
    id: string
  }
}

type Props = {
  params: { id: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id
  const recipe = recipes.find(recipe => recipe.id === id)

  if (!recipe) {
    return {
      title: 'Recipe Not Found',
      description: 'The recipe you are looking for does not exist.',
    }
  }

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: `${recipe.title} - Starbucks Secret Menu`,
    description: recipe.description,
    openGraph: {
      title: `${recipe.title} - Starbucks Secret Menu`,
      description: recipe.description,
      images: [
        {
          url: recipe.image,
          width: 400,
          height: 300,
          alt: recipe.title,
        },
        ...previousImages,
      ],
    },
     twitter: {
      card: 'summary_large_image',
      title: `${recipe.title} - Starbucks Secret Menu`,
      description: recipe.description,
      images: [recipe.image],
    },
  }
}

import RecipeClientPage from './RecipeClientPage'

export default function RecipePage({ params }: RecipePageProps) {
  return <RecipeClientPage params={params} />
} 