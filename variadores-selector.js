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
      title: "VFD-EL",
      image: "assets/vfd-el.webp",
      imageAlt: "Variador de frecuencia Delta EL",
      subtitle: "Variador compacto multifunción para aplicaciones simples de velocidad variable.",
      description: "Bombas y ventiladores pequeños, sopladores, bandas transportadoras y equipos de proceso simple.",
      benefits: ["Control V/F con curva ajustable.", "PID integrado para control de proceso.", "Comunicación RS-485 Modbus.", "Filtro EMI integrado en modelos seleccionados.", "Instalación compacta para tableros con espacio limitado."],
      power: "0.25 a 5 HP, según modelo",
      voltage: "110 / 220 / 440 VCA",
      application: "Maquinaria compacta"
    },
    elw: {
      label: "VFD-EL-W",
      title: "VFD-EL-W",
      image: "assets/vfd-el-w.webp",
      imageAlt: "Variador de frecuencia Delta EL-W",
      subtitle: "Variador compacto económico para control simple de velocidad y aplicaciones de carga fija.",
      description: "Maquinaria compacta, movimiento horizontal, transportadores, equipos de proceso sencillo y control de presión constante.",
      benefits: ["Control vectorial sensorless.", "Sobrecarga 150% por 60 segundos.", "RS-485 Modbus.", "Diseño compacto.", "Adecuado para aplicaciones de velocidad simple o carga fija."],
      power: "0.25 a 5.5 HP, según modelo",
      voltage: "220 / 440 VCA",
      application: "Máquinas pequeñas"
    },
    ms300: {
      label: "MS300",
      title: "MS300",
      image: "assets/vfd-ms300.webp",
      imageAlt: "Variador de frecuencia Delta MS300",
      subtitle: "Variador compacto moderno con funciones integradas para automatización industrial general.",
      description: "Máquinas herramienta, empaque, textil, bombas, ventiladores, compresores y maquinaria automatizada.",
      benefits: ["Control de motores de inducción y de imán permanente.", "STO integrado.", "PLC integrado de 2K pasos.", "Puerto USB para carga/descarga de parámetros.", "Keypad removible.", "Opción de filtro EMC integrado.", "Instalación compacta y side-by-side."],
      power: "1/4 a 30 HP, según modelo",
      voltage: "110 / 220 / 440 VAC",
      application: "Maquinaria automatizada"
    },
    c2000: {
      label: "C2000+",
      title: "C2000+",
      image: "assets/vfd-c2000-plus.webp",
      imageAlt: "Variador de frecuencia Delta C2000 Plus",
      subtitle: "Variador de alto desempeño para aplicaciones de torque constante y control preciso.",
      description: "Extrusores, grúas, elevación, máquinas de inyección, procesamiento de metales, plásticos, bandas de transporte pesadas y maquinaria de alto torque.",
      benefits: ["Control preciso de velocidad, torque y posición.", "Compatible con motores síncronos y asíncronos.", "Control con y sin sensor.", "PLC integrado de 10K pasos.", "Opciones de comunicación industrial.", "Alta capacidad de sobrecarga para aplicaciones heavy duty."],
      power: "1 a 750 HP, según modelo",
      voltage: "230 / 460 VCA, según versión.",
      application: "Maquinaria de alto torque"
    },
    cp2000: {
      label: "CP2000",
      title: "CP2000",
      image: "assets/vfd-cp2000-plus.webp",
      imageAlt: "Variador de frecuencia Delta CP2000",
      subtitle: "Variador especializado para bombas, ventiladores y sistemas HVAC con enfoque en ahorro energético.",
      description: "HVAC, bombas de enfriamiento, torres de enfriamiento, automatización de edificios, ventiladores y sistemas de bombeo.",
      benefits: ["Control vectorial sensorless para bombas y ventiladores.", "Funciones PID y parámetros HVAC.", "PLC integrado de 10K pasos.", "Comunicación Modbus y BACnet integrada.", "Control multipump con accesorios.", "Funciones para ahorro energético y ambientes de carga variable."],
      power: "1 a 125 HP, según modelo",
      voltage: "220 / 440 VCA.",
      application: "Bombas, ventiladores y HVAC"
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
