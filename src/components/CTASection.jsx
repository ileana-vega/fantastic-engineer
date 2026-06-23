import React from 'react'
import { Link } from 'react-router-dom'
import { PhoneCall } from 'lucide-react'
import { companyData } from '../data/company'

function CTASection({ 
  title = "Inicia tu proyecto de automatización con los expertos", 
  text = "Contáctanos hoy mismo para recibir asesoría personalizada en selección de equipo, soporte o desarrollo de tableros.",
  primaryBtnLabel = "Solicitar Cotización",
  primaryBtnLink = "/contacto",
  secondaryBtnLabel = "Hablar con un Asesor",
  secondaryBtnLink = "https://wa.me/5217294907147"
}) {
  return (
    <section className="cta-container">
      <div className="container cta-content animate-fade-in-up">
        <h2 className="cta-title">{title}</h2>
        <p className="cta-text">{text}</p>
        <div className="cta-buttons">
          <Link to={primaryBtnLink} className="btn btn-white">
            {primaryBtnLabel}
          </Link>
          <a 
            href={secondaryBtnLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline-white"
          >
            <PhoneCall size={18} /> {secondaryBtnLabel}
          </a>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .cta-container {
          position: relative;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%);
          padding: 80px 0;
          color: var(--bg-white);
          text-align: center;
          overflow: hidden;
        }

        /* Efecto de líneas decorativas industriales */
        .cta-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(255, 255, 255, 0.03) 20px,
            rgba(255, 255, 255, 0.03) 40px
          );
          pointer-events: none;
        }

        .cta-content {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .cta-title {
          font-size: 2.25rem;
          font-weight: 800;
          color: var(--bg-white);
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .cta-text {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 36px;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .cta-container .btn-outline-white {
          color: var(--bg-white);
          border: 2px solid rgba(255, 255, 255, 0.5);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 28px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
          font-family: var(--font-title);
          gap: 8px;
        }

        .cta-container .btn-outline-white:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-color: var(--bg-white);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .cta-title {
            font-size: 1.8rem;
          }
          .cta-text {
            font-size: 1rem;
          }
          .cta-buttons {
            flex-direction: column;
            align-items: stretch;
            max-width: 320px;
            margin: 0 auto;
          }
        }
      ` }} />
    </section>
  )
}

export default CTASection
