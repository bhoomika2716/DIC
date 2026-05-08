import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { 
  Home as HomeIcon, 
  Briefcase, 
  Hammer, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Star,
  Quote
} from 'lucide-react'
import Spotlight from '../components/Spotlight'
import ShinyText from '../components/ShinyText'
import HeroVisual from '../components/HeroVisual'
import StoryVisual from '../components/StoryVisual'
import { PORTFOLIO_PROJECTS } from '../data/portfolio'
import './Home.css'

/* Animated counter hook */
function useCounter(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return count
}

function StatCounter({ value, suffix, label }) {
  const ref = useRef(null)
  const [started, setStarted] = useState(false)
  const count = useCounter(value, 1600, started)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="stat">
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="stat__number"
      >
        {count}{suffix}
      </motion.span>
      <span className="stat__label">{label}</span>
    </div>
  )
}

const SERVICES = [
  {
    icon: <HomeIcon size={32} />,
    title: 'Residential Design',
    desc: 'Bespoke living spaces that reflect your personality. From concept to completion, we transform homes into sanctuaries.',
    href: '/services',
  },
  {
    icon: <Briefcase size={32} />,
    title: 'Commercial Design',
    desc: 'Functional, brand-aligned workspaces that inspire teams and impress clients. Offices, retail, hospitality.',
    href: '/services',
  },
  {
    icon: <Hammer size={32} />,
    title: 'Renovation & Remodeling',
    desc: 'Breathe new life into existing spaces. Structural, aesthetic, or both — we handle end-to-end renovation.',
    href: '/services',
  },
  {
    icon: <Sparkles size={32} />,
    title: 'Interior Styling',
    desc: 'Curated furniture, art, and decor to perfect your space. The final touch that makes it uniquely yours.',
    href: '/services',
  },
]

const TESTIMONIALS = [
  {
    name: 'Priya Ramachandran',
    role: 'Homeowner, OMR Chennai',
    quote: 'De Interio Café turned our 2BHK into a stunning modern home. The attention to detail and client-first approach is unmatched.',
    rating: 5,
  },
  {
    name: 'Karthik Sundar',
    role: 'CEO, TechStart Solutions',
    quote: 'Our new office is a productivity powerhouse. The team delivered on time, within budget, and beyond expectations.',
    rating: 5,
  },
  {
    name: 'Meera Iyer',
    role: 'Restaurant Owner, Adyar',
    quote: 'The restaurant ambience they created has become our biggest USP. Customers come for the food, but stay for the design.',
    rating: 5,
  },
]

/* Featured projects for the home page */
const FEATURED_PROJECTS = PORTFOLIO_PROJECTS.slice(0, 6)

const RevealText = ({ children, delay = 0 }) => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div
        initial={{ y: '100%' }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <main className="home">
      {/* ─── HERO ───────────────────────────────────────── */}
      <section className="hero">
        <Spotlight />
        
        <div className="container hero__content">
          <div className="hero__text">
            <RevealText delay={0.1}>
              <p className="overline hero__overline">Chennai's Premier Interior Design Studio</p>
            </RevealText>
            
            <h1 className="display hero__heading">
              <RevealText delay={0.2}>Spaces That Tell</RevealText>
              <RevealText delay={0.3}>
                <ShinyText 
                  text="Your Story" 
                  className="hero__heading-em" 
                  speed={3} 
                />
              </RevealText>
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="lead hero__lead"
            >
              De Interio Café crafts extraordinary interiors for homes and businesses across Chennai. 
              15+ years of transforming spaces, one dream at a time.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hero__ctas"
            >
              <Link to="/portfolio" className="btn btn-primary hoverable" id="hero-view-portfolio">
                View Our Work
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-outline hoverable" id="hero-book-consultation">
                Get In Touch
              </Link>
            </motion.div>
          </div>

          <HeroVisual />
        </div>

        {/* Stats */}
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hero__stats glass-card"
          >
            <StatCounter value={500} suffix="+" label="Projects Completed" />
            <div className="hero__stat-divider" />
            <StatCounter value={15} suffix="+" label="Years of Excellence" />
            <div className="hero__stat-divider" />
            <StatCounter value={98} suffix="%" label="Client Satisfaction" />
            <div className="hero__stat-divider" />
            <StatCounter value={200} suffix="+" label="Happy Families" />
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES ───────────────────────────────────── */}
      <section className="section home-services">
        <div className="container">
          <div className="section-label">
            <span className="overline">What We Do</span>
          </div>
          <div className="home-services__header">
            <h2 className="heading-1">Our Services</h2>
            <Link to="/services" className="btn btn-ghost hoverable">View All Services</Link>
          </div>

          <div className="home-services__grid">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link to={s.href} className="service-card hoverable" id={`service-${s.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="service-card__icon">{s.icon}</div>
                  <h3 className="heading-3 service-card__title">{s.title}</h3>
                  <p className="body-sm service-card__desc">{s.desc}</p>
                  <span className="service-card__arrow">
                    <ArrowRight size={20} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT STRIP ────────────────────────────────── */}
      <section className="section home-about section-brown-soft">
        <div className="container">
          <div className="home-about__inner">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="home-about__text"
            >
              <div className="section-label">
                <span className="overline">Our Story</span>
              </div>
              <h2 className="heading-1 home-about__heading">
                Designing Dreams<br />Since 2008
              </h2>
              <p className="lead home-about__lead">
                Founded with a vision to redefine interiors in Chennai, De Interio Café has grown 
                from a boutique studio into one of the city's most trusted design firms. Every project 
                is a collaboration — your vision, our expertise.
              </p>
              <ul className="home-about__pillars">
                {['Client-First Philosophy','Timeless Design Aesthetic','On-Time, On-Budget Delivery','End-to-End Project Management'].map(p => (
                  <li key={p}>
                    <CheckCircle2 size={18} />
                    {p}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn btn-outline hoverable" id="about-learn-more">
                Learn Our Story
              </Link>
            </motion.div>

            <div className="home-about__visual">
              <StoryVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO PREVIEW ──────────────────────────── */}
      <section className="section home-portfolio">
        <div className="container">
          <div className="section-label">
            <span className="overline">Our Work</span>
          </div>
          <div className="home-portfolio__header">
            <h2 className="heading-1">Featured Projects</h2>
            <Link to="/portfolio" className="btn btn-ghost hoverable" id="portfolio-view-all">View All Projects</Link>
          </div>

          <div className="home-portfolio__grid">
            {FEATURED_PROJECTS.map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                className={`portfolio-item portfolio-item--${i}`}
              >
                <Link to={`/portfolio`} className="portfolio-card hoverable">
                  <img src={item.image} alt={item.imageAlt} className="portfolio-card__img" />
                  <div className="portfolio-card__overlay" />
                  <div className="portfolio-card__content">
                    <span className="badge">{item.category}</span>
                    <h3 className="portfolio-card__title">{item.title}</h3>
                  </div>
                  <div className="portfolio-card__hover">
                    <span>View Project</span>
                    <ArrowRight size={20} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ───────────────────────────────── */}
      <section className="section home-testimonials section-brown">
        <div className="container">
          <div className="section-label">
            <span className="overline">Client Stories</span>
          </div>
          <h2 className="heading-1 home-testimonials__heading">What Clients Say</h2>
          
          <div className="home-testimonials__grid">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="testimonial-card glass-card"
              >
                <div className="stars">
                  {Array(t.rating).fill(0).map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <div className="testimonial-card__quote-wrapper">
                  <Quote size={24} className="testimonial-card__quote-icon" />
                  <p className="testimonial-card__quote">"{t.quote}"</p>
                </div>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <strong>{t.name}</strong>
                    <span className="body-sm">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="home-testimonials__cta"
          >
            <Link to="/testimonials" className="btn btn-outline hoverable" id="testimonials-view-all">
              Read All Reviews
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA BAND ───────────────────────────────────── */}
      <section className="home-cta-band section-brown">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="home-cta-band__inner glass-card"
          >
            <div>
              <h2 className="heading-1 home-cta-band__heading">Ready to Transform<br />Your Space?</h2>
              <p className="lead home-cta-band__lead">Schedule a free consultation and let's bring your vision to life.</p>
            </div>
            <div className="home-cta-band__actions">
              <Link to="/contact" className="btn btn-primary hoverable" id="cta-band-consult">Get Free Consultation</Link>
              <a href="tel:+919500078674" className="btn btn-outline hoverable" id="cta-band-call">Call +91 95000 78674</a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
