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
      es: {
        challenge:
          'La gestión manual del inventario de una librería era lenta y propensa a errores, sin control real del stock.',
        solution:
          'Desarrollé un sistema web full-stack en la nube con React, Node.js y MySQL, con panel administrativo e interfaz responsiva.',
        result:
          'Centralizó el control de más de 500 libros, agilizando el seguimiento de stock y ventas.',
      },
      en: {
        challenge:
          'A bookstore managed its inventory manually — slow, error-prone and without real stock control.',
        solution:
          'I built a full-stack, cloud-hosted web system with React, Node.js and MySQL, with an admin panel and a responsive interface.',
        result:
          'Centralized control of 500+ books, streamlining stock and sales tracking.',
      },
    },
    tags: ['React', 'Node.js', 'Express', 'MySQL'],
    repo: 'https://github.com/cperdomope/SGI-Libreria-el-Saber',
    demo: 'https://sgi-libreria-frontend.vercel.app/',
    featured: true,
  },
  {
    id: 'parqueadero',
    title: 'Sistema de Gestión de Parqueaderos',
    image: '/projects/parqueadero.png', // TODO: reemplazar por mockup real
    description: {
      es: {
        challenge:
          'Administrar la rotación de cerca de 500 vehículos bajo reglas complejas era difícil de controlar manualmente.',
        solution:
          'Construí una aplicación de escritorio en Python (PyQt5) y MySQL que asigna cupos según el estado del vehículo (pico y placa, híbrido, eléctrico) y el cargo del funcionario.',
        result:
          'Automatizó la rotación y mantuvo la disponibilidad de cupos controlada en tiempo real.',
      },
      en: {
        challenge:
          'Managing the rotation of nearly 500 vehicles under complex rules was hard to control manually.',
        solution:
          'I built a desktop application in Python (PyQt5) and MySQL that assigns spots based on vehicle category (pico y placa, hybrid, electric) and staff role.',
        result:
          'Automated rotation and kept parking availability under control in real time.',
      },
    },
    tags: ['Python', 'PyQt5', 'MySQL'],
    repo: 'https://github.com/cperdomope/Proyecto-Parqueadero-Slud',
    demo: '', // app de escritorio: sin demo web
    featured: true,
  },
]
