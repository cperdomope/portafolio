import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ExternalLink, FolderGit2 } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { fadeInUp } from '../../utils/motion'

/**
 * Tarjeta de un proyecto. Recibe el objeto `project` desde data/projects.js.
 * - Elige la descripción según el idioma activo.
 * - Si la imagen no existe aún, muestra un placeholder con degradado.
 */
function ProjectCard({ project }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language === 'en' ? 'en' : 'es'
  const desc = project.description[lang]
  const [imgError, setImgError] = useState(false)

  // Estructura Reto / Solución / Resultado de cada proyecto
  const blocks = [
    { label: t('projects.challenge'), text: desc.challenge },
    { label: t('projects.solution'), text: desc.solution },
    { label: t('projects.result'), text: desc.result },
  ]

  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-dark-700
        bg-dark-800 shadow-card transition-colors hover:border-accent/50"
    >
      {/* Imagen / placeholder */}
      <div className="relative aspect-video overflow-hidden bg-dark-900">
        {!imgError ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          // Placeholder elegante cuando aún no hay mockup real
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-dark-800 via-dark-900 to-dark-950">
            <FolderGit2
              size={48}
              className="text-accent/40 transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-accent/0 transition-colors duration-300 group-hover:bg-accent/5" />
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl">{project.title}</h3>
        <div className="mt-3 flex-1 space-y-2 text-sm leading-relaxed">
          {blocks.map(({ label, text }) => (
            <p key={label}>
              <span className="font-semibold text-accent-light">{label}: </span>
              <span className="text-content-secondary">{text}</span>
            </p>
          ))}
        </div>

        {/* Etiquetas de tecnología */}
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent-light"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* Enlaces */}
        <div className="mt-6 flex items-center gap-5 border-t border-dark-700 pt-5">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-content-secondary transition-colors hover:text-accent"
            >
              <FaGithub size={16} /> {t('projects.view_repo')}
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-content-secondary transition-colors hover:text-accent"
            >
              <ExternalLink size={16} /> {t('projects.view_demo')}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
