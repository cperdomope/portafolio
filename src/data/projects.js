// ── Datos de proyectos (Fase 5) ────────────────────────────────────────
// Cada proyecto tiene textos bilingües (es/en). Las tarjetas se generan
// dinámicamente a partir de este arreglo en el componente Projects.
//
// Los textos describen decisiones técnicas reales del repositorio de cada
// proyecto, de modo que coincidan con lo que afirma el CV (/public/cv).
//
// Para añadir un proyecto nuevo, copia un objeto y rellena los campos.
// La imagen va en /public/projects/.

export const projects = [
  {
    id: 'libreria-saber',
    title: 'SGI Librería el Saber',
    image: '/projects/libreria-saber.png',
    description: {
      es: {
        challenge:
          'El inventario se llevaba a mano: el stock registrado dejaba de coincidir con el real y una venta mal anotada se perdía sin rastro.',
        solution:
          'Construí un sistema full-stack con React 19 y una API REST en Express 5 sobre MySQL. Las ventas y los movimientos de kardex se escriben dentro de transacciones con rollback, y el acceso está protegido con JWT, roles, bcrypt, Helmet y límite de peticiones por IP.',
        result:
          'Cada movimiento de stock quedó trazado y auditable, respaldado por 63 pruebas automatizadas con Jest y Supertest, y desplegado en Railway y Vercel.',
      },
      en: {
        challenge:
          'Inventory was tracked by hand: recorded stock drifted away from the real count and a mistyped sale left no trace.',
        solution:
          'I built a full-stack system with React 19 and an Express 5 REST API on MySQL. Sales and stock movements are written inside transactions with rollback, and access is protected with JWT, roles, bcrypt, Helmet and per-IP rate limiting.',
        result:
          'Every stock movement became traceable and auditable, backed by 63 automated tests with Jest and Supertest, and deployed on Railway and Vercel.',
      },
    },
    tags: ['React 19', 'Node.js', 'Express 5', 'MySQL', 'JWT', 'Jest'],
    repo: 'https://github.com/cperdomope/SGI-Libreria-el-Saber',
    demo: '', // backend fuera de linea: reponer la URL cuando este desplegado de nuevo
    featured: true,
  },
  {
    id: 'parqueadero',
    title: 'Sistema de Gestión de Parqueaderos',
    image: '/projects/parqueadero.png',
    description: {
      es: {
        challenge:
          'Repartir las celdas de dos sótanos entre los funcionarios era inmanejable en una hoja de cálculo: pico y placa, tipo de vehículo y cargo se cruzaban en cada asignación.',
        solution:
          'Desarrollé una aplicación de escritorio en Python y PyQt5 organizada por capas, con la regla de pico y placa resuelta en la propia base de datos: columnas generadas derivan la paridad de cada placa, así la app y los reportes clasifican igual.',
        result:
          'La rotación quedó automatizada —una celda se comparte entre dos vehículos de paridad opuesta, salvo los cargos con derecho a celda exclusiva— con reportes en Excel y PDF y entrega como ejecutable de Windows.',
      },
      en: {
        challenge:
          'Splitting the cells of two parking levels among staff was unmanageable in a spreadsheet: plate restrictions, vehicle type and job role crossed on every assignment.',
        solution:
          'I built a layered desktop application in Python and PyQt5, with the plate-restriction rule solved in the database itself: generated columns derive each plate parity, so the app and the reports classify identically.',
        result:
          'Rotation became automatic — one cell is shared by two vehicles of opposite plate parity, except for roles entitled to an exclusive cell — with Excel and PDF reports, shipped as a Windows executable.',
      },
    },
    tags: ['Python', 'PyQt5', 'MySQL', 'PyInstaller', 'ReportLab'],
    repo: 'https://github.com/cperdomope/Proyecto-Parqueadero-Slud',
    demo: '', // app de escritorio: sin demo web
    featured: true,
  },
]
