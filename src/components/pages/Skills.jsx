import { motion } from 'framer-motion'
import { SKILLS, FLOATING_TECH } from '../../data/site'

const fContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

const fItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 220, damping: 20 } }
}

export default function Skills() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto min-h-[calc(100vh-8rem)] flex flex-col justify-center relative">
      
      {/* Decorative blurred lights */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-500/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial="hidden"
        animate="show"
        variants={fContainer}
        className="w-full relative z-10"
      >
        {/* Page Header */}
        <motion.div variants={fItem} className="mb-14">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-1 w-12 bg-cyan-500 rounded-full" />
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono">Expertise mainframe</h2>
          </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight">
            Technical Skillsets
          </h1>
          <p className="mt-5 text-base text-slate-400 max-w-2xl leading-relaxed">
            I specialize in reactive web platforms, cloud networks, IoT sensory diagnostics, and algorithmic optimizations.
          </p>
        </motion.div>

        {/* Floating tech logos marquee */}
        <motion.div
          variants={fItem}
          className="mb-10 overflow-hidden rounded-2xl border border-white/5 bg-slate-950/40 py-4"
        >
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          >
            {[...FLOATING_TECH, ...FLOATING_TECH].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-xs font-bold font-mono text-cyan-300/80 hover:border-cyan-400/50 hover:text-cyan-200 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {SKILLS.map((skillGroup) => (
            <motion.div 
              key={skillGroup.category} 
              variants={fItem}
              className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-slate-950/45 p-6 sm:p-8 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-cyan-500/15 hover:shadow-cyan-500/5"
            >
              {/* Highlight backdrop */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full" />
              
              <h3 className="text-lg font-extrabold text-white mb-6 tracking-wide border-b border-slate-900 pb-3 font-mono flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-cyan-400 rounded-full" />
                {skillGroup.category}
              </h3>
              
              <div className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name}>
                    
                    {/* Label & Percentage */}
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs font-semibold text-slate-200">{skill.name}</span>
                      <span className="text-[10px] font-bold text-slate-500 font-mono">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-1.5 w-full bg-slate-900 border border-slate-800/80 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 shadow-[0_0_12px_rgba(6,182,212,0.4)]"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                      />
                    </div>

                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  )
}
