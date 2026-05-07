import React from 'react';
import { motion } from 'framer-motion';

const InteractiveGrid = () => {
  return (
    <div 
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: -1,
        overflow: 'hidden',
        opacity: 0.4
      }}
      aria-hidden="true"
    >
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(244, 231, 161, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(244, 231, 161, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      <motion.div 
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(244, 231, 161, 0.03) 0%, transparent 50%)'
        }}
      />
    </div>
  );
};

export default InteractiveGrid;
