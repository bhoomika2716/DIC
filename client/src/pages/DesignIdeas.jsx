import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import './DesignIdeas.css'

const CATEGORIES = [
  { id: 'kitchen', label: 'Kitchen', emoji: '🍳', img: '/images/rooms/kitchen.png', desc: 'Modular kitchens, storage solutions, premium countertops', count: 24 },
  { id: 'master-bedroom', label: 'Master Bedroom', emoji: '🛏️', img: '/images/rooms/bedroom.png', desc: 'Luxury bedrooms, custom wardrobes, relaxing ambiance', count: 31 },
  { id: 'living-room', label: 'Living Room', emoji: '🛋️', img: '/images/rooms/living-room.png', desc: 'Statement seating, TV units, elegant decor', count: 28 },
  { id: 'bathroom', label: 'Bathroom', emoji: '🚿', img: '/images/rooms/bathroom.png', desc: 'Spa-style bathrooms, premium fixtures, marble finishes', count: 18 },
  { id: 'kids-bedroom', label: "Kids' Bedroom", emoji: '🎨', img: '/images/rooms/kids-bedroom.png', desc: 'Fun, functional spaces that grow with your child', count: 22 },
  { id: 'guest-bedroom', label: 'Guest Bedroom', emoji: '🏨', img: '/images/rooms/bedroom.png', desc: 'Hotel-quality guest rooms for unforgettable stays', count: 15 },
  { id: 'pooja-area', label: 'Pooja Area', emoji: '🪔', img: '/images/rooms/pooja.png', desc: 'Sacred spaces with traditional craftsmanship', count: 19 },
  { id: 'balcony', label: 'Balcony', emoji: '🌿', img: '/images/rooms/balcony.png', desc: 'Transform your balcony into a relaxing retreat', count: 16 },
  { id: 'wardrobes', label: 'Wardrobes', emoji: '👗', img: '/images/rooms/wardrobe.png', desc: 'Walk-in closets, sliding wardrobes, smart storage', count: 20 },
  { id: 'tv-unit', label: 'TV Unit Designing', emoji: '📺', img: '/images/rooms/tv-unit.png', desc: 'Stylish media walls, floating units, LED panels', count: 17 },
  { id: 'dining-area', label: 'Dining Area', emoji: '🍽️', img: '/images/rooms/dining.png', desc: 'Elegant dining setups for memorable meals', count: 14 },
  { id: 'foyer-area', label: 'Foyer Area', emoji: '🚪', img: '/images/rooms/foyer.png', desc: 'Grand entrances that make a lasting first impression', count: 12 },
  { id: 'home-office', label: 'Home Office Setup', emoji: '💼', img: '/images/rooms/home-office.png', desc: 'Productive, ergonomic workspaces at home', count: 21 },
  { id: 'space-saving', label: 'Space Saving Designs', emoji: '📐', img: '/images/rooms/living-room.png', desc: 'Smart multi-functional furniture for small spaces', count: 25 },
  { id: 'crockery-unit', label: 'Crockery Unit Designs', emoji: '🫙', img: '/images/rooms/dining.png', desc: 'Display units that showcase your collection beautifully', count: 11 },
  { id: 'false-ceiling', label: 'False Ceiling Designs', emoji: '✨', img: '/images/rooms/false-ceiling.png', desc: 'Cove lighting, geometric patterns, LED strips', count: 23 },
  { id: 'wallpaper', label: 'Wallpaper Designs', emoji: '🎨', img: '/images/rooms/bedroom.png', desc: 'Textured, printed, and feature wall ideas', count: 30 },
  { id: 'wall-decor', label: 'Wall Decor Designs', emoji: '🖼️', img: '/images/rooms/living-room.png', desc: 'Art, panels, murals, and decorative wall treatments', count: 27 },
  { id: 'lightings', label: 'Lightings', emoji: '💡', img: '/images/rooms/false-ceiling.png', desc: 'Ambient, task, accent — the perfect lighting recipe', count: 19 },
]

const FILTER_TAGS = ['All', 'Bedroom & Living', 'Kitchen & Dining', 'Utility', 'Décor & Finish']
const FILTER_MAP = {
  'Bedroom & Living': ['master-bedroom', 'guest-bedroom', 'kids-bedroom', 'living-room', 'balcony'],
  'Kitchen & Dining': ['kitchen', 'dining-area', 'crockery-unit'],
  'Utility': ['wardrobes', 'home-office', 'space-saving', 'foyer-area', 'pooja-area'],
  'Décor & Finish': ['tv-unit', 'false-ceiling', 'wallpaper', 'wall-decor', 'lightings', 'bathroom'],
}

export default function DesignIdeas() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? CATEGORIES
    : CATEGORIES.filter(c => FILTER_MAP[activeFilter]?.includes(c.id))

  return (
    <main>
      {/* Hero */}
      <section className="page-hero di-hero">
        <div className="container">
          <AnimatedSection>
            <p className="overline">Explore Inspirations</p>
            <h1 className="heading-1 page-hero-heading">
              Design Ideas &<br />
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Room Inspirations</em>
            </h1>
            <p className="lead page-hero-lead">
              Browse hundreds of curated interior design ideas across every room. From kitchens to kids' bedrooms — find your perfect inspiration.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters */}
      <div className="portfolio-filter-bar">
        <div className="container">
          <AnimatedSection className="portfolio-filters">
            {FILTER_TAGS.map(f => (
              <button
                key={f}
                id={`di-filter-${f.toLowerCase().replace(/\s+/g, '-')}`}
                className={`portfolio-filter-btn${activeFilter === f ? ' active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
            <span className="portfolio-count">{filtered.length} Categories</span>
          </AnimatedSection>
        </div>
      </div>

      {/* Category Grid */}
      <section className="section">
        <div className="container">
          <div className="di-grid">
            {filtered.map((cat, i) => (
              <AnimatedSection key={cat.id} delay={(i % 4) + 1}>
                <Link
                  to={`/design-ideas/${cat.id}`}
                  className="di-card"
                  id={`di-cat-${cat.id}`}
                >
                  <div className="di-card__img-wrap">
                    <img
                      src={cat.img}
                      alt={cat.label}
                      className="di-card__img"
                      loading="lazy"
                      onError={e => { e.target.style.display = 'none' }}
                    />
                    <div className="di-card__overlay" />
                    <span className="badge di-card__count">{cat.count}+ Ideas</span>
                  </div>
                  <div className="di-card__body">
                    <h3 className="di-card__title">{cat.label}</h3>
                    <p className="di-card__desc body-sm">{cat.desc}</p>
                    <span className="di-card__arrow">
                      Explore Ideas
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section--sm" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimatedSection>
            <h2 className="heading-1" style={{ marginBottom: '1rem' }}>Love What You See?</h2>
            <p className="lead" style={{ marginBottom: '2rem' }}>Our designers can create any of these looks in your own home.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary" id="di-consult-cta">Book Free Consultation</Link>
              <a href="/ecatalog.pdf" download className="btn btn-outline" id="di-ecatalog">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 15l-4-4h3V4h2v7h3l-4 4zM5 18h14v2H5v-2z" fill="currentColor"/></svg>
                Download E-Catalog
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
