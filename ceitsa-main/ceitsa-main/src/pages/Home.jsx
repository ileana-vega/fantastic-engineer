import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Truck, Headphones, Wrench, CheckCircle } from 'lucide-react'
import Hero from '../components/Hero'
import CTASection from '../components/CTASection'
import ServiceCard from '../components/ServiceCard'
import { companyData } from '../data/company'
import { servicesData } from '../data/services'

function Home() {
  const heroActions = [
    { label: "Ver Controladores PLC", link: "/plcs", variant: "primary" },
    { label: "Hablar con un Asesor", link: companyData.social.whatsapp, variant: "outline", isExternal: true },
    { label: "Solicitar Cotización", link: "/contacto", variant: "secondary" }
  ]

  // Destacar solo 3 servicios para el inicio
  const featuredServices = servicesData.slice(0, 3)

  return (
    <div className="home-page">
      {/* Hero Principal */}
      <Hero 
        badge={companyData.fullName}
        title={companyData.slogan}
        subtitle="Compra en línea con"
        description={companyData.description}
        actions={heroActions}
        isLarge={true}
        imageSrc="https://imagedelivery.net/2ZqGOo-41jB62kGTlK0xEQ/admin/tmpl-41837/1775840754055-7neydf/public"
      />

      {/* Sección 1: Categorías / Productos Destacados */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-6 animate-fade-in-up">
            <span className="section-subtitle">Catálogo Especializado</span>
            <h2 className="section-title">Equipos de Automatización Destacados</h2>
            <p className="section-desc">
              Suministramos tecnología de punta para control de velocidad, lógica de procesos e interfaz táctil.
            </p>
          </div>

          <div className="grid-3">
            {/* PLC */}
            <div className="feature-category-card">
              <div className="category-img-wrapper">
                <img src="https://imagedelivery.net/2ZqGOo-41jB62kGTlK0xEQ/admin/tmpl-25010/1775755175154-sk02d0/public" alt="PLC Delta" />
              </div>
              <div className="category-content">
                <h3 className="category-title">Controladores PLC</h3>
                <p className="category-text">
                  Series DVP, AS y AH de Delta. Conectividad integrada, módulos de expansión y licencias de software gratis.
                </p>
                <Link to="/plcs" className="category-link">
                  Ver Gama de PLC <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Variadores */}
            <div className="feature-category-card">
              <div className="category-img-wrapper">
                <img src="https://imagedelivery.net/2ZqGOo-41jB62kGTlK0xEQ/odoo/tmpl/43207/uc-emc003-02b/primary/public" alt="Variadores de velocidad" />
              </div>
              <div className="category-content">
                <h3 className="category-title">Variadores de Frecuencia</h3>
                <p className="category-text">
                  Control preciso de motores trifásicos con las series EL, MS300 y C2000. Alta eficiencia de torque y ahorro de energía.
                </p>
                <Link to="/variadores" className="category-link">
                  Ver Variadores <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* HMI */}
            <div className="feature-category-card">
              <div className="category-img-wrapper">
                <img src="https://imagedelivery.net/2ZqGOo-41jB62kGTlK0xEQ/odoo/tmpl/25160/dop-103wq/primary/public" alt="HMI DOP-100" />
              </div>
              <div className="category-content">
                <h3 className="category-title">Interfaces HMI</h3>
                <p className="category-text">
                  Pantallas táctiles DOP-100 de alta resolución. Acceso a recetas, registro histórico de alarmas y monitoreo remoto por VNC.
                </p>
                <Link to="/hmi" className="category-link">
                  Ver Pantallas HMI <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2: Distribución de Marcas */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-6">
            <span className="section-subtitle">Distribuidor Autorizado</span>
            <h2 className="section-title">Marcas Líderes en el Mercado</h2>
            <p className="section-desc">
              Garantizamos la originalidad y el respaldo de fábrica en todos los equipos que comercializamos.
            </p>
          </div>

          <div className="brands-showcase">
            {companyData.brands.map((brand, idx) => (
              <div key={idx} className="brand-logo-card" title={brand.desc}>
                <img src={brand.logo} alt={brand.name} className="brand-logo-img" />
                <span className="brand-name-tag">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección 3: Ventajas Competitivas */}
      <section className="section">
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <span className="section-subtitle">¿Por qué elegirnos?</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              Soluciones Integrales para la Industria Mexicana
            </h2>
            <p className="mb-4" style={{ color: 'var(--neutral-muted)' }}>
              En CEITSA Electromecatrónica no somos solo una tienda de suministros. Somos tu aliado estratégico de ingeniería para el soporte, refaccionamiento e integración de tus proyectos de automatización.
            </p>

            <div className="advantages-list">
              <div className="advantage-item">
                <div className="advantage-icon-box">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4>Garantía y Autenticidad</h4>
                  <p>Equipos 100% originales directamente de las marcas líderes (Delta, SMC, Turck, Chint).</p>
                </div>
              </div>

              <div className="advantage-item">
                <div className="advantage-icon-box">
                  <Headphones size={24} />
                </div>
                <div>
                  <h4>Soporte de Ingeniería Inmediato</h4>
                  <p>Resolvemos tus dudas técnicas de programación y dimensionamiento en el menor tiempo.</p>
                </div>
              </div>

              <div className="advantage-item">
                <div className="advantage-icon-box">
                  <Truck size={24} />
                </div>
                <div>
                  <h4>Envíos a todo México</h4>
                  <p>Logística ágil y segura para hacer llegar refacciones críticas hasta las puertas de tu planta.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="advantages-visual">
            <div className="visual-card">
              <div className="badge-overlay">CEITSA</div>
              <img 
                src="https://imagedelivery.net/2ZqGOo-41jB62kGTlK0xEQ/odoo/tmpl/43822/epdcei-delta-dvp-dop/primary/public" 
                alt="Automatización Industrial" 
                className="visual-img"
              />
              <div className="visual-stats-card">
                <span className="stats-number">100%</span>
                <span className="stats-label">Soporte Técnico</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4: Servicios Destacados */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-6">
            <span className="section-subtitle">Servicios Especializados</span>
            <h2 className="section-title">Soluciones que Impulsan tu Productividad</h2>
            <p className="section-desc">
              Desde el refaccionamiento urgente hasta el comisionamiento de proyectos complejos llave en mano.
            </p>
          </div>

          <div className="grid-3">
            {featuredServices.map(service => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                icon={service.icon}
                desc={service.desc}
                details={service.details}
              />
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/servicios" className="btn btn-secondary">
              Ver Todos los Servicios <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Llamado a la Acción Final */}
      <CTASection />

      {/* Estilos específicos para la Home */}
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

        /* Category Card */
        .feature-category-card {
          background-color: var(--bg-white);
          border: 1px solid var(--neutral-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
          display: flex;
          flex-direction: column;
        }

        .feature-category-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(255, 107, 53, 0.2);
        }

        .category-img-wrapper {
          height: 200px;
          background-color: var(--neutral-light);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          border-bottom: 1px solid var(--neutral-border);
        }

        .category-img-wrapper img {
          max-height: 90%;
          max-width: 90%;
          object-fit: contain;
          transition: var(--transition);
        }

        .feature-category-card:hover .category-img-wrapper img {
          transform: scale(1.05);
        }

        .category-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .category-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--primary-dark);
          margin-bottom: 10px;
        }

        .category-text {
          font-size: 0.9rem;
          color: var(--neutral-muted);
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .category-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--accent);
          font-weight: 700;
          font-size: 0.9rem;
          font-family: var(--font-title);
        }

        .category-link:hover {
          color: var(--accent-dark);
          gap: 10px;
        }

        /* Brands Showcase */
        .brands-showcase {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 16px;
        }

        .brand-logo-card {
          background-color: var(--bg-white);
          border: 1px solid var(--neutral-border);
          border-radius: var(--radius-md);
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
          cursor: pointer;
        }

        .brand-logo-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
          border-color: var(--primary);
        }

        .brand-logo-img {
          height: 60px;
          width: auto;
          object-fit: contain;
          margin-bottom: 12px;
        }

        .brand-name-tag {
          font-family: var(--font-title);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary);
        }

        /* Advantages */
        .advantages-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .advantage-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .advantage-icon-box {
          width: 50px;
          height: 50px;
          background-color: rgba(255, 107, 53, 0.08);
          border-radius: var(--radius-sm);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .advantage-item h4 {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--primary-dark);
          margin-bottom: 4px;
        }

        .advantage-item p {
          font-size: 0.9rem;
          color: var(--neutral-muted);
        }

        /* Visual Card */
        .advantages-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .visual-card {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 4px solid var(--bg-white);
          max-width: 440px;
        }

        .visual-img {
          width: 100%;
          height: auto;
          display: block;
        }

        .badge-overlay {
          position: absolute;
          top: 20px;
          left: 20px;
          background-color: var(--primary);
          color: var(--bg-white);
          font-family: var(--font-title);
          font-weight: 800;
          font-size: 0.8rem;
          padding: 6px 14px;
          border-radius: 50px;
          letter-spacing: 1px;
          box-shadow: var(--shadow-sm);
        }

        .visual-stats-card {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background-color: var(--bg-white);
          padding: 16px 24px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stats-number {
          font-family: var(--font-title);
          font-size: 2rem;
          font-weight: 800;
          color: var(--accent);
          line-height: 1;
        }

        .stats-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--neutral-dark);
          text-transform: uppercase;
        }

        @media (max-width: 1024px) {
          .brands-showcase {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .brands-showcase {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .brand-logo-card {
            padding: 16px;
          }
          .brand-logo-img {
            height: 45px;
          }
          .section-title {
            font-size: 1.8rem;
          }
          .visual-stats-card {
            padding: 10px 16px;
          }
          .stats-number {
            font-size: 1.5rem;
          }
        }
      ` }} />
    </div>
  )
}

export default Home
