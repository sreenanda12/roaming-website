import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import {
  ChevronLeft, ChevronRight, ChevronRight as BreadcrumbArrow,
  Users, Fuel, Zap, Gauge, Briefcase, Wind,
  Check, ArrowRight, Calendar
} from 'lucide-react';
import { carsBySlug, getSimilarCars } from '../data/carsData';
import './VehicleDetail.css';

const WHATSAPP_NUMBER = '917204370369';

const formatUSD = (n) => n + '$';

const formatDate = (dateStr) => {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' });
};

const daysBetween = (from, to) => {
  if (!from || !to) return 0;
  const diff = new Date(to) - new Date(from);
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
};

const specIcons = {
  fuel: <Fuel size={16} />,
  drive: <Gauge size={16} />,
  transmission: <Zap size={16} />,
  seats: <Users size={16} />,
  power: <Zap size={16} />,
  topSpeed: <Gauge size={16} />,
  luggage: <Briefcase size={16} />,
  ac: <Wind size={16} />,
};

const specLabels = {
  fuel: 'Fuel',
  drive: 'Drive',
  transmission: 'Transmission',
  seats: 'Seats',
  power: 'Power',
  topSpeed: 'Top Speed',
  luggage: 'Luggage',
  ac: 'Air Conditioning',
};

export default function VehicleDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const vehicle = carsBySlug[slug];

  const [mainImg, setMainImg] = useState(0);
  const [galleryImg, setGalleryImg] = useState(0);
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [mileage, setMileage] = useState('');
  const [addons, setAddons] = useState([]);
  const [showAllPhotos, setShowAllPhotos] = useState(false);


  const similarCars = vehicle ? getSimilarCars(vehicle, 4) : [];

  // Reset state when slug changes
  useEffect(() => {
    setMainImg(0);
    setGalleryImg(0);
    setPickupDate('');
    setReturnDate('');
    setMileage(vehicle?.mileageOptions?.[0] || '');
    setAddons([]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug, vehicle]);

  // AOS observer
  useEffect(() => {
    const timer = setTimeout(() => {
      const obs = new IntersectionObserver(
        (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('aos-animate'); }),
        { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
      );
      document.querySelectorAll('.vd-aos').forEach((el) => obs.observe(el));
      return () => obs.disconnect();
    }, 100);
    return () => clearTimeout(timer);
  }, [slug]);

  if (!vehicle) {
    return (
      <div className="vd-not-found">
        <h2>Vehicle not found</h2>
        <p>The vehicle you're looking for doesn't exist or the URL may be incorrect.</p>
        <button className="btn-primary" onClick={() => navigate('/services')}>
          Back to Services
        </button>
      </div>
    );
  }

  // Pricing
  const days = daysBetween(pickupDate, returnDate);
  const dailyRate = days >= 8 ? vehicle.price8Plus : vehicle.price4to7;
  const totalAmount = days > 0 ? days * dailyRate : null;

  const prevImg = () => setGalleryImg((i) => (i - 1 + vehicle.images.length) % vehicle.images.length);
  const nextImg = () => setGalleryImg((i) => (i + 1) % vehicle.images.length);

  const toggleAddon = (addon) => {
    setAddons((prev) =>
      prev.includes(addon) ? prev.filter((a) => a !== addon) : [...prev, addon]
    );
  };



  const buildWAMessage = () => {
    let msg = `Hello, I am interested in renting the ${vehicle.name}`;
    if (pickupDate) msg += ` from ${formatDate(pickupDate)}`;
    if (returnDate) msg += ` to ${formatDate(returnDate)}`;
    if (days > 0) msg += ` (${days} day${days > 1 ? 's' : ''})`;
    if (mileage) msg += `. Mileage: ${mileage}`;
    if (addons.length) msg += `. Add-ons: ${addons.join(', ')}`;
    msg += '. Please share availability and booking details.';
    return encodeURIComponent(msg);
  };

  // Gallery images to display (up to 3 for desktop layout)
  const galleryImages = vehicle.images.slice(0, 3);

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="vehicle-detail-page">

      {/* ── Breadcrumb ── */}
      <div className="vd-breadcrumb-bar">
        <div className="container">
          <nav className="vd-breadcrumb" aria-label="Breadcrumb">
            <NavLink to="/" className="vd-bc-link">Home</NavLink>
            <BreadcrumbArrow size={13} className="vd-bc-sep" />
            <NavLink to="/services" className="vd-bc-link">Services</NavLink>
            <BreadcrumbArrow size={13} className="vd-bc-sep" />
            <NavLink to="/services" className="vd-bc-link" onClick={(e) => { e.preventDefault(); navigate('/services', { state: { tab: 'cars' } }); }}>Car Rentals</NavLink>
            <BreadcrumbArrow size={13} className="vd-bc-sep" />
            <span className="vd-bc-current">{vehicle.name}</span>
          </nav>
        </div>
      </div>

      {/* ── Hero Title ── */}
      <div className="vd-hero-title container vd-aos">
        <div className="vd-title-main">
          <div className="vd-category-pill">{vehicle.category}</div>
          <h1 className="vd-vehicle-name heading-lg">{vehicle.name}</h1>
          <div className="vd-vehicle-sub">
            {vehicle.year} · {vehicle.transmission} · {vehicle.driveType}
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="container vd-main-layout">

        {/* ── Left: Gallery + Specs + Description ── */}
        <div className="vd-left">

          {/* Gallery */}
          <div className={`vd-gallery vd-aos${vehicle.images.length === 1 ? ' single-image' : ''}`}>
            {/* Main large image */}
            <div className="vd-gallery-main" onClick={() => setShowAllPhotos(true)}>
              <img
                src={galleryImages[galleryImg]}
                alt={`${vehicle.name} — main view`}
                className="vd-gallery-main-img"
              />
              {vehicle.images.length > 1 && (
                <>
                  <button className="vd-gallery-prev" onClick={(e) => { e.stopPropagation(); prevImg(); }} aria-label="Previous">
                    <ChevronLeft size={20} />
                  </button>
                  <button className="vd-gallery-next" onClick={(e) => { e.stopPropagation(); nextImg(); }} aria-label="Next">
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails column */}
            {galleryImages.length > 1 && (
              <div className="vd-gallery-thumbs">
                {galleryImages.slice(1).map((src, i) => (
                  <div
                    key={i}
                    className={`vd-gallery-thumb${galleryImg === i + 1 ? ' vd-thumb-active' : ''}`}
                    onClick={() => setGalleryImg(i + 1)}
                  >
                    <img src={src} alt={`${vehicle.name} — view ${i + 2}`} loading="lazy" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Dot indicators */}
          {vehicle.images.length > 1 && (
            <div className="vd-gallery-dots">
              {vehicle.images.map((_, i) => (
                <button
                  key={i}
                  className={`vd-gallery-dot${galleryImg === i ? ' vd-gallery-dot-active' : ''}`}
                  onClick={() => setGalleryImg(i)}
                  aria-label={`Image ${i + 1}`}
                />
              ))}
            </div>
          )}

          {/* Specification Bar */}
          <div className="vd-specs-bar vd-aos">
            <h3 className="vd-section-title">Specifications</h3>
            <div className="vd-specs-grid">
              {Object.entries(vehicle.specs).map(([key, val]) => {
                if (key === 'ac') {
                  return (
                    <div key={key} className="vd-spec-item">
                      <span className="vd-spec-icon">{specIcons[key]}</span>
                      <div>
                        <div className="vd-spec-label">{specLabels[key]}</div>
                        <div className="vd-spec-value">{val ? 'Yes' : 'No'}</div>
                      </div>
                    </div>
                  );
                }
                return (
                  <div key={key} className="vd-spec-item">
                    <span className="vd-spec-icon">{specIcons[key]}</span>
                    <div>
                      <div className="vd-spec-label">{specLabels[key]}</div>
                      <div className="vd-spec-value">{key === 'seats' ? `${val} seats` : val}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Description */}
          <div className="vd-description vd-aos">
            <h3 className="vd-section-title">About this vehicle</h3>
            <p className="vd-description-text">{vehicle.description}</p>
          </div>

          {/* Features */}
          {vehicle.features?.length > 0 && (
            <div className="vd-features vd-aos">
              <h3 className="vd-section-title">Included in your rental</h3>
              <div className="vd-features-grid">
                {vehicle.features.map((f) => (
                  <div key={f} className="vd-feature-item">
                    <Check size={15} className="vd-feature-check" />
                    <span>{f}</span>
                  </div>
                ))}
                <div className="vd-feature-item">
                  <Check size={15} className="vd-feature-check" />
                  <span>Air Conditioning</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── Right: Rental Configurator ── */}
        <div className="vd-right">
          <div className="vd-configurator">
            <h3 className="vd-config-heading">Configure Your Rental</h3>

            {/* Pricing display */}
            <div className="vd-config-price-wrap">
              <div className="vd-config-price">
                {formatUSD(vehicle.price4to7)}
                <span className="vd-config-price-unit"> / day</span>
              </div>
              <div className="vd-config-price-alt">
                {formatUSD(vehicle.price8Plus)} / day from 8 days
              </div>
            </div>

            {/* Dates */}
            <div className="vd-config-field">
              <label className="vd-config-label" htmlFor="pickup-date">
                <Calendar size={14} /> Pick-up Date
              </label>
              <input
                id="pickup-date"
                type="date"
                className="vd-config-input"
                min={today}
                value={pickupDate}
                onChange={(e) => {
                  setPickupDate(e.target.value);
                  if (returnDate && e.target.value >= returnDate) setReturnDate('');
                }}
              />
            </div>

            <div className="vd-config-field">
              <label className="vd-config-label" htmlFor="return-date">
                <Calendar size={14} /> Return Date
              </label>
              <input
                id="return-date"
                type="date"
                className="vd-config-input"
                min={pickupDate || today}
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                disabled={!pickupDate}
              />
            </div>

            {/* Mileage */}
            <div className="vd-config-field">
              <label className="vd-config-label">Mileage Package</label>
              <div className="vd-mileage-options">
                {(vehicle.mileageOptions || []).map((opt) => (
                  <button
                    key={opt}
                    className={`vd-mileage-btn${mileage === opt ? ' vd-mileage-active' : ''}`}
                    onClick={() => setMileage(opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Add-ons */}
            {vehicle.addons?.length > 0 && (
              <div className="vd-config-field">
                <label className="vd-config-label">Add-ons</label>
                <div className="vd-addons">
                  {vehicle.addons.map((addon) => (
                    <button
                      key={addon}
                      className={`vd-addon-btn${addons.includes(addon) ? ' vd-addon-active' : ''}`}
                      onClick={() => toggleAddon(addon)}
                    >
                      {addons.includes(addon) && <Check size={12} />}
                      {addon}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Dynamic price breakdown */}
            {totalAmount && (
              <div className="vd-price-breakdown">
                <div className="vd-breakdown-row">
                  <span>{days} day{days > 1 ? 's' : ''} × {formatUSD(dailyRate)}</span>
                </div>
                <div className="vd-breakdown-total">
                  <span>Estimated Total</span>
                  <span>{formatUSD(totalAmount)}</span>
                </div>
              </div>
            )}

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${buildWAMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="vd-wa-btn"
              id="enquire-whatsapp-btn"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              ENQUIRE ON WHATSAPP
            </a>

            <NavLink to="/contact" className="vd-contact-link">
              Or contact us directly <ArrowRight size={13} />
            </NavLink>
          </div>
        </div>
      </div>

      {/* ── Similar Cars ── */}
      {similarCars.length > 0 && (
        <section className="vd-similar-section">
          <div className="container">
            <div className="vd-similar-header vd-aos">
              <div className="fleet-eyebrow" style={{ justifyContent: 'flex-start', marginBottom: '12px' }}>
                <span className="fleet-eyebrow-text">EXPLORE MORE</span>
                <span className="fleet-eyebrow-line" aria-hidden="true" />
              </div>
              <h2 className="vd-similar-heading heading-md">Similar Cars</h2>
              <p className="vd-similar-sub">You may also like these vehicles for your journey.</p>
            </div>

            <div className="vd-similar-grid">
              {similarCars.map((car) => (
                <div
                  key={car.id}
                  className="vd-similar-card vd-aos"
                  onClick={() => navigate(`/services/car-rentals/${car.id}`)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && navigate(`/services/car-rentals/${car.id}`)}
                  aria-label={`View ${car.name}`}
                >
                  <div className="vd-similar-img-wrap">
                    <img src={car.images[0]} alt={car.name} loading="lazy" className="vd-similar-img" />
                    <div className="vd-similar-category">{car.category}</div>
                    <div className="vd-similar-overlay" />
                  </div>
                  <div className="vd-similar-body">
                    <div className="vd-similar-meta">{car.year} · {car.transmission}</div>
                    <h3 className="vd-similar-name">{car.name}</h3>
                    <div className="vd-similar-price">
                      {formatUSD(car.price4to7)} <span>/day</span>
                    </div>
                    <div className="vd-similar-cta">
                      View Details <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Contact CTA ── */}
      <section className="vd-contact-cta">
        <div className="container">
          <div className="vd-contact-cta-inner vd-aos">
            <div>
              <h3 className="heading-md vd-cta-heading">Need help choosing your ride?</h3>
              <p className="vd-cta-text">
                Our Roaming Directions team is happy to help you select the right vehicle for your journey.
              </p>
            </div>
            <div className="vd-cta-btns">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello, I need help choosing a rental vehicle. Could you please guide me?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="vd-wa-btn-outline"
                id="contact-cta-whatsapp-btn"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                ENQUIRE ON WHATSAPP
              </a>
              <NavLink to="/contact" className="btn-primary" id="contact-cta-contact-btn">
                <span>CONTACT US</span>
                <ArrowRight size={16} />
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full-Screen Photo Overlay ── */}
      {showAllPhotos && (
        <div className="vd-lightbox" onClick={() => setShowAllPhotos(false)}>
          <button className="vd-lightbox-close" onClick={() => setShowAllPhotos(false)} aria-label="Close">✕</button>
          <button className="vd-lightbox-prev" onClick={(e) => { e.stopPropagation(); setMainImg((i) => (i - 1 + vehicle.images.length) % vehicle.images.length); }} aria-label="Previous">
            <ChevronLeft size={28} />
          </button>
          <div className="vd-lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
            <img src={vehicle.images[mainImg]} alt={vehicle.name} className="vd-lightbox-img" />
          </div>
          <button className="vd-lightbox-next" onClick={(e) => { e.stopPropagation(); setMainImg((i) => (i + 1) % vehicle.images.length); }} aria-label="Next">
            <ChevronRight size={28} />
          </button>
          <div className="vd-lightbox-dots">
            {vehicle.images.map((_, i) => (
              <button
                key={i}
                className={`vd-lightbox-dot${mainImg === i ? ' active' : ''}`}
                onClick={(e) => { e.stopPropagation(); setMainImg(i); }}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Mobile sticky CTA */}
      <div className="vd-mobile-sticky">
        <div className="vd-mobile-sticky-price">
          <span className="vd-ms-price">{formatUSD(vehicle.price4to7)}</span>
          <span className="vd-ms-unit">/day</span>
        </div>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${buildWAMessage()}`}
          target="_blank"
          rel="noopener noreferrer"
          className="vd-wa-btn vd-ms-wa-btn"
          id="mobile-enquire-whatsapp-btn"
        >
          ENQUIRE ON WHATSAPP
        </a>
      </div>

    </div>
  );
}
