import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import SectionTitle from '../ui/SectionTitle'
import { skills } from '../../data/skills'
import { fadeInUp, staggerContainer, viewportOnce } from '../../utils/motion'

/** Tarjeta individual de habilidad: el icono toma su color oficial al hover. */
function SkillItem({ name, icon: Icon, color }) {
  const [hover, setHover] = useState(false)

  return (
    <motion.li
      variants={fadeInUp}
      whileHover={{ y: -6 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group flex flex-col items-center gap-3 rounded-xl border
        border-dark-700 bg-dark-800 p-6 transition-colors hover:border-accent/50"
    >
      <Icon
        size={40}
        style={{ color: hover ? color : '#94A3B8' }}
        className="transition-colors duration-300"
      />
      <span className="text-sm font-medium text-content-secondary group-hover:text-content-primary">
        {name}
      </span>
    </motion.li>
  )
}

/**
 * Sección Habilidades: grilla de tecnologías generada desde data/skills.js.
 */
function Skills() {
  const { t } = useTranslation()

  return (
    <section id="skills" className="py-24">
      <div className="container-section">
        <SectionTitle number="02" title={t('skills.title')} />

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5"
        >
          {skills.map((skill) => (
            <SkillItem key={skill.name} {...skill} />
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

export default Skills
