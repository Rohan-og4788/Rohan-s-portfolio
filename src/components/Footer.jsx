import { Mail, Shield } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer({ profile }) {
  return (
    <footer className="mt-auto border-t border-white/5 bg-slate-950/40 backdrop-blur-xl relative z-10 select-none">
      
      {/* Subtle bottom cyber reflection */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          
          <div>
            <div className="text-xl font-black text-white tracking-wider flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-cyan-400 rounded-full" />
              {profile?.name ?? 'Rohan Vyavahare'}
            </div>
            <div className="mt-2 text-xs text-slate-500 font-semibold font-mono tracking-wider uppercase">
              // DESIGNED WITH KERNEL REACT & CYBER TAILWIND
            </div>
          </div>

          {/* Holographic Diagnostic Board */}
          <div className="hidden lg:flex items-center gap-6 border border-white/5 bg-black/35 rounded-2xl px-5 py-3 text-[10px] font-mono text-slate-500 font-bold tracking-widest uppercase">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <Shield size={12} className="animate-pulse" />
              PORTAL SECURE
            </span>
            <span className="h-3 w-[1px] bg-slate-800" />
            <span>LATENCY: 14ms</span>
            <span className="h-3 w-[1px] bg-slate-800" />
            <span>PACKETS: 0_LOSS</span>
          </div>

          {/* Social Connectors */}
          <div className="flex flex-wrap gap-3">
            {[
              { icon: FaGithub, link: profile?.github ?? '#', title: 'GitHub Codebase' },
              { icon: FaLinkedin, link: profile?.linkedin ?? '#', title: 'LinkedIn Portal' },
              { icon: Mail, link: `mailto:${profile?.email ?? ''}`, title: 'Holographic Email' }
            ].map((s, idx) => {
              const Icon = s.icon
              return (
                <a
                  key={idx}
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  title={s.title}
                  className="group flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Icon size={16} className="text-slate-400 group-hover:text-cyan-400 group-hover:scale-105 transition-all duration-200" />
                </a>
              )
            })}
          </div>

        </div>

        <div className="mt-8 border-t border-slate-900 pt-6 text-[10px] font-bold text-slate-600 font-mono tracking-widest text-center sm:text-left">
          © {new Date().getFullYear()} ROHAN VYAVAHARE mainframe. ALL LOGICAL ENCRYPTIONS RESERVED.
        </div>
      </div>
    </footer>
  )
}
