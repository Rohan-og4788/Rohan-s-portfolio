import { motion } from 'framer-motion'
import { SERVICES } from '../../data/site'

const colorMap = {
  cyan: 'group-hover:border-cyan-500/30 group-hover:shadow-cyan-500/10 hover:bg-cyan-950/20 text-cyan-400 border-cyan-500/20 bg-cyan-500/10',
  violet: 'group-hover:border-violet-500/30 group-hover:shadow-violet-500/10 hover:bg-violet-950/20 text-violet-400 border-violet-500/20 bg-violet-500/10',
  red: 'group-hover:border-rose-500/30 group-hover:shadow-rose-500/10 hover:bg-rose-950/20 text-rose-400 border-rose-500/20 bg-rose-500/10',
  emerald: 'group-hover:border-emerald-500/30 group-hover:shadow-emerald-500/10 hover:bg-emerald-950/20 text-emerald-400 border-emerald-500/20 bg-emerald-500/10'
}

export default function ServicesSection() {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="mx-auto max-w-6xl">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-pink-500">
            Capabilities
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Professional Services
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
            Fusing robust code compilation with creative interfaces to solve business bottlenecks.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const glowClass = colorMap[s.color]
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8%' }}
                transition={{ type: 'spring', stiffness: 220, damping: 22, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-slate-950/40 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-800"
              >
                {/* Visual Spot blur */}
                <div className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-10 blur-3xl transition duration-500 group-hover:opacity-20`} style={{ backgroundColor: s.color === 'cyan' ? '#06b6d4' : s.color === 'violet' ? '#8b5cf6' : s.color === 'red' ? '#f43f5e' : '#10b981' }} />

                <div className="flex gap-5 items-start">
                  
                  {/* Glowing Box Icon */}
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-xl transition-all duration-300 group-hover:scale-110 ${glowClass}`}>
                    <span>{s.icon}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-slate-100 transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-5">
                      {s.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-1.5">
                      {s.features.map((f, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                          <span className="h-1 w-1 bg-cyan-400 rounded-full" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
