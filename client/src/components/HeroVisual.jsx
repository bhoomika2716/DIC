import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Award, Clock, Users } from 'lucide-react';

const HeroVisual = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);
  const y3 = useTransform(scrollY, [0, 500], [0, -200]);
  const rotate = useTransform(scrollY, [0, 500], [0, 15]);

  return (
    <div className="hero__visual-container">
      {/* Background abstract shapes */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="hero__visual-blob hero__visual-blob--1"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          rotate: [90, 0, 90]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="hero__visual-blob hero__visual-blob--2"
      />

      {/* Parallax Decorative Frame */}
      <motion.div 
        style={{ y: y2, rotate: -5 }}
        className="hero__visual-frame glass-card"
      />

      <motion.div 
        style={{ y: y1 }}
        className="hero__visual-main"
      >
        {/* Main Card */}
        <motion.div 
          whileHover={{ y: -15, rotateX: 8, rotateY: 8, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="hero__visual-card glass-card"
        >
          <div className="hero__visual-inner">
            <div className="hero__visual-label">Ongoing Excellence</div>
            <div className="hero__visual-project">Ultra Modern Villa • OMR</div>
            <div className="hero__visual-progress">
              <div className="hero__visual-bar">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '92%' }}
                  transition={{ duration: 2, delay: 0.5, ease: "circOut" }}
                  className="hero__visual-fill" 
                />
              </div>
              <div className="hero__visual-stats">
                <span>92% Finalized</span>
                <span>Moving in 2 weeks</span>
              </div>
            </div>
          </div>
          <div className="hero__visual-tag">Luxury Living</div>
        </motion.div>

        {/* Floating Badges with distinct colors */}
        <motion.div 
          style={{ y: y3 }}
          initial={{ opacity: 0, x: 50, rotate: 10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 5 }}
          transition={{ delay: 0.6, type: "spring" }}
          className="hero__visual-badge hero__visual-badge--gold glass-card"
        >
          <div className="hero__visual-badge-icon"><Award size={20} /></div>
          <div className="hero__visual-badge-text">
            <strong>Top Rated</strong>
            <span>Studio 2026</span>
          </div>
        </motion.div>

        <motion.div 
          style={{ y: y2 }}
          initial={{ opacity: 0, x: -50, rotate: -10 }}
          whileInView={{ opacity: 1, x: 0, rotate: -5 }}
          transition={{ delay: 0.8, type: "spring" }}
          className="hero__visual-user-badge glass-card"
        >
          <div className="hero__visual-avatars">
            <div className="avatar" style={{ background: '#b89a42', color: '#fff' }}>M</div>
            <div className="avatar" style={{ background: '#2d3436', color: '#fff' }}>D</div>
            <div className="avatar" style={{ background: '#e17055', color: '#fff' }}>S</div>
            <div className="avatar-more">+24</div>
          </div>
          <span>Trusted by many</span>
        </motion.div>
      </motion.div>

      {/* Floating Abstract Icons */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="hero__visual-icon hero__visual-icon--1"
      ><Shield size={24} /></motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="hero__visual-icon hero__visual-icon--2"
      ><Clock size={20} /></motion.div>

      <div className="hero__visual-dots" />
    </div>
  );
};

export default HeroVisual;
