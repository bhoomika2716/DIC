import kitchenImage from '../assets/design-ideas/kitchen.png'
import masterBedroomImage from '../assets/design-ideas/master-bedroom.png'
import livingRoomImage from '../assets/design-ideas/living-room.png'
import bathroomImage from '../assets/design-ideas/bathroom.png'
import kidsBedroomImage from '../assets/design-ideas/kids-bedroom.png'
import guestBedroomImage from '../assets/design-ideas/guest-bedroom.png'
import poojaAreaImage from '../assets/design-ideas/pooja-area.png'
import balconyImage from '../assets/design-ideas/balcony.png'
import wardrobesImage from '../assets/design-ideas/wardrobes.png'
import tvUnitImage from '../assets/design-ideas/tv-unit.png'
import diningAreaImage from '../assets/design-ideas/dining-area.png'
import foyerAreaImage from '../assets/design-ideas/foyer-area.png'
import homeOfficeImage from '../assets/design-ideas/home-office.png'
import spaceSavingImage from '../assets/design-ideas/space-saving.png'
import crockeryUnitImage from '../assets/design-ideas/crockery-unit.png'
import falseCeilingImage from '../assets/design-ideas/false-ceiling.png'
import wallpaperImage from '../assets/design-ideas/wallpaper.png'
import wallDecorImage from '../assets/design-ideas/wall-decor.png'
import lightingsImage from '../assets/design-ideas/lightings.png'

export const DESIGN_IDEA_FILTER_TAGS = ['All', 'Bedroom & Living', 'Kitchen & Dining', 'Utility', 'Decor & Finish']

export const DESIGN_IDEA_FILTER_MAP = {
  'Bedroom & Living': ['master-bedroom', 'guest-bedroom', 'kids-bedroom', 'living-room', 'balcony'],
  'Kitchen & Dining': ['kitchen', 'dining-area', 'crockery-unit'],
  Utility: ['wardrobes', 'home-office', 'space-saving', 'foyer-area', 'pooja-area'],
  'Decor & Finish': ['tv-unit', 'false-ceiling', 'wallpaper', 'wall-decor', 'lightings', 'bathroom'],
}

export const ROOM_DATA = {
  kitchen: {
    label: 'Kitchen',
    img: kitchenImage,
    count: 24,
    cardDesc: 'Modular kitchens, storage solutions, premium countertops',
    desc: 'Our modular kitchen designs combine premium materials with intelligent storage to create a space where cooking becomes a joy. From L-shape to island kitchens, every inch is designed for function and beauty.',
    ideas: ['Modular Kitchen Layouts', 'Open Shelving Systems', 'Granite & Quartz Countertops', 'Smart Storage Solutions', 'Pendant Light Styling', 'Backsplash Designs', 'Island Kitchen Concepts', 'Pantry Organization'],
  },
  'master-bedroom': {
    label: 'Master Bedroom',
    img: masterBedroomImage,
    count: 31,
    cardDesc: 'Luxury bedrooms, custom wardrobes, relaxing ambiance',
    desc: 'Your master bedroom should be a true sanctuary. We design restful, beautiful spaces with luxurious textures, bespoke wardrobes, and perfect lighting that promotes sleep and relaxation.',
    ideas: ['King Bed Headboard Designs', 'Walk-in Wardrobe Concepts', 'Accent Wall Ideas', 'Cove Lighting', 'Bedside Panel Designs', 'Window Treatment Ideas', 'Cozy Reading Nooks', 'Master Bath Integration'],
  },
  'living-room': {
    label: 'Living Room',
    img: livingRoomImage,
    count: 28,
    cardDesc: 'Statement seating, TV units, elegant decor',
    desc: 'The living room is the heart of every home. We create spaces that are warm, welcoming and visually stunning, perfect for entertaining guests and relaxing with family.',
    ideas: ['Sofa & Seating Arrangements', 'TV Unit Wall Designs', 'False Ceiling Concepts', 'Statement Rugs & Flooring', 'Bookshelf Styling', 'Curtain & Blind Ideas', 'Center Table Concepts', 'Accent Corner Designs'],
  },
  bathroom: {
    label: 'Bathroom',
    img: bathroomImage,
    count: 18,
    cardDesc: 'Spa-style bathrooms, premium fixtures, marble finishes',
    desc: 'Transform your bathroom into a spa-like retreat. Our designs focus on premium materials, smart layouts, and luxurious fixtures that make every morning feel indulgent.',
    ideas: ['Spa-Style Bathrooms', 'Freestanding Bathtub Ideas', 'Rainfall Shower Setups', 'Vanity Mirror Designs', 'Marble & Stone Finishes', 'Gold & Matte Black Fixtures', 'Backlit Mirror Concepts', 'Storage Solutions'],
  },
  'kids-bedroom': {
    label: "Kids' Bedroom",
    img: kidsBedroomImage,
    count: 22,
    cardDesc: 'Fun, functional spaces that grow with your child',
    desc: "Design a space that sparks imagination and grows with your child. From playful nurseries to functional teen rooms, we create safe, fun, and organized bedrooms your kids will love.",
    ideas: ['Bunk Bed Designs', 'Study Table Setups', 'Colorful Storage', 'Themed Room Concepts', 'Wall Mural Ideas', 'Play Area Zones', 'Book Nook Designs', 'Modular Wardrobe for Kids'],
  },
  'guest-bedroom': {
    label: 'Guest Bedroom',
    img: guestBedroomImage,
    count: 15,
    cardDesc: 'Hotel-quality guest rooms for unforgettable stays',
    desc: 'Give your guests the luxury hotel experience. Our guest bedroom designs focus on comfort, warmth and thoughtful details that make visitors feel truly at home.',
    ideas: ['Hotel-Style Bed Setups', 'Multi-functional Furniture', 'Compact Wardrobe Ideas', 'Ambient Lighting', 'Neutral Palette Concepts', 'Storage Ottomans', 'Bedside Styling', 'Window Seating Ideas'],
  },
  'pooja-area': {
    label: 'Pooja Area',
    img: poojaAreaImage,
    count: 19,
    cardDesc: 'Sacred spaces with traditional craftsmanship',
    desc: 'Create a sacred, serene space for your daily rituals. Our pooja room designs blend traditional craftsmanship with contemporary aesthetics, from dedicated rooms to integrated wall mandirs.',
    ideas: ['Traditional Wooden Mandirs', 'Marble Pooja Units', 'Integrated Wall Mandirs', 'Marble Flooring Patterns', 'Brass & Copper Accents', 'Backlit Jali Designs', 'Storage for Puja Items', 'Pooja Room Lighting'],
  },
  balcony: {
    label: 'Balcony',
    img: balconyImage,
    count: 16,
    cardDesc: 'Transform your balcony into a relaxing retreat',
    desc: 'Your balcony is a private outdoor escape. We transform small outdoor spaces into beautiful retreats with clever furniture, vertical gardens, and ambient lighting.',
    ideas: ['Cozy Seating Setups', 'Vertical Garden Walls', 'String Light Styling', 'Wooden Deck Flooring', 'Folding Furniture Ideas', 'Balcony Bar Concepts', 'Privacy Screen Designs', 'Mini Garden Layouts'],
  },
  wardrobes: {
    label: 'Wardrobes',
    img: wardrobesImage,
    count: 20,
    cardDesc: 'Walk-in closets, sliding wardrobes, smart storage',
    desc: 'Smart, beautiful wardrobe solutions that maximize space and keep your life organized. From sliding door wardrobes to full walk-in closets, we design for your lifestyle.',
    ideas: ['Sliding Door Wardrobes', 'Walk-in Closet Concepts', 'Mirror Door Designs', 'Open Shelf Wardrobes', 'Built-in Lighting', 'Shoe Rack Integration', 'Hanging & Folding Zones', 'Corner Wardrobe Ideas'],
  },
  'tv-unit': {
    label: 'TV Unit Designing',
    img: tvUnitImage,
    count: 17,
    cardDesc: 'Stylish media walls, floating units, LED panels',
    desc: 'The TV unit is a focal point of your living room. We design stunning media walls, floating units, and entertainment centers that balance style with smart storage.',
    ideas: ['Floating TV Unit Designs', 'Full Wall Media Panels', 'LED Backlight Concepts', 'Wooden Panel Textures', 'Display Shelf Ideas', 'Cable Management', 'Stone Cladding Walls', 'Asymmetric Unit Designs'],
  },
  'dining-area': {
    label: 'Dining Area',
    img: diningAreaImage,
    count: 14,
    cardDesc: 'Elegant dining setups for memorable meals',
    desc: 'Create memorable dining experiences at home. Our dining room designs range from intimate family setups to formal dining rooms worthy of every celebration.',
    ideas: ['6-seater Table Designs', 'Pendant Light Above Dining', 'Bench Seating Concepts', 'Crockery Unit Pairings', 'Accent Wall for Dining', 'Marble Top Tables', 'Round Table Layouts', 'Open Plan Dining Concepts'],
  },
  'foyer-area': {
    label: 'Foyer Area',
    img: foyerAreaImage,
    count: 12,
    cardDesc: 'Grand entrances that make a lasting first impression',
    desc: 'Your entryway makes the first impression. We design foyers that are grand, functional, and set the tone for the rest of your home, from compact apartments to sprawling villas.',
    ideas: ['Console Table Styling', 'Statement Mirror Designs', 'Pendant Light Foyers', 'Shoe Cabinet Integration', 'Marble Flooring Patterns', 'Artwork & Gallery Walls', 'Compact Bench Ideas', 'Key & Storage Hooks'],
  },
  'home-office': {
    label: 'Home Office Setup',
    img: homeOfficeImage,
    count: 21,
    cardDesc: 'Productive, ergonomic workspaces at home',
    desc: 'Work smarter, not harder. Our home office designs create productive, ergonomic spaces that reduce fatigue and inspire focus, all without sacrificing style.',
    ideas: ['Built-in Bookshelf Desks', 'Ergonomic Chair Setups', 'Dual Monitor Arrangements', 'Cable Management', 'Acoustic Panel Designs', 'Green Wall Backgrounds', 'Multi-use Office Rooms', 'Standing Desk Concepts'],
  },
  'space-saving': {
    label: 'Space Saving Designs',
    img: spaceSavingImage,
    count: 25,
    cardDesc: 'Smart multi-functional furniture for small spaces',
    desc: 'Small space? Big possibilities. Our space-saving design concepts use clever multi-functional furniture and smart layouts to make every square foot count.',
    ideas: ['Murphy Bed Concepts', 'Sofa-cum-Bed Designs', 'Under-Stair Storage', 'Loft Bed Setups', 'Folding Dining Tables', 'Wall-mounted Desks', 'Sliding Partition Ideas', 'Compact Kitchen Layouts'],
  },
  'crockery-unit': {
    label: 'Crockery Unit Designs',
    img: crockeryUnitImage,
    count: 11,
    cardDesc: 'Display units that showcase your collection beautifully',
    desc: 'Show off your finest crockery and dinnerware in beautifully designed display units that combine open shelving with concealed storage.',
    ideas: ['Glass Door Crockery Units', 'Open Shelf Display', 'Backlit Showcase Units', 'Integrated Dining Unit', 'Built-in Wine Rack', 'Floating Shelf Concepts', 'Traditional Crockery Cabinets', 'Modular Sideboard Designs'],
  },
  'false-ceiling': {
    label: 'False Ceiling Designs',
    img: falseCeilingImage,
    count: 23,
    cardDesc: 'Cove lighting, geometric patterns, LED strips',
    desc: 'False ceilings add depth, drama, and luxury to any room. From simple cove lighting to intricate geometric patterns, our ceiling designs transform rooms instantly.',
    ideas: ['Cove Lighting Ceilings', 'POP Geometric Patterns', 'Gypsum Board Designs', 'Wooden Plank Ceilings', 'LED Strip Lighting', 'Coffered Ceiling Concepts', 'Tray Ceiling Designs', 'Exposed Beam Looks'],
  },
  wallpaper: {
    label: 'Wallpaper Designs',
    img: wallpaperImage,
    count: 30,
    cardDesc: 'Textured, printed, and feature wall ideas',
    desc: 'Wallpapers instantly transform a room. Explore our curated collection of textured, printed, and 3D wallpaper ideas for feature walls and full rooms.',
    ideas: ['Botanical Print Wallpapers', '3D Textured Wallpapers', 'Geometric Patterns', 'Marble Effect Wallpaper', 'Mural Wallpapers', 'Grasscloth Textures', 'Abstract Feature Walls', 'Traditional Indian Prints'],
  },
  'wall-decor': {
    label: 'Wall Decor Designs',
    img: wallDecorImage,
    count: 27,
    cardDesc: 'Art, panels, murals, and decorative wall treatments',
    desc: 'Walls are a canvas for self-expression. Our wall decor ideas range from gallery walls to sculptural installations that add personality and depth to every room.',
    ideas: ['Gallery Wall Arrangements', 'Wooden Panel Cladding', 'Stone Accent Walls', 'Macrame Wall Art', 'Decorative Mirror Clusters', 'Floating Shelf Displays', '3D Wall Panel Designs', 'Mural Painting Concepts'],
  },
  lightings: {
    label: 'Lightings',
    img: lightingsImage,
    count: 19,
    cardDesc: 'Ambient, task, accent - the perfect lighting recipe',
    desc: 'Lighting is the most transformative design element. Layer ambient, task, and accent lights to create mood, depth, and drama in every corner of your home.',
    ideas: ['Chandelier Selection Guide', 'Pendant Light Placement', 'Cove & Cove Lighting', 'Floor Lamp Styling', 'Recessed Lighting Grids', 'Smart Home Lighting', 'Outdoor & Balcony Lights', 'Vintage Edison Bulb Ideas'],
  },
}

export const DESIGN_IDEA_CATEGORIES = Object.entries(ROOM_DATA).map(([id, room]) => ({
  id,
  label: room.label,
  img: room.img,
  desc: room.cardDesc,
  count: room.count,
}))
