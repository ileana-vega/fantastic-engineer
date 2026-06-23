# CEITSA Electromecatrónica - Sitio Web Corporativo Industrial

Este repositorio contiene el sitio web completo, responsivo y de alto rendimiento de **CEITSA Electromecatrónica** (Venta de equipo eléctrico/neumático, integración de proyectos y soporte técnico). Desarrollado con **React + Vite** y **CSS Vanilla** avanzado, sin dependencias complejas para facilitar un mantenimiento simple y un rendimiento web sobresaliente.

---

## 🛠️ Requisitos e Instalación

Para ejecutar este proyecto en tu computadora local, necesitas tener instalado [Node.js](https://nodejs.org/) (se recomienda v18 o superior) y npm.

1. **Clonar o descargar** este directorio.
2. Abre la consola en esta carpeta y ejecuta:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo local con:
   ```bash
   npm run dev
   ```
   *El sitio web se abrirá automáticamente en tu navegador bajo la dirección `http://localhost:3000`.*

4. Para compilar la versión optimizada para producción (listo para subir al servidor):
   ```bash
   npm run build
   ```
   *Esto generará una carpeta `/dist` en la raíz del proyecto con el HTML, CSS y JS minificados.*

---

## 📂 ¿Cómo Modificar el Contenido? (Fácil Edición)

Para que no necesites tocar código React ni HTML complejo al actualizar datos, toda la información está centralizada y estructurada en archivos JavaScript dentro de `/src/data/`:

### 1. Cambiar Datos de Contacto, Redes y Horarios
Abre el archivo [company.js](file:///src/data/company.js):
- Modifica los campos de `address` (dirección), `phone` (teléfono), `email`, `schedule` (horarios de atención) y `social` (enlaces de Facebook, LinkedIn y WhatsApp).
- Cualquier cambio aquí se reflejará automáticamente en el header, footer, página de contacto y botones de WhatsApp de todo el sitio.

### 2. Modificar, Agregar o Quitar Productos
Abre el archivo [products.js](file:///src/data/products.js):
- Contiene tres grandes bloques: `plcs`, `variadores` y `hmi`.
- Dentro de `items`, cada elemento representa una tarjeta de producto. Puedes cambiar el `title` (título), `subtitle` (subtítulo), `description` (descripción), `features` (especificaciones técnicas), `applications` (aplicaciones) y la ruta de la `image`.

### 3. Actualizar Servicios
Abre el archivo [services.js](file:///src/data/services.js):
- Modifica los servicios técnicos. Puedes elegir iconos del catálogo de Lucide (ej: `Package`, `Cpu`, `Wrench`, `Code`, `Layers`, `Activity`, `Lightbulb`).

### 4. Cambiar Imágenes
- Puedes usar enlaces directos de imágenes alojadas en internet (como las que tiene el catálogo de CEITSA por defecto en este código).
- Si deseas usar archivos de imagen locales:
  1. Coloca las imágenes en una nueva carpeta en `/public/images/`.
  2. Modifica el campo `image` del producto en `/src/data/products.js` con la ruta relativa: `"/images/nombre-imagen.png"`.

---

## 📝 Conexión del Formulario de Cotización

El formulario cuenta con validaciones de campos en español y un simulador de envío de 1.5s que muestra una pantalla de éxito.
Para conectarlo a un servicio real, abre el archivo [ContactForm.jsx](file:///src/components/ContactForm.jsx) e inspecciona el bloque `handleSubmit` (Línea 117).
Puedes conectarlo fácilmente a **Formspree** (gratis) reemplazando la simulación por el bloque de fetch detallado en los comentarios de ese mismo archivo.

---

## 🚀 Cómo Subir a GitHub

1. Inicializa el repositorio git local en esta carpeta:
   ```bash
   git init
   ```
2. Añade un archivo `.gitignore` (puedes crearlo en la raíz) con el siguiente contenido para no subir basura:
   ```text
   node_modules/
   dist/
   .DS_Store
   ```
3. Agrega todos los archivos al commit:
   ```bash
   git add .
   git commit -m "Initial commit - CEITSA industrial website"
   ```
4. Vincula tu repositorio remoto de GitHub (reemplaza con tu URL real):
   ```bash
   git branch -M main
   git remote add origin https://github.com/tu-usuario/ceitsa-web.git
   git push -u origin main
   ```

---

## 🌐 Despliegue en un Servidor Linux

Tras ejecutar `npm run build`, obtendrás la carpeta `/dist/`. El contenido de esa carpeta es lo único que debes copiar al servidor web.

### Despliegue con Nginx
1. Sube el contenido de la carpeta `/dist` al directorio de tu servidor, por ejemplo: `/var/www/html/ceitsa/`.
2. Para que el enrutamiento de React Router funcione al recargar páginas internas (como `/plcs`), debes configurar Nginx para redirigir las peticiones inexistentes a `index.html`. 
3. Reemplaza o añade la siguiente configuración a tu bloque `server` de Nginx (tienes el archivo de referencia `nginx.conf` en este repositorio):
   ```nginx
   server {
       listen 80;
       server_name tu-dominio.com;

       location / {
           root /var/www/html/ceitsa;
           index index.html index.htm;
           try_files $uri $uri/ /index.html;
       }
   }
   ```
4. Reinicia Nginx para aplicar cambios:
   ```bash
   sudo systemctl restart nginx
   ```

### Despliegue con Apache
1. Sube el contenido de `/dist` a tu servidor (ej. `/var/www/html/`).
2. En este repositorio ya se incluye un archivo `.htaccess`. Al copiarlo junto con tu proyecto a la raíz de Apache, este se encargará de habilitar el redireccionamiento para evitar errores `404 Not Found` al recargar la web.
   *(Asegúrate de que la directiva `AllowOverride All` esté habilitada en tu archivo de configuración de Apache `/etc/httpd/conf/httpd.conf` o `/etc/apache2/apache2.conf` para el directorio correspondiente).*
