(function () {
  const pageName = () => window.location.pathname.split("/").pop() || "index.html";
  const activeByPage = {
    "demostracion.html": "demostracion.html",
    "capacitacion.html": "capacitacion.html",
    "contacto.html": "contacto.html",
    "envios.html": "envios.html",
    "index.html": "index.html",
    "productos.html": "productos.html",
    "servicios.html": "servicios.html",
    "tienda.html": "tienda.html"
  };

  function updateActiveMenu() {
    const current = pageName();
    const currentHash = window.location.hash;
    const activeHref = currentHash ? `${current}${currentHash}` : activeByPage[current];

    document.querySelectorAll(".menu a").forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("active", href === activeHref || (!currentHash && href === activeByPage[current]));
    });
  }

  updateActiveMenu();
  window.addEventListener("hashchange", updateActiveMenu);

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
      const message = encodeURIComponent(`${subject}\n\n${lines.join("\n")}`);
      window.location.href = `https://wa.me/5217294907147?text=${message}`;
    });
  });
})();
