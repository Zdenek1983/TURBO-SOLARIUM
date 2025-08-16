import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Sun, Star, Shield, Users, Clock, Gift, Sparkles, Phone, MapPin, Mail } from 'lucide-react'

export default function Home() {
  const services = [
    {
      icon: Sun,
      title: 'Solárium',
      description: 'Rychlé a rovnoměrné opálení v moderních kabin s nejnovější technologií',
    },
    {
      icon: Sparkles,
      title: 'Nehtová modeláž',
      description: 'Gelové nehty, manikúra, zpevnění přírodních nehtů a nail art',
    },
    {
      icon: Shield,
      title: 'Opalovací krémy',
      description: 'Kvalitní opalovací přípravky pro bezpečné a dlouhotrvající opálení',
    },
    {
      icon: Gift,
      title: 'Dárkové poukazy',
      description: 'Ideální dárek pro vaše blízké na jakoukoliv příležitost',
    },
  ]

  const memberships = [
    { minutes: 50, price: 600, popular: false },
    { minutes: 100, price: 1000, popular: true },
    { minutes: 250, price: 2250, popular: false },
    { minutes: 350, price: 2950, popular: false },
  ]

  const rules = [
    'Vstup od 18 let',
    'Povinné ochranné brýle',
    'Bez parfémů a make-upu',
    'Nepoužívat při kožních problémech',
    'Dodržovat odstupy mezi návštěvami',
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 animate-fade-up">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <Sun className="h-5 w-5 text-orange-500" />
              <span className="text-sm font-medium text-gray-700">Karlovy Vary</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                TURBO SOLARIUM
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Moderní solární studio v centru Karlových Varů. Nabízíme profesionální opalování, 
              prodej opalovacích krémů, dárkové poukazy a nehtovou modeláž. 
              Dbáme na bezpečnost, hygienu a individuální přístup ke každému klientovi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection('cenik')}
              >
                Zobrazit ceník
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-orange-300 text-orange-700 hover:bg-orange-50 px-8 py-3 text-lg"
                onClick={() => scrollToSection('kontakt')}
              >
                Kontaktovat nás
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="sluzby" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Naše služby</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Poskytujeme širokou škálu služeb pro vaše pohodlí a krásu
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-orange-100 hover:border-orange-200">
                  <CardHeader className="pb-4">
                    <div className="bg-gradient-to-br from-orange-500 to-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="cenik" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Ceník a permanentky</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transparentní ceník bez skrytých poplatků
            </p>
          </div>

          {/* Single Visit Price */}
          <div className="text-center mb-12">
            <Card className="max-w-md mx-auto bg-white/80 backdrop-blur-sm border-orange-200">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-orange-600">Opalování</CardTitle>
                <CardDescription>Platba za minutu</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-gray-900 mb-2">14 Kč</div>
                <p className="text-gray-600">za 1 minutu</p>
              </CardContent>
            </Card>
          </div>

          {/* Membership Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {memberships.map((membership, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${
                membership.popular 
                  ? 'border-orange-500 ring-2 ring-orange-500 ring-opacity-20 bg-gradient-to-br from-white to-orange-50' 
                  : 'border-orange-200 bg-white/80 backdrop-blur-sm'
              }`}>
                {membership.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                      Nejoblíbenější
                    </div>
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {membership.minutes} minut
                  </CardTitle>
                  <div className="text-3xl font-bold text-orange-600 mt-2">
                    {membership.price.toLocaleString()} Kč
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>Úspora: {((membership.minutes * 14 - membership.price)).toLocaleString()} Kč</p>
                    <p>Cena za minutu: {Math.round(membership.price / membership.minutes)} Kč</p>
                  </div>
                  <Button 
                    className={`w-full mt-4 ${
                      membership.popular
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600'
                        : 'bg-orange-600 hover:bg-orange-700'
                    }`}
                    onClick={() => scrollToSection('kontakt')}
                  >
                    Koupit permanentku
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* First Visit Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">První návštěva</h2>
            <p className="text-lg text-gray-600">
              Jak probíhá vaše první návštěva v našem solárním studiu
            </p>
          </div>
          <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500 text-white rounded-full p-2 flex-shrink-0">
                  <Users className="h-6 w-6" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Postup při první návštěvě</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Přijďte 10 minut před termínem. Vyplníme dotazník, doporučíme vhodnou délku opalování 
                    a poskytneme ochranné pomůcky. Po opalování doporučujeme hydrataci pokožky.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-orange-500" />
                      <span className="text-gray-700">Přijďte 10 minut před termínem</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="h-5 w-5 text-orange-500" />
                      <span className="text-gray-700">Poskytujeme ochranné pomůcky</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-5 w-5 text-orange-500" />
                      <span className="text-gray-700">Individuální doporučení</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Sparkles className="h-5 w-5 text-orange-500" />
                      <span className="text-gray-700">Poradenství po opalování</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Pravidla solária</h2>
            <p className="text-lg text-gray-600">
              Pro vaši bezpečnost a nejlepší výsledky dodržujte následující pravidla
            </p>
          </div>
          <Card className="bg-white border-orange-200">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rules.map((rule, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-orange-500 text-white rounded-full p-1 flex-shrink-0">
                      <Shield className="h-4 w-4" />
                    </div>
                    <span className="text-gray-700">{rule}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-orange-50 rounded-lg border border-orange-200">
                <p className="text-sm text-orange-800">
                  <strong>Upozornění:</strong> Nepoužívat při těhotenství nebo při užívání fotosenzibilizujících léků. 
                  Vždy dodržujte doporučené odstupy mezi návštěvami pro zdraví vaší pokožky.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Nail Modeling Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Nehtová modeláž</h2>
            <p className="text-lg text-gray-600">
              Profesionální péče o vaše nehty s důrazem na kvalitu a detail
            </p>
          </div>
          <Card className="bg-gradient-to-br from-pink-50 to-orange-50 border-orange-200">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Naše služby</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <Sparkles className="h-5 w-5 text-pink-500" />
                      <span className="text-gray-700">Gelové nehty</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Sparkles className="h-5 w-5 text-pink-500" />
                      <span className="text-gray-700">Zpevnění přírodních nehtů</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Sparkles className="h-5 w-5 text-pink-500" />
                      <span className="text-gray-700">Nail art</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Sparkles className="h-5 w-5 text-pink-500" />
                      <span className="text-gray-700">Manikúra</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <p className="text-gray-700 mb-6">
                    Objednání telefonicky nebo emailem
                  </p>
                  <div className="space-y-3">
                    <a href="tel:728055571" className="flex items-center justify-center space-x-2 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <Phone className="h-5 w-5 text-orange-500" />
                      <span className="font-medium text-gray-900">728 055 571</span>
                    </a>
                    <Button 
                      className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600"
                      onClick={() => scrollToSection('kontakt')}
                    >
                      Objednat se
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-20 bg-gradient-to-br from-orange-900 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Kontakt</h2>
            <p className="text-lg text-orange-100 max-w-2xl mx-auto">
              Navštivte nás nebo se obraťte na naše odborníky s jakýmkoliv dotazem
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
                    <MapPin className="h-6 w-6 text-orange-400" />
                    <span>Adresa</span>
                  </h3>
                  <div className="space-y-2 text-orange-100">
                    <p>TURBO SOLARIUM</p>
                    <p>Školní 736/9</p>
                    <p>360 17 Karlovy Vary</p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Phone className="h-5 w-5 text-orange-400" />
                      <span className="font-medium">Telefon</span>
                    </div>
                    <a href="tel:728055571" className="text-orange-200 hover:text-white transition-colors">
                      728 055 571
                    </a>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Mail className="h-5 w-5 text-orange-400" />
                      <span className="font-medium">Email</span>
                    </div>
                    <a href="mailto:alice.svejdarova@solariumrole.cz" className="text-orange-200 hover:text-white transition-colors break-all">
                      alice.svejdarova@solariumrole.cz
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white h-full">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
                    <Clock className="h-6 w-6 text-orange-400" />
                    <span>Otevírací doba</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-orange-100">Pondělí - Pátek</span>
                      <span className="font-medium">9:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-orange-100">Sobota</span>
                      <span className="font-medium">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-orange-100">Neděle</span>
                      <span className="font-medium">10:00 - 16:00</span>
                    </div>
                  </div>
                  <div className="mt-8 p-4 bg-orange-500/20 rounded-lg border border-orange-400/30">
                    <p className="text-sm text-orange-100">
                      <strong>Tip:</strong> Doporučujeme předchozí objednání telefonicky nebo emailem 
                      pro zajištění volného termínu.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}