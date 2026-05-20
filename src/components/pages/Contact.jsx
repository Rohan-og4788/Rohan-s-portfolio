import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Send, CheckCircle2, ShieldCheck, MapPin, Calendar } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const fContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const fItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 220, damping: 20 } }
}

export default function Contact({ profile }) {
  const formRef = useRef(null)
  const [status, setStatus] = useState({ type: '', msg: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', msg: '' })

    // Simulated email service configuration (EmailJS structure)
    // In production, user will populate service_id, template_id, public_key
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      // Direct high-fidelity simulated response for previewing
      setTimeout(() => {
        setLoading(false)
        setStatus({
          type: 'success',
          msg: 'Holographic signal broadcasted! Rohan will get back to you shortly.'
        })
        formRef.current?.reset()
      }, 1200)
    } else {
      emailjs
        .sendForm(serviceId, templateId, formRef.current, publicKey)
        .then(
          () => {
            setLoading(false)
            setStatus({
              type: 'success',
              msg: 'Signal sent successfully! Looking forward to talking.'
            })
            formRef.current?.reset()
          },
          (error) => {
            setLoading(false)
            setStatus({
              type: 'error',
              msg: `Failed to compile signal: ${error.text || 'Network Timeout'}`
            })
          }
        )
    }
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto min-h-[calc(100vh-8rem)] flex flex-col justify-center relative">
      
      {/* Decorative blurred lights */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-500/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial="hidden"
        animate="show"
        variants={fContainer}
        className="w-full relative z-10"
      >
        {/* Page Header */}
        <motion.div variants={fItem} className="mb-14 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
            <div className="h-1 w-12 bg-cyan-500 rounded-full" />
            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono">Quantum handshake</h2>
          </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight">
            Establish Connection
          </h1>
          <p className="mt-5 text-base text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Broadcast a digital handshake to explore partnership scopes, internships, or query diagnostics.
          </p>
        </motion.div>

        {/* Contact Dashboard Grid */}
        <div className="grid gap-12 lg:grid-cols-12">
          
          {/* Deck Direct Link Connectors */}
          <motion.div variants={fItem} className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-[2.5rem] border border-white/5 bg-slate-950/45 p-8 backdrop-blur-md shadow-xl h-full flex flex-col justify-between">
              
              <div>
                <h3 className="text-lg font-extrabold text-white mb-6 font-mono tracking-wider flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-cyan-400 rounded-full" />
                  CONSOLE_DIRECT
                </h3>

                <div className="grid gap-4">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">ENCRYPTED EMAIL</div>
                      <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 mt-0.5">{profile.email}</div>
                    </div>
                  </a>

                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-slate-300/30 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-xl bg-slate-900 text-slate-400 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                      <FaGithub size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">OPEN SOURCE CODE</div>
                      <div className="text-sm font-semibold text-white group-hover:text-slate-100 mt-0.5">github.com/Rohan-og4788</div>
                    </div>
                  </a>

                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-[#0A66C2]/30 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] border border-[#0A66C2]/20 group-hover:scale-110 transition-transform duration-300">
                      <FaLinkedin size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">NEURAL NETWORK</div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#0A66C2] transition-colors duration-300 mt-0.5">linkedin.com/in/rohanvyavahare</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Status and Location Info */}
              <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col gap-4 text-xs font-semibold text-slate-500 font-mono">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-cyan-400 shrink-0" />
                  <span>LOCATION: MAHARASHTRA, INDIA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-violet-400 shrink-0" />
                  <span className="text-[10px] text-violet-400 animate-pulse">AVAILABILITY: OPEN FOR WORK INTERNSHIPS</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Holographic Contact Form */}
          <motion.div variants={fItem} className="lg:col-span-7">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="rounded-[2.5rem] border border-white/5 bg-slate-950/45 p-6 sm:p-8 backdrop-blur-md shadow-xl h-full flex flex-col justify-between"
            >
              <div className="space-y-5">
                <h3 className="text-lg font-extrabold text-white mb-6 font-mono tracking-wider flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-violet-400 rounded-full" />
                  HANDSHAKE_FORM
                </h3>

                <div>
                  <label htmlFor="user_name" className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 font-mono mb-2">Sender Name</label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    placeholder="E.g. Elon Musk"
                    className="w-full rounded-xl bg-slate-900/60 border border-slate-800 px-4 py-3.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-shadow duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="user_email" className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 font-mono mb-2">Return Address (Email)</label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    placeholder="E.g. elon@spacex.com"
                    className="w-full rounded-xl bg-slate-900/60 border border-slate-800 px-4 py-3.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-shadow duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 font-mono mb-2">Handshake Signal Payload</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe your project, internship offers, or direct query..."
                    className="w-full resize-none rounded-xl bg-slate-900/60 border border-slate-800 px-4 py-3.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-shadow duration-300"
                  />
                </div>
              </div>

              {/* Status Alert logs */}
              <AnimatePresence>
                {status.msg && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`mt-5 p-4 rounded-xl border flex items-start gap-3 ${
                      status.type === 'success'
                        ? 'bg-emerald-950/20 border-emerald-500/20 text-emerald-300'
                        : 'bg-rose-950/20 border-rose-500/20 text-rose-300'
                    }`}
                  >
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                    <span className="text-[11px] font-medium leading-relaxed font-mono">{status.msg}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={loading}
                className="group flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 px-6 py-4 text-xs font-bold text-slate-950 shadow-[0_0_24px_rgba(6,182,212,0.2)] transition-all duration-300 hover:shadow-[0_0_36px_rgba(6,182,212,0.45)] hover:-translate-y-0.5 active:translate-y-0 mt-6 cursor-pointer"
              >
                {loading ? 'MODULATING SIGNAL...' : 'BROADCAST HANDSHAKE'}
                <Send size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-350" />
              </button>
            </form>
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}
