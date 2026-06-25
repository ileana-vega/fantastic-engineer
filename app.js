(function () {
  const current = window.location.pathname.split("/").pop() || "index.html";
  const activeByPage = {
    "demostracion.html": "demostracion.html",
    "capacitacion.html": "capacitacion.html",
    "variadores.html": "productos.html",
    "productos.html": "productos.html",
    "tienda.html": "tienda.html",
    "contacto.html": "contacto.html",
    "servicios.html": "servicios.html",
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
      window.location.href = `mailto:atencion_ventas@ceitsa.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    });
  });

  if (current === "variadores.html" && document.querySelector(".vfd-spec-band")) {
    if (!document.querySelector('link[href="variadores-selector.css"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "variadores-selector.css";
      document.head.appendChild(link);
    }
    if (!document.querySelector('script[src="variadores-selector.js"]')) {
      const script = document.createElement("script");
      script.src = "variadores-selector.js";
      script.defer = true;
      document.body.appendChild(script);
    }
  }
})();
