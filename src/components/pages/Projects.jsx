import { motion } from 'framer-motion'
import { PROJECTS } from '../../data/site'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const containerVars = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const cardVars = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
}

export default function Projects() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
      variants={containerVars}
      className="py-12"
    >
      <motion.div variants={cardVars} className="mb-12">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Selected Projects</h1>
        <p className="mt-4 text-xl text-zinc-400">Some of the showcase work I've built recently.</p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.title + i}
            variants={cardVars}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#181920]/80 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/30"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20">
                  <span className="text-xl font-bold">{project.title.charAt(0)}</span>
                </div>
                <div className="flex gap-2 text-zinc-400">
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noreferrer" hover="text-white" className="hover:text-white transition">
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="hover:text-white transition">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400 mb-6">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags?.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-white/5 border border-white/5 px-2.5 py-1 text-xs font-medium text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
