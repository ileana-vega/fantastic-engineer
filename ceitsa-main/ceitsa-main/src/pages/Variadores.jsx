import React from 'react'
import { Activity, Gauge, Zap, CheckCircle2, ArrowDown } from 'lucide-react'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import ContactForm from '../components/ContactForm'
import { productCategories } from '../data/products'

function Variadores() {
  const data = productCategories.variadores

  return (
    <div className="variadores-page">
      {/* Banner Superior */}
      <Hero 
        title={data.title}
        badge="CEITSA ELECTROMECATRÓNICA"
        description="Especialistas en variadores de frecuencia Delta. Reducción de consumo de energía y control preciso de motores en México."
        isLarge={false}
      />

      {/* Introducción y Especificaciones */}
      <section className="section">
        <div className="container">
          <div className="technical-intro-grid">
            <div className="technical-intro-text">
              <span className="tech-badge">Eficiencia Energética</span>
              <h2 className="tech-section-title">Control y Protección de Motores</h2>
              <p className="tech-paragraph">{data.introCommercial}</p>
              
              <div className="tech-scroll-hint" onClick={() => document.getElementById('catalogo-variadores').scrollIntoView({ behavior: 'smooth' })}>
                <span>Ver catálogo de variadores</span>
                <ArrowDown size={16} />
              </div>
            </div>
            
            <div className="technical-specs-quick-list">
              <h3 className="specs-list-title">Beneficios Principales</h3>
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

      {/* Infografía de Eficiencia */}
      <section className="section section-alt">
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <span className="tech-badge">Ahorro y Sustentabilidad</span>
            <h2 className="tech-section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              Optimización del Consumo Eléctrico
            </h2>
            <p className="mb-4" style={{ color: 'var(--neutral-muted)' }}>
              El uso de variadores de frecuencia en bombas y ventiladores sigue la ley de afinidad, lo que significa que reducir la velocidad del motor en un 20% reduce el consumo de energía en casi un 50%.
            </p>
            <div className="energy-chart-container">
              <div className="chart-bar-group">
                <span className="bar-label">Arranque Directo (100% Energía)</span>
                <div className="chart-bar full">100%</div>
              </div>
              <div className="chart-bar-group">
                <span className="bar-label">Con Variador Delta (Hasta 40% Ahorro)</span>
                <div className="chart-bar saving">60%</div>
              </div>
            </div>
          </div>

          <div className="solutions-container">
            <h3 className="specs-list-title" style={{ marginBottom: '16px' }}>Soluciones de Control de Velocidad</h3>
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

      {/* Catálogo de Variadores */}
      <section className="section" id="catalogo-variadores" style={{ backgroundColor: 'var(--bg-white)' }}>
        <div className="container">
          <div className="text-center mb-6">
            <span className="tech-badge">Modelos Industriales</span>
            <h2 className="tech-section-title text-center">Familias de Variadores Delta</h2>
            <p className="section-desc" style={{ maxWidth: '650px' }}>
              Desde micro variadores compactos para maquinaria básica hasta equipos robustos de alto torque para trituración y carga pesada.
            </p>
          </div>

          <div className="grid-3">
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

        /* Energy Chart Mockup */
        .energy-chart-container {
          margin-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .chart-bar-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .bar-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--neutral-dark);
        }

        .chart-bar {
          padding: 10px 16px;
          border-radius: var(--radius-sm);
          font-family: var(--font-title);
          font-weight: bold;
          font-size: 0.9rem;
          color: var(--bg-white);
          transition: var(--transition);
        }

        .chart-bar.full {
          background-color: var(--neutral-muted);
          width: 100%;
        }

        .chart-bar.saving {
          background: linear-gradient(90deg, var(--accent) 0%, var(--accent-light) 100%);
          width: 60%;
          box-shadow: 0 4px 10px rgba(255, 107, 53, 0.3);
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

export default Variadores
