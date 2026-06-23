import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

// Importar Páginas
import Home from './pages/Home'
import PLCs from './pages/PLCs'
import Variadores from './pages/Variadores'
import HMI from './pages/HMI'
import Servicios from './pages/Servicios'
import Contacto from './pages/Contacto'

// Componente para mover el scroll al inicio en cada cambio de ruta
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-layout" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        
        {/* Contenedor principal que se expande para empujar el footer al fondo */}
        <main style={{ flexGrow: 1, marginTop: 'var(--header-height)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plcs" element={<PLCs />} />
            <Route path="/variadores" element={<Variadores />} />
            <Route path="/hmi" element={<HMI />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  )
}

export default App
