import { useTranslation } from 'react-i18next'
import { motion, useReducedMotion } from 'framer-motion'
import { Download, FolderGit2, ChevronDown } from 'lucide-react'
import SocialLinks from '../ui/SocialLinks'
import { personal } from '../../data/personal'

/**
 * Sección Hero: saludo, nombre, rol, propuesta de valor y CTAs.
 * Entrada escalonada (stagger) y respeto a "movimiento reducido".
 */
function Hero() {
  const { t } = useTranslation()
  const reduce = useReducedMotion()

  // Si el usuario pidió menos movimiento, anulamos los desplazamientos
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid-pattern bg-[size:40px_40px] pt-24"
    >
      {/* Halo de luz azul de fondo */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-accent/20 blur-[130px]" />

      <div className="container-section relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p variants={item} className="mb-4 font-mono text-accent-light">
            {t('hero.greeting')}
          </motion.p>

          <motion.h1 variants={item} className="text-5xl leading-tight md:text-7xl">
            {personal.name}
          </motion.h1>

          <motion.h2
            variants={item}
            className="mt-3 bg-accent-gradient bg-clip-text text-2xl font-semibold text-transparent md:text-4xl"
          >
            {t('hero.role')}
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg text-content-secondary"
          >
            {t('hero.tagline')}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href={personal.cv} className="btn-primary" download>
              <Download size={18} />
              {t('hero.cta_cv')}
            </a>
            <a href="#projects" className="btn-secondary">
              <FolderGit2 size={18} />
              {t('hero.cta_projects')}
            </a>
          </motion.div>

          <motion.div variants={item}>
            <SocialLinks className="mt-10" />
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de scroll animado */}
      <motion.a
        href="#about"
        aria-label="Bajar a la siguiente sección"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-content-muted hover:text-accent"
      >
        <motion.span
          animate={reduce ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="block"
        >
          <ChevronDown size={26} />
        </motion.span>
      </motion.a>
    </section>
  )
}

export default Hero
