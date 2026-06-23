import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Check, Cpu } from 'lucide-react'

function ProductCard({ 
  brand = "Delta", 
  title, 
  subtitle, 
  description, 
  image, 
  features = [], 
  applications = [] 
}) {
  const navigate = useNavigate()

  const handleQuoteClick = () => {
    const formElement = document.getElementById('cotizacion-form')
    if (formElement) {
      // Si el formulario existe en la página actual, hacer scroll suave hacia él
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      
      // Auto-rellenar el select de producto si es posible
      const selectElement = document.getElementById('producto_interes')
      if (selectElement) {
        selectElement.value = title
        // Disparar un evento onChange sintáctico si React lo necesita
        const event = new Event('change', { bubbles: true })
        selectElement.dispatchEvent(event)
      }
    } else {
      // Si no existe, navegar a la página de contacto pasando el nombre del producto en el state
      navigate('/contacto', { state: { prefilledProduct: title } })
    }
  }

  return (
    <article className="product-card">
      {/* Contenedor de Imagen */}
      <div className="product-card-img-wrapper">
        {image ? (
          <img src={image} alt={title} className="product-card-img" loading="lazy" />
        ) : (
          <Cpu size={64} style={{ color: 'rgba(13, 59, 102, 0.15)' }} />
        )}
      </div>

      {/* Contenido de la Tarjeta */}
      <div className="product-card-content">
        <span className="product-card-brand">{brand}</span>
        <h3 className="product-card-title">{title}</h3>
        {subtitle && <h4 className="product-card-subtitle">{subtitle}</h4>}
        <p className="product-card-desc">{description}</p>

        {/* Listado de Características Técnicas */}
        {features.length > 0 && (
          <div className="product-card-features">
            <h5 className="features-title-text">Especificaciones Técnicas:</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {features.map((feature, idx) => (
                <li key={idx} className="product-card-feature-item">
                  <Check size={16} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Listado de Aplicaciones Comunes */}
        {applications.length > 0 && (
          <div className="product-card-applications">
            <h5 className="features-title-text">Aplicaciones Comunes:</h5>
            <div className="app-tags-container">
              {applications.map((app, idx) => (
                <span key={idx} className="app-tag-badge">{app}</span>
              ))}
            </div>
          </div>
        )}

        {/* Botón de Acción */}
        <div className="product-card-footer">
          <button 
            onClick={handleQuoteClick} 
            className="btn btn-secondary" 
            style={{ width: '100%' }}
          >
            Quiero Cotizar
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .product-card-subtitle {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--neutral-muted);
          margin-top: -8px;
          margin-bottom: 12px;
        }

        .features-title-text {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--primary);
          margin-bottom: 8px;
        }

        .product-card-applications {
          margin-bottom: 20px;
          padding-top: 12px;
          border-top: 1px dashed var(--neutral-border);
        }

        .app-tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .app-tag-badge {
          background-color: var(--neutral-light);
          border: 1px solid var(--neutral-border);
          color: var(--neutral-dark);
          font-size: 0.75rem;
          font-weight: 500;
          padding: 4px 10px;
          border-radius: 50px;
          transition: var(--transition-fast);
        }

        .product-card:hover .app-tag-badge {
          background-color: rgba(13, 59, 102, 0.04);
          border-color: rgba(13, 59, 102, 0.1);
        }
      ` }} />
    </article>
  )
}

export default ProductCard
