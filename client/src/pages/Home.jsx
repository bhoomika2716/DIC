import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
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
      <span className="stat__number">{count}{suffix}</span>
      <span className="stat__label">{label}</span>
    </div>
  )
}

const SERVICES = [
  {
    icon: '🏠',
    title: 'Residential Design',
    desc: 'Bespoke living spaces that reflect your personality. From concept to completion, we transform homes into sanctuaries.',
    href: '/services',
  },
  {
    icon: '🏢',
    title: 'Commercial Design',
    desc: 'Functional, brand-aligned workspaces that inspire teams and impress clients. Offices, retail, hospitality.',
    href: '/services',
  },
  {
    icon: '🔨',
    title: 'Renovation & Remodeling',
    desc: 'Breathe new life into existing spaces. Structural, aesthetic, or both — we handle end-to-end renovation.',
    href: '/services',
  },
  {
    icon: '✨',
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

const PORTFOLIO_ITEMS = [
  { title: 'Modern Villa, Boat Club Road', category: 'Residential', color: '#1a1208' },
  { title: 'Corporate HQ, Anna Salai', category: 'Commercial', color: '#080f1a' },
  { title: 'Boutique Café, Nungambakkam', category: 'Commercial', color: '#0a120a' },
  { title: 'Penthouse Renovation, ECR', category: 'Renovation', color: '#12080a' },
  { title: 'Luxury Bedroom Suite', category: 'Residential', color: '#0d0a15' },
  { title: 'Modular Kitchen, Velachery', category: 'Residential', color: '#120e08' },
]

export default function Home() {
  return (
    <main className="home">
      {/* ─── HERO ───────────────────────────────────────── */}
      <section className="hero">
        <div className="hero__bg-grid" aria-hidden="true" />
        <div className="hero__accent-line" aria-hidden="true" />
        <div className="container hero__content">
          <div className="hero__text">
            <AnimatedSection>
              <p className="overline hero__overline">Chennai's Premier Interior Design Studio</p>
            </AnimatedSection>
            <AnimatedSection delay={1}>
              <h1 className="display hero__heading">
                Spaces That Tell<br />
                <em className="hero__heading-em">Your Story</em>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={2}>
              <p className="lead hero__lead">
                De Interio Café crafts extraordinary interiors for homes and businesses across Chennai. 
                15+ years of transforming spaces, one dream at a time.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={3}>
              <div className="hero__ctas">
                <Link to="/portfolio" className="btn btn-primary" id="hero-view-portfolio">
                  View Our Work
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <Link to="/contact" className="btn btn-outline" id="hero-book-consultation">
                  Book Free Consultation
                </Link>
              </div>
            </AnimatedSection>
          </div>
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__visual-card">
              <div className="hero__visual-inner">
                <div className="hero__visual-label">Current Project</div>
                <div className="hero__visual-project">Modern Villa, Boat Club</div>
                <div className="hero__visual-progress">
                  <div className="hero__visual-bar">
                    <div className="hero__visual-fill" style={{ width: '78%' }} />
                  </div>
                  <span>78% Complete</span>
                </div>
              </div>
              <div className="hero__visual-tag">Residential</div>
            </div>
            <div className="hero__visual-badge">
              <span className="hero__visual-badge-num">500+</span>
              <span className="hero__visual-badge-text">Projects Delivered</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="container">
          <div className="hero__stats">
            <StatCounter value={500} suffix="+" label="Projects Completed" />
            <div className="hero__stat-divider" />
            <StatCounter value={15} suffix="+" label="Years of Excellence" />
            <div className="hero__stat-divider" />
            <StatCounter value={98} suffix="%" label="Client Satisfaction" />
            <div className="hero__stat-divider" />
            <StatCounter value={200} suffix="+" label="Happy Families" />
          </div>
        </div>
      </section>

      {/* ─── SERVICES ───────────────────────────────────── */}
      <section className="section home-services">
        <div className="container">
          <AnimatedSection>
            <div className="section-label">
              <span className="overline">What We Do</span>
            </div>
            <div className="home-services__header">
              <h2 className="heading-1">Our Services</h2>
              <Link to="/services" className="btn btn-ghost">View All Services</Link>
            </div>
          </AnimatedSection>
          <div className="home-services__grid">
            {SERVICES.map((s, i) => (
              <AnimatedSection key={s.title} delay={i + 1}>
                <Link to={s.href} className="service-card" id={`service-${s.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="service-card__icon">{s.icon}</div>
                  <h3 className="heading-3 service-card__title">{s.title}</h3>
                  <p className="body-sm service-card__desc">{s.desc}</p>
                  <span className="service-card__arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT STRIP ────────────────────────────────── */}
      <section className="section home-about">
        <div className="container">
          <div className="home-about__inner">
            <AnimatedSection className="home-about__text">
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
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {p}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn btn-outline" id="about-learn-more">
                Learn Our Story
              </Link>
            </AnimatedSection>
            <AnimatedSection delay={2} className="home-about__visual">
              <div className="home-about__card home-about__card--1">
                <div className="home-about__card-inner">
                  <span className="overline">Founded</span>
                  <strong>2008</strong>
                </div>
              </div>
              <div className="home-about__card home-about__card--2">
                <div className="home-about__card-inner">
                  <span className="overline">Recognition</span>
                  <strong>Top Studio<br/>Chennai</strong>
                </div>
              </div>
              <div className="home-about__card home-about__card--3">
                <div className="home-about__card-inner">
                  <span className="overline">Affiliation</span>
                  <strong>Zenith77<br/>Group</strong>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO PREVIEW ──────────────────────────── */}
      <section className="section home-portfolio">
        <div className="container">
          <AnimatedSection>
            <div className="section-label">
              <span className="overline">Our Work</span>
            </div>
            <div className="home-portfolio__header">
              <h2 className="heading-1">Featured Projects</h2>
              <Link to="/portfolio" className="btn btn-ghost" id="portfolio-view-all">View All Projects</Link>
            </div>
          </AnimatedSection>
          <div className="home-portfolio__grid">
            {PORTFOLIO_ITEMS.map((item, i) => (
              <AnimatedSection key={item.title} delay={(i % 3) + 1} className={`portfolio-item portfolio-item--${i}`}>
                <Link to="/portfolio" className="portfolio-card" style={{ '--card-bg': item.color }}>
                  <div className="portfolio-card__bg" />
                  <div className="portfolio-card__content">
                    <span className="badge">{item.category}</span>
                    <h3 className="portfolio-card__title">{item.title}</h3>
                  </div>
                  <div className="portfolio-card__hover">
                    <span>View Project</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ───────────────────────────────── */}
      <section className="section home-testimonials">
        <div className="container">
          <AnimatedSection>
            <div className="section-label">
              <span className="overline">Client Stories</span>
            </div>
            <h2 className="heading-1 home-testimonials__heading">What Clients Say</h2>
          </AnimatedSection>
          <div className="home-testimonials__grid">
            {TESTIMONIALS.map((t, i) => (
              <AnimatedSection key={t.name} delay={i + 1}>
                <div className="testimonial-card">
                  <div className="stars">
                    {Array(t.rating).fill(0).map((_, j) => <span key={j}>★</span>)}
                  </div>
                  <p className="testimonial-card__quote">"{t.quote}"</p>
                  <div className="testimonial-card__author">
                    <div className="testimonial-card__avatar">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <strong>{t.name}</strong>
                      <span className="body-sm">{t.role}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="home-testimonials__cta">
            <Link to="/testimonials" className="btn btn-outline" id="testimonials-view-all">
              Read All Reviews
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CTA BAND ───────────────────────────────────── */}
      <section className="home-cta-band">
        <div className="container">
          <AnimatedSection className="home-cta-band__inner">
            <div>
              <h2 className="heading-1 home-cta-band__heading">Ready to Transform<br />Your Space?</h2>
              <p className="lead home-cta-band__lead">Schedule a free consultation and let's bring your vision to life.</p>
            </div>
            <div className="home-cta-band__actions">
              <Link to="/contact" className="btn btn-primary" id="cta-band-consult">Get Free Consultation</Link>
              <a href="tel:+919500078674" className="btn btn-outline" id="cta-band-call">Call +91 95000 78674</a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
