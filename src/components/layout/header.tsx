import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Sun, Phone, Mail, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navigation = [
  { name: 'Domů', href: '/' },
  { name: 'Služby', href: '#sluzby' },
  { name: 'Ceník', href: '#cenik' },
  { name: 'Kontakt', href: '#kontakt' },
  { name: 'Administrace', href: '/admin' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-orange-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-2 rounded-lg group-hover:shadow-lg transition-all duration-300">
              <Sun className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">TURBO SOLARIUM</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              item.href.startsWith('#') ? (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.href ? 'text-orange-600 border-b-2 border-orange-600' : ''
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:728055571" className="flex items-center space-x-1 text-sm text-gray-600 hover:text-orange-600 transition-colors">
              <Phone className="h-4 w-4" />
              <span>728 055 571</span>
            </a>
            <a href="mailto:alice.svejdarova@solariumrole.cz" className="flex items-center space-x-1 text-sm text-gray-600 hover:text-orange-600 transition-colors">
              <Mail className="h-4 w-4" />
              <span className="hidden xl:inline">alice.svejdarova@solariumrole.cz</span>
              <span className="xl:hidden">Email</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-orange-100 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navigation.map((item) => (
              item.href.startsWith('#') ? (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-gray-700 hover:text-orange-600 py-2 text-base font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-gray-700 hover:text-orange-600 py-2 text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.href ? 'text-orange-600' : ''
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
            <div className="pt-4 mt-4 border-t border-orange-100">
              <a href="tel:728055571" className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 py-2">
                <Phone className="h-4 w-4" />
                <span>728 055 571</span>
              </a>
              <a href="mailto:alice.svejdarova@solariumrole.cz" className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 py-2">
                <Mail className="h-4 w-4" />
                <span>alice.svejdarova@solariumrole.cz</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}