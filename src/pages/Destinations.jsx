import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { MapPin, ArrowRight, ExternalLink } from 'lucide-react';
import destinationsData from '../data/destinationsData';
import './Destinations.css';

export default function Destinations() {
  useEffect(() => {
    // Scroll observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('aos-animate');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.aos, .aos-left, .aos-right, .aos-scale').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="destinations-page">
      {/* Hero */}
      <section className="page-hero destinations-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content destinations-hero-content">
          <div className="breadcrumb aos">
            <NavLink to="/">Home</NavLink>
            <span>›</span>
            <span>Destinations</span>
          </div>
          <div className="section-badge light aos">Our Footprint</div>
          <h1 className="aos">Explore the World</h1>
          <p className="aos aos-delay-1" style={{ textAlign: 'center', maxWidth: '700px' }}>
            From the bustling cities of Asia to the serene mountains of Europe, 
            discover destinations that inspire wonder and adventure.
          </p>
        </div>
      </section>

      {/* Destination Grid */}
      <section className="section destinations-grid-section">
        <div className="container">
          <div className="destinations-grid">
            {destinationsData.map((dest, i) => (
              <NavLink 
                to={`/destinations/${dest.id}`} 
                key={dest.id} 
                className="dest-card aos aos-scale"
                style={{ '--index': i }}
              >
                <div className="dest-card-image">
                  <img 
                    src={dest.titleImage} 
                    alt={dest.name} 
                    loading="lazy" 
                    onError={(e) => {
                      e.target.src = '/images/destinations/hero.png';
                      e.target.onerror = null;
                    }}
                  />
                  <div className="dest-card-overlay">
                    <button className="explore-btn">
                      <span>Explore Packages</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
                <div className="dest-card-content">
                  <div className="dest-location">
                    <MapPin size={14} />
                    <span>Global Gateway</span>
                  </div>
                  <h3>{dest.name}</h3>
                  <p>{dest.description}</p>
                  <div className="card-footer-link">
                    <span>Discover More</span>
                    <ExternalLink size={14} />
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* Map or Global Presence Section */}
      <section className="section global-reach">
        <div className="container">
          <div className="cta-inner aos">
            <div className="cta-content">
              <h2 className="heading-lg" style={{ color: 'var(--white)' }}>Didn't Find Your Dream Place?</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                We customize packages for over 100+ locations worldwide. 
                Talk to our travel experts to craft your unique journey.
              </p>
            </div>
            <div className="cta-actions">
              <NavLink to="/contact" className="btn-gold">
                <span>Request Custom Quote</span>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
