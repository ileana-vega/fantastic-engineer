import React from 'react'
import { Link } from 'react-router-dom'

function Hero({ 
  title, 
  subtitle, 
  description, 
  badge, 
  actions = [], 
  isLarge = false,
  imageSrc
}) {
  return (
    <section className={`hero-section ${isLarge ? 'hero-large' : 'hero-compact'}`}>
      <div className="hero-overlay"></div>
      <div className="container hero-content-grid">
        <div className="hero-text-block animate-fade-in-up">
          {badge && <span className="hero-badge">{badge}</span>}
          {isLarge ? (
            <h1 className="hero-title">
              <span className="hero-title-light">{subtitle}</span>
              <span className="hero-title-bold">{title}</span>
            </h1>
          ) : (
            <h1 className="hero-title-compact">{title}</h1>
          )}
          
          {description && <p className="hero-description-text">{description}</p>}
          
          {actions.length > 0 && (
            <div className="hero-actions-group">
              {actions.map((action, idx) => {
                if (action.isExternal) {
                  return (
                    <a 
                      key={idx}
                      href={action.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn ${action.variant === 'primary' ? 'btn-primary' : 'btn-outline'}`}
                    >
                      {action.label}
                    </a>
                  )
                } else {
                  return (
                    <Link 
                      key={idx}
                      to={action.link}
                      className={`btn ${action.variant === 'primary' ? 'btn-primary' : action.variant === 'secondary' ? 'btn-secondary' : 'btn-outline'}`}
                    >
                      {action.label}
                    </Link>
                  )
                }
              })}
            </div>
          )}
        </div>

        {/* Imagen del Hero (si existe, para Home o páginas que lo requieran) */}
        {imageSrc && (
          <div className="hero-image-block animate-fade-in">
            <img src={imageSrc} alt="CEITSA Industrial Showcase" className="hero-image-media" />
          </div>
        )}
      </div>

      {/* Estilos locales específicos para el Hero que extienden global.css */}
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-section {
          position: relative;
          background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
          color: var(--bg-white);
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.08) 0%, transparent 50%);
          pointer-events: none;
        }

        .hero-large {
          min-height: 520px;
          padding: 80px 0;
        }

        .hero-compact {
          min-height: 320px;
          padding: 60px 0;
        }

        .hero-content-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        /* Si no hay imagen en el hero, centrar o ampliar el bloque de texto */
        .hero-section:not(:has(.hero-image-block)) .hero-content-grid {
          grid-template-columns: 1fr;
          max-width: 800px;
        }

        .hero-badge {
          display: inline-block;
          font-family: var(--font-title);
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--accent);
          margin-bottom: 16px;
        }

        .hero-title {
          font-size: 3rem;
          line-height: 1.15;
          margin-bottom: 20px;
          color: var(--bg-white);
        }

        .hero-title-light {
          display: block;
          font-weight: 300;
          font-size: 1.8rem;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }

        .hero-title-bold {
          display: block;
          font-weight: 800;
          color: var(--bg-white);
        }

        .hero-title-compact {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--bg-white);
          margin-bottom: 16px;
        }

        .hero-description-text {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.8);
          max-width: 600px;
          margin-bottom: 32px;
        }

        .hero-actions-group {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .hero-image-block {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-image-media {
          max-height: 380px;
          filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.3));
          animation: floatAnimation 6s ease-in-out infinite;
        }

        @keyframes floatAnimation {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        /* Botón outline personalizado para fondo oscuro */
        .hero-section .btn-outline {
          color: var(--bg-white);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .hero-section .btn-outline:hover {
          background-color: var(--bg-white);
          color: var(--primary-dark);
          border-color: var(--bg-white);
        }

        @media (max-width: 1024px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-title-light {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .hero-content-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 32px;
          }
          .hero-description-text {
            margin: 0 auto 28px;
          }
          .hero-actions-group {
            justify-content: center;
          }
          .hero-title {
            font-size: 2.2rem;
          }
          .hero-title-light {
            font-size: 1.3rem;
          }
          .hero-image-media {
            max-height: 260px;
          }
        }
      ` }} />
    </section>
  )
}

export default Hero
