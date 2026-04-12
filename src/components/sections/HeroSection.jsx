import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Download } from 'lucide-react'
import { useTypingCycle } from '../../hooks/useTypingCycle.js'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 320, damping: 26 },
  },
}

function Particles() {
  const spots = [
    { className: 'left-[8%] top-[18%] h-32 w-32', delay: '0s' },
    { className: 'right-[12%] top-[28%] h-24 w-24', delay: '0.4s' },
    { className: 'left-[22%] bottom-[20%] h-20 w-20', delay: '0.8s' },
    { className: 'right-[25%] bottom-[14%] h-36 w-36', delay: '1.1s' },
    { className: 'left-[45%] top-[8%] h-16 w-16', delay: '0.2s' },
  ]
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(6,182,212,0.14),transparent_55%),radial-gradient(ellipse_at_bottom,_rgba(139,92,246,0.12),transparent_50%)]" />
      {spots.map((s, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-cyan-400/15 blur-3xl motion-safe:animate-pulse ${s.className}`}
          style={{ animationDelay: s.delay }}
        />
      ))}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.35) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  )
}

export default function HeroSection({ profile }) {
  const roles = profile.roles?.length ? profile.roles : [profile.title]
  const typed = useTypingCycle(roles, {
    typeSpeed: 78,
    deleteSpeed: 48,
    holdMs: 2100,
    gapMs: 380,
  })

  const nameParts = profile.name?.trim().split(/\s+/) ?? ['You']
  const firstName = nameParts[0] ?? 'You'
  const restName = nameParts.slice(1).join(' ')
  const tagline = profile.tagline ?? profile.aboutTeaser

  return (
    <section className="relative min-h-[calc(100vh-7rem)] overflow-hidden px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-14 lg:px-8">
      <Particles />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <motion.div
              variants={item}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/70 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
              </span>
              <span className="text-sm font-medium text-slate-300">
                Open to internships & full-time roles
              </span>
            </motion.div>

            <motion.div variants={item} className="overflow-hidden">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400/90">
                Hello, I&apos;m
              </p>
              <h1 className="mt-3 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(34,211,238,0.25)]">
                  {firstName}
                </span>
                {restName ? (
                  <span className="mt-2 block text-3xl font-bold text-slate-100 sm:text-4xl lg:text-5xl">
                    {restName}
                  </span>
                ) : null}
              </h1>
            </motion.div>

            <motion.div variants={item} className="mt-6 min-h-[2.75rem] sm:min-h-[3.25rem]">
              <p className="text-xl font-semibold text-slate-200 sm:text-2xl">
                <span className="text-cyan-400">&gt; </span>
                <span className="font-mono text-cyan-100/95">
                  {typed}
                  <span className="ml-1 inline-block h-6 w-0.5 animate-pulse bg-cyan-400 align-middle sm:h-7" />
                </span>
              </p>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-lg leading-relaxed text-slate-400"
            >
              {tagline}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_28px_rgba(6,182,212,0.35)] transition hover:brightness-110 hover:shadow-[0_0_40px_rgba(6,182,212,0.45)]"
              >
                View Projects
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-slate-900/60 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-md transition hover:border-cyan-500/40 hover:bg-slate-800/80"
              >
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>
          </div>

          <motion.div variants={item} className="relative lg:col-span-5">
            <div className="absolute -inset-10 rounded-[3rem] bg-gradient-to-br from-cyan-500/25 via-blue-500/10 to-violet-600/25 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                    At a glance
                  </p>
                  <p className="mt-1 text-lg font-bold text-white">
                    {profile.title}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300">
                  {profile.location}
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-slate-400">
                {profile.aboutTeaser}
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {[
                  { k: 'Focus', v: 'Ship quality' },
                  { k: 'Stack', v: 'React-first' },
                  { k: 'Edge', v: 'UX + perf' },
                ].map((cell) => (
                  <div
                    key={cell.k}
                    className="rounded-2xl border border-white/10 bg-slate-950/40 px-3 py-4"
                  >
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {cell.k}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-slate-100">
                      {cell.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
