// ── Tech Stack (Fase 5) ────────────────────────────────────────────────
// Cada habilidad referencia un icono de react-icons (Simple Icons).
// El color es el oficial de cada tecnología, usado en el hover de la grilla.
//
// La lista refleja el stack que realmente aparece en los proyectos y en el
// CV: frontend, backend/datos y escritorio. 15 elementos = 3 filas de 5.

import {
  SiReact,
  SiJavascript,
  SiVite,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiJsonwebtokens,
  SiJest,
  SiPython,
  SiQt,
  SiHtml5,
  SiCss,
  SiGit,
} from 'react-icons/si'

export const skills = [
  // Frontend
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Vite', icon: SiVite, color: '#646CFF' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },

  // Backend, datos y pruebas
  { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'JWT', icon: SiJsonwebtokens, color: '#FB015B' },
  { name: 'Jest', icon: SiJest, color: '#C21325' },

  // Escritorio y fundamentos
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'PyQt5', icon: SiQt, color: '#41CD52' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss, color: '#1572B6' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
]
