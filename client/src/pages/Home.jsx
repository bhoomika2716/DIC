import React, { useEffect, useRef, useState } from 'react'

import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'

import {

  Layers3,

  Hammer,

  Sparkles,

  MessagesSquare,

  ArrowRight,

  CheckCircle2,

} from 'lucide-react'

import ShinyText from '../components/ShinyText'

import StoryVisual from '../components/StoryVisual'

import TestimonialsMarquee from '../components/TestimonialsMarquee'

import { PORTFOLIO_PROJECTS } from '../data/portfolio'

import './Home.css'







function useCounter(target, duration = 1800, start = false) {

  const [count, setCount] = useState(0)



  useEffect(() => {

    if (!start) return undefined



    let startTime = null



    const step = (timestamp) => {

      if (!startTime) startTime = timestamp

      const progress = Math.min((timestamp - startTime) / duration, 1)

      const ease = 1 - Math.pow(1 - progress, 3)

      setCount(Math.floor(ease * target))



      if (progress < 1) {

        requestAnimationFrame(step)

      }

    }



    requestAnimationFrame(step)

    return undefined

  }, [target, duration, start])



  return count

}



function StatCounter({ value, suffix, label }) {

  const ref = useRef(null)

  const [started, setStarted] = useState(false)

  const count = useCounter(value, 1600, started)



  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {

          setStarted(true)

          observer.disconnect()

        }

      },

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

        {count}

        {suffix}

      </motion.span>

      <span className="stat__label">{label}</span>

    </div>

  )

}



import signatureImg from '../assets/portfolio/modern-villa-boat-club-road.webp'
import renovationImg from '../assets/portfolio/penthouse-renovation-ecr.webp'
import stylingImg from '../assets/portfolio/boutique-cafe-nungambakkam.webp'
import consultationImg from '../assets/portfolio/corporate-hq-anna-salai.webp'

import luxury3BhkImage from '../assets/portfolio/luxury-3bhk-velachery.webp'
import modularKitchenImage from '../assets/portfolio/modular-kitchen-adyar.webp'
import techOfficeImage from '../assets/portfolio/tech-office-sholinganallur.webp'
import boutiqueCafeImage from '../assets/portfolio/boutique-cafe-nungambakkam.webp'

const HERO_PROJECTS = [
  {
    image1: signatureImg,
    image2: renovationImg,
    testimonial: "De Interio Cafe turned our villa into a design landmark. Their vision is simply unmatched.",
    author: "Dr. Karthick",
    stars: 5,
    title: "Design Luxury Spaces in Chennai",
    desc: "We blend timeless elegance with modern comfort to create bespoke, sophisticated residences that reflect your personal legacy."
  },
  {
    image1: luxury3BhkImage,
    image2: modularKitchenImage,
    testimonial: "Highly functional layout with a gorgeous aesthetic. Our home has never felt more premium.",
    author: "Nihitha Sinha",
    stars: 5,
    title: "Timeless Residential Masterpieces",
    desc: "Curating sleek, modular spaces designed for modern living. Tailor-made storage solutions and state-of-the-art styling."
  },
  {
    image1: techOfficeImage,
    image2: boutiqueCafeImage,
    testimonial: "Outstanding execution-ready designs. Complete 3D resolution before standard building starts.",
    author: "Srinivasan Spectra",
    stars: 5,
    title: "Premium Commercial Spaces",
    desc: "Functional corporate and hospitality interiors crafted to inspire work, collaboration, and customer connection."
  }
]

const SERVICES = [
  {
    icon: <Layers3 size={24} />,
    title: 'Signature Interior Projects',
    desc: 'A unified interior service for homes, offices, retail, and hospitality spaces designed to feel elevated, usable, and execution-ready.',
    href: '/services',
    image: signatureImg,
  },
  {
    icon: <Hammer size={24} />,
    title: 'Renovation & Remodeling',
    desc: 'Breathe new life into existing spaces. Structural, aesthetic, or both: we handle end-to-end renovation.',
    href: '/services',
    image: renovationImg,
  },
  {
    icon: <Sparkles size={24} />,
    title: 'Interior Styling',
    desc: 'Curated furniture, art, and decor to perfect your space. The final touch that makes it uniquely yours.',
    href: '/services',
    image: stylingImg,
  },
  {
    icon: <MessagesSquare size={24} />,
    title: 'Design Consultation',
    desc: 'Clear expert guidance for layouts, finishes, budgets, and planning so both families and professionals can move forward with confidence.',
    href: '/services',
    image: consultationImg,
  },
]



const FEATURED_PROJECTS = PORTFOLIO_PROJECTS.slice(0, 6)



const RevealText = ({ children, delay = 0 }) => (

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



export default function Home() {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0)

  const handlePrevHero = () => {
    setActiveHeroIndex((prev) => (prev === 0 ? HERO_PROJECTS.length - 1 : prev - 1))
  }

  const handleNextHero = () => {
    setActiveHeroIndex((prev) => (prev === HERO_PROJECTS.length - 1 ? 0 : prev + 1))
  }

  const currentHero = HERO_PROJECTS[activeHeroIndex]

  return (
    <main className="home">
      <section className="hero">
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
        
        <div className="container hero__content-grid">
          {/* Left Column: Hero Text */}
          <div className="hero__left">
            <RevealText delay={0.1}>
              <p className="overline hero__overline">Bespoke Interior Architecture</p>
            </RevealText>

            <h1 className="display hero__heading">
              <RevealText delay={0.2}>{currentHero.title.split(' ').slice(0, 3).join(' ')}</RevealText>
              <RevealText delay={0.3}>
                <ShinyText text={currentHero.title.split(' ').slice(3).join(' ')} className="hero__heading-em" speed={3} />
              </RevealText>
            </h1>

            <motion.p
              key={`desc-${activeHeroIndex}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lead hero__lead"
            >
              {currentHero.desc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hero__ctas"
            >
              <Link to="/contact" className="hero__btn-pill hoverable">
                <span>GET IN TOUCH</span>
                <span className="hero__btn-arrow">
                  <ArrowRight size={18} />
                </span>
              </Link>
            </motion.div>


          </div>

          {/* Right Column: Floating Overlapping Glassy Cards */}
          <div className="hero__right">
            <div className="hero__cards-container">
              {/* Back Card */}
              <motion.div 
                key={`back-${activeHeroIndex}`}
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 0.6, scale: 0.95, x: 0 }}
                transition={{ duration: 0.8 }}
                className="hero__card hero__card--back"
              >
                <img src={currentHero.image2} alt="Interior Design" className="hero__card-img" />
              </motion.div>

              {/* Front Card */}
              <motion.div 
                key={`front-${activeHeroIndex}`}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="hero__card hero__card--front"
              >
                <img src={currentHero.image1} alt="Luxury Interior" className="hero__card-img" />
                <div className="hero__card-overlay" />
                
                {/* Floating Testimonial Inside Card */}
                <div className="hero__testimonial-badge glass-card">
                  <div className="hero__testimonial-stars">
                    {Array.from({ length: currentHero.stars }).map((_, i) => (
                      <span key={i} className="hero__star">★</span>
                    ))}
                  </div>
                  <p className="hero__testimonial-text">
                    "{currentHero.testimonial}"
                  </p>
                  <span className="hero__testimonial-author">
                    {currentHero.author}
                  </span>
                </div>
              </motion.div>

              {/* Slider Arrow Controls */}
              <div className="hero__slider-controls">
                <button onClick={handlePrevHero} className="hero__slider-btn" aria-label="Previous Slide">
                  ←
                </button>
                <button onClick={handleNextHero} className="hero__slider-btn" aria-label="Next Slide">
                  →
                </button>
              </div>
            </div>

            {/* Bottom Right Stats Rows */}
            <div className="hero__stats-row">
              <div className="hero__stat-box glass-card">
                <div className="hero__stat-num">
                  <StatCounter value={500} suffix="+" label="" />
                </div>
                <div className="hero__stat-label">
                  Bespoke Residences Delivered
                </div>
                <div className="hero__stat-arrow">↗</div>
              </div>

              <div className="hero__stat-box glass-card">
                <div className="hero__stat-num">
                  <StatCounter value={15} suffix="+" label="" />
                </div>
                <div className="hero__stat-label">
                  Years of Excellence
                </div>
                <div className="hero__stat-arrow">↗</div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="section home-services">
        <div className="home-services__blobs">
          <div className="home-services__blob home-services__blob--1" />
          <div className="home-services__blob home-services__blob--2" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-label">
            <span className="overline">What We Do</span>
          </div>
          <div className="home-services__header">
            <h2 className="heading-1">Our Services</h2>
            <Link to="/services" className="btn btn-ghost hoverable">View All Services</Link>
          </div>

          <div className="home-services__grid">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={service.href} className="service-card hoverable" id={`service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="service-card__img-container">
                    <img src={service.image} alt={service.title} className="service-card__img" />
                    <div className="service-card__img-overlay" />
                  </div>
                  <div className="service-card__glass">
                    <div className="service-card__header">
                      <div className="service-card__icon">{service.icon}</div>
                      <h3 className="heading-3 service-card__title">{service.title}</h3>
                    </div>
                    <p className="body-sm service-card__desc">{service.desc}</p>
                    <span className="service-card__arrow">
                      <span>Explore</span>
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>

      </section>



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

                Designing Dreams

                <br />

                Since 2008

              </h2>

              <p className="lead home-about__lead">

                Founded with a vision to redefine interiors in Chennai, De Interio Cafe has grown from a boutique studio into one of the city&apos;s most trusted design firms. Every project is a collaboration: your vision, our expertise.

              </p>

              <ul className="home-about__pillars">

                {['Client-First Philosophy', 'Timeless Design Aesthetic', 'On-Time, On-Budget Delivery', 'End-to-End Project Management'].map((pillar) => (

                  <li key={pillar}>

                    <CheckCircle2 size={18} />

                    {pillar}

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

            {FEATURED_PROJECTS.map((item, index) => (

              <motion.div

                key={item.title}

                initial={{ opacity: 0, scale: 0.95 }}

                whileInView={{ opacity: 1, scale: 1 }}

                viewport={{ once: true }}

                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}

                className={`portfolio-item portfolio-item--${index}`}

              >

                <Link to="/portfolio" className="portfolio-card hoverable">

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



      <section className="section home-testimonials testimonials-gradient-bg">

        <div className="container">

          <div className="section-label">

            <span className="overline">Client Stories</span>

          </div>

          <h2 className="heading-1 home-testimonials__heading">What Clients Say</h2>

        </div>



        <motion.div

          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true, margin: '-80px' }}

          transition={{ duration: 0.8 }}

          style={{ width: '100%', overflow: 'hidden', marginTop: '3.5rem' }}

        >

          <TestimonialsMarquee />

        </motion.div>



        <div className="container">

          <motion.div

            initial={{ opacity: 0 }}

            whileInView={{ opacity: 1 }}

            viewport={{ once: true }}

            className="home-testimonials__cta"

            style={{ marginTop: '3.5rem' }}

          >

            <Link to="/testimonials" className="btn btn-outline hoverable" id="testimonials-view-all">

              Read All Reviews

            </Link>

          </motion.div>

        </div>

      </section>



    </main>
  )
}

