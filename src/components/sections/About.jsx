import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Terminal, Code2, Lightbulb } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import { fadeInUp, staggerContainer, viewportOnce } from '../../utils/motion'

/**
 * Sección Sobre mí: resumen de trayectoria + tres pilares destacados.
 */
function About() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'en' ? 'en' : 'es'

  const highlights = [
    { icon: Terminal, key: 'edu', es: 'Desarrollo de Software', en: 'Software Development' },
    { icon: Code2, key: 'dev', es: 'Full-stack & Escritorio', en: 'Full-stack & Desktop' },
    { icon: Lightbulb, key: 'solve', es: 'Resolución de problemas', en: 'Problem solving' },
  ]

  return (
    <section id="about" className="bg-dark-900 py-24">
      <div className="container-section">
        <SectionTitle number="01" title={t('about.title')} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="text-lg leading-relaxed text-content-secondary"
          >
            {t('about.body')}
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="mt-12 grid gap-6 sm:grid-cols-3"
          >
            {highlights.map(({ icon: Icon, key, es, en }) => (
              <motion.div
                key={key}
                variants={fadeInUp}
                className="rounded-xl border border-dark-700 bg-dark-800 p-6"
              >
                <Icon className="mx-auto text-accent" size={28} />
                <p className="mt-3 text-sm font-medium text-content-primary">
                  {lang === 'en' ? en : es}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
