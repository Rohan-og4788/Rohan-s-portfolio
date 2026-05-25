import { motion } from 'framer-motion'
import { TESTIMONIALS } from '../../data/site'

export default function TestimonialsSection() {
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
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
            Endorsements
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Peer Reviews & Feedback
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-400">
            Direct endorsements from collegiate project collaborators, lab partners, and coordinators.
          </p>
        </motion.div>

        {/* Testimonials Row */}
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8%' }}
              transition={{ type: 'spring', stiffness: 220, damping: 22, delay: i * 0.08 }}
              className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/5 bg-slate-950/40 p-8 backdrop-blur-md transition-all duration-300 hover:border-violet-500/20 hover:bg-slate-900/60 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Quote Mark Decorative */}
              <div className="absolute top-4 right-6 font-serif text-8xl text-slate-900 select-none pointer-events-none">
                “
              </div>

              <p className="text-sm text-slate-300 italic leading-relaxed mb-6 z-10 relative">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3 border-t border-slate-900 pt-5 mt-auto">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-lg border border-slate-800">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white tracking-wide">
                    {t.author}
                  </h4>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
