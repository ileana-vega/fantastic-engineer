'use strict';
const express = require('express');
const fs = require('fs/promises');
const path = require('path');
const crypto = require('crypto');
const { validate } = require('../../buen-fin-model');
const router = express.Router();
const dataFile = process.env.BUEN_FIN_PATH || '/var/data/ceitsa/buen-fin.json';
if (path.resolve(dataFile) === path.resolve(process.env.CATALOGO_PATH || '/var/data/ceitsa/catalogo.json')) {
  throw new Error('BUEN_FIN_PATH debe ser diferente de CATALOGO_PATH.');
}
const token = process.env.BUEN_FIN_ADMIN_TOKEN;
let queue = Promise.resolve();
async function read() { return validate(JSON.parse(await fs.readFile(dataFile, 'utf8'))); }
function authorized(req) {
  const supplied = req.get('X-Admin-Token');
  if (!token || !supplied) return false;
  const actual = Buffer.from(supplied);
  const expected = Buffer.from(token);
  return actual.length === expected.length && crypto.timingSafeEqual(actual, expected);
}
router.use((req, res, next) => { res.set('Cache-Control', 'no-store'); next(); });
router.get('/', async (req, res) => {
  try { res.json(await read()); }
  catch (err) { console.error('Buen Fin: error de lectura', err.code || err.message); res.status(503).json({ error: 'No se pudo cargar Buen Fin. Revisa la instalación.' }); }
});
router.post('/session', (req, res) => {
  if (!authorized(req)) return res.status(401).json({ error: 'Clave de Buen Fin incorrecta o no configurada.' });
  res.json({ success: true });
});
router.post('/', (req, res) => {
  if (!authorized(req)) return res.status(401).json({ error: 'Clave de Buen Fin incorrecta o no configurada.' });
  let state;
  try {
    state = validate(req.body);
    if (!Number.isSafeInteger(req.body.revision) || req.body.revision < 0) throw new Error('Falta la revisión del catálogo. Recarga el panel.');
  } catch (err) { return res.status(400).json({ error: err.message }); }
  // Serializar escrituras y comprobar la revisión evita pisar cambios de otro equipo.
  queue = queue.then(async () => {
    const current = await read();
    if (state.revision !== current.revision) return res.status(409).json({ error: 'Otra persona publicó cambios. Exporta tu borrador y recarga antes de continuar.' });
    state.revision = current.revision + 1;
    state.lastModified = new Date().toISOString();
    const temporary = dataFile + '.' + crypto.randomBytes(8).toString('hex') + '.tmp';
    try {
      await fs.writeFile(temporary, JSON.stringify(state), { mode: 0o600, flag: 'wx' });
      await fs.rename(temporary, dataFile);
    } finally { await fs.unlink(temporary).catch(() => {}); }
    res.json({ success: true, revision: state.revision, lastModified: state.lastModified });
  }).catch(err => {
    console.error('Buen Fin: error de escritura', err.code || err.message);
    if (!res.headersSent) res.status(500).json({ error: 'No se pudo guardar Buen Fin.' });
  });
});
module.exports = router;
