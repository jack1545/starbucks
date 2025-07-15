import Link from 'next/link'
import { Coffee, Instagram, Twitter, Facebook, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    categories: [
      { name: 'Frappuccinos', href: '/categories/frappuccinos' },
      { name: 'Secret Lattes', href: '/secret-lattes' },
      { name: 'Refreshers', href: '/drinks/refreshers' },
      { name: 'Top 10 Lists', href: '/top-10-lists' },
      { name: 'Holiday Specials', href: '/holiday-specials' },
    ],
    resources: [
      { name: 'How to Order', href: '/how-to-order' },
      { name: 'DIY Recipes', href: '/diy-recipes' },
      { name: 'Nutrition Info', href: '/nutrition-info' },
      { name: 'Starbucks App Guide', href: '/starbucks-app-guide' },
      { name: 'Latest Trends', href: '/latest-trend' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
      { name: 'Disclaimer', href: '/disclaimer' },
    ]
  }

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/starbuckssecret', icon: Instagram },
    { name: 'Twitter', href: 'https://twitter.com/StarbucksMenu', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/starbuckssecretmenu', icon: Facebook },
    { name: 'Email', href: 'mailto:hello@starbuckssecretmenu.com', icon: Mail },
  ]

  return (
    <footer className="bg-starbucks-dark-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-starbucks-gold" />
              <div>
                <h3 className="text-lg font-bold">STARBUCKS SECRET MENU</h3>
                <p className="text-sm text-gray-300">Made for fans, by fans</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6">
              Discover the ultimate collection of Starbucks secret menu drinks, 
              official app recipes, and community-created custom beverages. 
              Your guide to hidden Starbucks delights.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-starbucks-gold transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-starbucks-gold">Popular Categories</h4>
            <ul className="space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-starbucks-gold">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-starbucks-gold">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold mb-2 text-starbucks-gold">Stay Updated</h4>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest secret menu recipes and Starbucks trends delivered to your inbox
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-starbucks-gold focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-starbucks-gold text-starbucks-dark-green font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Starbucks Secret Menu Guide. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Not affiliated with Starbucks Corporation. Fan-made content only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 