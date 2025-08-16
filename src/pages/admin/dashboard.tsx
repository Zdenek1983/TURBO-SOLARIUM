import { useState } from 'react'
import { useAuth } from '@/hooks/use-auth'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Sun, Users, CreditCard, Calendar, Package, Settings, 
  BarChart3, Clock, Mail, Phone, LogOut, TrendingUp, 
  ShoppingCart, UserPlus, AlertTriangle, CheckCircle 
} from 'lucide-react'

export default function AdminDashboard() {
  const { logout } = useAuth()
  const [activeTab, setActiveTab] = useState('prehled')

  // Mock data - v produkci by se načítala z API
  const stats = {
    todayVisits: 23,
    monthlyRevenue: 45600,
    activeMemberships: 156,
    lowStockItems: 3,
  }

  const recentActivities = [
    { id: 1, type: 'visit', customer: 'Anna Nováková', time: '14:30', minutes: 15 },
    { id: 2, type: 'membership', customer: 'Petr Dvořák', time: '13:45', type_detail: '100min' },
    { id: 3, type: 'product', customer: 'Marie Svobodová', time: '12:20', product: 'Opalovací krém' },
  ]

  const upcomingReservations = [
    { id: 1, customer: 'Kateřina Procházková', time: '16:00', duration: 20 },
    { id: 2, customer: 'Tomáš Novák', time: '16:30', duration: 15 },
    { id: 3, customer: 'Lucie Veselá', time: '17:00', duration: 25 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-2 rounded-lg">
                <Sun className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">TURBO SOLARIUM</h1>
                <p className="text-sm text-gray-600">Administrace</p>
              </div>
            </div>
            <Button
              variant="outline"
              onClick={logout}
              className="flex items-center space-x-2 border-orange-300 text-orange-700 hover:bg-orange-50"
            >
              <LogOut className="h-4 w-4" />
              <span>Odhlásit se</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
            <TabsTrigger value="prehled">Přehled</TabsTrigger>
            <TabsTrigger value="zakaznici">Zákazníci</TabsTrigger>
            <TabsTrigger value="permanentky">Permanentky</TabsTrigger>
            <TabsTrigger value="rezervace">Rezervace</TabsTrigger>
            <TabsTrigger value="produkty">Produkty</TabsTrigger>
            <TabsTrigger value="statistiky">Statistiky</TabsTrigger>
            <TabsTrigger value="nastaveni">Nastavení</TabsTrigger>
            <TabsTrigger value="komunikace">Komunikace</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="prehled" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100">Dnešní návštěvy</p>
                      <p className="text-3xl font-bold">{stats.todayVisits}</p>
                    </div>
                    <Users className="h-8 w-8 text-blue-200" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100">Měsíční tržby</p>
                      <p className="text-3xl font-bold">{stats.monthlyRevenue.toLocaleString()} Kč</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-200" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-orange-500 to-amber-500 text-white border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100">Aktivní permanentky</p>
                      <p className="text-3xl font-bold">{stats.activeMemberships}</p>
                    </div>
                    <CreditCard className="h-8 w-8 text-orange-200" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-red-500 to-red-600 text-white border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-red-100">Nízký stav</p>
                      <p className="text-3xl font-bold">{stats.lowStockItems}</p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-red-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activities and Upcoming Reservations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white border-orange-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-orange-500" />
                    <span>Poslední aktivity</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          {activity.type === 'visit' && <Sun className="h-5 w-5 text-orange-500" />}
                          {activity.type === 'membership' && <CreditCard className="h-5 w-5 text-green-500" />}
                          {activity.type === 'product' && <ShoppingCart className="h-5 w-5 text-blue-500" />}
                          <div>
                            <p className="font-medium text-gray-900">{activity.customer}</p>
                            <p className="text-sm text-gray-600">
                              {activity.type === 'visit' && `Opalování ${activity.minutes} min`}
                              {activity.type === 'membership' && `Permanentka ${activity.type_detail}`}
                              {activity.type === 'product' && activity.product}
                            </p>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-orange-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-orange-500" />
                    <span>Nadcházející rezervace</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingReservations.map((reservation) => (
                      <div key={reservation.id} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{reservation.customer}</p>
                          <p className="text-sm text-gray-600">{reservation.duration} minut</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-blue-600">{reservation.time}</p>
                          <Button size="sm" variant="outline" className="mt-1 text-xs">
                            Detail
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Customers Tab */}
          <TabsContent value="zakaznici" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Správa zákazníků</h2>
              <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
                <UserPlus className="h-4 w-4 mr-2" />
                Nový zákazník
              </Button>
            </div>
            <Card className="bg-white border-orange-200">
              <CardContent className="p-6">
                <p className="text-gray-600 text-center py-12">
                  Zde bude seznam všech zákazníků s možností vyhledávání, editace a správy jejich permanentek.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Memberships Tab */}
          <TabsContent value="permanentky" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Správa permanentek</h2>
              <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
                <CreditCard className="h-4 w-4 mr-2" />
                Nová permanentka
              </Button>
            </div>
            <Card className="bg-white border-orange-200">
              <CardContent className="p-6">
                <p className="text-gray-600 text-center py-12">
                  Zde bude správa všech permanentek - kontrola zůstatků, historie použití, prodloužení a správa vypršení.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Other tabs with placeholder content */}
          <TabsContent value="rezervace" className="space-y-6">
            <Card className="bg-white border-orange-200">
              <CardContent className="p-6">
                <p className="text-gray-600 text-center py-12">
                  Kalendář rezervací a správa termínů
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="produkty" className="space-y-6">
            <Card className="bg-white border-orange-200">
              <CardContent className="p-6">
                <p className="text-gray-600 text-center py-12">
                  Správa skladových zásob a produktů
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="statistiky" className="space-y-6">
            <Card className="bg-white border-orange-200">
              <CardContent className="p-6">
                <p className="text-gray-600 text-center py-12">
                  Grafy a statistiky tržeb, návštěvnosti a dalších metrik
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="nastaveni" className="space-y-6">
            <Card className="bg-white border-orange-200">
              <CardContent className="p-6">
                <p className="text-gray-600 text-center py-12">
                  Nastavení cen, otevírací doby a dalších parametrů
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="komunikace" className="space-y-6">
            <Card className="bg-white border-orange-200">
              <CardContent className="p-6">
                <p className="text-gray-600 text-center py-12">
                  SMS a email kampaně, upozornění zákazníkům
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}