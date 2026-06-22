import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Mountain, Car, Wifi, Flame, Coffee, Compass, Sunset, 
  MapPin, Clock, Calendar, Star, CheckCircle2, ArrowLeft, 
  ArrowRight, Sparkles, Users, Layers, Eye, ShieldCheck, Mail, Send,
  Leaf, Trash2, Waves, Award
} from 'lucide-react';
import './JungleParkDetail.css';

const amenityList = [
  { icon: <Mountain size={20} />, label: '900 Acres Forest Landscape' },
  { icon: <Award size={20} />, label: 'Presidential Award Winning' },
  { icon: <Waves size={20} />, label: 'Lakeside Kayaking' },
  { icon: <Compass size={20} />, label: 'Wildlife & Nature Trails' },
  { icon: <Coffee size={20} />, label: 'Multi-Cuisine Restaurant' },
  { icon: <Flame size={20} />, label: 'Campfire & BBQ Sessions' },
  { icon: <Sunset size={20} />, label: 'Cloud Sweeping Views' },
  { icon: <Layers size={20} />, label: 'Premium Lakeview Suites' }
];

const galleryCategories = ['All', 'Suites', 'Experiences', 'Lakeside', 'Forest Views'];

const galleryImages = [
  { src: '/images/junglepark/p2.png', category: ['Suites'], title: 'Duplex Suite Bedroom' },
  { src: '/images/junglepark/p3.png', category: ['Suites'], title: 'Duplex Suite Living Room' },
  { src: '/images/junglepark/p4.png', category: ['Suites'], title: 'Suite Panoramic Window' },
  { src: '/images/junglepark/p5.png', category: ['Suites'], title: 'Duplex Attic Space' },
  { src: '/images/junglepark/p6.png', category: ['Suites'], title: 'Duplex Suite Balcony View' },
  { src: '/images/junglepark/p7.png', category: ['Suites'], title: 'Premium Suite Entrance' },
  { src: '/images/junglepark/p8.png', category: ['Suites'], title: 'Premium Suite Bedding' },
  { src: '/images/junglepark/p9.png', category: ['Suites'], title: 'Premium Suite Washroom' },
  { src: '/images/junglepark/p10.png', category: ['Suites'], title: 'Duplex Suite Modern Bath' },
  { src: '/images/junglepark/p11.png', category: ['Suites'], title: 'Suite Interior Cozy Seating' },
  { src: '/images/junglepark/p12.png', category: ['Experiences', 'Forest Views'], title: 'Forest Safari Jeep Ride' },
  { src: '/images/junglepark/p13.png', category: ['Experiences', 'Forest Views'], title: 'Guided Viewpoint Trekking' },
  { src: '/images/junglepark/p14.png', category: ['Experiences', 'Lakeside'], title: 'Kayaking in Mist Lake' },
  { src: '/images/junglepark/p15.png', category: ['Experiences', 'Forest Views'], title: 'Early Morning Bird Watching' },
  { src: '/images/junglepark/p16.png', category: ['Experiences'], title: 'Archery & Shooting Range' },
  { src: '/images/junglepark/p17.png', category: ['Experiences'], title: 'Evening Campfire & BBQ Session' },
  { src: '/images/junglepark/p18.png', category: ['Experiences', 'Forest Views'], title: 'Forest Waterfall Expedition' },
  { src: '/images/junglepark/p19.png', category: ['Forest Views'], title: 'Resort Drone Landscape' },
  { src: '/images/junglepark/p20.png', category: ['Lakeside', 'Forest Views'], title: 'Mist-Covered Lake View' },
  { src: '/images/junglepark/p21.png', category: ['Forest Views'], title: '900 Acres Pristine Wilderness' },
  { src: '/images/junglepark/p22.png', category: ['Forest Views'], title: 'Resort Canopy Walkways' },
  { src: '/images/junglepark/p23.png', category: ['Forest Views'], title: 'Presidential Award Winning Layout' },
  { src: '/images/junglepark/p24.png', category: ['Experiences', 'Lakeside'], title: 'Fishing Excursion Lakeside' }
];

const luxurySuiteImages = [
  '/images/junglepark/p2.png',
  '/images/junglepark/p3.png',
  '/images/junglepark/p4.png',
  '/images/junglepark/p5.png',
  '/images/junglepark/p6.png',
  '/images/junglepark/p10.png'
];

const premiumSuiteImages = [
  '/images/junglepark/p7.png',
  '/images/junglepark/p8.png',
  '/images/junglepark/p9.png',
  '/images/junglepark/p11.png',
  '/images/junglepark/p20.png'
];

const experiences = [
  {
    title: 'Forest Safari Transfer',
    desc: 'Embark on a thrilling forest safari drive through rugged terrain to reach the resort, 7 km deep inside the wilderness.',
    img: '/images/junglepark/p12.png'
  },
  {
    title: 'Kayaking Experience',
    desc: 'Glide gracefully across the mist-covered lake situated inside the resort property, surrounded by 900 acres of trees.',
    img: '/images/junglepark/p14.png'
  },
  {
    title: 'Waterfall Expedition',
    desc: 'Follow the cascading sound of wilderness and explore beautiful waterfalls hidden deep inside the private rainforest.',
    img: '/images/junglepark/p18.png'
  },
  {
    title: 'Guided Viewpoint Trek',
    desc: 'Trek to scenic peaks and watch the clouds sweep across Wayanad’s highest peaks in a breathtaking panoramic showcase.',
    img: '/images/junglepark/p13.png'
  },
  {
    title: 'Bird Watching Walk',
    desc: 'Join our experienced naturalists for an early morning stroll to spot and identify rare endemic bird species in the canopy.',
    img: '/images/junglepark/p15.png'
  },
  {
    title: 'Campfire & BBQ',
    desc: 'Relax as the sun dips below the mountains. Gather around the warmth of the fire for a premium BBQ session under the stars.',
    img: '/images/junglepark/p17.png'
  }
];

const sustainabilityItems = [
  {
    icon: <Leaf size={28} />,
    title: 'Sustainable Architecture',
    desc: 'Our cottages and duplexes are built using eco-friendly local materials, designed to leave the forest topography untouched.'
  },
  {
    icon: <Trash2 size={28} />,
    title: 'Zero Waste Commitment',
    desc: 'Strictly plastic-free retreat utilizing organic composting, water recycling, and eco-friendly packaging across the resort.'
  },
  {
    icon: <CheckCircle2 size={28} />,
    title: 'Preserving Rainforest',
    desc: 'Active conservation of the surrounding 900 acres of ancient forest, protecting flora and fauna habitats from interference.'
  },
  {
    icon: <Compass size={28} />,
    title: 'Responsible Eco-Tourism',
    desc: 'Fostering minimum-impact travel practices, educating visitors on local ecosystems, and employing Wayanad tribal staff.'
  },
  {
    icon: <Users size={28} />,
    title: 'Community Upliftment',
    desc: 'Sourcing fresh forest-friendly produce directly from local tribal farmers and contributing directly to the regional ecosystem.'
  }
];

export default function JungleParkDetail() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [luxuryIndex, setLuxuryIndex] = useState(0);
  const [premiumIndex, setPremiumIndex] = useState(0);

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
    <div className="property-detail-layout">
      {/* 1. HERO SECTION */}
      <section 
        className="property-hero" 
        ref={heroRef}
        style={{ backgroundImage: `url('/images/junglepark/p20.png')` }}
      >
        <div className="property-hero-overlay" />
        <div className="container property-hero-container">
          <NavLink to="/services" className="property-back-btn">
            <ArrowLeft size={16} />
            <span>Back to Stays</span>
          </NavLink>
          <div className="property-hero-text">
            <span className="property-badge aos">Rainforest Luxury Stay</span>
            <h1 className="aos aos-delay-1">Jungle Park Resort</h1>
            <p className="property-hero-tagline aos aos-delay-2">Where Nature Speaks To Your Soul</p>
            <p className="property-hero-desc aos aos-delay-3">
              Nestled 7 km deep inside the forests of Wayanad, Jungle Park Resort offers a rare luxury rainforest experience surrounded by 900 acres of pristine wilderness.
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
              <span className="stat-value">900 Acres</span>
              <span className="stat-label">Pristine Wilderness</span>
            </div>
            <div className="stat-card aos aos-scale aos-delay-1">
              <span className="stat-value">Highest</span>
              <span className="stat-label">Resort in Wayanad</span>
            </div>
            <div className="stat-card aos aos-scale aos-delay-2">
              <span className="stat-value">Award Winner</span>
              <span className="stat-label">Presidential Honor</span>
            </div>
            <div className="stat-card aos aos-scale aos-delay-3">
              <span className="stat-value">Lake View</span>
              <span className="stat-label">Luxury Duplexes</span>
            </div>
            <div className="stat-card aos aos-scale aos-delay-4">
              <span className="stat-value">Eco Friendly</span>
              <span className="stat-label">Sustainable Design</span>
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
              <div className="section-badge">Welcome to Jungle Park</div>
              <h2 className="heading-lg text-brand-green">Experience Pristine Rainforest Luxury</h2>
              <div className="section-divider" style={{ margin: '20px 0' }} />
              <p className="body-lg text-muted-green">
                Escape into an untouched paradise. Situated 7 km inside Wayanad's deepest reserve forest, Jungle Park Resort is the highest resort in the region, boasting a sprawling 900 acres of pure forest landscape.
              </p>
              <p className="body-md text-muted-green" style={{ marginTop: '16px' }}>
                Recipient of the Presidential Award for its outstanding contribution to eco-tourism, the resort blends premium duplex accommodations with active wilderness adventure. Wake up to mist-covered lakes, chirping birds, panoramic forest valley views, and curated rainforest experiences.
              </p>
            </div>
            <div className="story-right aos-right">
              <div className="story-image-overlap">
                <img src="/images/junglepark/p22.png" alt="Jungle Park Resort canopy" className="story-img-main-large" />
                <div className="story-badge-highlight">
                  <Sparkles size={20} />
                  <span>Award-Winning Rainforest Retreat</span>
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
            <div className="section-badge">Luxury Suites</div>
            <h2 className="heading-lg" style={{ color: 'var(--white)' }}>Elegant Forest Residences</h2>
            <div className="section-divider" />
            <p style={{ color: 'var(--beige-200)' }}>Beautifully designed duplex suites overlooking the serene lake, blending premium comfort with direct nature access.</p>
          </div>

          <div className="cottages-grid">
            {/* Luxury Lakeview Duplex Suite */}
            <div className="cottage-card aos-left aos">
              <div className="cottage-image-wrap">
                <img 
                  src={luxurySuiteImages[luxuryIndex]} 
                  alt="Luxury Lakeview Duplex Suite" 
                  className="cottage-img" 
                />
                <span className="cottage-badge-tag">Luxury Suite</span>
                
                {/* Arrow navigation */}
                <button 
                  className="cottage-nav prev"
                  onClick={() => setLuxuryIndex((luxuryIndex - 1 + luxurySuiteImages.length) % luxurySuiteImages.length)}
                >
                  ‹
                </button>
                <button 
                  className="cottage-nav next"
                  onClick={() => setLuxuryIndex((luxuryIndex + 1) % luxurySuiteImages.length)}
                >
                  ›
                </button>
                
                {/* Bullet dots */}
                <div className="cottage-dots">
                  {luxurySuiteImages.map((_, idx) => (
                    <span 
                      key={idx} 
                      className={`cottage-dot ${idx === luxuryIndex ? 'active' : ''}`}
                      onClick={() => setLuxuryIndex(idx)}
                    />
                  ))}
                </div>
              </div>
              <div className="cottage-details">
                <h3 className="heading-md text-gold">Luxury Lakeview Duplex Suite</h3>
                <p className="cottage-description">
                  Experience ultimate luxury and privacy in a beautifully designed duplex suite overlooking the lake. Relax in your private bathtub, unwind in the spacious living area, and enjoy panoramic forest views.
                </p>
                <div className="cottage-meta">
                  <div className="meta-item"><Users size={16} /><span>Capacity: 2/3 Adults</span></div>
                  <div className="meta-item"><Eye size={16} /><span>Premium Lake View</span></div>
                </div>
                <div className="cottage-features-list">
                  <span className="feature-pill"><CheckCircle2 size={12} /> King Bed</span>
                  <span className="feature-pill"><CheckCircle2 size={12} /> Attic Space</span>
                  <span className="feature-pill"><CheckCircle2 size={12} /> Bathtub</span>
                  <span className="feature-pill"><CheckCircle2 size={12} /> Patio & Balcony</span>
                  <span className="feature-pill"><CheckCircle2 size={12} /> Rain Shower</span>
                </div>
                <NavLink to="/contact" className="btn-primary cottage-action-btn">
                  <span>Enquire Suite</span>
                  <ArrowRight size={16} />
                </NavLink>
              </div>
            </div>

            {/* Premium Lakeview Duplex Suite */}
            <div className="cottage-card reverse aos-right aos">
              <div className="cottage-image-wrap">
                <img 
                  src={premiumSuiteImages[premiumIndex]} 
                  alt="Premium Lakeview Duplex Suite" 
                  className="cottage-img" 
                />
                <span className="cottage-badge-tag">Premium Suite</span>
                
                {/* Arrow navigation */}
                <button 
                  className="cottage-nav prev"
                  onClick={() => setPremiumIndex((premiumIndex - 1 + premiumSuiteImages.length) % premiumSuiteImages.length)}
                >
                  ‹
                </button>
                <button 
                  className="cottage-nav next"
                  onClick={() => setPremiumIndex((premiumIndex + 1) % premiumSuiteImages.length)}
                >
                  ›
                </button>
                
                {/* Bullet dots */}
                <div className="cottage-dots">
                  {premiumSuiteImages.map((_, idx) => (
                    <span 
                      key={idx} 
                      className={`cottage-dot ${idx === premiumIndex ? 'active' : ''}`}
                      onClick={() => setPremiumIndex(idx)}
                    />
                  ))}
                </div>
              </div>
              <div className="cottage-details">
                <h3 className="heading-md text-gold">Premium Lakeview Duplex Suite</h3>
                <p className="cottage-description">
                  A comfortable, premium duplex retreat designed for couples and nature lovers seeking a peaceful forest escape. Experience stunning lakeside mornings from your private patio.
                </p>
                <div className="cottage-meta">
                  <div className="meta-item"><Users size={16} /><span>Capacity: 2 Adults</span></div>
                  <div className="meta-item"><Eye size={16} /><span>Scenic Lake View</span></div>
                </div>
                <div className="cottage-features-list">
                  <span className="feature-pill"><CheckCircle2 size={12} /> King Bed</span>
                  <span className="feature-pill"><CheckCircle2 size={12} /> Attic Space</span>
                  <span className="feature-pill"><CheckCircle2 size={12} /> Patio</span>
                  <span className="feature-pill"><CheckCircle2 size={12} /> Rain Shower</span>
                  <span className="feature-pill"><CheckCircle2 size={12} /> Living Area</span>
                </div>
                <NavLink to="/contact" className="btn-primary cottage-action-btn">
                  <span>Enquire Suite</span>
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
            <div className="section-badge">Experiences</div>
            <h2 className="heading-lg text-brand-green">Nature & Adventure Activities</h2>
            <div className="section-divider" />
            <p>Delve into the untouched beauty of Wayanad through activities designed to connect you with the wild.</p>
          </div>

          <div className="experiences-cards-grid">
            {experiences.map((exp, index) => (
              <div key={exp.title} className={`experience-card aos aos-scale aos-delay-${(index % 3) + 1}`}>
                <div className="experience-image-container">
                  <img src={exp.img} alt={exp.title} className="experience-img" loading="lazy" />
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
            <p>We operate with a deep commitment to preserving Wayanad's pristine forest ecosystem for generations to come.</p>
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
            <h2 className="heading-lg text-brand-green">Refined Resort Amenities</h2>
            <div className="section-divider" />
            <p>Every element is curated to ensure your luxury stay feels completely aligned with nature.</p>
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
            <h2 className="heading-lg text-brand-green">Resort Photo Gallery</h2>
            <div className="section-divider" />
            <p>Browse through the scenic vistas, elegant duplex interiors, and pristine lake views of Jungle Park Resort.</p>
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
