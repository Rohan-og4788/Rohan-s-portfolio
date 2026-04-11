import { Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Footer({ profile }) {
  return (
    <footer className="mt-auto border-t border-white/5 bg-[var(--color-dark-card)]/50 backdrop-blur">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-lg font-bold text-white tracking-wide">
              {profile?.name ?? 'Portfolio'}
            </div>
            <div className="mt-1 text-xs text-zinc-400 font-medium">
              Built with React, Tailwind, & Framer Motion.
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              className="group flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
              href={profile?.github ?? '#'}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={18} className="text-zinc-400 group-hover:text-white" />
            </a>
            <a
              className="group flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
              href={profile?.linkedin ?? '#'}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={18} className="text-zinc-400 group-hover:text-white" />
            </a>
            <a
              className="group flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
              href={`mailto:${profile?.email ?? ''}`}
            >
              <Mail size={18} className="text-zinc-400 group-hover:text-white" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6 text-xs text-zinc-500 font-semibold text-center sm:text-left">
          © {new Date().getFullYear()} {profile?.name ?? 'Portfolio'}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
