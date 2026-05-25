import { useEffect, useRef } from 'react'

const CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン01アイウエオ<>{}[]/\\|'

export default function MatrixRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    let columns = []
    const fontSize = 14

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      const columnCount = Math.floor(canvas.width / fontSize)
      columns = Array.from({ length: columnCount }, () =>
        Math.floor(Math.random() * (canvas.height / fontSize))
      )
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(4, 6, 11, 0.08)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${fontSize}px monospace`
      ctx.fillStyle = 'rgba(6, 182, 212, 0.35)'

      columns.forEach((y, i) => {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)]
        const x = i * fontSize
        ctx.fillText(char, x, y * fontSize)
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          columns[i] = 0
        } else {
          columns[i] = y + 1
        }
      })

      animationId = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[-3] opacity-[0.18]"
      aria-hidden
    />
  )
}
