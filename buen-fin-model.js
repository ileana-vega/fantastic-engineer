(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.BuenFinModel = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const brands = ['smc', 'turck', 'chint', 'delta'];
  function image(value) {
    return typeof value === 'string' && value.length <= 1500000 &&
      (/^https?:\/\/[^\s]+$/i.test(value) || /^data:image\/(png|jpeg|webp|gif);base64,[a-z0-9+/=]+$/i.test(value));
  }
  function validate(state) {
    if (!state || !Array.isArray(state.products) || state.products.length > 1000) {
      throw new Error('Se requiere un catálogo con un máximo de 1000 productos.');
    }
    const ids = new Set();
    const products = state.products.map((p, index) => {
      const label = 'Producto ' + (index + 1) + ': ';
      if (!p || typeof p.id !== 'string' || !p.id || p.id.length > 150 || ids.has(p.id)) throw new Error(label + 'identificador inválido o repetido.');
      ids.add(p.id);
      if (!brands.includes(p.brand)) throw new Error(label + 'selecciona una marca válida.');
      if (typeof p.title !== 'string' || !p.title.trim() || p.title.length > 2000) throw new Error(label + 'escribe un nombre de hasta 2000 caracteres.');
      if (!image(p.image) || !image(p.discount)) throw new Error(label + 'las imágenes deben ser URL HTTP/HTTPS o archivos PNG, JPG, WebP o GIF.');
      if (typeof p.link !== 'string' || p.link.length > 3000 || !/^https?:\/\/[^\s]+$/i.test(p.link)) throw new Error(label + 'el enlace debe comenzar con https:// o http://.');
      return { id: p.id, brand: p.brand, title: p.title.trim(), image: p.image, discount: p.discount, link: p.link };
    });
    return { products, revision: Number.isSafeInteger(state.revision) && state.revision >= 0 ? state.revision : 0,
      lastModified: typeof state.lastModified === 'string' ? state.lastModified : null };
  }
  return { brands, validate };
});
