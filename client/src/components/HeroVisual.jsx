import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import heroImage from '../assets/portfolio/modern-villa-boat-club-road.png'

const HeroVisual = () => {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, -150])

  return (
    <div className="hero__visual-container">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="hero__visual-blob hero__visual-blob--1"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          rotate: [90, 0, 90]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        className="hero__visual-blob hero__visual-blob--2"
      />

      <motion.div
        style={{ y: y1 }}
        className="hero__visual-main"
      >
        <motion.div
          whileHover={{ y: -12, rotateX: 5, rotateY: 5, scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 320, damping: 26 }}
          className="hero__visual-photo-card"
        >
          <img
            src={heroImage}
            alt="Luxury double-height living room interior"
            className="hero__visual-photo"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HeroVisual
