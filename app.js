(function () {
  const current = window.location.pathname.split("/").pop() || "index.html";
  const activeByPage = {
    "variadores.html": "variadores.html",
    "plc-delta.html": "plc-delta.html",
    "controladores-temperatura.html": "controladores-temperatura.html",
    "dia-del-ingeniero.html": "dia-del-ingeniero.html",
    "index.html": "index.html"
  };
  document.querySelectorAll(".menu a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === activeByPage[current]) {
      link.classList.add("active");
    }
  });

  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  document.querySelectorAll(".quote-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const subject = form.dataset.mailSubject || "Solicitud CEITSA";
      const lines = [];
      data.forEach((value, key) => {
        lines.push(`${key}: ${value}`);
      });
      const body = encodeURIComponent(lines.join("\n"));
      window.location.href = `mailto:cotiza@ceitsa.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    });
  });

  const vfdFamilies = {
    el: {
      title: "EL",
      image: "assets/vfd-el.webp",
      imageAlt: "Variador de frecuencia Delta EL",
      subtitle: "Compacto y económico para aplicaciones básicas",
      description: "La serie EL de Delta ofrece una solución compacta y confiable para el control de velocidad de motores trifásicos. Ideal para aplicaciones simples que requieren eficiencia y facilidad de uso.",
      benefits: [
        "Excelente relación costo-beneficio",
        "Diseño compacto y fácil instalación",
        "Control eficiente y confiable",
        "Protecciones integradas para mayor seguridad"
      ],
      power: "1 a 5 HP",
      voltage: "Validar 110 / 220 / 440 VAC",
      application: "Maquinaria compacta"
    },
    elw: {
      title: "EL-W",
      image: "assets/vfd-el-w.webp",
      imageAlt: "Variador de frecuencia Delta EL-W",
      subtitle: "Compacto vectorial para mayor desempeño",
      description: "La familia EL-W conserva un formato compacto y añade control vectorial para aplicaciones que requieren mejor respuesta de torque, operación estable y parametrización sencilla.",
      benefits: [
        "Control vectorial en formato compacto",
        "Respuesta estable en aplicaciones ligeras",
        "Integración sencilla en gabinetes reducidos",
        "Opción práctica para modernización de equipos"
      ],
      power: "Validar por modelo",
      voltage: "220 / 440 VAC según selección",
      application: "Máquinas pequeñas"
    },
    ms300: {
      title: "MS300",
      image: "assets/vfd-ms300.webp",
      imageAlt: "Variador de frecuencia Delta MS300",
      subtitle: "Versátil y moderno para diversas aplicaciones",
      description: "MS300 es una plataforma compacta de uso general con PLC integrado, puerto USB, filtro EMC y compatibilidad con motores de inducción e imán permanente.",
      benefits: [
        "Potencia flexible para uso general",
        "PLC integrado y keypad removible",
        "Instalación side-by-side",
        "Opciones de red industrial por accesorios"
      ],
      power: "1/4 a 30 HP",
      voltage: "110 / 220 / 440 VAC",
      application: "Uso general industrial"
    },
    c2000: {
      title: "C2000+",
      image: "assets/vfd-c2000-plus.webp",
      imageAlt: "Variador de frecuencia Delta C2000 Plus",
      subtitle: "Alto desempeño para aplicaciones exigentes",
      description: "C2000 Plus está orientado a procesos severos donde se requiere control de velocidad, torque y posición, con o sin sensor, y alta capacidad de sobrecarga.",
      benefits: [
        "Control de velocidad, torque y posición",
        "Operación con o sin retroalimentación",
        "PLC incorporado para lógica local",
        "Diseñado para procesos de alta exigencia"
      ],
      power: "Hasta 560 kW en 460 V",
      voltage: "460 VAC, validar configuración",
      application: "Procesos severos"
    },
    cp2000: {
      title: "CP2000+",
      image: "assets/vfd-cp2000-plus.webp",
      imageAlt: "Variador de frecuencia Delta CP2000 Plus",
      subtitle: "Especializado en bombas, ventiladores y HVAC",
      description: "CP2000 está enfocado en aplicaciones de flujo variable donde el ahorro energético, la operación continua y las funciones dedicadas a bombas y ventiladores son prioridad.",
      benefits: [
        "Funciones dedicadas para HVAC",
        "Ahorro energético en flujo variable",
        "Control estable para bombas y ventiladores",
        "Ideal para servicios auxiliares industriales"
      ],
      power: "Seleccionar por carga",
      voltage: "Validar por modelo",
      application: "Bombas y ventilación"
    }
  };

  const specBand = document.querySelector(".vfd-spec-band");
  if (specBand && !document.querySelector(".vfd-family-selector")) {
    const cssHref = "variadores-selector.css";
    if (!document.querySelector(`link[href="${cssHref}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = cssHref;
      document.head.appendChild(link);
    }

    specBand.insertAdjacentHTML("afterend", `
      <section class="vfd-family-selector" id="selector" aria-labelledby="vfd-family-selector-title">
        <div class="vfd-selector-heading">
          <p class="eyebrow">Variadores de velocidad Delta</p>
          <h2 id="vfd-family-selector-title">Selecciona la familia que mejor se adapta a tu aplicacion</h2>
          <p>Descubre las caracteristicas y beneficios de cada serie de variadores de velocidad Delta.</p>
        </div>
        <div class="vfd-selector-shell">
          <div class="vfd-selector-list" role="tablist" aria-label="Familias de variadores Delta">
            <button class="vfd-selector-option is-active" type="button" role="tab" aria-selected="true" data-vfd-family="el">
              <span class="vfd-selector-thumb"><img src="assets/vfd-el.webp" alt=""></span><span><strong>EL</strong><small>Compacto y economico para aplicaciones basicas</small></span><em>&rsaquo;</em>
            </button>
            <button class="vfd-selector-option" type="button" role="tab" aria-selected="false" data-vfd-family="elw">
              <span class="vfd-selector-thumb"><img src="assets/vfd-el-w.webp" alt=""></span><span><strong>EL-W</strong><small>Compacto vectorial para mayor desempeno</small></span><em>&rsaquo;</em>
            </button>
            <button class="vfd-selector-option" type="button" role="tab" aria-selected="false" data-vfd-family="ms300">
              <span class="vfd-selector-thumb"><img src="assets/vfd-ms300.webp" alt=""></span><span><strong>MS300</strong><small>Versatil y moderno para diversas aplicaciones</small></span><em>&rsaquo;</em>
            </button>
            <button class="vfd-selector-option" type="button" role="tab" aria-selected="false" data-vfd-family="c2000">
              <span class="vfd-selector-thumb"><img src="assets/vfd-c2000-plus.webp" alt=""></span><span><strong>C2000+</strong><small>Alto desempeno para aplicaciones exigentes</small></span><em>&rsaquo;</em>
            </button>
            <button class="vfd-selector-option" type="button" role="tab" aria-selected="false" data-vfd-family="cp2000">
              <span class="vfd-selector-thumb"><img src="assets/vfd-cp2000-plus.webp" alt=""></span><span><strong>CP2000+</strong><small>Especializado en bombas, ventiladores y HVAC</small></span><em>&rsaquo;</em>
            </button>
          </div>
          <article class="vfd-selector-detail" aria-live="polite">
            <div class="vfd-selector-copy">
              <span class="vfd-selected-label">Familia seleccionada</span>
              <h3 data-vfd-title>EL</h3>
              <h4 data-vfd-subtitle>Compacto y economico para aplicaciones basicas</h4>
              <p data-vfd-description>La serie EL de Delta ofrece una solucion compacta y confiable para el control de velocidad de motores trifasicos. Ideal para aplicaciones simples que requieren eficiencia y facilidad de uso.</p>
              <ul class="vfd-benefit-list" data-vfd-benefits>
                <li>Excelente relacion costo-beneficio</li>
                <li>Diseno compacto y facil instalacion</li>
                <li>Control eficiente y confiable</li>
                <li>Protecciones integradas para mayor seguridad</li>
              </ul>
            </div>
            <div class="vfd-selector-visual">
              <img class="vfd-selector-device" src="assets/vfd-el.webp" alt="Variador de frecuencia Delta EL" data-vfd-visual>
            </div>
            <div class="vfd-selector-specs">
              <div><strong>Potencias disponibles</strong><span data-vfd-power>1 a 5 HP</span></div>
              <div><strong>Voltajes</strong><span data-vfd-voltage>Validar 110 / 220 / 440 VAC</span></div>
              <div><strong>Aplicacion ideal</strong><span data-vfd-application>Maquinaria compacta</span></div>
            </div>
            <a class="btn primary vfd-selector-cta" href="https://wa.me/5217201185420" target="_blank" rel="noopener">Solicitar mas informacion</a>
          </article>
        </div>
        <p class="vfd-selector-note">No sabes cual elegir? <a href="https://wa.me/5217201185420" target="_blank" rel="noopener">Contactanos</a>, nuestro equipo te asesora sin costo.</p>
      </section>
    `);
  }

  const familyButtons = document.querySelectorAll(".vfd-selector-option");
  const familyPanel = document.querySelector(".vfd-selector-detail");
  if (familyButtons.length && familyPanel) {
    const title = familyPanel.querySelector("[data-vfd-title]");
    const subtitle = familyPanel.querySelector("[data-vfd-subtitle]");
    const description = familyPanel.querySelector("[data-vfd-description]");
    const benefits = familyPanel.querySelector("[data-vfd-benefits]");
    const power = familyPanel.querySelector("[data-vfd-power]");
    const voltage = familyPanel.querySelector("[data-vfd-voltage]");
    const application = familyPanel.querySelector("[data-vfd-application]");
    const visual = familyPanel.querySelector("[data-vfd-visual]");

    familyButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const family = button.dataset.vfdFamily;
        const data = vfdFamilies[family];
        if (!data) return;

        familyButtons.forEach((item) => {
          const active = item === button;
          item.classList.toggle("is-active", active);
          item.setAttribute("aria-selected", String(active));
        });

        title.textContent = data.title;
        subtitle.textContent = data.subtitle;
        description.textContent = data.description;
        benefits.innerHTML = data.benefits.map((item) => `<li>${item}</li>`).join("");
        power.textContent = data.power;
        voltage.textContent = data.voltage;
        application.textContent = data.application;
        visual.src = data.image;
        visual.alt = data.imageAlt;
      });
    });
  }
})();
