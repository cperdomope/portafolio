import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'
import { personal } from '../../data/personal'
import { staggerContainer, viewportOnce } from '../../utils/motion'

/**
 * Sección Proyectos: genera las tarjetas dinámicamente desde data/projects.js.
 * Incluye una llamada final al perfil de GitHub para ver más trabajo.
 */
function Projects() {
  const { t } = useTranslation()

  return (
    <section id="projects" className="bg-dark-900 py-24">
      <div className="container-section">
        <SectionTitle
          number="03"
          title={t('projects.title')}
          subtitle={t('projects.subtitle')}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-8 md:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* Enlace a más proyectos en GitHub */}
        <div className="mt-12 text-center">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-accent-light transition-colors hover:text-accent"
          >
            {t('nav.projects')} · GitHub
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
