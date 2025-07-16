'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Menu, X, Coffee, Star, Home } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const navigationItems = [
    {
      title: "Top 10's",
      href: "/top-10-lists",
      icon: Star,
    },
    {
      title: "Frappuccinos",
      href: "/categories/frappuccinos",
      icon: Coffee,
      submenu: [
        { title: "Cream Based", href: "#" },
        { title: "Coffee & Espresso", href: "#" },
        { title: "Candy Series", href: "#" },
        { title: "Dessert Series", href: "#" },
        { title: "Pop Culture", href: "#" },
        { title: "Holiday Specials", href: "#" },
      ]
    },
    {
      title: "Drinks",
      href: "#",
      icon: Coffee,
      submenu: [
                  { title: "Secret Lattes", href: "#" },
          { title: "Secret Macchiatos", href: "#" },
          { title: "Refreshers", href: "/drinks/refreshers" },
        { title: "Hot Chocolate", href: "#" },
        { title: "Smoothies", href: "#" },
      ]
    },
    {
      title: "Teas",
      href: "#",
      icon: Coffee,
    },
    {
      title: "Official Menu",
      href: "/official-menu",
      icon: Star,
    },
    {
      title: "Secret Sizes",
      href: "/categories/secret-sizes",
      icon: Coffee,
    }
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Handle search functionality
      console.log('Searching for:', searchQuery)
    }
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-starbucks-green" />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-starbucks-green">
                  STARBUCKS SECRET MENU
                </h1>
                <p className="text-xs text-gray-600">Made for fans, by fans</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation & Search */}
          <div className="hidden md:flex items-center justify-end flex-grow">
            <nav className="flex space-x-6">
              {navigationItems.map((item) => (
                <div key={item.title} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center space-x-1 text-gray-700 hover:text-starbucks-green transition-colors duration-200 font-medium"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.submenu && (
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-starbucks-green transition-colors duration-200"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="ml-6">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search recipes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-48 px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-starbucks-green focus:border-transparent transition-width duration-300 focus:w-64"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </form>
            </div>
          </div>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-starbucks-green focus:outline-none focus:text-starbucks-green"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search recipes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-starbucks-green focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </form>

              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.title}>
                  <Link
                    href={item.href}
                    className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-gray-700 hover:text-starbucks-green hover:bg-gray-50 rounded-md transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </Link>
                  
                  {/* Mobile Submenu */}
                  {item.submenu && (
                    <div className="ml-6 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-starbucks-green hover:bg-gray-50 rounded-md transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 