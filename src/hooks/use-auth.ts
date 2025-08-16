import { useState, useEffect, createContext, useContext } from 'react'

interface AuthContextType {
  isAuthenticated: boolean
  login: (username: string, password: string) => Promise<boolean>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const useAuthProvider = (): AuthContextType => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('turbo-solarium-auth')
    setIsAuthenticated(!!token)
    setLoading(false)
  }, [])

  const login = async (username: string, password: string): Promise<boolean> => {
    setLoading(true)
    
    // Simple authentication - in production use proper backend authentication
    if (username === 'admin' && password === 'nemame.00') {
      localStorage.setItem('turbo-solarium-auth', 'authenticated')
      setIsAuthenticated(true)
      setLoading(false)
      return true
    }
    
    setLoading(false)
    return false
  }

  const logout = () => {
    localStorage.removeItem('turbo-solarium-auth')
    setIsAuthenticated(false)
  }

  return {
    isAuthenticated,
    login,
    logout,
    loading,
  }
}

export { AuthContext }