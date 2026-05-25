import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Shield, Terminal } from 'lucide-react'

const navItems = [
  { id: '/', label: 'Home' },
  { id: '/skills', label: 'Skills' },
  { id: '/projects', label: 'Projects' },
  { id: '/experience', label: 'Journey' },
  { id: '/contact', label: 'Contact' }
]

export default function Navbar({ profile }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 pt-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl rounded-2xl border border-white/5 bg-slate-950/45 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:border-cyan-500/10">
        <nav className="flex items-center justify-between px-5 py-3">
          
          {/* Logo Brand portal link */}
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 rounded-xl focus:outline-none transition-transform active:scale-95 group"
          >
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-violet-500 text-sm font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
              <span>{profile?.name?.slice(0, 1)?.toUpperCase() ?? 'R'}</span>
            </div>
            <div className="hidden sm:block text-left">
              <div className="text-sm font-black text-white tracking-wider group-hover:text-cyan-400 transition-colors duration-300">
                {profile?.name ?? 'Rohan V.'}
              </div>
              <div className="text-[9px] font-bold text-slate-500 tracking-widest font-mono uppercase mt-0.5">
                PORTAL MAIN DECK
              </div>
            </div>
          </NavLink>

          {/* Desktop Nav dock */}
          <div className="hidden md:flex items-center gap-1.5 bg-black/45 p-1 rounded-xl border border-white/5 shadow-inner">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.id}
                className={({ isActive }) =>
                  `relative rounded-lg px-4.5 py-1.5 text-xs font-bold tracking-wider uppercase font-mono transition-colors duration-250 ${
                    isActive ? 'text-cyan-400' : 'text-slate-500 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 z-0 rounded-lg bg-cyan-500/10 border border-cyan-500/20"
                        transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop Direct Links */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href={profile?.github ?? '#'}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 transition-colors duration-200 hover:text-cyan-400"
            >
              CODE DECK
            </a>
            <a
              href={profile?.resumeUrl ?? '#'}
              download
              className="inline-flex items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 text-xs font-bold tracking-wider font-mono text-cyan-400 transition-all duration-300 hover:bg-cyan-500 hover:text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:shadow-[0_0_24px_rgba(6,182,212,0.45)] cursor-pointer"
            >
              GET RESUME
            </a>
          </div>

          {/* Mobile Menu Action Trigger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>

        {/* Mobile Navigation overlay */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden border-t border-white/5 md:hidden"
            >
              <div className="px-5 py-4 grid gap-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.id}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `rounded-xl px-4 py-3 text-xs font-bold tracking-wider font-mono uppercase transition-colors ${
                        isActive
                          ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                          : 'text-slate-500 hover:bg-white/5 hover:text-white'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                
                <div className="mt-4 grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
                  <a
                    href={profile?.resumeUrl ?? '#'}
                    download
                    className="flex justify-center items-center rounded-xl bg-cyan-500/10 py-3 text-xs font-bold tracking-wider font-mono text-cyan-400 border border-cyan-500/20"
                  >
                    RESUME
                  </a>
                  <a
                    href={profile?.github ?? '#'}
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-center items-center rounded-xl bg-white/5 py-3 text-xs font-bold tracking-wider font-mono text-white border border-white/10"
                  >
                    CODE DECK
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
