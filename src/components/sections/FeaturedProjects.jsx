import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

function LiveDemoLink({ url, className, children }) {
  if (!url || url === '#') return null
  if (url === '/') {
    return (
      <Link to="/" className={className}>
        {children}
      </Link>
    )
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {children}
    </a>
  )
}

export default function FeaturedProjects({ projects }) {
  const list = projects?.length ? projects : []

  return (
    <section className="relative border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
              Featured
            </p>
            <h2 data-gsap-reveal className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Projects that tell a story
            </h2>
            <p className="mt-3 max-w-xl text-slate-400">
              A curated set — click through to the full projects page for the
              complete list.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-500/40 hover:bg-white/10"
            >
              View all projects
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {list.map((project, i) => (
            <motion.article
              key={project.title + i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ delay: i * 0.08, type: 'spring', stiffness: 260, damping: 24 }}
              whileHover={{ y: -6 }}
              className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/45 shadow-xl backdrop-blur-md transition hover:border-cyan-500/25 hover:shadow-[0_24px_80px_rgba(6,182,212,0.12)]"
            >
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/25 bg-gradient-to-br from-cyan-500/15 to-violet-500/10 text-lg font-black text-cyan-200">
                    {project.title.charAt(0)}
                  </div>
                  <div className="flex gap-2">
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-white/10 bg-slate-950/40 p-2.5 text-slate-300 transition hover:border-white/20 hover:text-white"
                        aria-label="GitHub repository"
                      >
                        <FaGithub size={18} />
                      </a>
                    ) : null}
                    {project.liveUrl && project.liveUrl !== '#' ? (
                      <LiveDemoLink
                        url={project.liveUrl}
                        className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-2.5 text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
                      >
                        <span className="sr-only">Live demo</span>
                        <ExternalLink size={18} aria-hidden />
                      </LiveDemoLink>
                    ) : null}
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-bold text-white transition group-hover:text-cyan-300">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                {project.highlights?.length ? (
                  <ul className="mt-5 space-y-2">
                    {project.highlights.slice(0, 2).map((h) => (
                      <li
                        key={h}
                        className="flex gap-2 text-xs font-medium text-slate-300"
                      >
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-6 flex flex-wrap gap-2 border-t border-white/5 pt-6">
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-white/10 bg-slate-950/30 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
