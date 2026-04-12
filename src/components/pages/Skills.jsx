import { motion } from 'framer-motion'
import { SKILLS } from '../../data/site'

const containerVars = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVars = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto min-h-[calc(100vh-8rem)] flex flex-col justify-center">
      <motion.div
        initial="hidden"
        animate="show"
        exit={{ opacity: 0, y: -20 }}
        variants={containerVars}
        className="w-full"
      >
        <motion.div variants={itemVars} className="mb-16">
          <div className="flex items-center gap-4 mb-4">
              <div className="h-1 w-12 bg-cyan-500 rounded-full"></div>
              <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest">Capabilities</h2>
           </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight">Technical Skills</h1>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl leading-relaxed">
            I've worked with a variety of technologies across the stack, focusing on performance, scalability, and clean architecture.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skillGroup, i) => (
            <motion.div 
              key={skillGroup.category} 
              variants={itemVars}
              className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-slate-900/50 p-8 backdrop-blur-md shadow-xl"
            >
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full" />
              
              <h3 className="text-xl font-bold text-white mb-6 relative z-10">{skillGroup.category}</h3>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {skillGroup.items.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="cursor-default rounded-xl bg-slate-800 border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-300 transition-colors hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 shadow-sm"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
