import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, X, Minimize2, Maximize2 } from 'lucide-react'

const COMMANDS = {
  help: [
    'Available protocols:',
    '  about     - Core summary & academic major',
    '  skills    - List core programming/framework chipsets',
    '  projects  - Show active premium engineering list',
    '  contact   - Display encrypted direct links',
    '  matrix    - Launch matrix stream logic',
    '  secret    - Execute secret encryption key',
    '  clear     - Wipe command terminal cache'
  ],
  about: [
    'USER: ROHAN VYAVAHARE',
    'ROLE: Futurist Software Architect & CS Student',
    'DEGREE: B.Tech in Computer Science',
    'INSTITUTION: JSPM University, MH, India',
    'MISSION: Treating browser as a high-performance product.',
    'INTERESTS: Reactive styling, Cloud scaling, Web Audio synthesis, IoT ESP8266 engines.'
  ],
  skills: [
    'CORE SKILLS INTEGRATION:',
    '  [Frontend]: HTML5, CSS3, Tailwind CSS v4, React.js (ES6+)',
    '  [Backend]:  Node.js, Express.js, MongoDB, Firebase',
    '  [Languages]: Python, Java, C++',
    '  [Cloud/IoT]: AWS Academy Cloud Architect, ESP8266 IoT, Arduino C++',
    '  [DSA/ML]:   250+ Algorithmic Problems solved, Scikit-Learn classifications'
  ],
  projects: [
    'COMPLETED DEPLOYMENTS:',
    '  1. Women Safety SOS App       - Low latency distress locator & notification system.',
    '  2. Arduino Smoke Detection    - Gas-telemetry Arduino chip coupled with real-time cloud triggers.',
    '  3. Temple Crowd Manager      - Predictive rush heatmap scheduling platform.',
    '  4. Q-SecureX Quantum Shield   - Mock cyber security command panel.',
    '  5. Cyberpunk Portfolio       - Sleek glass layout with interactive canvas & soundscapes.'
  ],
  contact: [
    'SECURE LINKS DECRYPTED:',
    '  Email:    rohanvyavahare99@gmail.com',
    '  GitHub:   https://github.com/Rohan-og4788',
    '  LinkedIn: https://www.linkedin.com/in/rohanvyavahare/',
    '  Status:   ACTIVE & OPEN FOR INTERNSHIP OPPORTUNITIES'
  ],
  secret: [
    '🔓 DECRYPTING NEURAL MATRIX KEY...',
    '  >> COMPILING EASTER EGG INJECTOR...',
    '  >> MESSAGE FROM ROHAN VYAVAHARE:',
    '     "You found the hidden panel! If you are a recruiter,',
    '      quote keyword \'NEURAL-CHIP\' for a guaranteed follow-up response. Let\'s build!"'
  ]
}

export default function InteractiveTerminal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)
  const [inputVal, setInputVal] = useState('')
  const [history, setHistory] = useState([
    'Rohan OS v4.2.1 Core Terminal Console.',
    'Type "help" to list available mainframe protocols.'
  ])
  const [isMatrixRunning, setIsMatrixRunning] = useState(false)

  const terminalEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [history, isMatrixRunning])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 150)
    }
  }, [isOpen])

  // Custom Matrix effect simulation
  useEffect(() => {
    if (!isMatrixRunning) return
    let interval
    let counter = 0
    
    const generateMatrixLine = () => {
      const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ$#@&%*+='
      let line = ''
      for (let i = 0; i < 40; i++) {
        line += chars[Math.floor(Math.random() * chars.length)]
      }
      return `  ${line}`
    }

    interval = setInterval(() => {
      setHistory((prev) => [...prev, generateMatrixLine()])
      counter++
      if (counter > 25) {
        clearInterval(interval)
        setIsMatrixRunning(false)
        setHistory((prev) => [...prev, 'MATRIX SCAN COMPLETE. MEMORY RESET.'])
      }
    }, 90)

    return () => clearInterval(interval)
  }, [isMatrixRunning])

  const handleCommandSubmit = (e) => {
    e.preventDefault()
    const rawCmd = inputVal.trim()
    setInputVal('')

    if (!rawCmd) return

    const normalizedCmd = rawCmd.toLowerCase()
    let reply = []

    if (normalizedCmd === 'clear') {
      setHistory([])
      return
    }

    if (normalizedCmd === 'matrix') {
      setIsMatrixRunning(true)
      setHistory((prev) => [...prev, `> ${rawCmd}`, 'INITIALIZING BINARY MATRIX GRID STREAM...'])
      return
    }

    if (COMMANDS[normalizedCmd]) {
      reply = COMMANDS[normalizedCmd]
    } else {
      reply = [
        `Command not found: "${rawCmd}".`,
        'Type "help" to list operational deck protocols.'
      ]
    }

    setHistory((prev) => [...prev, `> ${rawCmd}`, ...reply])
  }

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        title="Access Cyber Prompt Console"
        className="fixed bottom-6 right-6 z-[999] flex items-center justify-center h-14 w-14 rounded-full bg-cyan-500 text-slate-950 shadow-[0_0_24px_rgba(6,182,212,0.4)] hover:shadow-[0_0_36px_rgba(6,182,212,0.65)] hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <Terminal size={22} className="animate-pulse" />
      </button>

      {/* Terminal Slide Drawer Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 30 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed z-[9999] flex flex-col rounded-3xl border border-cyan-500/30 bg-slate-950/90 shadow-2xl backdrop-blur-xl select-none ${
              isMaximized
                ? 'inset-6'
                : 'bottom-24 right-6 w-full max-w-lg h-[460px] sm:w-[500px]'
            }`}
          >
            {/* Header / Command Deck controls */}
            <div className="flex justify-between items-center px-5 py-3.5 border-b border-cyan-500/10 bg-slate-900/50 rounded-t-3xl">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer block" onClick={() => setIsOpen(false)} />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 cursor-pointer block" onClick={() => setIsOpen(false)} />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 cursor-pointer block" onClick={() => setIsMaximized(!isMaximized)} />
                </div>
                <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 ml-3 flex items-center gap-1.5">
                  <Terminal size={13} />
                  RO-PORTAL SHELL
                </span>
              </div>
              <div className="flex items-center gap-3 text-slate-500 hover:text-white">
                <button onClick={() => setIsMaximized(!isMaximized)} className="focus:outline-none cursor-pointer">
                  {isMaximized ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
                </button>
                <button onClick={() => setIsOpen(false)} className="focus:outline-none cursor-pointer">
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div
              className="flex-1 p-5 overflow-y-auto font-mono text-[11px] leading-relaxed text-cyan-300/90 scrollbar-thin"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((line, index) => (
                <div key={index} className="whitespace-pre-wrap">
                  {line}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Input form */}
            <form
              onSubmit={handleCommandSubmit}
              className="flex items-center gap-2 border-t border-cyan-500/10 bg-slate-900/30 px-5 py-3 rounded-b-3xl"
            >
              <span className="font-mono text-xs text-cyan-400">&gt;</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder='Type command (e.g. "help", "skills")...'
                disabled={isMatrixRunning}
                className="flex-1 bg-transparent font-mono text-xs text-cyan-200 outline-none placeholder:text-cyan-900 focus:outline-none"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
