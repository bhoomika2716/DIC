import React from 'react'
import { Link } from 'react-router-dom'
import { Target, Handshake, Clock, Leaf, Award, Lightbulb } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import './About.css'

const TEAM = [
  { name: 'Mohana Rao', role: 'Founder & Principal Designer', initial: 'M' },
  { name: 'Priya Krishnamurthy', role: 'Senior Interior Designer', initial: 'P' },
  { name: 'Sanjay Arvind', role: 'Project Manager', initial: 'S' },
  { name: 'Ananya Menon', role: 'Concept Designer', initial: 'A' },
]

const VALUES = [
  { icon: <Target size={28} strokeWidth={1.5} />, title: 'Purpose-Driven', desc: 'Every design decision is intentional, serving both aesthetics and function.' },
  { icon: <Handshake size={28} strokeWidth={1.5} />, title: 'Client-First', desc: 'Your vision drives our process. We listen, collaborate, and deliver.' },
  { icon: <Clock size={28} strokeWidth={1.5} />, title: 'Timely Delivery', desc: 'We respect your time. On-time delivery is non-negotiable for us.' },
  { icon: <Leaf size={28} strokeWidth={1.5} />, title: 'Sustainable Choices', desc: 'Eco-conscious materials and practices are at the heart of our work.' },
  { icon: <Award size={28} strokeWidth={1.5} />, title: 'Quality Craftsmanship', desc: 'Premium materials and skilled artisans ensure lasting excellence.' },
  { icon: <Lightbulb size={28} strokeWidth={1.5} />, title: 'Innovation', desc: 'We blend timeless design with contemporary trends and technology.' },
]

const MILESTONES = [
  { year: '2008', event: 'Founded as a boutique design studio in Chennai' },
  { year: '2012', event: 'Expanded to commercial & hospitality design' },
  { year: '2016', event: 'Joined Zenith77 Multi Business Pvt Ltd group' },
  { year: '2019', event: 'Crossed 300+ completed projects milestone' },
  { year: '2022', event: 'Launched modular kitchen & renovation vertical' },
  { year: '2024', event: 'Recognized as Top Interior Studio in Chennai' },
]

export default function About() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <AnimatedSection>
            <p className="overline">Our Story</p>
            <h1 className="heading-1 about-hero__heading">
              Designing Spaces.<br />
              <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>Building Relationships.</em>
            </h1>
            <p className="lead about-hero__lead">
              For over 15 years, De Interio Café has been transforming spaces across Chennai 
              with thoughtful design, premium craftsmanship, and an unwavering client-first approach.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container about-mv">
          <AnimatedSection className="about-mv__card about-mv__card--mission">
            <span className="overline">Our Mission</span>
            <h2 className="heading-2">To make exceptional design accessible to every home and business in Chennai.</h2>
            <p className="body-sm" style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginTop: '0.5rem' }}>
              We believe great design is not a luxury — it's a right. Our team works tirelessly to deliver 
              world-class interiors at every budget level, without compromising on quality or creativity.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={2} className="about-mv__card about-mv__card--vision">
            <span className="overline">Our Vision</span>
            <h2 className="heading-2">To become South India's most trusted interior design firm by 2030.</h2>
            <p className="body-sm" style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginTop: '0.5rem' }}>
              Expanding beyond Chennai to serve clients across Tamil Nadu and beyond, setting new benchmarks 
              in sustainable, innovative, and human-centered interior design.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="section section-brown-soft">
        <div className="container">
          <AnimatedSection>
            <div className="section-label"><span className="overline">What Drives Us</span></div>
            <h2 className="heading-1" style={{ marginBottom: '3rem' }}>Our Core Values</h2>
          </AnimatedSection>
          <div className="grid-3 about-values">
            {VALUES.map((v, i) => (
              <AnimatedSection key={v.title} delay={(i % 3) + 1}>
                <div className="card about-value-card">
                  <div className="about-value-card__icon">{v.icon}</div>
                  <h3 className="heading-3">{v.title}</h3>
                  <p className="body-sm" style={{ lineHeight: 1.65 }}>{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div className="section-label"><span className="overline">Our Journey</span></div>
            <h2 className="heading-1" style={{ marginBottom: '3rem' }}>Milestones</h2>
          </AnimatedSection>
          <div className="about-timeline">
            {MILESTONES.map((m, i) => (
              <AnimatedSection key={m.year} delay={(i % 2) + 1} className="about-timeline__item">
                <div className="about-timeline__year">{m.year}</div>
                <div className="about-timeline__dot" />
                <div className="about-timeline__event">{m.event}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <AnimatedSection>
            <div className="section-label"><span className="overline">The People</span></div>
            <h2 className="heading-1" style={{ marginBottom: '3rem' }}>Meet Our Team</h2>
          </AnimatedSection>
          <div className="grid-4 about-team">
            {TEAM.map((member, i) => (
              <AnimatedSection key={member.name} delay={i + 1}>
                <div className="card about-team-card">
                  <div className="about-team-card__avatar">{member.initial}</div>
                  <h3 className="about-team-card__name">{member.name}</h3>
                  <p className="body-sm about-team-card__role">{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section--sm section-brown">
        <div className="container" style={{ textAlign: 'center' }}>
          <AnimatedSection>
            <h2 className="heading-1" style={{ marginBottom: '1rem' }}>Ready to work with us?</h2>
            <p className="lead" style={{ marginBottom: '2rem' }}>Let's create something extraordinary together.</p>
            <Link to="/contact" className="btn btn-primary" id="about-contact-cta">Get in Touch</Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
