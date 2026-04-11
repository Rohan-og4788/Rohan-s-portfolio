import { useEffect, useState } from 'react'

function hashId() {
  return window.location.hash.replace('#', '')
}

function isHashSectionInFocus(sectionIds, id) {
  if (!id || !sectionIds.includes(id)) return false
  const el = document.getElementById(id)
  if (!el) return false

  const rect = el.getBoundingClientRect()
  const vh = window.innerHeight
  const top = rect.top
  const bottom = rect.bottom

  // Treat the hash target as "active" while a meaningful part of it is on screen.
  return top < vh * 0.65 && bottom > vh * 0.2
}

export function useNavActive(sectionIds) {
  const [active, setActive] = useState('home')

  useEffect(() => {
    function syncFromHash() {
      const id = hashId()
      if (sectionIds.includes(id)) setActive(id)
    }
    window.addEventListener('hashchange', syncFromHash)
    syncFromHash()
    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [sectionIds])

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const idFromHash = hashId()
        if (isHashSectionInFocus(sectionIds, idFromHash)) {
          setActive(idFromHash)
          return
        }

        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length === 0) return
        visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        const id = visible[0].target.id
        if (sectionIds.includes(id)) setActive(id)
      },
      {
        root: null,
        rootMargin: '-18% 0px -42% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionIds])

  return [active, setActive]
}
