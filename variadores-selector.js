(function () {
  const buyLinks = {
    el: "https://ceitsa.com.mx/search?cat=154&filter=serie%3Avfd-el",
    elw: "https://ceitsa.com.mx/search?cat=154&filter=serie%3Avfd-el-w",
    ms300: "https://ceitsa.com.mx/search?cat=154&filter=serie%3Avfd-ms300",
    c2000: "https://ceitsa.com.mx/search?cat=154&filter=serie%3Avfd-c2000"
  };

  const families = {
    el: {
      label: "VFD-EL",
      title: "EL",
      image: "assets/vfd-el.webp",
      imageAlt: "Variador de frecuencia Delta EL",
      subtitle: "Compacto y economico para aplicaciones basicas",
      description: "La serie EL de Delta ofrece una solucion compacta y confiable para el control de velocidad de motores trifasicos. Ideal para aplicaciones simples que requieren eficiencia y facilidad de uso.",
      benefits: ["Excelente relacion costo-beneficio", "Diseno compacto y facil instalacion", "Control eficiente y confiable", "Protecciones integradas para mayor seguridad"],
      power: "1 a 5 HP",
      voltage: "Validar 110 / 220 / 440 VAC",
      application: "Maquinaria compacta"
    },
    elw: {
      label: "VFD-EL-W",
      title: "EL-W",
      image: "assets/vfd-el-w.webp",
      imageAlt: "Variador de frecuencia Delta EL-W",
      subtitle: "Compacto vectorial para mayor desempeno",
      description: "La familia EL-W conserva un formato compacto y anade control vectorial para aplicaciones que requieren mejor respuesta de torque, operacion estable y parametrizacion sencilla.",
      benefits: ["Control vectorial en formato compacto", "Respuesta estable en aplicaciones ligeras", "Integracion sencilla en gabinetes reducidos", "Opcion practica para modernizacion de equipos"],
      power: "Validar por modelo",
      voltage: "220 / 440 VAC segun seleccion",
      application: "Maquinas pequenas"
    },
    ms300: {
      label: "MS300",
      title: "MS300",
      image: "assets/vfd-ms300.webp",
      imageAlt: "Variador de frecuencia Delta MS300",
      subtitle: "Versatil y moderno para diversas aplicaciones",
      description: "MS300 es una plataforma compacta de uso general con PLC integrado, puerto USB, filtro EMC y compatibilidad con motores de induccion e iman permanente.",
      benefits: ["Potencia flexible para uso general", "PLC integrado y keypad removible", "Instalacion side-by-side", "Opciones de red industrial por accesorios"],
      power: "1/4 a 30 HP",
      voltage: "110 / 220 / 440 VAC",
      application: "Uso general industrial"
    },
    c2000: {
      label: "C2000+",
      title: "C2000+",
      image: "assets/vfd-c2000-plus.webp",
      imageAlt: "Variador de frecuencia Delta C2000 Plus",
      subtitle: "Alto desempeno para aplicaciones exigentes",
      description: "C2000 Plus esta orientado a procesos severos donde se requiere control de velocidad, torque y posicion, con o sin sensor, y alta capacidad de sobrecarga.",
      benefits: ["Control de velocidad, torque y posicion", "Operacion con o sin retroalimentacion", "PLC incorporado para logica local", "Disenado para procesos de alta exigencia"],
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
      description: "CP2000 esta enfocado en aplicaciones de flujo variable donde el ahorro energetico, la operacion continua y las funciones dedicadas a bombas y ventiladores son prioridad.",
      benefits: ["Funciones dedicadas para HVAC", "Ahorro energetico en flujo variable", "Control estable para bombas y ventiladores", "Ideal para servicios auxiliares industriales"],
      power: "Seleccionar por carga",
      voltage: "Validar por modelo",
      application: "Bombas y ventilacion"
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
    modelLink: panel.querySelector("[data-vfd-model-link]")
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
