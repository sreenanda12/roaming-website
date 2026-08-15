import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './VehicleCard.css';

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
    navigate(`/services/car-rentals/${vehicle.id}`);
  };

  const handleViewDetails = (e) => {
    e.stopPropagation();
    navigate(`/services/car-rentals/${vehicle.id}`);
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
          </>
        )}

        {/* Dot indicators (always show if multiple or just use preview if 1, but we have 1 image per car now) */}
        {hasMultiple ? (
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
        ) : (
          <div className="vc-dots">
             <button className="vc-dot vc-dot-active" />
             <button className="vc-dot" />
             <button className="vc-dot" />
             <button className="vc-dot" />
             <button className="vc-dot" />
          </div>
        )}

        {/* Gradient overlay */}
        <div className="vc-overlay" />
      </div>

      {/* ── Card Body ── */}
      <div className="vc-body">
        <h3 className="vc-name">{vehicle.name}</h3>

        {/* Specs row */}
        <div className="vc-specs-row">
          <span>{vehicle.year}</span>
          <span className="vc-dot-sep">·</span>
          <span>{vehicle.transmission}</span>
          <span className="vc-dot-sep">·</span>
          <span>{vehicle.drivetrain}</span>
        </div>

        {/* Footer Pricing & Button */}
        <div className="vc-footer">
          <div className="vc-pricing">
            <div className="vc-price-primary">
              {vehicle.price4to7}$ <span className="vc-price-unit">/ daily for 4 - 7 days</span>
            </div>
            <div className="vc-price-secondary">
              {vehicle.price8Plus}$ from 8 days
            </div>
          </div>
          <button className="vc-details-btn" onClick={handleViewDetails}>
            View details
          </button>
        </div>
      </div>
    </article>
  );
}
