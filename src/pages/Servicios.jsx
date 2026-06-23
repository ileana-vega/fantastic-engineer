import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, HelpCircle } from 'lucide-react'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'
import { servicesData } from '../data/services'

function Servicios() {
  return (
    <div className="services-page">
      {/* Banner Superior */}
      <Hero 
        title="Servicios de Ingeniería e Integración"
        badge="CEITSA ELECTROMECATRÓNICA"
        description="Brindamos soporte técnico, programación de PLC/HMI, armado de tableros eléctricos y puesta en marcha de procesos industriales."
        isLarge={false}
      />

      {/* Grid de Todos los Servicios */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-6">
            <span className="section-subtitle">Nuestras Capacidades</span>
            <h2 className="section-title">Soluciones de Ingeniería Industrial</h2>
            <p className="section-desc">
              Nuestro equipo de ingenieros está capacitado para dar soporte integral a tus sistemas de automatización, reduciendo tiempos muertos y optimizando la productividad.
            </p>
          </div>

          <div className="grid-3">
            {servicesData.map(service => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                icon={service.icon}
                desc={service.desc}
                details={service.details}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Metodología / Flujo de Trabajo */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-6">
            <span className="section-subtitle">¿Cómo trabajamos?</span>
            <h2 className="section-title">Metodología de Ejecución de Proyectos</h2>
            <p className="section-desc">
              Seguimos un proceso riguroso y transparente desde el levantamiento de requerimientos hasta la puesta en marcha oficial en tu planta.
            </p>
          </div>

          {/* Workflow Flowchart */}
          <div className="workflow-container">
            <div className="workflow-step">
              <span className="step-num">01</span>
              <h4>Levantamiento</h4>
              <p>Análisis de necesidades en sitio y recopilación de diagramas mecánicos/eléctricos.</p>
            </div>
            
            <div className="workflow-arrow">
              <ArrowRight size={24} />
            </div>

            <div className="workflow-step">
              <span className="step-num">02</span>
              <h4>Diseño y Propuesta</h4>
              <p>Desarrollo de planos eléctricos preliminares, selección de equipo y cotización detallada.</p>
            </div>
            
            <div className="workflow-arrow">
              <ArrowRight size={24} />
            </div>

            <div className="workflow-step">
              <span className="step-num">03</span>
              <h4>Ensamble y Lógica</h4>
              <p>Armado de tableros conforme a normas y programación estructurada de PLCs e interfaces HMIs.</p>
            </div>
            
            <div className="workflow-arrow">
              <ArrowRight size={24} />
            </div>

            <div className="workflow-step">
              <span className="step-num">04</span>
              <h4>Arranque y Entrega</h4>
              <p>Comisionamiento físico en planta, pruebas con carga real, planos finales y capacitación a operadores.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <CTASection 
        title="¿Tienes un requerimiento de ingeniería específico?"
        text="Agenda una llamada técnica con uno de nuestros ingenieros de aplicaciones para platicar sobre tu proyecto de control."
      />

      <style dangerouslySetInnerHTML={{ __html: `
        .section-subtitle {
          display: inline-block;
          font-family: var(--font-title);
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--accent);
          margin-bottom: 8px;
        }

        .section-title {
          font-size: 2.25rem;
          font-weight: 800;
          color: var(--primary-dark);
          margin-bottom: 16px;
        }

        .section-desc {
          font-size: 1.05rem;
          color: var(--neutral-muted);
          max-width: 700px;
          margin: 0 auto;
        }

        /* Workflow Flowchart */
        .workflow-container {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          margin-top: 48px;
        }

        .workflow-step {
          background-color: var(--bg-white);
          border: 1px solid var(--neutral-border);
          border-radius: var(--radius-md);
          padding: 28px;
          flex: 1;
          position: relative;
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
        }

        .workflow-step:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: var(--primary-light);
        }

        .step-num {
          font-family: var(--font-title);
          font-size: 2.5rem;
          font-weight: 800;
          color: rgba(255, 107, 53, 0.15);
          position: absolute;
          top: 12px;
          right: 20px;
          line-height: 1;
        }

        .workflow-step h4 {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--primary-dark);
          margin-bottom: 12px;
          position: relative;
        }

        .workflow-step p {
          font-size: 0.85rem;
          color: var(--neutral-muted);
          line-height: 1.5;
        }

        .workflow-arrow {
          display: flex;
          align-items: center;
          height: 120px;
          color: var(--accent);
          opacity: 0.6;
        }

        @media (max-width: 1024px) {
          .workflow-container {
            flex-direction: column;
            gap: 24px;
            align-items: stretch;
          }
          .workflow-arrow {
            display: none; /* Ocultar flechas en responsive vertical */
          }
          .step-num {
            font-size: 2rem;
          }
        }
      ` }} />
    </div>
  )
}

export default Servicios
