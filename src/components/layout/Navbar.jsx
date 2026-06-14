import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import LanguageToggle from '../ui/LanguageToggle'
import { useActiveSection } from '../../hooks/useActiveSection'

const SECTION_IDS = ['about', 'skills', 'projects', 'contact']

/**
 * Barra de navegación fija.
 * - Fondo transparente arriba; al hacer scroll aparece un fondo con blur.
 * - Resalta el enlace de la sección visible (scroll-spy).
 * - Menú hamburguesa animado en móvil.
 */
function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)

  // Detecta el scroll para cambiar el fondo del navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = SECTION_IDS.map((id) => ({ id, label: t(`nav.${id}`) }))

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-dark-700 bg-dark-950/80 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-section flex h-16 items-center justify-between">
        {/* Logo / iniciales */}
        <a href="#hero" className="font-mono text-lg font-bold text-content-primary">
          {'<'}
          <span className="text-accent">CP</span>
          {' />'}
        </a>

        {/* Links escritorio */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`relative text-sm font-medium transition-colors ${
                  active === link.id
                    ? 'text-content-primary'
                    : 'text-content-secondary hover:text-content-primary'
                }`}
              >
                {link.label}
                {/* Subrayado animado en la sección activa */}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-accent"
                  />
                )}
              </a>
            </li>
          ))}
          <li>
            <LanguageToggle />
          </li>
        </ul>

        {/* Controles móvil */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
            className="text-content-primary"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Menú desplegable móvil animado */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-dark-700 bg-dark-950/95 backdrop-blur-md md:hidden"
          >
            {links.map((link) => (
              <li key={link.id} className="px-6">
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`block py-3 transition-colors ${
                    active === link.id
                      ? 'text-accent'
                      : 'text-content-secondary hover:text-accent'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
