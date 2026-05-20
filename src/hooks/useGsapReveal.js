import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/** Subtle blur-to-focus scroll reveals for elements with data-gsap-reveal */
export function useGsapReveal(enabled = true) {
  useEffect(() => {
    if (!enabled) return

    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-gsap-reveal]').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
          y: 48,
          opacity: 0,
          filter: 'blur(8px)',
          duration: 0.9,
          ease: 'power3.out',
        })
      })
    })

    return () => ctx.revert()
  }, [enabled])
}
