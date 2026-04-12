import { useRef } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

function avatarSrc(profile) {
  if (profile.photoUrl) return profile.photoUrl
  const q = encodeURIComponent(profile.name ?? 'Portfolio')
  return `https://ui-avatars.com/api/?name=${q}&background=0e7490&color=ecfeff&size=320&bold=true`
}

export default function AboutTeaser({ profile }) {
  const ref = useRef(null)
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

  return (
    <section className="relative border-t border-white/5 bg-slate-950/20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:items-center">
        <motion.div
          className="order-2 lg:order-1 lg:col-span-6"
          initial={{ opacity: 0, x: -36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-12%' }}
          transition={{ type: 'spring', stiffness: 260, damping: 28 }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 rounded-full bg-cyan-500" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              About me
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            A little more{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
              depth
            </span>
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-400">
            {story.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="order-1 flex justify-center lg:order-2 lg:col-span-6 lg:justify-end"
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
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/30 via-transparent to-violet-600/30 blur-2xl" />
            <motion.div
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 shadow-2xl backdrop-blur-xl"
            >
              <img
                src={avatarSrc(profile)}
                alt=""
                className="aspect-square w-full max-w-[min(100%,320px)] object-cover opacity-95"
                width={320}
                height={320}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-lg font-bold text-white">{profile.name}</p>
                <p className="text-sm text-cyan-300/90">{profile.title}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
