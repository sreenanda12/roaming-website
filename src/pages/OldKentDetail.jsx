import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  MapPin, Clock, Star, CheckCircle2, ArrowLeft, ArrowRight, 
  Sparkles, Users, Eye, Coffee, Mail, Flame, Compass, Heart, 
  Utensils, BookOpen, Music, Film, Trees, ShieldAlert
} from 'lucide-react';
import './OldKentDetail.css';

const amenityList = [
  { icon: <Coffee size={20} />, label: 'Crop-to-Cup Coffee' },
  { icon: <Compass size={20} />, label: 'Estate Tours' },
  { icon: <Trees size={20} />, label: 'English Gardens' },
  { icon: <Flame size={20} />, label: 'BBQ & Bonfires' },
  { icon: <Heart size={20} />, label: 'Wellness Spa' },
  { icon: <Utensils size={20} />, label: 'Colonial Dining' }
];

const galleryCategories = ['All', 'Estate', 'Cottages', 'Suites', 'Coffee Plantation', 'Dining', 'Spa', 'Nature', 'Experiences'];

const galleryImages = [
  { src: '/images/oldkent/oldkentestates.jpg', category: ['Estate', 'Nature'], title: 'Historic Colonial Bungalow' },
  { src: '/images/oldkent/oldkentestates2.jpg', category: ['Cottages', 'Estate'], title: 'English Cottage Pathway' },
  { src: '/images/oldkent/oldkentestates3.jpg', category: ['Cottages', 'Suites'], title: 'Vintage Heritage Bedroom' },
  { src: '/images/oldkent/oldkentestates4.jpg', category: ['Cottages', 'Nature'], title: 'Lush Gardens Outside Cottages' },
  { src: '/images/oldkent/oldkentestates5.jpg', category: ['Nature', 'Experiences'], title: 'Scenic Misty Morning View' },
  { src: '/images/oldkent/oldkentestates6.jpg', category: ['Coffee Plantation', 'Experiences'], title: 'Crop-to-Cup Coffee Harvest' },
  { src: '/images/oldkent/oldkentestates7.jpg', category: ['Dining', 'Experiences'], title: 'Heritage Dining Room Feast' },
  { src: '/images/oldkent/oldkentestates8.jpg', category: ['Suites', 'Cottages'], title: 'Period Furnishings Bed Setup' },
  { src: '/images/oldkent/oldkentestates8.png', category: ['Suites', 'Cottages'], title: 'Vintage Master Suite' },
  { src: '/images/oldkent/oldkentestates9.jpg', category: ['Spa', 'Dining'], title: 'Estate Fresh Brewed Coffee' },
  { src: '/images/oldkent/oldkentestates9.png', category: ['Spa', 'Experiences'], title: 'Relaxing Spa & Wellness Therapy' },
  { src: '/images/oldkent/oldkentestates10.jpg', category: ['Estate', 'Suites'], title: 'English Garden & Main Bungalow' },
  { src: '/images/oldkent/oldkentestates11.jpg', category: ['Nature', 'Experiences'], title: 'Misty Plantation Trail Walk' }
];

const cottageImages = [
  '/images/oldkent/oldkentestates2.jpg',
  '/images/oldkent/oldkentestates3.jpg',
  '/images/oldkent/oldkentestates4.jpg',
  '/images/oldkent/oldkentestates8.jpg'
];

const suiteImages = [
  '/images/oldkent/oldkentestates8.png',
  '/images/oldkent/oldkentestates10.jpg',
  '/images/oldkent/oldkentestates3.jpg'
];

const experiences = [
  {
    title: 'Coffee Plantation Tour',
    desc: 'Walk through our lush 200-acre estate and learn about the cultivation of premium Arabica and Robusta beans.',
    icon: <Coffee size={24} />
  },
  {
    title: 'Crop-to-Cup Experience',
    desc: 'Witness the complete coffee making journey from harvesting to roasting and brewing the perfect estate cup.',
    icon: <Coffee size={24} />
  },
  {
    title: 'Bird Watching',
    desc: "Discover Coorg's rich avian diversity. Spot exotic endemic birds within our pristine estate canopy.",
    icon: <Compass size={24} />
  },
  {
    title: 'Nature Walks',
    desc: 'Stroll along shaded forest pathways, breathing in the clean air and enjoying absolute peace.',
    icon: <Trees size={24} />
  },
  {
    title: 'Movie Lounge',
    desc: 'Enjoy classic films and family favorites in our cozy, vintage-styled movie viewing lounge.',
    icon: <Film size={24} />
  },
  {
    title: 'Library & Heritage Study',
    desc: 'Immerse yourself in history or relax with a book in our charming study room filled with period books.',
    icon: <BookOpen size={24} />
  },
  {
    title: 'Plantation Exploration',
    desc: 'Go off the beaten track to discover the hidden streams, flora, and fauna of our heritage plantation.',
    icon: <Compass size={24} />
  }
];

export default function OldKentDetail() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [cottageIndex, setCottageIndex] = useState(0);
  const [suiteIndex, setSuiteIndex] = useState(0);

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
    : galleryImages.filter(img => img.category.includes(activeCategory));

  return (
    <div className="property-detail-layout old-kent-layout">
      {/* 1. HERO SECTION */}
      <section 
        className="property-hero" 
        ref={heroRef}
        style={{ backgroundImage: `url('/images/oldkent/oldkentestates.jpg')` }}
      >
        <div className="property-hero-overlay" />
        <div className="container property-hero-container">
          <NavLink to="/services" className="property-back-btn">
            <ArrowLeft size={16} />
            <span>Back to Stays</span>
          </NavLink>
          <div className="property-hero-text">
            <span className="property-badge aos">HERITAGE LUXURY</span>
            <h1 className="aos aos-delay-1">Old Kent Estates & Spa Coorg</h1>
            <p className="property-hero-tagline aos aos-delay-2">Nature. Nostalgia. Tranquility.</p>
            <p className="property-hero-desc aos aos-delay-3">
              Experience the charm of a 150-year-old coffee estate surrounded by lush plantations, English gardens, and tranquil forests. Enjoy luxury stays, wellness experiences, plantation adventures, and authentic Coorg hospitality.
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
              <span className="stat-value">150 Yrs</span>
              <span className="stat-label">Colonial History</span>
            </div>
            <div className="stat-card aos aos-scale aos-delay-1">
              <span className="stat-value">200 Acres</span>
              <span className="stat-label">Coffee Plantation</span>
            </div>
            <div className="stat-card aos aos-scale aos-delay-2">
              <span className="stat-value">Madikeri</span>
              <span className="stat-label">Coorg, Karnataka</span>
            </div>
            <div className="stat-card aos aos-scale aos-delay-3">
              <span className="stat-value">English</span>
              <span className="stat-label">Heritage Cottages</span>
            </div>
            <div className="stat-card aos aos-scale aos-delay-4">
              <span className="stat-value">Premium</span>
              <span className="stat-label">Wellness & Spa</span>
            </div>
            <div className="stat-card aos aos-scale aos-delay-5">
              <span className="stat-value">Crop-to-Cup</span>
              <span className="stat-label">Coffee Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STORYTELLING & PHILOSOPHY */}
      <section className="section property-story">
        <div className="container">
          <div className="story-layout-grid">
            <div className="story-left aos-left">
              <div className="section-badge">Welcome to Old Kent</div>
              <h2 className="heading-lg text-brand-green">Colonial Charm Meets Nature</h2>
              <div className="section-divider" style={{ margin: '20px 0' }} />
              <p className="body-lg text-muted-green">
                Set amidst a grand 200-acre working coffee plantation in Madikeri, Old Kent Estates & Spa takes you back in time to the era of British colonial planters. The heart of the property is a restored 150-year-old lodge, surrounded by beautifully manicured English gardens.
              </p>
              <p className="body-md text-muted-green" style={{ marginTop: '16px' }}>
                Every corner of the estate whispers tales of nostalgia, wellness, and authentic Coorg hospitality. Stroll down misty plantation trails, breathe in the fragrance of coffee blossoms, and unwind with our curated therapies designed for the ultimate restorative retreat.
              </p>
            </div>
            <div className="story-right aos-right">
              <div className="story-image-overlap">
                <img src="/images/oldkent/oldkentestates10.jpg" alt="Old Kent Estates Bungalow" className="story-img-main-large" />
                <div className="story-badge-highlight">
                  <Sparkles size={20} />
                  <span>Heritage Luxury Resort</span>
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
            <div className="section-badge">Our Accommodations</div>
            <h2 className="heading-lg" style={{ color: 'var(--white)' }}>Elegant Heritage Living</h2>
            <div className="section-divider" />
            <p style={{ color: 'var(--beige-200)' }}>Colonial architecture and vintage decor sit side-by-side with modern amenities for a timeless stay.</p>
          </div>

          <div className="cottages-grid">
            {/* English Cottage */}
            <div className="cottage-card aos-left aos">
              <div className="cottage-image-wrap">
                <img 
                  src={cottageImages[cottageIndex]} 
                  alt="English Cottage" 
                  className="cottage-img" 
                />
                <span className="cottage-badge-tag">English Cottage</span>
                
                {/* Arrow navigation */}
                <button 
                  className="cottage-nav prev"
                  onClick={() => setCottageIndex((cottageIndex - 1 + cottageImages.length) % cottageImages.length)}
                >
                  ‹
                </button>
                <button 
                  className="cottage-nav next"
                  onClick={() => setCottageIndex((cottageIndex + 1) % cottageImages.length)}
                >
                  ›
                </button>
                
                {/* Bullet dots */}
                <div className="cottage-dots">
                  {cottageImages.map((_, idx) => (
                    <span 
                      key={idx} 
                      className={`cottage-dot ${idx === cottageIndex ? 'active' : ''}`}
                      onClick={() => setCottageIndex(idx)}
                    />
                  ))}
                </div>
              </div>
              <div className="cottage-details">
                <h3 className="heading-md text-gold">English Cottage</h3>
                <p className="cottage-description">
                  Luxury heritage cottages with private gardens, outdoor seating, spacious bathrooms, plantation views, and select cottages featuring open-air jacuzzis.
                </p>
                <div className="cottage-meta">
                  <div className="meta-item"><Users size={16} /><span>Capacity: 2 Adults</span></div>
                  <div className="meta-item"><Eye size={16} /><span>Plantation & Garden Views</span></div>
                </div>
                <div className="cottage-features-list">
                  <span className="feature-pill"><CheckCircle2 size={12} /> Private Garden</span>
                  <span className="feature-pill"><CheckCircle2 size={12} /> Outdoor Seating</span>
                  <span className="feature-pill"><CheckCircle2 size={12} /> Open-Air Jacuzzi</span>
                  <span className="feature-pill"><CheckCircle2 size={12} /> Premium Bath Setup</span>
                </div>
                <NavLink to="/contact" className="btn-primary cottage-action-btn">
                  <span>Explore Estate</span>
                  <ArrowRight size={16} />
                </NavLink>
              </div>
            </div>

            {/* Suite Rooms */}
            <div className="cottage-card reverse aos-right aos">
              <div className="cottage-image-wrap">
                <img 
                  src={suiteImages[suiteIndex]} 
                  alt="Suite Rooms" 
                  className="cottage-img" 
                />
                <span className="cottage-badge-tag">Suite Room</span>
                
                {/* Arrow navigation */}
                <button 
                  className="cottage-nav prev"
                  onClick={() => setSuiteIndex((suiteIndex - 1 + suiteImages.length) % suiteImages.length)}
                >
                  ‹
                </button>
                <button 
                  className="cottage-nav next"
                  onClick={() => setSuiteIndex((suiteIndex + 1) % suiteImages.length)}
                >
                  ›
                </button>
                
                {/* Bullet dots */}
                <div className="cottage-dots">
                  {suiteImages.map((_, idx) => (
                    <span 
                      key={idx} 
                      className={`cottage-dot ${idx === suiteIndex ? 'active' : ''}`}
                      onClick={() => setSuiteIndex(idx)}
                    />
                  ))}
                </div>
              </div>
              <div className="cottage-details">
                <h3 className="heading-md text-gold">Suite Rooms</h3>
                <p className="cottage-description">
                  Elegant vintage suites with period furnishings, private bathtubs, scenic hill views, and interconnected family-friendly layouts.
                </p>
                <div className="cottage-meta">
                  <div className="meta-item"><Users size={16} /><span>Capacity: 2/3 Adults</span></div>
                  <div className="meta-item"><Eye size={16} /><span>Scenic Hill Views</span></div>
                </div>
                <div className="cottage-features-list">
                  <span className="feature-pill"><CheckCircle2 size={12} /> Period Furnishings</span>
                  <span className="feature-pill"><CheckCircle2 size={12} /> Private Bathtub</span>
                  <span className="feature-pill"><CheckCircle2 size={12} /> Interconnected Layout</span>
                  <span className="feature-pill"><CheckCircle2 size={12} /> Cozy Sitting Area</span>
                </div>
                <NavLink to="/contact" className="btn-primary cottage-action-btn">
                  <span>Explore Estate</span>
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
            <div className="section-badge">Curated Experiences</div>
            <h2 className="heading-lg text-brand-green">Plantation & Heritage Adventures</h2>
            <div className="section-divider" />
            <p>Immerse yourself in activities that bring you closer to the spirit of Coorg and coffee estate living.</p>
          </div>

          <div className="experiences-cards-grid">
            {experiences.map((exp, index) => (
              <div key={exp.title} className={`experience-card aos aos-scale aos-delay-${(index % 3) + 1}`}>
                <div className="experience-icon-badge">{exp.icon}</div>
                <div className="experience-content">
                  <h3 className="heading-sm text-gold">{exp.title}</h3>
                  <p className="experience-desc">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DINING SECTION */}
      <section className="section dining-section">
        <div className="container">
          <div className="story-layout-grid reverse">
            <div className="story-right aos-left">
              <div className="story-image-overlap">
                <img src="/images/oldkent/oldkentestates7.jpg" alt="Heritage Dining at Old Kent" className="story-img-main-large" />
                <div className="story-badge-highlight">
                  <Utensils size={20} />
                  <span>Fine Colonial Dining</span>
                </div>
              </div>
            </div>
            <div className="story-left aos-right">
              <div className="section-badge">Culinary Pleasures</div>
              <h2 className="heading-lg text-brand-green">Gastronomy & Fine Coffee</h2>
              <div className="section-divider" style={{ margin: '20px 0' }} />
              <p className="body-lg text-muted-green">
                Experience gourmet farm-to-table dining inspired by local harvests and legacy family recipes. Savor authentic Coorg cuisine alongside delicious international delicacies, all paired with fresh single-origin estate coffee.
              </p>
              <div className="dining-features-grid">
                {[
                  'Farm-to-table dining',
                  'Authentic Coorg cuisine',
                  'International delicacies',
                  'Fresh estate coffee',
                  'Private candlelight dinners',
                  'BBQ nights'
                ].map((feat) => (
                  <div key={feat} className="dining-feat-item">
                    <CheckCircle2 size={16} className="text-gold" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WELLNESS & SPA */}
      <section className="section spa-section">
        <div className="container">
          <div className="section-header aos">
            <div className="section-badge">Rejuvenation</div>
            <h2 className="heading-lg text-brand-green">Wellness & Spa Therapies</h2>
            <div className="section-divider" />
            <p>Heal your body and soul through therapeutic experiences nestled inside coffee groves.</p>
          </div>
          <div className="spa-layout-grid">
            <div className="spa-image-box aos-left">
              <img src="/images/oldkent/oldkentestates9.png" alt="Spa and Wellness Therapy" className="spa-hero-image" />
            </div>
            <div className="spa-details-box aos-right">
              <div className="spa-treatments-grid">
                {[
                  { name: 'Aromatherapy', desc: 'Restorative massage using premium blends of locally sourced flowers and herbs.' },
                  { name: 'Floral Baths', desc: 'Relaxing hot bath infused with estate petals and essential oils.' },
                  { name: 'Couples Massage', desc: 'Synchronized therapeutic massages in our private heritage spa chambers.' },
                  { name: 'Forest Bathing', desc: 'Guided sensory walks through plantation forests to align with nature.' },
                  { name: 'Yoga Sessions', desc: 'Morning stretch routines amidst manicured English lawns.' },
                  { name: 'Meditation Experiences', desc: 'Mindfulness practices next to tranquil natural water streams.' }
                ].map((treat, idx) => (
                  <div key={treat.name} className="spa-treat-card">
                    <div className="spa-treat-num">0{idx + 1}</div>
                    <div>
                      <h4>{treat.name}</h4>
                      <p>{treat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SPECIAL PACKAGES */}
      <section className="section special-packages-section">
        <div className="container">
          <div className="section-header aos">
            <div className="section-badge">Bespoke Journeys</div>
            <h2 className="heading-lg text-brand-green">Special Custom Packages</h2>
            <div className="section-divider" />
            <p>Carefully curated itineraries designed for couples and families looking to create lifetime memories.</p>
          </div>
          <div className="packages-comparison-grid">
            <div className="pkg-promo-card honeymoon-card aos-left">
              <div className="pkg-promo-header">
                <h3>Honeymoon Package</h3>
                <span className="pkg-promo-sub">Romance in the Hills</span>
              </div>
              <ul className="pkg-promo-features">
                <li><CheckCircle2 size={16} /> Private Candlelight Dinner</li>
                <li><CheckCircle2 size={16} /> Floral Room Decoration</li>
                <li><CheckCircle2 size={16} /> Floral Bath Setup</li>
                <li><CheckCircle2 size={16} /> Couples Spa Experience</li>
                <li><CheckCircle2 size={16} /> Romantic Plantation Walks</li>
              </ul>
              <NavLink to="/contact" className="btn-gold promo-btn">Book Honeymoon</NavLink>
            </div>

            <div className="pkg-promo-card family-card aos-right">
              <div className="pkg-promo-header">
                <h3>Family Retreat</h3>
                <span className="pkg-promo-sub">Shared Memories</span>
              </div>
              <ul className="pkg-promo-features">
                <li><CheckCircle2 size={16} /> Interconnected Suites</li>
                <li><CheckCircle2 size={16} /> Children's Dedicated Activities</li>
                <li><CheckCircle2 size={16} /> Coffee Plantation Tours</li>
                <li><CheckCircle2 size={16} /> Family Movie Nights</li>
                <li><CheckCircle2 size={16} /> Curated Family Experiences</li>
              </ul>
              <NavLink to="/contact" className="btn-primary promo-btn">Book Family Retreat</NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* 9. REFINED AMENITIES */}
      <section className="section property-amenities-section">
        <div className="container">
          <div className="section-header aos">
            <div className="section-badge">Supreme Comfort</div>
            <h2 className="heading-lg text-brand-green">Refined Amenities</h2>
            <div className="section-divider" />
            <p>Every convenience is tailored to elevate your heritage stay with premium comfort.</p>
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

      {/* 10. MASONRY GALLERY */}
      <section className="section property-gallery-section">
        <div className="container">
          <div className="section-header aos">
            <div className="section-badge">Visual Journey</div>
            <h2 className="heading-lg text-brand-green">Luxury Estate Gallery</h2>
            <div className="section-divider" />
            <p>Browse through the historic vistas, elegant heritage interiors, and green coffee plantations of Old Kent Estates.</p>
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
                    {img.category.join(', ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="adventure-cta-section section">
        <div className="container">
          <div className="adventure-cta-inner aos">
            <div className="adv-cta-bg" style={{ backgroundImage: `url('/images/oldkent/oldkentestates5.jpg')` }} />
            <div className="adv-cta-content">
              <div className="section-badge">Heritage Escape</div>
              <h2 className="heading-lg">
                Experience the Timeless Charm of Coorg
              </h2>
              <p>
                Discover luxury plantation living, wellness, heritage, and unforgettable experiences at Old Kent Estates & Spa Coorg.
              </p>
              <div className="adv-cta-btns">
                <NavLink to="/contact" className="btn-gold">
                  <span>Book Your Stay</span>
                  <ArrowRight size={18} />
                </NavLink>
                <NavLink to="/contact" className="btn-outline">
                  <span>Contact Us</span>
                </NavLink>
              </div>
            </div>
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
