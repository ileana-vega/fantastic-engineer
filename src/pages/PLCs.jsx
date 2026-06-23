import React from 'react'
import { Cpu, Network, CheckCircle2, Info, ArrowDown } from 'lucide-react'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import ContactForm from '../components/ContactForm'
import { productCategories } from '../data/products'

function PLCs() {
  const data = productCategories.plcs

  return (
    <div className="plcs-page">
      {/* Banner Superior */}
      <Hero 
        title={data.title}
        badge="CEITSA ELECTROMECATRÓNICA"
        description="Venta de equipo, refaccionamiento, asesoría y soporte técnico de PLCs Delta en México."
        isLarge={false}
      />

      {/* Introducción y Características Generales */}
      <section className="section">
        <div className="container">
          <div className="technical-intro-grid">
            <div className="technical-intro-text">
              <span className="tech-badge">Resumen Comercial</span>
              <h2 className="tech-section-title">Control Lógico Robusto y Confiable</h2>
              <p className="tech-paragraph">{data.introCommercial}</p>
              
              <div className="tech-scroll-hint" onClick={() => document.getElementById('catalogo-familias').scrollIntoView({ behavior: 'smooth' })}>
                <span>Explorar familias de PLC</span>
                <ArrowDown size={16} />
              </div>
            </div>
            
            <div className="technical-specs-quick-list">
              <h3 className="specs-list-title">Características Destacadas</h3>
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

      {/* Protocolos de Comunicación */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-6">
            <span className="tech-badge">Conectividad Abierta</span>
            <h2 className="tech-section-title text-center">Protocolos de Comunicación Soportados</h2>
            <p className="section-desc" style={{ maxWidth: '650px' }}>
              Los controladores Delta ofrecen compatibilidad nativa con una amplia variedad de protocolos de automatización para interconectarse con tus sensores, HMI y sistemas SCADA.
            </p>
          </div>

          <div className="protocols-table-wrapper">
            <table className="protocols-table">
              <thead>
                <tr>
                  <th>Protocolo</th>
                  <th>Medio Físico</th>
                  <th>Aplicación Principal</th>
                </tr>
              </thead>
              <tbody>
                {data.protocols.map((protocol, idx) => (
                  <tr key={idx}>
                    <td className="protocol-name">
                      <Network size={16} style={{ color: 'var(--accent)', marginRight: '8px', verticalAlign: 'middle' }} />
                      {protocol.name}
                    </td>
                    <td className="protocol-medium">{protocol.type}</td>
                    <td className="protocol-desc">{protocol.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sección de Soluciones / Aplicaciones Posibles */}
      <section className="section">
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div className="solutions-visual-block">
            <div className="blueprint-card">
              <div className="blueprint-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="blueprint-title">Industrial Diagram - PLC Control</span>
              </div>
              <div className="blueprint-body">
                <div className="blueprint-node main-node">PLC CPU</div>
                <div className="blueprint-connections">
                  <div className="conn-line"><span>Modbus TCP</span> ➔ HMI Touch</div>
                  <div className="conn-line"><span>CANopen</span> ➔ Servodrive</div>
                  <div className="conn-line"><span>I/O Exp</span> ➔ Sensores / Solenoides</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="tech-badge">Aplicaciones Posibles</span>
            <h2 className="tech-section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              Soluciones de Control Automatizado
            </h2>
            <p className="mb-4" style={{ color: 'var(--neutral-muted)' }}>
              La versatilidad de los controladores Lógicos Programables Delta los hace idóneos para automatizar una vasta gama de maquinarias e infraestructuras industriales:
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

      {/* Catálogo de Familias de PLC */}
      <section className="section section-alt" id="catalogo-familias">
        <div className="container">
          <div className="text-center mb-6">
            <span className="tech-badge">Modelos Disponibles</span>
            <h2 className="tech-section-title text-center">Familias de PLC Delta</h2>
            <p className="section-desc" style={{ maxWidth: '650px' }}>
              Elige la familia que mejor se adapte al tamaño de tu proyecto. Ofrecemos CPUs y accesorios originales listos para embarcar.
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
      <section className="section" style={{ backgroundColor: 'var(--bg-white)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <ContactForm />
        </div>
      </section>

      {/* Estilos técnicos CSS */}
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

        /* Protocolos Table */
        .protocols-table-wrapper {
          overflow-x: auto;
          background-color: var(--bg-white);
          border: 1px solid var(--neutral-border);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
        }

        .protocols-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .protocols-table th, .protocols-table td {
          padding: 16px 24px;
          border-bottom: 1px solid var(--neutral-border);
        }

        .protocols-table th {
          background-color: var(--primary-dark);
          color: var(--bg-white);
          font-family: var(--font-title);
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .protocols-table tr:last-child td {
          border-bottom: none;
        }

        .protocol-name {
          font-weight: 700;
          color: var(--primary);
          font-family: var(--font-title);
        }

        .protocol-medium {
          font-size: 0.85rem;
          font-weight: 600;
          background-color: var(--neutral-light);
          padding: 4px 10px;
          border-radius: 4px;
          display: inline-block;
          border: 1px solid var(--neutral-border);
        }

        .protocol-desc {
          font-size: 0.9rem;
          color: var(--neutral-muted);
        }

        /* Solutions Bullet List */
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

        /* Blueprint Mockup Visual */
        .solutions-visual-block {
          display: flex;
          justify-content: center;
        }

        .blueprint-card {
          background-color: #1e293b; /* Dark slate */
          color: rgba(255, 255, 255, 0.8);
          border-radius: var(--radius-md);
          overflow: hidden;
          width: 100%;
          max-width: 440px;
          font-family: monospace;
          border: 1px solid #334155;
          box-shadow: var(--shadow-lg);
        }

        .blueprint-header {
          background-color: #0f172a;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 6px;
          border-bottom: 1px solid #334155;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .dot.red { background-color: var(--danger); }
        .dot.yellow { background-color: var(--warning); }
        .dot.green { background-color: var(--success); }

        .blueprint-title {
          font-size: 0.75rem;
          color: #94a3b8;
          margin-left: 8px;
        }

        .blueprint-body {
          padding: 24px;
        }

        .blueprint-node {
          background-color: rgba(255, 107, 53, 0.1);
          border: 1px solid var(--accent);
          color: var(--accent-light);
          padding: 10px;
          border-radius: var(--radius-sm);
          text-align: center;
          font-weight: bold;
          margin-bottom: 24px;
        }

        .blueprint-connections {
          display: flex;
          flex-direction: column;
          gap: 12px;
          font-size: 0.8rem;
        }

        .conn-line {
          padding-left: 12px;
          border-left: 2px dashed #475569;
        }

        .conn-line span {
          color: #38bdf8;
          font-weight: bold;
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

export default PLCs
