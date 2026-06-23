import React from 'react'
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'
import { companyData } from '../data/company'

function Contacto() {
  return (
    <div className="contacto-page">
      {/* Banner Superior */}
      <Hero 
        title="Contacto Comercial y Soporte"
        badge="CEITSA ELECTROMECATRÓNICA"
        description="Ponte en contacto con nuestro departamento de ventas técnicas, cotizaciones y soporte industrial."
        isLarge={false}
      />

      <section className="section">
        <div className="container contact-grid-wrapper">
          {/* Columna Izquierda: Datos de Contacto y Mapa */}
          <div className="contact-details-block animate-fade-in-up">
            <span className="contact-small-badge">Atención Directa</span>
            <h2 className="contact-main-title">CEITSA Toluca</h2>
            <p className="contact-intro-p">
              Estamos ubicados en Toluca (Metepec), con capacidad de envío nacional e ingenieros listos para visitarte en tu planta o taller industrial.
            </p>

            {/* Listado de Canales */}
            <div className="channels-list">
              <div className="channel-card">
                <MapPin size={24} className="channel-icon" />
                <div>
                  <h5>Dirección Oficial</h5>
                  <p>{companyData.address}</p>
                </div>
              </div>

              <div className="channel-card">
                <Phone size={22} className="channel-icon" />
                <div>
                  <h5>Línea Telefónica</h5>
                  <a href={`tel:${companyData.phone.replace(/\s+/g, '')}`} className="channel-link">
                    {companyData.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="channel-card">
                <Mail size={22} className="channel-icon" />
                <div>
                  <h5>Cotizaciones por Correo</h5>
                  <a href={`mailto:${companyData.email}`} className="channel-link">
                    {companyData.email}
                  </a>
                </div>
              </div>

              <div className="channel-card">
                <Clock size={22} className="channel-icon" />
                <div>
                  <h5>Horarios de Atención</h5>
                  <p>{companyData.schedule.weekdays}</p>
                  <p>{companyData.schedule.saturdays}</p>
                  <p className="schedule-note">{companyData.schedule.note}</p>
                </div>
              </div>
            </div>

            {/* Botón WhatsApp */}
            <div style={{ marginTop: '24px' }}>
              <a 
                href={companyData.social.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary whatsapp-button-direct"
              >
                <MessageSquare size={18} /> Conversar en WhatsApp
              </a>
            </div>

            {/* Mapa Embebido */}
            <div className="map-frame-wrapper">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.504245648834!2d-99.61058292478473!3d19.293026381951593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd8bd0268595a5%3A0xcb1b590e806cbf1!2sPaseo%20Tollocan%20Ote.%20209%2C%20Francisco%20I%20Madero%2C%2052140%20Toluca%20de%20Lerdo%2C%20M%C3%A9x.!5e0!3m2!1ses-419!2smx!4v1716942000000!5m2!1ses-419!2smx"
                width="100%" 
                height="320" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de CEITSA Paseo Tollocan"
                className="embed-map-iframe"
              ></iframe>
            </div>
          </div>

          {/* Columna Derecha: Formulario */}
          <div className="contact-form-block">
            <ContactForm />
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .contact-grid-wrapper {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 48px;
          align-items: start;
        }

        .contact-small-badge {
          display: inline-block;
          font-family: var(--font-title);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--accent);
          margin-bottom: 12px;
        }

        .contact-main-title {
          font-size: 2.25rem;
          font-weight: 800;
          color: var(--primary-dark);
          margin-bottom: 16px;
        }

        .contact-intro-p {
          font-size: 0.95rem;
          color: var(--neutral-muted);
          margin-bottom: 32px;
          line-height: 1.6;
        }

        .channels-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .channel-card {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .channel-icon {
          color: var(--primary);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .channel-card h5 {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--primary-dark);
          margin-bottom: 2px;
        }

        .channel-card p {
          font-size: 0.9rem;
          color: var(--neutral-muted);
          line-height: 1.4;
        }

        .schedule-note {
          font-size: 0.8rem !important;
          color: var(--accent) !important;
          font-weight: 600;
          margin-top: 4px;
        }

        .channel-link {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--primary);
        }

        .channel-link:hover {
          color: var(--accent);
          text-decoration: underline;
        }

        .whatsapp-button-direct {
          background-color: #25d366;
          border-color: #25d366;
          color: var(--bg-white);
          box-shadow: 0 4px 6px -1px rgba(37, 211, 102, 0.3);
        }

        .whatsapp-button-direct:hover {
          background-color: #20ba5a;
          border-color: #20ba5a;
          transform: translateY(-2px);
          box-shadow: 0 6px 12px -1px rgba(37, 211, 102, 0.4);
        }

        /* Map styling */
        .map-frame-wrapper {
          margin-top: 36px;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--neutral-border);
        }

        .embed-map-iframe {
          display: block;
        }

        @media (max-width: 900px) {
          .contact-grid-wrapper {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      ` }} />
    </div>
  )
}

export default Contacto
