import { useEffect, useState } from 'react'

/**
 * Hook de "scroll-spy".
 * Observa las secciones indicadas y devuelve el id de la que está visible,
 * para resaltar el enlace correspondiente en el Navbar.
 *
 * @param {string[]} ids - ids de las secciones a observar (sin '#').
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      // Se activa cuando la sección cruza el centro de la pantalla
      { rootMargin: '-45% 0px -45% 0px' },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids])

  return active
}
