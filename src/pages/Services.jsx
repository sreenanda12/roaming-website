import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    Globe, Car, Home as HomeIcon, Star, MapPin, ArrowRight,
    Clock, Users, Wifi, Coffee, Zap, Shield
} from 'lucide-react';
import './Services.css';

const tabs = [
    { id: 'tourism', label: 'International Tourism', icon: <Globe size={18} /> },
    { id: 'cars', label: 'Car Rentals', icon: <Car size={18} /> },
    { id: 'property', label: 'Property Booking', icon: <HomeIcon size={18} /> },
];

const packages = [
    {
        id: 7,
        name: 'Enchanting Georgia Escape',
        country: 'Georgia 🇬🇪',
        price: 'Contact for Price',
        duration: '6 Days / 5 Nights',
        rating: 4.9,
        reviews: 184,
        tag: 'NEW',
        img: '/images/destinations/georgia.jpg',
        highlights: ['Tbilisi Tour', 'Mtskheta', 'Kazbegi', 'Wine Tasting', 'Kutaisi', 'Prometheus Cave'],
        isGeorgia: true,
    },
    {
        id: 8,
        name: 'Majestic Kazakhstan Adventure',
        country: 'Kazakhstan 🇰🇿',
        price: 'Choose Package',
        duration: '5 Days / 4 Nights',
        rating: 4.8,
        reviews: 216,
        tag: 'POPULAR',
        img: '/images/destinations/kazakhstan.jpg',
        highlights: ['Charyn Canyon', 'Kolsai Lake', 'Kaindy Lake', 'Shymbulak', 'Koktobe', 'Almarasan Gorge'],
        isKazakhstan: true,
    },
];

const cars = [
    {
        id: 1,
        name: 'Mercedes-Benz E-Class',
        type: 'Luxury Sedan',
        price: '₹4,999/day',
        capacity: '4 Persons',
        features: ['AC', 'GPS', 'WiFi', 'Chauffeur'],
        img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80',
        tag: 'Luxury',
    },
    {
        id: 2,
        name: 'Toyota Fortuner',
        type: 'SUV / Family',
        price: '₹3,499/day',
        capacity: '7 Persons',
        features: ['AC', 'GPS', 'Spacious', 'Roof Rack'],
        img: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80',
        tag: 'Family',
    },
    {
        id: 3,
        name: 'Hyundai Creta',
        type: 'Self Drive',
        price: '₹1,799/day',
        capacity: '5 Persons',
        features: ['AC', 'Fuel Efficient', 'Easy Drive', 'Music'],
        img: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80',
        tag: 'Self Drive',
    },
    {
        id: 4,
        name: 'Airport Shuttle',
        type: 'Transfer Service',
        price: '₹999/trip',
        capacity: '8 Persons',
        features: ['Punctual', 'AC', 'Meet & Greet', 'Fixed Price'],
        img: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=600&q=80',
        tag: 'Transfer',
    },
];

const properties = [
    {
        id: 5,
        name: 'Élam Munnar',
        location: 'Letchmi Estate, Munnar, Kerala',
        type: 'LUXURY MOUNTAIN RETREAT',
        price: 'Contact for Price',
        rating: '4.9+',
        amenities: [<Wifi size={14} />, <Coffee size={14} />, <Shield size={14} />, <Users size={14} />],
        img: '/images/elam/p1.jpeg',
        tag: 'FEATURED',
        isElam: true,
    },
    {
        id: 6,
        name: 'Old Kent Estates & Spa Coorg',
        location: 'Madikeri, Coorg, Karnataka',
        type: 'HERITAGE PLANTATION RESORT',
        price: 'Contact for Price',
        rating: '4.9+',
        amenities: [<Wifi size={14} />, <Coffee size={14} />, <Shield size={14} />, <Users size={14} />],
        img: '/images/oldkent/oldkentestates.jpg',
        tag: 'HERITAGE LUXURY',
        isOldKent: true,
    },
];

const tagColors = {
    'Best Seller': '#19351c',
    'Premium': '#c9a84c',
    'Popular': '#19351c',
    'Value Pick': '#19351c',
    'Signature': '#6b4a36',
    'Ultra Luxury': '#a07550',
    'Luxury': '#c9a84c',
    'Family': '#19351c',
    'Self Drive': '#19351c',
    'Transfer': '#19351c',
    'Top Rated': '#19351c',
    'Best Value': '#19351c',
    '5-Star': '#c9a84c',
    'NEW': '#19351c',
    'POPULAR': '#19351c',
    'FEATURED': '#c9a84c',
    'HERITAGE LUXURY': '#8f6835',
};



export default function Services() {
    const [activeTab, setActiveTab] = useState('tourism');
    const navigate = useNavigate();

    const handlePropertyClick = (e, prop) => {
        if (e.target.closest('a') || e.target.closest('button')) return;
        if (prop.isElam) {
            navigate('/properties/elam-munnar');
        } else if (prop.isOldKent) {
            navigate('/properties/old-kent-estates-coorg');
        }
    };

    const handleCardClick = (e, pkg) => {
        // Prevent click if we clicked a link or button
        if (e.target.closest('a') || e.target.closest('button')) return;
        
        if (pkg.isGeorgia) {
            window.open('/international/georgia', '_blank');
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (e.isIntersecting) e.target.classList.add('aos-animate');
            }),
            { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
        );
        document.querySelectorAll('.aos, .aos-left, .aos-right, .aos-scale')
            .forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [activeTab]);

    return (
        <div className="services-page">
            {/* Hero */}
            <section className="page-hero services-hero">
                <div className="page-hero-overlay" />
                <div className="container page-hero-content">
                    <div className="section-badge light">What We Offer</div>
                    <h1>Our Premium Services</h1>
                    <p>
                        International tourism, luxury car rentals, and premium property bookings —
                        all in one place, all crafted to perfection.
                    </p>
                </div>
            </section>

            {/* ===== TABS ===== */}
            <section className="tabs-section">
                <div className="container">
                    <div className="tabs-wrap">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`tab-btn ${activeTab === tab.id ? 'tab-active' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TOURISM ===== */}
            {activeTab === 'tourism' && (
                <section className="section content-section" key="tourism">
                    <div className="container">
                        <div className="section-header aos">
                            <div className="section-badge">🌍 Signature International Experiences</div>
                            <h2 className="heading-lg">International Tourism Packages</h2>
                            <div className="section-divider" />
                            <p>
                                Discover extraordinary journeys across breathtaking landscapes, rich cultures, and unforgettable adventures with our handpicked international tour packages.
                            </p>
                        </div>
                        <div className="packages-grid">
                            {packages.map((pkg, i) => (
                                <div 
                                    key={pkg.id} 
                                    className={`pkg-card aos aos-scale aos-delay-${(i % 3) + 1}`}
                                    onClick={(e) => handleCardClick(e, pkg)}
                                    style={{ cursor: pkg.isGeorgia ? 'pointer' : 'default' }}
                                >
                                    <div className="pkg-img-wrap">
                                        <img src={pkg.img} alt={pkg.name} className="pkg-img" loading="lazy" />
                                        <div className="pkg-overlay" />
                                        <div
                                            className="pkg-tag"
                                            style={{ background: tagColors[pkg.tag] || '#19351c' }}
                                        >
                                            {pkg.tag}
                                        </div>
                                        <div className="pkg-rating">
                                            <Star size={12} fill="#c9a84c" color="#c9a84c" />
                                            <span>{pkg.rating}</span>
                                            <span style={{ opacity: 0.65 }}>({pkg.reviews})</span>
                                        </div>
                                    </div>
                                    <div className="pkg-body">
                                        <div className="pkg-meta-top">
                                            <div className="pkg-location">
                                                <MapPin size={13} />
                                                <span>{pkg.country}</span>
                                            </div>
                                            <div className="pkg-duration">
                                                <Clock size={13} />
                                                <span>{pkg.duration}</span>
                                            </div>
                                        </div>
                                        <h3 className="pkg-name">{pkg.name}</h3>



                                        <div className="pkg-highlights">
                                            {pkg.highlights.map((h) => (
                                                <span key={h} className="pkg-highlight-tag">{h}</span>
                                            ))}
                                        </div>

                                        {/* Dynamic Footer / Buttons */}
                                        {pkg.isKazakhstan ? (
                                            <div className="pkg-footer" style={{ flexDirection: 'column', alignItems: 'stretch', gap: '10px' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <div className="pkg-from" style={{ fontWeight: 600 }}>Choose Package</div>
                                                </div>
                                                <div className="pkg-kazakhstan-btns" style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                                                    <NavLink to="/international/kazakhstan-family" target="_blank" className="btn-primary" style={{ padding: '10px 14px', fontSize: '0.82rem', justifyContent: 'center', fontWeight: '700' }}>
                                                        Kazakhstan 2 Adult + 1 Kid
                                                    </NavLink>
                                                    <NavLink to="/international/kazakhstan-group" target="_blank" className="btn-outline-green" style={{ padding: '9px 14px', fontSize: '0.82rem', justifyContent: 'center', fontWeight: '700', borderColor: 'var(--forest-600)', color: 'var(--forest-600)', background: 'transparent' }}>
                                                        Kazakhstan 4 Adult + 3 Kids
                                                    </NavLink>
                                                </div>
                                            </div>
                                        ) : pkg.isGeorgia ? (
                                            <div className="pkg-footer" style={{ flexDirection: 'column', alignItems: 'stretch', gap: '10px' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <div>
                                                        <div className="pkg-from">Starting from</div>
                                                        <div className="pkg-price">{pkg.price}</div>
                                                    </div>
                                                </div>
                                                <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
                                                    <NavLink to="/contact" className="btn-primary" style={{ flex: 1, padding: '10px', fontSize: '0.8rem', justifyContent: 'center', fontWeight: '700' }}>
                                                        Book Now
                                                    </NavLink>
                                                    <NavLink to="/international/georgia" target="_blank" className="btn-outline-green" style={{ flex: 1, padding: '9px', fontSize: '0.8rem', justifyContent: 'center', fontWeight: '700', borderColor: 'var(--forest-600)', color: 'var(--forest-600)', background: 'transparent' }}>
                                                        View Details
                                                    </NavLink>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="pkg-footer">
                                                <div>
                                                    <div className="pkg-from">Starting from</div>
                                                    <div className="pkg-price">{pkg.price}</div>
                                                </div>
                                                <NavLink to="/contact" className="btn-primary pkg-book-btn">
                                                    <span>Book Now</span>
                                                    <ArrowRight size={14} />
                                                </NavLink>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ===== CARS ===== */}
            {activeTab === 'cars' && (
                <section className="section content-section" key="cars">
                    <div className="container">
                        <div className="section-header aos">
                            <div className="section-badge">Fleet</div>
                            <h2 className="heading-lg">Premium Car Rentals</h2>
                            <div className="section-divider" />
                            <p>
                                Airport pickups, luxury chauffeur rides, family SUVs, and self-drive options.
                                Every car serviced to the highest standard.
                            </p>
                        </div>
                        <div className="cars-grid">
                            {cars.map((car, i) => (
                                <div key={car.id} className={`car-card aos aos-scale aos-delay-${(i % 2) + 1}`}>
                                    <div className="car-img-wrap">
                                        <img src={car.img} alt={car.name} className="car-img" loading="lazy" />
                                        <div
                                            className="car-tag"
                                            style={{ background: tagColors[car.tag] || '#19351c' }}
                                        >
                                            {car.tag}
                                        </div>
                                    </div>
                                    <div className="car-body">
                                        <div className="car-type">{car.type}</div>
                                        <h3 className="car-name">{car.name}</h3>
                                        <div className="car-features">
                                            {car.features.map((f) => (
                                                <span key={f} className="car-feature">{f}</span>
                                            ))}
                                        </div>
                                        <div className="car-footer">
                                            <div className="car-capacity">
                                                <Users size={15} />
                                                <span>{car.capacity}</span>
                                            </div>
                                            <div className="car-price-wrap">
                                                <div className="car-price">{car.price}</div>
                                                <NavLink to="/contact" className="btn-primary car-book-btn">
                                                    Book <ArrowRight size={13} />
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ===== PROPERTY ===== */}
            {activeTab === 'property' && (
                <section className="section content-section" key="property">
                    <div className="container">
                        <div className="section-header aos">
                            <div className="section-badge">Accommodations</div>
                            <h2 className="heading-lg">Property Booking</h2>
                            <div className="section-divider" />
                            <p>
                                Curated stays from boutique resorts and luxury villas to 5-star hotels
                                and private vacation homes worldwide.
                            </p>
                        </div>
                        <div className="property-grid">
                            {properties.map((prop, i) => (
                                <div 
                                    key={prop.id} 
                                    className={`property-card aos aos-scale aos-delay-${(i % 2) + 1}`}
                                    onClick={(e) => handlePropertyClick(e, prop)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="property-img-wrap">
                                        <img src={prop.img} alt={prop.name} className="property-img" loading="lazy" />
                                        <div className="property-overlay" />
                                        <div
                                            className="property-tag"
                                            style={{ background: tagColors[prop.tag] || '#19351c' }}
                                        >
                                            {prop.tag}
                                        </div>
                                        <div className="property-rating">
                                            <Star size={12} fill="#c9a84c" color="#c9a84c" />
                                            <span>{prop.rating}</span>
                                            <span style={{ opacity: 0.65 }}>
                                                {prop.reviews !== undefined ? ` (${prop.reviews} reviews)` : ''}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="property-body">
                                        <div className="property-type">{prop.type}</div>
                                        <h3 className="property-name">{prop.name}</h3>
                                        <div className="property-location">
                                            <MapPin size={13} />
                                            <span>{prop.location}</span>
                                        </div>
                                        <div className="property-amenities">
                                            {prop.amenities.map((a, ai) => (
                                                <span key={ai} className="property-amenity">{a}</span>
                                            ))}
                                        </div>
                                        <div className="property-footer">
                                            <div>
                                                <div className="property-from">From</div>
                                                <div className="property-price">{prop.price}</div>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                                                <NavLink 
                                                    to={prop.isElam ? "/properties/elam-munnar" : "/properties/old-kent-estates-coorg"} 
                                                    className="btn-primary property-book-btn"
                                                >
                                                    <span>{prop.isElam ? "Explore Retreat" : "Explore Estate"}</span>
                                                    <ArrowRight size={14} />
                                                </NavLink>
                                                <NavLink to={prop.isElam ? "/properties/elam-munnar" : "/properties/old-kent-estates-coorg"} style={{ fontSize: '0.78rem', color: 'var(--gold-400)', textDecoration: 'underline', marginTop: '2px', fontWeight: 600 }}>
                                                    View Details
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Bottom CTA */}
            <section className="services-bottom-cta section-sm">
                <div className="container">
                    <div className="svc-cta-inner aos">
                        <div>
                            <h3 className="heading-md">
                                Need a Custom Package?
                            </h3>
                            <p>
                                Tell us your dream destination and budget — we'll craft the perfect plan.
                            </p>
                        </div>
                        <NavLink to="/contact" className="btn-gold">
                            <span>Get Custom Quote</span>
                            <ArrowRight size={18} />
                        </NavLink>
                    </div>
                </div>
            </section>
        </div>
    );
}
