import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'

// Ruta de la canción. El archivo vive en: public/audio/music1.mp3
const TRACK = '/audio/music1.mp3'
const STORAGE_KEY = 'music-on'

/**
 * Botón flotante para activar/silenciar la música de fondo.
 * - Arranca APAGADO por defecto (los navegadores bloquean el autoplay con sonido).
 * - Recuerda la preferencia del usuario en localStorage.
 * - La música se reproduce en bucle.
 */
function MusicToggle() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  // Al montar, intenta restaurar la preferencia previa del usuario
  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === 'true' && audioRef.current) {
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        // Si el navegador bloquea el autoplay, queda apagado sin romper nada
        .catch(() => setPlaying(false))
    }
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      audio.pause()
      setPlaying(false)
      localStorage.setItem(STORAGE_KEY, 'false')
    } else {
      audio
        .play()
        .then(() => {
          setPlaying(true)
          localStorage.setItem(STORAGE_KEY, 'true')
        })
        .catch((err) => console.warn('No se pudo reproducir el audio:', err))
    }
  }

  return (
    <>
      {/* Elemento de audio (sin controles visibles) */}
      <audio ref={audioRef} src={TRACK} loop preload="none" />

      <motion.button
        onClick={toggle}
        whileTap={{ scale: 0.9 }}
        aria-label={playing ? 'Silenciar música' : 'Activar música'}
        title={playing ? 'Silenciar música' : 'Activar música de fondo'}
        className="fixed bottom-6 left-6 z-50 flex h-11 w-11 items-center justify-center
          rounded-full border border-dark-700 bg-dark-800/90 text-content-primary
          backdrop-blur transition-colors hover:border-accent hover:text-accent"
      >
        {/* Anillo que pulsa cuando suena */}
        {playing && (
          <motion.span
            className="absolute inset-0 rounded-full border border-accent"
            animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut' }}
          />
        )}
        {playing ? <Volume2 size={18} /> : <VolumeX size={18} />}
      </motion.button>
    </>
  )
}

export default MusicToggle
