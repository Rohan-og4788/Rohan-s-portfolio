import { motion } from 'framer-motion'
import { PROJECTS } from '../../data/site'
import { ExternalLink, CheckCircle2 } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const containerVars = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

const cardVars = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } },
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto min-h-[calc(100vh-8rem)] flex flex-col justify-center">
      <motion.div 
        initial="hidden"
        animate="show"
        exit={{ opacity: 0, y: -20 }}
        variants={containerVars}
        className="w-full"
      >
        <motion.div variants={cardVars} className="mb-16">
           <div className="flex items-center gap-4 mb-4">
              <div className="h-1 w-12 bg-cyan-500 rounded-full"></div>
              <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest">Portfolio</h2>
           </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight">Selected Projects</h1>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl leading-relaxed">
            A showcase of my recent work, highlighting problem-solving, clean code, and user experience.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title + i}
              variants={cardVars}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-white/5 bg-slate-800/30 p-1 backdrop-blur-sm transition-all hover:shadow-[0_0_40px_rgba(6,182,212,0.1)] hover:border-cyan-500/30"
            >
              <div className="h-full rounded-[1.75rem] bg-slate-900/50 p-6 sm:p-8 flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-6">
                  {/* Subtle Icon Box */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold">{project.title.charAt(0)}</span>
                  </div>
                  
                  {/* Action Links */}
                  <div className="flex gap-2">
                    {project.repoUrl && (
                      <a href={project.repoUrl} target="_blank" rel="noreferrer" title="Source Code" className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700 hover:border-slate-600 transition-all">
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" title="Live Demo" className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500 hover:text-slate-900 shadow-[0_0_10px_rgba(6,182,212,0)] hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="mb-6 flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <p className="text-base leading-relaxed text-slate-400 mb-6">{project.description}</p>
                  
                  {project.highlights && (
                    <ul className="space-y-2 mb-6">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                           <CheckCircle2 size={16} className="text-cyan-500 mt-0.5 shrink-0" />
                           <span className="leading-snug">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-800">
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-slate-800 border border-slate-700 px-3 py-1.5 text-xs font-semibold tracking-wide text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
