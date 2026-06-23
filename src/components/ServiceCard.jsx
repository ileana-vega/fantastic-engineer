import React from 'react'
import * as Icons from 'lucide-react'

function ServiceCard({ title, icon, desc, details = [] }) {
  // Buscar dinámicamente el ícono de Lucide, o usar HelpCircle por defecto
  const IconComponent = Icons[icon] || Icons.HelpCircle

  return (
    <article className="service-card animate-fade-in-up">
      <div className="service-card-icon">
        <IconComponent size={32} strokeWidth={1.75} />
      </div>
      
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-desc">{desc}</p>
      
      {details.length > 0 && (
        <ul className="service-details-list">
          {details.map((detail, idx) => (
            <li key={idx} className="service-detail-item">
              <span className="bullet-indicator">•</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .service-details-list {
          margin-top: 8px;
          padding-top: 12px;
          border-top: 1px solid var(--neutral-border);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .service-detail-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--neutral-muted);
          line-height: 1.4;
        }

        .bullet-indicator {
          color: var(--accent);
          font-weight: bold;
          font-size: 1.1rem;
          line-height: 1;
        }
      ` }} />
    </article>
  )
}

export default ServiceCard
