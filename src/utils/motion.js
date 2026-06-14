// ── Variantes de animación reutilizables (Framer Motion) ───────────────
// Las usamos en las secciones para animar al hacer scroll (whileInView).

// Aparece desde abajo con desvanecido
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

// Contenedor que anima a sus hijos en cascada (stagger)
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
}

// Props comunes para activar la animación una sola vez al entrar en pantalla
export const viewportOnce = { once: true, amount: 0.2 }
