# Portafolio — Carlos Iván Perdomo Perdomo

Portafolio web personal de un Desarrollador de Software. Diseño oscuro,
minimalista y dinámico, bilingüe (Español / Inglés) y totalmente responsive.

## 🛠️ Tecnologías

- **React 18 + Vite** — base del proyecto (SPA rápida).
- **Tailwind CSS** — sistema de diseño y estilos.
- **Framer Motion** — animaciones y microinteracciones.
- **react-i18next** — soporte bilingüe ES/EN.
- **EmailJS** — formulario de contacto funcional sin backend.

## 🚀 Desarrollo local

```bash
npm install        # instala dependencias
npm run dev        # servidor de desarrollo (http://localhost:5173)
npm run build      # build de producción (carpeta /dist)
npm run preview    # previsualiza el build de producción
```

## 🔐 Variables de entorno

El formulario de contacto usa EmailJS. Copia `.env.example` a `.env` y
completa tus credenciales:

```bash
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

## 📁 Estructura

```
src/
├── components/   # layout, sections y piezas de UI reutilizables
├── data/         # información personal, proyectos y habilidades
├── i18n/         # configuración y traducciones (es / en)
├── hooks/        # hooks personalizados (scroll-spy)
└── utils/        # variantes de animación
```

## 🌐 Despliegue

Desplegado en **Netlify**. La configuración está en `netlify.toml`.

---

© Carlos Iván Perdomo Perdomo
