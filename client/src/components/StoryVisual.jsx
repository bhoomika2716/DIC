import React from 'react'
import { motion } from 'framer-motion'
import ourStoryImage from '../assets/home/our-story.png'

const StoryVisual = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="story-visual-card glass-card"
    >
      <img
        src={ourStoryImage}
        alt="Elegant premium interior reflecting the De Interio Cafe design philosophy"
        className="story-visual-card__image"
      />
      <div className="story-visual-card__overlay" />
      <div className="story-visual-card__content">
        <span className="badge">Since 2008</span>
        <h3>Spaces built with warmth, detail, and lasting character.</h3>
        <p>Design-led interiors shaped for real homes, real routines, and long-term comfort.</p>
      </div>
    </motion.div>
  )
}

export default StoryVisual
