import { motion } from 'framer-motion'
import { personal } from '../../data/personal'

/**
 * Marca personal: insignia geométrica de esquinas asimétricas con
 * degradado de marca y el monograma "CP", acompañada del wordmark.
 * Sustituye al logo genérico "<CP/>" por una identidad más propia.
 */
function Logo({ roleLabel }) {
  return (
    <a
      href="#hero"
      aria-label={`${personal.shortName} — ${roleLabel}`}
      className="group flex items-center gap-3"
    >
      <motion.span
        whileHover={{ rotate: -6, scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-tl-2xl rounded-tr-md rounded-bl-md rounded-br-2xl bg-accent-gradient shadow-[inset_0_1px_0_rgba(255,255,255,0.45),inset_0_-3px_5px_rgba(6,10,20,0.45),inset_3px_0_6px_rgba(6,10,20,0.12),0_8px_16px_-6px_rgba(15,62,180,0.55),0_2px_4px_rgba(0,0,0,0.35)] transition-shadow duration-300 group-hover:shadow-glow"
      >
        {/* Recorte interno: grano y brillo no deben sobresalir de la insignia */}
        <span className="absolute inset-0 overflow-hidden rounded-[inherit]">
          {/* Grano fino tipo metal cepillado */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
            }}
          />
          {/* Brillo especular pulido */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[10%] top-[6%] h-[42%] w-[60%] rounded-full blur-[1px]"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(255,246,232,0.55) 0%, rgba(255,246,232,0.14) 45%, transparent 72%)',
            }}
          />
        </span>

        <span
          className="relative flex items-baseline font-sans text-lg font-extrabold italic tracking-tighter text-white"
          style={{ textShadow: '0 1px 0 rgba(255,255,255,0.5), 0 1px 2px rgba(6,10,25,0.35)' }}
        >
          C<span className="-ml-1 text-white/75">P</span>
        </span>

        {/* Joya / cuenta */}
        <span
          className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 animate-pulse rounded-full ring-2 ring-dark-950"
          style={{
            background: 'radial-gradient(circle at 34% 30%, #FFFFFF 0%, #DCE9FF 38%, #3B82F6 100%)',
            boxShadow: '0 2px 6px rgba(59,130,246,0.85)',
          }}
        />
      </motion.span>

      <span className="hidden flex-col leading-tight sm:flex">
        <span className="font-sans text-sm font-bold text-content-primary">
          {personal.shortName}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-content-muted">
          {roleLabel}
        </span>
      </span>
    </a>
  )
}

export default Logo
