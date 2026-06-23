import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Instagram } from 'lucide-react'
import { companyData } from '../data/company'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-container">
      <div className="container footer-grid">
        {/* Columna 1: Info e Identidad */}
        <div className="footer-info">
          <img 
            src="https://img.ceitsa.com.mx/branding/storefront/ceitsa-white/image.png" 
            alt="CEITSA Logo Blanco" 
            className="footer-info-logo"
          />
          <p className="footer-info-text">
            {companyData.description}
          </p>
          <div className="footer-social-links">
            <a href={companyData.social.facebook} target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href={companyData.social.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href={companyData.social.instagram} target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div>
          <h3 className="footer-title">Navegación</h3>
          <ul className="footer-links-list">
            <li><Link to="/" className="footer-link-item">Inicio</Link></li>
            <li><Link to="/servicios" className="footer-link-item">Servicios</Link></li>
            <li><Link to="/contacto" className="footer-link-item">Contacto</Link></li>
            <li><Link to="/contacto#cotizacion" className="footer-link-item">Solicitar Cotización</Link></li>
          </ul>
        </div>

        {/* Columna 3: Productos */}
        <div>
          <h3 className="footer-title">Productos</h3>
          <ul className="footer-links-list">
            <li><Link to="/plcs" className="footer-link-item">Controladores PLC</Link></li>
            <li><Link to="/variadores" className="footer-link-item">Variadores de Velocidad</Link></li>
            <li><Link to="/hmi" className="footer-link-item">Pantallas HMI</Link></li>
            <li><Link to="/plcs#starter-kits" className="footer-link-item">Starter Kits</Link></li>
            <li><Link to="/plcs#fuentes-control" className="footer-link-item">Fuentes de Alimentación</Link></li>
          </ul>
        </div>

        {/* Columna 4: Contacto */}
        <div>
          <h3 className="footer-title">Contacto</h3>
          <div className="footer-contact-item">
            <MapPin size={20} />
            <span>{companyData.address}</span>
          </div>
          <div className="footer-contact-item">
            <Phone size={18} />
            <a href={`tel:${companyData.phone.replace(/\s+/g, '')}`} className="footer-link-item">
              {companyData.phoneFormatted}
            </a>
          </div>
          <div className="footer-contact-item">
            <Mail size={18} />
            <a href={`mailto:${companyData.email}`} className="footer-link-item">
              {companyData.email}
            </a>
          </div>
          <div className="footer-contact-item">
            <Clock size={18} />
            <div>
              <p>{companyData.schedule.weekdays}</p>
              <p>{companyData.schedule.saturdays}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Franja Inferior */}
      <div className="container footer-bottom">
        <p>&copy; {currentYear} {companyData.fullName}. Todos los derechos reservados.</p>
        <p>
          <Link to="/contacto" className="footer-link-item" style={{ marginRight: '16px' }}>Política de Privacidad</Link>
          <span>Diseño Industrial Premium</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
