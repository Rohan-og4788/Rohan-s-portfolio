import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { id: '/', label: 'Home' },
  { id: '/skills', label: 'Skills' },
  { id: '/projects', label: 'Projects' },
  { id: '/experience', label: 'Experience' },
  { id: '/contact', label: 'Contact' },
]

export default function Navbar({ profile }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 pt-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl shadow-2xl">
        <nav className="flex items-center justify-between px-4 py-3">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-transform active:scale-95"
          >
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-sm font-bold text-white shadow-lg">
              {profile?.name?.slice(0, 1)?.toUpperCase() ?? 'R'}
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold text-white tracking-wide">
                {profile?.name ?? 'Portfolio'}
              </div>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-black/30 p-1 rounded-xl border border-white/5 shadow-inner">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.id}
                className={({ isActive }) =>
                  `relative rounded-lg px-4 py-1.5 text-sm font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 z-0 rounded-lg bg-white/10"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={profile?.github ?? '#'}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-slate-400 transition hover:text-white hover:glow-white"
            >
              GitHub
            </a>
            <a
              href={profile?.resumeUrl ?? '#'}
              download
              className="inline-flex items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-500 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition focus:outline-none focus:ring-2 focus:ring-cyan-500"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-white/5 md:hidden"
            >
              <div className="px-4 py-4 grid gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.id}
                    end={item.id === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `rounded-xl px-4 py-3 text-sm font-semibold transition ${
                        isActive ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'
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
                    className="flex justify-center rounded-xl bg-cyan-500/10 px-4 py-3 text-sm font-semibold text-cyan-400 border border-cyan-500/20"
                  >
                    Resume
                  </a>
                  <a
                    href={profile?.github ?? '#'}
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-center rounded-xl bg-white/5 px-4 py-3 text-sm font-semibold text-white border border-white/10"
                  >
                    GitHub
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
