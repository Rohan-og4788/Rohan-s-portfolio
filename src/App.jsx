import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/pages/Home.jsx'
import Projects from './components/pages/Projects.jsx'
import Skills from './components/pages/Skills.jsx'
import Contact from './components/pages/Contact.jsx'
import { PROFILE } from './data/site.js'

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-dvh flex flex-col bg-[var(--color-dark)] text-white selection:bg-indigo-500/30 selection:text-white">
      <Navbar profile={PROFILE} />

      {/* Main Content Area */}
      <main className="flex-1 w-full mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home profile={PROFILE} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact profile={PROFILE} />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer profile={PROFILE} />
      
      {/* Decorative background glow for dark mode */}
      <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>
    </div>
  )
}
