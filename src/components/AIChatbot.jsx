import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Bot } from 'lucide-react'

const CHAT_PRESETS = [
  {
    q: '🎓 What is your education major?',
    a: 'I am currently pursuing a B.Tech in Computer Science at JSPM University. My focus is on software engineering fundamentals, data structures, and intelligent web interfaces!'
  },
  {
    q: '💼 Are you open to internships?',
    a: 'Yes, absolutely! I am actively searching for Web Development or Software Engineering internship opportunities. Feel free to hit the Contact form or email me directly at rohanvyavahare99@gmail.com!'
  },
  {
    q: '🚀 What are your top coding skills?',
    a: 'I am highly proficient in React.js, Tailwind CSS, Javascript, Python, and C++. I also have solid experience with cloud architectures (AWS) and IoT microcontrollers (Arduino/ESP8266).'
  },
  {
    q: '📂 Highlight your best project.',
    a: 'My top projects are: \n1. Women SafetySOS App (low-latency geo alerts)\n2. ESP8266 Arduino Smoke Detector (IoT gas telemetry)\n3. Temple Crowd scheduling application.\nAll demonstrate complete end-to-end full-stack capabilities!'
  }
]

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! I am Rohan's Neural Assistant. Ask me anything about Rohan's skills, B.Tech curriculum, or current availability!"
    }
  ])
  const [isTyping, setIsTyping] = useState(false)
  const chatEndRef = useRef(null)

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isTyping])

  const handleSelectQuery = (preset) => {
    // Add user message
    setMessages((prev) => [...prev, { sender: 'user', text: preset.q }])
    setIsTyping(true)

    // Simulate AI typing delay
    setTimeout(() => {
      setIsTyping(false)
      setMessages((prev) => [...prev, { sender: 'bot', text: preset.a }])
    }, 1100)
  }

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        title="Chat with Rohan's AI Assistant"
        className="fixed bottom-20 right-6 z-[998] flex items-center justify-center h-14 w-14 rounded-full bg-violet-600 text-white shadow-[0_0_24px_rgba(139,92,246,0.4)] hover:shadow-[0_0_36px_rgba(139,92,246,0.65)] hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <MessageSquare size={22} className="animate-pulse" />
      </button>

      {/* AI Chat Box slide overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 30 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed z-[9999] bottom-36 right-6 w-[calc(100%-3rem)] max-w-sm h-[480px] sm:w-[350px] flex flex-col rounded-3xl border border-violet-500/30 bg-slate-950/95 shadow-2xl backdrop-blur-xl select-none"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-5 py-3.5 border-b border-violet-500/10 bg-slate-900/50 rounded-t-3xl">
              <div className="flex items-center gap-2">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-violet-400" />
                </div>
                <span className="text-xs font-mono font-bold tracking-widest text-violet-400 ml-1.5 flex items-center gap-1">
                  <Bot size={13} />
                  RO-BOT ASSISTANT
                </span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white cursor-pointer">
                <X size={16} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 scrollbar-thin">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`rounded-2xl px-4 py-2.5 text-xs max-w-[85%] leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-violet-600 text-white rounded-tr-none'
                        : 'bg-slate-900 border border-white/5 text-slate-300 rounded-tl-none whitespace-pre-line'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-tl-none bg-slate-900 border border-white/5 px-4 py-3 text-xs text-slate-500 flex gap-1">
                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Presets / Prompts grid */}
            <div className="p-3 border-t border-violet-500/10 bg-slate-900/30 flex flex-col gap-1.5 rounded-b-3xl">
              <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1 pl-1">PRESET BOT DIALOGUES:</p>
              <div className="grid gap-1">
                {CHAT_PRESETS.map((preset) => (
                  <button
                    key={preset.q}
                    disabled={isTyping}
                    onClick={() => handleSelectQuery(preset)}
                    className="text-left text-[10px] font-semibold text-violet-300 hover:text-white bg-violet-950/20 hover:bg-violet-900/30 border border-violet-500/10 px-3 py-1.5 rounded-xl transition cursor-pointer"
                  >
                    {preset.q}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
