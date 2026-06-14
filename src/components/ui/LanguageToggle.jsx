import { useTranslation } from 'react-i18next'
import { Languages } from 'lucide-react'

/**
 * Botón que alterna entre español e inglés.
 * Reutilizable en el Navbar (escritorio y móvil).
 */
function LanguageToggle({ className = '' }) {
  const { i18n } = useTranslation()
  const next = i18n.language === 'es' ? 'en' : 'es'

  return (
    <button
      onClick={() => i18n.changeLanguage(next)}
      aria-label={`Cambiar idioma a ${next}`}
      className={`inline-flex items-center gap-1.5 rounded-lg border border-dark-700
        px-3 py-1.5 text-sm font-medium text-content-primary transition-colors
        hover:border-accent hover:text-accent ${className}`}
    >
      <Languages size={15} />
      {next.toUpperCase()}
    </button>
  )
}

export default LanguageToggle
