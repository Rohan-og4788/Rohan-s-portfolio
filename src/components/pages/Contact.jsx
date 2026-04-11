import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const containerVars = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVars = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
}

export default function Contact({ profile }) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
      variants={containerVars}
      className="py-12"
    >
      <motion.div variants={itemVars} className="mb-12">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Let's Connect</h1>
        <p className="mt-4 text-xl text-zinc-400">Have a project in mind or want to collaborate?</p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Contact Links */}
        <motion.div variants={itemVars} className="lg:col-span-5 grid gap-4">
          <div className="rounded-3xl border border-white/10 bg-[var(--color-dark-card)] p-8 shadow-xl">
             <h3 className="text-lg font-bold text-white mb-6">Connect across platforms</h3>
             <div className="grid gap-3">
                <a href={`mailto:${profile.email}`} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                   <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/20 group-hover:scale-110 transition-transform">
                      <Mail size={20} />
                   </div>
                   <div>
                      <div className="text-sm font-bold text-white">Email</div>
                      <div className="text-xs text-zinc-400">{profile.email}</div>
                   </div>
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                   <div className="p-2 rounded-lg bg-white/10 text-white border border-white/10 group-hover:scale-110 transition-transform">
                      <FaGithub size={20} />
                   </div>
                   <div>
                      <div className="text-sm font-bold text-white">GitHub</div>
                      <div className="text-xs text-zinc-400">Open Source Projects</div>
                   </div>
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                   <div className="p-2 rounded-lg bg-[#0A66C2]/20 text-[#0A66C2] border border-[#0A66C2]/20 group-hover:scale-110 transition-transform">
                      <FaLinkedin size={20} />
                   </div>
                   <div>
                      <div className="text-sm font-bold text-white">LinkedIn</div>
                      <div className="text-xs text-zinc-400">Professional Network</div>
                   </div>
                </a>
             </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={itemVars} className="lg:col-span-7">
           <form 
             className="rounded-3xl border border-white/10 bg-[var(--color-dark-card)] p-8 shadow-xl"
             onSubmit={(e) => { e.preventDefault(); alert("Thanks for reaching out! (Form integration required)") }}
           >
             <div className="grid gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold mb-2 text-zinc-300">Name</label>
                  <input type="text" id="name" required placeholder="Jane Doe" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold mb-2 text-zinc-300">Email</label>
                  <input type="email" id="email" required placeholder="jane@example.com" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold mb-2 text-zinc-300">Message</label>
                  <textarea id="message" required rows={5} placeholder="Your message here..." className="w-full resize-none rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"></textarea>
                </div>
                <button type="submit" className="group flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500">
                   Send Message
                   <Send size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </button>
             </div>
           </form>
        </motion.div>
      </div>
    </motion.div>
  )
}
