import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { companyData } from '../data/company'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Escuchar scroll para cambiar la apariencia del header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setIsDropdownOpen(false) // Cerrar dropdown al cambiar menu
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsDropdownOpen(false)
  }

  const toggleDropdown = (e) => {
    e.preventDefault()
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <header className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-nav">
        {/* Logotipo */}
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <img 
            src="https://img.ceitsa.com.mx/branding/storefront/ceitsa-primary/image.png" 
            alt="CEITSA Logo" 
            className="logo-img"
          />
        </Link>

        {/* Menú de Navegación */}
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Inicio
          </NavLink>

          {/* Item Dropdown de Productos */}
          <div className={`nav-item-dropdown ${isDropdownOpen ? 'active' : ''}`}>
            <a 
              href="#" 
              className="dropdown-toggle" 
              onClick={toggleDropdown}
            >
              Productos <ChevronDown size={16} style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'var(--transition)' }} />
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link to="/plcs" className="dropdown-item" onClick={closeMenu}>
                  Controladores PLC
                </Link>
              </li>
              <li>
                <Link to="/variadores" className="dropdown-item" onClick={closeMenu}>
                  Variadores de Velocidad
                </Link>
              </li>
              <li>
                <Link to="/hmi" className="dropdown-item" onClick={closeMenu}>
                  Pantallas HMI
                </Link>
              </li>
            </ul>
          </div>

          <NavLink 
            to="/servicios" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Servicios
          </NavLink>

          <NavLink 
            to="/contacto" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Contacto
          </NavLink>

          {/* Botón de acción rápida en móvil */}
          <Link 
            to="/contacto#cotizacion" 
            className="btn btn-primary" 
            style={{ width: '100%', marginTop: '16px', display: isMenuOpen ? 'flex' : 'none' }}
            onClick={closeMenu}
          >
            Cotizar Equipo
          </Link>
        </nav>

        {/* Botón Cotización Rápida en Escritorio */}
        <Link 
          to="/contacto" 
          className="btn btn-primary" 
          style={{ padding: '8px 18px', fontSize: '0.85rem' }}
        >
          Cotizar Ahora
        </Link>

        {/* Botón Hamburguesa Móvil */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
