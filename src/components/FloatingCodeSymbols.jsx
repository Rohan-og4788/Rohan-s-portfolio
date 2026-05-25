import { motion } from 'framer-motion'

const SYMBOLS = ['{ }', '</>', '=>', 'fn()', '0x1', 'AI', 'npm', 'git', 'λ', '∞', '[]', '&&']

export default function FloatingCodeSymbols() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden select-none" aria-hidden>
      {SYMBOLS.map((sym, i) => (
        <motion.span
          key={sym + i}
          className="absolute font-mono text-[10px] font-bold text-cyan-500/15"
          style={{
            left: `${8 + (i * 7.5) % 85}%`,
            top: `${10 + (i * 11) % 80}%`,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.08, 0.22, 0.08],
          }}
          transition={{
            duration: 5 + (i % 4),
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.35,
          }}
        >
          {sym}
        </motion.span>
      ))}
    </div>
  )
}
