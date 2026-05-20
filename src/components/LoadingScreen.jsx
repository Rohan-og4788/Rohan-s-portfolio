import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SYSTEM_LOGS = [
  'INITIALIZING QUANTUM NEURAL KERNEL...',
  'CONNECTING GEOLOCATION SENSORS (SOS_SYS)...',
  'LOADING ARDUINO GAS_TELEMETRY BUFFER...',
  'RESOLVING GRAPHICS PIPELINE MECHANICS (60FPS)...',
  'COMPILING B.TECH COMPUTER SCIENCE CHIPS...',
  'SECURING DECK WITH Q-SECURE SHIELD...',
  'ESTABLISHING INTERACTIVE COMMAND PANEL...',
  'DEVIATING PARALLAX DECK SYSTEMS...',
  'SYNC SUCCESSFUL. RO-PORTAL ACTIVE.'
]

export default function LoadingScreen({ onComplete }) {
  const [logIndex, setLogIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [logs, setLogs] = useState([])
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    // Increment progress percentage
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setIsDone(true)
          setTimeout(() => {
            onComplete()
          }, 650)
          return 100
        }
        const step = Math.floor(Math.random() * 8) + 4
        return Math.min(prev + step, 100)
      })
    }, 120)

    return () => clearInterval(progressInterval)
  }, [onComplete])

  useEffect(() => {
    // Add logs based on current progress
    const maxLogs = Math.min(
      Math.floor((progress / 100) * SYSTEM_LOGS.length) + 1,
      SYSTEM_LOGS.length
    )
    if (logs.length < maxLogs) {
      const nextLog = SYSTEM_LOGS[logs.length]
      if (nextLog) {
        setLogs((prev) => [...prev, nextLog])
      }
    }
  }, [progress, logs.length])

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, scale: 0.98 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between bg-[#04060b] p-6 font-mono text-xs text-cyan-400 select-none"
        >
          {/* Top System Specs */}
          <div className="flex justify-between items-start border-b border-cyan-950 pb-4">
            <div>
              <p className="text-sm font-bold tracking-widest text-cyber-glow">ROHAN_OS v4.5.2-RELEASE</p>
              <p className="text-slate-500 mt-1">CPU: OCTA-CORE NEURAL / RAM: 16.00 GQ-GB</p>
            </div>
            <div className="text-right text-slate-500">
              <p>SECURE LINK // LOCAL_PORT: 3000</p>
              <p>LATENCY: 12ms // STABLE</p>
            </div>
          </div>

          {/* Terminal Console Logs */}
          <div className="flex-1 my-8 overflow-hidden flex flex-col justify-end gap-1.5 max-w-2xl">
            {logs.map((log, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                className={`${
                  index === SYSTEM_LOGS.length - 1 ? 'text-emerald-400 font-semibold' : 'text-slate-300'
                }`}
              >
                <span className="text-cyan-500 mr-2">&gt;</span>
                {log}
              </motion.div>
            ))}
            <div className="h-4 flex items-center">
              <span className="text-cyan-400 mr-2">&gt;</span>
              <span className="w-2 h-4 bg-cyan-400 animate-pulse" />
            </div>
          </div>

          {/* Bottom Progress Metrics */}
          <div className="border-t border-cyan-950 pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="w-full sm:max-w-md">
              <div className="flex justify-between items-center mb-1 text-slate-400 text-[10px]">
                <span className="tracking-widest">BOOTING DECK STACK...</span>
                <span>{progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-900 border border-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-500 via-sky-500 to-violet-500 shadow-[0_0_12px_rgba(6,182,212,0.6)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            <div className="flex items-center gap-6 text-[10px] text-slate-500 tracking-wider">
              <span>DEPT: COMP_SCI_BTECH</span>
              <span>DEV: ROHAN VYAVAHARE</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
