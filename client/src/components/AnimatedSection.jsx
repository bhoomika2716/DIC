import React, { useEffect, useRef } from 'react'

export default function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const delayClass = delay ? `delay-${delay}` : ''

  return (
    <div ref={ref} className={`animate-in ${delayClass} ${className}`}>
      {children}
    </div>
  )
}
