import { motion } from 'framer-motion'
import { TIMELINE } from '../../data/site'
import { Calendar, Briefcase, Award } from 'lucide-react'

export default function TimelineSection() {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="mx-auto max-w-4xl">
        
        {/* Title details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-400">
            Professional Route
          </p>
<<<<<<< HEAD
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
=======
          <h2 data-gsap-reveal className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
>>>>>>> cc317fdb9f2929f4f58be85e54d6a7a939cbd301
            Experience & Achievements
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
            A comprehensive logging of internships, certification pathways, and academic milestones.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-cyan-500/10 ml-4 sm:ml-8 mt-12 space-y-12">
          {TIMELINE.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ type: 'spring', stiffness: 220, damping: 20, delay: i * 0.08 }}
              className="relative pl-8 sm:pl-12 group"
            >
              {/* Pulsing Timeline Dot */}
              <div className="absolute -left-[18px] top-1.5 h-9 w-9 rounded-full bg-slate-950 border-2 border-cyan-500/30 group-hover:border-cyan-400 flex items-center justify-center transition-colors duration-300">
                <span className="text-sm">{item.icon}</span>
              </div>
              
              {/* Glowing card */}
              <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-slate-950/40 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/25 hover:bg-slate-900/60 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(6,182,212,0.06)]">
                
                {/* Highlight Spotlight blur */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-500/5 blur-3xl transition duration-500 group-hover:bg-cyan-500/10" />

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-semibold mb-3">
                  <span className="flex items-center gap-1.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-3 py-1 rounded-lg">
                    <Calendar size={12} />
                    {item.period}
                  </span>
                  <span className="bg-white/5 px-3 py-1 rounded-lg text-slate-300 tracking-wide text-[10px] uppercase font-mono">
                    {item.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-cyan-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <h4 className="text-xs font-semibold text-slate-400 tracking-wider mb-4">
                  {item.organization}
                </h4>
                
                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Tech chips inside timeline */}
                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-slate-900 border border-slate-800 px-2.5 py-1 text-[10px] font-bold text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
