import { useEffect, useState } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { 
  MapPin, Clock, Calendar, Star, CheckCircle2, 
  ArrowLeft, ArrowRight, Plane, Coffee, Camera, Sunset, 
  Palmtree, Waves, Mountain, Landmark
} from 'lucide-react';
import destinationsData from '../data/destinationsData';
import './DestinationDetail.css';

const IconMap = {
    "Nature": <Mountain size={18} />,
    "Beaches": <Waves size={18} />,
    "Culture": <Landmark size={18} />,
    "Luxury": <Star size={18} />,
    "Adventure": <Mountain size={18} />,
    "Wildlife": <Palmtree size={18} />,
    "Food Tourism": <Coffee size={18} />
};

export default function DestinationDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dest, setDest] = useState(null);

  useEffect(() => {
    const found = destinationsData.find(d => d.id === id);
    if (found) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDest(found);
    } else {
      navigate('/destinations'); // Redirect back if not found
    }
  }, [id, navigate]);

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);
    
    // Intersection observer for section animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('aos-animate');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.aos, .aos-left, .aos-right').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [dest]);

  if (!dest) return <div className="loading-state">Loading Destination...</div>;

  return (
    <div className="destination-detail-page">
      {/* 1. Hero Section */}
      <section className="dest-detail-hero">
        <div className="dest-detail-hero-bg" style={{ backgroundImage: `url(${dest.titleImage})` }} />
        <div className="dest-detail-hero-overlay" />
        <div className="container">
          <NavLink to="/destinations" className="back-link">
            <ArrowLeft size={18} />
            <span>All Destinations</span>
          </NavLink>
          <div className="dest-detail-hero-content">
            <h1 className="aos">{dest.name}</h1>
            <p className="aos aos-delay-1">{dest.tagline}</p>
            <div className="dest-hero-badges aos aos-delay-2">
              <span className="hero-badge"><Calendar size={14}/> Best Time: {dest.bestTime}</span>
              <span className="hero-badge"><Plane size={14}/> Top Destination</span>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="mouse-icon" />
        </div>
      </section>

      {/* 2. About the Destination */}
      <section className="section about-dest-section">
        <div className="container">
          <div className="about-dest-grid">
            <div className="about-dest-info aos-left">
              <div className="section-badge">Welcome to {dest.name}</div>
              <h2 className="heading-lg">Discover the Magic</h2>
              <div className="section-divider" />
              <p className="body-lg">{dest.description}</p>
              <p className="body-md">{dest.aboutText}</p>
              
              {/* 5. Travel Experiences */}
              <div className="travel-exp-grid">
                {dest.experiences.map((exp) => (
                  <div key={exp} className="exp-tag">
                    {IconMap[exp] || <CheckCircle2 size={16} />}
                    <span>{exp}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="about-dest-stats aos-right">
              <div className="dest-stat-card">
                  <h3>Best Time to Visit</h3>
                  <p>{dest.bestTime}</p>
                  <Calendar className="stat-icon" size={32} />
              </div>
              <div className="dest-stat-card gold">
                  <h3>Ideal Trip Length</h3>
                  <p>5 – 10 Days</p>
                  <Clock className="stat-icon" size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Top Attractions */}
      <section className="section attractions-section">
        <div className="container">
          <div className="section-header aos">
            <div className="section-badge">Iconic Landmarks</div>
            <h2 className="heading-lg">Top Attractions</h2>
          </div>
          <div className="attractions-grid">
            {dest.attractions.map((attr, i) => (
              <div key={attr.name} className={`attraction-card aos aos-delay-${i + 1}`}>
                <div className="attr-image">
                  <img src={attr.img} alt={attr.name} loading="lazy" />
                  <div className="attr-overlay">
                    <span>Explore <ArrowRight size={14} /></span>
                  </div>
                </div>
                <div className="attr-content">
                    <h4>{attr.name}</h4>
                    <p>Must-visit landmark in {dest.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Key Activities */}
      <section className="section activities-section">
        <div className="container">
          <div className="activities-inner">
            <div className="activities-image aos-left">
                <img src={dest.gallery[0]} alt="Activities" />
                <div className="activity-overlay-badge">
                   <strong>10+</strong> Experiences
                </div>
            </div>
            <div className="activities-content aos-right">
               <div className="section-badge">To-Do List</div>
               <h2 className="heading-lg">Key Activities</h2>
               <div className="section-divider" />
               <ul className="activities-list">
                  {dest.activities.map((act) => (
                    <li key={act}>
                      <CheckCircle2 size={18} className="list-icon" />
                      <span>{act}</span>
                    </li>
                  ))}
               </ul>
               <NavLink to="/contact" className="btn-gold">
                  <span>Inquire Now</span>
               </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Image Gallery */}
      <section className="section gallery-section">
        <div className="container">
            <div className="section-header aos">
                <div className="section-badge light">Visual Journey</div>
                <h2 className="heading-lg" style={{ color: 'var(--white)' }}>From the Lens</h2>
            </div>
            <div className="detail-gallery-grid">
                {dest.gallery.map((img, i) => (
                  <div key={i} className={`gallery-item aos aos-delay-${i + 1}`}>
                    <img src={img} alt={`${dest.name} gallery ${i}`} loading="lazy" />
                  </div>
                ))}
            </div>
        </div>
      </section>

      {/* 8. Available Packages */}
      <section className="section packages-preview">
        <div className="container">
            <div className="section-header aos">
                <div className="section-badge">Ready to Go?</div>
                <h2 className="heading-lg">Available Packages</h2>
                <div className="section-divider" />
            </div>
            <div className="detail-packages-grid">
                {dest.packages.map((pkg, i) => (
                  <div key={pkg.name} className={`detail-package-card aos aos-delay-${i + 1}`}>
                    <div className="pkg-tag">Luxury Package</div>
                    <div className="pkg-body">
                      <h3>{pkg.name}</h3>
                      <div className="pkg-meta">
                        <Star size={14} fill="#c9a84c" color="#c9a84c" />
                        <Star size={14} fill="#c9a84c" color="#c9a84c" />
                        <Star size={14} fill="#c9a84c" color="#c9a84c" />
                        <Star size={14} fill="#c9a84c" color="#c9a84c" />
                        <Star size={14} fill="#c9a84c" color="#c9a84c" />
                      </div>
                      <div className="pkg-details">
                        <span><Clock size={14}/> {pkg.duration}</span>
                        <span><MapPin size={14}/> Inclusive of Flights</span>
                      </div>
                    </div>
                    <div className="pkg-price-row">
                      <div className="price-label">Starting from</div>
                      <div className="price-val">{pkg.price}</div>
                      <NavLink to="/contact" className="btn-primary">
                        <span>Book Now</span>
                      </NavLink>
                    </div>
                  </div>
                ))}
            </div>
        </div>
      </section>

      {/* 9. Call to Action */}
      <section className="dest-footer-cta section">
        <div className="container">
          <div className="dest-cta-card aos">
              <div className="cta-overlay" />
              <div className="cta-content">
                  <h2>Plan Your {dest.name} Odyssey</h2>
                  <p>Our travel experts are ready to personalize every detail of your journey to {dest.name}.</p>
                  <div className="cta-btns">
                    <NavLink to="/contact" className="btn-gold">
                      <span>Book Now</span>
                    </NavLink>
                    <NavLink to="/services" className="btn-outline-white">
                      <span>View All Packages</span>
                    </NavLink>
                  </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}
