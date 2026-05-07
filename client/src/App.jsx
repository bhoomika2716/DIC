import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import Chatbot from './components/Chatbot'
import CustomCursor from './components/CustomCursor'

// Core Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Testimonials from './pages/Testimonials'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

// Design Ideas
import DesignIdeas from './pages/DesignIdeas'
import RoomPage from './pages/RoomPage'

// Service Detail
import ServiceDetail from './pages/ServiceDetail'

// Policies
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiePolicy from './pages/CookiePolicy'
import TermsAndConditions from './pages/Terms'

import './App.css'

/* Reset scroll position on route change */
function ScrollReset() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollReset />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* Services */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        
        <Route path="/portfolio" element={<Portfolio />} />
        
        {/* Design Ideas */}
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
    </BrowserRouter>
  )
}