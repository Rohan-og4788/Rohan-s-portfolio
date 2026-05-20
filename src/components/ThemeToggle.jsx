import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext.jsx'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="fixed bottom-6 right-6 z-[999] flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-slate-300 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:text-cyan-400 hover:shadow-[0_0_24px_rgba(6,182,212,0.2)] active:scale-95"
      aria-label="Toggle day/night theme"
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </motion.span>
    </button>
  )
}
