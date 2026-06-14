import { motion } from 'framer-motion'
import { fadeInUp, viewportOnce } from '../../utils/motion'

/**
 * Título reutilizable para cada sección.
 * Muestra un número decorativo, el título y un subtítulo opcional.
 */
function SectionTitle({ number, title, subtitle }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="mb-12 text-center"
    >
      <div className="mb-3 flex items-center justify-center gap-3 font-mono text-sm text-accent-light">
        {number && <span>{number}.</span>}
        <span className="h-px w-8 bg-accent/50" />
      </div>
      <h2 className="text-3xl md:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-content-secondary">{subtitle}</p>
      )}
    </motion.div>
  )
}

export default SectionTitle
