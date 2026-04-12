import { motion } from 'framer-motion'
import { ACHIEVEMENTS } from '../../data/site'
import { Award, Calendar } from 'lucide-react'

const containerVars = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const itemVars = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } },
}

export default function Experience() {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 w-full max-w-4xl mx-auto min-h-[calc(100vh-8rem)] flex flex-col justify-center">
      <motion.div
        initial="hidden"
        animate="show"
        exit={{ opacity: 0, y: -20 }}
        variants={containerVars}
        className="w-full"
      >
        <motion.div variants={itemVars} className="mb-16">
          <div className="flex items-center gap-4 mb-4">
              <div className="h-1 w-12 bg-violet-500 rounded-full"></div>
              <h2 className="text-sm font-bold text-violet-400 uppercase tracking-widest">Journey</h2>
           </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight">Experience & Achievements</h1>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-6 mt-12 space-y-12">
          {ACHIEVEMENTS.map((achievement, i) => (
            <motion.div key={i} variants={itemVars} className="relative pl-8 md:pl-12 group">
              {/* Timeline dot */}
              <div className="absolute -left-[21px] top-1 h-10 w-10 rounded-full bg-slate-900 border-[4px] border-slate-900 ring-2 ring-white/10 group-hover:ring-violet-500/50 flex items-center justify-center transition-colors">
                <div className="h-3 w-3 bg-violet-500 rounded-full glow-violet group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
              </div>
              
              <div className="bg-slate-900/60 border border-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-md transition-all hover:bg-slate-800/80 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/10">
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400 font-semibold mb-3">
                  <span className="flex items-center gap-1.5 bg-white/5 rounded-lg px-3 py-1 text-violet-300">
                    <Calendar size={14} />
                    {achievement.year}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
