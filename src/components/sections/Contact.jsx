import { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Send, CheckCircle2, AlertCircle, Mail } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import SocialLinks from '../ui/SocialLinks'
import { personal } from '../../data/personal'
import { fadeInUp, viewportOnce } from '../../utils/motion'

// Credenciales de EmailJS (configúralas en tu archivo .env — ver .env.example)
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

// ── Parámetros de seguridad ────────────────────────────────────────────
const LIMITS = { name: 80, email: 100, message: 1000 } // longitudes máximas
const COOLDOWN_MS = 30000 // 30 s mínimo entre envíos (anti-flood)
const MIN_FILL_MS = 1500 // si se envía en menos de 1.5 s, es un bot
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Sección Contacto: formulario funcional con EmailJS + enlaces directos.
 *
 * Capas de seguridad:
 *  1. Honeypot      → campo oculto que solo rellenan los bots.
 *  2. Time-trap     → descarta envíos instantáneos (automatizados).
 *  3. Validación    → longitudes y formato de correo estrictos.
 *  4. Rate limiting → cooldown entre envíos para frenar spam por ráfagas.
 *  5. Payload mínimo→ se envían solo los 3 campos válidos (no el honeypot).
 *
 * Estados: idle | sending | success | error | invalid | rate
 */
function Contact() {
  const { t } = useTranslation()
  const formRef = useRef(null)
  const renderedAt = useRef(Date.now()) // marca de tiempo de montaje
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = formRef.current

    // 1) Honeypot: si el campo trampa tiene contenido, es un bot.
    //    Fingimos éxito para no darle pistas.
    if (form.company.value.trim() !== '') {
      setStatus('success')
      form.reset()
      return
    }

    // 2) Time-trap: envío demasiado rápido para ser humano.
    if (Date.now() - renderedAt.current < MIN_FILL_MS) {
      setStatus('success')
      form.reset()
      return
    }

    // 3) Validación y saneamiento (trim + longitudes + formato de correo).
    const name = form.user_name.value.trim()
    const email = form.user_email.value.trim()
    const message = form.message.value.trim()

    if (
      name.length < 2 ||
      name.length > LIMITS.name ||
      email.length > LIMITS.email ||
      !EMAIL_RE.test(email) ||
      message.length < 10 ||
      message.length > LIMITS.message
    ) {
      setStatus('invalid')
      return
    }

    // 4) Rate limiting: respeta un cooldown entre envíos.
    const last = Number(localStorage.getItem('lastContactAt') || 0)
    if (Date.now() - last < COOLDOWN_MS) {
      setStatus('rate')
      return
    }

    // 5) Verifica que EmailJS esté configurado.
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.warn('EmailJS no está configurado. Revisa tu archivo .env')
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      // Enviamos SOLO los campos válidos (nunca el honeypot ni datos extra).
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { user_name: name, user_email: email, message },
        { publicKey: PUBLIC_KEY },
      )
      localStorage.setItem('lastContactAt', String(Date.now()))
      setStatus('success')
      form.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-content-primary ' +
    'placeholder:text-content-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent'

  // Mensaje de error según el estado
  const errorMsg = {
    error: t('contact.error'),
    invalid: t('contact.error_validation'),
    rate: t('contact.error_rate'),
  }[status]

  return (
    <section id="contact" className="py-24">
      <div className="container-section">
        <SectionTitle
          number="04"
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-xl"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Honeypot anti-bots: invisible para humanos, atractivo para bots */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: '-9999px',
                width: '1px',
                height: '1px',
                opacity: 0,
              }}
            />

            <input
              type="text"
              name="user_name"
              required
              maxLength={LIMITS.name}
              autoComplete="name"
              placeholder={t('contact.name')}
              className={inputClass}
            />
            <input
              type="email"
              name="user_email"
              required
              maxLength={LIMITS.email}
              autoComplete="email"
              placeholder={t('contact.email')}
              className={inputClass}
            />
            <textarea
              name="message"
              required
              rows={5}
              maxLength={LIMITS.message}
              placeholder={t('contact.message')}
              className={`${inputClass} resize-none`}
            />

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={18} />
              {status === 'sending' ? t('contact.sending') : t('contact.send')}
            </button>
          </form>

          {/* Mensajes de estado */}
          {status === 'success' && (
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-green-400">
              <CheckCircle2 size={16} /> {t('contact.success')}
            </p>
          )}
          {errorMsg && (
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-red-400">
              <AlertCircle size={16} /> {errorMsg}
            </p>
          )}

          {/* Contacto directo */}
          <div className="mt-10 flex flex-col items-center gap-4 border-t border-dark-700 pt-8">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 text-content-secondary transition-colors hover:text-accent"
            >
              <Mail size={16} /> {personal.email}
            </a>
            <SocialLinks />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
