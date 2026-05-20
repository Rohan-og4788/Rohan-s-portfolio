import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/pages/Home.jsx'
import Projects from './components/pages/Projects.jsx'
import Skills from './components/pages/Skills.jsx'
import Contact from './components/pages/Contact.jsx'
import Experience from './components/pages/Experience.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'
import TechBackground from './components/TechBackground.jsx'
import AudioController from './components/AudioController.jsx'
import InteractiveTerminal from './components/InteractiveTerminal.jsx'
import AIChatbot from './components/AIChatbot.jsx'
import MatrixRain from './components/MatrixRain.jsx'
import FloatingCodeSymbols from './components/FloatingCodeSymbols.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'
import { PROFILE } from './data/site.js'
import { useGsapReveal } from './hooks/useGsapReveal.js'

export default function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)
  useGsapReveal(!loading)
  
  // Custom scroll percentage tracking using framer-motion
  const { scrollYProgress } = useScroll()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      {/* 1. Loading screen boot sequence */}
      <LoadingScreen onComplete={() => setLoading(false)} />

      {!loading && (
        <div className="min-h-dvh flex flex-col bg-[#070a13] text-slate-200 selection:bg-cyan-500/25 selection:text-cyan-200 relative overflow-x-hidden [data-theme=light]:bg-slate-100 [data-theme=light]:text-slate-800">
          
          {/* 2. Sleek top-level scrolling progress glow indicator */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 z-[9999] shadow-[0_0_12px_rgba(6,182,212,0.6)] origin-left"
            style={{ scaleX: scrollYProgress }}
          />

          {/* 3. Cyber Matrix screen scanlines filter */}
          <div className="scanlines pointer-events-none" />

          {/* 4. Matrix rain + particle mesh + floating code glyphs */}
          <MatrixRain />
          <TechBackground />
          <FloatingCodeSymbols />

          {/* 5. Micro-coordinate customized feedback cursor */}
          <CustomCursor />

          {/* 6. Translucent floating Navbar dock */}
          <Navbar profile={PROFILE} />

          {/* 7. Central Routing Mainframe */}
          <main className="flex-1 w-full mx-auto max-w-6xl pt-24 pb-12 z-10">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home profile={PROFILE} />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact profile={PROFILE} />} />
              </Routes>
            </AnimatePresence>
          </main>

          {/* 8. Modern Glass Footer info deck */}
          <Footer profile={PROFILE} />

          {/* 9. Interactive command prompt mainframe panel */}
          <InteractiveTerminal />

          {/* 10. Slide-out automated recruiter helper chatbot */}
          <AIChatbot />

          {/* 11. Procedural synthesizer sound trigger */}
          <AudioController />

          {/* 12. Day / night theme switch */}
          <ThemeToggle />

        </div>
      )}
    </>
  )
}
