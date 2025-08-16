import { useState } from 'react'
import { useAuth } from '@/hooks/use-auth'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Sun, Lock, User, AlertCircle, Sparkles, Diamond } from 'lucide-react'

export default function AdminLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    const success = await login(username, password)
    
    if (success) {
      navigate('/admin/dashboard')
    } else {
      setError('Nesprávné přihlašovací údaje')
    }
    
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen rose-gold-bg flex items-center justify-center p-4 relative overflow-hidden">
      <div className="relative w-full max-w-md">
        <Card className="rose-gold-card border-pink-300 shadow-2xl backdrop-blur-sm">
          <CardHeader className="text-center space-y-6 pb-8">
            <div className="relative mx-auto">
              <div className="w-20 h-20 rose-gold-gradient rounded-full flex items-center justify-center shadow-xl">
                <img 
                  src="/Asset-2.png" 
                  alt="TURBO SOLARIUM logo" 
                  className="w-16 h-16 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-16 h-16 items-center justify-center">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <CardTitle className="text-3xl font-bold text-gray-900 flex items-center justify-center space-x-2">
                <Diamond className="h-6 w-6 text-pink-500" />
                <span>Administrace</span>
              </CardTitle>
              <CardDescription className="text-gray-600 text-lg">
                Přihlášení do administračního rozhraní TURBO SOLARIUM
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="flex items-center space-x-3 p-4 bg-red-50 border border-red-200 rounded-lg shadow-sm">
                  <AlertCircle className="h-5 w-5 text-red-500" />
                  <span className="text-red-700 text-sm font-medium">{error}</span>
                </div>
              )}
              
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-700 flex items-center space-x-2">
                  <User className="h-4 w-4 text-pink-500" />
                  <span>Uživatelské jméno</span>
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
                  placeholder="Zadejte uživatelské jméno"
                  required
                />
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-700 flex items-center space-x-2">
                  <Lock className="h-4 w-4 text-pink-500" />
                  <span>Heslo</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm"
                  placeholder="Zadejte heslo"
                  required
                />
              </div>
              
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full rose-gold-gradient hover:shadow-xl text-white py-4 font-bold shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Přihlašuji...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Sparkles className="h-4 w-4" />
                    <span>Přihlásit se</span>
                  </div>
                )}
              </Button>
            </form>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border border-pink-200 shadow-sm">
              <div className="flex items-start space-x-3">
                <Diamond className="h-5 w-5 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-pink-800 font-medium">
                    <strong>Demo přístupy:</strong>
                  </p>
                  <p className="text-sm text-pink-700 mt-2">
                    Uživatelské jméno: <span className="font-mono bg-white px-2 py-1 rounded">admin</span><br />
                    Heslo: <span className="font-mono bg-white px-2 py-1 rounded">nemame.00</span>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}