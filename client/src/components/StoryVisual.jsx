import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Zap, Globe } from 'lucide-react';

const StoryVisual = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="story-visual-grid"
    >
      {/* Box 1: Large Image/Visual */}
      <motion.div variants={item} className="story-box story-box--large glass-card" style={{ background: 'linear-gradient(135deg, var(--bg-card), rgba(184, 154, 66, 0.05))' }}>
        <div className="story-box__icon"><Sparkles size={24} color="#b89a42" /></div>
        <div className="story-box__content">
          <h3 style={{ color: '#b89a42' }}>Excellence</h3>
          <p>Crafting perfection in every detail since 2008.</p>
        </div>
        <div className="story-box__bg-glow" style={{ background: 'rgba(184, 154, 66, 0.2)' }} />
      </motion.div>

      {/* Box 2: Small Stat */}
      <motion.div variants={item} className="story-box story-box--small glass-card" style={{ background: 'rgba(184, 154, 66, 0.08)' }}>
        <div className="story-box__stat" style={{ color: '#b89a42' }}>100%</div>
        <div className="story-box__label">Happiness</div>
      </motion.div>

      {/* Box 3: Small Icon */}
      <motion.div variants={item} className="story-box story-box--mini glass-card" style={{ background: 'rgba(45, 52, 54, 0.03)' }}>
        <Heart size={32} className="story-icon-heart" fill="#ff4757" />
      </motion.div>

      {/* Box 4: Medium Feature */}
      <motion.div variants={item} className="story-box story-box--medium glass-card" style={{ borderLeft: '3px solid #b89a42' }}>
        <div className="story-box__row">
          <Zap size={20} color="#b89a42" />
          <span>Fast Delivery</span>
        </div>
        <div className="story-box__row">
          <Globe size={20} color="#0984e3" />
          <span>Global Trends</span>
        </div>
      </motion.div>


      {/* Floating Elements */}
      <motion.div 
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="story-floating story-floating--1"
      />
      <motion.div 
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="story-floating story-floating--2"
      />
    </motion.div>
  );
};

export default StoryVisual;
