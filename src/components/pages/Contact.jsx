import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const containerVars = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const itemVars = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } },
}

export default function Contact({ profile }) {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto min-h-[calc(100vh-8rem)] flex flex-col justify-center">
      <motion.div
        initial="hidden"
        animate="show"
        exit={{ opacity: 0, y: -20 }}
        variants={containerVars}
        className="w-full"
      >
        <motion.div variants={itemVars} className="mb-16 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <div className="h-1 w-12 bg-cyan-500 rounded-full"></div>
              <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest">Contact</h2>
           </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight">Let's Connect</h1>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Have a project in mind, looking to hire, or just want to chat? Send me a message.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Contact Links */}
          <motion.div variants={itemVars} className="lg:col-span-5 grid gap-4">
            <div className="rounded-[2rem] border border-white/5 bg-slate-800/30 p-8 backdrop-blur-md shadow-xl h-full">
               <h3 className="text-xl font-bold text-white mb-8">Direct Reach</h3>
               <div className="grid gap-4">
                  <a href={`mailto:${profile.email}`} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-cyan-500/30 transition-all group">
                     <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                        <Mail size={24} />
                     </div>
                     <div>
                        <div className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">Email</div>
                        <div className="text-sm text-slate-400">{profile.email}</div>
                     </div>
                  </a>
                  <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all group">
                     <div className="p-3 rounded-xl bg-slate-800 text-white border border-slate-700 group-hover:scale-110 transition-transform">
                        <FaGithub size={24} />
                     </div>
                     <div>
                        <div className="text-base font-bold text-white">GitHub</div>
                        <div className="text-sm text-slate-400">Open Source Projects</div>
                     </div>
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-[#0A66C2]/30 transition-all group">
                     <div className="p-3 rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] border border-[#0A66C2]/20 group-hover:scale-110 transition-transform">
                        <FaLinkedin size={24} />
                     </div>
                     <div>
                        <div className="text-base font-bold text-white group-hover:text-[#0A66C2] transition-colors">LinkedIn</div>
                        <div className="text-sm text-slate-400">Professional Network</div>
                     </div>
                  </a>
               </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVars} className="lg:col-span-7">
             <form 
               className="rounded-[2rem] border border-white/5 bg-slate-900/50 backdrop-blur-md p-8 shadow-xl h-full"
               onSubmit={(e) => { e.preventDefault(); alert("Thanks for reaching out! In a real deployment, please connect to an API route or Email service.") }}
             >
               <div className="grid gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold mb-2 text-slate-300">Name</label>
                    <input type="text" id="name" required placeholder="John Doe" className="w-full rounded-xl bg-slate-800/50 border border-slate-700 px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-shadow" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold mb-2 text-slate-300">Email</label>
                    <input type="email" id="email" required placeholder="john@example.com" className="w-full rounded-xl bg-slate-800/50 border border-slate-700 px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-shadow" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-bold mb-2 text-slate-300">Message</label>
                    <textarea id="message" required rows={5} placeholder="Your message here..." className="w-full resize-none rounded-xl bg-slate-800/50 border border-slate-700 px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-shadow"></textarea>
                  </div>
                  <button type="submit" className="group flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-4 text-base font-bold text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:-translate-y-1 mt-2">
                     Send Message
                     <Send size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </button>
               </div>
             </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
