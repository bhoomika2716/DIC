import React from 'react'
import { useParams, Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import './RoomPage.css'

const ROOM_DATA = {
  kitchen: { label: 'Kitchen', emoji: '🍳', img: '/images/rooms/kitchen.png', desc: 'Our modular kitchen designs combine premium materials with intelligent storage to create a space where cooking becomes a joy. From L-shape to island kitchens, every inch is designed for function and beauty.', ideas: ['Modular Kitchen Layouts', 'Open Shelving Systems', 'Granite & Quartz Countertops', 'Smart Storage Solutions', 'Pendant Light Styling', 'Backsplash Designs', 'Island Kitchen Concepts', 'Pantry Organization'] },
  'master-bedroom': { label: 'Master Bedroom', emoji: '🛏️', img: '/images/rooms/bedroom.png', desc: 'Your master bedroom should be a true sanctuary. We design restful, beautiful spaces with luxurious textures, bespoke wardrobes, and perfect lighting that promotes sleep and relaxation.', ideas: ['King Bed Headboard Designs', 'Walk-in Wardrobe Concepts', 'Accent Wall Ideas', 'Cove Lighting', 'Bedside Panel Designs', 'Window Treatment Ideas', 'Cozy Reading Nooks', 'Master Bath Integration'] },
  'living-room': { label: 'Living Room', emoji: '🛋️', img: '/images/rooms/living-room.png', desc: 'The living room is the heart of every home. We create spaces that are warm, welcoming and visually stunning — perfect for entertaining guests and relaxing with family.', ideas: ['Sofa & Seating Arrangements', 'TV Unit Wall Designs', 'False Ceiling Concepts', 'Statement Rugs & Flooring', 'Bookshelf Styling', 'Curtain & Blind Ideas', 'Center Table Concepts', 'Accent Corner Designs'] },
  bathroom: { label: 'Bathroom', emoji: '🚿', img: '/images/rooms/bathroom.png', desc: 'Transform your bathroom into a spa-like retreat. Our designs focus on premium materials, smart layouts, and luxurious fixtures that make every morning feel indulgent.', ideas: ['Spa-Style Bathrooms', 'Freestanding Bathtub Ideas', 'Rainfall Shower Setups', 'Vanity Mirror Designs', 'Marble & Stone Finishes', 'Gold & Matte Black Fixtures', 'Backlit Mirror Concepts', 'Storage Solutions'] },
  'kids-bedroom': { label: "Kids' Bedroom", emoji: '🎨', img: '/images/rooms/kids-bedroom.png', desc: "Design a space that sparks imagination and grows with your child. From playful nurseries to functional teen rooms, we create safe, fun, and organized bedrooms your kids will love.", ideas: ['Bunk Bed Designs', 'Study Table Setups', 'Colorful Storage', 'Themed Room Concepts', 'Wall Mural Ideas', 'Play Area Zones', 'Book Nook Designs', 'Modular Wardrobe for Kids'] },
  'guest-bedroom': { label: 'Guest Bedroom', emoji: '🏨', img: '/images/rooms/bedroom.png', desc: 'Give your guests the luxury hotel experience. Our guest bedroom designs focus on comfort, warmth and thoughtful details that make visitors feel truly at home.', ideas: ['Hotel-Style Bed Setups', 'Multi-functional Furniture', 'Compact Wardrobe Ideas', 'Ambient Lighting', 'Neutral Palette Concepts', 'Storage Ottomans', 'Bedside Styling', 'Window Seating Ideas'] },
  'pooja-area': { label: 'Pooja Area', emoji: '🪔', img: '/images/rooms/pooja.png', desc: 'Create a sacred, serene space for your daily rituals. Our pooja room designs blend traditional craftsmanship with contemporary aesthetics — from dedicated rooms to integrated wall mandirs.', ideas: ['Traditional Wooden Mandirs', 'Marble Pooja Units', 'Integrated Wall Mandirs', 'Marble Flooring Patterns', 'Brass & Copper Accents', 'Backlit Jali Designs', 'Storage for Puja Items', 'Pooja Room Lighting'] },
  balcony: { label: 'Balcony', emoji: '🌿', img: '/images/rooms/balcony.png', desc: 'Your balcony is a private outdoor escape. We transform small outdoor spaces into beautiful retreats with clever furniture, vertical gardens, and ambient lighting.', ideas: ['Cozy Seating Setups', 'Vertical Garden Walls', 'String Light Styling', 'Wooden Deck Flooring', 'Folding Furniture Ideas', 'Balcony Bar Concepts', 'Privacy Screen Designs', 'Mini Garden Layouts'] },
  wardrobes: { label: 'Wardrobes', emoji: '👗', img: '/images/rooms/wardrobe.png', desc: 'Smart, beautiful wardrobe solutions that maximize space and keep your life organized. From sliding door wardrobes to full walk-in closets, we design for your lifestyle.', ideas: ['Sliding Door Wardrobes', 'Walk-in Closet Concepts', 'Mirror Door Designs', 'Open Shelf Wardrobes', 'Built-in Lighting', 'Shoe Rack Integration', 'Hanging & Folding Zones', 'Corner Wardrobe Ideas'] },
  'tv-unit': { label: 'TV Unit Designing', emoji: '📺', img: '/images/rooms/tv-unit.png', desc: 'The TV unit is a focal point of your living room. We design stunning media walls, floating units, and entertainment centers that balance style with smart storage.', ideas: ['Floating TV Unit Designs', 'Full Wall Media Panels', 'LED Backlight Concepts', 'Wooden Panel Textures', 'Display Shelf Ideas', 'Cable Management', 'Stone Cladding Walls', 'Asymmetric Unit Designs'] },
  'dining-area': { label: 'Dining Area', emoji: '🍽️', img: '/images/rooms/dining.png', desc: 'Create memorable dining experiences at home. Our dining room designs range from intimate family setups to formal dining rooms worthy of every celebration.', ideas: ['6-seater Table Designs', 'Pendant Light Above Dining', 'Bench Seating Concepts', 'Crockery Unit Pairings', 'Accent Wall for Dining', 'Marble Top Tables', 'Round Table Layouts', 'Open Plan Dining Concepts'] },
  'foyer-area': { label: 'Foyer Area', emoji: '🚪', img: '/images/rooms/foyer.png', desc: 'Your entryway makes the first impression. We design foyers that are grand, functional, and set the tone for the rest of your home — from compact apartments to sprawling villas.', ideas: ['Console Table Styling', 'Statement Mirror Designs', 'Pendant Light Foyers', 'Shoe Cabinet Integration', 'Marble Flooring Patterns', 'Artwork & Gallery Walls', 'Compact Bench Ideas', 'Key & Storage Hooks'] },
  'home-office': { label: 'Home Office Setup', emoji: '💼', img: '/images/rooms/home-office.png', desc: 'Work smarter, not harder. Our home office designs create productive, ergonomic spaces that reduce fatigue and inspire focus — all without sacrificing style.', ideas: ['Built-in Bookshelf Desks', 'Ergonomic Chair Setups', 'Dual Monitor Arrangements', 'Cable Management', 'Acoustic Panel Designs', 'Green Wall Backgrounds', 'Multi-use Office Rooms', 'Standing Desk Concepts'] },
  'space-saving': { label: 'Space Saving Designs', emoji: '📐', img: '/images/rooms/living-room.png', desc: 'Small space? Big possibilities. Our space-saving design concepts use clever multi-functional furniture and smart layouts to make every square foot count.', ideas: ['Murphy Bed Concepts', 'Sofa-cum-Bed Designs', 'Under-Stair Storage', 'Loft Bed Setups', 'Folding Dining Tables', 'Wall-mounted Desks', 'Sliding Partition Ideas', 'Compact Kitchen Layouts'] },
  'crockery-unit': { label: 'Crockery Unit Designs', emoji: '🫙', img: '/images/rooms/dining.png', desc: 'Show off your finest crockery and dinnerware in beautifully designed display units that combine open shelving with concealed storage.', ideas: ['Glass Door Crockery Units', 'Open Shelf Display', 'Backlit Showcase Units', 'Integrated Dining Unit', 'Built-in Wine Rack', 'Floating Shelf Concepts', 'Traditional Crockery Cabinets', 'Modular Sideboard Designs'] },
  'false-ceiling': { label: 'False Ceiling Designs', emoji: '✨', img: '/images/rooms/false-ceiling.png', desc: 'False ceilings add depth, drama, and luxury to any room. From simple cove lighting to intricate geometric patterns, our ceiling designs transform rooms instantly.', ideas: ['Cove Lighting Ceilings', 'POP Geometric Patterns', 'Gypsum Board Designs', 'Wooden Plank Ceilings', 'LED Strip Lighting', 'Coffered Ceiling Concepts', 'Tray Ceiling Designs', 'Exposed Beam Looks'] },
  wallpaper: { label: 'Wallpaper Designs', emoji: '🎨', img: '/images/rooms/bedroom.png', desc: 'Wallpapers instantly transform a room. Explore our curated collection of textured, printed, and 3D wallpaper ideas for feature walls and full rooms.', ideas: ['Botanical Print Wallpapers', '3D Textured Wallpapers', 'Geometric Patterns', 'Marble Effect Wallpaper', 'Mural Wallpapers', 'Grasscloth Textures', 'Abstract Feature Walls', 'Traditional Indian Prints'] },
  'wall-decor': { label: 'Wall Decor Designs', emoji: '🖼️', img: '/images/rooms/living-room.png', desc: 'Walls are a canvas for self-expression. Our wall decor ideas range from gallery walls to sculptural installations that add personality and depth to every room.', ideas: ['Gallery Wall Arrangements', 'Wooden Panel Cladding', 'Stone Accent Walls', 'Macramé Wall Art', 'Decorative Mirror Clusters', 'Floating Shelf Displays', '3D Wall Panel Designs', 'Mural Painting Concepts'] },
  lightings: { label: 'Lightings', emoji: '💡', img: '/images/rooms/false-ceiling.png', desc: 'Lighting is the most transformative design element. Layer ambient, task, and accent lights to create mood, depth, and drama in every corner of your home.', ideas: ['Chandelier Selection Guide', 'Pendant Light Placement', 'Cove & Cove Lighting', 'Floor Lamp Styling', 'Recessed Lighting Grids', 'Smart Home Lighting', 'Outdoor & Balcony Lights', 'Vintage Edison Bulb Ideas'] },
}

export default function RoomPage() {
  const { roomId } = useParams()
  const room = ROOM_DATA[roomId]

  if (!room) {
    return (
      <main style={{ paddingTop: 'var(--nav-h)', textAlign: 'center', padding: '10rem 2rem' }}>
        <h1 className="heading-1">Page Not Found</h1>
        <Link to="/design-ideas" className="btn btn-primary" style={{ marginTop: '2rem' }}>Back to Design Ideas</Link>
      </main>
    )
  }

  return (
    <main>
      {/* Hero with real image */}
      <section className="room-hero">
        <img src={room.img} alt={room.label} className="room-hero__img" />
        <div className="room-hero__overlay" />
        <div className="container room-hero__content">
          <AnimatedSection>
            <Link to="/design-ideas" className="room-hero__back">
              ← Design Ideas
            </Link>
            <h1 className="display room-hero__title">{room.label} <br /><em>Design Ideas</em></h1>
            <p className="lead room-hero__desc">{room.desc}</p>
            <div className="room-hero__ctas">
              <Link to="/contact" className="btn btn-primary" id={`room-consult-${roomId}`}>Get This Look</Link>
              <Link to="/portfolio" className="btn btn-outline" id={`room-portfolio-${roomId}`}>View Portfolio</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Ideas Grid */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div className="section-label"><span className="overline">Explore {room.label} Ideas</span></div>
            <h2 className="heading-1" style={{ marginBottom: '3rem' }}>Popular Concepts</h2>
          </AnimatedSection>
          <div className="room-ideas-grid">
            {room.ideas.map((idea, i) => (
              <AnimatedSection key={idea} delay={(i % 4) + 1} className="room-idea-card">
                <div className="room-idea-card__inner">
                  <div className="room-idea-card__img-wrap">
                    <img src={room.img} alt={idea} loading="lazy" className="room-idea-card__img" />
                    <div className="room-idea-card__overlay" />
                    <span className="badge room-idea-card__num">0{i + 1}</span>
                  </div>
                  <div className="room-idea-card__body">
                    <h3 className="room-idea-card__title">{idea}</h3>
                    <Link to="/contact" className="room-idea-card__link" id={`idea-${roomId}-${i}`}>
                      Enquire
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta-band">
        <div className="container">
          <AnimatedSection className="home-cta-band__inner">
            <div>
              <h2 className="heading-1 home-cta-band__heading">Want This Design in Your Home?</h2>
              <p className="lead home-cta-band__lead">Our {room.label.toLowerCase()} specialists will turn your vision into reality.</p>
            </div>
            <div className="home-cta-band__actions">
              <Link to="/contact" className="btn btn-primary" id={`room-cta-${roomId}`}>Book Free Consultation</Link>
              <a href={`https://wa.me/919500078674?text=Hi! I'm interested in ${room.label} design ideas from De Interio Café.`} target="_blank" rel="noreferrer" className="btn btn-outline">WhatsApp Us</a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
