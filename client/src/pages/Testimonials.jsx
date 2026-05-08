import React, { useState } from 'react'
import AnimatedSection from '../components/AnimatedSection'
import './Testimonials.css'

const ALL_TESTIMONIALS = [
  {
    name: 'Priya Ramachandran',
    role: 'Homeowner, OMR Chennai',
    type: 'Residential',
    rating: 5,
    quote: 'De Interio Cafe turned our 2BHK into a stunning modern home. The attention to detail and client-first approach is unmatched. Every corner was designed thoughtfully and the execution was flawless.',
    project: 'Modern 2BHK Renovation',
  },
  {
    name: 'Karthik Sundar',
    role: 'CEO, TechStart Solutions',
    type: 'Commercial',
    rating: 5,
    quote: 'Our new office is a productivity powerhouse. The team delivered on time, within budget, and beyond expectations. The collaborative zones they designed have completely transformed how our team works.',
    project: '5,000 sq ft Office, Sholinganallur',
  },
  {
    name: 'Meera Iyer',
    role: 'Restaurant Owner, Adyar',
    type: 'Hospitality',
    rating: 5,
    quote: 'The restaurant ambience they created has become our biggest USP. Customers come for the food, but stay for the design. Our Instagram engagement has tripled since the renovation!',
    project: 'Fine Dining Restaurant',
  },
  {
    name: 'Ravi Kumar',
    role: 'Homeowner, Velachery',
    type: 'Residential',
    rating: 5,
    quote: 'We had a tight budget but the team never made us feel like we were getting anything less. The modular kitchen they designed is efficient, beautiful and has held up perfectly for 2 years.',
    project: 'Modular Kitchen & Living Room',
  },
  {
    name: 'Anitha Sridharan',
    role: 'Principal, Lotus Schools',
    type: 'Commercial',
    rating: 5,
    quote: 'They redesigned our school reception and administrative area beautifully. Very professional, timely, and the quality of materials used is excellent. Highly recommended for any commercial project.',
    project: 'School Administrative Complex',
  },
  {
    name: 'Suresh Murugesan',
    role: 'Villa Owner, ECR',
    type: 'Residential',
    rating: 5,
    quote: 'The penthouse renovation exceeded every expectation. They worked around our schedule, maintained cleanliness throughout, and the final result is nothing short of a luxury hotel suite.',
    project: 'Penthouse Renovation, ECR',
  },
  {
    name: 'Deepa Venkatesh',
    role: 'Homeowner, Mylapore',
    type: 'Renovation',
    rating: 5,
    quote: "Renovating a heritage home is no small task, but the De Interio team balanced traditional aesthetics with modern conveniences brilliantly. They truly understand what it means to preserve a home's soul.",
    project: 'Heritage Home Restoration',
  },
  {
    name: 'Ajay Krishnan',
    role: 'Hotel Manager, Egmore',
    type: 'Hospitality',
    rating: 5,
    quote: 'The boutique hotel project was executed to international standards. The guest feedback has been overwhelmingly positive and bookings have increased significantly since the redesign.',
    project: 'Boutique Hotel, Egmore',
  },
  {
    name: 'Sowmya Balakrishnan',
    role: 'Homeowner, Anna Nagar',
    type: 'Residential',
    rating: 5,
    quote: 'What sets De Interio apart is their communication. We were updated at every stage, every decision was explained, and they were genuinely interested in creating something we loved, not just something standard.',
    project: '3BHK Complete Interior',
  },
]

const FILTERS = ['All', 'Residential', 'Commercial', 'Hospitality', 'Renovation']
const FEATURED_NAME = 'Suresh Murugesan'

export default function Testimonials() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? ALL_TESTIMONIALS : ALL_TESTIMONIALS.filter((testimonial) => testimonial.type === filter)
  const pinnedFeatured = ALL_TESTIMONIALS.find((testimonial) => testimonial.name === FEATURED_NAME)
  const featuredReview = (filter === 'All' || pinnedFeatured?.type === filter) ? pinnedFeatured : filtered[0]
  const gridReviews = filtered.filter((testimonial) => testimonial.name !== featuredReview?.name)

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <AnimatedSection>
            <p className="overline">Client Stories</p>
            <h1 className="heading-1 page-hero-heading">
              What Our Clients<br />
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Say About Us</em>
            </h1>
            <p className="lead page-hero-lead">
              Real words from real clients. Discover why families and businesses across Chennai trust De Interio Cafe with their most important spaces.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={2} className="testimonials-rating">
            <div className="testimonials-rating__score">4.9</div>
            <div className="testimonials-rating__details">
              <div className="stars">
                {Array(5).fill(0).map((_, index) => <span key={index}>★</span>)}
              </div>
              <p className="body-sm">Based on 200+ verified client reviews</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="portfolio-filter-bar">
        <div className="container">
          <AnimatedSection className="portfolio-filters">
            {FILTERS.map((filterOption) => (
              <button
                key={filterOption}
                id={`testimonial-filter-${filterOption.toLowerCase()}`}
                className={`portfolio-filter-btn${filter === filterOption ? ' active' : ''}`}
                onClick={() => setFilter(filterOption)}
              >
                {filterOption}
              </button>
            ))}
            <span className="portfolio-count">{filtered.length} Reviews</span>
          </AnimatedSection>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {featuredReview && (
            <AnimatedSection className="testimonial-spotlight">
              <div className="testimonial-spotlight__media">
                <span className="testimonial-spotlight__label">Highlighted Review</span>
                <div className="testimonial-spotlight__score">
                  <span className="testimonial-spotlight__score-num">{featuredReview.rating}.0</span>
                  <div className="stars">
                    {Array(featuredReview.rating).fill(0).map((_, index) => <span key={index}>★</span>)}
                  </div>
                </div>
              </div>
              <div className="testimonial-spotlight__content">
                <div className="testimonial-full-card__top">
                  <span className="badge">{featuredReview.type}</span>
                  <div className="testimonial-spotlight__project">{featuredReview.project}</div>
                </div>
                <blockquote className="testimonial-spotlight__quote">
                  "{featuredReview.quote}"
                </blockquote>
                <div className="testimonial-spotlight__author">
                  <div className="testimonial-card__avatar">{featuredReview.name.charAt(0)}</div>
                  <div>
                    <strong>{featuredReview.name}</strong>
                    <span className="body-sm">{featuredReview.role}</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}

          <div className="testimonials-grid">
            {gridReviews.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={(index % 3) + 1} className="testimonial-full-card">
                <div className="testimonial-full-card__inner">
                  <div className="testimonial-full-card__top">
                    <div className="stars">
                      {Array(testimonial.rating).fill(0).map((_, starIndex) => <span key={starIndex}>★</span>)}
                    </div>
                    <span className="badge">{testimonial.type}</span>
                  </div>
                  <blockquote className="testimonial-full-card__quote">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="testimonial-full-card__project">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M3 9.5L12 3L21 9.5V21H15V15H9V21H3V9.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                    {testimonial.project}
                  </div>
                  <div className="testimonial-full-card__author">
                    <div className="testimonial-card__avatar">{testimonial.name.charAt(0)}</div>
                    <div>
                      <strong>{testimonial.name}</strong>
                      <span className="body-sm">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section--sm" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <AnimatedSection>
            <h2 className="heading-2" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>Rated Across Platforms</h2>
          </AnimatedSection>
          <div className="platform-ratings">
            {[
              { name: 'Google', rating: '4.9', reviews: '180+' },
              { name: 'Justdial', rating: '4.8', reviews: '90+' },
              { name: 'Houzz', rating: '5.0', reviews: '40+' },
              { name: 'Sulekha', rating: '4.7', reviews: '60+' },
            ].map((platform) => (
              <AnimatedSection key={platform.name} className="platform-rating-card">
                <div className="platform-rating-card__name">{platform.name}</div>
                <div className="platform-rating-card__score">{platform.rating}</div>
                <div className="stars" style={{ justifyContent: 'center' }}>
                  {Array(5).fill(0).map((_, index) => <span key={index}>★</span>)}
                </div>
                <div className="body-sm">{platform.reviews} reviews</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
