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

/**
 * Sección Contacto: formulario funcional con EmailJS + enlaces directos.
 * Estados: idle → sending → success | error.
 */
function Contact() {
  const { t } = useTranslation()
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // Si aún no has configurado EmailJS, avisamos en consola sin romper la app
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.warn('EmailJS no está configurado. Revisa tu archivo .env')
      setStatus('error')
      return
    }

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      setStatus('success')
      formRef.current.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-content-primary ' +
    'placeholder:text-content-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent'

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
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="user_name"
              required
              placeholder={t('contact.name')}
              className={inputClass}
            />
            <input
              type="email"
              name="user_email"
              required
              placeholder={t('contact.email')}
              className={inputClass}
            />
            <textarea
              name="message"
              required
              rows={5}
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
          {status === 'error' && (
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-red-400">
              <AlertCircle size={16} /> {t('contact.error')}
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
