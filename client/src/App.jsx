import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollReset from './components/ScrollReset'
import WhatsAppButton from './components/WhatsAppButton'
import Chatbot from './components/Chatbot'
import CustomCursor from './components/CustomCursor'
import Squares from './components/Squares'

// Core Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Portfolio from './pages/Portfolio'
import DesignIdeas from './pages/DesignIdeas'
import RoomPage from './pages/RoomPage'
import Testimonials from './pages/Testimonials'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

// Policy Pages
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiePolicy from './pages/CookiePolicy'
import TermsAndConditions from './pages/Terms'

import './App.css'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <BrowserRouter>
      {/* Global Scroll Progress Bar */}
      <motion.div
        className="scroll-progress"
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'var(--accent)',
          transformOrigin: '0%',
          zIndex: 9999
        }}
      />

      <ScrollReset />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/design-ideas" element={<DesignIdeas />} />
        <Route path="/design-ideas/:roomId" element={<RoomPage />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Policies */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>

      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
      <Chatbot />
      <CustomCursor />
      <Squares 
        speed={0.4} 
        squareSize={40} 
        direction="right" 
        borderColor="rgba(184, 154, 66, 0.08)" 
        hoverFillColor="rgba(184, 154, 66, 0.04)"
      />
    </BrowserRouter>
  )
}