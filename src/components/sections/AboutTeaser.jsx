import { useRef } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from 'framer-motion'
import { STATS } from '../../data/site'
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter.js'
import { GraduationCap, Trophy, Brain, Sparkles } from 'lucide-react'

function avatarSrc(profile) {
  if (profile.photoUrl) return profile.photoUrl
  const q = encodeURIComponent(profile.name ?? 'Portfolio')
  return `https://ui-avatars.com/api/?name=${q}&background=8b5cf6&color=f5f3ff&size=320&bold=true`
}

function StatCard({ stat, active }) {
  const display = useAnimatedCounter(stat.value, { active })
  return (
    <div className="rounded-2xl border border-white/5 bg-slate-950/40 p-4 text-center transition-all duration-300 hover:border-cyan-500/20 hover:shadow-[0_0_24px_rgba(6,182,212,0.08)]">
      <p className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
        {display}
      </p>
      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">
        {stat.label}
      </p>
    </div>
  )
}

export default function AboutTeaser({ profile }) {
  const ref = useRef(null)
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-10%' })
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 280, damping: 24 })
  const sy = useSpring(my, { stiffness: 280, damping: 24 })
  const rotateX = useTransform(sy, [-0.5, 0.5], [9, -9])
  const rotateY = useTransform(sx, [-0.5, 0.5], [-11, 11])

  function onMove(e) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }

  function onLeave() {
    mx.set(0)
    my.set(0)
  }

  const story = Array.isArray(profile.aboutStory)
    ? profile.aboutStory
    : [profile.aboutTeaser]

  const highlights = [
    { icon: GraduationCap, text: profile.education || 'B.Tech CS — JSPM University' },
    { icon: Trophy, text: 'Hackathon runner-up' },
    { icon: Brain, text: 'AI + Web Development' },
    { icon: Sparkles, text: 'Futuristic tech enthusiast' },
  ]

  return (
    <section className="relative border-t border-white/5 bg-slate-950/20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <motion.div
            className="order-2 lg:order-1 lg:col-span-7"
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-12%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 rounded-full bg-cyan-500" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 font-mono">
                About me
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Passionate{' '}
              <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                developer & problem solver
              </span>
            </h2>

            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {highlights.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 rounded-xl border border-white/5 bg-slate-900/40 px-3 py-2 text-xs text-slate-300"
                >
                  <Icon size={14} className="text-cyan-400 shrink-0" />
                  {text}
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-400">
              {story.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div
              ref={statsRef}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-900 pt-8"
            >
              {STATS.map((stat, index) => (
                <StatCard key={index} stat={stat} active={statsInView} />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end"
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-12%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          >
            <div
              ref={ref}
              onMouseMove={onMove}
              onMouseLeave={onLeave}
              className="relative perspective-[1000px]"
            >
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/20 via-transparent to-violet-600/20 blur-2xl animate-pulse" />
              <motion.div
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 shadow-2xl backdrop-blur-xl"
              >
                <img
                  src={avatarSrc(profile)}
                  alt="Rohan Vyavahare"
                  className="aspect-square w-full max-w-[min(100%,280px)] object-cover opacity-90 transition-transform duration-500 hover:scale-100"
                  width={280}
                  height={280}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                  <p className="text-base font-extrabold text-white tracking-wide">
                    {profile.name}
                  </p>
                  <p className="text-xs text-cyan-300 font-mono mt-0.5">
                    {profile.education}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
