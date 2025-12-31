/**
 * useScrollProgress.js
 * ====================
 * Custom hook for tracking scroll progress on the page.
 * Useful for progress bars, parallax effects, and animations.
 */

import { useState, useEffect } from 'react'

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [scrollDirection, setScrollDirection] = useState('down')
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollHeight > 0 ? (currentScrollY / scrollHeight) * 100 : 0

      setScrollProgress(Math.min(100, Math.max(0, progress)))
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up')
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return { scrollProgress, scrollDirection, scrollY: lastScrollY }
}

export default useScrollProgress
