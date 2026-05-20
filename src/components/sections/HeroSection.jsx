import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Download, Mail, ShieldAlert } from 'lucide-react'
import { FaGithub as Github, FaLinkedin as Linkedin, FaInstagram as Instagram } from 'react-icons/fa'
import { useTypingCycle } from '../../hooks/useTypingCycle.js'

// Simple Framer Motion container physics
const fContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 }
  }
}

const fItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 280, damping: 22 }
  }
}

// Custom 3D Canvas Sphere Component
function TechSphere3D() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate mouse coordinates relative to window center
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      mouseRef.current = {
        x: (e.clientX - centerX) * 0.001,
        y: (e.clientY - centerY) * 0.001
      }
    }
    window.addEventListener('mousemove', handleMouseMove)

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = 380
      canvas.height = 380
    }
    resizeCanvas()

    // 3D Particles on Sphere Shell
    const particles = []
    const count = 180
    const radius = 130

    for (let i = 0; i < count; i++) {
      // Uniform distribution on sphere shell (Fibonacci lattice)
      const phi = Math.acos(-1 + (2 * i) / count)
      const theta = Math.sqrt(count * Math.PI) * phi

      particles.push({
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        color: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#8b5cf6' : '#ec4899',
        label: i % 15 === 0 ? ['DSA', 'React', 'IoT', 'AWS', 'Python', 'C++'][Math.floor(Math.random() * 6)] : null
      })
    }

    let angleX = 0.004
    let angleY = 0.004

    const rotateX = (p, angle) => {
      const cos = Math.cos(angle)
      const sin = Math.sin(angle)
      const y = p.y * cos - p.z * sin
      const z = p.y * sin + p.z * cos
      return { ...p, y, z }
    }

    const rotateY = (p, angle) => {
      const cos = Math.cos(angle)
      const sin = Math.sin(angle)
      const x = p.x * cos + p.z * sin
      const z = -p.x * sin + p.z * cos
      return { ...p, x, z }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const cx = canvas.width / 2
      const cy = canvas.height / 2

      // Combine constant rotation with mouse influence
      const currentAngleX = angleX + mouseRef.current.y * 0.02
      const currentAngleY = angleY + mouseRef.current.x * 0.02

      // Project and draw particles
      particles.forEach((p, index) => {
        // Rotate in 3D
        let rotated = rotateX(p, currentAngleX)
        rotated = rotateY(rotated, currentAngleY)

        // Save back rotated values for continuous spin
        p.x = rotated.x
        p.y = rotated.y
        p.z = rotated.z

        // Perspective projection
        const cameraDistance = 260
        const scale = cameraDistance / (cameraDistance - rotated.z)
        const x2d = rotated.x * scale + cx
        const y2d = rotated.y * scale + cy

        // Calculate opacity based on Z depth
        const opacity = (rotated.z + radius) / (2 * radius) * 0.75 + 0.15

        if (x2d >= 0 && x2d <= canvas.width && y2d >= 0 && y2d <= canvas.height) {
          ctx.beginPath()
          ctx.arc(x2d, y2d, Math.max(1, p.size * scale * 0.5 || scale * 1.5), 0, Math.PI * 2)
          ctx.fillStyle = p.color
          ctx.globalAlpha = opacity
          ctx.fill()

          // Draw floating label occasionally
          if (p.label && opacity > 0.65) {
            ctx.font = 'bold 9px monospace'
            ctx.fillStyle = '#f8fafc'
            ctx.fillText(p.label, x2d + 5, y2d - 2)
          }
        }
      })
      ctx.globalAlpha = 1.0

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="relative w-[380px] h-[380px] flex items-center justify-center">
      {/* Decorative Outer Rings */}
      <div className="absolute inset-4 rounded-full border border-cyan-500/10 animate-[spin_30s_linear_infinite]" />
      <div className="absolute inset-10 rounded-full border border-dashed border-violet-500/10 animate-[spin_20s_linear_infinite_reverse]" />
      <canvas ref={canvasRef} className="block relative z-10" />
    </div>
  )
}

export default function HeroSection({ profile }) {
  const typed = useTypingCycle(profile.roles, {
    typeSpeed: 75,
    deleteSpeed: 45,
    holdMs: 2200,
    gapMs: 400
  })

  return (
    <section className="relative min-h-[calc(100vh-6rem)] w-full flex items-center px-4 py-16 sm:px-6 lg:px-8">
      
      {/* Floating dynamic code snippets in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[18%] left-[10%] font-mono text-[9px] text-cyan-400/25 border border-cyan-500/10 rounded-lg px-2.5 py-1 bg-slate-950/20 backdrop-blur-sm"
        >
          const rohan = new Developer()
        </motion.div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-[20%] left-[25%] font-mono text-[9px] text-violet-400/25 border border-violet-500/10 rounded-lg px-2.5 py-1 bg-slate-950/20 backdrop-blur-sm"
        >
          import &#123; AI, IoT &#125; from 'future'
        </motion.div>
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute top-[28%] right-[15%] font-mono text-[9px] text-pink-400/20 border border-pink-500/10 rounded-lg px-2.5 py-1 bg-slate-950/20 backdrop-blur-sm"
        >
          while(alive) &#123; code() &#125;
        </motion.div>
      </div>

      <div className="mx-auto w-full max-w-6xl relative z-10">
        <div className="grid gap-12 items-center lg:grid-cols-12">
          
          {/* Main Hero Text Details */}
          <motion.div
            variants={fContainer}
            initial="hidden"
            animate="show"
            className="lg:col-span-7"
          >
            {/* Status availability badge */}
            <motion.div
              variants={fItem}
              className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/25 bg-cyan-500/5 px-4 py-1.5 backdrop-blur-md mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/70 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              <span className="text-[10px] font-bold tracking-widest text-cyan-300 uppercase font-mono">
                {profile.availability || 'Available for collaborations'}
              </span>
            </motion.div>

            {/* Title / Name reveals */}
            <motion.div variants={fItem}>
              <p className="font-mono text-sm font-semibold text-slate-400 sm:text-base">
                Hi, I&apos;m{' '}
                <span className="text-cyan-300">Rohan Vyavahare</span>
              </p>
              <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                  {profile.title}
                </span>
              </h1>
            </motion.div>

            {/* Dynamic typing roles */}
            <motion.div variants={fItem} className="mt-5 min-h-[2.5rem]">
              <p className="text-lg font-bold text-slate-300 sm:text-xl font-mono">
                <span className="text-cyan-400">~/ </span>
                <span className="text-cyan-100">
                  {typed}
                  <span className="ml-1 inline-block w-1 h-5 bg-cyan-400 animate-pulse align-middle" />
                </span>
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={fItem}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-400"
            >
              {profile.tagline}
            </motion.p>

            {/* CTA action buttons */}
            <motion.div
              variants={fItem}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-[0_0_24px_rgba(6,182,212,0.3)] hover:shadow-[0_0_36px_rgba(6,182,212,0.55)] transition-all hover:brightness-110 active:scale-95 duration-250 cursor-pointer"
              >
                View Projects
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/60 px-6 py-3.5 text-xs font-bold text-slate-200 backdrop-blur-md transition-all hover:border-cyan-500/40 hover:bg-slate-800/80 active:scale-95 duration-250"
              >
                <Download size={15} />
                Download Resume
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-violet-500/30 bg-violet-600/10 hover:bg-violet-600/20 px-6 py-3.5 text-xs font-bold text-violet-300 backdrop-blur-md transition-all hover:border-violet-500/50 active:scale-95 duration-250 cursor-pointer shadow-[0_0_20px_rgba(139,92,246,0.08)]"
              >
                Hire Me
              </Link>
            </motion.div>

            {/* Social networking anchors */}
            <motion.div
              variants={fItem}
              className="mt-10 pt-8 border-t border-slate-900 flex gap-5 text-slate-500 items-center"
            >
              <span className="font-mono text-[10px] tracking-wider font-bold">DECRYPTED CONNECTORS:</span>
              <div className="flex gap-4">
                {[
                  { icon: Github, link: profile.github, title: 'GitHub' },
                  { icon: Linkedin, link: profile.linkedin, title: 'LinkedIn' },
                  { icon: Instagram, link: profile.instagram || '#', title: 'Instagram' },
                  { icon: Mail, link: `mailto:${profile.email}`, title: 'Email' }
                ].map((s, idx) => {
                  const Icon = s.icon
                  return (
                    <a
                      key={idx}
                      href={s.link}
                      target="_blank"
                      rel="noreferrer"
                      title={s.title}
                      className="text-slate-500 hover:text-cyan-400 hover:scale-115 transition-all duration-200"
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Glowing 3D Tech Sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="absolute -inset-14 rounded-full bg-gradient-to-br from-cyan-500/15 via-violet-500/5 to-pink-500/15 blur-3xl" />
            <TechSphere3D />
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
