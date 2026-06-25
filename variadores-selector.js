(function () {
  const buyLinks = {
    el: "https://ceitsa.com.mx/search?cat=154&filter=serie%3Avfd-el",
    elw: "https://ceitsa.com.mx/search?cat=154&filter=serie%3Avfd-el-w",
    ms300: "https://ceitsa.com.mx/search?cat=154&filter=serie%3Avfd-ms300",
    c2000: "https://ceitsa.com.mx/search?cat=154&filter=serie%3Avfd-c2000",
    cp2000: "https://wa.me/5217201185420?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n%20de%20la%20familia%20Delta%20CP2000."
  };

  const pdfLinks = {
    el: "https://ceitsa.com.mx/docs/vfd-el-ceitsa.pdf",
    elw: "https://ceitsa.com.mx/docs/delta-el-w-ceitsa.pdf",
    ms300: "https://ceitsa.com.mx/docs/ms300-ceitsa.pdf",
    c2000: "https://ceitsa.com.mx/docs/c2000-plus-ceitsa.pdf",
    cp2000: "https://ceitsa.com.mx/docs/cp2000-ceitsa.pdf"
  };

  const configLinks = {
    el: "#configurador-vfd-el",
    elw: "#configurador-vfd-el-w",
    ms300: "#configurador-ms300",
    c2000: "#configurador-c2000-plus",
    cp2000: "#configurador-cp2000"
  };

  const families = {
    el: {
      label: "VFD-EL",
      title: "EL",
      image: "assets/vfd-el.webp",
      imageAlt: "Variador de frecuencia Delta EL",
      subtitle: "Compacto y económico para aplicaciones básicas",
      description: "La serie EL de Delta ofrece una solución compacta y confiable para el control de velocidad de motores trifásicos. Ideal para aplicaciones simples que requieren eficiencia y facilidad de uso.",
      benefits: ["Excelente relación costo-beneficio", "Diseño compacto y fácil instalación", "Control eficiente y confiable", "Protecciones integradas para mayor seguridad"],
      power: "1 a 5 HP",
      voltage: "Validar 110 / 220 / 440 VAC",
      application: "Maquinaria compacta"
    },
    elw: {
      label: "VFD-EL-W",
      title: "EL-W",
      image: "assets/vfd-el-w.webp",
      imageAlt: "Variador de frecuencia Delta EL-W",
      subtitle: "Compacto vectorial para mayor desempeño",
      description: "La familia EL-W conserva un formato compacto y añade control vectorial para aplicaciones que requieren mejor respuesta de torque, operación estable y parametrización sencilla.",
      benefits: ["Control vectorial en formato compacto", "Respuesta estable en aplicaciones ligeras", "Integración sencilla en gabinetes reducidos", "Opción práctica para modernización de equipos"],
      power: "Validar por modelo",
      voltage: "220 / 440 VAC segun seleccion",
      application: "Máquinas pequeñas"
    },
    ms300: {
      label: "MS300",
      title: "MS300",
      image: "assets/vfd-ms300.webp",
      imageAlt: "Variador de frecuencia Delta MS300",
      subtitle: "Versátil y moderno para diversas aplicaciones",
      description: "MS300 es una plataforma compacta de uso general con PLC integrado, puerto USB, filtro EMC y compatibilidad con motores de inducción e iman permanente.",
      benefits: ["Potencia flexible para uso general", "PLC integrado y keypad removible", "Instalacion side-by-side", "Opciónes de red industrial por accesorios"],
      power: "1/4 a 30 HP",
      voltage: "110 / 220 / 440 VAC",
      application: "Uso general industrial"
    },
    c2000: {
      label: "C2000+",
      title: "C2000+",
      image: "assets/vfd-c2000-plus.webp",
      imageAlt: "Variador de frecuencia Delta C2000 Plus",
      subtitle: "Alto desempeño para aplicaciones exigentes",
      description: "C2000 Plus esta orientado a procesos severos donde se requiere control de velocidad, torque y posición, con o sin sensor, y alta capacidad de sobrecarga.",
      benefits: ["Control de velocidad, torque y posición", "Operación con o sin retroalimentación", "PLC incorporado para lógica local", "Diseñado para procesos de alta exigencia"],
      power: "Hasta 560 kW en 460 V",
      voltage: "460 VAC, validar configuracion",
      application: "Procesos severos"
    },
    cp2000: {
      label: "CP2000",
      title: "CP2000",
      image: "assets/vfd-cp2000-plus.webp",
      imageAlt: "Variador de frecuencia Delta CP2000",
      subtitle: "Especializado en bombas, ventiladores y HVAC",
      description: "CP2000 está enfocado en aplicaciones de flujo variable donde el ahorro energético, la operación continua y las funciones dedicadas a bombas y ventiladores son prioridad.",
      benefits: ["Funciones dedicadas para HVAC", "Ahorro energético en flujo variable", "Control estable para bombas y ventiladores", "Ideal para servicios auxiliares industriales"],
      power: "Seleccionar por carga",
      voltage: "Validar por modelo",
      application: "Bombas y ventilación"
    }
  };

  const panel = document.querySelector(".vfd-selector-detail");
  const buttons = document.querySelectorAll(".vfd-selector-option");
  const fields = panel ? {
    title: panel.querySelector("[data-vfd-title]"),
    subtitle: panel.querySelector("[data-vfd-subtitle]"),
    description: panel.querySelector("[data-vfd-description]"),
    benefits: panel.querySelector("[data-vfd-benefits]"),
    power: panel.querySelector("[data-vfd-power]"),
    voltage: panel.querySelector("[data-vfd-voltage]"),
    application: panel.querySelector("[data-vfd-application]"),
    visual: panel.querySelector("[data-vfd-visual]"),
    buy: panel.querySelector("[data-vfd-buy]"),
    pdf: panel.querySelector("[data-vfd-pdf]"),
    modelLink: panel.querySelector("[data-vfd-model-link]"),
    configLink: panel.querySelector("[data-vfd-config-link]")
  } : {};

  const modelTool = {
    family: document.querySelector("[data-model-family]"),
    search: document.querySelector("[data-model-search]"),
    label: document.querySelector("[data-model-family-label]"),
    count: document.querySelector("[data-model-count]"),
    buy: document.querySelector("[data-model-buy]"),
    results: document.querySelector("[data-model-results]")
  };

  function getModels() {
    const modelMap = {};
    document.querySelectorAll("[data-model-source]").forEach((list) => {
      modelMap[list.dataset.modelSource] = Array.from(list.querySelectorAll("li"))
        .map((item) => item.textContent.trim())
        .filter(Boolean);
    });
    return modelMap;
  }

  const models = getModels();

  function updateBuyLink(link, familyKey, unavailableText) {
    if (!link) return;
    const url = buyLinks[familyKey];
    if (!url) {
      link.hidden = true;
      link.removeAttribute("href");
      if (unavailableText) link.textContent = unavailableText;
      return;
    }
    link.hidden = false;
    link.href = url;
    if (unavailableText) link.textContent = "Comprar familia";
  }

  function renderModelTool(familyKey) {
    if (!modelTool.family || !modelTool.results) return;
    const activeFamily = families[familyKey] ? familyKey : "el";
    const query = (modelTool.search?.value || "").trim().toUpperCase();
    const modelList = models[activeFamily] || [];
    const filtered = query ? modelList.filter((model) => model.includes(query)) : modelList;

    modelTool.family.value = activeFamily;
    if (modelTool.label) modelTool.label.textContent = families[activeFamily].label;
    if (modelTool.count) {
      modelTool.count.textContent = `${filtered.length} de ${modelList.length} modelos`;
    }

    updateBuyLink(modelTool.buy, activeFamily, "Sin compra en linea");
    modelTool.results.innerHTML = filtered.length
      ? filtered.map((model) => `<span>${model}</span>`).join("")
      : "<p>No hay modelos que coincidan con la busqueda.</p>";
  }

  function setFamily(familyKey) {
    const data = families[familyKey];
    if (!data || !panel) return;

    buttons.forEach((item) => {
      const active = item.dataset.vfdFamily === familyKey;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
    });

    fields.title.textContent = data.title;
    fields.subtitle.textContent = data.subtitle;
    fields.description.textContent = data.description;
    fields.benefits.innerHTML = data.benefits.map((item) => `<li>${item}</li>`).join("");
    fields.power.textContent = data.power;
    fields.voltage.textContent = data.voltage;
    fields.application.textContent = data.application;
    fields.visual.src = data.image;
    fields.visual.alt = data.imageAlt;

    updateBuyLink(fields.buy, familyKey);
    if (fields.pdf) fields.pdf.href = pdfLinks[familyKey];
    if (fields.configLink) fields.configLink.href = configLinks[familyKey] || "#configurador-modelo";
    if (fields.modelLink) fields.modelLink.dataset.activeFamily = familyKey;
    renderModelTool(familyKey);
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => setFamily(button.dataset.vfdFamily));
  });

  fields.modelLink?.addEventListener("click", () => {
    const activeFamily = fields.modelLink.dataset.activeFamily || "el";
    renderModelTool(activeFamily);
  });

  modelTool.family?.addEventListener("change", () => {
    renderModelTool(modelTool.family.value);
  });

  modelTool.search?.addEventListener("input", () => {
    renderModelTool(modelTool.family.value);
  });

  setFamily(document.querySelector(".vfd-selector-option.is-active")?.dataset.vfdFamily || "el");
})();
