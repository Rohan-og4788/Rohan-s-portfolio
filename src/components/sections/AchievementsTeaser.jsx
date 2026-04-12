import { motion } from 'framer-motion'

export default function AchievementsTeaser({ achievements }) {
  const list = achievements?.length ? achievements : []

  return (
    <section className="relative border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-400">
            Highlights
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Achievements & milestones
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-400">
            Proof of momentum — hackathons, internships, and continuous learning.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {list.map((a, i) => (
            <motion.article
              key={a.title + a.year}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-12%' }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-950/80 p-6 shadow-lg backdrop-blur-md"
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-violet-500/10 blur-2xl" />
              <div className="text-3xl" aria-hidden>
                {a.icon ?? '✨'}
              </div>
              <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                {a.year}
              </p>
              <h3 className="mt-2 text-lg font-bold text-white">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {a.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
