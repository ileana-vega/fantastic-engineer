import React from 'react'
import { Monitor, Smartphone, Library, CheckCircle2, ArrowDown } from 'lucide-react'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import ContactForm from '../components/ContactForm'
import { productCategories } from '../data/products'

function HMI() {
  const data = productCategories.hmi

  return (
    <div className="hmi-page">
      {/* Banner Superior */}
      <Hero 
        title={data.title}
        badge="CEITSA ELECTROMECATRÓNICA"
        description="Pantallas táctiles industriales HMI Delta. Visualización clara, control gráfico intuitivo y conectividad multi-marca en México."
        isLarge={false}
      />

      {/* Introducción y Ventajas */}
      <section className="section">
        <div className="container">
          <div className="technical-intro-grid">
            <div className="technical-intro-text">
              <span className="tech-badge">Interfaz Hombe-Máquina</span>
              <h2 className="tech-section-title">Visualización y Control en Tiempo Real</h2>
              <p className="tech-paragraph">{data.introCommercial}</p>
              
              <div className="tech-scroll-hint" onClick={() => document.getElementById('catalogo-hmi').scrollIntoView({ behavior: 'smooth' })}>
                <span>Ver modelos de pantallas</span>
                <ArrowDown size={16} />
              </div>
            </div>
            
            <div className="technical-specs-quick-list">
              <h3 className="specs-list-title">Características Clave</h3>
              <div className="quick-specs-grid">
                {data.features.map((feature, idx) => (
                  <div key={idx} className="spec-card">
                    <CheckCircle2 size={18} className="spec-icon" />
                    <div>
                      <h5>{feature.title}</h5>
                      <p>{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactividad HMI Mockup */}
      <section className="section section-alt">
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div className="hmi-visual-block">
            <div className="hmi-frame">
              <div className="hmi-screen">
                <div className="hmi-status-bar">
                  <span>SISTEMA OK</span>
                  <span>14:35:00</span>
                </div>
                <div className="hmi-graphics">
                  <div className="graphic-tank">
                    <div className="liquid-level" style={{ height: '75%' }}></div>
                    <span className="tank-label">TANQUE 1 (75%)</span>
                  </div>
                  <div className="graphic-controls">
                    <div className="gauge-circle">
                      <span className="gauge-val">58 Hz</span>
                      <span className="gauge-lbl">VARIADOR</span>
                    </div>
                    <div className="control-btn active">BOMBA ON</div>
                  </div>
                </div>
              </div>
              <div className="hmi-physical-bezel">
                <div className="bezel-brand">DELTA</div>
              </div>
            </div>
          </div>

          <div>
            <span className="tech-badge">Integración Gráfica</span>
            <h2 className="tech-section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              Soluciones de Interfaz Gráfica DOP-100
            </h2>
            <p className="mb-4" style={{ color: 'var(--neutral-muted)' }}>
              Las pantallas de Delta facilitan al operador supervisar dinámicamente todo el proceso, interactuar de manera segura y diagnosticar fallas de forma inmediata.
            </p>
            <ul className="solutions-bullet-list">
              {data.solutions.map((sol, idx) => (
                <li key={idx} className="solution-bullet-item">
                  <CheckCircle2 size={16} />
                  <span>{sol}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Catálogo de HMIs */}
      <section className="section" id="catalogo-hmi" style={{ backgroundColor: 'var(--bg-white)' }}>
        <div className="container">
          <div className="text-center mb-6">
            <span className="tech-badge">Modelos Disponibles</span>
            <h2 className="tech-section-title text-center">Gama de Interfaces DOP-100</h2>
            <p className="section-desc" style={{ maxWidth: '650px' }}>
              Ofrecemos pantallas desde 4.3 pulgadas para espacio reducido hasta paneles avanzados de 12 pulgadas con comunicación Ethernet multipuerto.
            </p>
          </div>

          <div className="grid-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {data.items.map((item, idx) => (
              <ProductCard 
                key={idx}
                brand="Delta Electronics"
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                image={item.image}
                features={item.features}
                applications={item.applications}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Formulario de Cotización */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: '900px' }}>
          <ContactForm />
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .tech-badge {
          display: inline-block;
          font-family: var(--font-title);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--accent);
          margin-bottom: 12px;
        }

        .tech-section-title {
          font-size: 2rem;
          font-weight: 800;
          color: var(--primary-dark);
          margin-bottom: 16px;
          text-align: left;
        }

        .tech-paragraph {
          font-size: 1rem;
          color: var(--neutral-muted);
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .technical-intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }

        .tech-scroll-hint {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--primary);
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          font-family: var(--font-title);
        }

        .tech-scroll-hint:hover {
          color: var(--accent);
        }

        .specs-list-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--primary-dark);
          margin-bottom: 20px;
        }

        .quick-specs-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .spec-card {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .spec-icon {
          color: var(--accent);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .spec-card h5 {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 2px;
        }

        .spec-card p {
          font-size: 0.85rem;
          color: var(--neutral-muted);
          line-height: 1.4;
        }

        .solutions-bullet-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .solution-bullet-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.95rem;
          color: var(--neutral-dark);
        }

        .solution-bullet-item svg {
          color: var(--success);
          flex-shrink: 0;
        }

        /* HMI Interactive Mockup */
        .hmi-visual-block {
          display: flex;
          justify-content: center;
        }

        .hmi-frame {
          background-color: #334155; /* Gris metalico */
          border: 12px solid #1e293b;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          width: 100%;
          max-width: 420px;
          overflow: hidden;
        }

        .hmi-screen {
          background-color: #020617; /* Slate 950 */
          aspect-ratio: 4/3;
          display: flex;
          flex-direction: column;
          padding: 12px;
          color: #38bdf8;
          font-family: var(--font-body);
        }

        .hmi-status-bar {
          display: flex;
          justify-content: space-between;
          font-size: 0.7rem;
          border-bottom: 1px solid #1e293b;
          padding-bottom: 6px;
          margin-bottom: 12px;
          font-weight: bold;
          color: #10b981;
        }

        .hmi-graphics {
          display: flex;
          flex-grow: 1;
          gap: 20px;
        }

        .graphic-tank {
          flex: 1;
          border: 2px solid #334155;
          border-radius: 4px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .liquid-level {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(0deg, #0284c7 0%, #0ea5e9 100%);
          transition: var(--transition);
        }

        .tank-label {
          position: relative;
          z-index: 2;
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--bg-white);
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
        }

        .graphic-controls {
          flex: 1.2;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 4px 0;
        }

        .gauge-circle {
          border: 3px solid #e11d48;
          border-radius: 50%;
          aspect-ratio: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 80px;
          margin: 0 auto;
        }

        .gauge-val {
          font-size: 0.95rem;
          font-weight: bold;
          color: var(--bg-white);
        }

        .gauge-lbl {
          font-size: 0.55rem;
          color: #94a3b8;
        }

        .control-btn {
          background-color: #10b981;
          color: var(--bg-white);
          text-align: center;
          font-size: 0.75rem;
          font-weight: bold;
          padding: 6px 12px;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .hmi-physical-bezel {
          background-color: #1e293b;
          padding: 6px;
          text-align: center;
          border-top: 1px solid #334155;
        }

        .bezel-brand {
          font-family: var(--font-title);
          font-size: 0.8rem;
          font-weight: 900;
          color: #94a3b8;
          letter-spacing: 2px;
        }

        @media (max-width: 768px) {
          .technical-intro-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .tech-section-title {
            font-size: 1.75rem;
          }
        }
      ` }} />
    </div>
  )
}

export default HMI
