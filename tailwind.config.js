/** @type {import('tailwindcss').Config} */
export default {
  // Archivos donde Tailwind buscará clases para generar el CSS final
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class', // controlamos el dark mode con la clase .dark en <html>
  theme: {
    extend: {
      // ── PALETA DE COLORES (Design System) ──────────────────────────────
      colors: {
        // Fondos oscuros (de más oscuro a menos)
        dark: {
          950: '#0A0E17', // fondo principal de la página
          900: '#0F1521', // secciones alternas
          800: '#161E2E', // tarjetas (cards)
          700: '#1F2937', // bordes / hover
        },
        // Acento azul eléctrico (Call to Action, links, énfasis)
        accent: {
          DEFAULT: '#2563EB',
          light: '#3B82F6',
          dark: '#1D4ED8',
        },
        // Texto
        content: {
          primary: '#F1F5F9', // títulos / texto fuerte
          secondary: '#94A3B8', // texto de párrafo
          muted: '#64748B', // texto tenue
        },
      },
      // ── TIPOGRAFÍA ─────────────────────────────────────────────────────
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      // ── EFECTOS ────────────────────────────────────────────────────────
      boxShadow: {
        glow: '0 0 40px -10px rgba(59, 130, 246, 0.5)',
        card: '0 10px 30px -15px rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)',
        'accent-gradient': 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
      },
      // ── ANIMACIONES (las usaremos en la Fase 6) ────────────────────────
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
