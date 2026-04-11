import { motion } from 'framer-motion'
import { SKILLS } from '../../data/site'

const containerVars = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
}

const pillVars = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } },
}

export default function Skills() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
      variants={containerVars}
      className="py-12 max-w-4xl"
    >
      <motion.div variants={pillVars} className="mb-12">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl">My Skills</h1>
        <p className="mt-4 text-xl text-zinc-400">The tools and technologies I use to build robust web applications.</p>
      </motion.div>

      <div className="rounded-3xl border border-white/10 bg-[var(--color-dark-card)] p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full" />
        
        <div className="flex flex-wrap gap-4 relative z-10">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill}
              variants={pillVars}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(99, 102, 241, 0.1)', borderColor: 'rgba(99, 102, 241, 0.3)' }}
              className="cursor-default rounded-xl bg-white/5 border border-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
