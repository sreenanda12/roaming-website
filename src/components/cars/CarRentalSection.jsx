import { useState, useEffect, useCallback } from 'react';
import carsData, { carCategories } from '../../data/carsData';
import VehicleCard from './VehicleCard';
import './CarRentalSection.css';

export default function CarRentalSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [displayed, setDisplayed] = useState(carsData);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFilter = useCallback((cat) => {
    if (cat === activeCategory) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCategory(cat);
      setDisplayed(cat === 'All' ? carsData : carsData.filter((c) => c.category === cat));
      setIsAnimating(false);
    }, 200);
  }, [activeCategory]);

  // Re-observe AOS elements after filter change
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const observer = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('aos-animate'); }),
        { threshold: 0, rootMargin: '50px' }
      );
      document.querySelectorAll('.vehicle-card').forEach((el) => {
        if (!el.classList.contains('aos-animate')) observer.observe(el);
      });
      document.querySelectorAll('.vehicle-card').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('aos-animate');
      });
      return () => observer.disconnect();
    });
    return () => cancelAnimationFrame(raf);
  }, [activeCategory]);

  const totalCount = carsData.length;

  return (
    <div className="car-rental-section">
      {/* ── Fleet Introduction ── */}
      <div className="fleet-intro aos">
        <div className="fleet-eyebrow">
          <span className="fleet-eyebrow-text">FLEET</span>
          <span className="fleet-eyebrow-line" aria-hidden="true" />
        </div>
        <h2 className="fleet-heading heading-lg">Premium Car Rentals</h2>
        <p className="fleet-tagline">
          Drive comfortably. Travel confidently.
        </p>
        <p className="fleet-sub">
          From elegant sedans and spacious SUVs to premium BMWs and open-top convertibles,
          choose the vehicle that fits your journey.
        </p>

        {/* Signature stats strip */}
        <div className="fleet-stats">
          <span>{totalCount} Premium Vehicles</span>
          <span className="fleet-stats-sep">·</span>
          <span>Airport Delivery</span>
          <span className="fleet-stats-sep">·</span>
          <span>Insurance Included</span>
          <span className="fleet-stats-sep">·</span>
          <span>Premium Service</span>
        </div>
      </div>

      {/* ── Category Filter ── */}
      <div className="fleet-filter-bar aos">
        {carCategories.map((cat) => (
          <button
            key={cat}
            className={`fleet-filter-btn${activeCategory === cat ? ' fleet-filter-active' : ''}`}
            onClick={() => handleFilter(cat)}
            aria-pressed={activeCategory === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── Vehicle Grid ── */}
      <div className={`fleet-grid${isAnimating ? ' fleet-grid-hide' : ''}`}>
        {displayed.map((vehicle, i) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} index={i} />
        ))}
      </div>
    </div>
  );
}
