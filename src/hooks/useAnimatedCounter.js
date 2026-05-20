import { useEffect, useState } from 'react'

/** Parse values like "12+", "4+", "15+" into { target, suffix } */
export function parseStatValue(value) {
  const str = String(value ?? '')
  const match = str.match(/^(\d+)(.*)$/)
  if (!match) return { target: 0, suffix: str }
  return { target: parseInt(match[1], 10), suffix: match[2] || '' }
}

export function useAnimatedCounter(value, { duration = 1400, active = true } = {}) {
  const { target, suffix } = parseStatValue(value)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) {
      setCount(target)
      return
    }

    const startTime = performance.now()

    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }

    const id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [target, duration, active])

  return `${count}${suffix}`
}
