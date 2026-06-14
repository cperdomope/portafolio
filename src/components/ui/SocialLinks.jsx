import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { personal } from '../../data/personal'

/**
 * Iconos de redes sociales (GitHub, LinkedIn, correo).
 * LinkedIn solo se muestra si personal.linkedin tiene valor.
 */
function SocialLinks({ className = '', size = 20 }) {
  const links = [
    { href: personal.github, icon: FaGithub, label: 'GitHub' },
    personal.linkedin && {
      href: personal.linkedin,
      icon: FaLinkedin,
      label: 'LinkedIn',
    },
    { href: `mailto:${personal.email}`, icon: Mail, label: 'Correo' },
  ].filter(Boolean)

  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {links.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          aria-label={label}
          className="text-content-secondary transition-colors hover:text-accent"
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
