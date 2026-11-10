# Activación del panel de Buen Fin

La página `buen-fin-contenido.html` consulta `GET /api/buen-fin` al abrirse.
El panel `buen-fin-admin.html` permite editar productos, imágenes, descuentos
y enlaces por marca. Primero se guarda el borrador y después se publica.
La clave es independiente del panel de Promociones.

## Servidor Express existente

1. Conserva la estructura del repositorio: `router.js` importa
   `../../buen-fin-model.js`. El servidor necesita Express.
2. Copia `initial-catalog.json` a un archivo persistente, solo la primera vez.
   No reemplaces un catálogo ya publicado. El proceso del servidor necesita
   permisos de lectura y escritura sobre ese archivo y su directorio.
3. Configura `BUEN_FIN_PATH` con la ruta absoluta del archivo y
   `BUEN_FIN_ADMIN_TOKEN` con una clave privada del servidor.
   No uses el archivo ni la clave de Promociones.
4. Monta el router antes del manejador de páginas o rutas de respaldo:

```js
app.use('/api/buen-fin', express.json({ limit: '20mb' }),
  require('./deploy/buen-fin/router'));
```

Si existe un parser JSON global con un límite menor, monta esta ruta antes
de ese parser. Ajusta también el límite del proxy para admitir el catálogo.
El almacenamiento debe ser persistente y este router debe ejecutarse en una
sola instancia: su cola de escrituras no coordina varios procesos.

5. Publica los archivos `buen-fin*.html`, `buen-fin*.js` y
   `buen-fin-admin.css` en el mismo sitio que sirve `/api/buen-fin`.
6. Comprueba que `GET /api/buen-fin` devuelve JSON. Abre
   `/buen-fin-admin.html`, ingresa la clave, guarda un producto en el borrador
   y publica. Recarga `/buen-fin.html` para comprobar el cambio.

También se puede abrir el panel con `/buen-fin.html?admin=1` o Ctrl+Alt+A.
Si la API falla, la página pública conserva el catálogo incluido en el HTML;
el panel informa del error y no confirma una publicación fallida.

Este repositorio no incluye el arranque del servidor de producción. Subir
solo los archivos a un alojamiento estático no instala la API.
