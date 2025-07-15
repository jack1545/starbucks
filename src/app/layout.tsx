import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Starbucks Secret Menu Guide - Unlock Hidden Delights',
  description: 'Discover the ultimate collection of Starbucks secret menu drinks, official app recipes, and community-created custom beverages. Your guide to hidden Starbucks delights.',
  keywords: 'starbucks secret menu, starbucks secret drinks, starbucks app secret menu, starbucks custom drinks, starbucks recipes',
  authors: [{ name: 'Starbucks Secret Menu Guide' }],
  openGraph: {
    title: 'Starbucks Secret Menu Guide - Unlock Hidden Delights',
    description: 'Discover the ultimate collection of Starbucks secret menu drinks, official app recipes, and community-created custom beverages.',
    url: 'https://starbucks-secret-menu.com',
    siteName: 'Starbucks Secret Menu Guide',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Starbucks Secret Menu Guide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Starbucks Secret Menu Guide - Unlock Hidden Delights',
    description: 'Discover the ultimate collection of Starbucks secret menu drinks.',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        {children}
      </body>
    </html>
  )
} 