import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Send, CheckCircle2 } from 'lucide-react'

function ContactForm({ prefilledProduct: propPrefilledProduct }) {
  const location = useLocation()
  
  // Lista de opciones para el selector
  const selectOptions = [
    "-- Selecciona una opción --",
    "PLC Delta Serie DVP",
    "PLC Delta Serie AS",
    "PLC Delta Serie AH",
    "Starter Kits de Programación",
    "Módulos de Expansión",
    "Fuentes de Alimentación",
    "Variador Delta Serie VFD-EL",
    "Variador Delta Serie VFD-EL-W",
    "Variador Delta Serie MS300",
    "Variador Delta Serie C2000",
    "Variador Delta Serie C2000+",
    "Pantallas HMI DOP-100 Básica",
    "Pantallas HMI DOP-100 Avanzada",
    "Refaccionamiento Industrial",
    "Asesoría Técnica y Selección",
    "Integración de Proyectos",
    "Soporte Técnico Especializado",
    "Programación de PLC / HMI",
    "Diseño y Armado de Tableros",
    "Puesta en Marcha (Comisionamiento)",
    "Otro asunto / Ventas generales"
  ]

  // Estado del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    correo: '',
    ciudad: '',
    producto_interes: '',
    mensaje: '',
    aceptar_privacidad: false
  })

  // Estado de validación y de envío
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  // Verificar si hay producto pre-rellenado (desde props o desde react-router state)
  useEffect(() => {
    const productToPrefill = propPrefilledProduct || location.state?.prefilledProduct
    if (productToPrefill) {
      // Intentar encontrar el match más cercano en las opciones
      const matchedOption = selectOptions.find(
        opt => opt.toLowerCase().includes(productToPrefill.toLowerCase())
      )
      if (matchedOption) {
        setFormData(prev => ({ ...prev, producto_interes: matchedOption }))
      } else {
        // Fallback: usar el texto literal
        setFormData(prev => ({ ...prev, producto_interes: productToPrefill }))
      }
    }
  }, [propPrefilledProduct, location.state])

  // Manejar cambios en campos
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    // Limpiar error del campo
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }))
    }
  }

  // Validar campos
  const validateForm = () => {
    const tempErrors = {}
    if (!formData.nombre.trim()) tempErrors.nombre = "El nombre es obligatorio."
    if (!formData.empresa.trim()) tempErrors.empresa = "La empresa es obligatoria."
    if (!formData.telefono.trim()) tempErrors.telefono = "El teléfono es obligatorio."
    
    // Validación de correo electrónico
    if (!formData.correo.trim()) {
      tempErrors.correo = "El correo electrónico es obligatorio."
    } else if (!/\S+@\S+\.\S+/.test(formData.correo)) {
      tempErrors.correo = "El formato de correo no es válido."
    }

    if (!formData.ciudad.trim()) tempErrors.ciudad = "La ciudad es obligatoria."
    
    if (!formData.producto_interes || formData.producto_interes === selectOptions[0]) {
      tempErrors.producto_interes = "Selecciona un producto o servicio de interés."
    }

    if (!formData.mensaje.trim()) tempErrors.mensaje = "Por favor, escribe un mensaje con tus requerimientos."
    
    if (!formData.aceptar_privacidad) {
      tempErrors.aceptar_privacidad = "Debes aceptar los términos de privacidad."
    }

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  // Enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    /* ==========================================================================
       CONFIGURACIÓN DE ENVÍO DE FORMULARIO
       ==========================================================================
       Para conectar este formulario a un servicio real, puedes elegir uno de estos métodos:

       OPCIÓN A: FORMSPREE
       1. Regístrate en Formspree.io y crea un formulario. Obtendrás un endpoint ID (ej: "myyjgqpe").
       2. Reemplaza el código de simulación de abajo con un fetch real:
          
          fetch("https://formspree.io/f/SU_ID_AQUÍ", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
          .then(response => {
            if (response.ok) {
              setSubmitStatus('success');
              resetForm();
            } else {
              setSubmitStatus('error');
            }
          })
          .catch(() => setSubmitStatus('error'))
          .finally(() => setIsSubmitting(false));

       OPCIÓN B: BACKEND PROPIO (Nginx + PHP / Node.js)
       1. Envía los datos con fetch a tu script de backend:
          fetch("/api/send-email.php", {
             method: "POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify(formData)
          })

       OPCIÓN C: NETLIFY FORMS
       1. Añade atributos 'data-netlify="true"' y 'name="contact-form"' al elemento <form>
       ========================================================================== */

    // Simulación de envío (1.5 segundos de carga para efectos estéticos premium)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      // Limpiar campos tras envío exitoso
      setFormData({
        nombre: '',
        empresa: '',
        telefono: '',
        correo: '',
        ciudad: '',
        producto_interes: '',
        mensaje: '',
        aceptar_privacidad: false
      })
    }, 1500)
  }

  return (
    <div className="form-wrapper" id="cotizacion-form">
      {submitStatus === 'success' ? (
        <div className="success-cardanimate-fade-in text-center">
          <div className="success-icon-wrapper">
            <CheckCircle2 size={64} className="success-icon" />
          </div>
          <h3 className="success-title">¡Solicitud Enviada con Éxito!</h3>
          <p className="success-text">
            Hemos recibido tus datos correctamente. Un asesor técnico de <strong>CEITSA Electromecatrónica</strong> analizará tus requerimientos y se pondrá en contacto contigo en un plazo menor a 24 horas hábiles.
          </p>
          <button 
            onClick={() => setSubmitStatus(null)} 
            className="btn btn-secondary" 
            style={{ marginTop: '24px' }}
          >
            Enviar otra solicitud
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <h3 className="form-title">Solicitar Cotización y Asesoría</h3>
          <p className="form-intro-desc text-center mb-4">
            Rellena el siguiente formulario y un ingeniero especializado te contactará para detallar tu requerimiento.
          </p>

          <div className="form-grid">
            {/* Nombre */}
            <div className="form-group">
              <label htmlFor="nombre" className="form-label">Nombre Completo *</label>
              <input 
                type="text" 
                id="nombre" 
                name="nombre" 
                value={formData.nombre}
                onChange={handleChange}
                className={`form-input ${errors.nombre ? 'input-error' : ''}`}
                placeholder="Ej. Ing. Juan Pérez"
              />
              {errors.nombre && <span className="form-error">{errors.nombre}</span>}
            </div>

            {/* Empresa */}
            <div className="form-group">
              <label htmlFor="empresa" className="form-label">Empresa *</label>
              <input 
                type="text" 
                id="empresa" 
                name="empresa" 
                value={formData.empresa}
                onChange={handleChange}
                className={`form-input ${errors.empresa ? 'input-error' : ''}`}
                placeholder="Nombre de tu empresa o negocio"
              />
              {errors.empresa && <span className="form-error">{errors.empresa}</span>}
            </div>

            {/* Teléfono */}
            <div className="form-group">
              <label htmlFor="telefono" className="form-label">Teléfono / WhatsApp *</label>
              <input 
                type="tel" 
                id="telefono" 
                name="telefono" 
                value={formData.telefono}
                onChange={handleChange}
                className={`form-input ${errors.telefono ? 'input-error' : ''}`}
                placeholder="Ej. 722 123 4567"
              />
              {errors.telefono && <span className="form-error">{errors.telefono}</span>}
            </div>

            {/* Correo */}
            <div className="form-group">
              <label htmlFor="correo" className="form-label">Correo Electrónico *</label>
              <input 
                type="email" 
                id="correo" 
                name="correo" 
                value={formData.correo}
                onChange={handleChange}
                className={`form-input ${errors.correo ? 'input-error' : ''}`}
                placeholder="correo@empresa.com"
              />
              {errors.correo && <span className="form-error">{errors.correo}</span>}
            </div>

            {/* Ciudad */}
            <div className="form-group">
              <label htmlFor="ciudad" className="form-label">Ciudad / Estado *</label>
              <input 
                type="text" 
                id="ciudad" 
                name="ciudad" 
                value={formData.ciudad}
                onChange={handleChange}
                className={`form-input ${errors.ciudad ? 'input-error' : ''}`}
                placeholder="Ej. Toluca, Estado de México"
              />
              {errors.ciudad && <span className="form-error">{errors.ciudad}</span>}
            </div>

            {/* Producto de interés */}
            <div className="form-group">
              <label htmlFor="producto_interes" className="form-label">Equipo o Servicio de Interés *</label>
              <select 
                id="producto_interes" 
                name="producto_interes" 
                value={formData.producto_interes}
                onChange={handleChange}
                className={`form-select ${errors.producto_interes ? 'input-error' : ''}`}
              >
                {selectOptions.map((opt, idx) => (
                  <option key={idx} value={idx === 0 ? '' : opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {errors.producto_interes && <span className="form-error">{errors.producto_interes}</span>}
            </div>

            {/* Mensaje */}
            <div className="form-group form-group-full">
              <label htmlFor="mensaje" className="form-label">Mensaje / Especificaciones *</label>
              <textarea 
                id="mensaje" 
                name="mensaje" 
                value={formData.mensaje}
                onChange={handleChange}
                className={`form-textarea ${errors.mensaje ? 'input-error' : ''}`}
                placeholder="Describe el modelo exacto, cantidad o servicio que requieres cotizar..."
              />
              {errors.mensaje && <span className="form-error">{errors.mensaje}</span>}
            </div>

            {/* Checkbox Privacidad */}
            <div className="form-group form-group-full" style={{ marginTop: '4px' }}>
              <label className="form-checkbox">
                <input 
                  type="checkbox" 
                  name="aceptar_privacidad"
                  checked={formData.aceptar_privacidad}
                  onChange={handleChange}
                />
                <span>Acepto que mis datos sean tratados únicamente para dar seguimiento a esta cotización, conforme al aviso de privacidad de CEITSA. *</span>
              </label>
              {errors.aceptar_privacidad && <span className="form-error">{errors.aceptar_privacidad}</span>}
            </div>
          </div>

          <button 
            type="submit" 
            className="btn btn-secondary form-submit-btn" 
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span>Procesando...</span>
            ) : (
              <>
                <Send size={18} /> Enviar Cotización
              </>
            )}
          </button>
        </form>
      )}

      {submitStatus === 'error' && (
        <div className="form-status-message error">
          Hubo un problema al procesar tu envío. Inténtalo de nuevo o contáctanos por WhatsApp.
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .form-intro-desc {
          font-size: 0.95rem;
          color: var(--neutral-muted);
          max-width: 600px;
          margin: 0 auto 24px;
        }

        .input-error {
          border-color: var(--danger) !important;
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
        }

        /* success card */
        .success-card {
          padding: 20px 0;
        }

        .success-icon-wrapper {
          color: var(--success);
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
        }

        .success-icon {
          animation: scaleUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        .success-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--primary-dark);
          margin-bottom: 12px;
        }

        .success-text {
          font-size: 1.05rem;
          color: var(--neutral-muted);
          max-width: 580px;
          margin: 0 auto;
        }

        @keyframes scaleUp {
          from { transform: scale(0); }
          to { transform: scale(1); }
        }
      ` }} />
    </div>
  )
}

export default ContactForm
