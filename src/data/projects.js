// ── Datos de proyectos (Fase 5) ────────────────────────────────────────
// Cada proyecto tiene textos bilingües (es/en). Las tarjetas se generan
// dinámicamente a partir de este arreglo en el componente Projects.
//
// Para añadir un proyecto nuevo, copia un objeto y rellena los campos.
// La imagen va en /public/projects/  (por ahora usamos un placeholder).

export const projects = [
  {
    id: 'libreria-saber',
    title: 'SGI Librería el Saber',
    image: '/projects/libreria-saber.png', // TODO: reemplazar por mockup real
    description: {
      es: 'Sistema de inventario web full-stack para gestionar productos, stock y ventas de una librería, con panel administrativo e interfaz responsiva.',
      en: 'Full-stack web inventory system to manage products, stock and sales for a bookstore, with an admin panel and a responsive interface.',
    },
    tags: ['React', 'Node.js', 'Express', 'MySQL'],
    repo: 'https://github.com/cperdomope', // TODO: enlace al repo específico
    demo: '', // si hay demo en vivo, ponla aquí
    featured: true,
  },
  {
    id: 'parqueadero',
    title: 'Sistema de Gestión de Parqueaderos',
    image: '/projects/parqueadero.png', // TODO: reemplazar por mockup real
    description: {
      es: 'Aplicación de escritorio para optimizar la rotación vehicular: registro de entradas/salidas, cálculo de tarifas y control de cupos en tiempo real.',
      en: 'Desktop application to optimize vehicle rotation: entry/exit logging, fee calculation and real-time slot control.',
    },
    tags: ['Python', 'PyQt5', 'MySQL'],
    repo: 'https://github.com/cperdomope', // TODO: enlace al repo específico
    demo: '',
    featured: true,
  },
]
