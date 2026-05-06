import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import './Services.css'

const SERVICES = [
  {
    id: 'residential',
    icon: '🏠',
    title: 'Residential Design',
    tagline: 'Your home, reimagined.',
    desc: 'From apartments to villas, we craft living spaces that balance beauty and function. Our residential design service covers everything from space planning and concept development to material selection and final styling.',
    features: [
      'Full home design & planning',
      'Bedroom & living room concepts',
      'Kitchen & bathroom design',
      'Lighting & color consultation',
      'Furniture selection & sourcing',
      '3D visualization',
    ],
    accent: '#1a1208',
  },
  {
    id: 'commercial',
    icon: '🏢',
    title: 'Commercial Design',
    tagline: 'Spaces that work as hard as you do.',
    desc: 'Brand-aligned commercial spaces that drive productivity, impress clients, and tell your story. We design offices, showrooms, retail stores, restaurants, hotels, and more.',
    features: [
      'Office & workspace design',
      'Retail & showroom interiors',
      'Restaurant & café design',
      'Hotel & hospitality spaces',
      'Brand identity integration',
      'Ergonomic planning',
    ],
    accent: '#080f1a',
  },
  {
    id: 'renovation',
    icon: '🔨',
    title: 'Renovation & Remodeling',
    tagline: 'Old space, new story.',
    desc: 'Transform your existing space without starting from scratch. We handle full structural renovations, aesthetic remodels, and everything in between — with minimal disruption to your daily life.',
    features: [
      'Full & partial renovations',
      'False ceiling & flooring',
      'Electrical & plumbing upgrades',
      'Wall treatments & painting',
      'Before & after documentation',
      'Project timeline management',
    ],
    accent: '#0a120a',
  },
  {
    id: 'styling',
    icon: '✨',
    title: 'Interior Styling',
    tagline: 'The art of perfect finishing.',
    desc: 'Already have a space but want the wow factor? Our interior styling service focuses on the finishing touches that make a house a home — curated accessories, art, textiles, and more.',
    features: [
      'Furniture & decor curation',
      'Art & accessory selection',
      'Textile & soft furnishings',
      'Plant & greenery styling',
      'Photography preparation',
      'Seasonal refresh packages',
    ],
    accent: '#12080a',
  },
  {
    id: 'modular',
    icon: '🍳',
    title: 'Modular Kitchens',
    tagline: 'Where cooking meets design.',
    desc: 'Bespoke modular kitchen solutions that combine smart storage, ergonomic workflow, and stunning aesthetics. From contemporary to traditional, we design kitchens you\'ll love cooking in.',
    features: [
      'L-shape & U-shape kitchens',
      'Island kitchen designs',
      'Smart storage solutions',
      'Countertop & backsplash design',
      'Appliance integration',
      'Custom cabinetry',
    ],
    accent: '#0d0a15',
  },
  {
    id: 'consultation',
    icon: '💬',
    title: 'Design Consultation',
    tagline: 'Expert advice, your way.',
    desc: 'Not ready for a full project? Our design consultation service gives you access to expert advice on color, layout, furniture, and more. Available online and in-person.',
    features: [
      '1-hour design sessions',
      'Color scheme consultation',
      'Furniture layout advice',
      'Budget planning guidance',
      'Contractor recommendations',
      'Virtual walkthroughs',
    ],
    accent: '#0a0d12',
  },
]

const PROCESS = [
  { step: '01', title: 'Discovery Call', desc: 'We understand your vision, needs, and budget through a detailed consultation.' },
  { step: '02', title: 'Concept Design', desc: 'Our designers create initial concepts with mood boards, layouts, and material palettes.' },
  { step: '03', title: '3D Visualization', desc: 'Photorealistic renders help you visualize the final space before execution begins.' },
  { step: '04', title: 'Execution', desc: 'Our skilled team brings the design to life with precision, on time and on budget.' },
  { step: '05', title: 'Styling & Handover', desc: 'We add the final touches and hand over a move-in ready, beautifully styled space.' },
]

export default function Services() {
  const [active, setActive] = useState('residential')
  const activeService = SERVICES.find(s => s.id === active)

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <AnimatedSection>
            <p className="overline">What We Offer</p>
            <h1 className="heading-1 page-hero-heading">
              End-to-End Interior<br />
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Design Services</em>
            </h1>
            <p className="lead page-hero-lead">
              From concept to completion, we handle every aspect of your interior design project.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid Overview */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div className="section-label"><span className="overline">Services Overview</span></div>
            <h2 className="heading-1" style={{ marginBottom: '3rem' }}>Our Expertise</h2>
          </AnimatedSection>
          <div className="services-overview">
            {/* Tabs */}
            <div className="services-tabs">
              {SERVICES.map(s => (
                <button
                  key={s.id}
                  id={`service-tab-${s.id}`}
                  className={`services-tab${active === s.id ? ' active' : ''}`}
                  onClick={() => setActive(s.id)}
                >
                  <span className="services-tab__icon">{s.icon}</span>
                  <span>{s.title}</span>
                </button>
              ))}
            </div>

            {/* Detail Panel */}
            {activeService && (
              <div className="services-detail">
                <div className="services-detail__header">
                  <span className="services-tab__icon services-detail__icon">{activeService.icon}</span>
                  <div>
                    <span className="overline">{activeService.tagline}</span>
                    <h2 className="heading-2" style={{ marginTop: '0.5rem' }}>{activeService.title}</h2>
                  </div>
                </div>
                <p className="lead services-detail__desc">{activeService.desc}</p>
                <ul className="services-detail__features">
                  {activeService.features.map(f => (
                    <li key={f}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary" id={`service-cta-${activeService.id}`}>
                  Enquire About {activeService.title}
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <AnimatedSection>
            <div className="section-label"><span className="overline">How We Work</span></div>
            <h2 className="heading-1" style={{ marginBottom: '3rem' }}>Our Design Process</h2>
          </AnimatedSection>
          <div className="services-process">
            {PROCESS.map((p, i) => (
              <AnimatedSection key={p.step} delay={(i % 3) + 1} className="process-step">
                <div className="process-step__num">{p.step}</div>
                <h3 className="process-step__title">{p.title}</h3>
                <p className="process-step__desc body-sm">{p.desc}</p>
                {i < PROCESS.length - 1 && <div className="process-step__arrow">→</div>}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section--sm">
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimatedSection>
            <h2 className="heading-1" style={{ marginBottom: '1rem' }}>Start Your Project Today</h2>
            <p className="lead" style={{ marginBottom: '2rem' }}>Free consultation. No commitment. Just great design advice.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary" id="services-contact-cta">Book Free Consultation</Link>
              <Link to="/portfolio" className="btn btn-outline" id="services-portfolio-link">See Our Portfolio</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
