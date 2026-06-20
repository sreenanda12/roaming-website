import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Mountain, Car, Wifi, Flame, Coffee, Compass, Sunset, 
  MapPin, Clock, Calendar, Star, CheckCircle2, ArrowLeft, 
  ArrowRight, Sparkles, Users, Layers, Eye, ShieldCheck, Mail, Send,
  Leaf, Trash2, ShieldAlert
} from 'lucide-react';
import './PropertyDetail.css';

const amenityList = [
  { icon: <Mountain size={20} />, label: 'Mountain Views' },
  { icon: <Car size={20} />, label: 'Free Parking' },
  { icon: <Wifi size={20} />, label: 'High-speed Wi-Fi' },
  { icon: <Compass size={20} />, label: 'Nature Trails' },
  { icon: <Coffee size={20} />, label: 'Plantation Walks' },
  { icon: <Flame size={20} />, label: 'Campfire Sessions' },
  { icon: <Sunset size={20} />, label: 'Scenic Sunrise Views' },
  { icon: <Layers size={20} />, label: 'Premium Bedding' }
];

const galleryCategories = ['All', 'Property', 'Glass Cabin', 'Pyramid Retreat', 'Plantation Views', 'Experiences', 'Sunsets', 'Mountains'];

const galleryImages = [
  { src: '/images/elam/p1.jpeg', category: ['Property', 'Mountains'], title: 'Glass Cabin Exterior Dusk' },
  { src: '/images/elam/p2.jpeg', category: ['Glass Cabin'], title: 'Glass Cabin Modern Bath' },
  { src: '/images/elam/p3.jpeg', category: ['Property', 'Pyramid Retreat'], title: 'Pyramid Retreat Exterior' },
  { src: '/images/elam/p4.jpeg', category: ['Pyramid Retreat'], title: 'Pyramid Retreat Bedroom' },
  { src: '/images/elam/p5.jpeg', category: ['Pyramid Retreat'], title: 'Pyramid Retreat A-Frame' },
  { src: '/images/elam/p6.jpeg', category: ['Glass Cabin'], title: 'Glass Cabin Bedroom View' },
  { src: '/images/elam/p7.jpeg', category: ['Pyramid Retreat'], title: 'Pyramid Retreat Lounge' },
  { src: '/images/elam/p8.jpeg', category: ['Experiences', 'Sunsets', 'Mountains'], title: 'Hilltop Sunset Campfire' },
  { src: '/images/elam/p9.jpeg', category: ['Property', 'Plantation Views', 'Mountains'], title: 'Glass Cabin Canopy View' },
  { src: '/images/elam/p10.jpeg', category: ['Experiences'], title: 'Local Cuisine Platter' },
  { src: '/images/elam/p11.jpeg', category: ['Pyramid Retreat'], title: 'Pyramid Retreat Twin Beds' },
  { src: '/images/elam/p12.jpeg', category: ['Experiences', 'Sunsets', 'Mountains'], title: 'Misty Hilltop Campfire' },
  { src: '/images/elam/p13.jpeg', category: ['Glass Cabin'], title: 'Glass Cabin Luxury Bath' },
  { src: '/images/elam/p14.jpeg', category: ['Property', 'Plantation Views'], title: 'Forest Plantation Pathway' },
  { src: '/images/elam/p15.jpeg', category: ['Experiences'], title: 'Spice Platter & Snacks' },
  { src: '/images/elam/p16.jpeg', category: ['Experiences'], title: 'Hammock Relaxation' },
  { src: '/images/elam/p17.jpeg', category: ['Experiences'], title: 'Premium Cottage Meal' },
  { src: '/images/elam/p18.jpeg', category: ['Glass Cabin'], title: 'Glass Cabin Misty Hills View' },
  { src: '/images/elam/p19.jpeg', category: ['Pyramid Retreat'], title: 'Pyramid Retreat Cozy Bed' },
  { src: '/images/elam/p20.jpeg', category: ['Experiences', 'Plantation Views'], title: 'Off-Road Jeep Safari' },
  { src: '/images/elam/p21.jpeg', category: ['Glass Cabin'], title: 'Glass Cabin Living Area' }
];

const glassCabinImages = [
  '/images/elam/p1.jpeg',
  '/images/elam/p6.jpeg',
  '/images/elam/p9.jpeg',
  '/images/elam/p18.jpeg',
  '/images/elam/p21.jpeg',
  '/images/elam/p2.jpeg',
  '/images/elam/p13.jpeg'
];

const pyramidRetreatImages = [
  '/images/elam/p3.jpeg',
  '/images/elam/p4.jpeg',
  '/images/elam/p5.jpeg',
  '/images/elam/p7.jpeg',
  '/images/elam/p11.jpeg',
  '/images/elam/p14.jpeg',
  '/images/elam/p19.jpeg'
];

const experiences = [
  {
    title: 'Campfire',
    desc: 'Gather around crackling flames as stories and laughter fill the crisp mountain air. The warmth of the fire complements the coolness of the forest night.',
    img: '/images/elam/p8.jpeg'
  },
  {
    title: 'Stargazing',
    desc: 'Far from city lights, our skies reveal constellations in breathtaking clarity. The Milky Way stretches overhead like a celestial river.',
    img: '/images/elam/p12.jpeg'
  },
  {
    title: 'Cloudscapes',
    desc: 'Watch valleys disappear beneath a mystical sea of white clouds. The morning mist transforms familiar landscapes into dreamlike panoramas.',
    img: '/images/elam/p9.jpeg'
  },
  {
    title: 'Trekking',
    desc: 'Delve into the untouched beauty of Munnar with soulful treks through green hills, cardamom trails, and misty paths.',
    img: '/images/elam/p14.jpeg'
  },
  {
    title: 'Off-Road Adventure',
    desc: 'Your journey to Élam is an adventure through rugged plantation roads. The bumpy ride through coffee estates sets the tone for exploration.',
    img: '/images/elam/p20.jpeg'
  },
  {
    title: 'Wildlife Spotting',
    desc: "Discover the rich biodiversity of Munnar's forests. Spot exotic bird species, endemic wildlife, and vibrant flora in their natural habitats.",
    img: '/images/elam/p16.jpeg'
  },
  {
    title: 'Waterfall Visits',
    desc: 'Viriparai waterfalls cascade down rocky cliffs just a short drive away. The thundering water and cool mist offer a refreshing natural escape.',
    img: '/images/elam/p12.jpeg'
  }
];

const sustainabilityItems = [
  {
    icon: <Leaf size={28} />,
    title: 'Eco-Conscious Construction',
    desc: 'Bespoke structural design utilizing eco-conscious construction methods that preserve the natural topography and surrounding ecosystems.'
  },
  {
    icon: <Trash2 size={28} />,
    title: 'Reduced Plastic Usage',
    desc: 'An active commitment to eliminating single-use plastics across the retreat, replacing them with organic, sustainable materials.'
  },
  {
    icon: <CheckCircle2 size={28} />,
    title: 'Biodegradable Products',
    desc: 'Providing premium eco-friendly personal care amenities and cleaning items that decompose without leaving harmful chemical footprints.'
  },
  {
    icon: <Compass size={28} />,
    title: 'Habitat Preservation',
    desc: 'Carefully protecting the natural environment and local micro-climate across our 16 acres of cardamon and coffee plantations.'
  },
  {
    icon: <Users size={28} />,
    title: 'Responsible Tourism',
    desc: 'Fostering respect for local cultures, supporting community development, and encouraging low-impact green hospitality.'
  }
];

export default function PropertyDetail() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [glassCabinIndex, setGlassCabinIndex] = useState(0);
  const [pyramidRetreatIndex, setPyramidRetreatIndex] = useState(0);


  const heroRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY = `${scrolled * 0.4}px`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('aos-animate');
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll('.aos, .aos-left, .aos-right, .aos-scale').forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [location.pathname]);



  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => {
        if (Array.isArray(img.category)) {
          return img.category.includes(activeCategory);
        }
        return img.category === activeCategory;
      });

  return (
    <div className="property-detail-layout">
      {/* 1. HERO SECTION */}
      <section 
        className="property-hero" 
        ref={heroRef}
        style={{ backgroundImage: `url('/images/elam/p1.jpeg')` }}
      >
        <div className="property-hero-overlay" />
        <div className="container property-hero-container">
          <NavLink to="/services" className="property-back-btn">
            <ArrowLeft size={16} />
            <span>Back to Stays</span>
          </NavLink>
          <div className="property-hero-text">
            <span className="property-badge aos">Featured Stay</span>
            <h1 className="aos aos-delay-1">Élam Munnar</h1>
            <p className="property-hero-tagline aos aos-delay-2">Unwind Your Way</p>
            <p className="property-hero-desc aos aos-delay-3">
              A serene sanctuary perched 1640 meters above sea level, surrounded by the majestic Western Ghats and nestled within 16 acres of cardamom and coffee plantations.
            </p>
            <div className="property-hero-actions aos aos-delay-4">
              <NavLink to="/contact" className="btn-primary">
                <span>Book Your Stay</span>
                <ArrowRight size={16} />
              </NavLink>
              <NavLink to="/contact" className="btn-outline">
                <span>Contact Us</span>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="property-hero-scroll">
          <div className="scroll-arrow" />
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="property-stats section-sm">
        <div className="container">
          <div className="property-stats-grid">
            <div className="stat-card aos aos-scale">
              <span className="stat-value">1640m</span>
              <span className="stat-label">Above Sea Level</span>
            </div>
            <div className="stat-card aos aos-scale aos-delay-1">
              <span className="stat-value">16 Acres</span>
              <span className="stat-label">Plantation Estate</span>
            </div>
            <div className="stat-card aos aos-scale aos-delay-2">
              <span className="stat-value">Western Ghats</span>
              <span className="stat-label">Views</span>
            </div>
            <div className="stat-card aos aos-scale aos-delay-3">
              <span className="stat-value">Luxury</span>
              <span className="stat-label">Premium Cottages</span>
            </div>
            <div className="stat-card aos aos-scale aos-delay-4">
              <span className="stat-value">Sustainable</span>
              <span className="stat-label">Retreat</span>
            </div>
            <div className="stat-card aos aos-scale aos-delay-5">
              <span className="stat-value">100%</span>
              <span className="stat-label">Nature Immersion</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STORYTELLING & PHILOSOPHY */}
      <section className="section property-story">
        <div className="container">
          <div className="story-layout-grid">
            <div className="story-left aos-left">
              <div className="section-badge">Welcome to Élam</div>
              <h2 className="heading-lg text-brand-green">Escape Into Pure Tranquility</h2>
              <div className="section-divider" style={{ margin: '20px 0' }} />
              <p className="body-lg text-muted-green">
                Welcome to Élam, a serene escape from daily life designed to immerse guests in nature's tranquility. Located on the beautiful Letchmi Estate of Munnar, Élam combines luxury accommodation with breathtaking mountain scenery and sustainable hospitality.
              </p>
              <p className="body-md text-muted-green" style={{ marginTop: '16px' }}>
                Perched on mountain ridges amidst ancient cardamom plantations, Élam represents a slow-travel philosophy where luxury coexists with complete nature immersion. Slow down, breathe the cardamom-scented air, and let the clouds drift under your private deck.
              </p>
            </div>
            <div className="story-right aos-right">
              <div className="story-image-overlap">
                <img src="/images/elam/p9.jpeg" alt="Elam Munnar plantation" className="story-img-main-large" />
                <div className="story-badge-highlight">
                  <Sparkles size={20} />
                  <span>Premium Mountain Sanctuary</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACCOMMODATION / COTTAGES */}
      <section className="section property-accommodations" id="accommodations">
        <div className="container">
          <div className="section-header aos">
            <div className="section-badge">Premium Cottages</div>
            <h2 className="heading-lg" style={{ color: 'var(--white)' }}>Exquisitely Crafted Cottages</h2>
            <div className="section-divider" />
            <p style={{ color: 'var(--beige-200)' }}>Bespoke architectural structures situated on hill slopes, designed for panoramic viewing and maximum privacy.</p>
          </div>

          <div className="cottages-grid">
            {/* Glass Cabin */}
            <div className="cottage-card aos-left aos">
              <div className="cottage-image-wrap">
                <img 
                  src={glassCabinImages[glassCabinIndex]} 
                  alt="Glass Cabin" 
                  className="cottage-img" 
                />
                <span className="cottage-badge-tag">Glass Cabin</span>
                
                {/* Arrow navigation */}
                <button 
                  className="cottage-nav prev"
                  onClick={() => setGlassCabinIndex((glassCabinIndex - 1 + glassCabinImages.length) % glassCabinImages.length)}
                >
                  ‹
                </button>
                <button 
                  className="cottage-nav next"
                  onClick={() => setGlassCabinIndex((glassCabinIndex + 1) % glassCabinImages.length)}
                >
                  ›
                </button>
                
                {/* Bullet dots */}
                <div className="cottage-dots">
                  {glassCabinImages.map((_, idx) => (
                    <span 
                      key={idx} 
                      className={`cottage-dot ${idx === glassCabinIndex ? 'active' : ''}`}
                      onClick={() => setGlassCabinIndex(idx)}
                    />
                  ))}
                </div>
              </div>
              <div className="cottage-details">
                <h3 className="heading-md text-gold">Glass Cabin</h3>
                <p className="cottage-description">
                  Experience refined simplicity in the Glass Cabin where modern design meets nature's grandeur. Floor-to-ceiling glass walls flood the space with natural light while offering uninterrupted landscape views.
                </p>
                <div className="cottage-meta">
                  <div className="meta-item"><Users size={16} /><span>Capacity: 2 Adults</span></div>
                  <div className="meta-item"><Eye size={16} /><span>360° Forest Views</span></div>
                </div>
                <div className="cottage-features-list">
                  <span className="feature-pill"><CheckCircle2 size={12} /> King Bed</span>
                  <span className="feature-pill"><CheckCircle2 size={12} /> Panoramic Balcony</span>
                  <span className="feature-pill"><CheckCircle2 size={12} /> High-speed Wi-Fi</span>
                  <span className="feature-pill"><CheckCircle2 size={12} /> Contemporary Bath</span>
                </div>
                <NavLink to="/contact" className="btn-primary cottage-action-btn">
                  <span>Reserve Glass Cabin</span>
                  <ArrowRight size={16} />
                </NavLink>
              </div>
            </div>

            {/* Pyramid Retreat */}
            <div className="cottage-card reverse aos-right aos">
              <div className="cottage-image-wrap">
                <img 
                  src={pyramidRetreatImages[pyramidRetreatIndex]} 
                  alt="Pyramid Retreat" 
                  className="cottage-img" 
                />
                <span className="cottage-badge-tag">Pyramid Retreat</span>
                
                {/* Arrow navigation */}
                <button 
                  className="cottage-nav prev"
                  onClick={() => setPyramidRetreatIndex((pyramidRetreatIndex - 1 + pyramidRetreatImages.length) % pyramidRetreatImages.length)}
                >
                  ‹
                </button>
                <button 
                  className="cottage-nav next"
                  onClick={() => setPyramidRetreatIndex((pyramidRetreatIndex + 1) % pyramidRetreatImages.length)}
                >
                  ›
                </button>
                
                {/* Bullet dots */}
                <div className="cottage-dots">
                  {pyramidRetreatImages.map((_, idx) => (
                    <span 
                      key={idx} 
                      className={`cottage-dot ${idx === pyramidRetreatIndex ? 'active' : ''}`}
                      onClick={() => setPyramidRetreatIndex(idx)}
                    />
                  ))}
                </div>
              </div>
              <div className="cottage-details">
                <h3 className="heading-md text-gold">Pyramid Retreat</h3>
                <p className="cottage-description">
                  A modern architectural marvel seamlessly blending with nature and offering panoramic views. Designed for rest, reflection, and rejuvenation.
                </p>
                <div className="cottage-meta">
                  <div className="meta-item"><Users size={16} /><span>Capacity: 2/3 Adults</span></div>
                  <div className="meta-item"><Eye size={16} /><span>Star-viewing Skylight</span></div>
                </div>
                <div className="cottage-features-list">
                  <span className="feature-pill"><CheckCircle2 size={12} /> Double Height Bed</span>
                  <span className="feature-pill"><CheckCircle2 size={12} /> Skylight Dome</span>
                  <span className="feature-pill"><CheckCircle2 size={12} /> Scenic Mountain Deck</span>
                  <span className="feature-pill"><CheckCircle2 size={12} /> Stone Luxury Bath</span>
                </div>
                <NavLink to="/contact" className="btn-primary cottage-action-btn">
                  <span>Reserve Pyramid Retreat</span>
                  <ArrowRight size={16} />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EXPERIENCES SECTION */}
      <section className="section property-experiences">
        <div className="container">
          <div className="section-header aos">
            <div className="section-badge">Curated Stays</div>
            <h2 className="heading-lg text-brand-green">Soulful Mountain Experiences</h2>
            <div className="section-divider" />
            <p>Delve into the untouched beauty of Munnar through experiences designed to connect you with the wild.</p>
          </div>

          <div className="experiences-cards-grid">
            {experiences.map((exp, index) => (
              <div key={exp.title} className={`experience-card aos aos-scale aos-delay-${(index % 3) + 1}`}>
                <div className="experience-image-container">
                  <img src={exp.img} alt={exp.title} className="experience-img" />
                  <div className="experience-overlay" />
                </div>
                <div className="experience-content">
                  <h3 className="heading-sm text-gold">{exp.title}</h3>
                  <p className="experience-desc">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SUSTAINABILITY SECTION */}
      <section className="section property-sustainability-section">
        <div className="container">
          <div className="section-header aos">
            <div className="section-badge">Eco Responsibility</div>
            <h2 className="heading-lg text-brand-green">Sustainability Initiatives</h2>
            <div className="section-divider" />
            <p>We operate with a deep commitment to preserving Munnar's pristine mountain ecosystem for generations to come.</p>
          </div>

          <div className="sustainability-cards-grid">
            {sustainabilityItems.map((item, index) => (
              <div key={item.title} className="sustainability-card aos aos-scale">
                <div className="sustainability-icon-wrap">{item.icon}</div>
                <h3 className="sustainability-title">{item.title}</h3>
                <p className="sustainability-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. REFINED AMENITIES */}
      <section className="section property-amenities-section">
        <div className="container">
          <div className="section-header aos">
            <div className="section-badge">Supreme Comfort</div>
            <h2 className="heading-lg text-brand-green">Refined Amenities</h2>
            <div className="section-divider" />
            <p>Every element is handpicked to ensure your luxury stay feels completely aligned with nature.</p>
          </div>

          <div className="amenities-icon-grid">
            {amenityList.map((item, index) => (
              <div key={item.label} className="amenity-icon-card aos aos-scale">
                <div className="amenity-icon-wrap">{item.icon}</div>
                <span className="amenity-icon-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. MASONRY GALLERY */}
      <section className="section property-gallery-section">
        <div className="container">
          <div className="section-header aos">
            <div className="section-badge">Visual Journey</div>
            <h2 className="heading-lg text-brand-green">Luxury Masonry Gallery</h2>
            <div className="section-divider" />
            <p>Browse through the scenic vistas, elegant interiors, and architectural details of Élam Munnar.</p>
          </div>

          {/* Categories Tab selector */}
          <div className="gallery-categories-tabs aos">
            {galleryCategories.map(cat => (
              <button 
                key={cat} 
                className={`gallery-tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Layout grid */}
          <div className="gallery-masonry-grid aos aos-scale">
            {filteredImages.map((img, index) => (
              <div 
                key={img.src} 
                className="gallery-item"
                onClick={() => setLightboxIndex(galleryImages.findIndex(i => i.src === img.src))}
              >
                <img src={img.src} alt={img.title} className="gallery-img-thumb" loading="lazy" />
                <div className="gallery-hover-overlay">
                  <span className="gallery-img-title">{img.title}</span>
                  <span className="gallery-img-cat">
                    {Array.isArray(img.category) ? img.category.join(', ') : img.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* LIGHTBOX FOR PREVIEWING IMAGES */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={() => setLightboxIndex(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxIndex(null)}>×</button>
            <button 
              className="lightbox-nav prev"
              onClick={() => setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length)}
            >
              ‹
            </button>
            <div className="lightbox-image-wrap">
              <img src={galleryImages[lightboxIndex].src} alt={galleryImages[lightboxIndex].title} />
              <span className="lightbox-caption">{galleryImages[lightboxIndex].title}</span>
            </div>
            <button 
              className="lightbox-nav next"
              onClick={() => setLightboxIndex((lightboxIndex + 1) % galleryImages.length)}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
