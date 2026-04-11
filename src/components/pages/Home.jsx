import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const containerVars = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVars = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
}

export default function Home({ profile }) {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center min-h-[70vh]"
      variants={containerVars}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center w-full">
        {/* Dynamic Profile Focus */}
        <motion.div className="lg:col-span-7 flex flex-col items-start" variants={containerVars}>
          <motion.div variants={itemVars} className="group relative pr-4 py-1 mb-4 flex items-center gap-3 overflow-hidden rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="h-8 w-8 ml-1 grid place-items-center rounded-full bg-indigo-500 tracking-wider text-xs font-bold shadow-[0_0_15px_rgba(99,102,241,0.5)]">
               {profile.name.slice(0, 1).toUpperCase()}
            </div>
            <span className="text-sm font-medium text-zinc-300">
              {profile.location} Based Developer
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVars} className="text-5xl font-extrabold tracking-tight sm:text-7xl">
            Hi, I'm <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">{profile.name}</span>
          </motion.h1>
          
          <motion.h2 variants={itemVars} className="mt-4 text-2xl font-semibold text-zinc-300 sm:text-3xl">
            {profile.title}
          </motion.h2>

          <motion.p variants={itemVars} className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            I’m a passionate React developer specializing in building clean, intuitive interfaces and highly responsive user experiences. I deeply care about code quality, performance, and accessibility. Let's create beautiful web applications together.
          </motion.p>

          <motion.div variants={itemVars} className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="group flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500 transform hover:scale-105 active:scale-95"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/skills"
              className="flex items-center justify-center rounded-xl bg-white/10 border border-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/20 transform hover:scale-105 active:scale-95"
            >
              My Skills
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center rounded-xl bg-white/10 border border-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/20 transform hover:scale-105 active:scale-95"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Visual / Detailed Card */}
        <motion.div variants={itemVars} className="lg:col-span-5 relative">
          <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500/30 to-purple-600/30 blur-2xl rounded-full" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[var(--color-dark-card)]/80 backdrop-blur-xl p-8 shadow-2xl">
              
              <div className="flex justify-between items-start mb-8">
                 <div>
                   <h3 className="text-xl font-bold text-white">Focus Areas</h3>
                   <p className="text-sm text-zinc-400 mt-1">What I bring to the table</p>
                 </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {['React Ecosystem', 'UI/UX Design', 'Performance', 'Modern Tooling'].map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs font-semibold text-zinc-300"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6 mt-4">
                 <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group text-zinc-300 hover:text-white">
                   <div className="bg-black/30 p-2 rounded-lg border border-white/5">
                      <FaGithub size={20} />
                   </div>
                   <span className="text-sm font-semibold font-sans">GitHub</span>
                 </a>
                 <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group text-zinc-300 hover:text-white">
                   <div className="bg-[#0A66C2]/20 p-2 rounded-lg border border-[#0A66C2]/30">
                     <FaLinkedin size={20} className="text-[#0A66C2] group-hover:text-blue-400 transition" />
                   </div>
                   <span className="text-sm font-semibold font-sans">LinkedIn</span>
                 </a>
              </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
