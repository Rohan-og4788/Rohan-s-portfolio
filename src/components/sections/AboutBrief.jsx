import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { STATS } from '../../data/site'

const QUICK_LINKS = [
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

export default function AboutBrief({ profile }) {
  return (
    <section className="border-t border-white/5 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base"
        >
          {profile.aboutTeaser}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-6 flex flex-wrap gap-3"
        >
          {STATS.map((s) => (
            <span
              key={s.label}
              className="rounded-xl border border-white/5 bg-slate-950/50 px-3 py-2 text-xs font-mono"
            >
              <span className="font-bold text-cyan-400">{s.value}</span>{' '}
              <span className="text-slate-500">{s.label}</span>
            </span>
          ))}
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 flex flex-wrap gap-2"
          aria-label="Explore portfolio"
        >
          {QUICK_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-slate-300 transition hover:border-cyan-500/30 hover:text-cyan-300"
            >
              {label}
              <ArrowRight size={12} />
            </Link>
          ))}
        </motion.nav>
      </div>
    </section>
  )
}
