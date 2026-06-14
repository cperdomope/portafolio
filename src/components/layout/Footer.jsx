import { useTranslation } from 'react-i18next'
import SocialLinks from '../ui/SocialLinks'
import { personal } from '../../data/personal'

/**
 * Pie de página: nombre, derechos y redes.
 */
function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-dark-700 bg-dark-950 py-10">
      <div className="container-section flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-center text-sm text-content-muted sm:text-left">
          © {year} {personal.name}. {t('footer.rights')}
        </p>
        <SocialLinks size={18} />
      </div>
    </footer>
  )
}

export default Footer
