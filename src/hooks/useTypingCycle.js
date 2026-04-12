import { useState, useEffect } from 'react'

/**
 * Cycles through strings with a typewriter effect (custom hook — no extra package).
 */
export function useTypingCycle(strings, options = {}) {
  const {
    typeSpeed = 85,
    deleteSpeed = 52,
    holdMs = 2200,
    gapMs = 420,
    startDelayMs = 350,
  } = options

  const [text, setText] = useState('')

  useEffect(() => {
    if (!strings?.length) return undefined

    let cancelled = false
    let buffer = ''
    let wordIdx = 0
    let deleting = false
    let timeoutId

    const clear = () => {
      if (timeoutId) clearTimeout(timeoutId)
    }

    const schedule = (fn, ms) => {
      clear()
      timeoutId = setTimeout(fn, ms)
    }

    const step = () => {
      if (cancelled) return
      const full = strings[wordIdx % strings.length]

      if (!deleting) {
        if (buffer.length < full.length) {
          buffer = full.slice(0, buffer.length + 1)
          setText(buffer)
          schedule(step, typeSpeed)
        } else {
          schedule(() => {
            deleting = true
            step()
          }, holdMs)
        }
      } else if (buffer.length > 0) {
        buffer = buffer.slice(0, -1)
        setText(buffer)
        schedule(step, deleteSpeed)
      } else {
        deleting = false
        wordIdx += 1
        schedule(step, gapMs)
      }
    }

    schedule(step, startDelayMs)

    return () => {
      cancelled = true
      clear()
    }
  }, [strings, typeSpeed, deleteSpeed, holdMs, gapMs, startDelayMs])

  return text
}
