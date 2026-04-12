import { motion } from 'framer-motion'
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiLeetcode,
  SiArduino,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

const ICON_MAP = {
  html: SiHtml5,
  css: SiCss,
  js: SiJavascript,
  react: SiReact,
  dsa: SiLeetcode,
  aws: FaAws,
  arduino: SiArduino,
}

export default function SkillsSnapshot({ skills }) {
  const list = skills?.length ? skills : []

  return (
    <section className="relative border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.45 }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-400">
            Toolkit
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Skills snapshot
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-400">
            A quick read on what I lean on day-to-day — depth expands on the
            Skills page.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((s, i) => {
            const Icon = ICON_MAP[s.key] ?? SiReact
            return (
              <motion.div
                key={s.key}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8%' }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-5 shadow-lg backdrop-blur-md transition hover:border-cyan-500/35 hover:shadow-[0_0_32px_rgba(6,182,212,0.12)]"
              >
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl transition group-hover:bg-cyan-400/20" />
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-slate-950/60 text-2xl text-cyan-300 shadow-inner">
                    <Icon aria-hidden />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{s.label}</p>
                    <p className="text-xs text-slate-500">Proficiency</p>
                  </div>
                </div>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 shadow-[0_0_18px_rgba(6,182,212,0.35)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <p className="mt-2 text-right text-xs font-semibold text-slate-500">
                  {s.level}%
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
