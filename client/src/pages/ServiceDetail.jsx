import React from 'react'
import { useParams, Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'

const SERVICES = {
  'full-home': {
    title: 'Full Home Interiors',
    emoji: '🏠',
    img: '/images/services/residential.png',
    tagline: 'Complete transformation, room by room.',
    desc: 'Our full home interior service is a comprehensive, end-to-end design experience covering every room in your home. From initial space planning and concept development to furniture procurement, execution, and final styling — we manage every detail so you can enjoy a seamless transformation.',
    includes: ['Space Planning & Layout', 'Concept & Mood Board', '3D Visualization', 'Material & Finish Selection', 'Modular Kitchen Design', 'Bedroom & Living Room Design', 'Bathroom Design', 'Execution & Site Management', 'Furniture & Decor Sourcing', 'Final Styling & Handover'],
    duration: '3–6 months',
    suitable: 'New homes, flats, villas',
    start: '₹8L onwards',
  },
  'specific-area': {
    title: 'Specific Area Interiors',
    emoji: '🔍',
    img: '/images/rooms/living-room.png',
    tagline: 'Perfect one room at a time.',
    desc: 'Not ready for a full home overhaul? Our specific area interior service lets you transform individual rooms or areas — a kitchen, a bedroom, a living room — with the same premium quality and attention to detail as our complete home packages.',
    includes: ['Single Room Design', 'Concept & 3D Render', 'Material Selection', 'Custom Furniture Design', 'Lighting Plan', 'Execution & Supervision', 'Styling & Accessorizing'],
    duration: '3–8 weeks per area',
    suitable: 'Any individual room',
    start: '₹1.5L per room',
  },
  'space-planning': {
    title: 'Space Planning',
    emoji: '📐',
    img: '/images/rooms/home-office.png',
    tagline: 'Maximize every square foot.',
    desc: 'Effective space planning is the foundation of great interior design. Our space planning service optimizes your floor layout for flow, function, and future flexibility — whether you\'re building new or reconfiguring an existing space.',
    includes: ['Existing Layout Analysis', 'Traffic Flow Optimization', 'Furniture Arrangement Plans', 'Multi-functional Space Design', 'Storage Strategy', 'Zoning & Room Separation', '2D & 3D Floor Plans'],
    duration: '1–2 weeks',
    suitable: 'All property types',
    start: '₹25,000 onwards',
  },
  'commercial': {
    title: 'Commercial Interior',
    emoji: '🏢',
    img: '/images/services/commercial.png',
    tagline: 'Workspaces that inspire.',
    desc: 'We design commercial interiors that align with your brand, boost employee productivity, and impress clients from the moment they walk in. From corporate offices and co-working spaces to retail stores, restaurants, and hospitality venues.',
    includes: ['Brand-aligned Design', 'Office & Workspace Planning', 'Retail Store Design', 'Restaurant & Café Design', 'Reception & Lobby Design', 'Lighting & AV Integration', 'Ergonomic Furniture Planning', 'Signage & Branding Integration', 'Project Management', 'Handover & Documentation'],
    duration: '6–16 weeks',
    suitable: 'Offices, retail, restaurants, hotels',
    start: '₹15L onwards',
  },
  'renovation': {
    title: 'Renovation Interior',
    emoji: '🔨',
    img: '/images/services/renovation.png',
    tagline: 'Old space, brand new story.',
    desc: 'Breathe new life into your existing property. Our renovation service handles everything from minor cosmetic updates to complete structural transformations — all with minimal disruption and on-time delivery.',
    includes: ['Renovation Scope Assessment', 'Structural Changes Planning', 'False Ceiling & Flooring', 'Wall Treatment & Paint', 'Electrical & Plumbing Upgrades', 'Kitchen & Bathroom Renovation', 'New Furniture & Fixtures', 'Before & After Documentation', 'Waste Disposal Management', 'Quality Inspection & Handover'],
    duration: '4–12 weeks',
    suitable: 'Apartments, villas, commercial spaces',
    start: '₹3L onwards',
  },
}

export default function ServiceDetail() {
  const { serviceId } = useParams()
  const svc = SERVICES[serviceId]

  if (!svc) return (
    <main style={{ textAlign: 'center', padding: '10rem 2rem' }}>
      <h1 className="heading-1">Service Not Found</h1>
      <Link to="/services" className="btn btn-primary" style={{ marginTop: '2rem' }}>Back to Services</Link>
    </main>
  )

  return (
    <main>
      {/* Image hero */}
      <section className="room-hero">
        <img src={svc.img} alt={svc.title} className="room-hero__img" />
        <div className="room-hero__overlay" />
        <div className="container room-hero__content">
          <AnimatedSection>
            <Link to="/services" className="room-hero__back">← All Services</Link>
            <div className="room-hero__emoji">{svc.emoji}</div>
            <p className="overline" style={{ marginBottom: '0.75rem' }}>{svc.tagline}</p>
            <h1 className="display room-hero__title">{svc.title}</h1>
            <p className="lead room-hero__desc">{svc.desc}</p>
            <div className="room-hero__ctas">
              <Link to="/contact" className="btn btn-primary" id={`svc-cta-${serviceId}`}>Get Free Quote</Link>
              <Link to="/portfolio" className="btn btn-outline">View Projects</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Details */}
      <section className="section">
        <div className="container svc-detail-grid">
          <AnimatedSection className="svc-includes">
            <div className="section-label"><span className="overline">What's Included</span></div>
            <h2 className="heading-2" style={{ margin: '1rem 0 2rem' }}>Service Coverage</h2>
            <ul className="svc-includes__list">
              {svc.includes.map(item => (
                <li key={item}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {item}
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={2} className="svc-meta">
            <div className="svc-meta__card">
              <h3 className="svc-meta__title">Project Info</h3>
              <div className="svc-meta__row"><span>Duration</span><strong>{svc.duration}</strong></div>
              <div className="svc-meta__row"><span>Suitable For</span><strong>{svc.suitable}</strong></div>
              <div className="svc-meta__row"><span>Starting From</span><strong style={{ color: 'var(--accent)' }}>{svc.start}</strong></div>
            </div>
            <div className="svc-meta__cta-card">
              <h3>Start Your Project</h3>
              <p className="body-sm">Get a free consultation and custom quote for your project.</p>
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} id={`svc-detail-cta-${serviceId}`}>Book Free Consultation</Link>
              <a href="https://wa.me/919500078674" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', marginTop: '0.75rem' }}>WhatsApp Us</a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
