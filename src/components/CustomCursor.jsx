import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') !== null ||
        e.target.closest('button') !== null ||
        e.target.closest('input') !== null ||
        e.target.closest('textarea') !== null
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  return (
    <>
      {/* Tiny Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-cyan-400 rounded-full pointer-events-none z-[99999] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 2.0 : 1
        }}
        transition={{ type: 'spring', stiffness: 600, damping: 28, mass: 0.3 }}
      />
      
      {/* Outer Tracking Halo */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-cyan-400/40 rounded-full pointer-events-none z-[99998] hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.6 : 1,
          borderColor: isHovering ? 'rgba(139, 92, 246, 0.6)' : 'rgba(6, 182, 212, 0.4)'
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 22, mass: 0.6 }}
      />

      {/* Futuristic Coordinates HUD beside cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99997] font-mono text-[8px] text-cyan-400/40 hidden lg:block"
        animate={{
          x: mousePosition.x + 16,
          y: mousePosition.y - 12
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.5 }}
      >
        <span>X:{Math.round(mousePosition.x)} Y:{Math.round(mousePosition.y)}</span>
      </motion.div>
    </>
  )
}
