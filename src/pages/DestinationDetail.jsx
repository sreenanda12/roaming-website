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
                  <img 
                    src={attr.img} 
                    alt={attr.name} 
                    loading="lazy" 
                    onError={(e) => {
                      e.target.src = '/images/destinations/hero.png';
                      e.target.onerror = null;
                    }}
                  />
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

    </div>
  );
}
