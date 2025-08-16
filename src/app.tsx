import { Routes, Route } from 'react-router-dom'
import { AuthContext, useAuthProvider } from '@/hooks/use-auth'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Home from '@/pages/home'
import AdminLogin from '@/pages/admin/login'
import AdminDashboard from '@/pages/admin/dashboard'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, loading } = useAuthProvider()
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="text-gray-600">Načítání...</p>
        </div>
      </div>
    )
  }
  
  if (!isAuthenticated) {
    return <AdminLogin />
  }
  
  return <>{children}</>
}

function AdminRoutes() {
  const auth = useAuthProvider()
  
  return (
    <AuthContext.Provider value={auth}>
      <Routes>
        <Route path="/admin" element={<AdminLogin />} />
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </AuthContext.Provider>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route 
          path="/*" 
          element={
            <Routes>
              <Route 
                path="/" 
                element={
                  <>
                    <Header />
                    <main>
                      <Home />
                    </main>
                    <Footer />
                  </>
                } 
              />
              <Route path="/admin/*" element={<AdminRoutes />} />
            </Routes>
          } 
        />
      </Routes>
    </div>
  )
}