import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail } from 'lucide-react'

export default function CtaSection({ profile, compact = false }) {
  const mail = `mailto:${profile.email}?subject=${encodeURIComponent('Let’s collaborate')}`

  return (
    <section
      className={`relative border-t border-white/5 px-4 sm:px-6 lg:px-8 ${
        compact ? 'py-10' : 'py-24'
      }`}
    >
      <div
        className={`mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/15 via-slate-900/80 to-violet-600/15 shadow-2xl backdrop-blur-xl ${
          compact ? 'p-8 sm:p-10' : 'p-10 sm:p-14'
        }`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(6,182,212,0.2),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(139,92,246,0.18),transparent_45%)]" />
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="relative text-center"
        >
          <h2
            className={`font-extrabold tracking-tight text-white ${
              compact ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl md:text-5xl'
            }`}
          >
            Let&apos;s build something{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
              amazing
            </span>{' '}
            together
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            Tell me about the role, the product, or the idea — I reply fastest by
            email.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-8 py-4 text-sm font-bold text-slate-950 shadow-[0_0_30px_rgba(6,182,212,0.35)] transition hover:brightness-110"
            >
              <Mail size={18} />
              Contact me
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <a
              href={mail}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-slate-950/50 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:border-cyan-400/40 hover:bg-slate-900/80"
            >
              Hire me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
