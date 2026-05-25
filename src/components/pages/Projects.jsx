import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { PROJECTS } from '../../data/site'
import { ExternalLink, Check, Code, ShieldAlert, Cpu, AlertTriangle } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const fContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } }
}

const fItem = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 220, damping: 20 } }
}

// Custom Spot-Light Glowing card element
function SpotlightCard({ project, index }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty('--x', `${x}px`)
    card.style.setProperty('--y', `${y}px`)
  }

  // Get matching category graphics
  const renderMockGraphic = (title) => {
    if (title.includes('Safety')) {
      return (
        <div className="h-full w-full bg-gradient-to-br from-cyan-950/40 to-slate-900 flex flex-col justify-between p-4 border border-cyan-500/10">
          <div className="flex justify-between items-center text-[10px] font-mono text-cyan-400">
            <span>SOS_LINK: SHIELD_DECK</span>
            <ShieldAlert size={14} className="animate-pulse" />
          </div>
          <div className="my-auto flex flex-col items-center">
            <div className="h-10 w-10 rounded-full bg-cyan-500/10 border border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)] animate-pulse">
              SOS
            </div>
            <span className="text-[10px] text-slate-400 font-mono tracking-widest mt-2">BROADCASTING DISTRESS COORDINATES...</span>
          </div>
          <div className="h-1.5 w-full bg-cyan-950 rounded-full overflow-hidden">
            <div className="h-full w-4/5 bg-cyan-400 animate-[pulse_2s_infinite]" />
          </div>
        </div>
      )
    }
    if (title.includes('Smoke')) {
      return (
        <div className="h-full w-full bg-gradient-to-br from-rose-950/40 to-slate-900 flex flex-col justify-between p-4 border border-rose-500/10">
          <div className="flex justify-between items-center text-[10px] font-mono text-rose-400">
            <span>ARDUINO_GAS: TELEMETRY</span>
            <Cpu size={14} />
          </div>
          <div className="my-auto flex flex-col items-center">
            <span className="text-xl font-bold text-rose-400 text-red-glow">420 ppm</span>
            <span className="text-[9px] text-slate-500 font-mono mt-1">CARBON MONOXIDE THRESHOLD</span>
          </div>
          <div className="flex justify-between text-[8px] font-mono text-rose-500">
            <span>FAIL_SAFE: ACTIVE</span>
            <span>TEMP: 32°C</span>
          </div>
        </div>
      )
    }
    if (title.includes('Crowd')) {
      return (
        <div className="h-full w-full bg-gradient-to-br from-amber-950/40 to-slate-900 flex flex-col justify-between p-4 border border-amber-500/10">
          <div className="flex justify-between items-center text-[10px] font-mono text-amber-400">
            <span>CROWD_ANALYTICS: SCHEDULER</span>
            <AlertTriangle size={14} className="text-amber-400" />
          </div>
          <div className="my-auto flex flex-col items-center">
            <span className="text-sm font-bold text-slate-200">PEAK FESTIVAL RUSH</span>
            <span className="text-[9px] text-amber-400 font-mono tracking-widest mt-1">QUEUE DURATION: ~15 MINS</span>
          </div>
          <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden">
            <div className="h-full w-2/3 bg-amber-400" />
          </div>
        </div>
      )
    }
    if (title.includes('Quantum')) {
      return (
        <div className="h-full w-full bg-gradient-to-br from-violet-950/40 to-slate-900 flex flex-col justify-between p-4 border border-violet-500/10">
          <div className="flex justify-between items-center text-[10px] font-mono text-violet-400">
            <span>Q-SECURE: LATTICE_CRYPT</span>
            <Code size={14} />
          </div>
          <div className="my-auto flex flex-col items-center">
            <span className="text-xs font-mono text-violet-300 font-bold tracking-widest">ENCRYPTING TRITON-KEYS...</span>
            <span className="text-[8px] text-slate-500 font-mono mt-1">SHIELD STATUS: 100% UNBREACHED</span>
          </div>
          <div className="h-1 w-full bg-violet-950 rounded-full overflow-hidden">
            <div className="h-full w-full bg-violet-400" />
          </div>
        </div>
      )
    }
    return (
      <div className="h-full w-full bg-gradient-to-br from-emerald-950/40 to-slate-900 flex flex-col justify-between p-4 border border-emerald-500/10">
        <div className="flex justify-between items-center text-[10px] font-mono text-emerald-400">
          <span>PORTFOLIO_MAINFRAME: RENDER</span>
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
        </div>
        <div className="my-auto flex flex-col items-center">
          <span className="text-2xl font-black text-emerald-400">60+ FPS</span>
          <span className="text-[9px] text-slate-500 font-mono mt-1">HARDWARE ACCELERATION ENABLED</span>
        </div>
        <div className="flex justify-between text-[8px] font-mono text-slate-500">
          <span>WEB_SYNTH: ACTIVE</span>
          <span>TERMINAL: READY</span>
        </div>
      </div>
    )
  }

  const spotlightClass = project.glowColor === 'red' 
    ? 'spotlight-glow-rose'
    : project.glowColor === 'amber'
    ? 'spotlight-glow-amber'
    : project.glowColor === 'violet'
    ? 'spotlight-glow-violet'
    : 'spotlight-glow'

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      variants={fItem}
      className={`group relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-slate-950/45 p-6 backdrop-blur-md transition-all duration-300 hover:border-slate-800 ${spotlightClass}`}
    >
      {/* Light spotlight glow layer */}
      <div className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 spotlight-glow group-hover:opacity-100" />

      {/* Holographic mock screenshot panel */}
      <div className="relative z-10 w-full h-40 rounded-2xl overflow-hidden mb-6 bg-slate-900/50 shadow-inner group-hover:scale-[1.02] transition-transform duration-300">
        {renderMockGraphic(project.title)}
      </div>

      {/* Card Details */}
      <div className="relative z-10">
        <div className="flex justify-between items-start gap-4 mb-3">
          <div>
            <span className="text-[9px] font-bold text-cyan-400 uppercase tracking-widest font-mono">
              {project.category}
            </span>
            <h3 className="text-2xl font-black text-white mt-1 group-hover:text-cyan-400 transition-colors duration-300">
              {project.title}
            </h3>
          </div>
          
          {/* Action Links */}
          <div className="flex gap-2">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              title="GitHub Codebase"
              className="p-2.5 rounded-xl bg-slate-900 border border-white/5 text-slate-400 hover:text-white hover:border-white/20 transition-all duration-200"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              title="Deployment Link"
              className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 shadow-lg transition-all duration-200 cursor-pointer"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Narrative storytelling layout */}
        <p className="text-sm leading-relaxed text-slate-300 mb-4">
          {project.description}
        </p>

        {/* Highlight problem resolved */}
        <div className="bg-slate-900/50 border border-white/5 rounded-xl p-3 mb-4">
          <p className="text-[10px] font-bold text-rose-400/90 uppercase tracking-wider font-mono mb-1">
            PROBLEM DIAGNOSTIC:
          </p>
          <p className="text-[11px] text-slate-400 leading-normal">
            {project.problem}
          </p>
        </div>

        {/* Key highlights bulleting */}
        <div className="mb-6">
          <p className="text-[10px] font-bold text-cyan-400/90 uppercase tracking-wider font-mono mb-2">
            NEURAL FEATURES:
          </p>
          <ul className="space-y-1.5">
            {project.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <Check size={13} className="text-cyan-400 mt-0.5 shrink-0" />
                <span className="leading-snug">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech tags footer */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-900">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg bg-slate-900 border border-slate-800/80 px-2.5 py-1 text-[10px] font-bold text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto min-h-[calc(100vh-8rem)] flex flex-col justify-center relative">
      
      {/* Decorative blurred lights */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-violet-500/5 blur-[120px] rounded-full pointer-events-none" />

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
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono">Completed logs</h2>
          </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight">
            Selected Projects
          </h1>
          <p className="mt-5 text-base text-slate-400 max-w-2xl leading-relaxed">
            A meticulous detailing of custom software tools designed to address urgent real-world complexities.
          </p>
        </motion.div>

        {/* Dynamic Spotlight project grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <SpotlightCard key={project.title} project={project} index={i} />
          ))}
        </div>

      </motion.div>
    </section>
  )
}
