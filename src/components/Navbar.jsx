import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { id: '/', label: 'Home' },
  { id: '/projects', label: 'Projects' },
  { id: '/skills', label: 'Skills' },
  { id: '/contact', label: 'Contact' },
]

export default function Navbar({ profile }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 pt-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl rounded-2xl border border-white/5 bg-[var(--color-dark-card)]/70 backdrop-blur-md shadow-2xl">
        <nav className="flex items-center justify-between px-4 py-3">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-transform active:scale-95"
          >
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white shadow-lg">
              {profile?.name?.slice(0, 1)?.toUpperCase() ?? 'P'}
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold text-white tracking-wide">
                {profile?.name ?? 'Portfolio'}
              </div>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-black/20 p-1 rounded-xl border border-white/5">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.id}
                className={({ isActive }) =>
                  `relative rounded-lg px-4 py-1.5 text-sm font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
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
              className="text-sm font-medium text-zinc-400 transition hover:text-white"
            >
              GitHub
            </a>
            <a
              href={profile?.resumeUrl ?? '#'}
              download
              className="inline-flex items-center justify-center rounded-lg bg-white/10 border border-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `rounded-xl px-4 py-3 text-sm font-semibold transition ${
                        isActive ? 'bg-white/10 text-white border border-white/5' : 'text-zinc-400 hover:bg-white/5'
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
                    className="flex justify-center rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-white border border-white/5"
                  >
                    Resume
                  </a>
                  <a
                    href={profile?.github ?? '#'}
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-center rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-white border border-white/5"
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
