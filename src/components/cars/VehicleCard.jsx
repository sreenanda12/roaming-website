import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import './VehicleCard.css';

const formatINR = (n) =>
  '₹' + n.toLocaleString('en-IN');

export default function VehicleCard({ vehicle, index = 0 }) {
  const navigate = useNavigate();
  const [imgIdx, setImgIdx] = useState(0);
  const hasMultiple = vehicle.images.length > 1;

  const prev = useCallback(
    (e) => {
      e.stopPropagation();
      setImgIdx((i) => (i - 1 + vehicle.images.length) % vehicle.images.length);
    },
    [vehicle.images.length]
  );

  const next = useCallback(
    (e) => {
      e.stopPropagation();
      setImgIdx((i) => (i + 1) % vehicle.images.length);
    },
    [vehicle.images.length]
  );

  const handleCardClick = () => {
    navigate(`/services/car-rentals/${vehicle.slug}`);
  };

  const handleViewDetails = (e) => {
    e.stopPropagation();
    navigate(`/services/car-rentals/${vehicle.slug}`);
  };

  const delayClass = `vc-delay-${(index % 4) + 1}`;

  return (
    <article
      className={`vehicle-card aos aos-scale ${delayClass}`}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
      aria-label={`View details for ${vehicle.name}`}
    >
      {/* ── Image + Carousel ── */}
      <div className="vc-img-wrap">
        {vehicle.images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${vehicle.name} — view ${i + 1}`}
            className={`vc-img ${i === imgIdx ? 'vc-img-active' : ''}`}
            loading={index < 4 ? 'eager' : 'lazy'}
          />
        ))}

        {/* Category label */}
        <div className="vc-category-label">{vehicle.category}</div>

        {/* Carousel controls */}
        {hasMultiple && (
          <>
            <button
              className="vc-arrow vc-arrow-prev"
              onClick={prev}
              aria-label="Previous image"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              className="vc-arrow vc-arrow-next"
              onClick={next}
              aria-label="Next image"
            >
              <ChevronRight size={16} />
            </button>

            {/* Dot indicators */}
            <div className="vc-dots">
              {vehicle.images.map((_, i) => (
                <button
                  key={i}
                  className={`vc-dot ${i === imgIdx ? 'vc-dot-active' : ''}`}
                  onClick={(e) => { e.stopPropagation(); setImgIdx(i); }}
                  aria-label={`Image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Gradient overlay */}
        <div className="vc-overlay" />
      </div>

      {/* ── Card Body ── */}
      <div className="vc-body">
        {/* Specs row */}
        <div className="vc-specs-row">
          <span>{vehicle.year}</span>
          <span className="vc-dot-sep">·</span>
          <span>{vehicle.transmission}</span>
          <span className="vc-dot-sep">·</span>
          <span>{vehicle.driveType}</span>
        </div>

        {/* Name */}
        <h3 className="vc-name">{vehicle.name}</h3>

        {/* Pricing */}
        <div className="vc-pricing">
          <div className="vc-price-primary">
            {formatINR(vehicle.price4to7)}
            <span className="vc-price-unit"> / day</span>
          </div>
          <div className="vc-price-secondary">
            {formatINR(vehicle.price8Plus)} / day from 8 days
          </div>
        </div>

        {/* Footer */}
        <div className="vc-footer">
          <button className="vc-details-btn" onClick={handleViewDetails}>
            View Details
            <ArrowRight size={14} className="vc-arrow-icon" />
          </button>
        </div>
      </div>
    </article>
  );
}
