import { Sun, MapPin, Phone, Mail, Clock, Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-pink-900 to-rose-900 text-white relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 via-rose-400 to-yellow-400 flex items-center justify-center shadow-lg">
                  <img 
                    src="/Asset-2.png" 
                    alt="TURBO SOLARIUM logo" 
                    className="w-10 h-10 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-10 h-10 items-center justify-center">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <div>
                <span className="text-xl font-bold rose-gold-text">TURBO SOLARIUM</span>
                <p className="text-sm text-pink-200">Karlovy Vary</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Moderní solární studio v centru Karlových Varů. Nabízíme profesionální opalování, 
              nehtovou modeláž a další kosmetické služby s důrazem na bezpečnost a kvalitu.
            </p>
            <div className="flex items-center space-x-2 text-pink-200">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm">Luxusní péče v moderním stylu</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-pink-300 flex items-center space-x-2">
              <Sparkles className="h-5 w-5" />
              <span>Kontaktní informace</span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-200">
                <MapPin className="h-5 w-5 text-pink-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Školní 736/9</p>
                  <p className="text-gray-400">360 17 Karlovy Vary</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-200">
                <Phone className="h-5 w-5 text-pink-400 flex-shrink-0" />
                <a href="tel:728055571" className="text-gray-300 hover:text-pink-300 transition-colors font-medium">
                  728 055 571
                </a>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-200">
                <Mail className="h-5 w-5 text-pink-400 flex-shrink-0" />
                <a href="mailto:alice.svejdarova@solariumrole.cz" className="text-gray-300 hover:text-pink-300 transition-colors break-all text-sm font-medium">
                  alice.svejdarova@solariumrole.cz
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-pink-300 flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Otevírací doba</span>
            </h3>
            <div className="space-y-3">
              <div className="p-4 rounded-lg bg-gradient-to-r from-pink-500/10 to-rose-500/10 backdrop-blur-sm border border-pink-500/20">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-pink-200">Pondělí - Pátek</span>
                    <span className="font-medium text-white">9:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-pink-200">Sobota</span>
                    <span className="font-medium text-white">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-pink-200">Neděle</span>
                    <span className="font-medium text-white">10:00 - 16:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-pink-800/30">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm flex items-center space-x-2">
              <Sparkles className="h-4 w-4 text-pink-400" />
              <span>© {new Date().getFullYear()} TURBO SOLARIUM. Všechna práva vyhrazena.</span>
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="text-pink-300 font-medium">Karlovy Vary</span>
              <span className="text-gray-400">•</span>
              <span className="text-pink-300 font-medium">Solární studio</span>
              <span className="text-gray-400">•</span>
              <span className="text-pink-300 font-medium">Nehtová modeláž</span>
              <span className="text-gray-400">•</span>
              <span className="text-pink-300 font-medium">Luxusní péče</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}