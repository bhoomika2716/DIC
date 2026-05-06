import React, { useState } from 'react'
import AnimatedSection from '../components/AnimatedSection'
import './Portfolio.css'

const CATEGORIES = ['All', 'Residential', 'Commercial', 'Renovation', 'Hospitality']

const PROJECTS = [
  { id: 1, title: 'Modern Villa, Boat Club Road', category: 'Residential', area: '4,200 sq ft', year: '2024', tags: ['Villa', 'Contemporary', 'Luxury'], color: '#1a1208', size: 'large' },
  { id: 2, title: 'Corporate HQ, Anna Salai', category: 'Commercial', area: '8,000 sq ft', year: '2024', tags: ['Office', 'Open Plan', 'Tech'], color: '#080f1a', size: 'small' },
  { id: 3, title: 'Boutique Café, Nungambakkam', category: 'Hospitality', area: '1,200 sq ft', year: '2023', tags: ['Café', 'Industrial', 'Warm'], color: '#0a120a', size: 'small' },
  { id: 4, title: 'Penthouse Renovation, ECR', category: 'Renovation', area: '3,800 sq ft', year: '2023', tags: ['Penthouse', 'Sea View', 'Minimal'], color: '#12080a', size: 'large' },
  { id: 5, title: 'Luxury 3BHK, Velachery', category: 'Residential', area: '1,800 sq ft', year: '2023', tags: ['Apartment', 'Modern', 'Family'], color: '#0d0a15', size: 'small' },
  { id: 6, title: 'Restaurant, T Nagar', category: 'Hospitality', area: '2,500 sq ft', year: '2022', tags: ['Restaurant', 'Fine Dining', 'Traditional'], color: '#120e08', size: 'small' },
  { id: 7, title: 'Tech Office, Sholinganallur', category: 'Commercial', area: '5,500 sq ft', year: '2022', tags: ['Startup', 'Collaborative', 'Vibrant'], color: '#081218', size: 'large' },
  { id: 8, title: 'Heritage Home, Mylapore', category: 'Renovation', area: '2,800 sq ft', year: '2022', tags: ['Heritage', 'Classic', 'Restoration'], color: '#181208', size: 'small' },
  { id: 9, title: 'Modular Kitchen, Adyar', category: 'Residential', area: '280 sq ft', year: '2021', tags: ['Kitchen', 'Modular', 'Functional'], color: '#0a0f18', size: 'small' },
]

export default function Portfolio() {
  const [filter, setFilter] = useState('All')
  const [hovered, setHovered] = useState(null)

  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter)

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <AnimatedSection>
            <p className="overline">Our Work</p>
            <h1 className="heading-1 page-hero-heading">
              Award-Winning<br />
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Design Portfolio</em>
            </h1>
            <p className="lead page-hero-lead">
              500+ completed projects across residential, commercial, and hospitality sectors. Each one a story told through space.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="portfolio-filter-bar">
        <div className="container">
          <AnimatedSection className="portfolio-filters">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase()}`}
                className={`portfolio-filter-btn${filter === cat ? ' active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
            <span className="portfolio-count">{filtered.length} Projects</span>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section">
        <div className="container">
          <div className="portfolio-grid">
            {filtered.map((project, i) => (
              <div
                key={project.id}
                className={`portfolio-item${project.size === 'large' ? ' portfolio-item--large' : ''}`}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="portfolio-card-full"
                  style={{ background: project.color }}
                >
                  {/* Pattern overlay */}
                  <div className="portfolio-card-full__pattern" />
                  {/* Glow */}
                  <div className="portfolio-card-full__glow" />
                  {/* Content */}
                  <div className="portfolio-card-full__content">
                    <div className="portfolio-card-full__tags">
                      {project.tags.map(t => (
                        <span key={t} className="badge">{t}</span>
                      ))}
                    </div>
                    <div className="portfolio-card-full__info">
                      <h3 className="portfolio-card-full__title">{project.title}</h3>
                      <div className="portfolio-card-full__meta">
                        <span>{project.category}</span>
                        <span>·</span>
                        <span>{project.area}</span>
                        <span>·</span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className={`portfolio-card-full__hover${hovered === project.id ? ' show' : ''}`}>
                    <span className="portfolio-card-full__view">View Project</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section--sm" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimatedSection>
            <h2 className="heading-1" style={{ marginBottom: '1rem' }}>Like What You See?</h2>
            <p className="lead" style={{ marginBottom: '2rem' }}>
              Let's create your dream space together.
            </p>
            <a href="/contact" className="btn btn-primary" id="portfolio-cta">Start Your Project</a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
