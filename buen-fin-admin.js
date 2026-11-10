(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const endpoint = '/api/buen-fin';
  let key = '', published = null, draft = null, selected = null, dirty = false, formDirty = false, busy = false, uploads = 0;
  const form = $('editor');
  const clone = value => JSON.parse(JSON.stringify(value));
  function status(message, error = false) { $('status').textContent = message; $('status').dataset.error = String(error); }
  async function request(path = '', state) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(endpoint + path, { method: state ? 'POST' : 'GET', cache: 'no-store', credentials: 'same-origin', signal: controller.signal,
        headers: { Accept: 'application/json', ...(state ? { 'Content-Type': 'application/json', 'X-Admin-Token': key } : {}) },
        ...(state ? { body: JSON.stringify(state) } : {}) });
      const json = await response.json().catch(() => null);
      if (!response.ok || !json) throw new Error(json?.error || `No se pudo conectar con Buen Fin (HTTP ${response.status}). Revisa la instalación del servicio.`);
      return json;
    } catch (err) { if (err.name === 'AbortError') throw new Error('El servidor no respondió a tiempo. Tus cambios siguen en el borrador.'); throw err; }
    finally { clearTimeout(timeout); }
  }
  function controls() {
    $('publish').disabled = busy || uploads > 0 || !dirty;
    $('discard').disabled = busy || uploads > 0 || !(dirty || formDirty);
    $('pending').textContent = formDirty ? 'Hay cambios en el formulario sin guardar en el borrador' : dirty ? 'Cambios pendientes de publicar' : 'Sin cambios pendientes';
  }
  function preview(name) {
    const value = form.elements[name].value;
    const img = $('preview-' + name);
    const safe = /^https?:\/\//i.test(value) || /^data:image\/(png|jpeg|webp|gif);base64,/i.test(value);
    img.hidden = !safe;
    if (safe) img.src = value; else img.removeAttribute('src');
  }
  function canLeaveForm() { return !formDirty || confirm('¿Descartar los cambios del formulario que aún no guardaste en el borrador?'); }
  function edit(product = null) {
    selected = product?.id || null;
    form.reset();
    for (const name of ['brand', 'title', 'link', 'image', 'discount']) if (product) form.elements[name].value = product[name];
    $('editor-title').textContent = product ? 'Modificar producto' : 'Agregar producto';
    formDirty = false;
    preview('image'); preview('discount'); controls();
  }
  function render() {
    const query = $('search').value.toLocaleLowerCase('es');
    const brand = $('filter').value;
    $('summary').textContent = `${draft.products.length} productos · ${published.lastModified ? 'Última publicación: ' + new Date(published.lastModified).toLocaleString('es-MX') : 'Catálogo inicial'}`;
    const list = $('list'); list.replaceChildren();
    draft.products.filter(p => (!brand || p.brand === brand) && p.title.toLocaleLowerCase('es').includes(query)).forEach(p => {
      const row = document.createElement('article'); row.className = 'row';
      const img = document.createElement('img'); img.src = p.image; img.alt = ''; img.loading = 'lazy';
      const content = document.createElement('div');
      const label = document.createElement('small'); label.textContent = p.brand.toUpperCase();
      const title = document.createElement('p'); title.textContent = p.title;
      const actions = document.createElement('div'); actions.className = 'actions';
      const modify = document.createElement('button'); modify.type = 'button'; modify.className = 'secondary'; modify.textContent = 'Editar';
      modify.onclick = () => { if (uploads || busy || !canLeaveForm()) return; edit(p); form.elements.title.focus(); };
      const remove = document.createElement('button'); remove.type = 'button'; remove.className = 'danger'; remove.textContent = 'Eliminar';
      remove.onclick = () => {
        if (uploads || busy || (selected === p.id && !canLeaveForm()) || !confirm(`¿Eliminar “${p.title}”? Se aplicará al publicar.`)) return;
        draft.products = draft.products.filter(item => item.id !== p.id);
        if (selected === p.id) edit();
        dirty = true; render();
      };
      actions.append(modify, remove); content.append(label, title, actions); row.append(img, content); list.append(row);
    });
    if (!list.children.length) list.textContent = 'No hay productos para mostrar.';
    controls();
  }
  $('login-form').onsubmit = async event => {
    event.preventDefault();
    const button = event.submitter; button.disabled = true;
    key = $('key').value;
    try {
      await request('/session', {});
      published = BuenFinModel.validate(await request()); draft = clone(published);
      $('key').value = ''; $('login').hidden = true; $('panel').hidden = false;
      edit(); render(); status('Panel listo. Guarda las ediciones en el borrador y después publica los cambios.');
    } catch (err) { key = ''; status(err.message, true); }
    finally { button.disabled = false; }
  };
  form.addEventListener('input', event => { formDirty = true; if (['image', 'discount'].includes(event.target.name)) preview(event.target.name); controls(); });
  for (const input of form.querySelectorAll('[data-upload]')) input.onchange = async () => {
    const file = input.files[0]; if (!file) return;
    uploads++; controls();
    try {
      if (!['image/png', 'image/jpeg', 'image/webp', 'image/gif'].includes(file.type) || file.size > 1024 * 1024) throw new Error('Elige una imagen PNG, JPG, WebP o GIF de hasta 1 MB.');
      const data = await new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.onerror = () => reject(new Error('No se pudo leer la imagen.')); reader.readAsDataURL(file); });
      form.elements[input.dataset.upload].value = data;
      formDirty = true; preview(input.dataset.upload); status('Imagen cargada. Guarda el producto en el borrador.');
    } catch (err) { status(err.message, true); input.value = ''; }
    finally { uploads--; controls(); }
  };
  form.onsubmit = event => {
    event.preventDefault(); if (uploads || busy) return;
    try {
      const product = { id: selected || crypto.randomUUID() };
      for (const name of ['brand', 'title', 'link', 'image', 'discount']) product[name] = form.elements[name].value.trim();
      const clean = BuenFinModel.validate({ products: [product] }).products[0];
      const index = draft.products.findIndex(p => p.id === selected);
      if (index < 0) draft.products.push(clean); else draft.products[index] = clean;
      dirty = true; edit(clean); render(); status('Producto guardado en el borrador. Pulsa Publicar cambios para mostrarlo en la página.');
    } catch (err) { status(err.message, true); }
  };
  $('new').onclick = $('cancel').onclick = () => { if (!uploads && !busy && canLeaveForm()) { edit(); form.elements.title.focus(); } };
  $('search').oninput = $('filter').onchange = render;
  $('discard').onclick = () => {
    if (uploads || busy || !confirm('¿Descartar todos los cambios pendientes y recuperar la última versión cargada?')) return;
    draft = clone(published); dirty = false; edit(); render(); status('Cambios descartados.');
  };
  $('publish').onclick = async () => {
    if (busy || uploads || !dirty) return;
    if (formDirty) { status('Guarda primero el formulario en el borrador para incluirlo en la publicación.', true); return; }
    if (!confirm(`¿Publicar los ${draft.products.length} productos de Buen Fin?`)) return;
    busy = true;
    $('panel').inert = true; controls();
    try {
      const state = BuenFinModel.validate(draft);
      if (new Blob([JSON.stringify(state)]).size > 19 * 1024 * 1024) throw new Error('El catálogo supera 19 MB. Reduce el tamaño de las imágenes o utiliza enlaces.');
      const result = await request('', state);
      if (result.success !== true) throw new Error('El servidor no confirmó la publicación.');
      published = { ...state, revision: result.revision, lastModified: result.lastModified }; draft = clone(published); dirty = false;
      status('Cambios publicados. Recarga la página de Buen Fin para verlos.'); render();
    } catch (err) { status(err.message, true); }
    finally { busy = false; $('panel').inert = false; controls(); }
  };
  $('export').onclick = () => {
    const url = URL.createObjectURL(new Blob([JSON.stringify(draft, null, 2)], { type: 'application/json' }));
    const a = document.createElement('a'); a.href = url; a.download = 'buen-fin-respaldo.json'; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
    status('Respaldo del borrador descargado. Los campos sin guardar del formulario no se incluyen.');
  };
  $('import').onchange = async event => {
    const file = event.target.files[0]; if (!file || busy || uploads) return;
    busy = true; $('panel').inert = true;
    try {
      if (file.size > 19 * 1024 * 1024) throw new Error('El respaldo supera 19 MB.');
      const imported = BuenFinModel.validate(JSON.parse(await file.text()));
      if (!confirm('¿Reemplazar el borrador y descartar el formulario con este respaldo? La página cambiará al publicar.')) return;
      draft = { ...imported, revision: published.revision, lastModified: published.lastModified }; dirty = true; edit(); render(); status('Respaldo importado al borrador.');
    } catch (err) { status(err.message, true); }
    finally { busy = false; $('panel').inert = false; event.target.value = ''; controls(); }
  };
  $('logout').onclick = () => {
    if (busy || uploads || ((dirty || formDirty) && !confirm('¿Cerrar sesión y descartar los cambios pendientes?'))) return;
    key = ''; draft = published = null; dirty = formDirty = false; form.reset(); $('list').replaceChildren();
    $('panel').hidden = true; $('login').hidden = false; status('Sesión cerrada.'); $('key').focus();
  };
  window.addEventListener('beforeunload', event => { if (dirty || formDirty || busy || uploads) { event.preventDefault(); event.returnValue = ''; } });
})();
